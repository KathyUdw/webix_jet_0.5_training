define([], function() {
    
    var collection = new webix.DataCollection({
        data:[
            {id:1, title:'Eerste item', summary:'Dit is het eerste item in de lijst'},
            {id:2, title:'Item twee', summary:'Het tweede item in de lijst staat hier'},
            {id:3, title:'Nog een item', summary:'En nog een item, gewoon omdat het kan'}
        ]
    });

    return {
        data: collection
    };
    
});