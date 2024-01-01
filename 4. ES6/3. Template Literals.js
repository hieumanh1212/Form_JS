let name = 'Javascript';
let fullName = `Khóa học: ${name}`;
console.log(fullName);

console.log(`Template nội suy với \${}`);       //Thêm backslash để in được ra ${}

//Thay vì
const lines = 'Line 1\nLine 2\nLine 3';
console.log(lines);

//thì sử dụng

const newlines = `Line 1
Line 2
Line 3`;
console.log(newlines);

//Ở trong template literals thì code như nào -> hiển thị y hệt như thế