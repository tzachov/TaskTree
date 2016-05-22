// map tells the System loader where to look for things
var map = {
    'app': 'dist/app',
    'rxjs': 'dist/lib/rxjs',
    'angular2-in-memory-web-api': 'dist/lib/angular2-in-memory-web-api',
    '@angular': 'dist/lib/@angular',
    '@angular2-material': 'dist/lib/@angular2-material'
};
// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' },
    '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/list': { format: 'cjs', defaultExtension: 'js', main: 'list.js' },
    '@angular2-material/icon': { format: 'cjs', defaultExtension: 'js', main: 'icon.js' },
    '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' }
};
var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    'app/shared',
    'app/shared/components',
    'app/shared/models',
    'app/shared/services'
];
// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});
var config = {
    map: map,
    packages: packages
};
System.config(config);
//# sourceMappingURL=systemjs.config.js.map