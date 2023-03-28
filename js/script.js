"use strict";


const numberOffilms = +prompt('How much films did you watch?', '');

const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the last film that did you watch?', ''),
      b = prompt('How you can estimate its?', ''),
      d = prompt('What is the last film that did you watch?', ''),
      c = prompt('How you can estimate its?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);



