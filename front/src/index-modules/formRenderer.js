const axios = require("axios");

const addMoviesBtns = document.querySelectorAll("#add-movies");
const test = document.querySelector('.test');
const heroCtaContainer = document.querySelector("#hero-cta__text");
const ctaPara = document.querySelector("#hero-cta__para");
const btnGroup = document.querySelector("#cta-button-group");
const path = "http://localhost:3001/movies/add-movie";

async function fetchForm() {
  try {
    const response = await axios.get(path);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    //* Prevents multiple form placement and keeps the posibility of new form request
    const existingForm = document.querySelector(".form-container");
    if (existingForm) {
      existingForm.remove();
    }

    //*remove paragraph
    ctaPara.remove();

    //*injects the form
    const formHtml = response.data;
    const formContainer = document.createElement("div");
    formContainer.classList.toggle("form-container");
    formContainer.innerHTML = formHtml;
    heroCtaContainer.insertBefore(formContainer, btnGroup);
  } catch (error) {
    console.log(error);
    alert("failed to load form, retry later");
  }
}

addMoviesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    fetchForm();
  });
});


// test.addEventListener('click', (e)=>{
//     e.preventDefault();
// })