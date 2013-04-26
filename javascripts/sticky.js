$(document).ready(function(){

  $('.photo_circle.duke').mouseenter(highlight_photo);
  $('.photo_circle.duke').mouseleave(unhighlight_photo);
  $('.photo_circle.ga').mouseenter(highlight_photo);
  $('.photo_circle.ga').mouseleave(unhighlight_photo);
  $('.photo_circle.new_york').mouseenter(highlight_map);
  $('.photo_circle.new_york').mouseleave(unhighlight_map);
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

function highlight_photo() {
  $(this).addClass('dukega_hover', 100);
  $(this).children('h6').first().fadeIn('medium');
}
function unhighlight_photo() {
  $(this).removeClass('dukega_hover', 100);
  $(this).children('h6').first().fadeOut('med');
}
function highlight_map() {
  $(this).addClass('map_hover', 200);
  $(this).children('h6').first().fadeIn('medium');
}
function unhighlight_map() {
  $(this).removeClass('map_hover', 200);
  $(this).children('h6').first().fadeOut('medium');
}

function filter_projects() {
  $('.selected').removeClass('selected', 500);
  $(this).addClass('selected', 300)
  var id = $(this).attr('id').replace('_filter', '');
  $('.project.in-view').hide('slide', {direction: 'right'}, 500).removeClass('in-view');
  $('#'+id).addClass('in-view').delay(300).show('slide', {direction: 'left'}, 900);
}











