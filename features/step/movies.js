export class Movie {
  movies = [];
  nombre;
  constructor(movies, nombre) {
    this.movies = movies;
    this.nombre = nombre;
  }
}
export default new Movie();
