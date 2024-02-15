// import $ from 'jquery';
// import tempData from '../../scripts/tempData';
import axios from 'axios';
import Repository from './repository';
import CardRenderer from './cardRenderer';

//*new repository
const newRepo = new Repository();
// const URL = `https://students-api.2.us-1.fl0.io/movies`;
const URL = 'http://localhost:3001/movies';


// export default class MovieLoader {

//     static loadAndRenderGrid() {
//         //*? request data
 
//      const response = $.get(URL, (data)=> {
//          //*? push data to local storage + id
//          data.forEach(movie => {
//              const newMovie = newRepo.addMovie(movie);
//          })
         
//          //*!! Render Cards on Page
//          CardRenderer.renderAllCards(newRepo.getAllMovies());    
//      });   
// }


//* implementation with axios > cors error > 

export default class MovieLoader {

    static async loadAndRenderGrid() {
        //*? request data
 
     const response = await axios.get(URL);    
     
         //*? push data to local storage + id
         response.data.forEach(movie => {
             const newMovie = newRepo.addMovie(movie);
         })
         
         //*!! Render Cards on Page
         CardRenderer.renderAllCards(newRepo.getAllMovies());    
         
         
   


    //*! Uncomment this and comment out the async function if cors error is encounter in order to see the cards rendered
    // tempData.forEach(movie => {
    //     const newMovie = newRepo.addMovie(movie);
    // })    
    
    // CardRenderer.renderAllCards(newRepo.getAllMovies());  
 
}
   
}


