//Dùng Fetch để lấy dữ liệu từ Back-end -> Front-end
/*
. Gọi lên một API để lấy ra nội dung lưu trữ ở phía Back-end và phía Front-end sẽ lấy ra cái nội dung đó để
hiển thị lên trang web

. API là cổng giao tiếp giữa các phần mềm

. Back-end sẽ có API
. Front-end dùng Fetch để lấy dữ liệu từ API đó theo định dạng JSON/XML
. Sau đó dùng JSON.parse -> Javascript types -> Render ra giao diện với HTML
*/

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

fetch(postAPI)
    .then(function(response) {
        return response.json();     //Một promise
    })
    .then(function(post) {
        // console.log('Post: ', post);   //Chứa toàn bộ danh sách các bài viết
        var htmls = post.map(function(post) {
            return `<h2>${post.title}</h2>
            <p>${post.body}</p>`;
        })
        console.log(htmls);
        var html = htmls.join('');
        document.getElementById("post-block").innerHTML = html;
    })
    .catch(function(err) {
        console.log(err); 
    })