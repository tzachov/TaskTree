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
var models_1 = require('../models');
var NewTaskItemComponent = (function () {
    function NewTaskItemComponent() {
        this.newTask = {};
    }
    NewTaskItemComponent.prototype.onSubmit = function () {
        if (!this.parentItem.subtasks)
            this.parentItem.subtasks = [];
        this.parentItem.subtasks.push(this.newTask);
        this.newTask = {};
    };
    __decorate([
        core_1.Input('parent-item'), 
        __metadata('design:type', models_1.Task)
    ], NewTaskItemComponent.prototype, "parentItem", void 0);
    NewTaskItemComponent = __decorate([
        core_1.Component({
            selector: 'new-task-item',
            templateUrl: '/dist/app/shared/components/new-task-item.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewTaskItemComponent);
    return NewTaskItemComponent;
}());
exports.NewTaskItemComponent = NewTaskItemComponent;
//# sourceMappingURL=new-task-item.component.js.map