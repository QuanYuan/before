book.views.Entry=Backbone.View.extend({

    template: JST['entries/entry'],
    tagName: 'tr',
    render:function(){
        //  $(@el).html(@template())
        $(this.el).html(this.template({entry:this.model,bookID:this.model.get('id')}));
        return this;
    }
});