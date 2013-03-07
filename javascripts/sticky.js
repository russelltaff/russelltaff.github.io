$(document).ready(function(){


  $('#github').hover(
    function(){$(this).addClass('github-hover')},
    function(){$(this).removeClass('github-hover')}
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

  $(window).scroll(function(){
    var scrollTop = 1774;
    if($(window).scrollTop() >= scrollTop){
      $('nav').css({
        'box-shadow': '0px 3px 9px rgba(124,125,125, 0.7)'
      })
    }
  })
})