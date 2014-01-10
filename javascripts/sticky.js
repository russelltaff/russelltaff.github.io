$(document).ready(function(){

  $('.photo_circle.ga').mouseenter(highlight_photo);
  $('.photo_circle.ga').mouseleave(unhighlight_photo);
  $('#portfolio-options span').click(filter_projects);

  $("#about_link").click(function(){
 $('html, body').animate({
   scrollTop: $("#about").offset().top
 })
});
   $("#last_nav").click(function(){
 $('html, body').animate({
   scrollTop: $("#social").offset().top
 })
});
    $("#portfolio_nav").click(function(){
 $('html, body').animate({
   scrollTop: $("#portfolio").offset().top
 })
});
  $("#homelink_project").click(function(){
 $('html, body').animate({
   scrollTop: $("#portfolio").offset().top
 })
});
  $("#homelink_product").click(function(){
 $('html, body').animate({
   scrollTop: $("#about").offset().top
 })
});


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
  $(this).addClass('northwesternga_hover', 100);
  $(this).children('h6').first().fadeIn('medium');
}
function unhighlight_photo() {
  $(this).removeClass('northwesternga_hover', 100);
  $(this).children('h6').first().fadeOut('med');
}

function filter_projects() {
  $('.selected').removeClass('selected', 500);
  $(this).addClass('selected', 300)
  var id = $(this).attr('id').replace('_filter', '');
  $('.project.in-view').hide('slide', {direction: 'right'}, 500).removeClass('in-view');
  $('#'+id).addClass('in-view').delay(300).show('slide', {direction: 'left'}, 900);
}












