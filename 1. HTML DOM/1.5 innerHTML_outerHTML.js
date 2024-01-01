/*
Giả sử muốn thêm một thẻ <h1> vào trong thẻ <div> có sẵn thì
innerText và textContent sẽ không làm được
-> Sử dụng innerHTML và outerHTML
 */

var h1Element = document.querySelector('h1');
h1Element.innerHTML = '<h2>Hello from h1</h2>';

/*
. innerHTML là ở bên trong của thẻ HTML
. outerHTML là toàn bộ của thẻ HTML (bao gồm nó)
*/

