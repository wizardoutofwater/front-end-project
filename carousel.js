$(document).ready(function(){
    console.log( 'carousel Ready!');

  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});
$item.eq(0).addClass('active');
});