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


// var filterArray = courses.filter(function(course, index, array) {
//     return course.coin > 300;
// })

Array.prototype.myFilter = function(cb) {
    var output = [];
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            if(cb(this[i], i, this)) {
                output.push(this[i])
            }
            
        }

    }
    return output;
}



// Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]



