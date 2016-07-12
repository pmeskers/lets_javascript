import { Component } from '@angular/core';
import { ColorStore } from 'color-store.service';

@Component({
  selector: 'color-picker',
  template: `
    <ul>
      <li>
        <button (click)='selectColor("#F00")'>Red</button>
      </li><li>
        <button (click)='selectColor("#0F0")'>Green</button>
      </li><li>
        <button (click)='selectColor("#00F")'>Blue</button>
      </li>
    </ul>
  `,
  styles: [`
    ul { width: 50%; display: inline-block; padding: 0; float: left; }
    li { list-style: none; margin: 20px 0; }
    button { padding: 10px; }
  `],
})
export class ColorPicker {
  constructor(private colorStore: ColorStore) {
  }

  protected selectColor(color) {
    this.colorStore.selectColor(color);
  }
}
