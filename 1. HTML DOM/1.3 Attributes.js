//Ví dụ
/*
Có thẻ 
<a href="...." id="id1" class="class1"> Text </a>
thì href="...." id="id1" class="class1" chính là các Attribute

*/


var h1element = document.querySelector('h1');
console.log(h1element);

//Thêm attribute
h1element.title = 'Heading';
h1element.className = 'classFirst';


//Tên attribute - giá trị của attribute 
h1element.setAttribute("data-number","1");


//Cách getAttribute
var number = h1element.getAttribute("data-number");
console.log(h1element.title);