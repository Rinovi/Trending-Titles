let genresId;
let genresList = ['action', 'crime', 'drama', 'fantasy', 'horror', 'comedy', 'romance', 'science-fiction', 'documentary', 'thriller', 'mystery', 'war', 'western', 'anime', 'tv-movie', 'musical']

$(document).ready(function () { //API function that renders Chuck Norris Joke onto page
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/chucknorris',
    headers: { 'X-Api-Key': 'EuAua3ZW1gqABMQbdhxj1A==VKnZrE0wy6ft3Vgf' },
    contentType: 'application/json',
    success: function (result) {
      console.log('Chuck Norris joke API response:', result);
      const formattedJoke = 'Chuck Norris Joke - "' + result.joke + '"';
      $('#ChuckNorrisJoke').text(formattedJoke); // Access the 'joke' property from the API response
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  });
});


const getRandomMoviesButton = document.getElementById('getRandomMoviesButton');

const oldAPI = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1'
for (let i = 0; i < genresList.length; i++) {
  //Accessing each genres Id that is specifically assigned to that genre
  document.getElementById(`${genresList[i]}`).addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
    let selectedGenresId = event.target.dataset.genres_id

    console.log(selectedGenresId); //using it check if the correct movies get displayed on our page
    genresId = selectedGenresId
  })
}

getRandomMoviesButton.addEventListener('click', function () {
  let movieAPI = `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genresId}` //generating dynamic URL query parameter to render the correct Movies/Titles onto page
  const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzM2Y1YWYwZGYzN2NiMzJlZWMzODNmZDY3MDBlYiIsInN1YiI6IjY2MTVmM2U0Mzk3ZGYwMDE3ZGM4YzA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-oNPj8d96s08rtB6JLbcFxCXWF7pT_V2hkcxrMtHgqg';

  fetch(movieAPI, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(movieAPI)
      const movieContainer = document.getElementById('moviesContainer');
      movieContainer.innerHTML = '';
      const moviesList = document.createElement('ul');

      for (let index = 0; index < 5; index++) { // looping through the dataset for the movie results and assigning 5 movies it to a variable
        const movie = data.results[index];

        const genres = data.results[index].genres; // Assuming genres are stored in an array
        if (genres && genres.length > 0) {
          const genreName = genres[0].name; // Access the genre name or ID as needed
          // Continue with your code logic using the genre information
        } else {
          // Handle the case where genre information is missing
        }

        const listItem = document.createElement('li');
        const movieInfo = document.createElement('div');
        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = movie.title;
        movieInfo.appendChild(titleParagraph); //creating new elements with the movie results in them and appending them to titleParagraph
        if (movie.poster_path) { // pulling movie poster image from the api itself and rendering it to the page with styling added
          const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          const posterIMG = document.createElement(`img`);
          posterIMG.src = posterURL;
          posterIMG.alt = `${movie.title} Poster`;
          posterIMG.classList.add(`poster-img`)



          listItem.appendChild(movieInfo);
          listItem.appendChild(posterIMG);
        }
        console.log(listItem);
        moviesList.appendChild(listItem);
      }

      movieContainer.appendChild(moviesList);
      for (let index = 0; index < 5; index++) {
        console.log(data.results[index])
      }
    });
});





// Function to show the modal
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Event listener for the close button
document.getElementById('closeModal').addEventListener('click', closeModal);

// Logic to check if 3 genres are selected and show the modal
function handleSave() {
  if (!genresId) {
    showModal();
  }
}

// Add event listener to the save button
document.getElementById('getRandomMoviesButton').addEventListener('click', handleSave);

// Get the button and target section elements
const startNowButton = document.getElementById('start-now-button');
const selectGenresSection = document.getElementById('select-genres');

// Add a click event listener to the button
startNowButton.addEventListener('click', () => {
  // Scroll to the target section smoothly
  selectGenresSection.scrollIntoView({ behavior: 'smooth' });
});