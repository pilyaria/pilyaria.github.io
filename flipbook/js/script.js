// Функция, которая проверяет состояние страниц
function checkPagesState() {
    // Получаем статус всех страниц (например, с помощью чекбоксов)
    const isPage2Open = document.getElementById("checkbox-page2").checked;
    const isPage3Open = document.getElementById("checkbox-page3").checked;

    const book = document.querySelector('.book');
    const cover = document.querySelector('.cover');
    
    // Если открыты страницы (кроме первой), блокируем обложку
    if (isPage2Open || isPage3Open) {
        book.classList.add('open-pages'); // Добавляем класс для блокировки обложки
    } else {
        book.classList.remove('open-pages'); // Убираем класс, если страницы закрыты
    }
}

// Добавляем слушателей событий для отслеживания изменения состояния страниц
document.getElementById("checkbox-page2").addEventListener("change", checkPagesState);
document.getElementById("checkbox-page3").addEventListener("change", checkPagesState);

document.querySelector("#checkbox-cover").addEventListener("change", function() {
    // Проверим, открыта ли обложка
    if (this.checked) {
        // Показываем блокер
        document.querySelector(".cover-blocker").classList.remove("hide");
    } else {
        // Скрываем блокер
        document.querySelector(".cover-blocker").classList.add("hide");
    }
});