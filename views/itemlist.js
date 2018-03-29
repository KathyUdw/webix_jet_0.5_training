define([
    'app',
    '../resources/js/init',
    '../models/records'
], function(app, init, records) {
    
    // + + + list met training data + + +
    var itemlist = {
        rows: [
            {
                view: 'datatable',
                id: 'itemList',
                height: 200,
                columns: [
                    {id:id, header:'ID', width:'10%'},
                    {id:title, header:'Titel', width:'30%'},
                    {id:summary, header:'Samenvatting', width:'60%'}
                ],
                autoConfig: true
            }
        ]
    };

    return {
        $ui: itemlist,
        $oninit: function(view) {
            $$('itemList').parse(records.data);
            
            console.log('records', records.data);
        }
    };
});