import Baron from  'baron';

const items = $('.' + testimonials_item);
const tabs = $('.' + testimonials_tab);
const totalItems = items.length;

items.on('click', function () {
  const currentIndex = getCurrentIndex();
  const nextIndex = $(this).index(); // new tab index

  setItem(currentIndex, nextIndex)
});

$('.' + testimonials_prev).on('click', function() {
  const currentIndex = getCurrentIndex();
  const nextIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;

  setItem(currentIndex, nextIndex);
});

$('.' + testimonials_next).on('click', function() {
  const currentIndex = getCurrentIndex();
  const nextIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;

  setItem(currentIndex, nextIndex);
});

Baron({
  root:         '.baron',
  scroller:     '.baron__scroller',
  bar:          '.baron__bar',
  scrollingCls: '_scrolling',
  draggingCls:  '_dragging'
}).controls({
  track: '.baron__track',
});

function getCurrentIndex() {
  return items.filter('.' + testimonials_item_active).index();
}

function setItem(currentIndex, nextIndex){
  const currentTab = tabs.eq(currentIndex);
  const nextTab = tabs.eq(nextIndex);
  const nextItem = items.eq(nextIndex);
  const type = nextTab.data('type') || 'text';

  items.removeClass(testimonials_item_active);
  nextItem.addClass(testimonials_item_active);

  tabs.removeClass(testimonials_tab_active);
  nextTab.addClass(testimonials_tab_active);

  currentTab.find('iframe').remove();
  if (type === 'video') {
    nextTab.html('<iframe src="https://www.youtube.com/embed/' + nextTab.data('video') + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
  }
}
