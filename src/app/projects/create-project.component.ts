import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../shared';
import { MdButton } from '@angular2-material/button';
import { MdInput } from '@angular2-material/input';
import { MdCard } from '@angular2-material/card';

@Component({
    directives: [MdButton, MdInput, MdCard],
    template: `
    <md-card>
    <md-input type="text" placeholder="Project name" [(ngModel)]="name"></md-input>
    <button md-button (click)="createProject()">Create Project</button>
    </md-card>
    `
})
export class CreateProjectComponent {
    name: string = null;
    
    constructor(private projectsService: ProjectsService, private router: Router) {
        
    }
    
    createProject() {
        this.projectsService.create(this.name)
            .then((response) => {
                this.name = null;
                this.router.navigate(['/']);
            });
    }
}