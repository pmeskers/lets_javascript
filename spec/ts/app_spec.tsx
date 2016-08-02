import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from 'components/app';

describe('App', () => {
  let fixture: any;

  beforeEach(() => {
    fixture = shallow(
      <App title='oh wow'></App>
    );
  });

  it('should render the title', () => {
    expect(fixture.text()).toEqual('oh wow');
  });
});
