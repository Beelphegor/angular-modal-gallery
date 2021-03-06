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
import { Directive, Input, Renderer, ElementRef } from '@angular/core';
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CloseButtonDirective.prototype, "configButtons", void 0);
    CloseButtonDirective = __decorate([
        Directive({
            selector: '[close-button]'
        }),
        __metadata("design:paramtypes", [Renderer, ElementRef])
    ], CloseButtonDirective);
    return CloseButtonDirective;
}());
export { CloseButtonDirective };
//# sourceMappingURL=close-button.directive.js.map