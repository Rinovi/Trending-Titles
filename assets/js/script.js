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





const getRandomMoviesButton = document.getElementById('RandomMovies'); //get the button to desiplay random movies
const movieList = document.getElementById('movieList'); //get the list element with the id "movieList"

//add a event listener for a click
getRandomMoviesButton.addEventListener('click', function() { //this async functiom is used to make sure that we have access first. Then the await pauses the exacution so that if it doesnt work then the console errors will pop up
    try {
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzM2Y1YWYwZGYzN2NiMzJlZWMzODNmZDY3MDBlYiIsInN1YiI6IjY2MTVmM2U0Mzk3ZGYwMDE3ZGM4YzA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-oNPj8d96s08rtB6JLbcFxCXWF7pT_V2hkcxrMtHgqg'; //make a fetch request to the movieDB api to get a list of popular movies with access token.will replace with an actual key
        const response = fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then()
        
        // const data = await response.json(); // parse the response
        
        // //check if data.results is not undefined
        // if (data.results) {
        //     //get 5 random movies
        //     const randomMovies = getRandomElements(data.results, 5);

        //     //clear previous list
        //     movieList.innerHTML = '';

        //     //display 5 random movies
        //     randomMovies.forEach(movie => {
        //         const li = document.createElement('li');
        //         li.textContent = movie.title;
        //         movieList.appendChild(li);
        //     });
        // } else {
        //     console.error('Error fetching movies:', data); //log error if the response does not contain a result
        // }
    } catch (error) {
        console.error('Error fetching movies:', error); //log an error if the fetch request fails
    }
});

//function to get random elements from an array
function getRandomElements(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

