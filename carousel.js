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
   
  } else {
    $(this).removeClass('active');
    
  }
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
 
});

});