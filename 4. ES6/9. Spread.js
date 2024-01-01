var arr = ['Javascript', 'Ruby', 'PHP'];

var arr2 = ['ReactJS', 'Dart'];

//Mảng arr3 là nối của arr và arr2
var arr3 = [...arr2, ...arr];
console.log(arr3);

//Object

var object1 = {
    name: 'PHP'
}

var object2 = {
    price: 1000
}

var object3 = {...object1, ...object2};

console.log(object3);