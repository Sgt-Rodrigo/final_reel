const axios = require("axios");

const addMoviesBtns = document.querySelectorAll("#add-movies");
const paraContainer = document.querySelector("#hero-cta__para-container");
const ctaPara = document.querySelector("#hero-cta__para");
const path = "http://localhost:3001/movies/add-movie";

//*! requests the form to server
async function fetchForm() {
  //*? Prevents multiple forms being deployed by unnecessary clicking
  const existingForm = document.querySelector(".form-container");
  if (existingForm) {
    return;
  }

  //*? fetches form
  try {
    const response = await axios.get(path);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    //*removes paragraph
    paraContainer.remove();

    //*injects the form
    const formHtml = response.data; //*html string
    const ctaTextContainer = document.querySelector("#hero-cta__text");
    const formContainer = document.createElement("div");
    formContainer.classList.toggle("form-container");
    formContainer.id = "form-container";
    formContainer.innerHTML = formHtml;
    ctaTextContainer.append(formContainer);
  } catch (error) {
    console.log(error);
    alert("failed to load form, retry later");
  }
}

//*! targets two btns with same functionality
addMoviesBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    fetchForm();
  });
});
