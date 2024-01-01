//Hàm thông thường

//declaration function
function logger(log) {
    console.log(log);
}

logger('Hahaha');


//expression function
const logger2 = function(log) {
    console.log(log);
}

logger2('hohoho')


//Arrow function
//Ví dụ
const logger3 = log => console.log(log);

logger3("Log 3");
//Ví dụ

const logger4 = log => {
    console.log("Hello" + log);
}

logger4("Log 4");
//Ví dụ
const sum = (a, b) => {
    return a + b;
}

console.log(sum(2,4));

//Hoặc
const sum2 = (a,b) => a+b;
console.log(sum2(2,4));

//Áp dụng với Object
const getObject = (a,b) => ({a:b, b:b});
console.log(getObject(5,2));
