var React = require('react');
var ReactHelper = require('../helpers/react-helper');

class DummyComponent extends React.Component {
  render() {
    return (
      <div>I have some contents</div>
    );
  }
}

describe('ReactHelper', function() {
  describe('.mockComponent', function() {
    beforeEach(function() {
      ReactHelper.mockComponent(DummyComponent);
      this.el = ReactHelper.render(
        <DummyComponent />
      );
    });

    it('replaces any subsequent mocked components with empty divs', function() {
      expect(this.el.textContent).toEqual('');
    });
  });

  describe('.render', function() {
    beforeEach(function() {
      this.el = ReactHelper.render(
        <div id='render-test'>Rendered!</div>
      );
    });

    it('returns an element of the rendered JSX', function() {
      expect(this.el.id).toEqual('render-test');
    });

    it('appends the rendered content to the DOM', function() {
      expect(document.querySelector('#render-test').textContent)
        .toEqual('Rendered!');
    });
  });

  // Because of the nature of their existene,
  // test pollution specs must execute /after/
  // the unit tests above.
  describe('test pollution', function() {
    describe('.mockComponent', function() {
      beforeEach(function() {
        this.el = ReactHelper.render(
          <DummyComponent />
        );
      });

      it('restores mocked components after each spec', function() {
        expect(this.el.textContent).toEqual('I have some contents');
      });
    });

    describe('.render', function() {
      it('removes rendered components from the DOM after each spec', function() {
        expect(document.body.textContent).not.toContain('Rendered!');
      });
    });
  });
});
