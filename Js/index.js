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





//     let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    
    
//     const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };
    


//      for(let i = 0; i < 2; i++) {
//         let a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("Насколько оцените его?", "");

//         if(a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             i--;
//             console.log("error");
//         }

//     }

//     if(personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log('Вы классический зритель');
//     } else if(personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('ошибка');
//     }

//     console.log(personalMovieDB);

   
//     // movies['lastmovie' + ':' + 'movieIdb'];


//     // console.log(personalMovieDB);





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


const usdCurr = 1.7;
const eurCurr = 2;

    function convert(amount,curr) {
        console.log(amount * curr);
    }

    convert(100, usdCurr);
    convert(100, eurCurr);