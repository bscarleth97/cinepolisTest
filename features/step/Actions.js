import { Cine } from "C:/Users/Brenda Scarleth/Desktop/FCFM/Enroute/EverCucumber/Cucumber/Cinepolis/features/step/cine.js";
let cine = new Cine();
module.exports = function() {
  this.Then(/^we click "([^"]*)"$/, function(arg1) {
    // Write code here that turns the phrase above into concrete actions
    browser.click(`${arg1}`);
  });

  this.When(/^we select "([^"]*)" in "([^"]*)"$/, function(arg1, arg2) {
    // Write code here that turns the phrase above into concrete actions
    cine.selectOption(`#${arg2}`, arg1);
  });

  this.When(/^we go through the movies list "([^"]*)"$/, function(arg1) {
    // Write code here that turns the phrase above into concrete actions
    let movies = cine.checkMovies();
    //cine.goToMovie(movies);
  });

  this.Then(
    /^we drag "([^"]*)" , "([^"]*)" in "([^"]*)" , "([^"]*)"$/,
    function(arg1, arg2, arg3, arg4) {
      // Write code here that turns the phrase above into concrete actions
      cine.filterHours(`${arg1}`, `${arg2}`, `${arg3}`, `${arg4}`);
    }
  );
};
