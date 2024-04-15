const getRandomMoviesButton = document.getElementById('getRandomMoviesButton');

getRandomMoviesButton.addEventListener('click', function() {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzM2Y1YWYwZGYzN2NiMzJlZWMzODNmZDY3MDBlYiIsInN1YiI6IjY2MTVmM2U0Mzk3ZGYwMDE3ZGM4YzA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-oNPj8d96s08rtB6JLbcFxCXWF7pT_V2hkcxrMtHgqg'; 
    
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        const movieContainer = document.getElementById('moviesContainer');
        movieContainer.innerHTML = ''; 
        const moviesList = document.createElement('ul');
        data.results.forEach(function(movie) {
            const listItem = document.createElement('li');
            listItem.textContent = movie.title;
            moviesList.appendChild(listItem);

            if (movie.poster_path){
                const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                const posterIMG = document.createElement(`img`);
                posterIMG.src = posterURL;
                posterIMG.alt = `${movie.title} Poster`;
                posterIMG.classList.add(`poster-img`)
                listItem.appendChild(posterIMG);
            }
            moviesList.appendChild(listItem)
        });
        movieContainer.appendChild(moviesList);
    });
});
