import Em from 'ember';

export default Em.Service.extend({
  init() {
    let howl = new Howl({
      src: ['/spanish.mp3'],
      sprite: {
        car:           [34050, 2000 ],
        seatbelt:      [37190, 4317 ],
        windoWl:       [42190, 3000 ],
        backseat:      [47060, 2500 ],
        frontseat:     [51140, 3000 ],
        livingroom:    [56200,1000 ],
        couch:         [59500,2000 ],
        windoW:        [103010,2000 ],
        chair:         [, ],
        curtain:       [, ],
        lamp:          [, ],
        table:         [, ],
        spoon:         [, ],
        plate:         [, ],
        pitcher:       [, ],
        fork:          [, ],
        tablecloth:    [, ],
        cup:           [, ],
        napkin:        [, ],
        food:          [, ],
        water:         [, ],
        juice:         [, ],
        store:         [, ],
        shoppingcart:  [, ],
        fruit:         [, ],
        vegetables:    [, ],
        meat:          [, ],
        cannedfoods:   [, ],
        milk:          [, ],
        creditcard:    [, ]

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
