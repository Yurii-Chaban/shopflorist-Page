// init and customize slider

$(document).ready(function(){

  $('.shopfloristqueen-slider').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    centerPadding: '20px',
    initialSlide: 1,
    arrows: true,
    slidesToShow: 3,
    focusOnSelect: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        infinite: true,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '10px',
        focusOnSelect: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        initialSlide: 1,
        focusOnSelect: false,
        slidesToShow: 1
      }
    }
    ],
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  });

});