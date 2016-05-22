import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent, ViewProjectComponent } from './projects/index';

@Component({
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES, MdToolbar, MdIcon, MdButton],
    providers: [ROUTER_PROVIDERS, MdIconRegistry],
    template: `
    <md-toolbar color="primary">
        <button md-icon-button>
            <md-icon>menu</md-icon>
        </button>
        TaskTree
    </md-toolbar>
    
    <router-outlet></router-outlet>`
})
@Routes([
    { path: '/', component: HomeComponent },
    { path: '/projects/', component: CreateProjectComponent },
    { path: '/projects/:id', component: ViewProjectComponent } 
])
export class AppComponent implements OnInit {
    
    constructor(private _router: Router, mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('md', 'material-icons');
    }
    
    ngOnInit() { }
}