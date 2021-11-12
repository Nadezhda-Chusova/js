/*------------НЕ СМОГЛА РЕШИТЬ------------*/
/*10. Найти последовательность чисел, вычисляемую по следующему алгоритму:
a. Вводится число;
b. Если четное, то делится на 2, если нечетное, то умножается на 3 и увеличивается на 1;
c. Полученное число в результате пункта b, становится следующим числом в последовательности и повторяется пункт b.
d. Алгоритм работает до тех пор, пока число в последовательности не станет равно 1. 
    Результат записать в строку или массив и вывести в консоль.*/
/*ВОПРОС, если условие прекращения i===1, очень похож на бесконечный цикл*/


/*------------РЕШИЛА С ОШИБКАМИ-----------*/
/*Циклы:*/
/*7. Перебрать числа от 0 до 300. Если  число четное, делится на 12 без 
остатка и не равно 48, а результат деления на 12 нечетный, то вывести 
строку “Ooops”. Если число нечетное и делится на 3, то вывести “Hola”. 
Если значение ноль, то вывести “Zero” (без использования сравнения).*/
function countNumber(numStart, numEnd) {
    for(let i=numStart; i<numEnd; i++) {
      if(i%12 === 0 && i!==48 && ((i/12)%2))!==0; {
       console.log('Ooops'); }
      else if(i%2 !==0 && i%3 ===0) {
       console.log('Hola'); }
      else if(i ===0) {
       console.log('Zero'); }
    }
}

/*Работа с for для массивов*/
/*8. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
 меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для
  этого (итерация - это проход цикла), и запишите его в переменную num.*/
/*Вариант решения 1 (обход)*/
let num=0;
let n=0;
function countDividerNumber(n, nEnd, divider) {
    for(; n>=nEnd; num++) {
      n = Math.floor(n/divider);
    }
    return 'при делении заданного числа ' + ' на число ' +  divider + ', до результата меньше числа ' + nEnd + ', необходимое количество итераций - ' + num;
}
countDividerNumber(1000, 50, 2)
/*Результат 1: 'при делении заданного числа  на число 2, до результата меньше числа 50, 
необходимое количество итераций - 5'*/

/*Вариант решения 2 (ОШИБКА, в результате неверно выводиться значение переменной
 вместо 20 выводится 2. Как исправить?)*/
    let num=0;
    let n=0;
    function countDividerNumber(n, nEnd, divider) {
        for(; n>=nEnd; num++) {
          n = Math.floor(n/divider);
        }
        return 'при делении числа ' + n + ' на число ' +  divider + ', до результата меньше числа ' + nEnd + ', необходимоe количество итераций - ' + num;
    }
    countDividerNumber(20, 5, 2)
 /*Результат 2: 'при делении числа 2 на число 2, до результата меньше числа 5, 
 необходимоe количество итераций - 3'*/
    


/*------------РЕШЕНИЕ ВЫЗЫВАЕТ СОМНЕНИЕ-------*/
/*Циклы:*/
/*5. Найти факториал введенного числа(использовать prompt).*/
let result=1;
let num=prompt('Введите число для вычисления фактериала',num)
function factorial(num) {
    num=Math.round(num);
    for(let i=num; num>0; num--) {
     result*=num;
    }
    return result;
}
alert(factorial(num));

/*Работа с for для массивов*/
/*Красным задачи:*/
function valueArr(arr, num) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i]===num) {
        console.log(num + ' есть в массиве');
        break;
       }
     }
}
valueArr([1, 2, 5, 9, 4, 13, 4, 10], 4)

/*4. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на
экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/
function valueArr(arr, num1, num2, num3,) {
    function valueArr(arr, num1, num2, num3,) {
    for(let i=0; i<arr.length; i++) {
      for (let j=0; j>arr[i].length; j++) {
        if(arr[i][j][0]===num1 || arr[i][j][0]===num2 || arr[i][j][0]===num5) {
          console.log(arr[i]);
        }      
      }
    }
}
valueArr([10, 20, 30, 50, 235, 3000], 1, 2, 5)

/*5. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for 
создайте строку '-1-2-3-4-5-6-7-8-9-'.*/
let result = ''; 
function valueArr(arr, value,) {
    for(let i=0; i<arr.length; i++) {
      result=result + '-'+arr[i];
    }
    return result;
}
valueArr([1, 2, 3, 4, 5, 6, 7, 8, 9], '-')

/*6. Составьте массив дней недели. С помощью цикла for выведите все дни недели, 
а выходные дни выведите жирным.*/
function dayWeek(arr) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i]==='Суббота' || arr[i]==='Воскресенье') {
        console.log(arr[i].bold()); }
      else { (console.log(arr[i]))
      }
    }
}
dayWeek(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'])

/*7. Составьте массив дней недели. С помощью цикла for выведите все дни недели, 
а текущий день выведите курсивом. Текущий день должен храниться в переменной day.*/
function dayWeek(arr, day) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i]===day) {
        console.log(arr[i].italics()); }
      else { (console.log(arr[i]))
      }
    }
}
dayWeek(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 'Вторник')

/*9. Найти все натуральные числа в промежутке между двумя введенными числами. 
Результат записать в строку или массив и вывести в консоль.*/
let resultStr='';
function countNumber(numStart, numEnd) {
    for(let i=numStart+1; i<numEnd; i++) {
      resultStr+=i;
    }
    resyltArr=resultStr.split('');
    return resyltArr;
}
countNumber(1, 10)
(8) ['2', '3', '4', '5', '6', '7', '8', '9']
resultStr
'23456789'




/*------------РЕШЕНЫ----------------------*/
/*Работа с if-else*/
/* 1. Если переменная a равна нулю, то выведите 'Верно', иначе 
выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
function numberCheckCriterion(a) {
    if(a===0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*2. Если переменная a больше нуля, то выведите 'Верно', иначе 
выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
function numberCheckCriterion(a) {
    if(a>0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*3. Если переменная a меньше нуля, то выведите 'Верно', иначе 
выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
function numberCheckCriterion(a) {
    if(a<0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе
 выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
function numberCheckCriterion(a) {
    if(a>=0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*5. Если переменная a меньше или равна нулю, то выведите 'Верно', 
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/ 
function numberCheckCriterion(a) {
    if(a<=0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*6. Если переменная a не равна нулю, то выведите 'Верно', иначе 
выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.*/
function numberCheckCriterion(a) {
    if(a!==0) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(1)

/*7. Если переменная a равна 'test', то выведите 'Верно', иначе
 выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.*/
function numberCheckCriterion(a) {
    if(a==='test') {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion('test')

/*8. Если переменная a равна '1' и по значению и по типу, 
то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
 скрипта при a, равном '1', 1, 3.*/
function strCheckCriterion(a) {
    if(a=='1') {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
strCheckCriterion('1')

/*Работа с логическими переменными*/
/*1. Если переменная test равна true, то выведите 'Верно', 
иначе выведите 'Неверно'. Проверьте работу скрипта при test, 
равном true, false. Напишите два варианта скрипта - с короткой записью 
и с длинной.*/
/*Вариант 1*/
function valueCheckCriterion(test) {
    if(test=== true) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
valueCheckCriterion(true)

/*Вариант 2*/
function valueCheckCriterion(test) {
    let result = test === true ? console.log('Верно') : console.log('Неверно');
}
valueCheckCriterion(true)

/*2.Если переменная test не равна true, то выведите 'Верно', 
иначе выведите 'Неверно'. Проверьте работу скрипта при test, 
равном true, false. Напишите два варианта скрипта - с короткой 
записью и с длинной.*/
/*Вариант 1*/
function valueCheckCriterion(test) {
    if(test!== true) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
valueCheckCriterion(true)

/*Вариант 2*/
function valueCheckCriterion(test) {
    let result = test!== true ? console.log('Верно') : console.log('Неверно');
}
valueCheckCriterion(true)

/*Работа с && (и) и || (или)*/
/*1. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', 
иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.*/
function numberCheckCriterion(a) {
    if(a>0 && a<5) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}

/*2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе 
поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу 
скрипта при a, равном 5, 0, -3, 2.*/
function numberCheckCriterion(a) {
    if(a===0 || a===2) {
        console.log(a+=7);
    } else {console.log(a/=10);
    }
}
 
/*3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, 
то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). 
Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.*/
function numberCheckCriterion(a, b) {
    if(a<=1 && b>=3) {
        let sum = a + b; 
        console.log(sum);
    } else { let subtraction = a - b; 
        console.log(subtraction);
    }
}
numberCheckCriterion(1, 3)

/*4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше 
или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.*/
function numberCheckCriterion(a, b) {
    if(a>2 && a<11 || b>=6 && b<14) {
        console.log('Верно');
    } else {console.log('Неверно');
    }
}
numberCheckCriterion(11, 14)

/*На switch-case*/
/*1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
 значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' 
 и так далее. Решите задачу через switch-case.*/
let result="";
function valueCheckCriterion(num) {
  switch (num) {
    case 1: { console.log(result="зима");
     break;
    }
    case 2: { console.log(result="весна");
      break;
    }
    case 3: { console.log(result="лето");
      break;
    }
    case 4: { console.log(result="осень");
      break;
    }
  } 
}
valueCheckCriterion(4)

/*Общие задачи*/
/*1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите 
в какую декаду месяца попадает это число (в первую, вторую или третью).*/
function monthNumberTenday(day) {
    if(day>=1 && day<=10) {
      console.log(day + ' день месяца - первая декада месяца');
    }
    else if(day>=11 && day<=20) {
      console.log(day + ' день месяца - вторая декада месяца');
    }
    else if(day>=21 && day<=31) {
      console.log(day + ' день месяца - третья декада месяца');
    }
    else { console.log('задайте день месяца в интервале от 1 до 32'); }
} 
monthNumberTenday(15) 

/*2. В переменной month лежит какое-то число из интервала от 1 до 12. Определите 
в какую пору года попадает этот месяц (зима, лето, весна, осень).*/
function yearSeason(month) {
    if(month>=1 && month<=3) {
      console.log('месяц ' + month + ', время года - зима');
    }
    else if(month>=4 && month<=6) {
      console.log('месяц ' + month + ', время года - весна');
    }
    else if(month>=7 && month<=9) {
      console.log('месяц ' + month + ', время года - лето');
    }
    else if(month>=10 && month<=12) {
      console.log('месяц ' + month + ', время года - осень');
    }
    else { console.log('задайте месяц в интервале от 1 до 13'); }
} 
yearSeason(13)

/*3. Напишите программу, которая выводит на экран числа от 1 до 100. При этом
вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел,
кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить
слово «FizzBuzz»*/
function cauntCheckCriterion(numStart, numEnd) {
    for(let numStart=1; numStart<numEnd; numStart++) {
     if(numStart%3 === 0 && numStart%5 !== 0) {
      console.log('Fizz');
     }
     else if(numStart%5 === 0 && numStart%3 !== 0) {
      console.log('Buzz');
     }
     else if(numStart%3 === 0 && numStart%5 === 0) {
      console.log('FizzBuzz');
     }
     else {
     console.log(numStart);
     }
    }
}
cauntCheckCriterion(1, 100)

/*Красным*/
/* 4. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что 
первым символом этой строки является буква 'a'. Если это так - выведите 'да', 
в противном случае выведите 'нет'.*/
function strCheckFirstValue(str, value) {
    for(let i=0; i<str.length; i++) {
     if(str[i] === value) {
      return 'да';
     }
    else { return 'нет'; 
     }     
    }
}
strCheckFirstValue('abcde', 'a')

/*5. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой
строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае 
выведите 'нет'.*/
function strCheckFirstValue(str, value1, value2, value3) {
    for(let i=0; i<str.length; i++) {
     if(str[i] == value1 || str[i] == value2 || str[i] == value3) {
      return 'да';
     }
    else { return 'нет'; 
     }     
    }
}
strCheckFirstValue('12345', 1, 2, 3)

/*6. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа
первый символ строки, второй и третий.*/
let result=0;
function sumValueStr(str) {
    for(let i=0; i<str.length; i++) {
      result+=Number(str[i]);
    }
    return result;
}
sumValueStr('555')

 /*7. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется
сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/
 function sumValueStr(str) {
    let arr = str.split('');
    result1 = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    result2 = Number(arr[3]) + Number(arr[4]) + Number(arr[5]);
    if(result1===result2) {
      console.log('да'); 
    }
    else { 
      console.log('нет');
    }
}
sumValueStr('111111')

/*Циклы:
Циклы while и for
Решите эти задачи сначала через цикл while, а затем через цикл for.*/

/*1. Выведите столбец чисел от 1 до 100.
2. Выведите столбец чисел от 11 до 33.*/
function countNumber(numStart, numEnd) {
    for(let i=numStart; i<numEnd; i++) {
     console.log(i);
    }
}
countNumber(1, 10)

/*3. Выведите столбец четных чисел в промежутке от 0 до 100.*/
function countNumber(numStart, numEnd) {
    for(let i=numStart; i<numEnd; i++) {
      if(i%2 === 0) {     
        console.log(i);
      }
    }
}
countNumber(1, 10)

/*4. С помощью цикла найдите сумму чисел от 1 до 100.*/
result = 0;
function countNumber(numStart, numEnd) {
    for(let i=numStart; i<numEnd; i++) {
      result+=i;
      }
    return result;
}
countNumber(1, 100)

/*6. Дано число 5. Вывести в консоль число 555555555, не используя вычислений.*/
result = "";
function countStr(num, count) {
    for(let i=0; i<=count; i++) {
      result+=num
      }
    return result;
}
countStr(5, 9)

/*Работа с for для массивов*/
/*Красным все задачи:*/
/*1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все 
эти элементы на экран.*/
function valueArr(arr) {
    for(let i=0; i<arr.length; i++) {
      console.log(arr[i]);
    }
}
undefined
valueArr([1, 2, 3, 4, 5])

/* 2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите
 сумму элементов этого массива. Запишите ее в переменную result.*/
let result=0;
function valueArr(arr) {
    for(let i=0; i<arr.length; i++) {
      result+=arr[i];
     }
    return result;
}
undefined
valueArr([1, 2, 3, 4, 5])
 
/*Задачи общие.*/
/*Красным задачи с 1-по 7:
/*1. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for 
и оператора if выведите на экран столбец тех элементов массива, которые
больше 3-х, но меньше 10.*/
function valueArr(arr) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i]>3 && arr[i]<10) {
        console.log(arr[i]);
      }
    }
}
valueArr([2, 5, 9, 15, 0, 4])

/*2. Дан массив с числами. Числа могут быть положительными и отрицательными. 
Найдите сумму положительных элементов массива.*/
let result=0;
function valueArr(arr) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i]>0) {
        result+=arr[i];
      }
    }
    return result;
}
valueArr([-2, 5, -9, 15, 0, 4])