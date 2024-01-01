//pop - lấy và xóa giá trị cuối mảng
//push - thêm phần tử vào cuối mảng
//shift - lấy và xóa giá trị đầu mảng
//unshift - thêm phân tử vào đầu mảng


var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    }, 
    {
        id: 2,
        name: 'Python',
        coin: 0
    }, 
    {
        id: 3,
        name: 'Java',
        coin: 350
    }, 
    {
        id: 4,
        name: '.Net',
        coin: 1000
    }, 
    {
        id: 5,
        name: '.Net',
        coin: 10000
    }, 
]

//1. forEach - Duyệt phần tử của mảng
courses.forEach(function(course, index) {
    console.log(`Index ${index}: ${course.name} has ${course.coin}`);
})

//2. Every - kiểm tra tất cả phần từ - boolean
//Kiểm tra xem tất cả khóa học đều miễn phí
var isFree = courses.every(function(course, index) {
    return course.coin == 0;
})
//Giá trị trả về sẽ là true - false
console.log(isFree);

//3. Some - giống Every nhưng
// Every thì tất cả phải đúng điều kiện
// Some thì chỉ cần 1 thằng đúng điều kiện
var isFree = courses.some(function(course, index) {
    return course.coin == 0;
})
//Giá trị trả về sẽ là true - false
console.log(isFree);


//4. find - tìm kiếm
//Tìm khóa học có tên là .Net
//Chỉ tìm kiếm thằng đầu tiên xuất hiện
var course = courses.find(function(course, index) {
    return course.name == '.Net';
})
//course sẽ lưu thông tin object khóa học
console.log(course);

//5. filter - tương tự FIND nhưng khác là nó sẽ trả
// về tất cả phần tử thỏa mãn
var course = courses.filter(function(course, index) {
    return course.name == '.Net';
})
//course sẽ lưu thông tin object khóa học
console.log(course);


//6. Map
//Sửa element trong mảng
var newCourses = courses.map(function(course){
    return {
        name : course.name + ' Pro',
        coin: course.coin * 2

    }
})

console.log(newCourses);

//7. reduce
var sum = 0;
for(var item of courses) {
    console.log(item.coin);
}
console.log(sum);

function getTotalGold(arr) {
    return arr.reduce(function(a,b) {
        return a+b.gold;
    }, 0)
}

function arrToObj(array) {
    return array.reduce((acc, item) => {
        acc[item[0]] = item[1];
        return acc;
    }, {});
}