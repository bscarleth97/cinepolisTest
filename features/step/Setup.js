import Cine from "./cine";
module.exports = function() {
  this.Given(/^we are in Cinepolis$/, function() {
    // Write code here that turns the phrase above into concrete actions
    browser.url("http://www.cinepolis.com/");
  });
};
