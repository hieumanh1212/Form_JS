/*
1. preventDefaut: loại bỏ hành vi mặc định của ứng dụng
2. stopPropagation: loại bỏ hành vi nổi bọt (thực hiện event của thằng con -> thằng cha)
*/


//Bài toán: kiểm tra href nếu có chữ f8.edu.vn thì mới chuyển trang
//Không có thì không chuyển trang
var aElement = document.querySelectorAll('a');
// console.log(aElement[1]);

for(var i = 0; i < aElement.length; i++) {
    aElement[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();         //Loại bỏ hành vi mặc định của thẻ a
            console.log(e.target.href);
        }
    }
}


//2. stopPropagation
var divPropagation = document.querySelector('#divPropagation');
var buttonPropagation = document.querySelector('#buttonPropagation');

divPropagation.onclick = function(e) {
    // e.stopPropagation();
    console.log('div Event');
}

buttonPropagation.onclick = function(e) {
    e.stopPropagation();        //Không thực hiện nổi bọt (tức là không thực hiện evetn của thằng cha)
    console.log('Only button event');
}