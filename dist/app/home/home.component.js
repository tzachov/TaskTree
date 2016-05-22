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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var toolbar_1 = require('@angular2-material/toolbar');
var shared_1 = require('../shared');
var shared_2 = require('../shared');
var HomeComponent = (function () {
    function HomeComponent(projectsService) {
        this.projectsService = projectsService;
        this.projects = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectsService.getAll()
            .then(function (response) {
            _this.projects = response;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: '/dist/app/home/home.html',
            directives: [router_1.ROUTER_DIRECTIVES, shared_2.ProjectTreeComponent, toolbar_1.MdToolbar]
        }), 
        __metadata('design:paramtypes', [shared_1.ProjectsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map