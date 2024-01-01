 /*
. Tham số không bắt buộc phải nhập

 */


function logger(log, type='log') {      //type có thể truyền đối số hoặc là không
    console[type](log); 
}

logger("Hello", "error");