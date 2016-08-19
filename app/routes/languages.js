import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  console.log(params)
   let result = this.get('ajax').request('http://localhost:3000/languages');
   console.log(result)
   return result
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
