import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { StorageService, TasksService, ProjectsService } from './shared';

bootstrap(AppComponent, [HTTP_PROVIDERS, StorageService, TasksService, ProjectsService]);