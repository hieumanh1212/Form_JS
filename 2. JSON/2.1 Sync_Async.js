/*
- Sync (đồng bộ)
Viết trước chạy trước, viết sau chạy sau


- Async (bất đồng bộ)
Viết trước nhưng chưa chắc đã chạy trước
Ví dụ
. setTimeout
. setInterval
. fetch
. XMLHttpRequst
. file reading
. request animation frame
Đây là các trường hợp sẽ xảy ra bất đồng bộ
*/

/*
setTimeout(function() {
    console.log(1);
}, 2000);

console.log(2);

//Trong trường hợp này, 2 được in ra trước rồi 2 giây
//sau thì mới in ra 1 -> bất đồng bộ Async

setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)


*/


//sync
setTimeout(() => {
    console.log(1);
}, 3000);
console.log(2);

