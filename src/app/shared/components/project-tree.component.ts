import { Component, Input } from '@angular/core';
import { TaskItemComponent } from './task-item.component';

@Component({
    selector: 'project-tree',
    directives: [TaskItemComponent],
    templateUrl: '/dist/app/shared/components/project-tree.html'
})
export class ProjectTreeComponent {
    @Input('project') project;
}