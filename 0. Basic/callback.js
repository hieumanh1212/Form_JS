// 1. Là hàm
// 2. Được truyền qua đối số

function myFunction(param) {
    param('123')
}

function myCallback(value) {
    console.log('Đây là callback: ' + value);
}

myFunction(myCallback);

//Tự định nghĩa thêm myMap giống map
Array.prototype.myMap = function(cb) {
    var output = [];
    for(var i = 0; i < this.length; i++)
    {
        // console.log(this[i]);
        output.push(cb(this[i], i));
    }
    return output;
}



// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]


