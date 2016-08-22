import Ember from 'ember';

export default Ember.Controller.extend({



ajax: Ember.inject.service(),
actions: {
      getName(id){
        this.transitionToRoute('language_location1',id)
      }
    }


});
