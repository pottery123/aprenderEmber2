import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {
  let id = params.id
  console.log(params)
   let result = this.get('ajax').request('http://localhost:3000/languages/1');
   console.log(result)
   return result
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
