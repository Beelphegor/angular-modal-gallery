(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/Observable'), require('mousetrap')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/Observable', 'mousetrap'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.angular = global.ng.angular || {}, global.ng.angular.modal = global.ng.angular.modal || {}, global.ng.angular.modal.gallery = global.ng.angular.modal.gallery || {}),global.ng.core,global.ng.common,global.Rx));
}(this, (function (exports,_angular_core,_angular_common,rxjs_Observable) { 'use strict';

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
var KeyboardService = (function () {
    function KeyboardService() {
        this.mousetrap = new Mousetrap();
    }
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param onBind Callback function
     */
    KeyboardService.prototype.add = function (onBind) {
        this.mousetrap.bind(['ctrl+s', 'meta+s'], function (event, combo) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            onBind(event, combo);
        });
    };
    /**
     * Useful function to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     */
    KeyboardService.prototype.reset = function () {
        this.mousetrap.reset();
    };
    KeyboardService = __decorate$3([
        _angular_core.Injectable(),
        __metadata$1("design:paramtypes", [])
    ], KeyboardService);
    return KeyboardService;
}());

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
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Enum `Action` with a list of possible actions.
 */

(function (Action) {
    Action[Action["NORMAL"] = 0] = "NORMAL";
    Action[Action["CLICK"] = 1] = "CLICK";
    Action[Action["KEYBOARD"] = 2] = "KEYBOARD";
    Action[Action["SWIPE"] = 3] = "SWIPE";
    Action[Action["LOAD"] = 4] = "LOAD";
})(exports.Action || (exports.Action = {}));
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
var CustomButtonEvent = (function () {
    function CustomButtonEvent(image) {
        this.image = image;
    }
    return CustomButtonEvent;
}());
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
/**
 * Enum `Keyboard` with keys and their relative key codes.
 */
var Keyboard;
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
        this.close = new _angular_core.EventEmitter();
        this.show = new _angular_core.EventEmitter();
        this.firstImage = new _angular_core.EventEmitter();
        this.lastImage = new _angular_core.EventEmitter();
        this.hasData = new _angular_core.EventEmitter();
        this.customButtonClicked = new _angular_core.EventEmitter();
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
        this.clickAction = exports.Action.CLICK;
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
                this.closeGallery(exports.Action.KEYBOARD);
                break;
            case right:
                this.nextImage(exports.Action.KEYBOARD);
                break;
            case left:
                this.prevImage(exports.Action.KEYBOARD);
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
                this.nextImage(exports.Action.SWIPE);
                break;
            case this.SWIPE_ACTION.LEFT:
                this.prevImage(exports.Action.SWIPE);
                break;
        }
    };
    /**
     * Method `closeGallery` to close the modal gallery.
     * @param action Enum of type `Action` that represents the source
     *  action that closed the modal gallery. NORMAL by default.
     */
    AngularModalGalleryComponent.prototype.closeGallery = function (action) {
        if (action === void 0) { action = exports.Action.NORMAL; }
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
        if (action === void 0) { action = exports.Action.NORMAL; }
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
        if (action === void 0) { action = exports.Action.NORMAL; }
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
        this.show.emit(new ImageModalEvent(exports.Action.LOAD, this.currentImageIndex + 1));
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
            this.closeGallery(exports.Action.CLICK);
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
            if (this.modalImages instanceof rxjs_Observable.Observable) {
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
            this.hasData.emit(new ImageModalEvent(exports.Action.LOAD, true));
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
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "modalImages", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Number)
    ], AngularModalGalleryComponent.prototype, "imagePointer", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "downloadable", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "description", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "buttonsConfig", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "keyboardConfig", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "enableCloseOutside", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Object)
    ], AngularModalGalleryComponent.prototype, "customButtonConfig", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "showDownloadButton", void 0);
    __decorate$2([
        _angular_core.Input(),
        __metadata("design:type", Boolean)
    ], AngularModalGalleryComponent.prototype, "showExtUrlButton", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "close", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "show", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "firstImage", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "lastImage", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "hasData", void 0);
    __decorate$2([
        _angular_core.Output(),
        __metadata("design:type", _angular_core.EventEmitter)
    ], AngularModalGalleryComponent.prototype, "customButtonClicked", void 0);
    __decorate$2([
        _angular_core.HostListener('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AngularModalGalleryComponent.prototype, "onKeyDown", null);
    AngularModalGalleryComponent = __decorate$2([
        _angular_core.Component({
            selector: 'modal-gallery',
            exportAs: 'modalGallery',
            styles: ['.ng-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:9999;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.ng-gallery-content{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;text-align:center}.ng-gallery-content>a.nav-left,.ng-gallery-content>a.nav-right{color:#fff!important;text-decoration:none;font-size:60px;cursor:pointer;outline:0}.ng-gallery-content>a.nav-left{position:fixed;left:15px;top:50%;transform:translateY(-50%)}.ng-gallery-content>a.nav-right{position:fixed;right:15px;top:50%;transform:translateY(-50%)}.ng-gallery-content>img{height:auto;max-height:calc(100% - 150px);max-width:calc(100% - 100px);position:relative;display:block;margin:0 auto 0 auto;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.ng-gallery-content.effect{animation:fadeIn .5s}.ng-gallery-content>span.info-text{color:#fff;display:inline-block;width:100%;height:20px;font-weight:700;text-align:center;position:fixed;left:0;right:0}@media (max-width:676px){.ng-gallery-content>span.info-text{bottom:100px}}@media (min-width:676px) and (max-width:752px){.ng-gallery-content>span.info-text{padding-top:52px}}@media (min-width:752px) and (max-width:804px){.ng-gallery-content>span.info-text{padding-top:43px}}@media (min-width:804px){.ng-gallery-content>span.info-text{bottom:100px}}.ng-gallery-content>.ng-thumbnails-wrapper{width:400px;height:70px;text-align:center;position:fixed;bottom:20px;left:0;right:0;margin-left:auto;margin-right:auto;overflow-x:hidden}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails{width:4000px;height:70px}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img{width:auto;height:70px;float:left;margin-right:10px;cursor:pointer;opacity:.6}.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img.active,.ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img:hover{transition:opacity .25s ease;opacity:1}@keyframes fadeIn{from{opacity:.3}to{opacity:1}}uiload{display:inline-block;position:relative}uiload>div{position:relative}@-webkit-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes uil-ring-anim{0%{-ms-transform:rotate(0);-moz-transform:rotate(0);-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.uil-ring-css{background:0 0;position:relative;top:0;margin:180px auto 0 auto;width:100px;height:100px}.uil-ring-css>div{position:absolute;display:block;width:80px;height:80px;top:20px;left:20px;border-radius:40px;box-shadow:0 6px 0 0 #fff;-ms-animation:uil-ring-anim 1s linear infinite;-moz-animation:uil-ring-anim 1s linear infinite;-webkit-animation:uil-ring-anim 1s linear infinite;-o-animation:uil-ring-anim 1s linear infinite;animation:uil-ring-anim 1s linear infinite}'],
            template: '<gallery [images]="images" [showGallery]="showGallery" (show)="onShowModalGallery($event)"></gallery><div class="ng-overlay" *ngIf="opened"><div id="ng-gallery-content" class="ng-gallery-content" click-outside [clickOutsideEnable]="enableCloseOutside" (clickOutside)="onClickOutside($event)"><div class="uil-ring-css" *ngIf="loading"><div></div></div><upperButtons [image]="currentImage" [configButtons]="configButtons" (close)="closeGallery()" (download)="downloadImage()" [customButtonConfig]="customButtonConfig" (customButtonClicked)="onCustomButtonClicked()"></upperButtons><a class="nav-left" *ngIf="images?.length > 1" (click)="prevImage()"><i class="fa fa-angle-left"></i></a> <img *ngIf="!loading" class="effect" src="{{ currentImage.img }}" alt="{{currentImage.description}}" (click)="nextImage(clickAction)" (swipeleft)="swipe(currentImageIndex, $event.type)" (swiperight)="swipe(currentImageIndex, $event.type)"> <a class="nav-right" *ngIf="images?.length > 1" (click)="nextImage()"><i class="fa fa-angle-right"></i></a> <span class="info-text">{{getDescriptionToDisplay()}}</span></div></div>'
        }),
        __metadata("design:paramtypes", [KeyboardService])
    ], AngularModalGalleryComponent);
    return AngularModalGalleryComponent;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to display the external url button.
 * To show this button, you must provide a ButtonsConfig object with 'extUrl: true' as property.
 * All other configurations will hide this button.
 * Pay attention, because this directive is quite smart to choose button's order using the
 * correct right margin in pixels. To do that, it uses also imgExtUrl and configButtons.
 */
var ExternalUrlButtonDirective = (function () {
    function ExternalUrlButtonDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.RIGHT = 63;
    }
    ExternalUrlButtonDirective.prototype.ngOnInit = function () {
        this.applyStyle();
    };
    ExternalUrlButtonDirective.prototype.ngOnChanges = function (changes) {
        this.applyStyle();
    };
    ExternalUrlButtonDirective.prototype.applyStyle = function () {
        var right = 0;
        if (this.configButtons && this.configButtons.extUrl && this.imgExtUrl) {
            right = this.getNumOfPrecedingButtons() * this.RIGHT;
        }
        else {
            right = 0;
        }
        // apply [style.right]="" to external url <a></a>
        this.renderer.setElementStyle(this.el.nativeElement, 'right', right + "px");
        // hide externalUrlButton based on this condition
        // configButtons && !configButtons.extUrl OR imgExtUrl is not valid (for instance is null)
        this.renderer.setElementProperty(this.el.nativeElement, 'hidden', !this.configButtons || (this.configButtons && !this.configButtons.extUrl) || !this.imgExtUrl);
    };
    ExternalUrlButtonDirective.prototype.getNumOfPrecedingButtons = function () {
        var num = 0;
        if (!this.configButtons) {
            return num;
        }
        if (this.configButtons.close === undefined || this.configButtons.close === true) {
            num++;
        }
        return num;
    };
    __decorate$4([
        _angular_core.Input(),
        __metadata$2("design:type", Object)
    ], ExternalUrlButtonDirective.prototype, "configButtons", void 0);
    __decorate$4([
        _angular_core.Input(),
        __metadata$2("design:type", Object)
    ], ExternalUrlButtonDirective.prototype, "imgExtUrl", void 0);
    ExternalUrlButtonDirective = __decorate$4([
        _angular_core.Directive({
            selector: '[exturl-button]'
        }),
        __metadata$2("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
    ], ExternalUrlButtonDirective);
    return ExternalUrlButtonDirective;
}());

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to display the download button.
 * To show this button, you must provide a ButtonsConfig object with 'download: true' as property.
 * All other configurations will hide this button.
 * Pay attention, because this directive is quite smart to choose button's order using the
 * correct right margin in pixels. To do that, it uses also imgExtUrl and configButtons.
 */
var DownloadButtonDirective = (function () {
    function DownloadButtonDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.RIGHT = 63;
    }
    DownloadButtonDirective.prototype.ngOnInit = function () {
        this.applyStyle();
    };
    DownloadButtonDirective.prototype.ngOnChanges = function (changes) {
        this.applyStyle();
    };
    DownloadButtonDirective.prototype.applyStyle = function () {
        var right = 0;
        if (this.configButtons && this.configButtons.download) {
            right = this.getNumOfPrecedingButtons() * this.RIGHT;
        }
        else {
            right = 0;
        }
        // apply [style.right]="" to download url <a></a>
        this.renderer.setElementStyle(this.el.nativeElement, 'right', right + "px");
        // hide downloadButton if configButtons.download is false
        this.renderer.setElementProperty(this.el.nativeElement, 'hidden', !this.configButtons || (this.configButtons && !this.configButtons.download));
    };
    DownloadButtonDirective.prototype.getNumOfPrecedingButtons = function () {
        var num = 0;
        if (!this.configButtons) {
            return num;
        }
        if (this.configButtons.extUrl && this.imgExtUrl) {
            num++;
        }
        if (this.configButtons.close === undefined || this.configButtons.close === true) {
            num++;
        }
        return num;
    };
    __decorate$5([
        _angular_core.Input(),
        __metadata$3("design:type", Object)
    ], DownloadButtonDirective.prototype, "configButtons", void 0);
    __decorate$5([
        _angular_core.Input(),
        __metadata$3("design:type", Object)
    ], DownloadButtonDirective.prototype, "imgExtUrl", void 0);
    DownloadButtonDirective = __decorate$5([
        _angular_core.Directive({
            selector: '[download-button]'
        }),
        __metadata$3("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
    ], DownloadButtonDirective);
    return DownloadButtonDirective;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to display the close button.
 * To hide this button, you must provide a ButtonsConfig object with 'close: false' as property.
 * All other configurations won't hide this button.
 */
var CloseButtonDirective = (function () {
    function CloseButtonDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    CloseButtonDirective.prototype.ngOnInit = function () {
        this.applyStyle();
    };
    CloseButtonDirective.prototype.ngOnChanges = function (changes) {
        this.applyStyle();
    };
    CloseButtonDirective.prototype.applyStyle = function () {
        // apply [style.right]="" to close url <a></a>
        this.renderer.setElementStyle(this.el.nativeElement, 'right', '0px');
        var condition = this.configButtons === null || (this.configButtons && this.configButtons.close === false);
        // hide closeButton if configButtons.close is false
        this.renderer.setElementProperty(this.el.nativeElement, 'hidden', condition);
    };
    __decorate$6([
        _angular_core.Input(),
        __metadata$4("design:type", Object)
    ], CloseButtonDirective.prototype, "configButtons", void 0);
    CloseButtonDirective = __decorate$6([
        _angular_core.Directive({
            selector: '[close-button]'
        }),
        __metadata$4("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
    ], CloseButtonDirective);
    return CloseButtonDirective;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on the element with id="ng-gallery-content" and it emits
 * an event using `@Output clickOutside`.
 */
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective() {
        this.clickOutside = new _angular_core.EventEmitter();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var elementId = targetElement.id;
        if (elementId === 'ng-gallery-content' && this.clickOutsideEnable) {
            this.clickOutside.emit(true);
        }
    };
    __decorate$7([
        _angular_core.Input(),
        __metadata$5("design:type", Boolean)
    ], ClickOutsideDirective.prototype, "clickOutsideEnable", void 0);
    __decorate$7([
        _angular_core.Output(),
        __metadata$5("design:type", _angular_core.EventEmitter)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate$7([
        _angular_core.HostListener('document:click', ['$event.target']),
        __metadata$5("design:type", Function),
        __metadata$5("design:paramtypes", [Element]),
        __metadata$5("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate$7([
        _angular_core.Directive({
            selector: '[click-outside]'
        })
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CustomButtonDirective = (function () {
    function CustomButtonDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.RIGHT = 63;
    }
    CustomButtonDirective.prototype.ngOnInit = function () {
        this.applyStyle();
    };
    CustomButtonDirective.prototype.ngOnChanges = function (changes) {
        this.applyStyle();
    };
    CustomButtonDirective.prototype.applyStyle = function () {
        var right = 0;
        if (this.customButtonConfig) {
            right = this.getNumOfPrecedingButtons() * this.RIGHT;
        }
        else {
            right = 0;
        }
        this.renderer.setElementStyle(this.el.nativeElement, 'right', right + "px");
        this.renderer.setElementProperty(this.el.nativeElement, 'hidden', !this.customButtonConfig);
    };
    CustomButtonDirective.prototype.getNumOfPrecedingButtons = function () {
        var num = 0;
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
    };
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", Object)
    ], CustomButtonDirective.prototype, "customButtonConfig", void 0);
    __decorate$8([
        _angular_core.Input(),
        __metadata$6("design:type", Object)
    ], CustomButtonDirective.prototype, "configButtons", void 0);
    CustomButtonDirective = __decorate$8([
        _angular_core.Directive({
            selector: '[custom-button]'
        }),
        __metadata$6("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
    ], CustomButtonDirective);
    return CustomButtonDirective;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
/**
 * Array of all directives.
 */
var DIRECTIVES = [
    ExternalUrlButtonDirective, DownloadButtonDirective, CloseButtonDirective, ClickOutsideDirective, CustomButtonDirective
];

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Component with all upper right buttons.
 * In fact, it uses a template with extUrl, download and close buttons with the right directive.
 * Also it emits click events as outputs.
 */
var UpperButtonsComponent = (function () {
    function UpperButtonsComponent() {
        this.close = new _angular_core.EventEmitter();
        this.download = new _angular_core.EventEmitter();
        this.customButtonClicked = new _angular_core.EventEmitter();
    }
    UpperButtonsComponent.prototype.downloadImage = function () {
        this.download.emit(true);
    };
    UpperButtonsComponent.prototype.closeGallery = function () {
        this.close.emit(true);
    };
    UpperButtonsComponent.prototype.onCustomEventClicked = function () {
        this.customButtonClicked.emit(true);
    };
    __decorate$9([
        _angular_core.Input(),
        __metadata$7("design:type", Image)
    ], UpperButtonsComponent.prototype, "image", void 0);
    __decorate$9([
        _angular_core.Input(),
        __metadata$7("design:type", Object)
    ], UpperButtonsComponent.prototype, "configButtons", void 0);
    __decorate$9([
        _angular_core.Input(),
        __metadata$7("design:type", Object)
    ], UpperButtonsComponent.prototype, "customButtonConfig", void 0);
    __decorate$9([
        _angular_core.Output(),
        __metadata$7("design:type", _angular_core.EventEmitter)
    ], UpperButtonsComponent.prototype, "close", void 0);
    __decorate$9([
        _angular_core.Output(),
        __metadata$7("design:type", _angular_core.EventEmitter)
    ], UpperButtonsComponent.prototype, "download", void 0);
    __decorate$9([
        _angular_core.Output(),
        __metadata$7("design:type", _angular_core.EventEmitter)
    ], UpperButtonsComponent.prototype, "customButtonClicked", void 0);
    UpperButtonsComponent = __decorate$9([
        _angular_core.Component({
            selector: 'upperButtons',
            styles: ['a.close-popup{font-size:42px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:0}a.external-url-image{font-size:33px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:28px;right:0}a.download-image{font-size:33px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:28px;right:0}a.custom-button{font-size:33px;float:right;color:#fff!important;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:28px;right:0}'],
            template: '<a class="external-url-image" href="{{image?.extUrl}}" exturl-button [configButtons]="configButtons" [imgExtUrl]="image?.extUrl"><i class="fa fa-external-link"></i></a> <a class="download-image" download-button [configButtons]="configButtons" [imgExtUrl]="image?.extUrl" (click)="downloadImage()"><i class="fa fa-download"></i></a> <a class="close-popup" close-button [configButtons]="configButtons" (click)="closeGallery()"><i class="fa fa-close"></i></a> <a class="custom-button" custom-button [configButtons]="configButtons" [customButtonConfig]="customButtonConfig" (click)="onCustomEventClicked()"><i [class]="customButtonConfig.class"></i></a>'
        })
    ], UpperButtonsComponent);
    return UpperButtonsComponent;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images and a boolean to show/hide
 * the gallery (feature used by imagePointer).
 * Also it emits click events as outputs.
 */
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.show = new _angular_core.EventEmitter();
    }
    GalleryComponent.prototype.showModalGallery = function (index) {
        this.show.emit(index);
    };
    __decorate$10([
        _angular_core.Input(),
        __metadata$8("design:type", Array)
    ], GalleryComponent.prototype, "images", void 0);
    __decorate$10([
        _angular_core.Input(),
        __metadata$8("design:type", Boolean)
    ], GalleryComponent.prototype, "showGallery", void 0);
    __decorate$10([
        _angular_core.Output(),
        __metadata$8("design:type", _angular_core.EventEmitter)
    ], GalleryComponent.prototype, "show", void 0);
    GalleryComponent = __decorate$10([
        _angular_core.Component({
            selector: 'gallery',
            styles: ['.ng-gallery{width:100%;display:inline-block}img.ng-thumb{height:50px;float:left;display:block;cursor:pointer;margin:2px 2px 0 0}'],
            template: '<div class="ng-gallery" *ngIf="showGallery"><div *ngFor="let i of images; let index = index"><ng-container *ngIf="i && i.img"><img *ngIf="i.thumb" src="{{ i.thumb }}" class="ng-thumb" (click)="showModalGallery(index)" alt="{{ i.description }}"> <img *ngIf="!i.thumb" src="{{ i.img }}" class="ng-thumb" (click)="showModalGallery(index)" alt="{{ i.description }}"></ng-container></div></div>'
        })
    ], GalleryComponent);
    return GalleryComponent;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Module with `forRoot` method to import it in the root module of your application.
 */
var AngularModalGalleryModule = (function () {
    function AngularModalGalleryModule() {
    }
    AngularModalGalleryModule_1 = AngularModalGalleryModule;
    AngularModalGalleryModule.forRoot = function () {
        return {
            ngModule: AngularModalGalleryModule_1,
            providers: [
                KeyboardService
            ]
        };
    };
    AngularModalGalleryModule = AngularModalGalleryModule_1 = __decorate$1([
        _angular_core.NgModule({
            imports: [_angular_common.CommonModule],
            declarations: [AngularModalGalleryComponent, UpperButtonsComponent, GalleryComponent, DIRECTIVES],
            exports: [AngularModalGalleryComponent]
        })
    ], AngularModalGalleryModule);
    return AngularModalGalleryModule;
    var AngularModalGalleryModule_1;
}());

/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Exported Main Module without `forRoot`.
 */
var AngularRootModalGalleryModule = (function () {
    function AngularRootModalGalleryModule() {
    }
    AngularRootModalGalleryModule = __decorate([
        _angular_core.NgModule({
            imports: [
                AngularModalGalleryModule.forRoot()
            ],
            exports: [
                AngularModalGalleryModule
            ]
        })
    ], AngularRootModalGalleryModule);
    return AngularRootModalGalleryModule;
}());
/**
 * Exported Main Module with `forRoot`.
 */
var ModalGalleryModule = (function () {
    function ModalGalleryModule() {
    }
    ModalGalleryModule.forRoot = function () {
        return {
            ngModule: AngularRootModalGalleryModule
        };
    };
    ModalGalleryModule = __decorate([
        _angular_core.NgModule({
            imports: [
                AngularModalGalleryModule
            ],
            exports: [
                AngularModalGalleryModule
            ]
        })
    ], ModalGalleryModule);
    return ModalGalleryModule;
}());

exports.AngularRootModalGalleryModule = AngularRootModalGalleryModule;
exports.ModalGalleryModule = ModalGalleryModule;
exports.Image = Image;
exports.ImageModalEvent = ImageModalEvent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
