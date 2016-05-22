"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var task_item_component_1 = require('./task-item.component');
var card_1 = require('@angular2-material/card');
var list_1 = require('@angular2-material/list');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var _1 = require('../models/');
var ProjectTreeComponent = (function () {
    function ProjectTreeComponent(mdIconRegistry, router) {
        this.router = router;
        this.tasks = [];
    }
    ProjectTreeComponent.prototype.ngOnInit = function () {
        this.tasks = this.flattenTasks(this.project);
    };
    ProjectTreeComponent.prototype.toggleVisibilty = function (task) {
        task.subtasksVisible = !task.subtasksVisible;
        var startIndex = this.tasks.indexOf(task) + 1;
        for (var i = startIndex; i < this.tasks.length; i++) {
            if (this.tasks[i].level > task.level) {
                this.tasks[i].visible = task.subtasksVisible;
            }
            else {
                break;
            }
        }
    };
    ProjectTreeComponent.prototype.flattenTasks = function (project) {
        var _this = this;
        var tasks = [];
        console.log('Project:', this.project);
        project.features.forEach(function (feature) {
            tasks = tasks.concat(_this.getSubtasks(feature, 0, project.id));
        });
        console.log(tasks);
        return tasks;
    };
    ProjectTreeComponent.prototype.viewProject = function (project) {
        this.router.navigate(['/projects/', project.id]);
    };
    ProjectTreeComponent.prototype.getSubtasks = function (task, level, parentId) {
        var _this = this;
        var subtasks = [new UITask(task, level, parentId)];
        if (task.subtasks) {
            task.subtasks.forEach(function (subtask) {
                subtasks = subtasks.concat(_this.getSubtasks(subtask, level + 1, task.id));
            });
        }
        return subtasks;
    };
    __decorate([
        core_1.Input('project'), 
        __metadata('design:type', Object)
    ], ProjectTreeComponent.prototype, "project", void 0);
    ProjectTreeComponent = __decorate([
        core_1.Component({
            selector: 'project-tree',
            providers: [icon_1.MdIconRegistry],
            directives: [router_1.ROUTER_DIRECTIVES, task_item_component_1.TaskItemComponent, card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MdButton, icon_1.MdIcon],
            templateUrl: '/dist/app/shared/components/project-tree.html'
        }), 
        __metadata('design:paramtypes', [icon_1.MdIconRegistry, router_1.Router])
    ], ProjectTreeComponent);
    return ProjectTreeComponent;
}());
exports.ProjectTreeComponent = ProjectTreeComponent;
var UITask = (function (_super) {
    __extends(UITask, _super);
    function UITask(task, level, parentId) {
        _super.call(this);
        this.level = 0;
        this.visible = true;
        this.subtasksVisible = true;
        this.level = level;
        this.parentId = parentId;
        this.id = task.id;
        this.title = task.title;
        this.subtasks = task.subtasks;
    }
    return UITask;
}(_1.Task));
exports.UITask = UITask;
//# sourceMappingURL=project-tree.component.js.map