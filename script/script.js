'use strict';


const game = function (){


  let randomNum = parseInt(Math.random() * 100);

  let attempts=10; //колличество попыток

   return function repeat() {

    let entered=prompt('Угадайте число от 1 до 100');//считываем то, что вводим в строке


    if (attempts>1){

    if (entered===null) { //если значение нулевое или пустое
      alert ('Игра окончена'); 
    }
    else   
      if (isNaN(entered) || entered.indexOf(' ')>=0 || entered==="") { // если ничего не введено или 0 
        alert('Введи число! (осталось '+attempts+' попыток)');
        return repeat(); //выводит оставшиеся попытки
      }
      else if (Number(entered)>randomNum) { // введенное значение БОЛЬШЕ загаданного
        attempts--; // уменьшает число попыток на 1
        alert('Меньше! (осталось '+attempts+' попыток)');
        return repeat(); //выводит оставшиеся попытки
      }
      else if (Number(entered)<randomNum) { // введенное значение МЕНЬШЕ загаданного
        attempts--;
        alert('Больше! (осталось '+attempts+' попыток)');
       return repeat(); //выводит оставшиеся попытки
      }

      else if (Number(entered)===randomNum) { //если угодали то 
      let con=confirm("Правильно! Сыграем ещё раз?"); 
       if (con === true) {  // если хотим играть
         attempts=10;
        return game()();  // название функции
      }
      }
      }
     else if (attempts===1) {  // колличество попыток равно 0 
      let con=confirm('Вы не угадали :( Загаданное число: '+randomNum+'. Сыграем ещё раз?'); 
      if (con === true) {  // если хотим играть
         attempts=10;
        return game()();
      }
    }
  };
};

game()();
console.dir(game());