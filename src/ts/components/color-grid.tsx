import * as React from 'react';
import { ColorTile } from 'components/color-tile';
import { Color } from 'classes/color';
import { ColorFactory } from 'classes/color-factory';

interface ColorGridProps {
}

export class ColorGrid extends React.Component<ColorGridProps, {}> {
  public render() {
    let colorFactory = new ColorFactory();

    let baseColor = new Color(100, 110, 170);
    let modifier = 10;

    return (
      <div>
        <div>
          <ColorTile 
            color={colorFactory.colorWithModification(baseColor, -modifier * 2, 0, 0)}>
          </ColorTile>
          <ColorTile 
            color={colorFactory.colorWithModification(baseColor, -modifier, 0, 0)}>
          </ColorTile>
          <ColorTile 
            color={baseColor}>
          </ColorTile>
          <ColorTile 
            color={colorFactory.colorWithModification(baseColor, modifier, 0, 0)}>
          </ColorTile>
          <ColorTile 
            color={colorFactory.colorWithModification(baseColor, modifier * 2, 0, 0)}>
          </ColorTile>
        </div>
      </div>
    );
  }
}
