var divElement = document.getElementById('list-course');
console.log(divElement);

var apiURL = 'http://localhost:3000/courses';

main();
//Hàm chính
function main() {
    getCourse();
}

//Hàm lấy ra danh sách các khóa học
function getCourse() {
    fetch(apiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            showCourse(course);
        })
}

//Hàm hiển thị danh sách khóa học lên HTML
function showCourse(course) {
    var htmls = course.map(function(data) {
        return `<h2>${data.name}</h2> <h4>${data.description}</h4> <button onclick="updateCourse(${data.id})">Sửa</button> <button onclick="deleteCourse(${data.id})">Xóa</button>`;
    })
    divElement.innerHTML = htmls.join('');
}

//Hàm thêm khóa học
function createCourse() {
    var ipName = document.getElementById('inputName');
    var ipDes = document.getElementById('inputDes');
    var data = {
        name: ipName.value,
        description: ipDes.value
    };
    var option = {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(data)
    }
    fetch(apiURL, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            showCourse(course);
        })
}

//Thêm khóa học
var btnAdd = document.getElementById('addButton');
btnAdd.onclick = function() {
    createCourse();
}

//Xóa khóa học
function deleteCourse(id) {
    var option = {
        method: 'DELETE',
        headers: {'Content-type' : 'application/json'},
    }
    fetch(apiURL + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(course) {
            showCourse(course);
        })
}
