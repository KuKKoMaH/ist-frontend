import 'magnific-popup';

$('.' + examples_item).on('click', function () {
  const id = $(this).data('id');
  const item = window.examples[id];
  openPopup(item);
});

$('.' + clients_item).on('click', function () {
  const id = $(this).data('id');
  const item = window.clients[id];
  openPopup(item);
});

function openPopup( data ) {
  $.magnificPopup.open({
    type:         'inline',
    items:        { src: '#popup' },
    removalDelay: 160,
    callbacks:    {
      open: function () {
        const content = $(this.content);
        content.find('.' + popup_title).html(data.title);
        content.find('.' + popup_text).html(data.text);
        content.find('.' + popup_done).html(data.done);
        content.find('.' + popup_s).html(data.s);
        content.find('.' + popup_address).html(data.address);

        const thumbs = content.find('.' + popup_thumbs);
        thumbs.html('');
        if (data.photos && Array.isArray(data.photos)) {
          data.photos.map(( photo ) => {
            const $el = $('<img class="' + popup_thumb + '" src="' + photo.thumb + '" width="198" height="115"/>');
            thumbs.append($el);
          });
          $('.' + popup_photo).attr('src', data.photos[0].full);

          $('.' + popup_thumb).on('click', function () {
            const index = $(this).index();
            $('.' + popup_photo).attr('src', data.photos[index].full);
          });
        }

      }
    }
  })
}