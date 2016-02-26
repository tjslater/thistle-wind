'use strict';

<<<<<<< HEAD
var config = browser.params;

=======
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
describe('Main View', function() {
  var page;

  beforeEach(function() {
<<<<<<< HEAD
    browser.get(config.baseUrl + '/');
=======
    browser.get('/');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
<<<<<<< HEAD
    expect(page.imgEl.getAttribute('src')).toMatch(/yeoman.png$/);
=======
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });
});
