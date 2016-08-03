import * as React from 'react';
import * as _ from 'lodash';

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
      width: '100px',
      height: '100px',
      display: 'inline-block'
    };

    return (
      <div 
        style={styleRules}
        onClick={_.partial(onTileClick, color)}>
      </div>
    );
  }
}
