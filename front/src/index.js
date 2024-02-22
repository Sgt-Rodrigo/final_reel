//*? using my own reset cause bootstrap does NOT reset ul/ol and others.
import './reset.scss';
import "./main.scss";
import MovieLoader from "./index-modules/movieLoader";
import './index-modules/formRenderer';

MovieLoader.loadAndRenderGrid();
