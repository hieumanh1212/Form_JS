/*
Giúp
1. Định nghĩa key : value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến
*/

var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function() {
        return this.name;
    }
}

//1. Nếu 2 cái key value giống nhau thì có thể viết
var course = {
    name,
    price,
    //2. Định nghĩa method
    getName() {
        return name;
    }
}

//3. Định nghĩa key
var fileName = 'name';
var filePrice = 'price';
//Gán biến cho các key
const course2 = {
    [fileName]: 'Javascript',
    [filePrice]: 1000
}
console.log(course2);

