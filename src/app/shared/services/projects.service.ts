import { Injectable } from '@angular/core';
import { Task, Project } from '../models';

@Injectable()
export class ProjectsService {
    
    private projects: Project[] = [
         <Project>{
            id: 'proj-1',
            name: 'Co-DJ', features: [
                {
                    id: 'feat-1',
                    title: 'Homepage', subtasks: [
                        {
                            id: 'task-1',
                            title: 'Check if user is logged in', subtasks: [
                                { id: 'subtask-1', title: 'Check if logged in with facebook' },
                                { id: 'subtask-2', title: 'Check if logged in with google' },
                                { id: 'subtask-3', title: 'Show available playlists if logged in' }
                            ]
                        },
                        {
                            id: 'task-2',
                            title: 'UI',
                            subtasks: [
                                { id: 'subtask-4', title: 'Show create and join buttons' }
                            ]
                        }
                    ]
                },
                {
                    id: 'feat-2',
                    title: 'Create Playlist', subtasks: [
                        { id: 'task-3', title: 'Playlist settings page' }
                    ]
                }
            ]
        }
    ];
    
    getAll() {
        return Promise.resolve(this.projects);
    }
    
    create(name: string) {
        var newProject =<Project>{ name: name, id: 'proj-' + this.projects.length, features: [] }; 
        this.projects.push(newProject);
        return Promise.resolve(newProject);
    }
}