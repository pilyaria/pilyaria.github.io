$(function() {
  // Общая настройка для всех устройств
  const totalSlides = 3; // Количество карточек
  const slideInterval = 5000; // Интервал переключения (5 секунд)
  let currentIndex = 1; // Начинаем с первой карточки

  // Функция для переключения слайдов
  function switchSlide() {
    currentIndex = currentIndex % totalSlides + 1; // Переключение на следующий слайд
    document.getElementById(`item-${currentIndex}`).checked = true;

    // Если десктопная версия, то добавляем иконку лупы
    if ($(window).width() >= 1024) {
      addMagnifierIcon(); // Добавление иконки после переключения слайда
    }
  }

  // Интервал переключения слайдов
  let autoSlide = setInterval(switchSlide, slideInterval);

  // Остановка автоматического переключения при клике на слайд
  document.querySelectorAll('input[name="slider"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      clearInterval(autoSlide);  // Останавливаем текущий интервал
      setTimeout(() => {
        autoSlide = setInterval(switchSlide, slideInterval);  // Перезапускаем интервал
      }, 5000);
    });
  });

  // Автопереключение при клике на карточку
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      switchSlide();  // Переключаем слайд
      clearInterval(autoSlide);  // Останавливаем автоматическое переключение
      setTimeout(() => {
        autoSlide = setInterval(switchSlide, slideInterval);  // Перезапускаем интервал
      }, 5000);
    });
  });

  // Для десктопов: добавление иконки "лупа"
  if ($(window).width() >= 1024) {  // Проверка на десктоп
    // Функция для добавления иконки "лупа" на переднюю карточку
    function addMagnifierIcon() {
      // Убираем иконки "лупа" со всех карточек
      $('.card .magnifier-icon').remove();

      // Находим переднюю карточку (с наибольшим z-index)
      var frontCard = $('.cards .card').filter(function() {
        return $(this).css('z-index') == 1;
      });

      // Добавляем иконку на переднюю карточку
      if (frontCard.length) {
        var icon = $('<div class="magnifier-icon">🔍</div>');
        frontCard.append(icon);

        // Обработчик для увеличения изображения при клике на иконку
        icon.click(function() {
          var imgSrc = frontCard.find('img').attr('src');
          $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+imgSrc+'"><div id="close-popup"><i></i></div></div>');
          
          $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
          });
          
          $('#overlay, #magnify').fadeIn('fast');
        });
      }
    }

    // Добавляем иконку на переднюю карточку по изменению слайда
    $('input[name="slider"]').on('change', function() {
      addMagnifierIcon();  // Добавляем иконку после переключения слайда
    });

    // Изначально добавляем иконку на переднюю карточку при загрузке
    addMagnifierIcon();

    // Закрытие увеличенного изображения
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();

      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  }
});