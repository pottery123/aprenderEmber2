import Ember from 'ember';

export default Ember.Controller.extend({

ajax: Ember.inject.service(),
actions: {
      toPortugueseLocations(){
        this.transitionToRoute('language-locations1')
      },


      toSpanishLocations(){
        this.transitionToRoute('language-locations2')
      }
    }


});
