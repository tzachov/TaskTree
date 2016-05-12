import { Component, Input } from '@angular/core';
import { NewTaskItemComponent } from './new-task-item.component';
import { Task } from '../models';
import { TasksService } from '../services';

@Component({
    selector: 'task-item',
    directives: [TaskItemComponent, NewTaskItemComponent],
    templateUrl: '/dist/app/shared/components/task-item.html'
})
export class TaskItemComponent {
    @Input('task') task;
    @Input('is-last') isLast;

    newTitle: string;

    newTaskVisible: boolean = false;
    subtasksVisible: boolean = false;
    isEditMode: boolean = false;

    private editCancelled: boolean = false;

    constructor(private _tasksService: TasksService) {
        
    }

    startEdit() {
        console.log('startEdit::editCancelled', this.editCancelled);
        this.editCancelled = false;
        this.newTitle = this.task.title;
        this.isEditMode = true;
    }

    confirmEdit() {
        console.log('confirmEdit::editCancelled', this.editCancelled);
        if (this.editCancelled)
            return;

// TODO: use _tasksService to update task.
//       this._tasksService.updateTask('123', )

        this.task.title = this.newTitle;
        this.isEditMode = false;
    }
    
    cancelEdit() {
        console.log('cancelEdit::editCancelled', this.editCancelled);
        this.isEditMode = false;
    }
    
    onTitleEditKeyUp($event: KeyboardEvent) {
        console.log($event);
        if ($event.keyCode === 27) {
            this.editCancelled = true;
            $event.preventDefault();
            $event.stopImmediatePropagation();
            this.cancelEdit();
        }
    }
}