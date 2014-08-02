'use strict';
describe('basics', function() {
  beforeEach(function() {
    browser.get('/#/basics')
  });

  it('lists 3 cohorts', function() {
    expect(element.all(by.css('.cohort-list tr')).count()).toBe(4);
  })

  describe('searching for cohorts', function() {
    beforeEach(function() {
      element(by.model('searchText')).sendKeys('slugs');
    });

    it('updates searchText model', function() {
      expect(element(by.css('.searching')).getText()).toBe('my model is slugs');
    });

    it('filters cohorts by searchText', function() {
      expect(element.all(by.css('.cohort-list tr')).count()).toBe(2)
    });
  });
});
