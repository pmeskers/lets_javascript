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
  describe('preventing test pollution when rendering', function() {
    describe('a mocked component (before an unmocked test)', function() {
      beforeEach(function() {
        ReactHelper.mockComponent(DummyComponent);
        this.el = ReactHelper.render(
          <DummyComponent />
        );
      });

      it('is rendered into the DOM without any children', function() {
        expect(this.el.textContent).toEqual('');
      });
    });

    describe('an unmocked component (after a mocked test)', function() {
      beforeEach(function() {
        this.el = ReactHelper.render(
          <DummyComponent />
        );
      });

      it('is rendered into the DOM normally', function() {
        expect(this.el.textContent).toEqual('I have some contents');
      });
    });
  });
});
