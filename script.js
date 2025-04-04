const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const body = document.body;

        // Проверяем, есть ли сохраненная тема в localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
        }

        // Переключаем тему при нажатии на кнопку
        themeToggleBtn.addEventListener('click', function() {
            body.classList.toggle('dark-theme'); // Переключаем класс dark-theme
            // Сохраняем выбранную тему в localStorage
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark-theme');
            } else {
                localStorage.setItem('theme', 'light-theme');
            }
        });
        document.getElementById('theme-toggle').addEventListener('click', function() {
            // Переключаем класс для изменения темы
            document.body.classList.toggle('dark-theme');
            
            // Меняем обводку картинки при переключении темы
            const img = document.getElementById('image');
            
            if (document.body.classList.contains('dark-theme')) {
                img.style.borderColor = '#ffffff'; // Белая обводка в темной теме
            } else {
                img.style.borderColor = 'transparent'; // Нет обводки в светлой теме
            }
        });