$(function(){
  // find all slides
  var slides = $('.main-slide');
  // starting index
  var i = 0;
  // click listener
  $('#main-slider-next').click(function(){
    // find next index
    // i + 1 or 0 if end of slides
    i = ++i % slides.length;
    // scroll to that index
    $('.slider-wrapper').animate(
      {'left' : -(slides.eq(i).position().left)},
      600
    );
  });
});

$('.s1front-toggle').click(function(e) {
  e.preventDefault();
  $('.s1flip-box').addClass('s1flipped');
});

$('.s2front-toggle').click(function(e) {
  e.preventDefault();
  $('.s2flip-box').addClass('s2flipped');
});

$('.s3front-toggle').click(function(e) {
  e.preventDefault();
  $('.s3flip-box').addClass('s3flipped');
});


$('.s4front-toggle').click(function(e) {
  e.preventDefault();
  $('.s4flip-box').addClass('s4flipped');
});

$('.s5front-toggle').click(function(e) {
  e.preventDefault();
  $('.s5flip-box').addClass('s5flipped');
});

$('.s6front-toggle').click(function(e) {
  e.preventDefault();
  $('.s6flip-box').addClass('s6flipped');
});