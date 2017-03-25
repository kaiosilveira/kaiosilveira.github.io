(function () {
  $(window).scroll(function() {

      if ($(window).height() > $(this).scrollTop()) {
          $('.navbar-nav').fadeOut();
      } else {
        $('.navbar-nav').fadeIn();
      }
  });

})();
