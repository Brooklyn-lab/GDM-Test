let header = $('.header'),
   scrollPrev = 0;

$(window).scroll(function () {
   let scrolled = $(window).scrollTop();

   if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass('out');
   } else {
      header.removeClass('out');
   }
   scrollPrev = scrolled;
});