var hamburgerButton = $('.header-right > a');
var hamburger = $('.hamburger-menu');

hamburgerButton.click( function () {
  hamburger.addClass('active');
});

var hamburgerButtonclose = $('.close');

hamburgerButtonclose.click( function () {
  hamburger.removeClass('active');
});

var heightHamburger = $('.hamburger-menu');

hamburgerButton.click(function () {
  heightHamburger.height('50%')
})

$('.hamburger-menu').css('min-height', '50vh');
