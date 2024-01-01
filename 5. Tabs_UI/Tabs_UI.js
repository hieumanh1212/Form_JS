var divHead = document.querySelectorAll('.tab-item');
var divPane = document.querySelectorAll('.tab-pane');
var line = document.querySelector('.line');

console.log(divHead);

line.style.left = document.querySelector('.tab-item.active').offsetLeft + 'px';
line.style.width = document.querySelector('.tab-item.active').offsetWidth + 'px';

divHead.forEach(function(div, index) {
    div.onclick = function() {
        var pane = divPane[index];
        
        document.querySelector('.tab-item.active').classList.remove('active');
        this.classList.add('active');

        document.querySelector('.tab-pane.active').classList.remove('active');
        pane.classList.add('active');

        line.style.left = div.offsetLeft + 'px';
        line.style.width = div.offsetWidth + 'px';

    }
})