// "use strict";
// //ok отмена
// // const result = confirm("Are you here?");
// // console.log(result);

// //ввод цифр(возраста)
// // const answer = +prompt("Вам есть 18?", "18");
// // console.log(typeof(answer) + ' ' + answer);

// // const answers = [];

// // answers[0] = prompt("Как ваше имя?", '');
// // answers[1] = prompt("Как вашa фамилия?", '');
// // answers[2] = prompt("Сколько вам лет?", '');

// // document.write(answers);

// // const answers = [prompt("Как ваше имя?", ''), prompt("Как вашa фамилия?", ''), prompt("Сколько вам лет?", '')];

// // document.write(answers);

//     // const category = 'toys';

//     // console.log(`https://someurl.com/${category}/5`);








//     // let hamburger;
//     // const fries = NaN;
//     // const cola = 0;
//     // const nuggets = 2;
    
//     // if (hamburger && cola || fries === 3 && nuggets) {
//     // console.log('Done!')
//     // }

//     // console.log((hamburger && cola || fries === 3 && nuggets))

//     // for(let i = 5; i < 11; i++) {
//     //     console.log(i);
//     // }
    
//     // for (let i = 20; i >= 10; i--) {
//     //     if (i === 13) break;
//     //     console.log(i);
//     // }

//     // for( let i = 2; i < 11; i++) {
//     //     if(i % 2 === 0){
//     //         console.log(i);
//     //     }
//     // }

//     // for (let i = 2; i <= 16; i++) {
//     //     if (i % 2 === 0) {
//     //         continue;
//     //     } else {
//     //         console.log(i);
//     //     }
//     // }

//     // let i = 2;
//     // while(i <= 16){
//     //     if (i % 2 === 0) {
//     //         i++;
//     //         continue;
//     //     } else {
//     //         console.log(i);
//     //     }
//     //     i++;
//     // }

//         // const arrayOfNumbers = [];
        
//         // for(let i = 5; i < 11; i++){
//         //     arrayOfNumbers[i-5] = i;
//         // }
//         // console.log(arrayOfNumbers);

//         // const arr = [3, 5, 8, 16, 20, 23, 50];
//         // const result = [];

//         // for( let i = 0; i < arr.length; i++) {
//         //     result[i] = arr[i];
//         // }
//         // console.log(result);

//         // const data = [5, 10, 'Shopping', 20, 'Homework'];

//         // for(let i = 0; i < data.length; i++) {
//         //    if(typeof(data[i]) === 'number') {
//         //         data[i] = data[i] * 2;
//         //    } else if(typeof(data[i]) === 'string') {
//         //         data[i] = `${data[i]} - done`;
//         //    }
//         // }
//         // console.log(data);
        

//         // const data = [5, 10, 'Shopping', 20, 'Homework'];
//         // const result = [];

//         // for(let i = 1; i <= data.length; i++) {
//         //     result[i - 1] = data[data.length - i];
//         // }
//         // console.log(result);

//         // const lines = 5;
//         // let result = '';
        
//         // for (let i = 0; i <= lines; i++) {
//         //     for (let j = 0; j < lines - i; j++) {
//         //         result += " ";
//         //     }
//         //     for (let j = 0; j < 2 * i + 1; j++) {
//         //         result += "*";
//         //     }
//         //     result += "\n";
//         // }
        
//         // console.log(result);


// const usdCurr = 1.7;
// const eurCurr = 2;

//     function convert(amount,curr) {
//         console.log(amount * curr);
//     }

//     convert(100, usdCurr);
//     convert(100, eurCurr);

// function sayHello(name) {
    
//     return `Привет, ${name}!`;
// }
//     console.log(sayHello("Resul"));

// function returnNeighboringNumbers(x) {
//     return [x-1,x,x+1];
// }
// console.log(returnNeighboringNumbers(5));


// function getMathResult(num,times) {
    
//     if(typeof(times) !== "number" || times <= 0) {
//         return num;
//     } 

//     let str ="";   
    
//     for(let i = 1; i <= times; i++) {
//         if(i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }

//     return str;
// }
// getMathResult(10,5);

    
    // function calculateVolumeAndArea(a) {
    //     if(typeof(a) != 'number' || a <=0 || !Number.isInteger(a)) {
    //         return "При вычислении произошла ошибка";
    //     } 
        
    //     let volume = 0,
    //         area = 0;

    //         volume = a*a*a;
    //         area = 6*(a*a);

    //         return `'Объем куба: ${volume}, площадь всей поверхности: ${area}'`;
       
    // }

    // calculateVolumeAndArea(5);
    
    // function getCoupeNumber(seat) {
    //     if(typeof(seat) != 'number' || seat < 0 || !Number.isInteger(seat)) {
    //         return "Ошибка. Проверьте правильность введенного номера места";
    //     } else if(seat == 0 || seat > 36) {
    //         return "Таких мест в вагоне не существует";
    //     } else {
    //         return  Math.ceil(seat / 4);
    //     }
    // }
    //     getCoupeNumber(25); 

    // function getTimeFromMinutes(minutesTotal) {
    //     if(typeof(minutesTotal) != 'number' || !Number.isInteger(minutesTotal) || minutesTotal < 0) {
    //         return "Ошибка, проверьте данные";
    //     }
        
    //     const hours = Math.floor(minutesTotal / 60);
    //     const minutes = minutesTotal % 60;

    //     let hoursStr = '';

    //     switch(hours) {
    //         case 0:
    //             hoursStr = 'часов';
    //             break;
    //         case 1:
    //             hoursStr = 'час';
    //             break;
    //         case 2:
    //         case 3:
    //         case 4:
    //             hoursStr = 'часa';
    //             break;
    //         default:
    //         hoursStr = 'часов';
    //     }

    //     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    // }

    // getTimeFromMinutes(180);

    // function findMaxNumber(a, b ,c, d) {
    //     // Самое простое - это использовать Math.max :)
    //     // А оптимизировать такую проверку мы научимся совсем скоро
    //     if (typeof(a) !== 'number' ||
    //         typeof(b) !== 'number' ||
    //         typeof(c) !== 'number' ||
    //         typeof(d) !== 'number') {
    //         return 0;
    //     } else {
    //         return Math.max(a, b ,c, d);
    //     }
    // }

    // const options = {
    //     name: 'test',
    //     width: 1024,
    //     height: 1024,
    //     colors: {
    //         border: 'black',
    //         bg: 'red'
    //     },

    //     makeTest: function() {
    //         console.log('Test');
    //     }

    // };

    // options.makeTest();

    // const {border, bg} = options.colors; // диструктаризация
    // console.log(border);

    // console.log(Object.keys(options).length);

    // console.log(options);
    // let counter = 0;
    // for(let key in options) {
    //     if(typeof(options[key]) === 'object') {
    //         for(let i in options[key]) {
    //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    //             counter++; // если записать то ответ будет 5,а если нет то 3
    //         }
    //     } else {
    //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
    //         counter++;
    //     }
    // }

    // console.log(counter);


    // const arr = [2, 13, 26, 8, 10];
    // // arr.sort(); // 10,13,2,26,8 ведет сортировку по первым цифрам а затем вторым
    // arr.sort(compareNum); // вместе с функцией compareNum формирует последовательность
    // console.log(arr);

    // function compareNum(a, b) {
    //     return a - b;
    // }


    // // arr[99] = 0;
    // // console.log(arr.length);
    // // console.log(arr);

    // arr.forEach(function(item, i, arr) {
    //     console.log(`${i}: ${item} внутри массива ${arr}`);
    // });

    // arr.pop(); // удаляет последний элемент с массива
    // arr.push(10);   // добаляет в конец массива элемент
    // console.log(arr);

    // for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }

        // for(let value of arr) {
        //     console.log(value);
        // }

        // const product = prompt('', '');
        // const products = product.split(", "); // в тойже последовательности пишет продукты в браузере,получ массив
        // product.sort(); // сортирует по алфавиту
        // console.log(products.join("; ")); // обьединил элементы массивы в строку

    // const obj = {
    //     a: 5,
    //     b: 1
    // };

    // const copy = obj; // передает ссылку то есть изменения происходящие в copy происходят и в obj

    // copy.a = 10;
    // console.log(copy);
    // console.log(obj);
//     const numbers = {
//         a: 2,
//         b: 5,
//         c: {
//             x: 7,
//             y: 4
//         }
//     };

//     function copy(mainObj) {
//         let copyObj = {};
//         for(let key in mainObj) {
//             copyObj[key] = mainObj[key];
//         }
//         return copyObj;
//     }

//     let newNumbers = copy(numbers);

//     newNumbers.a = 10;
//     // console.log(newNumbers);
//     // console.log(numbers);

//     // это поверхностное копиров,так как если измен обьект внутри обьекта то это изменение пройдет в обеих обьектах

//     const add = {
//         d: 17,
//         e: 20
//     };

//     // console.log(Object.assign(numbers, add));

//     const clone = Object.assign({}, add);
//     clone.d = 20;

//     // console.log(add);
//     // console.log(clone);

//     const oldArray = ['a', 'b', 'c'];
//     const newArray = oldArray.slice(); // в массивe клонирование выполняеться с помощью slice()

//     newArray[1] = 'Resul';
//     // console.log(oldArray);
//     // console.log(newArray);

//     const video = ['youtube', 'vimeo', 'rutube'],
//           blogs = ['wordpress', 'livejournal', 'blogger'],
//           internet = [...video, ...blogs, 'vk', 'facebook'];

//           console.log(internet);



//     function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     const num = [1, 2, 3];

//    log(...num);

//    const massiv = ['a', 'b'];

//    const newMassiv = [...massiv];



//    const oldObj = {
//         one: 1,
//         two: 2
//    };

//    const newObj = {...oldObj};

//    newObj.one = 10;

//    console.log(newObj);
//    console.log(oldObj);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мне ${age} и я владею языками:`;

//          languages.forEach(function(lang) {
//             str += ` ${lang.toUpperCase()}`;
//         });

//         return str;
//     }
    
// };
    
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// // 1. вывести из обьекта опыт
// function showExperience(plan) {
//    const {exp} = plan.skills;
//    return exp;
// }
// showExperience(personalPlanPeter);


// // Вывести "Язык js изучен на 20% Язык php изучен на 10%"
// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let str = '';

//     for(let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n` ;
//     }
//     return str;
// }
//     console.log(showProgrammingLangs(personalPlanPeter));




// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length  ===  0 ? str  =  'Семья пуста' : str  =   ' Семья состоит из:'  ;

//     arr.forEach(fam => {
//         str += ` ${fam}`;
//     });

//     return str;
// }
// console.log(showFamily(family));


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
  
//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });

// }
// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof(str) !== 'string') {
//         return 'Oшибка!';
//     }

//     let newStr = '';

//     for(let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i]; 
//     }
//     return newStr;

// }

// console.log(reverse(someString));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const all = [... baseCurrencies, ... additionalCu    rrencies];

// function availableCurr(arr, missingCurr) {
//     let str = '';

//     arr.length  ===  0 ? str  =  'Нет доступной валюты' : str  =  'Доступные валюты:\n' ;

//     arr . forEach ( function ( additional ,  base )  {
//         if  ( additional  !==  missingCurr )  {
//             str  +=  `${ additional }\n` ;
//         }
//     } ) ;

//     return str;

// }
// console.log(availableCurr(all, 'CNY'));



    // const soldier = {
    //     health: 400,
    //     armor: 100,
    //     sayHello: function() {
    //         console.log("Hello");
    //     }
    // };

    // const john = Object.create(soldier);

    // // const john = {
    // //     health: 100
    // // };

    // // john.__proto__ = soldier; // старый тип
    
    // // Object.setPrototypeOf(john, soldier);
    
    // john.sayHello();
    // // console.log(john);
    // // console.log(john.armor);









    ///приложение фильмов
   
    
    // const personalMovieDB = {
    //     count: 0,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false,
    //     start: function() {
    //         personalMovieDB.count =  +prompt("Сколько фильмов вы уже посмотрели", "");

    //         while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
    //             personalMovieDB.count =  +prompt("Сколько фильмов вы уже посмотрели", "");
    //         }
    //     },
    //     rememberMyFilms:function() {
    //         for(let i = 0; i < 2; i++) {
    //             let a = prompt("Один из последних просмотренных фильмов?", "").trim(),
    //                 b = prompt("Насколько оцените его?", "").trim();
        
    //             if(a != null && b != null && a != "" && b != "" && a.length < 50) {
    //                 personalMovieDB.movies[a] = b;
    //                 console.log("done");
    //             } else {
    //                 i--;
    //                 console.log("error");
    //             }
        
    //         }
    //     },

    //     detectPersonalLevel: function() {
    //         if(personalMovieDB.count < 10) {
    //             console.log("Просмотрено довольно мало фильмов");
    //         } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
    //             console.log('Вы классический зритель');
    //         } else if(personalMovieDB.count >= 30) {
    //             console.log('Вы киноман');
    //         } else {
    //             console.log('ошибка');
    //         }
    //     },
    //     showMyDB: function (hidden) {
    //         if(!hidden) {
    //             console.log(personalMovieDB);
    //         }
    //     },
    //     toggleVisibleMyDB: function() {
    //         if(personalMovieDB.privat) {
    //             personalMovieDB.privat = false;
    //         } else {
    //             personalMovieDB.privat = true;
    //         }
    //     },
    //     writeYourGenres: function(){
    //         // for(let i = 1; i <= 3; i++) {
    //         //    let genre = prompt(`Ваш любимый жанр под номером ${i}`);

    //         //     if(genre == '' || genre == null) {
    //         //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //         //         i--;
    //         //     }else {
    //         //         personalMovieDB.genres[i - 1] = genre;
    //         //     }

    //         // }
    //         //     personalMovieDB.genres.forEach((item, i) => {
    //         //         console.log(`Любимый жанр ${i + 1} - ${item}`);
    //         //     });  1 ый метод


    //         for(let i = 1; i < 2; i++) {
    //             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase().trim();

    //             if(genres == '' || genres == null) {
    //                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //                 i--;
    //             }else {
    //                 personalMovieDB.genres = genres.split(',');
    //                 personalMovieDB.genres.sort();

    //             }
    //         }

    //             personalMovieDB.genres.forEach((item, i) => {
    //                     console.log(`Любимый жанр ${i + 1} - ${item}`);
    //             }); 
    //     }
       
    // };
    






// упражнение 13

    // const shoppingMallData = {
    //     shops: [
    //         {
    //             width: 10,
    //             length: 5
    //         },
    //         {
    //             width: 15,
    //             length: 7
    //         },
    //         {
    //             width: 20,
    //             length: 5
    //         },
    //         {
    //             width: 8,
    //             length: 10
    //         }
    //     ],
    //     height: 5,
    //     moneyPer1m3: 30,
    //     budget: 50000
    // };
    
    // function isBudgetEnough(data) {
    //    let square = 0;
    //    let volume = 0;

    //    data.shops.forEach(shop => {
    //     square += shop.width * shop.length;
    //    });

    //    volume = data.height * square;

    //    if(data.budget - (volume * data.moneyPer1m3) > 0) {
    //         return 'Бюджета достаточно';
    //    } else { 
    //         return 'Бюджета недостаточно';
    //    }
    // }

    // console.log(isBudgetEnough(shoppingMallData));


// упражнение 14


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort() ;
//     let  a  =  [ ] ,  b  =  [ ] ,  c  =  [ ] ,  rest  =  [ ] ;

//     for  ( let  i  =  0 ;  i  <  arr.length ;  i ++ )  {
//         if  ( i  <  3 )  {
//             a +=  ` ${arr[i]}`;
//         }  else  if  ( i  <  6 )  {
//             b += ` ${arr[i]}` ;
//         }  else  if  ( i  <  9 )  {
//             c += ` ${arr[i]}` ;
//         }  else  {
//             rest += ` ${arr[i]}` ;
//         }
//     }
//     return  [ a , b , c ,  `Оставшиеся студенты: ${ rest.length  ===  0 ? '-' : rest.split ( ', ' ) } ` ];
// }
   
// console.log(sortStudentsByGroups(students));

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));


// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + parseInt((sDish.price).slice(0,-1)) < +average.slice(0, -1)) {
//         console.log();
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));



// function transferWaitors(data) {
//     const copy = Object.assign({}, data.waitors);
//     copy.waitors = [{name: 'Mike', age: 32}];
//     console.log(copy);
//     return copy;
// }


// transferWaitors(restorantData);


    

