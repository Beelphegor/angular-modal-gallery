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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DownloadButtonDirective.prototype, "configButtons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DownloadButtonDirective.prototype, "imgExtUrl", void 0);
    DownloadButtonDirective = __decorate([
        Directive({
            selector: '[download-button]'
        }),
        __metadata("design:paramtypes", [Renderer, ElementRef])
    ], DownloadButtonDirective);
    return DownloadButtonDirective;
}());
export { DownloadButtonDirective };
//# sourceMappingURL=download-button.directive.js.map