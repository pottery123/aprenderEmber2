import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  location: DS.belongsTo('location', { async: true}),
  language: DS.belongsTo('language', { async: true})
});
