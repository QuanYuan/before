//class Book.Views.EntriesIndex extends Backbone.View

  //template: JST['entries/index']


book.views.EntriesIndex=Backbone.View.extend({

  template: JST['entries/index'],
    events: {
        "submit #new_entry": "createEntry",
        "click #draw": "drawWinner",
        "click #deleteEntry":"deleteBookmark",
        "click #editEntry":"editBookmark"
    },

initialize:function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendEntry, this);
    this.collection.on('remove', this.render, this);
},
  render:function(){
    //  $(@el).html(@template())
      $(this.el).html(this.template());
      this.collection.each(this.appendEntry);
      $('#createBookmark').hide();
      return this;
    },
    createEntry:function(e){

        e.preventDefault();

        this.collection.create({
            name: $('#new_entry_name').val(),
            address:$('#new_entry_address').val(),
            tag:$('#new_entry_tags').val()
        });

        $('#new_entry')[0].reset();
        $('#createBookmark').hide();
    },
    appendEntry:function(entry){
        var view=new book.views.Entry({model:entry});
        $('#entries').append(view.render().el);
    },
    drawWinner:function(e){
        e.preventDefault();
        $('#createBookmark').show();
    },
    deleteBookmark:function(e){
        e.preventDefault();
        var ind=e.target.name;
       // console.log(ind);
        this.collection.get(ind).destroy()
    },
    editBookmark:function(e){
        e.preventDefault();
        var ind=e.target.name;
        var name=this.collection.get(ind).get("name")
        var address=this.collection.get(ind).get("address")
        var tags=this.collection.get(ind).get("tag")
        this.collection.get(ind).destroy()
        $('#createBookmark').show()
        $('#new_entry_name').val(name)
        $('#new_entry_address').val(address)
        $('#new_entry_tags').val(tags)
    }


});
