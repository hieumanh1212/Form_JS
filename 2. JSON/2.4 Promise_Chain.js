/*
. Tính chất chuỗi của Promise

*/


var promise = new Promise(
    //executor
    function(resolve, reject) {
        resolve();
    }
)

/*
- Tính chất chuỗi này giúp dễ đọc hơn so với callback hell

*/

// promise
//     .then(function() {
//         //Nếu thằng resolve được gọi
//         return 1;
//         // Nếu return về một promise thì phải chờ Promise thực
//         // hiện xong thì mới chạy tiếp then tiếp theo
//         // return new Promise(function(resolve) {

//         // })
//     })
//     .then(function(data) {  //Nhận từ thằng đằng trước
//         console.log(data);
//         return 2;
//     })
//     .then(function(data) {  //Nhận từ thằng đằng trước
//         console.log(data);
//         return 3;
//     })
//     .then(function(data) {  //Nhận từ thằng đằng trước
//         console.log(data);
//     })
//     .catch(function() {
//         //Nếu thằng reject được gọi
//         console.log('Fail');
//     })
//     .finally(function() {
//         //Nếu 1 trong 2 thằng được gọi
//         console.log('Done');
//     })


promise
    .then(function() {
        return new Promise(function(resolve, reject) {
            resolve(1);
        })
    })
    .then(function(data) {
        console.log(data);
    })

    






promise
    .then(function() {
        return new Promise(function(resolve) {

        })
    })
    .then(function(data) {  //Nhận từ thằng đằng trước
        console.log(data);
    })