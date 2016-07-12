import { Component } from '@angular/core';
import { Cat } from 'cat.component';

@Component({
  selector: 'app',
  template: `
    <cat></cat>
  `,
  directives: [Cat]
})
export class App { }
