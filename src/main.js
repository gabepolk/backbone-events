var ShowButtonView = Backbone.View.extend({
  render: function() {
    $(this.el).html('<button>I do nothing!</button>');
  }
});

var buttonView = new ShowButtonView({
  el: $('.my-button')
});

buttonView.render();
