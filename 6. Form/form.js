var div = document.querySelectorAll('.form-group');
var inputs = document.querySelectorAll('.form-control');
var errmsg = document.querySelectorAll('.form-message');

var arrInput = ['Họ tên', 'Email', 'Mật khẩu', 'Xác nhận mật khẩu'];

var btnRegister = document.querySelector('.form-submit');

//Nếu trường đúng định dạng
function isTrueFormat(index) {
    errmsg[index].innerText = '';
    div[index].classList.remove('invalid');
}


//Nếu người dùng chưa input
function notInput(input, index) {
    //Kiểm tra ô Nhập lại mật khẩu
    if(input.getAttribute('name') == 'password_confirmation') {
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
            switch(input.getAttribute('name')) {
                //Họ tên
                case 'fullname':
                    //Kiểm tra định dạng họ tên
                    var fullnameRegex = /^[a-zA-Z\s]+$/;
                    //Nếu sai
                    if(!fullnameRegex.test(inputValue)) {
                        errmsg[index].innerText = 'Vui lòng nhập đúng định dạng họ tên';
                        div[index].classList.add('invalid');
                        return false;
                    }
                    //Nếu đúng
                    else {
                        isTrueFormat(index);
                        return true;
                    }
                    break;
                //Email
                case 'email':
                    //Kiểm tra định dạng Email
                    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    //Nếu sai
                    if(!emailRegex.test(inputValue)) {
                        errmsg[index].innerText = 'Vui lòng nhập đúng định dạng email';
                        div[index].classList.add('invalid');
                        return false;
                    }
                    //Nếu đúng
                    else {
                        isTrueFormat(index);
                        return true;
                    }
                    break;
                //Mật khẩu
                case 'password':
                    //Kiểm tra định dạng Mật khẩu
                    var passRegex = /^.{8,}$/;
                    //Nếu sai
                    if(!passRegex.test(inputValue)) {
                        errmsg[index].innerText = 'Mật khẩu tối thiểu 8 ký tự';
                        div[index].classList.add('invalid');
                        return false;
                    }
                    //Nếu đúng
                    else {
                        isTrueFormat(index);
                        return true;
                    }
                    break;
                case 'password_confirmation':
                    //Kiểm tra định dạng Mật khẩu
                    var pass = inputs[index-1].value;
                    //Nếu không trùng khớp
                    if(input.value !== pass) {
                        errmsg[index].innerText = 'Mật khẩu không trùng khớp';
                        div[index].classList.add('invalid');
                        return false;
                    }
                    //Nếu trùng khớp
                    else {
                        isTrueFormat(index);
                        return true;
                    }
                    break;
            }
}

//button Đăng ký
btnRegister.onclick = function(e) {
    e.preventDefault();
    var checkEmpty = true;
    div.forEach(function(div, index) {
        //Nếu trường còn rỗng
        if(inputs[index].value == '') {
            notInput(inputs[index], index);
            checkEmpty = false;
        }
        else {
            if(!Input(inputs[index], index)) {
                checkEmpty = false;
            }
        }
    })
    if(checkEmpty) {
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

