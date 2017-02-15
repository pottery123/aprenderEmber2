import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index',                         { path: '/'                                    });
  this.route('languages',                     {path:  '/languages'                           });



  this.route('language1',                     {path: '/languages/1'                          });
  this.route('language2',                     {path: '/languages/2'                          });

  this.route('language-locations1',           {path: '/languages/1/locations'                });
  this.route('language-locations2',           {path: '/languages/2/locations'                });
  this.route('language_location',             {path: '/languages/:language_id/locations/:id' });
  this.route('language_location1',            {path: '/languages/1/locations/:id'            });
  this.route('language_location2',            {path: '/languages/2/locations/:id'            });

});

export default Router;
