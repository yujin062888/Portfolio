//gallery.js
//1. 클릭시 튕기는것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault(); 
});


//2. scrolla animation
$(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: false //한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});
