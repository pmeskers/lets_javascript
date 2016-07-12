import { ColorStore } from 'color-store.service';
import { Component } from '@angular/core';
import { ColorDisplay } from 'color-display.component';
import { ColorPicker } from 'color-picker.component';

@Component({
  selector: 'app',
  template: `
    <div>
      <div class='container'>
        <color-picker></color-picker>
        <color-display [color]="selectedColor"></color-display>
      </div>
    </div>
  `,
  styles: [`
    .container { width: 50%; margin: 50px 25%; }
  `],
  directives: [ColorDisplay, ColorPicker],
  providers: [ColorStore],
})
export class App {
  public selectedColor: string = '#F0F';

  constructor(private colorStore: ColorStore) {
    colorStore.selectedColor$.subscribe((color) => {
      this.selectedColor = color;
    });
  }

  public onColorSelected(color: string) {
    this.selectedColor = color;
  }
}
