"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var shared_1 = require('./shared');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, shared_1.StorageService, shared_1.TasksService, shared_1.ProjectsService]);
//# sourceMappingURL=main.js.map