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
var task_item_component_1 = require('./task-item.component');
var ProjectTreeComponent = (function () {
    function ProjectTreeComponent() {
    }
    __decorate([
        core_1.Input('project'), 
        __metadata('design:type', Object)
    ], ProjectTreeComponent.prototype, "project", void 0);
    ProjectTreeComponent = __decorate([
        core_1.Component({
            selector: 'project-tree',
            directives: [task_item_component_1.TaskItemComponent],
            templateUrl: '/dist/app/shared/components/project-tree.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectTreeComponent);
    return ProjectTreeComponent;
}());
exports.ProjectTreeComponent = ProjectTreeComponent;
//# sourceMappingURL=project-tree.component.js.map