book.views.Entry=Backbone.View.extend({

    template: JST['entries/entry'],
    tagName: 'table border="1" width=100%',
    render:function(){
        //  $(@el).html(@template())
        $(this.el).html(this.template({entry:this.model,bookID:this.model.get('id')}));
       // document.getElementById("myTable").insertRow(-1);
      //  $('#myTable tr:last').after( $(this.el).html(this.template({entry:this.model,bookID:this.model.get('id')})));
        return this;
    }
});