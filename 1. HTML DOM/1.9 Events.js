/*
Sự kiện nổi bọt
. Lắng nghe chính nó -> đi dần lên cha của nó
Ví dụ
<h1 onclick="console.log('h1')">
    <span onclick="console.log('span')>DOM events</span>
</h1>
. Khi ấn vào thẻ span, nó sẽ thực hiện sự kiện của thằng span trước
sau đó tiếp tục thực hiện sự kiện của thằng cha của nó (ở đây là h1)
. Như ví dụ trên, nó sẽ thực hiện lần lượt cả 2 events
*/


var h1Element = document.querySelector('h1');
h1Element.ondblclick = function() {
    alert("You double clicked on the H1 element");
}

//MouseEvent - PointerEvent
//PointerEvent tiên tiến hơn so với MouseEvent
h1Element.onclick = function(e) {
    console.log(e.target);
} 


inputText = document.getElementById('inputText');
inputCheckbox = document.getElementById('inputCheckbox');
inputSelect = document.getElementById('selectTag');
// //Input
// inputText.oninput = function(e) {
//     console.log(e.target.value);
// }
inputText.onkeyup = function(e) {
    console.log(e.target.value);
}
//Checkbox
inputCheckbox.onchange = function(e) {
    console.log(e.target.checked);
}

//Select
inputSelect.onchange = function(e){
    console.log(e.target.value);
}

//Event cho document
document.onkeypress = function(e) {
    console.log(e.which);   //Nhấn vào bàn phím
    switch(e.which) {
        case 13:
            console.log('ENTER');
            break;
    }
}