'use strict';

describe('arduinoDashBoardApplication.version module', function() {
  beforeEach(module('arduinoDashBoardApplication.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
