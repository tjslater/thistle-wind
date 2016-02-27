'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var clothingCtrlStub = {
  index: 'clothingCtrl.index',
  show: 'clothingCtrl.show',
  create: 'clothingCtrl.create',
  update: 'clothingCtrl.update',
  destroy: 'clothingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var clothingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './clothing.controller': clothingCtrlStub
});

describe('Clothing API Router:', function() {

  it('should return an express router instance', function() {
    clothingIndex.should.equal(routerStub);
  });

  describe('GET /api/clothings', function() {

    it('should route to clothing.controller.index', function() {
      routerStub.get
        .withArgs('/', 'clothingCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/clothings/:id', function() {

    it('should route to clothing.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'clothingCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/clothings', function() {

    it('should route to clothing.controller.create', function() {
      routerStub.post
        .withArgs('/', 'clothingCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/clothings/:id', function() {

    it('should route to clothing.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'clothingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/clothings/:id', function() {

    it('should route to clothing.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'clothingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/clothings/:id', function() {

    it('should route to clothing.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'clothingCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
