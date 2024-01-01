var html =
    `
    <table width="500" border="1" cellspacing="2" cellpadding="5">
        <tr>
            <td>ID</td>
            <td>Tên khóa học</td>
            <td>Mã khóa học</td>
            <td colspan="2">Hành động</td>
        </tr>
    `

var apiURL = 'http://localhost:3000/courses';

var divElement = document.getElementById('list-course');
var inputName = document.getElementById('inputName');
var inputDes = document.getElementById('inputDes');
var idFake = 0;
//Hàm lấy danh sách khóa học
getCourse();
function getCourse() {
    fetch(apiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showCourse(data);
        })
}

//Hàm hiển thị dữ liệu lên view
function showCourse(data) {
    var htmls = data.map(function(data) {
        return `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.description}</td>
                <td><button onclick="clickUpdate(${data.id}, '${data.name}', '${data.description}')">Sửa</button></td>
                <td><button onclick="deleteCourse(${data.id})">Xóa</button></td>
            </tr>`
    })
    html += htmls.join('');
    html += '</table>'
    divElement.innerHTML = html;
}

//Sự kiện click cho button Thêm
var addButton = document.getElementById('addButton');
addButton.onclick = function() {
    data = {
        name: inputName.value,
        description: inputDes.value
    }
    if(addButton.textContent == 'Thêm') {
        addCourse(data);
    }
    else {
        updateCourse(data);
    }

}


//Hàm thêm khóa học
function addCourse(data) {
    var option = {
        method: "POST",
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data),
    }
    fetch(apiURL, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showCourse(data);
        })
}

//Xóa khóa học
function deleteCourse(id) {
    var option = {
        method: "DELETE",
        headers: {'Content-type': 'application/json'},
    }
    fetch(apiURL + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showCourse(data);
        })
}

//Sửa khóa học
function clickUpdate(id, name, description) {
    idFake = id;
    inputName.value = name;
    inputDes.value = description;
    addButton.textContent = 'Sửa';
}

function updateCourse(data) {
    var option = {
        method: "PUT",
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data),
    }
    fetch(apiURL + '/' + idFake, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            showCourse(data);
        })
}