define([
    'app',
    'resources/js/init'
], function(app, init) {
    
    function save_form() {
        var form = $$('itemFormId');
        if(form.isDirty()) {
            form.save();
            console.log('Formulier is opgeslagen');
        }
        console.log('save_form');
    };

    // + + + formulier voor itemlist + + +
    var itemform = {
        rows: [
            {
                type: 'header',
                template: 'Formulier'
            },
            {
                view: 'form',
                id: 'itemFormId',
                gravity: 1,
                scroll: true,
                elements: [
                    {
                        view: 'text',
                        id: 'itemId',
                        name: 'item_id',
                        hidden: true
                    },
                    {
                        view: 'text',
                        id: 'itemTitle',
                        name: 'title',
                        label: 'Titel'
                    },
                    {
                        view: 'text',
                        id: 'itemSummary',
                        name: 'summary',
                        label: 'Samenvatting'
                    },
                    {
                        cols: [
                            {
                                view: 'button',
                                value: 'Opslaan',
                                type: 'form',
                                on: {
                                    'onItemClick': function() {
                                        console.log('Formulier click');
                                        save_form()
                                    }
                                }
                            },
                            {
                                view: 'button',
                                value: 'Opschonen',
                                on: {
                                    'onItemClick': function() {
                                        $$('itemFormId').clear();
                                    }
                                }
                            }
                        ]
                    },
                    {
                        view: 'button',
                        value: 'Deselecteren',
                        on: {
                            'onItemClick': function() {
                                $$('itemListId').clearSelection();
                            }
                        }
                    }
                ],
                elementsConfig: {
                    labelPosition: 'top'
                }
            }
        ]
    }

    return {
        $ui: itemform,
        $oninit: function(view) {
            $$('itemFormId').bind('itemListId');

            console.log('Formulier geladen');
        }
    }
    
});