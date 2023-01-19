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
        $('header').removeClass('black');
    } 
    if( scrollValue >= $("#section02").offset().top){
        $('header').addClass('black');
    } 
    if( scrollValue >= $("#section03").offset().top){
        $('header').removeClass('black');
    } 
    if( scrollValue >= $("#section04").offset().top){
        $('header').addClass('black');
    } 
    if( scrollValue >= $("#section05").offset().top){
        $('header').removeClass('black');
    } 
    if( scrollValue >= $("footer").offset().top){
        $('header').addClass('black');
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


//7. section02_ aboutme img fix
$(window).on("scroll resize", function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    //alert(scrollPos); 알림창으로 스크롤위치 알림

    fix();

    function fix(){
        if(scrollPos > 900 ){
            $('.fix p.img').addClass('on');
        } else {
            $('.fix p.img').removeClass('on');
        }  if(scrollPos >2300 ){
            $('.fix p.img').removeClass('on');
        } 
    }
    });






//8. interesting .slide 
$(function() {
  $('.interesting .slide').slick({

    centerPadding: '100px',
    draggable : true,
    initialSlide: 3, 
    variableWidth : true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, //자동재생
    autoplaySpeed: 3500, //재생시간
    pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
   pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
}); 

    //9. timeline 오브젝트 스크롤라

    //콘솔로 스크롤 위치값 확인 가능 
    // $(window).scroll(function () {
    //     var scrollValue = $(document).scrollTop();
    //     console.log(scrollValue);
    // });

    $(document).ready(function(){
        $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if (scroll > 4600) {
            $(".time .line path").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".time .line path").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        //obj 시작
        if (scroll > 4300) {
            $(".timeLine .obj01").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj01").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4300) {
            $(".timeLine .objtxt01").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt01").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4400) {
            $(".line1").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".line1").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4500) {
            $(".timeLine .obj02").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj02").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4500) {
            $(".timeLine .objtxt02").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt02").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4500) {
            $(".color1").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".color1").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4600) {
            $(".timeLine .obj03").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj03").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4600) {
            $(".timeLine .objtxt03").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt03").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        // if (scroll > 4600) {
        //     $(".timeLine .obj03").css("animation-play-state" , "running"); //적용 후 속성
        // }
        // else{
        //     $(".timeLine .obj03").css(" animation-play-state" , "paused"); // 적용 전 속성
        // }
        // if (scroll > 4600) {
        //     $(".timeLine .objtxt03").css("animation-play-state" , "running"); //적용 후 속성
        // }
        // else{
        //     $(".timeLine .objtxt03").css(" animation-play-state" , "paused"); // 적용 전 속성
        // }
        if (scroll > 4700) {
            $(".timeLine .obj04").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj04").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4700) {
            $(".timeLine .objtxt04").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt04").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4800) {
            $(".timeLine .obj05").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj05").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4800) {
            $(".timeLine .objtxt05").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt05").css(" animation-play-state" , "paused"); // 적용 전 속성
        }

        if (scroll > 4900) {
            $(".timeLine .obj06").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj06").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4900) {
            $(".timeLine .objtxt06").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt06").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 4950) {
            $(".color2").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".color2").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 5000) {
            $(".line2").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".line2").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        
        if (scroll > 5050) {
            $(".timeLine .obj07").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj07").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 5050) {
            $(".timeLine .objtxt07").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt07").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 5200) {
            $(".color3").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".color3").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 5300) {
            $(".timeLine .obj08").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .obj08").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        if (scroll > 5300) {
            $(".timeLine .objtxt08").css("animation-play-state" , "running"); //적용 후 속성
        }
        else{
            $(".timeLine .objtxt08").css(" animation-play-state" , "paused"); // 적용 전 속성
        }
        });
    });

