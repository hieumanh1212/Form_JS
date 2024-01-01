var courses = [
    'Java',
    'Python',
    'PHP',
];

//  courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// })

Array.prototype.myForEach = function(cb) {
    for(var index in this) {
        console.log(index);
    }
}

courses.myForEach()