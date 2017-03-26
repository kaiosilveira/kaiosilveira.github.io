(function () {
  $(window).scroll(function() {

      if ($(window).height() > $(window).scrollTop()) {
        $('.navbar-nav').fadeOut();
      } else {
        $('.navbar-nav').fadeIn();
      }
  });
})();
