'use strict';

<<<<<<< HEAD
import passport from 'passport';
import config from '../config/environment';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import compose from 'composable-middleware';
import User from '../api/user/user.model';

var validateJwt = expressJwt({
  secret: config.secrets.session
});
=======
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({ secret: config.secrets.session });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
<<<<<<< HEAD
export function isAuthenticated() {
=======
function isAuthenticated() {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
<<<<<<< HEAD
      if (req.query && req.query.hasOwnProperty('access_token')) {
=======
      if(req.query && req.query.hasOwnProperty('access_token')) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }
      validateJwt(req, res, next);
    })
    // Attach user to request
    .use(function(req, res, next) {
<<<<<<< HEAD
      User.findByIdAsync(req.user._id)
        .then(user => {
          if (!user) {
            return res.status(401).end();
          }
          req.user = user;
          next();
        })
        .catch(err => next(err));
=======
      User.findById(req.user._id, function (err, user) {
        if (err) return next(err);
        if (!user) return res.status(401).send('Unauthorized');

        req.user = user;
        next();
      });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
<<<<<<< HEAD
export function hasRole(roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }
=======
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {
<<<<<<< HEAD
      if (config.userRoles.indexOf(req.user.role) >=
          config.userRoles.indexOf(roleRequired)) {
        next();
      } else {
=======
      if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
        next();
      }
      else {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
        res.status(403).send('Forbidden');
      }
    });
}

/**
 * Returns a jwt token signed by the app secret
 */
<<<<<<< HEAD
export function signToken(id, role) {
  return jwt.sign({ _id: id, role: role }, config.secrets.session, {
    expiresIn: 60 * 60 * 5
  });
=======
function signToken(id) {
  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
}

/**
 * Set token cookie directly for oAuth strategies
 */
<<<<<<< HEAD
export function setTokenCookie(req, res) {
  if (!req.user) {
    return res.status(404).send('It looks like you aren\'t logged in, please try again.');
  }
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', token);
  res.redirect('/');
}
=======
function setTokenCookie(req, res) {
  if (!req.user) return res.status(404).json({ message: 'Something went wrong, please try again.'});
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', JSON.stringify(token));
  res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
