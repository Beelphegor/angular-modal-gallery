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
import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on the element with id="ng-gallery-content" and it emits
 * an event using `@Output clickOutside`.
 */
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective() {
        this.clickOutside = new EventEmitter();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var elementId = targetElement.id;
        if (elementId === 'ng-gallery-content' && this.clickOutsideEnable) {
            this.clickOutside.emit(true);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ClickOutsideDirective.prototype, "clickOutsideEnable", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        HostListener('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Element]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Directive({
            selector: '[click-outside]'
        })
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
//# sourceMappingURL=click-outside.directive.js.map