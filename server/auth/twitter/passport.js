<<<<<<< HEAD
import passport from 'passport';
import {Strategy as TwitterStrategy} from 'passport-twitter';

export function setup(User, config) {
=======
exports.setup = function (User, config) {
  var passport = require('passport');
  var TwitterStrategy = require('passport-twitter').Strategy;

>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
<<<<<<< HEAD
    User.findOneAsync({
      'twitter.id_str': profile.id
    })
      .then(user => {
        if (user) {
          return done(null, user);
        }

=======
    User.findOne({
      'twitter.id_str': profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        user = new User({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'twitter',
          twitter: profile._json
        });
<<<<<<< HEAD
        user.saveAsync()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
=======
        user.save(function(err) {
          if (err) return done(err);
          done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
    }
  ));
};
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
