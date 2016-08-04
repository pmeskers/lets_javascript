import * as _ from 'lodash';
import * as React from 'react';

import { Color } from 'classes/color';

export interface ColorTileProps {
  color: Color;
  onTileClick: any;
}

export class ColorTile extends React.Component<ColorTileProps, {}> {
  public render() {
    let { color, onTileClick } = this.props;
    let styleRules = {
      backgroundColor: color.getStyleString(),
      display: 'inline-block',
      height: '100px',
      width: '100px',
    };

    return (
      <div
        style={styleRules}
        onClick={_.partial(onTileClick, color)}>
      </div>
    );
  }
}
