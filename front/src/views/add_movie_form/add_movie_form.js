const axios = require('axios');

const heroCtaText = document.querySelector("#hero-cta__text");
const heroCta = document.querySelector('#hero-cta');
const heroTextContainer = document.querySelector('#hero-cta__text');
const paraContainer = document.querySelector('#hero-cta__para-container');
const paragraph = `<p class="hero-cta__para lead fs-3 d-none d-sm-block" id="hero-cta__para">Explore the latest releases, timeless
  classics, and hidden gems. Request your favorite films, stay updated with our newsletter,
  and tune in to our podcast for insightful discussions and behind-the-scenes stories.</p>`;
const form = document.querySelector('#add-movie-form');
const gridTitle = document.querySelector('#grid-title');



//*! requests new movie addition



function renderSingleCard(movieObj) {
  console.log('Movie:', movieObj);

  const movie = movieObj.data;
  //*? card row & col
  const cardsRow = document.querySelector("#cards-row");
  const cardCol = document.createElement("div");
  cardCol.classList.toggle("col");

  //*? card composition
  const cardDiv = document.createElement("div");
  cardDiv.classList.toggle("card");
  const cardImage = document.createElement("img");
  cardImage.classList.toggle("card-img");
  cardImage.alt = `${movie.title} poster`;
  cardImage.src = `${movie.poster}`;

  //*card text-overlay
  const cardTextContainer = document.createElement("div");
  cardTextContainer.classList.toggle("card-img-overlay");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.toggle("card-title");
  cardTitle.innerHTML = `${movie.title} <br> (${movie.year})`;
  const cardTextGenre = document.createElement("p");
  cardTextGenre.classList.toggle("card-text");
  cardTextGenre.textContent = `${movie.genre.join(", ")}`;
  const cardTextDuration = document.createElement("p");
  cardTextDuration.classList.toggle("card-text");
  cardTextDuration.textContent = `${movie.duration}`;
  const cardTextDirector = document.createElement("p");
  cardTextDirector.classList.toggle("card-text");
  cardTextDirector.textContent = `${movie.director}`;
  const cardTextRate = document.createElement("p");
  cardTextRate.classList.add("card-text", "rate");
  cardTextRate.textContent = `Rate: ${movie.rate}`;

  //**appending
  cardTextContainer.append(
    cardTitle,
    cardTextGenre,
    cardTextDuration,
    cardTextDirector,
    cardTextRate
  );

  cardDiv.append(cardImage, cardTextContainer);
  cardCol.append(cardDiv);
  
  //*? Gets a reference to the first child of grid (or null if there are no children)
const grid = document.querySelector('#cards-row');
const firstCard = grid.firstElementChild;

grid.insertBefore(cardCol, firstCard);

}


//*! clears the form inputs >
function clearInputs() {
  const allFormInputs = document.querySelectorAll("#add-movie-form input");
  console.log("clearInputs called");
  allFormInputs.forEach((input) => (input.value = ""));
}


// //*! closes the form > restores cta paragraph
function closeFormRestoreText() {
  const formContainer = document.querySelector('#form-container')
  formContainer.remove();
  paraContainer.innerHTML = paragraph;
  heroTextContainer.append(paraContainer);
}


//*? uses delegation to target the nodes 
document.addEventListener("DOMContentLoaded", () => {
  heroCta.addEventListener("submit", function (e) {
    if (e.target.matches("#add-movie-form")) {
      e.preventDefault(); // Prevent the default form submission

    //* Serializes the form data
    // const formData = new FormData(e.target);
    const formData = {
      title: e.target.elements.title.value,
      year: e.target.elements.year.value,
      director: e.target.elements.director.value,
      duration: e.target.elements.duration.value,
      genre: e.target.elements.genre.value,
      rate: e.target.elements.rate.value,
      poster: e.target.elements.poster.value
    };

    //* Sends a POST request using Axios
    axios.post('http://localhost:3001/movies', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function(response) {
        //*? Handle the response (e.g., update the grid with the new movie)
        renderSingleCard(response);
        gridTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
       
      })
      .catch(function(error) {
        // Handle errors
        console.error('An error occurred', error);
      });
    }   
  });
});



    //*clear and close btns
document.addEventListener("DOMContentLoaded", () => {
  heroCta.addEventListener("click", (e) => {
    if (e.target.matches("#clear-btn")) {
      clearInputs();
    }

    if (e.target.matches("#close-form-btn")) {
      closeFormRestoreText();
    }
  });
});


// document.addEventListener('DOMContentLoaded', function() {
//   form.addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent the default form submission

//     //* Serializes the form data
//     const formData = new FormData(this);

//     //* Sends a POST request using Axios
//     axios.post('/movies', formData)
//       .then(function(response) {
//         //*? Handle the response (e.g., update the grid with the new movie)
//         renderSingleCard(movie);
//         gridTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
       
//       })
//       .catch(function(error) {
//         // Handle errors
//         console.error('An error occurred', error);
//       });
//   });
// });