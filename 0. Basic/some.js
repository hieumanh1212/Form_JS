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
        isFinish: false,
        
    }, 
    {
        id: 3,
        name: 'Java',
        coin: 350,
        isFinish: false,

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
        isFinish: false,

    }, 
]



Array.prototype.mySome = function(callback) {
    for(var index in courses) {
        if(this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}

var result = courses.mySome(function(course, index, array) {
    console.log(course);
    return course.isFinish;
})

console.log(result);