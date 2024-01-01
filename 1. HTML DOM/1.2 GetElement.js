//Có thể get qua: ID, Class, TagName, CSS Selector, HTML Collection


//1. ID
var firstid = document.getElementById('firstid');
console.log(firstid);


//2. Classname
var getClass = document.getElementsByClassName('firstclass');
console.log(getClass); //Trả về HTML Collection

//3. Tagname
var getTagName = document.getElementsByTagName('h1');
console.log(getTagName); //Trả về HTML Collection


//4. CSS Selector
var getCSSSelector = document.querySelector('.box .heading-2:first-child');
console.log(getCSSSelector);

var getCSSSelector = document.querySelectorAll('.box .heading-2:first-child');
console.log(getCSSSelector[0]);    //Trả về NodeList - tương tự HTMLCollection

//5. HTML Collection
console.log(document.forms);    //Trả về các thẻ form
console.log(document.forms[0]);

console.log(document.forms['form-1']);  //Lấy form có id là form-1

//Cách lấy thằng con
/*Ví dụ
<div class="box">
        <h2 class="heading-2">Heading-2</h2>
        <h2 class="heading-2">Heading-2</h2>
        <h2 class="heading-2">Heading-2</h2>
        <h2 class="heading-2">Heading-2</h2>
    </div>
*/
console.clear();
var box = document.querySelector('.box');
console.log(box);
console.log(box.querySelector('.heading-2'));
