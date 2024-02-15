export default class CardRenderer {

    static renderSingleCard(movie) {

            //*? card row & col
            const cardsRow = document.querySelector('#cards-row');            
            const cardCol = document.createElement('div');
            cardCol.classList.toggle('col');
        
            //*? card composition
            const cardDiv = document.createElement('div');
            cardDiv.classList.toggle('card');        
            const cardImage = document.createElement('img');
            cardImage.classList.toggle('card-img');
            cardImage.alt = `${movie.title} poster`;
            cardImage.src = `${movie.poster}`
                 
            //*card text-overlay        
            const cardTextContainer = document.createElement('div');
            cardTextContainer.classList.toggle('card-img-overlay');
        
            const cardTitle = document.createElement('h5');
            cardTitle.classList.toggle('card-title');
            cardTitle.textContent = `${movie.title} (${movie.year})`;
            const cardTextGenre = document.createElement('p');
            cardTextGenre.classList.toggle('card-text');
            cardTextGenre.textContent = `${movie.genre.join(', ')}`;
            const cardTextDuration = document.createElement('p');
            cardTextDuration.classList.toggle('card-text');
            cardTextDuration.textContent = `${movie.duration}`;
            const cardTextDirector = document.createElement('p');
            cardTextDirector.classList.toggle('card-text');
            cardTextDirector.textContent = `${movie.director}`;
            const cardTextRate = document.createElement('p');
            cardTextRate.classList.toggle('card-text');
            cardTextRate.textContent = `${movie.rate}`;        
            
            //**appending
            //*?appending
            cardTextContainer.append(
                cardTitle, 
                cardTextGenre,
                cardTextDuration,
                cardTextDirector,
                cardTextRate
                );

              cardDiv.append(cardImage,cardTextContainer);
              cardCol.append(cardDiv);
              cardsRow.append(cardCol);
        };

    static renderAllCards(allMovies){
        //* not actually necessary when rendering onload
        CardRenderer.refreshGrid();

        allMovies.forEach(movie => {
            CardRenderer.renderSingleCard(movie)
        })
    };

    static refreshGrid(){
        const cardsRow = document.querySelector('#cards-row');
        cardsRow.innerHTML = '';
    };

    };
