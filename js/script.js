// Callback функция - пример: Геолокация
/*
  const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};
const onGetPositionError = function (error) {
  console.log(error);
};
window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError,
);
*/


// SWITCH пример 1
/*
const stars = 5;
let price;
switch (stars) {
  case 1:
    price = 20;
    break;
  
  case 2:
    price = 30;
    break;

  default:
    console.log(`Такого количества звёзд нет`)
}
console.log(price);
*/

// SWITCH пример 2 - объединение
/*const stars = 5;
let price;
switch (stars) {
  case 1:
  case 2:
    price = 20;
    break;
  
   case 3:
   case 4:
    price = 40;
    break;

    default:
    console.log(`Такого количества звёзд нет`)
}
console.log(price);*/



/* ПРИМЕР 3
Напиши скрипт вібора опции доставки товара.
Опция хранится в переменной optuon: 1 - самовывоз, 2 - курьер, 3 - почта.
В переменную message записать сообщение в зависимости от опции:
- вы сможете забрать товар завтра с 12:00 до 18:00,
- Курьер доставит заказ завтра с 9:00 до 18:00,
- посылка будет отправлена сегодня,
- Вам перезвонит менеджер.
*/

//Алгоритм решения
//1 -сделать переменные
/*
const option = 1;
let message = '';
//2 -Сделать  switch
switch (option) {
  //3 - в каждом кейсе записать message строку
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 до 18:00';
    break;
  
  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;
  
  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;
  
  default:
    message = 'Вам перезвонит менеджер';
  }
//4 - сделать log message
console.log(message);
*/

/* ЦИКЛ  *for*  - если нужно получить доступ к индексу или изменить значение элемента

for (инициализация; условие; пост- выражение) {
  тело цикла
}
 for (let i=0; i<5; i+=1){
 console.log(i);
 }
console.log('Цикл прекратился');
*/

 /* Задача 1
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
/*
//1 - сделать  переменные (вары)
 const minSalary = 500;
 const maxSalary = 5000;
 const employees = 12;
 let totalSalary = 0;
//2 - перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
//3 - сгенерить случайную зп, прибавить к тоталу
 const salary = Math.round(
   Math.random() * (maxSalary - minSalary) + minSalary,
 );

 console.log(`ЗП работника номер ${i} - ${salary}`);

//4 - прибавить к тоталу
 totalSalary += salary;
 }

//5 - лог
console.log('totalSalary: ', totalSalary);
*/


/* Задача 2
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 
//1 - сделать переменные (вары)
const min = 0;
const max = 5;
let total = 0;

//2 - фор от min до max с шагом в 1
for (let i = min; i <= max; i += 1) {
  // проверяем остаток от деления
  if (i % 2 !== 0) {
    // console.log('Не чётное: ', i);
    continue;
  }

  // пишем в сумму
  console.log('чётное: ', i);
  total += i;

  // аналог +=
  // total = total + i;
}
console.log('total: ', total);*/


/* Задача
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

/*//1 - создать переменные
let balance = 10000;
const payment = 2000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
);

//2 - условие 
if ( payment <=balance) {
  // balance = balance - payment

  console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log("На счету недостаточно средств для проведения операции!");
}

console.log("Операция завершена");*/

/* Задача 
 * Напиши скрипт подсчёта суммы покупки со скидкой в зависимости
 * от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */
/*
let totalSpent = 2000;
let payment = 500;
let discount = 0;
//2 - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнер, скидка 2%');
  discount = 0.02;
}
//Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Серебрянный партнер, скидка 5%');
  discount = 0.05;
  //Если потрачено больше [5000 - золотой партрёр, скидка 10%
} else if (totalSpent >= 5000) {
  console.log('Золотой партнер, скидка 10%');
  discount = 0.1;
} else {
  console.log('Не партнёр, скидка 0%');
}

payment -= payment * discount;
// payment = payment - payment * discount;

//3 - «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

totalSpent += payment;

console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);*/

/*  *********** МАССИВЫ  **********************  */
/*const friends = [Mango, Kiwi, Poly, Ajax];
console.log(friends);*/
/* Первый индекс массива - 0, последний индекс массива - это .lenght-1,
обращение к индексу массива - 
console.log(friends[2]);
изменить индекс массива - 
friends[1]='Dog';*/

/* Перебор (итерация) массива*/
/*
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
//console.table(friends); - массив в виде таблицы
// const lastIndex=friends.length-1; 
for (let i = 0; i <= 3; i += 1){
  //for (let i = 0; i <= lastIndex; i += 1){
  console.log(friends[i]);
}
*/

/* Метод for ... of  - если не нужно получить доступ к индексу или изменить значение элемента


for (const variable of iterable) {
  // тело цикла
}

пример:
const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
for (const friend of friends){
  console.log(friend);
}
*/
/*
// Задача 1
//1-й вариант решения через for
//Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];
//2 - сделать переменнуюобщую total до цикла
let total = 0;

//1 - перебрать массив
for (let i = 1; i < cart.length; i += 1){
  console.log(cart[i]);
// 3 каждый элемент приплюслвать к total
  total += cart[i];
  //total=total+cart[i];
};
console.log('Total: ', total);*/

//2-й вариант решения через for...of
//Посчитать общую сумму покупок в корзине
/*
const cart = [54, 28, 105, 70, 92, 17, 120];
//2 - сделать переменнуюобщую total до цикла
let total = 0;
//1 - перебрать массив
for (const value of cart){
  total+=value;
}
console.log('Total: ', total);*/

// Добавить такс 10%

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);

/* Задача 2
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */
/*
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1 переменная тотал
let total = 0;
// 2 перебрать массив
for (let i = 0; i < numbers.length; i += 1) {
 const number = numbers[i];
 console.log(number);

//   // 3 на каждой итерации проверить элемент на чётность
if (number % 2 === 0) {
console.log('Четное!!!!');

// 4 если четный плюсуем к тотал
total += number;
}
}
console.log('Total: ', total);
*/

/* через  for....of

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// 1 переменная тотал
let total = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log('Четное!!!!');

    // 4 если четный плюсуем к тотал
    total += number;
  }
}
console.log('Total: ', total);
*/

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное!!!!`);
//     total += number;
//   }
// }
/*
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Эту итерацию нужно пропустить', number);
    continue;
  }

  console.log(`${number} - четное!!!!`);
  total += number;
}

console.log('Total: ', total);
*/

/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */
/* через for

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = '';
for (let i=0; i<logins.length; i+=1){
  const login=logins[i];

 console.log('Login: ', login);
  if (login===loginToFind){
  message = 'Пользователь ${loginToFind} найден.';
  break;
  }
  message='Пользователь ${loginToFind} не найден.';
}
console.log(message);
*/
/*
// Через for...of
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
let message = 'Пользователь ${loginToFind} не найден.';
for (const login of logins) {
  console.log('Ура, равны!!!');
  message = 'Пользователь ${loginToFind найден.';
  break;
}
console.log(message);
*/

//Метод includes() с тернарным оператором
/*
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';

const message=logins.includes(loginToFind)
? 'Пользователь ${loginToFind} найден.'
: 'Пользователь ${loginToFind} не найден.'
console.log(message);
*/

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

/*const numbers = [51, 18, 13, 24, 7, 85, 19];
// объявляем переменную
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}

console.log('smallestNumber: ', smallestNumber);
*/
/*
 * Напиши скрипт поиска самого большого числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

/*const numbers = [51, 18, 13, 24, 7, 85, 19];
// объявляем переменную
let biggestNumber = numbers[0];

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log('biggestNumber: ', biggestNumber);
*/
