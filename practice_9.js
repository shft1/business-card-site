// 1 задание
let userName = prompt("Введите ваше имя:");
let userAge = prompt("Введите ваш возраст:");

// Приветственное сообщение
alert(`Привет, ${userName}! Вам ${userAge} лет.`);
console.log(`Привет, ${userName}! Вам ${userAge} лет.`);


// 2 задание
if (userAge >= 18) {
    alert("Вы совершеннолетний.");
    console.log("Вы совершеннолетний.");
} else {
    alert("Вы несовершеннолетний.");
    console.log("Вы несовершеннолетний.");
}


// 3 задание
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Запрашиваем у пользователя угадываемое число
let userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));

// Проверяем результат
if (userGuess === randomNumber) {
    alert("Поздравляем! Вы угадали число!");
    console.log("Поздравляем! Вы угадали число!");
} else {
    if (userGuess < randomNumber) {
        alert("Вы не угадали. Загаданное число больше.");
    } else {
        alert("Вы не угадали. Загаданное число меньше.");
    }
    console.log(`Загаданное число было ${randomNumber}.`);
}


// 4 задание
const correctPassword = "12345";

let userPassword = prompt("Введите пароль:");

if (userPassword) {
    if (userPassword === correctPassword) {
        alert("Доступ разрешен.");
        console.log("Доступ разрешен.");
    } else {
        alert("Доступ запрещен.");
        console.log("Доступ запрещен.");
    }
} else {
    alert("Пароль не может быть пустым.");
    console.log("Пароль не может быть пустым.");
}

// 5 задание
let firstNumber = parseFloat(prompt("Введите первое число:"));
let secondNumber = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;
if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        alert("Деление на ноль невозможно.");
        console.log("Деление на ноль невозможно.");
    }
} else {
    alert("Неверный оператор.");
    console.log("Неверный оператор.");
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
    console.log(`Результат: ${result}`);
}

