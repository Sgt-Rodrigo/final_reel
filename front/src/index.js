//*? using my own reset cause bootstrap does NOT reset ul/ol and others.
import "./reset.scss";
import "./main.scss";
// import "./views/subscribe-form/subscribe-form.scss"
import MovieLoader from "./index-modules/movieLoader";
import "./index-modules/formRenderer";
import "./views/add_movie_form/add_movie_form";

MovieLoader.loadAndRenderGrid();
