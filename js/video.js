console.log("Hello");

$(document).ready(function() {
  console.log("HELLO");
  if (window.matchMedia("(min-width: 769px)").matches) {
    console.log("show tubular");
    $('#wrapper').tubular({videoId: 'nXpVy9HWC50', mute: false});
    $('.icon-volume-up').show();
    $('.icon-pause').show();
  } else {
    console.log("show mobile");
    $('.mobile-bg').show();
  }

  $('.icon-pause').click(function() {
    $('.icon-pause').hide();
    $('.icon-play').show();
  });

  $('.icon-play').click(function() {
    $('.icon-play').hide();
    $('.icon-pause').show();
  });

  $('.icon-volume-off').click(function() {
    $('.icon-volume-off').hide();
    $('.icon-volume-up').show();
  });

  $('.icon-volume-up').click(function() {
    $('.icon-volume-up').hide();
    $('.icon-volume-off').show();
  });
});
