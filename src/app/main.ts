import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { StorageService, TasksService } from './shared';

bootstrap(AppComponent, [StorageService, TasksService]);