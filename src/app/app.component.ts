import { Component, OnInit } from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'app-root',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: '<h1>TaskTree</h1><router-outlet></router-outlet>'
})
@Routes([
    { path: '/', component: HomeComponent }
])
export class AppComponent implements OnInit {
    
    constructor(private _router: Router) {
        
    }
    
    ngOnInit() { }
}