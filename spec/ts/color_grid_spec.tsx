import { shallow } from 'enzyme';
import * as React from 'react';

import { ColorGrid } from 'components/color-grid';
import { SelectableColorTile } from 'containers/selectable-color-tile';
import { Color } from 'classes/color';

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
