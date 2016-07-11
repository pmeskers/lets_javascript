import { Cat } from '../../src/js/cat.ts';

describe('Cat', function() {
  let cat;

  beforeEach(() => {
    cat = new Cat();
  });

  describe('#getMeow', () => {
    it('returns a meow', () => {
      expect(cat.getMeow()).toEqual('meow');
    });
  });
});
