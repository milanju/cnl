$(document).ready(function() {
  if (window.matchMedia("(min-width: 769px)").matches) {
    $('#wrapper').tubular({videoId: 'nXpVy9HWC50', mute: true});
    $('.icon-volume-off').show();
    $('.icon-pause').show();
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
