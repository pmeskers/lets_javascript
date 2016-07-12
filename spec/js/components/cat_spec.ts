import { Cat } from 'cat.component.ts';

describe('Cat', function() {
  describe('render', function() {
    beforeEach(function() {
      let fixture = this.componentBuilder.createSync(Cat);
      this.element = fixture.nativeElement;
    });

    it('renders a meow', function() {
      expect(this.element.textContent).toEqual('~ meow ~');
    });
  });
});
