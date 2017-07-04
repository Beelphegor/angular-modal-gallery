import { EventEmitter } from '@angular/core';
import { Image, ButtonsConfig, CustomButtonConfig } from './modal-gallery.component';
/**
 * Component with all upper right buttons.
 * In fact, it uses a template with extUrl, download and close buttons with the right directive.
 * Also it emits click events as outputs.
 */
export declare class UpperButtonsComponent {
    image: Image;
    configButtons: ButtonsConfig;
    customButtonConfig: CustomButtonConfig;
    close: EventEmitter<boolean>;
    download: EventEmitter<boolean>;
    customButtonClicked: EventEmitter<boolean>;
    downloadImage(): void;
    closeGallery(): void;
    onCustomEventClicked(): void;
}
