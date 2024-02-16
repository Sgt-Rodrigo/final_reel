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

// function checkEmptyInputs(e) {
//   console.log('SUBMIT BUTTON CLICKED')
//   allFormInputs.forEach((input) => {
//     if (!input.value.trim()) {
//       console.log('data missing')
//      return alert(`C O M P L E T E   A L L   F I E L D S   M A T E!`);
//     }
//   });
//   return
// }

// submitBtn.addEventListener("click", (e)=>{
//     checkEmptyInputs(e);

// });
let allFieldsCompleted = true;

function checkEmptyInputs(event) {
  allFieldsCompleted = true; // Reset to true before checking

  console.log('SUBMIT BUTTON CLICKED');

  allFormInputs.forEach((input) => {
    if (!input.value.trim()) {
      console.log('data missing');
      allFieldsCompleted = false;
    }
  });

  if (!allFieldsCompleted) {
    event.preventDefault();
    alert(`C O M P L E T E   A L L   F I E L D S   M A T E!`);
  }
}

submitBtn.addEventListener("click", checkEmptyInputs);