// Top Navigation Transition
$(document).ready(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      $('.navigation')
        .removeClass('yeah')
        .addClass('working');
    } else {
      $('.navigation')
        .removeClass('working')
        .addClass('yeah');
    }
  });
});

// Jumbo Navigation Scroll Animation
$("a[href^='#']").click(function(e) {
  e.preventDefault();
  let position = $($(this).attr('href')).offset().top;
  $('body, html').animate(
    {
      scrollTop: position,
    },
    500
  );
});
