'use strict';

const number = Math.round(Math.random() * (100 - 1) + 1);
console.log(number);
let answer = prompt('Какое число загадал бот?');

const guessTheNumber = () => {
  if (+answer !== number) {
    if (answer) {
      if (isNaN(+answer)) {
        answer = prompt('Введите число');
      }

      if (Number(number) > answer) {
        answer = prompt('Больше!');
      }

      if (Number(answer) > number) {
        answer = prompt('Меньше!');
      }
      guessTheNumber();
    }
  } else {
    alert('Правильно!');
  }
};

guessTheNumber();

