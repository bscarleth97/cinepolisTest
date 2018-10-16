import { Movie } from "C:/Users/Brenda Scarleth/Desktop/FCFM/Enroute/EverCucumber/Cucumber/Cinepolis/features/step/movies.js";
export class Cine {
  url = "https://www.cinepolis.com/";

  constructor() {}

  selectOption(selector, value) {
    browser.selectByValue(`${selector}`, value);
  }

  filterHours(valueLeft, valueRight, sliderLeft, sliderRight) {
    browser.dragAndDrop(`${sliderLeft}`, `${valueLeft}`);
    browser.dragAndDrop(`${sliderRight}`, `${valueRight}`);
  }

  goToMovie(movies) {
    let nombres = browser.getAttribute(".datalayer-movie", "id");
    let i = 0;
    for (i = 0; i < nombres.length; i = i + 1) {
      browser.click(`#${nombres[i]}`);

      browser.pause(5000);
      browser.url("https://www.cinepolis.com/");
    }
  }

  checkMovies() {
    let i = 0;
    let y = 0;
    let a = browser.getAttribute(".descripcion", "id");
    let peliculas = [];

    for (i = 0; i < a.length; i = i + 1) {
      let selectorA;
      let j = 1;
      let lista = [];
      console.log(a[i]);
      while (true) {
        selectorA = `//*[@id=\"${a[i]}"]/div/div/div[2]/time[${j}]`;
        if (browser.isExisting(selectorA)) {
          let hora = browser.getText(selectorA);
          console.log(hora);
          if (Array.isArray(hora)) {
            for (y = 0; y < hora.length; y = y + 1) {
              lista.push(hora[y]);
            }
          } else {
            lista.push(hora);
          }
          j++;
        } else {
          break;
        }
      }
      let movie = new Movie(lista, a[i]);
      peliculas.push(movie);
    }
    return peliculas;
  }
}
export default new Cine();
