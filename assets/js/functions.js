$(document).ready( function() {
   autoAnimate();
})

$(document).scroll( function() {
   animate();
   parallax();
})

function animate() {
   
   var trigAnimate = $(window).scrollTop() + ( $(window).height() * .5 );
   
   $('.viewport').addClass('show-viewport');
   
   if ( trigAnimate > $('#hero').offset().top ) {
      $('#hero .hero-container').addClass('show-hero');
   }
   
   if ( trigAnimate > $('#advantage').offset().top ) {
      $('#advantage .advantage-container').addClass('show-adv');
   }
}

function autoAnimate() {   
   var animateService = setInterval(function() {
      var randNum = Math.floor(Math.random() * $('.service > a').length) + 1;   
      $('.service > a').eq(randNum).addClass('play-service').siblings().removeClass('play-service');
   }, 800);
   
   $('.service > a').hover(function() {
      clearInterval(animateService);
      $('.service > a').removeClass('play-service');
   }, function() {
      autoAnimate();
   })
}

function parallax() {
   var scrollTop = $(this).scrollTop();
   
   $('#hero').css('background-position', 'center ' + -(scrollTop * .4) + 'px');
}
   