import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr        ('string'),
  words: DS.hasMany    ('word', { async: true }),
  locations: DS.hasMany('location', { async: true })
});
