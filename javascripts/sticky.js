$(document).ready(function(){


  $('#social-icon-container #github').hover(
    function()
  {
    $(this).addClass('test_a');
  },
    function() {
    $(this).removeClass('test_a');
  });

  $('#social-icon-container #linkedin').hover(
    function(){$(this).addClass('linkedin-hover')},
    function(){$(this).removeClass('linkedin-hover')}
  );

  $(window).scroll(function(){
    var scrollTop = 566;
    if($(window).scrollTop() >= scrollTop){
      // sticky nav
      $('nav').css({
        position : 'fixed',
        top : '0',
        padding : '8px 0 20px'
      });

      // logo fade-in
      $('a#logo-link').fadeIn('slow', function() {
        // Animation complete
      });

      $('#navigation-bar').css({
        bottom: 0,
      });
    }

    if($(window).scrollTop() < scrollTop){
      $('nav').removeAttr('style');
      $('a#logo-link').fadeOut('slow', function() {
        // Animation complete
      });
      $('#navigation-bar').removeAttr('style');

    }
  })
})