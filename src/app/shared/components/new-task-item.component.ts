import { Component, Input } from '@angular/core';
import { Task } from '../models';

@Component({
    selector: 'new-task-item',
    templateUrl: '/dist/app/shared/components/new-task-item.html'
})
export class NewTaskItemComponent {
    @Input('parent-item') parentItem: Task;
    newTask: Task = <Task>{};
    
    onSubmit() {
        if (!this.parentItem.subtasks)
            this.parentItem.subtasks = [];
        this.parentItem.subtasks.push(this.newTask);
        this.newTask = <Task>{};
    }
}