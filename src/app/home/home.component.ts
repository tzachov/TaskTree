import { Component } from '@angular/core';
import { Project, Task } from '../shared/models';
import { ProjectTreeComponent, TaskItemComponent } from '../shared/components';

@Component({
    templateUrl: '/dist/app/home/home.html',
    directives: [ProjectTreeComponent]
})
export class HomeComponent {
    projects: Project[] = [
        <Project>{
            name: 'Co-DJ', features: [
                <Task>{
                    title: 'Homepage', subtasks: [
                        <Task>{
                            title: 'Check if user is logged in', subtasks: [
                                <Task>{ title: 'Check if logged in with facebook' },
                                <Task>{ title: 'Check if logged in with google' }
                            ]
                        }
                    ]
                },
                <Task>{
                    title: 'Create Playlist', subtasks: [
                        <Task>{ title: 'Playlist settings page' }
                    ]
                }
            ]
        }
    ];
}