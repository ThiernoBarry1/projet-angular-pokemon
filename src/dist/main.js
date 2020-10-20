"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// point d'entré de l'application 
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map