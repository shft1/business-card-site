document.addEventListener("DOMContentLoaded", () => {
    const formData = {
        name: "",
        email: "",
        phone: "",
        date: "",
        comment: "",
        printData() {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const submitForm = (event) => {
        event.preventDefault();

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");
        const dateField = document.getElementById("date");
        const commentField = document.getElementById("comment");
        const agreementCheckbox = document.getElementById("agreement");

        // Проверки
        if (!nameField.value.trim()) {
            alert("Поле 'Имя' не может быть пустым.");
            return;
        }

        if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
            alert("Введите корректный e-mail.");
            return;
        }

        if (!phoneField.value.trim() || !/^\d?-\d{3}-\d{3}-\d{2}-\d{2}$/.test(phoneField.value)) {
            alert("Телефон должен быть в формате 8-777-777-77-77.");
            return;
        }

        if (!commentField.value.trim()) {
            alert("Поле 'Комментарий' не может быть пустым.");
            return;
        }

        if (!agreementCheckbox.checked) {
            alert("Необходимо согласие на обработку персональных данных.");
            return;
        }

        formData.name = nameField.value.trim();
        formData.email = emailField.value.trim();
        formData.phone = phoneField.value.trim();
        formData.date = dateField.value || "Не указана";
        formData.comment = commentField.value.trim();

        formData.printData();

        // Добавляем сообщение об успешной отправке
        showSuccessMessage("Данные успешно отправлены!");
    };

    const showSuccessMessage = (message) => {
        const container = document.querySelector(".container");

        // Удаляем старое сообщение, если оно есть
        const oldMessage = container.querySelector(".success-message");
        if (oldMessage) oldMessage.remove();

        // Создаем новое сообщение
        const successMessage = document.createElement("p");
        successMessage.textContent = message;
        successMessage.className = "success-message";
        successMessage.style.fontSize = "1.5rem";
        successMessage.style.textAlign = "center";
        successMessage.style.opacity = "0";
        successMessage.style.transition = "opacity 1s, color 1s";

        // Добавляем сообщение в контейнер
        container.appendChild(successMessage);

        // Плавное появление
        setTimeout(() => {
            successMessage.style.opacity = "1";
            successMessage.style.color = "green";
        }, 10);

        // Удаляем сообщение через 5 секунд
        setTimeout(() => {
            successMessage.style.opacity = "0";
            setTimeout(() => successMessage.remove(), 1000);
        }, 5000);
    };

    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
});
