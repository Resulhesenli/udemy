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





    // let numberOfFilms;

    //     function start() {
    //         numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели", "");

    //         while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    //             numberOfFilms =  +prompt("Сколько фильмов вы уже посмотрели", "");
    //         }
    //     }

    //     start();
    
    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };
    


    //  for(let i = 0; i < 2; i++) {
    //     let a = prompt("Один из последних просмотренных фильмов?", ""),
    //         b = prompt("Насколько оцените его?", "");

    //     if(a != null && b != null && a != "" && b != "" && a.length < 50) {
    //         personalMovieDB.movies[a] = b;
    //         console.log("done");
    //     } else {
    //         i--;
    //         console.log("error");
    //     }

    // }

    // function rememberMyFilms() {
    //     for(let i = 0; i < 2; i++) {
    //         let a = prompt("Один из последних просмотренных фильмов?", "").trim(),
    //             b = prompt("Насколько оцените его?", "").trim();
    
    //         if(a != null && b != null && a != "" && b != "" && a.length < 50) {
    //             personalMovieDB.movies[a] = b;
    //             console.log("done");
    //         } else {
    //             i--;
    //             console.log("error");
    //         }
    
    //     }
    // }
    // rememberMyFilms();

    

    // function detectPersonalLevel() {
    //     if(personalMovieDB.count < 10) {
    //         console.log("Просмотрено довольно мало фильмов");
    //     } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
    //         console.log('Вы классический зритель');
    //     } else if(personalMovieDB.count >= 30) {
    //         console.log('Вы киноман');
    //     } else {
    //         console.log('ошибка');
    //     }
    // }
    // detectPersonalLevel();

    // function showMyDB (hidden) {
    //     if(!hidden) {
    //         console.log(personalMovieDB);
    //     }
    // }
    // showMyDB (personalMovieDB.privat);

    // function writeYourGenres(){
    //     for(let i = 1; i <= 3; i++) {
           
    //         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    //     }
    // }

    // writeYourGenres();




   
    // movies['lastmovie' + ':' + 'movieIdb'];


    // console.log(personalMovieDB);





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


    const arr = [2, 13, 26, 8, 10];
    // arr.sort(); // 10,13,2,26,8 ведет сортировку по первым цифрам а затем вторым
    arr.sort(compareNum); // вместе с функцией compareNum формирует последовательность
    console.log(arr);

    function compareNum(a, b) {
        return a - b;
    }


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

    