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

