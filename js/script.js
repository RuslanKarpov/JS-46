function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30



result = multiply(17, 6, 25);
console.log(result); // 2550
