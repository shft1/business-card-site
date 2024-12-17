document.addEventListener("DOMContentLoaded", () => {
    const switchSemesterButton = document.getElementById("switch-semester-btn");
    const semesterTableBody = document.querySelector("#semester-table tbody");

    const secondSemesterPractices = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];

    switchSemesterButton.addEventListener("click", () => {
        // Очистить текущие строки таблицы
        semesterTableBody.innerHTML = "";

        // Заполнить таблицу темами второго семестра
        secondSemesterPractices.forEach((topic, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${topic}</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            `;
            semesterTableBody.appendChild(row);
        });
    });
    const showLecturesButton = document.getElementById("show-lectures-btn");
    const lecturesTable = document.getElementById("lectures-table");

    showLecturesButton.addEventListener("click", () => {
        if (lecturesTable.style.display === "none") {
            lecturesTable.style.display = "block"; // Показать таблицу
            setTimeout(() => {
                lecturesTable.style.opacity = "1"; // Плавное появление
            }, 10); // Небольшая задержка для срабатывания transition
        } else {
            lecturesTable.style.opacity = "0"; // Плавное исчезновение
            setTimeout(() => {
                lecturesTable.style.display = "none"; // Скрыть таблицу
            }, 500); // Время совпадает с transition из CSS
        }
    });
});
