'use strict';

const thumb=document.querySelectorAll('.thumb');
thumbs.forEach((item,index) => {
    item.onclick=function(){
        console.log(this.dataset.image);
    }
    
});