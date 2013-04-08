$(document).ready(function(){

  // $('#social-icon-container #github').hover(
  //   function(){
  //     $(this).addClass('icon-hover');
  //   },
  //   function() {
  //     $(this).removeClass('icon-hover');
  //   }
  // );
  $('#portfolio-options span').click(filter_projects);

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

function filter_projects() {
  $('.selected').removeClass('selected', 500);
  $(this).addClass('selected', 300)
  var id = $(this).attr('id').replace('_filter', '');
  $('.project.in-view').hide('slide', {direction: 'right'}, 500).removeClass('in-view');
  $('#'+id).addClass('in-view').delay(300).show('slide', {direction: 'left'}, 1000);
}











