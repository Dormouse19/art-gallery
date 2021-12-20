// Получаем элемент формы
const commentForm = document.getElementById('comment');

// Добавляем обработчик отправки формы
commentForm.addEventListener('submit', function(event) {
    // Отменяем действие формы по умолчанию
    event.preventDefault();

    // Уведомляем пользователя об успешном реультате
    alert('Ваше сообщение отправлено');

    // Сбрасываем значения формы
    commentForm.reset();
});


lightGallery(document.getElementById('aniimated-thumbnials'), {
    thumbnail:true
}); 