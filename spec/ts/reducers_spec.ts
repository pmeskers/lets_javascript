import { colorPicker } from '../../src/ts/reducers';
import { selectColor } from '../../src/ts/actions';
import { Color } from 'classes/color';

describe('colorPicker', () => {
  describe('with no action or state', () => {
    it('returns an initial state', () => {
      expect(colorPicker(undefined, {})).toEqual({
        selectedColor: jasmine.any(Color)
      });
    });
  });

  describe('with a SELECT_COLOR action', () => {
    it('returns a state with the corresponding selectedColor', () => {
      let color = new Color(50, 50, 50);
      expect(colorPicker(undefined, selectColor(color))).toEqual({
        selectedColor: color
      });
    });
  });
});

