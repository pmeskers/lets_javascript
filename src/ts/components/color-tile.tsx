import * as React from 'react';
import { Color } from 'classes/color';

interface ColorTileProps {
  color: Color
}

export class ColorTile extends React.Component<ColorTileProps, {}> {
  public render() {
    let { color } = this.props;
    let styleRules = {
      backgroundColor: color.getStyleString(),
      width: '100px',
      height: '100px',
      display: 'inline-block'
    };

    return (
      <div 
        style={styleRules}
        onClick={this.onTileClick.bind(this)}>
      </div>
    );
  }

  private onTileClick() {
    console.log('u clicked it', this.props.color);
  }
}
