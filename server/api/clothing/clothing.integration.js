'use strict';

var app = require('../..');
import request from 'supertest';

var newClothing;

describe('Clothing API:', function() {

  describe('GET /api/clothings', function() {
    var clothings;

    beforeEach(function(done) {
      request(app)
        .get('/api/clothings')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          clothings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      clothings.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/clothings', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/clothings')
        .send({
          name: 'New Clothing',
          info: 'This is the brand new clothing!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newClothing = res.body;
          done();
        });
    });

    it('should respond with the newly created clothing', function() {
      newClothing.name.should.equal('New Clothing');
      newClothing.info.should.equal('This is the brand new clothing!!!');
    });

  });

  describe('GET /api/clothings/:id', function() {
    var clothing;

    beforeEach(function(done) {
      request(app)
        .get('/api/clothings/' + newClothing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          clothing = res.body;
          done();
        });
    });

    afterEach(function() {
      clothing = {};
    });

    it('should respond with the requested clothing', function() {
      clothing.name.should.equal('New Clothing');
      clothing.info.should.equal('This is the brand new clothing!!!');
    });

  });

  describe('PUT /api/clothings/:id', function() {
    var updatedClothing;

    beforeEach(function(done) {
      request(app)
        .put('/api/clothings/' + newClothing._id)
        .send({
          name: 'Updated Clothing',
          info: 'This is the updated clothing!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedClothing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedClothing = {};
    });

    it('should respond with the updated clothing', function() {
      updatedClothing.name.should.equal('Updated Clothing');
      updatedClothing.info.should.equal('This is the updated clothing!!!');
    });

  });

  describe('DELETE /api/clothings/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/clothings/' + newClothing._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when clothing does not exist', function(done) {
      request(app)
        .delete('/api/clothings/' + newClothing._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
