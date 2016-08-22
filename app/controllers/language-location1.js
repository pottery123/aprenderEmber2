import Ember from 'ember';

export default Ember.Controller.extend({
ajax: Ember.inject.service(),
actions: {
      front(id){
            $("#" + id + " .primarylanguage").toggle()//space is find child of div
            $("#" + id + " .translation").toggle()

      },

      back(){

      }
    }


});
