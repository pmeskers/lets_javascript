import { SELECT_COLOR } from './actions';
import { Color } from 'classes/color';

let defaultColor = new Color(40, 110, 170);
let initialState = {
  selectedColor: defaultColor
}

export function colorPicker(state = initialState, action: any) {
  switch (action.type) {
    case SELECT_COLOR:
      return {
        selectedColor: action.color
      }
    default:
      return state;
  }
}
