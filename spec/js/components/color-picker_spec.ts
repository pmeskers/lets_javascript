import { addProviders, TestComponentBuilder, inject } from '@angular/core/testing';
import { ColorPicker } from 'color-picker.component';
import { ColorStore } from 'color-store.service';

describe('ColorPicker', () => {
  let element;

  class ColorStoreSpy {
    public color: string;

    public selectColor(color) {
      this.color = color;
    }
  }

  beforeEach(() => {
    addProviders([
      TestComponentBuilder,
      { provide: ColorStore, useClass: ColorStoreSpy },
    ]);
  });

  beforeEach(inject([TestComponentBuilder], (componentBuilder) => {
    let fixture = componentBuilder.createSync(ColorPicker);
    element = fixture.nativeElement;
  }));

  describe('clicking the red button', () => {
    beforeEach(() => {
      let redButton = element.querySelectorAll('button')[0];
      redButton.click();
    });

    it('notifies the injected ColorStore to be red', inject([ColorStore], (colorStore: ColorStoreSpy) => {
      expect(colorStore.color).toEqual('#F00');
    }));
  });
});
