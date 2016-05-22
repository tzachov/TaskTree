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
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var home_component_1 = require('./home/home.component');
var index_1 = require('./projects/index');
var AppComponent = (function () {
    function AppComponent(_router, mdIconRegistry) {
        this._router = _router;
        mdIconRegistry.registerFontClassAlias('md', 'material-icons');
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, icon_1.MdIcon, button_1.MdButton],
            providers: [router_1.ROUTER_PROVIDERS, icon_1.MdIconRegistry],
            template: "\n    <md-toolbar color=\"primary\">\n        <button md-icon-button>\n            <md-icon>menu</md-icon>\n        </button>\n        TaskTree\n    </md-toolbar>\n    \n    <router-outlet></router-outlet>"
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/projects/', component: index_1.CreateProjectComponent },
            { path: '/projects/:id', component: index_1.ViewProjectComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, icon_1.MdIconRegistry])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map