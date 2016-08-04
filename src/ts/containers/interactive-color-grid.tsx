import { connect } from 'react-redux';

import { ColorGrid } from 'components/color-grid';

const mapStateToProps = (state: any) => {
  return {
    baseColor: state.selectedColor,
  };
};

const InteractiveColorGrid = connect(
  mapStateToProps
)(ColorGrid);

export { InteractiveColorGrid as InteractiveColorGrid }
