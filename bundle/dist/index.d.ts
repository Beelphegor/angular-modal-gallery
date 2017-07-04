import { ModuleWithProviders } from '@angular/core';
export { Image, ImageModalEvent, Action, Description, ButtonsConfig, KeyboardConfig } from './src/components/modal-gallery.component';
/**
 * Exported Main Module without `forRoot`.
 */
export declare class AngularRootModalGalleryModule {
}
/**
 * Exported Main Module with `forRoot`.
 */
export declare class ModalGalleryModule {
    static forRoot(): ModuleWithProviders;
}
