import Em from 'ember';

export default Em.Service.extend({
  init() {
    let howl = new Howl({
      src: ['/car.mp3'],
      sprite: {
        car: [0, 300],
      }
    });

    this.set('howl', howl);
  },

  sounds: Em.computed('howl', function() {
    let howl = this.get('howl');

    return Object.keys(howl._sprite);
  }),

  play(sound) {
    let howl = this.get('howl');
    howl.play(sound);
  }
});
