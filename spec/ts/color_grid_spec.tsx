import { shallow } from 'enzyme';
import * as React from 'react';

import { Color } from 'classes/color';
import { ColorGrid } from 'components/color-grid';
import { SelectableColorTile } from 'containers/selectable-color-tile';

describe('ColorGrid', () => {
  let fixture: any;
  let color = new Color(25, 60, 30);

  beforeEach(() => {
    fixture = shallow(
      <ColorGrid baseColor={color}></ColorGrid>
    );
  });

  it('renders color tiles with modified colors', () => {
    expect(fixture.find(SelectableColorTile).length).toEqual(7);
  });
});
