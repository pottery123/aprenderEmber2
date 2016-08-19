import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('language'            ,{path: '/languages/:id'});
  this.route('languages'           ,{path:  '/languages'});
  this.route('location'            ,{path:  ' /languages/:language_id/locations'     });
  this.route('language-location'   ,{path:  '/languages/:language_id/locations/:id'  });
});

export default Router;
