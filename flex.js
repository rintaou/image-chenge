<<<<<<< HEAD
'use strict';

const thumb=document.querySelectorAll('.thumb');
thumbs.forEach(function(item,index) {
    item.onclick=function(){
        document.getElementById('bigimg').src=this.dataset.image;
    }

=======
'use strict';

const thumb=document.querySelectorAll('.thumb');
thumbs.forEach((item,index) => {
    item.onclick=function(){
        console.log(this.dataset.image);
    }
    
>>>>>>> d840a05e31feb562a940b250e757a3a5dd7c693b
});