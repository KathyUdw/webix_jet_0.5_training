define([], function() {
    
    var collection = new webix.DataCollection({
        data:[
            {item_id:1, title:"Eerste item", summary:"Dit is het eerste item in de lijst"},
            {item_id:2, title:"Item twee", summary:"Het tweede item in de lijst staat hier"},
            {item_id:3, title:"Nog een item", summary:"En nog een item, gewoon omdat het kan"},
            {item_id:4, title:"Wat, nog eentje?", summary:"Nou, vooruit dan maar."}
        ]
    });

    return {
        data: collection
    };
    
});