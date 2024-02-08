export default class Movie {
    constructor({title, year, director, duration, genre, rate, poster, id}) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster
        this.id = id;

        //*id is generated with uuid
    }
}

