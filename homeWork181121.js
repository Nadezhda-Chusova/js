/*------------НЕ СМОГЛА РЕШИТЬ------------*/
//12. Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.
//19. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
//20. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).


/*------------РЕШЕНЫ, НО ХОЧУ УВИДЕТЬ ВАШЕ РЕШЕНИЕ------------*/
//9. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных
//15. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.


/*------------РЕШЕНЫ----------------------*/
//1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
//Вариант 1
// function numberSquare(num) {
//   let result=num**2;
//     console.log(result);
// }
// numberSquare(4)

//Вариант 2 
// let resultNumberSquare = (num) => num*num;
// resultNumberSquare(5);


//2. Сделайте функцию, которая возвращает сумму двух чисел.
// let resultNumSum=(num1, num2) => num1 + num2;
// resultNumSum(3, 2);


//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function resultNum(num1, num2, num3) {
//   let result=(num1 - num2) / num3;
// console.log(result)}
// resultNum(6, 2, 2)


//4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
//Вариант 1
// function getDayWeekByNumber(num) {
//   switch(num) {
//     case 1: { console.log(:Понедельник:);
//       break; }    
//     case 2: { console.log(:Вторник:);
//       break; }    
//     case 3: { console.log(:Среда:);
//       break; }    
//     case 4: { console.log(:Четверг:);
//       break; }    
//     case 5: { console.log(:Пятница:);
//       break; }    
//     case 6: { console.log(:Суббота:);
//       break; }    
//     case 7: { console.log(:Восскресене:);
//       break; } 
// }
// }
// getDayWeekByNumber(5) 

// Вариант 2
// let arrWeek=[:Понедельник:, :Вторник:, :Среда:, :Четверг:, :Пятница:, :Суббота:, :Восскресене:];
// function getDayWeekByNumber(num) {
// console.log(arrWeek[num-1]);
// }
// getDayWeekByNumber(5)

// Вариант 3
// let objWeek={1::Понедельник:, 2::Вторник:, 3::Среда:, 4::Четверг:, 5::Пятница:, 6::Суббота:, 7::Восскресене:};
// function getDayWeekByNumber(num) {
//   for(key in objWeek) {
//     if(key==num) {
//     return objWeek[key];
//   }
//   else { console.log(:Задайте число от 1 до 8:) }
// }
// }
// getDayWeekByNumber(5)


//5.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// let resultCompareTwoNumbers = (num1, num2) => num1===num2;
// resultCompareTwoNumbers(2, 2)


 //6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
// function resultCompareSumNumbers (num1, num2)  {
//   let result = (num1 + num2) > 10 ? console.log(true) : console.log(false);
// }
// resultCompareSumNumbers (5, 6)  


//7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// let resultCheckNumber = (num) => num>0;
// resultCheckNumber(1)


//8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// let isNumberInRange=(num) => {
//   if(num > 0 && num < 10) { 
//   return true;}
//   else { return false; }
// }
// isNumberInRange(5)


//9. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.
//let rgb = (num1=0, num2=0, num3=0) => 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')'; 


//10. Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.
// function resultatFun(num) {
//   if (num%2===0) {
//     return fun1GetSquare(num); }
//   else { return fun2GetSum(num) }
// }
// let fun1GetSquare=(num) => console.log(num * num);
// let fun2GetSum=(num) => console.log(++num);
// resultatFun(6)


/*11. Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. */
// function mult(num1=1, num2=1, num3=2) {
//   for(let i=1; i<=num3; i++) {
//     console.log(num1*num2)
//   }
// }
// mult(5, 2, 4)


//13. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// function getDigit(arr) {
//   let arrNewDigit=[];
//   for(let i=0; i<arr.length; i++) { 
//     if(isDigitRange(arr[i])===true) { 
//       arrNewDigit.push(arr[i]); 
//     }
//   }
//   return arrNewDigit;
// }
    
// let isDigitRange=(num) => {    
//   if(num > 0 && num < 10) { 
//     return true; 
//   }
//   else { return false; }
// }
// getDigit([1, 10, 5, 20])
    

//14. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(digit) { 
//   let arrDigits=(String(digit)).split(''); 
//   let resultDigitsSum=0; 
//   for(i=0; i<arrDigits.length; i++) {
//     resultDigitsSum+=Number(arrDigits[i]); 
//   }
// return resultDigitsSum;
// }
// getDigitsSum(5) 
    

//15. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// function getYearsIfSum(yearStart, yearEnd) { 
//   let arrResultYears=[];
//   for(let i=yearStart; i<yearEnd; i++) { 
//     if(getDigitsSum(i)===13) { arrResultYears.push(i) } 
//   }
// return arrResultYears;
// }
    
// function getDigitsSum(digit) {                  
//   let arrDigits=(String(digit)).split('');            
//   let resultDigitsSum=0; 
//   for(i=0; i<arrDigits.length; i++) {
//     resultDigitsSum+=Number(arrDigits[i]); }
// return resultDigitsSum;
// }
    
// getYearsIfSum(1, 2020)


//16. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(num) { 
//   let result = (Math.floor(num))%2===0 ? true : false;
//   return result;
//   }
// isEven(10.4)


//17. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// function arrIsDigits(arr) {
//   let arrNewIsEvenDigits = [];
//   for(let i=0; i<arr.length; i++) {
//     if(isEven(arr[i])===true) {
//       arrNewIsEvenDigits.push(String(arr[i]));
//     }
//   }
//   return arrNewIsEvenDigits;
// }
  
// function isEven(num) { 
//   let result = (Math.floor(num))%2===0 ? true : false;
//   return result;
// }
  
  //18. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).
// function getDivisors(num) {
//   var result = [];
//   for (var i = 1; i <= num; i++) {
//     if(num % i == 0) {
//     result.push(i);
//   }
//   }
//   return result;
// }
//   getDivisors(32)

  
    