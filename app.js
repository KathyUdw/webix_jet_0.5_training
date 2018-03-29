// App configuration

define([
    '../libs/webix-mvc-core/core',
    '../libs/webix-mvc-core/plugins/menu'
], function(core, menu) {
    
    // Configuration
    var app = core.create({
        id:       'training',
        name:     'Training',
        version:  '0.1.0',
        debug:    true,
        start:    '/top'
    });
    
    return app;
});