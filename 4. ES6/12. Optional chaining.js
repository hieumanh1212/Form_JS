/*
Sử dụng Optional chaing (?.) khi chưa biết chắc chắn key có tồn tại hay không
 */

//Ví dụ
const obj = {
    name: 'Bim',
    cat1: {
        name: 'Bim 1',
        cat2:{
            name: 'Bim 2',
            cat3: {
                name: 'Bim 3',
                
            }
        }
    }
}

//Trong trường hợp không biết có cat123 hay không

if(obj?.cat1?.cat2?.cat3) {
    console.log(obj.cat1.cat2.cat3.name)
}