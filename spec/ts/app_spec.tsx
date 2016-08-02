import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from 'components/app';

describe('App', () => {
  let container: any, fixture: any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(
      <App title='oh wow'></App>,
      container
    )

    fixture = container.firstChild;
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render the title', () => {
    expect(fixture.textContent).toEqual('oh wow');
  });
});
