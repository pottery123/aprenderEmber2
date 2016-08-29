import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {

   let result = this.get('ajax').request('https://aprenderapi.herokuapp.com/languages');
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
