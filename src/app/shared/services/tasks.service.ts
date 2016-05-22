import { Injectable } from '@angular/core';
import { Task, Project } from '../models';

@Injectable()
export class TasksService {
    
    private projects: Project[] = [
        <Project>{
            id: 'proj-1',
            name: 'Co-DJ',
            features: [
                
            ]
        }
    ];
    
    loadTasks() {
        
    }
    
    updateTask(id: string, newTask: Task) {
        
    }
}