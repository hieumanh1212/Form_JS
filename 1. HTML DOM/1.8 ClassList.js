//Quản lý Class của một element

/*
1. add: thêm Class vào Element
2. contains: kiểm tra một Class có nằm trong Element không
3. remove: xóa Class khỏi Element
4. toggle: nếu có Class -> xóa
           nếu không có -> thêm vào

*/

var h1Element = document.querySelector('h1');
// h1Element.className = 'red';
console.log(h1Element.classList);

//Lấy độ dài class
console.log(h1Element.classList.length);

console.log(h1Element.classList[0]);
console.log(h1Element.classList.value);


//1. add
h1Element.classList.add('red', 'blue');
//Muốn thêm nhiều class thì phải chia thành nhiều phần tử khác nhau như trên


//2. contains
console.log(h1Element.classList.contains('red'));
//Kiểm tra xem có tồn tại Class red hay khôngs

//3. remove
setTimeout(() => {
h1Element.classList.remove('blue');
}, 3000);

//Thực hiện xóa class Blue sau 3 giây

//4. toggle
setInterval(() => {
    h1Element.classList.toggle('red');
}, 1000);