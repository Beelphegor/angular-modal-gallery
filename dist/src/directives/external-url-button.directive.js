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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExternalUrlButtonDirective.prototype, "configButtons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ExternalUrlButtonDirective.prototype, "imgExtUrl", void 0);
    ExternalUrlButtonDirective = __decorate([
        Directive({
            selector: '[exturl-button]'
        }),
        __metadata("design:paramtypes", [Renderer, ElementRef])
    ], ExternalUrlButtonDirective);
    return ExternalUrlButtonDirective;
}());
export { ExternalUrlButtonDirective };
//# sourceMappingURL=external-url-button.directive.js.map