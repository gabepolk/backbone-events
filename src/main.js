var ButtonView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<button>I do nothing!</button>');
  }
});

var buttonView = new ButtonView({
  el: $('.my-button')
});

buttonView.render();

var ProfileView = Backbone.View.extend({
  initialize: function(options){
    this.name = options.name;
    this.age = options.age;
    var profileTemplateHtml = $('#templates .profile-template').html();
    this.template = _.template(profileTemplateHtml);
  },
  render: function(){
    $(this.el).empty();
    var newHtml = this.template({ name: this.name, age: this.age });
    $(this.el).append(newHtml);
  }
});

var ProfileView = new ProfileView({
  name: 'Bob',
  age: 45,
  el: $('.profile')
});

ProfileView.render();
