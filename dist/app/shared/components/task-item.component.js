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
var new_task_item_component_1 = require('./new-task-item.component');
var services_1 = require('../services');
var TaskItemComponent = (function () {
    function TaskItemComponent(_tasksService) {
        this._tasksService = _tasksService;
        this.newTaskVisible = false;
        this.subtasksVisible = false;
        this.isEditMode = false;
        this.editCancelled = false;
    }
    TaskItemComponent.prototype.startEdit = function () {
        console.log('startEdit::editCancelled', this.editCancelled);
        this.editCancelled = false;
        this.newTitle = this.task.title;
        this.isEditMode = true;
    };
    TaskItemComponent.prototype.confirmEdit = function () {
        console.log('confirmEdit::editCancelled', this.editCancelled);
        if (this.editCancelled)
            return;
        // TODO: use _tasksService to update task.
        //       this._tasksService.updateTask('123', )
        this.task.title = this.newTitle;
        this.isEditMode = false;
    };
    TaskItemComponent.prototype.cancelEdit = function () {
        console.log('cancelEdit::editCancelled', this.editCancelled);
        this.isEditMode = false;
    };
    TaskItemComponent.prototype.onTitleEditKeyUp = function ($event) {
        console.log($event);
        if ($event.keyCode === 27) {
            this.editCancelled = true;
            $event.preventDefault();
            $event.stopImmediatePropagation();
            this.cancelEdit();
        }
    };
    __decorate([
        core_1.Input('task'), 
        __metadata('design:type', Object)
    ], TaskItemComponent.prototype, "task", void 0);
    __decorate([
        core_1.Input('is-last'), 
        __metadata('design:type', Object)
    ], TaskItemComponent.prototype, "isLast", void 0);
    TaskItemComponent = __decorate([
        core_1.Component({
            selector: 'task-item',
            directives: [TaskItemComponent, new_task_item_component_1.NewTaskItemComponent],
            templateUrl: '/dist/app/shared/components/task-item.html'
        }), 
        __metadata('design:paramtypes', [services_1.TasksService])
    ], TaskItemComponent);
    return TaskItemComponent;
}());
exports.TaskItemComponent = TaskItemComponent;
//# sourceMappingURL=task-item.component.js.map