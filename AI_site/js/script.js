$('.main-btn').click(function() {
  $('.search-description').slideToggle(100);
});

$('.search-description li').click(function() {
  var target = $(this).html();
  var newTarget = target.replace('By ', '');

  // меняем текст кнопки
  $('.search-large').html(newTarget);

  // скрываем список
  $('.search-description').hide();

  // показываем нужное поле
  $('.main-input').hide();
  $('.main-' + newTarget.toLowerCase()).show();
});

$('#main-submit-mobile').click(function() {
  $('#main-submit').trigger('click');
});

// вспомогательные функции для плейсхолдеров
function clearText(thefield) {
  if (thefield.defaultValue == thefield.value) {
    thefield.value = "";
  }
}
function replaceText(thefield) {
  if (thefield.value == "") {
    thefield.value = thefield.defaultValue;
  }
}
