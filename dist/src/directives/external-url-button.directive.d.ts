import { ElementRef, OnChanges, Renderer, SimpleChanges, OnInit } from '@angular/core';
import { ButtonsConfig } from '../components/modal-gallery.component';
/**
 * Directive to display the external url button.
 * To show this button, you must provide a ButtonsConfig object with 'extUrl: true' as property.
 * All other configurations will hide this button.
 * Pay attention, because this directive is quite smart to choose button's order using the
 * correct right margin in pixels. To do that, it uses also imgExtUrl and configButtons.
 */
export declare class ExternalUrlButtonDirective implements OnInit, OnChanges {
    private renderer;
    private el;
    configButtons: ButtonsConfig;
    imgExtUrl: string | void;
    private RIGHT;
    constructor(renderer: Renderer, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private applyStyle();
    private getNumOfPrecedingButtons();
}
