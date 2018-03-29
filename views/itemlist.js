define([
    'app',
    'resources/js/init',
    'models/records'
], function(app, init, records) {
    
    // + + + list met training data + + +
    var itemlist = {
        rows: [
            {
                view: 'datatable',
                id: 'itemListId',
                gravity: 1,
                scroll: true,
                columns: [
                    {id:'item_id', header:'ID', fillspace:1, minWidth:35},
                    {id:'title', header:'Titel', fillspace:2, minWidth:140},
                    {id:'summary', header:'Samenvatting', fillspace:9, minWidth:300}
                ]
            }
        ]
    };

    return {
        $ui: itemlist,
        $oninit: function(view) {
            $$('itemListId').parse(records.data);
            console.log('records', records.data);
        }
    };
});