import { Cat } from '../../src/js/cat.ts';

describe('Cat', function() {
  let cat;

  beforeEach(function() {
    cat = new Cat();
  });

  describe('#getMeow', function() {
    it('returns a meow', function() {
      expect(cat.getMeow()).toEqual('meow');
    });
  });
});
