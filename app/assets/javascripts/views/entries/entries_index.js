//class Book.Views.EntriesIndex extends Backbone.View

  //template: JST['entries/index']


book.views.EntriesIndex=Backbone.View.extend({

  template: JST['entries/index'],
    events: {
        "submit #new_entry": "createEntry",
        "click #draw": "drawWinner",
        "click #deleteEntry":"deleteBookmark",
        "click #editEntry":"editBookmark",
        "click #filterEntry":"filterBookmark"
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
var attributes={
    name: $('#new_entry_name').val(),
    address:$('#new_entry_address').val(),
    tag:$('#new_entry_tags').val()
};
        console.log (attributes.name);
        if(!attributes.name&&!this.checkURL(attributes.address)) alert("Error:name cannot be blank\n Error:Invalid URL Address");
        else if(!attributes.name&&this.checkURL(attributes.address)) alert("Error:name cannot be blank");
        else if(attributes.name&&!this.checkURL(attributes.address)) alert("Error:Invalid URL Address");
        else this.collection.create(attributes, {
            wait: true,
            success: function() {
                return $('#new_entry')[0].reset();
            },
            error: this.handleError
        });
        $('#createBookmark').hide();
    },
  checkURL:function(value) {
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
    if (urlregex.test(value)) {
        return (true);
    }
    return (false);
},
    handleError: function(entry, response) {
        var attribute, errors, message, messages, st, _i, _len;
        if (response.status === 422) {
            $('#createBookmark').show();
            errors = $.parseJSON(response.responseText).errors;
            st = "";
            for (attribute in errors) {
                messages = errors[attribute];
                for (_i = 0, _len = messages.length; _i < _len; _i++) {
                    message = messages[_i];
                    st += "Error:" + ("" + attribute + " " + message) + "\n";
                }
            }
            return alert(st);
        }
    },
    appendEntry:function(entry){
        var view=new book.views.Entry({model:entry});
        $('#entries').append(view.render().el);
    },
    appendFilter:function(entry){
        var view=new book.views.Entry({model:entry});
        $('.filterResults').append(view.render().el);
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
        //edit cannot work when add then directly edit it, should use listener, with data
        //validation now it is working
    },

    filterBookmark:function(e){
        e.preventDefault();
        $('.filterResults').empty();
        var lookup=$('#filterField').val();
        console.log (lookup);
        var results_name=this.collection.where({name:lookup});
        var results_address=this.collection.where({address:lookup});
        var results_tags=this.collection.where({tags:lookup});

        if(!jQuery.isEmptyObject(results_name)||!jQuery.isEmptyObject(results_address)||!jQuery.isEmptyObject(results_tags)){
            $('#entries').hide();
            if(!jQuery.isEmptyObject(results_name)){
                var results=new book.collections.Entries(results_name);
                results.each(this.appendFilter);
            }
            if(!jQuery.isEmptyObject(results_address)){
                var results=new book.collections.Entries(results_address);
                results.each(this.appendFilter);
            }
            if(!jQuery.isEmptyObject(results_tags)){
                var results=new book.collections.Entries(results_tags);
                results.each(this.appendFilter);
            }

        }
        else  {
            $('#entries').show();
        $('.filterResults').empty();
        }
    }


});
