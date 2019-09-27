$(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [990, 1],
    itemsTablet: [768, 1],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    autoPlay: true
  });
});
$(".btn-group, .dropdown").hover(
  function() {
    $(">.dropdown-menu", this)
      .stop(true, true)
      .fadeIn("fast");
    $(this).addClass("open");
  },
  function() {
    $(">.dropdown-menu", this)
      .stop(true, true)
      .fadeOut("fast");
    $(this).removeClass("open");
  }
);
