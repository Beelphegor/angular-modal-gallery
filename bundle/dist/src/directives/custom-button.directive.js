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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CustomButtonDirective.prototype, "customButtonConfig", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CustomButtonDirective.prototype, "configButtons", void 0);
    CustomButtonDirective = __decorate([
        Directive({
            selector: '[custom-button]'
        }),
        __metadata("design:paramtypes", [Renderer, ElementRef])
    ], CustomButtonDirective);
    return CustomButtonDirective;
}());
export { CustomButtonDirective };
//# sourceMappingURL=custom-button.directive.js.map