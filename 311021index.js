/*Практика*/
+"22" * "3f"  // NaN
2 + (7 + "$") //  '27$'
"4px" - 2  // NaN
8 / '3h' // NaN
null + 1 // 1

5 > 4 // true 
"ананас" > "яблоко" // false  
"2" > "12" // true 
undefined == null  // true 
undefined === null // false 
null == "\n0\n" // false 
null === +"\n0\n"  // false 
"" + 1 + 0 // '10' 
"" - 1 + 0 //  -1 
true + false // 1
6 / "3" // 2  
"2" * "3"  // 6 
4 + 5 + "px"  // "9px"   
"$" + (4 + 5) //  '$9' 
"4" - 2  // 2 
"4px" - 2 // NaN 
7 / 0  // Infinity 
"-9" + 5 // "-95" 
" -9 " - 5 // -14
null + 1 // 1 
undefined + 1 // NaN 
" \t \n" - 2 // -2

//ДЗ к 06.11.2021
"кот" > "код" //
"2" + 2 * "2" // 24
undefined == null // false
undefined === null // false
null==0 //
2 > "3" //
null - false + true //
1 / "l"  //
"2" * "3" //
4 + 5 + "O"  //
"l" + 4 +5 //
"4" - 2 //
"4" - "4x"  //
null == false //
"-4" / 0 + 1  //

//06.11.2021
const a = () => {
    return a;
}

/*//условный оператор  if(условие) {инструкция}
let a = 3;
if (a>10) {
    console.log("Условие отработано!");
} else if (a==3) {
    console.log("Условие отработано!");
} else {
    console.log("Условие не отработано!");
}*/
//условный оператор ? (тернарный оператор)
// let resylt = условие ? значение №1 : значение №2
let a=20, b=10;
console.log(a+b);

// switch
const role = "user";
switch (role) {
    case "user": {
        console.log ("Вам разрешен доступ в ЛК");
        break;
    }
    case "maneger": {
        console.log ("Вам разрешен доступ в Консоль");
        break;
    }
}
/*С помощью  условных операторов вывести на 
экран длину наибольшего отрезка* Match.max(x, y, c) или вложенный if или/
let x = 10;
let y = 15;
let c = 5;
if (x > y && x > c) {
    console.log(x)
} else if (y > x && y > c) {
    console.log(y)
} else {
    console.log(c)}

/*Реализовать систему рекомендаций для пользователя опираясь 
на значение переменной, хранящей значение температуры 
в градусах Цельсия.
ниже -30:  “Оставайтесь дома!”;
от -30 до -10 включительно: “Сегодня холодно”;
от -10 до +5 включительно: “Не холодно”;
от +5 до +15 включительно: “Тепло”;
от +15 до +25 включительно: “Очень тепло”;
от +25 до +35: “Жарко”;
выше либо равно +35: “Пекло!”;
const temperatura = a;
if () {} */

/*Вывести в консоль заданную строку N раз*/
for (let i=0; i<n; i++) {
    console.log(i)
}

/*Ежедневно количество доступных автомобилей в салоне 
уменьшается в два раза. Выяснить, на какой день продаж,
 количество доступных к покупке авто станет меньше M, 
 если известно, что в первый день продаж всего было N автомобилей.*/
 for (let i=n; i<m; i++) {
    if (n/2>m) {
    console.log(i)
    }
}