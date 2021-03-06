/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)
 Copyright (c) 2016 vimalavinisha (only for version 1)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, EventEmitter, HostListener, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { KeyboardService } from './keyboard.service';
/**
 * Enum `Action` with a list of possible actions.
 */
export var Action;
(function (Action) {
    Action[Action["NORMAL"] = 0] = "NORMAL";
    Action[Action["CLICK"] = 1] = "CLICK";
    Action[Action["KEYBOARD"] = 2] = "KEYBOARD";
    Action[Action["SWIPE"] = 3] = "SWIPE";
    Action[Action["LOAD"] = 4] = "LOAD";
})(Action || (Action = {}));
/**
 * Class `ImageModalEvent` that represents the Event after an action `action` and its result.
 */
var ImageModalEvent = (function () {
    function ImageModalEvent(action, result) {
        this.action = action;
        this.result = result;
    }
    return ImageModalEvent;
}());
export { ImageModalEvent };
var CustomButtonEvent = (function () {
    function CustomButtonEvent(image) {
        this.image = image;
    }
    return CustomButtonEvent;
}());
export { CustomButtonEvent };
/**
 * Class `Image` that represents an Image with both images and thumb paths,
 * also with a description and an external url.
 * The only required value is the image path `img`.
 */
var Image = (function () {
    function Image(img, thumb, description, extUrl, identifier) {
        this.img = img;
        this.thumb = thumb;
        this.description = description;
        this.extUrl = extUrl;
        this.identifier = identifier;
    }
    return Image;
}());
export { Image };
/**
 * Enum `Keyboard` with keys and their relative key codes.
 */
export var Keyboard;
(function (Keyboard) {
    Keyboard[Keyboard["ESC"] = 27] = "ESC";
    Keyboard[Keyboard["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    Keyboard[Keyboard["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    Keyboard[Keyboard["UP_ARROW"] = 38] = "UP_ARROW";
    Keyboard[Keyboard["DOWN_ARROW"] = 40] = "DOWN_ARROW";
})(Keyboard || (Keyboard = {}));
/**
 * Main Component of this library with the modal gallery.
 */
var AngularModalGalleryComponent = (function () {
    /**
     * Constructor with the injection of ´KeyboardService´ that initialize some description fields
     * based on default values.
     */
    function AngularModalGalleryComponent(keyboardService) {
        this.keyboardService = keyboardService;
        /**
         * Boolean required to enable image download with both ctrl+s/cmd+s and download button.
         * If you want to show enable button, this is not enough. You have to use also `buttonsConfig`.
         */
        this.downloadable = false;
        /**
         * enableCloseOutside's input to enable modal-gallery close's behaviour while clicking
         * on the semi-transparent background. Disabled by default.
         */
        this.enableCloseOutside = false;
        /**
         * DEPRECATED
         * -----REMOVE THIS IN 4.0.0----- deprecated both showDownloadButton and showExtUrlButton
         */
        this.showDownloadButton = false; // deprecated
        /**
         * DEPRECATED
         * -----REMOVE THIS IN 4.0.0----- deprecated both showDownloadButton and showExtUrlButton
         */
        this.showExtUrlButton = false; // deprecated
        this.close = new EventEmitter();
        this.show = new EventEmitter();
        this.firstImage = new EventEmitter();
        this.lastImage = new EventEmitter();
        this.hasData = new EventEmitter();
        this.customButtonClicked = new EventEmitter();
        /**
         * Boolean that it is true if the modal gallery is visible
         */
        this.opened = false;
        /**
         * Boolean that it is true if an image of the modal gallery is still loading
         */
        this.loading = false;
        /**
         * Boolean to open the modal gallery. Closed by default.
         */
        this.showGallery = false;
        /**
         * Number that represents the index of the current image.
         */
        this.currentImageIndex = 0;
        /**
         * Enum of type `Action` used to pass a click action when you click on the modal image.
         * Declared here to be used inside the template.
         */
        this.clickAction = Action.CLICK;
        /**
         * Private SWIPE_ACTION to define all swipe actions used by hammerjs.
         */
        this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
        // if description isn't provided initialize it with a default object
        if (!this.description) {
            this.description = {
                imageText: 'Image ',
                numberSeparator: '/',
                beforeTextDescription: ' - '
            };
        }
        // if one of the Description fields isn't initialized, provide a default value
        this.description.imageText = this.description.imageText || 'Image ';
        this.description.numberSeparator = this.description.numberSeparator || '/';
        this.description.beforeTextDescription = this.description.beforeTextDescription || ' - ';
    }
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param e KeyboardEvent caught by the listener.
     */
    AngularModalGalleryComponent.prototype.onKeyDown = function (e) {
        if (!this.opened) {
            return;
        }
        var esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
        var right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
        var left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
        switch (e.keyCode) {
            case esc:
                this.closeGallery(Action.KEYBOARD);
                break;
            case right:
                this.nextImage(Action.KEYBOARD);
                break;
            case left:
                this.prevImage(Action.KEYBOARD);
                break;
        }
    };
    /**
     * Method ´ngOnInit´ to build `configButtons` and to call `initImages()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    AngularModalGalleryComponent.prototype.ngOnInit = function () {
        // build configButtons to use it inside upper-buttons
        this.configButtons = {
            download: this.showDownloadButton || (this.buttonsConfig && this.buttonsConfig.download),
            extUrl: this.showExtUrlButton || (this.buttonsConfig && this.buttonsConfig.extUrl),
            close: (this.buttonsConfig && this.buttonsConfig.close)
        };
        // call initImages passing true as parameter, because I want to emit `hasData` event
        this.initImages(true);
    };
    /**
     * Method ´ngOnChanges´ to init images preventing errors.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param changes `SimpleChanges` object of current and previous property values provided by Angular.
     */
    AngularModalGalleryComponent.prototype.ngOnChanges = function (changes) {
        // to prevent errors when you pass to this library
        // the array of images inside a subscribe block, in this way: `...subscribe(val => { this.images = arrayOfImages })`
        // As you can see, I'm providing examples in these situations in all official demos
        if (this.modalImages) {
            // I pass `false` as parameter, because I DON'T want to emit `hasData`
            // event (preventing multiple hasData events while initializing)
            this.initImages(false);
        }
    };
    /**
     * Method `getDescriptionToDisplay` to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `description` object, concatenating its fields.
     * @returns String description to display.
     */
    AngularModalGalleryComponent.prototype.getDescriptionToDisplay = function () {
        if (this.description && this.description.customFullDescription) {
            return this.description.customFullDescription;
        }
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        if (!this.currentImage.description || this.currentImage.description === '') {
            return "" + this.description.imageText + (this.currentImageIndex + 1) + this.description.numberSeparator + this.images.length;
        }
        return "" + this.description.imageText + (this.currentImageIndex + 1) + this.description.numberSeparator + this.images.length + this.description.beforeTextDescription + this.currentImage.description;
    };
    /**
     * Method `swipe` used by Hammerjs to support touch gestures.
     * @param index Number that represent the current visible index
     * @param action String that represent the direction of the swipe action. 'swiperight' by default.
     */
    AngularModalGalleryComponent.prototype.swipe = function (index, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                this.nextImage(Action.SWIPE);
                break;
            case this.SWIPE_ACTION.LEFT:
                this.prevImage(Action.SWIPE);
                break;
        }
    };
    /**
     * Method `closeGallery` to close the modal gallery.
     * @param action Enum of type `Action` that represents the source
     *  action that closed the modal gallery. NORMAL by default.
     */
    AngularModalGalleryComponent.prototype.closeGallery = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        this.close.emit(new ImageModalEvent(action, true));
        this.opened = false;
        this.keyboardService.reset();
    };
    /**
     * Method `prevImage` to go back to the previous image shown into the modal gallery.
     * @param action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. NORMAL by default.
     */
    AngularModalGalleryComponent.prototype.prevImage = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        this.loading = true;
        this.currentImageIndex = this.getPrevIndex(action, this.currentImageIndex);
        this.showModalGallery(this.currentImageIndex);
    };
    /**
     * Method `prevImage` to go back to the previous image shown into the modal gallery.
     * @param action Enum of type `Action` that represents the source
     *  action that moved to the next image. NORMAL by default.
     */
    AngularModalGalleryComponent.prototype.nextImage = function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        this.loading = true;
        this.currentImageIndex = this.getNextIndex(action, this.currentImageIndex);
        this.showModalGallery(this.currentImageIndex);
    };
    /**
     * Method `onShowModalGallery` called when you click on an image of your gallery.
     * The input index is the index of the clicked image thumb.
     * @param index Number that represents the index of the clicked image.
     */
    AngularModalGalleryComponent.prototype.onShowModalGallery = function (index) {
        this.showModalGallery(index);
    };
    /**
     * Method `showModalGallery` to show the modal gallery displaying the image with
     * the index specified as input parameter.
     * It will also register a new `keyboardService` to catch keyboard's events to download the current
     * image with keyboard's shortcuts. This service, will be removed when modal gallery component will be destroyed.
     * @param index Number that represents the index of the image to show.
     */
    AngularModalGalleryComponent.prototype.showModalGallery = function (index) {
        var _this = this;
        this.keyboardService.add(function (event, combo) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            _this.downloadImage();
        });
        this.currentImageIndex = index;
        this.opened = true;
        this.currentImage = this.images[this.currentImageIndex];
        this.loading = false;
        // emit current visible image index
        this.show.emit(new ImageModalEvent(Action.LOAD, this.currentImageIndex + 1));
    };
    /**
     * Method `downloadImage` to download the current visible image, only if `downloadable` is true.
     * For IE, this will navigate to the image instead of a direct download as in all modern browsers.
     */
    AngularModalGalleryComponent.prototype.downloadImage = function () {
        if (!this.downloadable) {
            return;
        }
        // for all browsers
        // Attention: with IE is not working, but it will navigate to the image
        var link = document.createElement('a');
        link.href = this.currentImage.img;
        link.setAttribute('download', this.getFileName(this.currentImage.img));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    AngularModalGalleryComponent.prototype.onCustomButtonClicked = function () {
        this.customButtonClicked.emit(new CustomButtonEvent(this.currentImage));
    };
    /**
     * Method `onClickOutside` to close modal gallery when both `enableCloseOutside` is true and user
     * clicked on the semi-transparent background around the image.
     * @param event Boolean that is true if user clicked on the semi-transparent background, false otherwise.
     */
    AngularModalGalleryComponent.prototype.onClickOutside = function (event) {
        if (event && this.enableCloseOutside) {
            this.closeGallery(Action.CLICK);
        }
    };
    /**
     * Method `ngOnDestroy` to cleanup resources. In fact, this will unsubscribe
     * all subscriptions and it will reset keyboard's service.
     */
    AngularModalGalleryComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.keyboardService.reset();
    };
    /**
     * Private method `getNextIndex` to get the next index, based on the action and the current index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @param action Enum of type Action that represents the source of the event that changed the
     *  current image to the next one.
     * @param currentIndex Number that represents the current index of the visible image.
     */
    AngularModalGalleryComponent.prototype.getNextIndex = function (action, currentIndex) {
        var newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, currentIndex + 1));
        return newIndex;
    };
    /**
     * Private method `getPrevIndex` to get the previous index, based on the action and the current index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @param action Enum of type Action that represents the source of the event that changed the
     *  current image to the previous one.
     * @param currentIndex Number that represents the current index of the visible image.
     */
    AngularModalGalleryComponent.prototype.getPrevIndex = function (action, currentIndex) {
        var newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, currentIndex + 1));
        return newIndex;
    };
    /**
     * Private method ´initImages´ to initialize `images` as array of `Image` or as an
     * Observable of `Array<Image>`. Also, it will call completeInitialization.
     * @param emitHasDataEvent boolean to emit `hasData` event while initializing `angular-modal-gallery`.
     *  Use this parameter to prevent multiple `hasData` events.
     */
    AngularModalGalleryComponent.prototype.initImages = function (emitHasDataEvent) {
        var _this = this;
        if (emitHasDataEvent === void 0) { emitHasDataEvent = false; }
        if (this.modalImages instanceof Array) {
            this.images = this.modalImages;
            this.completeInitialization(emitHasDataEvent);
        }
        else {
            if (this.modalImages instanceof Observable) {
                this.subscription = this.modalImages.subscribe(function (val) {
                    _this.images = val;
                    _this.completeInitialization(emitHasDataEvent);
                });
            }
        }
    };
    /**
     * Private method ´completeInitialization´ to emit ImageModalEvent to say that images are loaded. If you are
     * using imagePointer feature, it will also call showModalGallery with imagePointer as parameter.
     * @param emitHasDataEvent boolean to emit `hasData` event while initializing `angular-modal-gallery`.
     *  Use this parameter to prevent multiple `hasData` events.
     */
    AngularModalGalleryComponent.prototype.completeInitialization = function (emitHasDataEvent) {
        if (emitHasDataEvent) {
            // this will prevent multiple emissions if called from both ngOnInit and ngOnChanges
            this.hasData.emit(new ImageModalEvent(Action.LOAD, true));
        }
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showGallery = false;
            this.showModalGallery(this.imagePointer);
        }
        else {
            this.showGallery = true;
        }
    };
    /**
     * Private method `emitBoundaryEvent` to emit events when either the last or the first image are visible.
     * @param action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param indexToCheck Number of type Action that represents the source of the event that changed the
     *  current image to either the first or the last one.
     */
    AngularModalGalleryComponent.prototype.emitBoundaryEvent = function (action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    };
    /**
     * Method `getFileName` to get the filename from an input path.
     * This is used to get the image's name from its path.
     * @param path String that represents the path of the image.
     */
    AngularModalGalleryComponent.prototype.getFileName = function (path) {
        return path.replace(/^.*[\\\/]/, '');
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "modalImages", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], AngularModalGalleryComponent.prototype, "imagePointer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "downloadable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "description", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "buttonsConfig", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "keyboardConfig", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "enableCloseOutside", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "customButtonConfig", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "showDownloadButton", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "showExtUrlButton", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "close", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "show", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "firstImage", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "lastImage", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "hasData", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], AngularModalGalleryComponent.prototype, "customButtonClicked", void 0);
    __decorate([
        HostListener('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AngularModalGalleryComponent.prototype, "onKeyDown", null);
    AngularModalGalleryComponent = __decorate([
        Component({
            selector: 'modal-gallery',
            exportAs: 'modalGallery',
            styleUrls: ['modal-gallery.scss'],
            templateUrl: 'modal-gallery.html'
        }),
        __metadata("design:paramtypes", [KeyboardService])
    ], AngularModalGalleryComponent);
    return AngularModalGalleryComponent;
}());
export { AngularModalGalleryComponent };
//# sourceMappingURL=modal-gallery.component.js.map