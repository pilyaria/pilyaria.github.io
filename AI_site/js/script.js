// ---------- Multi-search UI ----------

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
    // fallback: оставляем текущее поле видимым
  }
});

// мобильная отправка (если нужна)
$('#main-submit-mobile').on('click', function () {
  $('#main-submit').trigger('click');
});

// плейсхолдеры как в оригинале
function clearText(thefield) {
  if (thefield.defaultValue === thefield.value) thefield.value = "";
}
function replaceText(thefield) {
  if (thefield.value === "") thefield.value = thefield.defaultValue;
}

// ---------- Render Key features on product page ----------

(function renderFeaturesOnProductPage() {
  const featuresWrap = document.getElementById('features-section');
  const featuresEl = document.getElementById('features');

  // если на странице нет секции фич — тихо выходим (например, на index.html)
  if (!featuresWrap || !featuresEl) return;

  // читаем id из URL
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  // объект товаров задаётся инлайном в product.html
  const productMap = window.PRODUCTS || {};
  const product = id && productMap[id];

  if (product && Array.isArray(product.features) && product.features.length) {
    featuresEl.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
    featuresWrap.hidden = false;
  } else {
    featuresWrap.hidden = true;
  }
})();
