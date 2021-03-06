"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PictureDirective = /** @class */ (function () {
    function PictureDirective(el) {
        this.el = el;
        this.initialColor = '#f5f5f5';
        this.defaultHeigth = 150;
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeigth);
    }
    PictureDirective.prototype.onOver = function () {
        this.setBorder(this.borderColor || this.defaultColor);
    };
    PictureDirective.prototype.onMouseLeave = function () {
        this.setBorder(this.initialColor);
    };
    PictureDirective.prototype.setBorder = function (color) {
        var border = ' solid 4px' + color;
        this.el.nativeElement.style.border = border;
    };
    PictureDirective.prototype.setHeight = function (taille) {
        this.el.nativeElement.style.height = taille;
    };
    __decorate([
        core_1.Input('pkmnPicture'),
        __metadata("design:type", String)
    ], PictureDirective.prototype, "borderColor", void 0);
    __decorate([
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PictureDirective.prototype, "onOver", null);
    __decorate([
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PictureDirective.prototype, "onMouseLeave", null);
    PictureDirective = __decorate([
        core_1.Directive({
            selector: '[pkmnPicture]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PictureDirective);
    return PictureDirective;
}());
exports.PictureDirective = PictureDirective;
//# sourceMappingURL=picture.directive.js.map