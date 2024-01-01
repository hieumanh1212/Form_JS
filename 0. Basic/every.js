//Gần giống Some
//Some thì chỉ cần 1 thằng True -> True
//Every thì tất cả phải True. Một thằng False -> False

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
        isFinish: true,
    }, 
    {
        id: 2,
        name: 'Python',
        coin: 0,
        isFinish: true,
        
    }, 
    {
        id: 3,
        name: 'Java',
        coin: 350,
        isFinish: true,

    }, 
    {
        id: 4,
        name: '.Net',
        coin: 1000,
        isFinish: true,

    }, 
    {
        id: 5,
        name: '.Net',
        coin: 10000,
        isFinish: true,

    }, 
]

var result = courses.every(function(course, index, array) {
    return course.isFinish;
})

console.log(result);

Array.prototype.myEvery = function(cb) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty()) {
            var result = cb(this[index], index, this);
            if(!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var result2 = courses.myEvery(function(course, index, array) {
    return course.isFinish;
})

console.log(result2);