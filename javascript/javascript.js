$(document).ready(function() {

  // show and hide mobile navigation menu when top bar is tapped
  $('#top_links').click(function(event) {
    event.stopPropagation();
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {
      $('ul', this).slideDown(500);
    }
    else {
      $('ul', this).slideUp(500);
    }
  });

  // mobile navigation menu is hidden when user taps outside menu
  $('body').click(function() {
    $('#top_links').removeClass('active');
  });

});
