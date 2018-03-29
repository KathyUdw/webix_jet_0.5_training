define([
    'app',
    'resources/js/init',
    'views/itemlist'
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
            itemlist
        ]
    }

    return {
        $ui: ui,
        $oninit: function(view) {
            console.log('top geladen');
        }
    };
    
});