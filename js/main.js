//1. 클릭시 튕기는것 방지
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//2. scrolla animation
$(function(){
    $('.animate').scrolla({
        moblie : false,  //모바일버전시 활성화
        once: false //한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

//3. menuOpen 버튼
$(function(){
    $('.menuOpen a.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click',function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});

//4. fixed header
var scrollValue = 0;
scrollValue = $(document).scrollTop(); 

fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop(); 
    fixHeader();
});

function fixHeader(){
    if(scrollValue > 110) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');}
}


//5. header section별 컬러 변경
$(window).scroll(function(){
    if( scrollValue >= $("#section01").offset().top){
        $('header').removeClass('white');
    } 
    if( scrollValue >= $("#section02").offset().top){
        $('header').addClass('white');
    } 
    if( scrollValue >= $("#section03").offset().top){
        $('header').removeClass('white');
    } 
    if( scrollValue >= $("#section04").offset().top){
        $('header').addClass('white');
    } 
    if( scrollValue >= $("#section05").offset().top){
        $('header').removeClass('white');
    } 
    if( scrollValue >= $("#section06").offset().top){
        $('header').addClass('white');
    } 
    if( scrollValue >= $("footer").offset().top){
        $('header').removeClass('white');
        $('header').addClass('on');
    } 
    });


//6. footer maqee태그 적용
$(function(){
const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')

let count1 = 0
let count2 = 0 

function marqueeText(count, element, direction) {
if (count > element.scrollWidth / 4) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
}
element.style.transform = `translate3d(${direction * count}px, 0, 0)`

return count
}

function animate() {
count1++
count2++

count1 = marqueeText(count1, pTag1, -1)
count2 = marqueeText(count2, pTag2, -1)

window.requestAnimationFrame(animate)
}

function scrollHandler() {
count1 += 10
count2 += 10
}

window.addEventListener('scroll', scrollHandler)
animate()
});







