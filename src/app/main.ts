import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { StorageService, TasksService } from './shared/services';

bootstrap(AppComponent, [StorageService]);