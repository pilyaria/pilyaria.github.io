// открыть/закрыть список
$('.main-btn').on('click', function () {
  $('.search-description').slideToggle(100);
});

// выбор режима по data-target (photo / ai)
$('.search-description li').on('click', function () {
  const target = $(this).data('target'); // 'photo' или 'ai'

  // меняем подпись на кнопке (убираем 'By ')
  $('.search-large').text($(this).text().replace(/^By\s+/i, ''));

  $('.search-description').hide();

  // показать нужное поле, если оно существует
  const $field = $('.main-' + target);
  if ($field.length) {
    $('.main-input').hide();
    $field.show();
  } else {
    console.warn('No input for mode:', target);
    // fallback: ничего не скрываем дополнительно
  }
});

// мобильная отправка (если нужна)
$('#main-submit-mobile').on('click', function () {
  $('#main-submit').trigger('click');
});

// плейсхолдеры как в оригинале
function clearText(thefield) {
  if (thefield.defaultValue === thefield.value) {
    thefield.value = "";
  }
}
function replaceText(thefield) {
  if (thefield.value === "") {
    thefield.value = thefield.defaultValue;
  }
}
