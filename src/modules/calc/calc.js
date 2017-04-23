import LazyLoad from 'vanilla-lazyload';

const selector = '.' + calc_image;
new LazyLoad({
  elements_selector: selector,
});

$('.' + calc_file_input).on('change', function(event) {
  var files = event.target.files;
  if(!files.length || !files[0].name) return;
  $('.' + calc_file_name).html(files[0].name);
});