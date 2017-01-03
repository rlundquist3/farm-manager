var require = meteorInstall({"imports":{"api":{"areaData.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/areaData.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({AreaData:function(){return AreaData},AggregateData:function(){return AggregateData}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
var AreaData = new Mongo.Collection('area_data');                                                          // 5
var AggregateData = new Mongo.Collection('aggregate_data');                                                // 6
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 8
  Meteor.publish('areaData', function areaDataPublication() {                                              // 9
    return AreaData.find();                                                                                // 10
  });                                                                                                      // 11
  Meteor.publish('aggregateData', function aggregateDataPublication() {                                    // 12
    return AggregateData.find();                                                                           // 13
  });                                                                                                      // 14
}                                                                                                          // 15
                                                                                                           //
Meteor.methods({                                                                                           // 17
  'areaData.insert': function areaDataInsert(data) {                                                       // 18
    check(data, Object);                                                                                   // 19
                                                                                                           //
    if (!this.userId) {                                                                                    // 21
      throw new Meteor.Error('not-authorized');                                                            // 22
    }                                                                                                      // 23
                                                                                                           //
    var date = new Date();                                                                                 // 25
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());                             // 26
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());                          // 27
    tomorrow.setDate(tomorrow.getDate() + 1);                                                              // 28
                                                                                                           //
    var oldData = AreaData.findOne({                                                                       // 30
      createdAt: {                                                                                         // 31
        $gte: today,                                                                                       // 32
        $lt: tomorrow                                                                                      // 33
      },                                                                                                   // 31
      area: data.area                                                                                      // 35
    });                                                                                                    // 30
                                                                                                           //
    if (oldData) {                                                                                         // 38
      var newData = {                                                                                      // 39
        water: Number(oldData.water) + Number(data.water),                                                 // 40
        energy: Number(oldData.energy) + Number(data.energy),                                              // 41
        feed: Number(oldData.feed) + Number(data.feed),                                                    // 42
        insects: Number(oldData.insects) + Number(data.insects),                                           // 43
        eggs: Number(oldData.eggs) + Number(data.eggs),                                                    // 44
        harvested: Number(oldData.harvested) + Number(data.harvested),                                     // 45
        moveOn: Number(oldData.moveOn) + Number(data.moveOn),                                              // 46
        frass: Number(oldData.frass) + Number(data.frass),                                                 // 47
        dead: Number(oldData.dead) + Number(data.dead)                                                     // 48
      };                                                                                                   // 39
                                                                                                           //
      AreaData.update(oldData._id, {                                                                       // 51
        $set: {                                                                                            // 52
          water: newData.water,                                                                            // 53
          energy: newData.energy,                                                                          // 54
          feed: newData.feed,                                                                              // 55
          insects: newData.insects,                                                                        // 56
          eggs: newData.eggs,                                                                              // 57
          harvested: newData.harvested,                                                                    // 58
          moveOn: newData.moveOn,                                                                          // 59
          frass: newData.frass,                                                                            // 60
          dead: newData.dead                                                                               // 61
        }                                                                                                  // 52
      });                                                                                                  // 51
    } else {                                                                                               // 64
      AreaData.insert({                                                                                    // 65
        area: data.area,                                                                                   // 66
        water: Number(data.water),                                                                         // 67
        energy: Number(data.energy),                                                                       // 68
        feed: Number(data.feed),                                                                           // 69
        insects: Number(data.insects),                                                                     // 70
        harvested: Number(data.harvested),                                                                 // 71
        moveOn: Number(data.moveOn),                                                                       // 72
        frass: Number(data.frass),                                                                         // 73
        eggs: Number(data.eggs),                                                                           // 74
        dead: Number(data.dead),                                                                           // 75
        createdAt: new Date(),                                                                             // 76
        owner: this.userId,                                                                                // 77
        username: Meteor.users.findOne(this.userId).username                                               // 78
      });                                                                                                  // 65
    }                                                                                                      // 80
                                                                                                           //
    var oldAggregateData = AggregateData.findOne({                                                         // 82
      createdAt: {                                                                                         // 83
        $gte: today,                                                                                       // 84
        $lt: tomorrow                                                                                      // 85
      }                                                                                                    // 83
    });                                                                                                    // 82
                                                                                                           //
    if (oldAggregateData) {                                                                                // 89
      var newData = {                                                                                      // 90
        water: Number(oldAggregateData.water) + Number(data.water),                                        // 91
        energy: Number(oldAggregateData.energy) + Number(data.energy),                                     // 92
        feed: Number(oldAggregateData.feed) + Number(data.feed),                                           // 93
        insects: Number(oldAggregateData.insects) + Number(data.insects),                                  // 94
        eggs: Number(oldAggregateData.eggs) + Number(data.eggs),                                           // 95
        harvested: Number(oldAggregateData.harvested) + Number(data.harvested),                            // 96
        moveOn: Number(oldAggregateData.moveOn) + Number(data.moveOn),                                     // 97
        frass: Number(oldAggregateData.frass) + Number(data.frass),                                        // 98
        dead: Number(oldAggregateData.dead) + Number(data.dead)                                            // 99
      };                                                                                                   // 90
                                                                                                           //
      AggregateData.update(oldAggregateData._id, {                                                         // 102
        $set: {                                                                                            // 103
          water: newData.water,                                                                            // 104
          energy: newData.energy,                                                                          // 105
          feed: newData.feed,                                                                              // 106
          insects: newData.insects,                                                                        // 107
          eggs: newData.eggs,                                                                              // 108
          harvested: newData.harvested,                                                                    // 109
          moveOn: newData.moveOn,                                                                          // 110
          frass: newData.frass,                                                                            // 111
          dead: newData.dead                                                                               // 112
        }                                                                                                  // 103
      });                                                                                                  // 102
    } else {                                                                                               // 115
      AggregateData.insert({                                                                               // 116
        water: Number(data.water),                                                                         // 117
        energy: Number(data.energy),                                                                       // 118
        feed: Number(data.feed),                                                                           // 119
        insects: Number(data.insects),                                                                     // 120
        harvested: Number(data.harvested),                                                                 // 121
        moveOn: Number(data.moveOn),                                                                       // 122
        frass: Number(data.frass),                                                                         // 123
        eggs: Number(data.eggs),                                                                           // 124
        dead: Number(data.dead),                                                                           // 125
        createdAt: new Date(),                                                                             // 126
        owner: this.userId,                                                                                // 127
        username: Meteor.users.findOne(this.userId).username                                               // 128
      });                                                                                                  // 116
    }                                                                                                      // 130
  }                                                                                                        // 131
});                                                                                                        // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"climateData.js":["meteor/mongo","meteor/factory","faker",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/climateData.js                                                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
// import { Mongo } from 'meteor/mongo';                                                                   //
// import { Factory } from 'meteor/factory';                                                               //
// import faker from 'faker';                                                                              //
                                                                                                           //
var Mongo = require('meteor/mongo');                                                                       // 5
var Factory = require('meteor/factory');                                                                   // 6
var faker = require('faker');                                                                              // 7
                                                                                                           //
// export const ClimateData = new Mongo.Collection('climate_data');                                        //
Object.defineProperty(exports, "__esModule", {                                                             // 10
  value: true                                                                                              // 11
});                                                                                                        // 10
var ClimateData = exports.ClimateData = new Mongo.Collection('climate_data');                              // 13
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 15
  Meteor.publish('climateData', function climateDataPublication() {                                        // 16
    return ClimateData.find();                                                                             // 17
  });                                                                                                      // 18
}                                                                                                          // 19
                                                                                                           //
Factory.define('climateData', ClimateData, {                                                               // 21
  temp: function temp() {                                                                                  // 22
    return faker.random.number();                                                                          // 22
  },                                                                                                       // 22
  humidity: function humidity() {                                                                          // 23
    return faker.random.number();                                                                          // 23
  },                                                                                                       // 23
  createdAt: function createdAt() {                                                                        // 24
    return new Date();                                                                                     // 24
  }                                                                                                        // 24
});                                                                                                        // 21
                                                                                                           //
// Meteor.methods({                                                                                        //
//   'climateData.insert'(temp, humidity) {                                                                //
//                                                                                                         //
//     if(! this.userId) {                                                                                 //
//       throw new Meteor.Error('not-authorized');                                                         //
//     }                                                                                                   //
//                                                                                                         //
//     ClimateData.insert({                                                                                //
//       temp: temp,                                                                                       //
//       humidity: humidity,                                                                               //
//       createdAt: new Date(),                                                                            //
//       username: Meteor.users.findOne(this.userId).username,                                             //
//     });                                                                                                 //
//   }                                                                                                     //
// });                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"rest.js":["../imports/api/climateData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// api/rest.js                                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var ClimateData;module.import('../imports/api/climateData.js',{"ClimateData":function(v){ClimateData=v}});
                                                                                                           //
if (Meteor.isServer) {                                                                                     // 3
  var Api = new Restivus({                                                                                 // 4
    useDefaultAuth: true,                                                                                  // 5
    prettyJson: true                                                                                       // 6
                                                                                                           //
  });                                                                                                      // 4
                                                                                                           //
  Api.addCollection(ClimateData, {                                                                         // 10
    authRequired: false,                                                                                   // 11
    excludedEndpoints: ['deleteAll', 'delete'],                                                            // 12
    endpoints: {                                                                                           // 13
      post: {                                                                                              // 14
        authRequired: true,                                                                                // 15
        action: function action() {                                                                        // 16
          var data = ClimateData.insert({                                                                  // 17
            temp: this.bodyParams.temp,                                                                    // 18
            humidity: this.bodyParams.humidity,                                                            // 19
            area: this.bodyParams.area,                                                                    // 20
            createdAt: new Date(),                                                                         // 21
            username: this.user.username                                                                   // 22
          });                                                                                              // 17
          return true;                                                                                     // 24
        }                                                                                                  // 25
      }                                                                                                    // 14
    }                                                                                                      // 13
  });                                                                                                      // 10
                                                                                                           //
  Api.addCollection(Meteor.users, {                                                                        // 30
    excludedEndpoints: ['getAll', 'put'],                                                                  // 31
    routeOptions: {                                                                                        // 32
      authRequired: true                                                                                   // 33
    },                                                                                                     // 32
    endpoints: {                                                                                           // 35
      post: {                                                                                              // 36
        authRequired: false                                                                                // 37
      },                                                                                                   // 36
      'delete': {                                                                                          // 39
        roleRequired: 'admin'                                                                              // 40
      }                                                                                                    // 39
    }                                                                                                      // 35
  });                                                                                                      // 30
}                                                                                                          // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"server":{"main.js":["meteor/meteor","../imports/api/climateData.js","../imports/api/areaData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// server/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/climateData.js');module.import('../imports/api/areaData.js');
                                                                                                           // 2
                                                                                                           // 3
                                                                                                           //
Meteor.startup(function () {                                                                               // 5
  // code to run on server at startup                                                                      //
});                                                                                                        // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./api/rest.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
