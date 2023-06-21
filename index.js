$(document).ready(function () {

  function resize() {
    if ($(window).width() < $(window).height()) {
      $('.offcanvas-end').removeClass('offcanvas').addClass('container-fluid');
      $('.col-lg-12').css("position", "fixed");
      $('.right-btn').css("display", "none");
      $('.btn-close').css("display", "none");
      $('viewer').css("height", "910");

    }
    console.log("window.width", $(window).width());
  }

  //watch window resize
  $(window).on('resize', function () {
    resize()
  });

  resize()


});
