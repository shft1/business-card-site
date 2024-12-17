// 1 задание
let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// 2 задание
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

// 3 задание
const lectures = ['Оема 1', 'Тема 2', 'Оема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push('Тема 4');
lectures.unshift('Тема 0');

practices.push('Практика 4');
practices.unshift('Практика 0');

lectures.forEach((lecture) => {
    console.log(lecture)
})

practices.forEach((practice) => {
    console.log(practice)
})
function print(items) {
    return items.join(', ');
}
console.log(print(lectures));

// 4 задание
let new_arr = [];
function ostart(items) {
    items.forEach((value) => {
        if (value[0] == 'О') {
            new_arr.push(value);
        }
    })
    return new_arr;
}
console.log(ostart(lectures));
