import { Color } from 'classes/color';

export class ColorFactory {
  public colorWithModification(color: Color, red: number, green: number, blue: number) {
    return new Color(
      color.red + red,
      color.green + green,
      color.blue + blue
    );
  }
}
