import { Component, Input } from '@angular/core';
import { NewTaskItemComponent } from './new-task-item.component';
import { Task } from '../models';

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
    isEditMode: boolean = false;

private editCancelled: boolean = false;

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

        this.task.title = this.newTitle;
        this.newTitle = null;
        this.isEditMode = false;
    }
    
    cancelEdit() {
        console.log('cancelEdit::editCancelled', this.editCancelled);
        this.newTitle = null;
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