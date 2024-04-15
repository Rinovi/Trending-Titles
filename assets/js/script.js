const getRandomMoviesButton = document.getElementById('getRandomMoviesButton');
const movieAPI = "https://api.themoviedb.org/3/discover/movie?language=en&with_genres=27"
const oldAPI = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1'


getRandomMoviesButton.addEventListener('click', function() {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzM2Y1YWYwZGYzN2NiMzJlZWMzODNmZDY3MDBlYiIsInN1YiI6IjY2MTVmM2U0Mzk3ZGYwMDE3ZGM4YzA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-oNPj8d96s08rtB6JLbcFxCXWF7pT_V2hkcxrMtHgqg'; 
    
    fetch(movieAPI, {
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
        movieContainer.appendChild(moviesList); //for loop to make 5 movies appear in console
        for (let index = 0; index < 5; index++) {
        console.log(data.results[index])    
        }
    });
});
// Mustafa- Functionality for modal Button below
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//function to get random elements from an array
function getRandomElements(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}


 //
 //