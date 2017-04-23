const items = $('.' + service_item);
const tabs = $('.' + service_tab);

items.on('click', function () {
  items.removeClass(service_item_active);
  $(this).addClass(service_item_active);

  const index = $(this).index();
  tabs.removeClass(service_tab_active);
  tabs.eq(index).addClass(service_tab_active);
});