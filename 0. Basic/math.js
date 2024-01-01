console.log(Math.PI);   //Số pi
console.log(Math.round(4.5)) //Làm tròn
console.log(Math.abs(-4))   //trị tuyệt đối
console.log(Math.ceil(4.1)) //Làm tròn lên
console.log(Math.floor(4.99)) //Làm tròn xuống
console.log(Math.random()) //Ngẫu nhiên 0-1
console.log(Math.floor(Math.random()*10)) //Ngẫu nhiên từ 0-10

var random = Math.floor(Math.random() * 5);
var gift = [
    '10 coins',
    '20 coins',
    '30 coins',
    '40 coins',
    '50 coins',
]
console.log(gift[random]);

console.log(Math.min(1, 2, 3, 4, 5))    //Tìm min
console.log(Math.max(1, 2, 3, 4, 5))    //Tìm max


var a = 4, b = 3;

a = a * b;
b = a/b;
a = a/b;

console.log(a);
console.log(b);


var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i].price;
    }
    console.log(sum);
}

// Expected results:
getTotal(orders) // Output: 8700000
