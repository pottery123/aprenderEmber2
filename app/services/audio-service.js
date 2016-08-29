import Em from 'ember';
import config from '../config/environment';

export default Em.Service.extend({
  init() {
    let howl = new Howl({
      src: [config.rootURL + 'spanish.mp3'],
      volume: 1,
      onend: function() {
      alert('Finished!');
    },
      sprite: {
        car:           [34050, 2000 ],
        seatbelt:      [37190, 4317 ],
        windoWl:       [42190, 3000 ],
        backseat:      [47060, 2500 ],
        frontseat:     [51140, 3000 ],
        livingroom:    [56200, 1000 ],
        couch:         [59500, 2000 ],
        windoW:        [62400, 2000 ],
        chair:         [66500, 2000 ],
        tv:            [70000, 2000 ],
        curtain:       [74000, 2000 ],
        lamp:          [78000, 2000 ],
        table:         [82500, 2000 ],
        spoon:         [86000, 2000 ],
        plate:         [90000,2000  ],
        pitcher:       [94000,2000  ],
        fork:          [98000,2000  ],
        tablecloth:    [102000,3000 ],
        cup:           [106500,2000 ],
        napkin:        [110000,2000 ],
        food:          [114000,2000 ],
        water:         [118000,2000 ],
        juice:         [122000,1500 ],
        store:         [126000,2000 ],
        shoppingcart:  [130000,2000 ],
        fruit:         [134000,2000 ],
        vegetables:    [138000,2000 ],
        meat:          [141500,2000 ],
        cannedfoods:   [145100,2800 ],
        milk:          [150000,2000 ],
        creditcard:    [153000,2500 ]

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
