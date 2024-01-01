/*
. Phân rã mảng, object
 */

var arr = ['Javascript', 'PHP', 'Python'];
//Bình thường
var a = arr[0];
var b = arr[1];
var c = arr[2];

//Sử dụng Destructuring
var [a, b, c] = arr;        //Lần lượt tương ứng từng giá trị
var [a,,c] = arr;           //a = phần tử 0, c = phần từ 2, không lấy thằng phần tử 1

console.log(a,b,c);
console.log(arr);

//Giả sử mảng arr, lấy ra Javascript gán vào a thì còn PHP và Python, muốn lấy 2 thằng này ra thì sử dụng REST
//Ví dụ
var [d, ...rest] = arr;     //d sẽ là Javascript, rest sẽ là các cái còn lại
console.log(rest);


//Object
var course = {
    name: 'PHP',
    price: 1000,
    image: 'image-address'
}

var {name, price} = course;     //Phải đúng tên các key của object
var {price, ...newCourse} = course;     //Tương tự như Array, đây cũng là cách để xóa bỏ một key ở trong Object
console.log(name,price)
console.log(newCourse);


//Có thể đổi tên
var {name:newName, price:newPrice, image:newImage} = course;
console.log(newName, newPrice, newImage);

//Object con
var course2 = {
    name: 'PHP',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

var {name:parentName, children:{name:childrenName}} = course2;
console.log(parentName);
console.log(childrenName);


//Toán tử REST
function logger(...params) {
    console.log(params);
}

logger(1,2,3,4,5,6,7,8);        //Sẽ trả về một mảng gồm 8 phần tử


/*
. Toán tử REST bản chất là lấy ra các phần tử còn lại
*/
function logger(a, ...params) {     //Sẽ lấy ra các giá trị còn lại trừ phần tử đầu tiên
    console.log(params);
}


logger(1,2,3,4);


//Ví dụ với object
function logger2({name, ...params}) {
    console.log(name);
    console.log(params);
}

logger2({
    name: 'PHP',
    price: 1000,
    description: 'So Hot'
})