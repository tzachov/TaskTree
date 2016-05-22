import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { ProjectsService } from '../shared';

import {
    Project,
    Task,
    ProjectTreeComponent,
    TaskItemComponent
} from '../shared';

@Component({
    templateUrl: '/dist/app/home/home.html',
    directives: [ROUTER_DIRECTIVES, ProjectTreeComponent, MdToolbar]
})
export class HomeComponent implements OnInit {
    projects: Project[] = [];
    
    constructor(private projectsService: ProjectsService) {
        
    }
    
    ngOnInit() {
        this.projectsService.getAll()
            .then((response) => {
                this.projects = response;
            });
    }
}