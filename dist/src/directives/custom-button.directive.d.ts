import { OnChanges, Renderer, ElementRef, SimpleChanges, OnInit } from '@angular/core';
import { CustomButtonConfig, ButtonsConfig } from '../components/modal-gallery.component';
export declare class CustomButtonDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    customButtonConfig: CustomButtonConfig;
    configButtons: ButtonsConfig;
    private RIGHT;
    constructor(renderer: Renderer, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private applyStyle();
    private getNumOfPrecedingButtons();
}
