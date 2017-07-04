import { EventEmitter } from '@angular/core';
import { Image } from './modal-gallery.component';
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images and a boolean to show/hide
 * the gallery (feature used by imagePointer).
 * Also it emits click events as outputs.
 */
export declare class GalleryComponent {
    images: Image[];
    showGallery: boolean;
    show: EventEmitter<number>;
    showModalGallery(index: number): void;
}
