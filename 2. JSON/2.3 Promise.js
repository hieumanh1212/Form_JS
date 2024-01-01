/*
. Promise sinh ra để giải quyết một vấn đề gì đó trong
quá trình lập trình bất đồng bộ
. Có 3 trạng thái
1. Pending: trạng thái chờ
. Chờ thành công - thất bại

2. Fulfilled: trạng thái thành công

3. Rejected: trạng thái thất bại
*/


var promise = new Promise(
    //executor
    function(resolve, reject) {
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        resolve([
            {
                id: 1,
                name: 'javascript'
            }
        ]);
    }
)

//promise sẽ trả về 3 phương thức

promise
    .then(function(course) {
        //Nếu thằng resolve được gọi
        console.log(course);
    })
    .catch(function() {
        //Nếu thằng reject được gọi
        console.log('Fail');
    })
    .finally(function() {
        //Nếu 1 trong 2 thằng được gọi
        console.log('Done');
    })

/*
1. Promise là gì ?
. Là khái niệm sinh ra để xử lý thao tác bất đồng bộ.
. Callback hell khó nhìn, rối rắm
-> Promise được sử dụng để khắc phục callback hell
giúp code không bị sâu, đọc dễ hiểu hơn

2. Tạo Promise
. Tạo ra Promise cần tạo ra từ khóa new Promise
. Trong constructor của nó tạo ra một executor function
có 2 tham số: resolve và reject
. Gọi resolve() khi thao tác xử lý thành công
. Gọi reject() khi thao tác xử lý thất bại
. Khi sử dụng Promise thì đối tượng tạo ra sử dụng
phương thức .then và .catch
. then nhận callback function được thực thi khi resolve
được gọi
. catch nhận callback function được thực thi khi reject
được gọi
*/