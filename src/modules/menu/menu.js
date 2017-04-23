import 'jquery-smooth-scroll';

const menu = $('.' + menu_items);

$('.' + menu_icon + ', .' + menu_close).on('click', function(e){
  e.preventDefault();
  menu.toggleClass(menu_active);
});

$('.' + menu_item).smoothScroll({
  // offset: -60,
  beforeScroll: function() {
    menu.removeClass(menu_active);
  },
  afterScroll: function(options) {
    window.location.hash = options.scrollTarget;
  }
});