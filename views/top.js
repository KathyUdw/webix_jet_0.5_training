define([
    'app',
    '../resources/js/init',
    'itemlist'
], function(app, init, itemlist) {
    
    var ui = {
        id: 'trainingView',
        view: 'layout',
        type: 'clean',
        rows: [
            {
                type: 'header',
                template: 'Header'
            },
            {
                itemlist
            }
        ]
    }

    return {
        $ui: ui,
        $oninit: function(view) {
            console.log('Geladen');
        }
    };
    
});