document.addEventListener('DOMContentLoaded', () => {
    const studentPhoto = document.getElementById("student-photo");

    const teacherPhotos = [
        "ivan.jpeg",
        "vova.jpeg"
    ];

    const header = document.querySelector("h1.fw-bold");
    if (header) {
        header.addEventListener("mouseover", () => {
            header.style.transform = "scale(1.05)";
            header.style.transition = "transform 0.3s ease";
        });

        header.addEventListener("mouseout", () => {
            header.style.transform = "scale(1)";
        });
    }

    const paragraph = document.querySelector("section p");
    if (paragraph) {
        if (!paragraph.style.backgroundColor) {
            paragraph.style.backgroundColor = "transparent";
        }

        // Обработчик события клика
        paragraph.addEventListener("click", () => {
            const currentColor = getComputedStyle(paragraph).backgroundColor;
            if (currentColor === "rgb(173, 216, 230)" || currentColor === "lightblue") {
                paragraph.style.backgroundColor = "transparent";
            } else {
                paragraph.style.backgroundColor = "lightblue";
            }
            paragraph.style.transition = "background-color 0.5s ease";
        });
    }

    let currentPhotoIndex = 0;

        if (studentPhoto) {
        studentPhoto.addEventListener("mouseover", () => {
            studentPhoto.style.transform = "rotate(360deg)";
            studentPhoto.style.transition = "transform 1s ease";
        });

        studentPhoto.addEventListener("mouseout", () => {
            studentPhoto.style.transform = "rotate(0deg)";
        });
    }

    // studentPhoto.addEventListener("mouseover", () => {
    //     studentPhoto.style.transform = "scale(1.1)";
    //     studentPhoto.style.transition = "transform 0.3s";
    // });

    // studentPhoto.addEventListener("mouseout", () => {
    //     studentPhoto.style.transform = "scale(1)";
    // });

    studentPhoto.addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % teacherPhotos.length;
        studentPhoto.src = teacherPhotos[currentPhotoIndex];
        studentPhoto.alt = `Фото любимого преподавателя (${currentPhotoIndex + 1})`;
    });

    studentPhoto.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей.");
    });

    showMessage('Скрипт загружен!');

    logCurrentTime();

    if (header) {
        header.addEventListener("click", () => {
            alert("Вы кликнули на заголовок - так держать!");
        });
    }

    resetBackgroundColor();

    changeBackgroundColor('lightblue');

    toggleVisibility('#myElement');

    replaceH1TextWithUTMTerm();
});

// Функция для отображения сообщения
function showMessage(message) {
    console.log(message);
}

// Функция для логирования текущего времени
function logCurrentTime() {
    const now = new Date();
    console.log(`Текущее время: ${now.toLocaleTimeString()}`);
}

// Функция для сброса фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
}

// Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const isVisible = element.style.display !== 'none';
        element.style.display = isVisible ? 'none' : 'block';
    }
}

// Функция для замены текста H1 на UTM-термин
function replaceH1TextWithUTMTerm() {
    const header = document.querySelector("h1.fw-bold");
    if (header) {
        const urlParams = new URLSearchParams(window.location.search);
        const utmTerm = urlParams.get('utm_term');
        if (utmTerm) {
            header.textContent = utmTerm;
        }
    }
}
