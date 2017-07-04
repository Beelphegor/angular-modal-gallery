import { Directive, Input, OnChanges, Renderer, ElementRef, SimpleChanges, OnInit } from '@angular/core';
import { CustomButtonConfig, ButtonsConfig } from '../components/modal-gallery.component';

@Directive({
  selector: '[custom-button]'
})
export class CustomButtonDirective implements OnInit, OnChanges {

  @Input() customButtonConfig: CustomButtonConfig;
  @Input() configButtons: ButtonsConfig;

  private RIGHT: number = 63;

  constructor(private renderer: Renderer, private el: ElementRef) {}

  ngOnInit() {
    this.applyStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.applyStyle();
  }

  private applyStyle() {
    let right: number = 0;
    if (this.customButtonConfig) {
      right = this.getNumOfPrecedingButtons() * this.RIGHT;
    } else {
      right = 0;
    }
    
    this.renderer.setElementStyle(this.el.nativeElement, 'right', `${right}px`);

    this.renderer.setElementProperty(this.el.nativeElement, 'hidden', !this.customButtonConfig);
  }

  private getNumOfPrecedingButtons() {
    let num: number = 0;
    if (!this.configButtons) {
      return num;
    }

    if (this.configButtons.extUrl) {
      num++;
    }

    if (this.configButtons.close === undefined || this.configButtons.close === true) {
      num++;
    }

    return num;
  }
}