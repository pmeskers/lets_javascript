import { connect } from 'react-redux';
import * as _ from 'lodash';

import { selectColor } from '../actions';
import { ColorTile, ColorTileProps } from 'components/color-tile';
import { Color } from 'classes/color';

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  let dispatchProps =  {
    onTileClick: (color: Color) => {
      dispatch(selectColor(color));
    }
  }
  return _.merge(dispatchProps, ownProps);
}

const SelectableColorTile = connect(
  null,
  mapDispatchToProps
)(ColorTile);

export { SelectableColorTile as SelectableColorTile }
