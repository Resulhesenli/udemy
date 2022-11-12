"use strict";
//ok отмена
// const result = confirm("Are you here?");
// console.log(result);

//ввод цифр(возраста)
// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer) + ' ' + answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", '');
// answers[1] = prompt("Как вашa фамилия?", '');
// answers[2] = prompt("Сколько вам лет?", '');

// document.write(answers);

// const answers = [prompt("Как ваше имя?", ''), prompt("Как вашa фамилия?", ''), prompt("Сколько вам лет?", '')];

// document.write(answers);

    // const category = 'toys';

    // console.log(`https://someurl.com/${category}/5`);

    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
    
    
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    
    let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
    let movieIdb = +prompt("Насколько оцените его?", "");
    
    personalMovieDB.movies[lastMovie] = movieIdb;

    console.log(personalMovieDB);

   
    // movies['lastmovie' + ':' + 'movieIdb'];


    // console.log(personalMovieDB);