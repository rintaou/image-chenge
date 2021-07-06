'use strict';

const thumb=document.querySelectorAll('.thumb');
thumbs.forEach(function(item,index) {
    item.onclick=function(){
        document.getElementById('bigimg').src=this.dataset.image;
    }

});