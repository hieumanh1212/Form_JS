/*
. Tách một chức năng ra thành 1 file riêng -> Module
. Gồm 2 khái niệm
import: nạp vào
export: tách ra

Module export ra X -> sau đó sẽ import X ở chỗ cần đến

. Một module chỉ export được một default

. Module A có thể export ra default export là một default export từ thằng Module B
. Ví dụ: A muốn export default chính là cái export default của B
    export {default} from './B.js'
*/

import { testModule } from "./logger.js";
import logger from './logger.js'       //Ví dụ

console.log(logger);

console.log(testModule);

import * as logger2 from './logger2.js';        //Lấy tất cả các export từ logger và đưa về một object
console.log(logger2);
console.log(logger2.Logger2);                   //Lấy ra cái export Logger2 từ logger2
console.log(logger2.fromLogger2);               //Lấy ra cái export fromLogger2 từ logger2
