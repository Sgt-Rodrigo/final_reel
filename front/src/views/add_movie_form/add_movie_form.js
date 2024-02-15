import "../add_movie_form/add_movie_form.scss";

//* clears the form inputs
const clearBtn = document.querySelector("#clear-btn");
const submitBtn = document.querySelector("#submit-btn");
const allFormInputs = document.querySelectorAll("#add-movie-form input");

function clearInputs() {
  console.log("clearInputs called");
  allFormInputs.forEach((input) => (input.value = ""));
}

document.addEventListener("DOMContentLoaded", () => {
  clearBtn.addEventListener("click", clearInputs);
});

//* front-end data validation

function checkEmptyInputs(e) {
  allFormInputs.forEach((input) => {
    e.preventDefault();
    if (!input.value) {
      return alert(`C O M P L E T E   A L L   F I E L D S   M A T E!`);
    }
  });
}

submitBtn.addEventListener("click", (e)=>{
    checkEmptyInputs(e);

    
});
