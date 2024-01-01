/*
. Là một định dạng dữ liệu (chuỗi)
. JavaScript Object Notation
. JSON: có thể thể hiện dạng Number, Boolean, Null, String, Array, Object

Từ dữ liệu -> JSON: mã hóa (encode)
Từ JSON -> dữ liệu: giải mã (decode)
Thực hiện
. Stringify: Từ Javascript type -> JSON
. Parse: Từ JSON sang Javascript type
*/


//Ví dụ Parse

var a = '1'; //JSON
console.log(typeof JSON.parse(a));  //number

var bool = 'true';
console.log(typeof JSON.parse(bool));  //boolean

var nul = 'null';
console.log(typeof JSON.parse(nul));  //null

var str = '"string"';   //Thể hiện chuỗi phải thêm ""
console.log(typeof JSON.parse(str));  //string

var arr = '["Java", "PHP"]';
console.log(JSON.parse(arr));   //Array

var obj = '{"name": "Hieu", "age": 20}';
console.log(JSON.parse(obj));   //Object

console.clear();

//Ví dụ Stringify
//typeof sẽ là một string
console.log(JSON.stringify(1)); //number
console.log(JSON.stringify(true)); //boolean
console.log(JSON.stringify(null)); //null
console.log(JSON.stringify(["Java", "PHP"])); //array
console.log(JSON.stringify({
    name: 'Hieu',
    age: 20
}))