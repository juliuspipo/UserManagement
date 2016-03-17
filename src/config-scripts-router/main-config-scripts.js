(function(){
    'use strict';

    var mainConfigScripts = {};

    mainConfigScripts["user-management"] = require('./user-management.json');
    // mainConfigScripts["cupones"] = require('./cupones.json');

    module.exports = mainConfigScripts;
})();
