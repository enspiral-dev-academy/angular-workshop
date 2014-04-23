'use strict';

describe('basics', function() {
  beforeEach(function() {
    browser.get('/#/basics')
  });

  it('updates searchText model', function() {
    var input = element(by.model('searchText'));
    input.sendKeys('my text');
    expect(element(by.css('.searching')).getText()).toBe('my model is my text');
  });

});
