$(document).ready(function () {
    $('#date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.phone').mask('+7 (000) 000-00-00');
    $('.loyality-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
      $('.slider-header').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
      });
});