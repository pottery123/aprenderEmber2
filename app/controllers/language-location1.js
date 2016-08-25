import Ember from 'ember';

export default Ember.Controller.extend({
audioService: Em.inject.service(),
ajax: Ember.inject.service(),
actions: {
      front(id){
            $("#" + id + " .primarylanguage").toggle()//space is find child of div
            $("#" + id + " .translation").toggle()

      },

      play(sound){
        this.get('audioService').play(sound);
        console.log(sound)

      }
    }
});
