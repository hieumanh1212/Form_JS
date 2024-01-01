 var h1Element = document.querySelector('h1');
 console.log(h1Element);


 //Hiển thị ra các Style của Element (giống trong CSS)
 console.log(h1Element.style);

 //Ví dụ
 h1Element.style.color = 'lime';
 h1Element.style.backgroundColor = 'red';

 //Cách làm gọn hơn - thêm nhiều style mà không cần phải làm từng dòng
 Object.assign(h1Element.style, {
    color: 'blue',
    backgroundColor: 'yellow',
 })

 //Get ra
 console.log(h1Element.style.backgroundColor); 