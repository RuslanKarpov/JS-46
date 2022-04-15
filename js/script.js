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
/*const stars = 5;
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
console.log(price);*/

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

/* ЦИКЛ  *for*  

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