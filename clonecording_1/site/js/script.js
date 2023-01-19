 //scroll animation
 $(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

//2.슬라이드 -1 bar .control .slide
$(function() {
    $(".control .slide").slick({ 
        arrows: true, //화살표 함
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 2000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 


//2.슬라이드 -2 section2 slide2
$(function() {
  $(".section2 .slide2").slick({ 
      arrows: true, //화살표 함
      dots: false, //닷츠
      autoplay: true, //자동재생
      fade: true, //페이드인 효과        
      autoplaySpeed: 3500, //재생시간
      pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
     pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
  });
}); 






//2.슬라이드 -2 notice
$(function() {
  $('.notice .slide2').slick({

    centerPadding: '60px',
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
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
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

