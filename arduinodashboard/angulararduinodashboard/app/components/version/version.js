'use strict';

angular.module('arduinoDashBoardApplication.version', [
  'arduinoDashBoardApplication.version.interpolate-filter',
  'arduinoDashBoardApplication.version.version-directive'
])

.value('version', '0.1');
