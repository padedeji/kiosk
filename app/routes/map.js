import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    filter: {
      refreshModel: true,
      replace: true,
      as: 'filter'
    } 
  },

  model(params) {
   return Ember.RSVP.hash({
      datapoints: Ember.$.get('./data.json').then(function(data) {
        return data.filter(function(item) {
          return ( params.filter ) ? item.categories.includes(params.filter) : true;
        });
      })
    });
  },
});
