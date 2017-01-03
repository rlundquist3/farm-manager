(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var resetDatabase;

var require = meteorInstall({"node_modules":{"meteor":{"xolvio:cleaner":{"cleaner.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/xolvio_cleaner/cleaner.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 1
  (function () {                                                                                                       // 1
    var _resetDatabase = function _resetDatabase(options) {                                                            // 2
      if (process.env.NODE_ENV !== 'development') {                                                                    // 3
        throw new Error('resetDatabase is not allowed outside of a development mode. ' + 'Aborting.');                 // 4
      }                                                                                                                // 8
                                                                                                                       //
      options = options || {};                                                                                         // 10
      var excludedCollections = ['system.indexes'];                                                                    // 11
      if (options.excludedCollections) {                                                                               // 12
        excludedCollections = excludedCollections.concat(options.excludedCollections);                                 // 13
      }                                                                                                                // 14
                                                                                                                       //
      var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;                                                // 16
      var getCollections = Meteor.wrapAsync(db.collections, db);                                                       // 17
      var collections = getCollections();                                                                              // 18
      var appCollections = _.reject(collections, function (col) {                                                      // 19
        return col.collectionName.indexOf('velocity') === 0 || excludedCollections.indexOf(col.collectionName) !== -1;
      });                                                                                                              // 22
                                                                                                                       //
      _.each(appCollections, function (appCollection) {                                                                // 24
        var remove = Meteor.wrapAsync(appCollection.remove, appCollection);                                            // 25
        remove({});                                                                                                    // 26
      });                                                                                                              // 27
    };                                                                                                                 // 28
                                                                                                                       //
    Meteor.methods({                                                                                                   // 30
      'xolvio:cleaner/resetDatabase': function xolvioCleanerResetDatabase(options) {                                   // 31
        _resetDatabase(options);                                                                                       // 32
      }                                                                                                                // 33
    });                                                                                                                // 30
                                                                                                                       //
    resetDatabase = function resetDatabase(options, callback) {                                                        // 36
      _resetDatabase(options);                                                                                         // 37
      if (typeof callback === 'function') {                                                                            // 38
        callback();                                                                                                    // 38
      }                                                                                                                // 38
    };                                                                                                                 // 39
  })();                                                                                                                // 1
}                                                                                                                      // 41
if (Meteor.isClient) {                                                                                                 // 42
  resetDatabase = function resetDatabase(options, callback) {                                                          // 43
    Meteor.call('xolvio:cleaner/resetDatabase', options, callback);                                                    // 44
  };                                                                                                                   // 45
}                                                                                                                      // 46
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/xolvio:cleaner/cleaner.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['xolvio:cleaner'] = {}, {
  resetDatabase: resetDatabase
});

})();

//# sourceMappingURL=xolvio_cleaner.js.map
