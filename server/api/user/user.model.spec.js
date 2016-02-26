'use strict';

<<<<<<< HEAD
import app from '../..';
import User from './user.model';
var user;
var genUser = function() {
  user = new User({
    provider: 'local',
    name: 'Fake User',
    email: 'test@example.com',
    password: 'password'
  });
  return user;
};

describe('User Model', function() {
  before(function() {
    // Clear users before testing
    return User.removeAsync();
  });

  beforeEach(function() {
    genUser();
  });

  afterEach(function() {
    return User.removeAsync();
  });

  it('should begin with no users', function() {
    return User.findAsync({}).should
      .eventually.have.length(0);
  });

  it('should fail when saving a duplicate user', function() {
    return user.saveAsync()
      .then(function() {
        var userDup = genUser();
        return userDup.saveAsync();
      }).should.be.rejected;
  });

  describe('#email', function() {
    it('should fail when saving without an email', function() {
      user.email = '';
      return user.saveAsync().should.be.rejected;
    });
  });

  describe('#password', function() {
    beforeEach(function() {
      return user.saveAsync();
    });

    it('should authenticate user if valid', function() {
      user.authenticate('password').should.be.true;
    });

    it('should not authenticate user if invalid', function() {
      user.authenticate('blah').should.not.be.true;
    });

    it('should remain the same hash unless the password is updated', function() {
      user.name = 'Test User';
      return user.saveAsync()
        .spread(function(u) {
          return u.authenticate('password');
        }).should.eventually.be.true;
    });
  });

=======
var should = require('should');
var app = require('../../app');
var User = require('./user.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

describe('User Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate user', function(done) {
    user.save(function() {
      var userDup = new User(user);
      userDup.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  it('should fail when saving without an email', function(done) {
    user.email = '';
    user.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("should authenticate user if password is valid", function() {
    return user.authenticate('password').should.be.true;
  });

  it("should not authenticate user if password is invalid", function() {
    return user.authenticate('blah').should.not.be.true;
  });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
});
