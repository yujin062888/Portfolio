 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function() {
    $(".visual .slide").slick({ 
        arrows: true, //화살표 사용함
        dots: false, //닷츠 (숫자)
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 4000, //재생시간 4초
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 

//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 