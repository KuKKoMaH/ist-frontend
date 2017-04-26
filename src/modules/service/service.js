const items = $('.' + service_item);
const mobile_items = $('.' + service_header);
const tabs = $('.' + service_tab);

items.on('click', changeTab);
mobile_items.on('click', changeTab);

function changeTab() {
  items.removeClass(service_item_active);
  mobile_items.removeClass(service_header_active);
  $(this).addClass(service_item_active);

  const index = $(this).data('target');
  tabs
    .css({maxHeight: ''})
    .removeClass(service_tab_active);
  const newTab = tabs.filter('[data-tab=' + index + ']');

  newTab
    .css({maxHeight: newTab.find('.' + service_inner).innerHeight()})
    .addClass(service_tab_active);
}