import { Color } from 'classes/color';

export const SELECT_COLOR = 'SELECT_COLOR';

export function selectColor(color: Color) {
  return { type: SELECT_COLOR, color };
}
