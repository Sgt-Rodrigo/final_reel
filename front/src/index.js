//*? using my own reset cause bootstrap does NOT reset ul/ol and others.
import "./reset.scss";
import "./main.scss";
// import "./views/subscribe-form/subscribe-form.scss"
import MovieLoader from "./index-modules/movieLoader";
import "./index-modules/formRenderer";
import "./views/add_movie_form/add_movie_form";

MovieLoader.loadAndRenderGrid();


//*? return to top button

const returnButton = document.querySelector('.return-btn');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) { // Adjust 100 to the scroll position you prefer
//         returnButton.style.display = 'block';
//     } else {
//         returnButton.style.display = 'none';
//     }
// });

window.addEventListener('scroll', () => {
    const section = document.querySelector('#grid-title');
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight / 2) {
        returnButton.style.display = 'block';
    } else {
        returnButton.style.display = 'none';
    }
});