const $items = $('.' + service_item);
const $mobileItems = $('.' + service_header);
const $tabs = $('.' + service_tab);
const $window = $(window);

let currentIndex = 0;
let windowWidth = 0;

$items.on('click', changeTab);
$mobileItems.on('click', changeTab);

const calcWindowWidth = () => (windowWidth = $window.outerWidth());
$window.on('resize', calcWindowWidth);
calcWindowWidth();

const isNarrow = () => windowWidth < 768;

function changeTab() {
  const $this = $(this);
  const index = $this.data('target');
  const newTab = $tabs.filter('[data-tab=' + index + ']');

  if (index > currentIndex && isNarrow()) {
    const offset = $window.scrollTop();
    const height = $tabs.filter('[data-tab=' + currentIndex + ']').innerHeight();
    $window.scrollTop(offset - height);
  }

  $items.removeClass(service_item_active);
  $mobileItems.removeClass(service_header_active);
  $items.filter('[data-target=' + index + ']').addClass(service_item_active);
  $mobileItems.filter('[data-target=' + index + ']').addClass(service_header_active);

  $tabs.removeClass(service_tab_active);
  newTab.addClass(service_tab_active);

  currentIndex = index;
}