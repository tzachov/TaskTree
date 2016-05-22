import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { TaskItemComponent } from './task-item.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { Project, Task } from '../models/';

@Component({
    selector: 'project-tree',
    providers: [MdIconRegistry],
    directives: [ROUTER_DIRECTIVES, TaskItemComponent, MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MdIcon],
    templateUrl: '/dist/app/shared/components/project-tree.html'
})
export class ProjectTreeComponent implements OnInit {
    @Input('project') project;

    tasks: UITask[] = [];

    constructor(mdIconRegistry: MdIconRegistry, public router: Router) {

    }

    ngOnInit() {
        this.tasks = this.flattenTasks(this.project);
    }

    toggleVisibilty(task: UITask) {
        task.subtasksVisible = !task.subtasksVisible;

        var startIndex = this.tasks.indexOf(task) + 1;
        for (var i = startIndex; i < this.tasks.length; i++) {
            if (this.tasks[i].level > task.level) {
                this.tasks[i].visible = task.subtasksVisible; 
            } else {
                break;
            }
        }
    }

    flattenTasks(project: Project) {
        var tasks: UITask[] = [];
        console.log('Project:', this.project);
        project.features.forEach(feature => {
            tasks = tasks.concat(this.getSubtasks(feature, 0, project.id));
        });

        console.log(tasks);
        return tasks;
    }
    
    viewProject(project: Project) {
        this.router.navigate(['/projects/', project.id]);
    }

    private getSubtasks(task: Task, level: number, parentId: string) {
        var subtasks: UITask[] = [new UITask(task, level, parentId)];
        if (task.subtasks) {
            task.subtasks.forEach(subtask => {
                subtasks = subtasks.concat(this.getSubtasks(subtask, level + 1, task.id));
            });
        }

        return subtasks;
    }
}

export class UITask extends Task {
    level: number = 0;
    parentId: string;
    visible: boolean = true;
    subtasksVisible: boolean = true;

    constructor(task: Task, level: number, parentId: string) {
        super();
        this.level = level;
        this.parentId = parentId;
        this.id = task.id;
        this.title = task.title;
        this.subtasks = task.subtasks;
    }
}