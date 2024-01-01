//Callback hell
//Pyramid of doom

setTimeout(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
        setTimeout(function() {
            console.log(3);
            setTimeout(function() {
                console.log(4);
                
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

//Đây gọi là Callback hell
//Các callback sẽ thực hiện lồng nhau
//-> Giải quyết bằng Promise
