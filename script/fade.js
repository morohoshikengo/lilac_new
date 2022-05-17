function fadeInAnime() {
  $(".fadeInContents").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    } else {
      $(this).removeClass("fadeIn");
    }
  });
}

function fadeUpAnime() {
    $(".fadeUpContents").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp");
      } else {
        $(this).removeClass("fadeUp");
      }
    });
  }

function slideAnime() {
  $(".upAnime").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeUpDown");
      $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
    } else {
      $(this).removeClass("slideAnimeUpDown");
      $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
    }
  });
}

$(window).scroll(function () {
  fadeInAnime();
  fadeUpAnime();
  slideAnime();
});

$(window).on("load", function () {
  fadeInAnime();
  fadeUpAnime();
  slideAnime();
});
