import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-display',
  template: `
    <div [style.backgroundColor]="color">
    </div>
  `,
  styles: [`
    div { width: 50%; display: inline-block; height: 200px; float: left; }
  `],
})
export class ColorDisplay {
  @Input() public color: string;
}
