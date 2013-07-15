//class Book.Routers.Entries extends Backbone.Router

  book.routers.Entries=Backbone.Router.extend({
      routes:{
          "": "index",
          "entries/:id": "show"

      },
      initialize:function(){
          this.collection=new book.collections.Entries();
          this.collection.fetch({reset:true})
      },
      index: function(){
          //alert ("home page");
          //view = new Raffler.Views.EntriesIndex()
         // $('#container').html(view.render().el)
          var view = new book.views.EntriesIndex({
              collection: this.collection
          });
          $('#container').html(view.render().el)
      },
      show:function(id){
          alert( "Entry "+id);
      }

  });
