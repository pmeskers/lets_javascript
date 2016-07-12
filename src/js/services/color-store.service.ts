import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ColorStore {
  public selectedColorSource = new Subject<string>();
  public selectedColor$ = this.selectedColorSource.asObservable();

  public selectColor(color: string) {
    this.selectedColorSource.next(color);
  }
}
