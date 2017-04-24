import 'jquery-smooth-scroll';

const menu = $('.' + menu_items);

$('.' + menu_icon + ', .' + menu_close).on('click', function ( e ) {
  e.preventDefault();
  menu.toggleClass(menu_active);
});

$('.' + menu_item).smoothScroll({
  // offset: -60,
  beforeScroll: function () {
    menu.removeClass(menu_active);
  },
  afterScroll:  function ( options ) {
    window.location.hash = options.scrollTarget;
  }
});

const $window = $(window);
const $header = $('.' + header_wrapper);
const $menu = $('.' + menu_wrapper);
let headerHeight;
let menuActive = false;
calcHeaderHeight();
checkMenu();
$window
  .on('resize', calcHeaderHeight)
  .on('scroll', checkMenu);

function calcHeaderHeight() {
  headerHeight = $header.outerHeight();
}

function checkMenu() {
  const offset = $window.scrollTop();
  if (offset > headerHeight && !menuActive) {
    $menu.addClass(menu_wrapper_active);
    menuActive = true;
  } else if(offset < headerHeight && menuActive) {
    $menu.removeClass(menu_wrapper_active);
    menuActive = false;
  }
}