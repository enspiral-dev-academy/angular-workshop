'use strict';

describe('nav', function() {
  beforeEach(function() {
    browser.get('/#')
  });

  it('should have 2 menu items', function() {
    expect(element.all(by.css('.nav li')).count()).toBe(2);
  });

  it('should have a link to basics', function() {
    expect(element(by.css('.nav li:last-child')).getText()).toBe('Basics')
  })
});
