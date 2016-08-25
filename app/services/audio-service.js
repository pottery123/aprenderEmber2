import Em from 'ember';

export default Em.Service.extend({
  init() {
    let howl = new Howl({
      src: ['/sprite2.mp3'],
      sprite: {
        seatbelt:       [0,1000 ],
        frontSeat:      [1000,2000 ],
        steeringWheel:  [3000, 4000],
        windoW:         [300, 400],
        car:            [400,500 ]
      },
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
