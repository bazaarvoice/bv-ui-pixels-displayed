/*global describe, it, before, beforeEach */
'use strict';
var assert = require('assert');
var bvUiPixelsDisplayed = require('../');

describe('bv-ui-pixels-displayed node module', function () {
  var pixelsDisplayed;
  var windowMock = {};

  var documentMock = {
    documentElement : {}
  };

  var rect = {};

  var el = {
    getBoundingClientRect : function () {
      return rect;
    }
  };

  before(function () {
    pixelsDisplayed = bvUiPixelsDisplayed(windowMock, documentMock);
  });

  beforeEach(function () {
    rect = {
      height : 200,
      top : 100
    };

    windowMock.innerHeight = 500;
  });

  describe('element is hidden', function () {
    describe('element is smaller than viewport', function () {
      it('should be hidden when element is way above viewport', function () {
        rect.top = -9999;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is right above viewport', function () {
        rect.top = -200;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is way below viewport', function () {
        rect.top = 9999;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is right below viewport', function () {
        rect.top = 500;

        assert.equal(pixelsDisplayed(el), 0);
      });
    });

    describe('element is bigger than viewport', function () {
      beforeEach(function () {
        rect.height = 1000;
      });

      it('should be hidden when element is way above viewport', function () {
        rect.top = -9999;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is right above viewport', function () {
        rect.top = -1000;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is way below viewport', function () {
        rect.top = 9999;

        assert.equal(pixelsDisplayed(el), 0);
      });

      it('should be hidden when element is right below viewport', function () {
        rect.top = 1000;

        assert.equal(pixelsDisplayed(el), 0);
      });
    });
  });

  describe('element is visible', function () {
    describe('element is smaller than viewport', function () {
      it('element should be visible when top position is 0', function () {
        rect.top = 0;

        assert.equal(pixelsDisplayed(el), 200);
      });

      it('element should be visible when top position is greater than 0', function () {
        rect.top = 499;

        assert.equal(pixelsDisplayed(el), 1);
      });

      it('element should be visible when top position is less than 0', function () {
        rect.top = -199;

        assert.equal(pixelsDisplayed(el), 1);
      });
    });

    describe('element is bigger than viewport', function () {
      beforeEach(function () {
        rect.height = 1000;
      });

      it('element should be visible when top position is 0', function () {
        rect.top = 0;

        assert.equal(pixelsDisplayed(el), 500);
      });

      it('element should be visible when top position is greater than 0', function () {
        rect.top = 100;

        assert.equal(pixelsDisplayed(el), 400);
      });

      it('element should be visible when top position is less than 0', function () {
        rect.top = -600;

        assert.equal(pixelsDisplayed(el), 400);
      });
    });
  });

});
