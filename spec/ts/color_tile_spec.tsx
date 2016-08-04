import { shallow } from 'enzyme';
import * as React from 'react';

import { ColorTile } from 'components/color-tile';
import { Color } from 'classes/color';

describe('ColorTile', () => {
  let fixture: any;
  let color = new Color(25, 25, 25);
  let onTileClick = jasmine.createSpy('tileClick');

  beforeEach(() => {
    fixture = shallow(
      <ColorTile color={color}
                 onTileClick={onTileClick}>
      </ColorTile>
    );
  });

  it('renders the tile with the correct background color', () => {
    let backgroundColor = fixture.first().node.props.style.backgroundColor;
    expect(backgroundColor).toEqual(color.getStyleString());
  });

  it('invokes onTileClick on click with the color', () => {
    fixture.first().simulate('click');
    expect(onTileClick).toHaveBeenCalledWith(color);
  });
});
