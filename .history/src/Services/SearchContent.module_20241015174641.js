import { }

fetch('https://api.themoviedb.org/3/search/multi?query=Top%20Gun&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));