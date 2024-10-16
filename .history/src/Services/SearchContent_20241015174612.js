const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTNhNzNhYzdjNGY1ODA4MDFjMzAwMjBlZTYwZGVjNSIsIm5iZiI6MTcyOTAwMDYxNS4xNjQ1MzYsInN1YiI6IjY2OWVmOTliMDJhOTk2MGU5NjBhNGYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvZwpqJvRFMcPJcUJlPSjKtv_EpCQpshfvlABqwrREI'
    }
};

fetch('https://api.themoviedb.org/3/search/multi?query=Top%20Gun&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));