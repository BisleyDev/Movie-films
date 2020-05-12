'use strict';

let numberOfFilms;

function start() {
	do {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	} while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	private: false
};

/* let i = 0;
while(i < 2) {	
	const lastFilm = prompt('Какой последний просмотренный фильм?', '');
	if (lastFilm) {
		const rating = prompt('На сколько оцените его?', '');
		if (lastFilm && lastFilm.length < 50) {
			personalMovieDB.movies[lastFilm] = rating;
			i++;		
		}
	}
} */


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const lastFilm = prompt('Какой последний просмотренный фильм?', '');
		if (lastFilm) {
			const rating = prompt('На сколько оцените его?', '');
			if (lastFilm && lastFilm.length < 50) {
				personalMovieDB.movies[lastFilm] = rating;
			}
		} else {
			i--;
		}
	}
}

function detectPersonalLevel() {
	const countFilms = personalMovieDB.count;
	if (countFilms < 10) {
		alert('Просмотрено довольно мало фильмов!');
	} else if (countFilms > 10 && countFilms < 30) {
		alert('Вы класический зритель');
	} else if (countFilms > 30) {
		alert('Вы киноман!!!');
	}else {
		alert('Что-то пошло не так');
	}
}

function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let num = 1; num < 4; num++) {
		let genres = prompt(`Ваш любимы жанр № ${num}`, '');
		personalMovieDB.genres[num] = genres;
	}
}


rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();