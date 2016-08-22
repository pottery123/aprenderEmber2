import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
model(params) {

   let language_id = params.language_id
   let id = params.id
   let result =   this.get('ajax').request('http://localhost:3000/languages/' + language_id +'/locations/' + id);
   return  result
},

queryParams:{
  number:{
    refreshModel: true
    }
  }
});
