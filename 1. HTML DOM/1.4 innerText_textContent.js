var h1Element = document.querySelector('h1');
h1Element.innerHTML = 'Hello nha';


//So sánh innerText và textContent

/*
textContent sẽ lấy nguyên bản cái textNode

Ví dụ
<h1 class="heading">

        <span>Heading</span>
        
        <span>with span</span>
    </h1>
*/

var h1Element = document.querySelector('.heading');
console.log(h1Element.innerText);
console.log(h1Element.textContent);

/*
. innerText sẽ bỏ qua các thẻ HTML chỉ giữ lại text
. textContent sẽ giữ nguyên định dạng ở phía HTML
Có dấu cách -> giữ dấu cách
Có xuống dòng -> giữ xuống dòng
textContent sẽ không bị ảnh hưởng bởi style
Ví dụ:
<span style="display:none">Heading</span>
. Với innerText thì sẽ không hiển thị Heading
. Với textContent thì vẫn hiển thị Heading

-> innerText sẽ đưa ra những gì mà mình nhìn thấy
-> textContent đưa ra nguyên bản trong HTML
*/
