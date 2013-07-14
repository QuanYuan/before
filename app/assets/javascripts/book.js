var book = {
  models: {},
  collections: {},
  views: {},
  routers: {},
  initialize: function() {
//return alert('Hello from Backbone js here hah again!');
      new book.routers.Entries
      Backbone.history.start()
}
};

$(document).ready(function() {
return book.initialize();
});
