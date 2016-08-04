import * as React from 'react';

import { Color } from 'classes/color';
import { ColorFactory } from 'classes/color-factory';
import { SelectableColorTile } from 'containers/selectable-color-tile';

interface ColorGridProps {
  baseColor: Color;
}

export class ColorGrid extends React.Component<ColorGridProps, {}> {
  public render() {
    let colorFactory = new ColorFactory();

    let { baseColor } = this.props;
    let modifier = 5;

    return (
      <div>
        <div>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, -modifier * 3, 0, 0)}>
          </SelectableColorTile>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, -modifier * 2, 0, 0)}>
          </SelectableColorTile>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, -modifier, 0, 0)}>
          </SelectableColorTile>
          <SelectableColorTile
            color={baseColor}>
          </SelectableColorTile>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, modifier, 0, 0)}>
          </SelectableColorTile>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, modifier * 2, 0, 0)}>
          </SelectableColorTile>
          <SelectableColorTile
            color={colorFactory.colorWithModification(baseColor, modifier * 3, 0, 0)}>
          </SelectableColorTile>
        </div>
      </div>
    );
  }
}
