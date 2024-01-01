/*
1. Var và Let / Const
. Đều dùng để khao báo, khởi tạo một biến, giá trị
. Scope: Khác nhau phạm vị truy cập
    . var có thể truy cập từ bên ngoài một block code
    . let và const chỉ có thể truy cập bên trong một block code

. Hosting: đưa lên trên
    . Chỉ có var được hosting
    . var a = 1, khi trình duyệt đọc thì sẽ đưa lên trên cùng
    tức là sẽ thành
                    var a;
                    a = 1;

2. Const và Var / Let
. Khác nhau ở chỗ GÁN
. Ví dụ:
    var / let a = 1;     a = 100;       console.log(a);         hoàn toàn bình thường
    Nhưng const a = 1;   a = 100;       -> sai -> không thể gán lại giá trị của a khi khởi tạo const

    -> Không thể sử dụng toán tử gán với CONST tới lần thứ 2. Chỉ gán 1 lần duy nhất

3. Khi nào sử dụng
. Code thuần: var
. Khi sử dụng thư viện Babel: const, let
. Khi định nghĩa biến và không gán lại biến đó -> const
*/

const a = {
    name: 'Javascript',
}

a.name = 'PHP';

console.log(a.name);        //Được vì gán cho thuộc tính name của a chứ không phải gán cho a