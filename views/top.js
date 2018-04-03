define([
    'app',
    'resources/js/init',
    'views/itemlist',
    'views/itemform'
], function(app, init, itemlist, itemform) {
    
    var ui = {
        id: 'trainingView',
        view: 'layout',
        type: 'clean',
        scroll: true,
        cols: [
            itemlist,
            itemform
        ]
    }

    return {
        $ui: ui,
        $oninit: function(view) {
            console.log('top geladen');
        }
    };
    
});