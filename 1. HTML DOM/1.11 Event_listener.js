var btnElement = document.querySelector('#buttonPropagation');

function viec1() {
    console.log('Viec 1');
}

btnElement.addEventListener('click', viec1);


//Xóa event
setTimeout(function() {
    btnElement.removeEventListener('click', viec1);
}, 3000);


/*
1. DOM Event sử dụng khi muốn lắng nghe và không có nhu cầu gỡ
2. addEventListener sử dụng khi muốn xử lý nhiều việc trong
một event và có nhu cầu gỡ event
*/