var emailKey = 'email';

var myInfo = {
    fullName: 'Dang Manh Hieu',
    age: 21,
    [emailKey]: 'manhhieu121202@gmail.com',
    getName: function() {
        return this.fullName;
    }
};

//Thêm key address
myInfo.address = 'Ha Noi, VN';


//Lấy ra
console.log(myInfo);
//Cách 1
console.log(myInfo.fullName);

//Cách 2
console.log(myInfo['fullName']);

console.log(myInfo[emailKey]);

//Xóa key-value
delete myInfo.age;
console.log(myInfo);

console.log(myInfo.getName());

//object constructor
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var ManhHieu = new User('Manh', 'Hieu', 22);
console.log(ManhHieu);

//object prototype
//Thêm thuộc tính - phương thức cho constructor
User.prototype.gender = 'Male';

