//class Book.Views.EntriesIndex extends Backbone.View

  //template: JST['entries/index']


book.views.EntriesIndex=Backbone.View.extend({

  template: JST['entries/index'],

initialize:function(){
    this.collection.on('reset', this.render, this);
},
  render:function(){
    //  $(@el).html(@template())
      $(this.el).html(this.template({
          entries: this.collection
      }));
      return this;
    }
});
