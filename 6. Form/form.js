var div = document.querySelectorAll('.form-group');
var inputs = document.querySelectorAll('.form-control');
var errmsg = document.querySelectorAll('.form-message');

var arrInput = ['Họ tên', 'Email', 'Mật khẩu', 'Xác nhận mật khẩu'];
var regEx = [/^[a-zA-Z\s]+$/, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, /^.{8,}$/];

var btnRegister = document.querySelector('.form-submit');

//Nếu trường đúng định dạng
function isTrueFormat(index) {
    errmsg[index].innerText = '';
    div[index].classList.remove('invalid');
}


//Nếu người dùng chưa input
function notInput(input, index) {
    //Kiểm tra ô Nhập lại mật khẩu
    if (input.getAttribute('name') == 'password_confirmation') {
        errmsg[index].innerText = 'Vui lòng ' + arrInput[index];
        div[index].classList.add('invalid');
    }
    //Không phải ô Nhập lại mật khẩu
    else {
        errmsg[index].innerText = 'Vui lòng nhập ' + arrInput[index];
        div[index].classList.add('invalid');
    }
}

//Nếu người dùng nhập Input
function Input(input, index) {
    var inputValue = input.value;
    var regex = regEx[index];
    //Xác nhận mật khẩu
    if(index == 3) {
        //Nếu mật khẩu không trùng khớp
        if(inputValue !== inputs[index-1].value) {
            errmsg[index].innerText = 'Mật khẩu không trùng khớp';
            div[index].classList.add('invalid');
            return false;
        }
        else {
            isTrueFormat(index);
            return true;
        }
    }
    //Các trường khác
    else {
        //Nếu sai định dạng
        if (!regex.test(inputValue)) {
            errmsg[index].innerText = 'Vui lòng nhập đúng định dạng ' + arrInput[index];
            div[index].classList.add('invalid');
            return false;
        }
        //Đúng định dạng
        else {
            isTrueFormat(index);
            return true;
        }
    }
}

//button Đăng ký
btnRegister.onclick = function (e) {
    e.preventDefault();
    var checkEmpty = true;
    div.forEach(function (div, index) {
        //Nếu trường còn rỗng
        if (inputs[index].value == '') {
            notInput(inputs[index], index);
            checkEmpty = false;
        }
        //Trường hợp đã nhập
        else {
            if (!Input(inputs[index], index)) {
                checkEmpty = false;
            }
        }
    })
    if (checkEmpty) {
        alert('Đăng ký thành công');
    }

}


//Duyệt từng ô input
inputs.forEach(function (input, index) {
    //Sự kiện onblur cho từng ô input
    input.onblur = function () {
        //Nếu người dùng chưa nhập input
        if (input.value == '') {
            notInput(input, index);
        }
        //Nếu người dùng đã nhập ô input
        else {
            Input(input, index);
        }
    }
})

