import $ from 'jquery';
import Repository from './repository';
import CardRenderer from './cardRenderer';

//*new repository
const newRepo = new Repository();


export default class MovieLoader {

    static loadAndRenderGrid() {
        //*? request data
    const response = $.get(`https://students-api.2.us-1.fl0.io/movies`, (data)=> {
        //*? push data to local storage + id
        data.forEach(movie => {
            const newMovie = newRepo.addMovie(movie);
        })
        
        //*!! Render Cards on Page
        CardRenderer.renderAllCards(newRepo.getAllMovies());    
        
        
    });
}
   
}


