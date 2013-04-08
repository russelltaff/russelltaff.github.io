$(document).ready(function(){

  // $('#social-icon-container #github').hover(
  //   function(){
  //     $(this).addClass('icon-hover');
  //   },
  //   function() {
  //     $(this).removeClass('icon-hover');
  //   }
  // );
  $()

  $(window).scroll(function(){
    var scrollTop = 637;
    if($(window).scrollTop() >= scrollTop){
      // sticky nav
      $('nav').css({
        position : 'fixed',
        top : '0',
        padding : '0px 0 10px',
        'text-align' : 'right'
      });

      // logo fade-in
      $('a#logo-link').fadeIn('medium', function() {
        // Animation complete
      });


    }

    if($(window).scrollTop() < scrollTop){
      $('a#logo-link').fadeOut('slow', function() {
        // Animation complete
      });
      $('nav').removeAttr('style');

      $('#navigation-bar').removeAttr('style');

    }
  })
})