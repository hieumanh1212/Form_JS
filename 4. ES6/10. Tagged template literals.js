/*
. Có thể gọi một function qua template literals
*/

function highlight(...rest) {
    console.log(rest);
}


var brand = 'F8';
var course = 'Javascript';

highlight`Học lập trình ${course} tại ${brand}`;