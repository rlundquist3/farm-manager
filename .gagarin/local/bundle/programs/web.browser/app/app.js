var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/template.main.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.body.addContent((function() {                                                                                 // 2
  var view = this;                                                                                                     // 3
  return HTML.Raw('<!-- <canvas id="canvas" resize="true" width="1000" height="1000"></canvas> -->\n  <!-- {{> chart}} -->\n  <div id="render-target"></div>');
}));                                                                                                                   // 5
Meteor.startup(Template.body.renderToDocument);                                                                        // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"js":{"charts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/charts.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// if (Meteor.isClient) {                                                                                              //
//   Template.chart.onRendered(function() {                                                                            //
//     var chart1 = document.getElementById('chart1');                                                                 //
//                                                                                                                     //
//     var chart = new Chart(chart1, {                                                                                 //
//       type: 'bar',                                                                                                  //
//       data: {                                                                                                       //
//         labels: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],                                             //
//         datasets: [{                                                                                                //
//           label: 'votes',                                                                                           //
//           data: [12, 19, 3, 5, 2, 3],                                                                               //
//           backgroundColor: [                                                                                        //
//             'rgba(255, 99, 132, 0.2)',                                                                              //
//             'rgba(54, 162, 235, 0.2)',                                                                              //
//             'rgba(255, 206, 86, 0.2)',                                                                              //
//             'rgba(75, 192, 192, 0.2)',                                                                              //
//             'rgba(153, 102, 255, 0.2)',                                                                             //
//             'rgba(255, 159, 64, 0.2)'                                                                               //
//           ],                                                                                                        //
//           borderColor: [                                                                                            //
//             'rgba(255,99,132,1)',                                                                                   //
//             'rgba(54, 162, 235, 1)',                                                                                //
//             'rgba(255, 206, 86, 1)',                                                                                //
//             'rgba(75, 192, 192, 1)',                                                                                //
//             'rgba(153, 102, 255, 1)',                                                                               //
//             'rgba(255, 159, 64, 1)'                                                                                 //
//           ],                                                                                                        //
//           borderWidth: 1                                                                                            //
//         }]                                                                                                          //
//       },                                                                                                            //
//       options: {                                                                                                    //
//         scales: {                                                                                                   //
//           yAxes: [{                                                                                                 //
//             ticks: {                                                                                                //
//               beginAtZero:true                                                                                      //
//             }                                                                                                       //
//           }]                                                                                                        //
//         }                                                                                                           //
//       }                                                                                                             //
//     });                                                                                                             //
//   });                                                                                                               //
// }                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"floorplan.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/js/floorplan.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// rooms.incubation.onClick = function(event) {                                                                        //
//   this.fillColor = 'red';                                                                                           //
// }                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.jsx":["react","meteor/meteor","react-dom","../imports/startup/accounts-config.js","../imports/ui/App.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.jsx                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});module.import('../imports/startup/accounts-config.js');var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       //
                                                                                                                       // 5
                                                                                                                       // 6
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 8
  render(React.createElement(App, null), document.getElementById('render-target'));                                    // 9
});                                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"areaData.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/areaData.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({AreaData:function(){return AreaData},AggregateData:function(){return AggregateData}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       //
var AreaData = new Mongo.Collection('area_data');                                                                      // 5
var AggregateData = new Mongo.Collection('aggregate_data');                                                            // 6
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 8
  Meteor.publish('areaData', function () {                                                                             // 9
    function areaDataPublication() {                                                                                   // 9
      return AreaData.find();                                                                                          // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return areaDataPublication;                                                                                        // 9
  }());                                                                                                                // 9
  Meteor.publish('aggregateData', function () {                                                                        // 12
    function aggregateDataPublication() {                                                                              // 12
      return AggregateData.find();                                                                                     // 13
    }                                                                                                                  // 14
                                                                                                                       //
    return aggregateDataPublication;                                                                                   // 12
  }());                                                                                                                // 12
}                                                                                                                      // 15
                                                                                                                       //
Meteor.methods({                                                                                                       // 17
  'areaData.insert': function () {                                                                                     // 18
    function areaDataInsert(data) {                                                                                    // 17
      check(data, Object);                                                                                             // 19
                                                                                                                       //
      if (!this.userId) {                                                                                              // 21
        throw new Meteor.Error('not-authorized');                                                                      // 22
      }                                                                                                                // 23
                                                                                                                       //
      var date = new Date();                                                                                           // 25
      var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());                                       // 26
      var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());                                    // 27
      tomorrow.setDate(tomorrow.getDate() + 1);                                                                        // 28
                                                                                                                       //
      var oldData = AreaData.findOne({                                                                                 // 30
        createdAt: {                                                                                                   // 31
          $gte: today,                                                                                                 // 32
          $lt: tomorrow                                                                                                // 33
        },                                                                                                             // 31
        area: data.area                                                                                                // 35
      });                                                                                                              // 30
                                                                                                                       //
      if (oldData) {                                                                                                   // 38
        var newData = {                                                                                                // 39
          water: Number(oldData.water) + Number(data.water),                                                           // 40
          energy: Number(oldData.energy) + Number(data.energy),                                                        // 41
          feed: Number(oldData.feed) + Number(data.feed),                                                              // 42
          insects: Number(oldData.insects) + Number(data.insects),                                                     // 43
          eggs: Number(oldData.eggs) + Number(data.eggs),                                                              // 44
          harvested: Number(oldData.harvested) + Number(data.harvested),                                               // 45
          moveOn: Number(oldData.moveOn) + Number(data.moveOn),                                                        // 46
          frass: Number(oldData.frass) + Number(data.frass),                                                           // 47
          dead: Number(oldData.dead) + Number(data.dead)                                                               // 48
        };                                                                                                             // 39
                                                                                                                       //
        AreaData.update(oldData._id, {                                                                                 // 51
          $set: {                                                                                                      // 52
            water: newData.water,                                                                                      // 53
            energy: newData.energy,                                                                                    // 54
            feed: newData.feed,                                                                                        // 55
            insects: newData.insects,                                                                                  // 56
            eggs: newData.eggs,                                                                                        // 57
            harvested: newData.harvested,                                                                              // 58
            moveOn: newData.moveOn,                                                                                    // 59
            frass: newData.frass,                                                                                      // 60
            dead: newData.dead                                                                                         // 61
          }                                                                                                            // 52
        });                                                                                                            // 51
      } else {                                                                                                         // 64
        AreaData.insert({                                                                                              // 65
          area: data.area,                                                                                             // 66
          water: Number(data.water),                                                                                   // 67
          energy: Number(data.energy),                                                                                 // 68
          feed: Number(data.feed),                                                                                     // 69
          insects: Number(data.insects),                                                                               // 70
          harvested: Number(data.harvested),                                                                           // 71
          moveOn: Number(data.moveOn),                                                                                 // 72
          frass: Number(data.frass),                                                                                   // 73
          eggs: Number(data.eggs),                                                                                     // 74
          dead: Number(data.dead),                                                                                     // 75
          createdAt: new Date(),                                                                                       // 76
          owner: this.userId,                                                                                          // 77
          username: Meteor.users.findOne(this.userId).username                                                         // 78
        });                                                                                                            // 65
      }                                                                                                                // 80
                                                                                                                       //
      var oldAggregateData = AggregateData.findOne({                                                                   // 82
        createdAt: {                                                                                                   // 83
          $gte: today,                                                                                                 // 84
          $lt: tomorrow                                                                                                // 85
        }                                                                                                              // 83
      });                                                                                                              // 82
                                                                                                                       //
      if (oldAggregateData) {                                                                                          // 89
        var newData = {                                                                                                // 90
          water: Number(oldAggregateData.water) + Number(data.water),                                                  // 91
          energy: Number(oldAggregateData.energy) + Number(data.energy),                                               // 92
          feed: Number(oldAggregateData.feed) + Number(data.feed),                                                     // 93
          insects: Number(oldAggregateData.insects) + Number(data.insects),                                            // 94
          eggs: Number(oldAggregateData.eggs) + Number(data.eggs),                                                     // 95
          harvested: Number(oldAggregateData.harvested) + Number(data.harvested),                                      // 96
          moveOn: Number(oldAggregateData.moveOn) + Number(data.moveOn),                                               // 97
          frass: Number(oldAggregateData.frass) + Number(data.frass),                                                  // 98
          dead: Number(oldAggregateData.dead) + Number(data.dead)                                                      // 99
        };                                                                                                             // 90
                                                                                                                       //
        AggregateData.update(oldAggregateData._id, {                                                                   // 102
          $set: {                                                                                                      // 103
            water: newData.water,                                                                                      // 104
            energy: newData.energy,                                                                                    // 105
            feed: newData.feed,                                                                                        // 106
            insects: newData.insects,                                                                                  // 107
            eggs: newData.eggs,                                                                                        // 108
            harvested: newData.harvested,                                                                              // 109
            moveOn: newData.moveOn,                                                                                    // 110
            frass: newData.frass,                                                                                      // 111
            dead: newData.dead                                                                                         // 112
          }                                                                                                            // 103
        });                                                                                                            // 102
      } else {                                                                                                         // 115
        AggregateData.insert({                                                                                         // 116
          water: Number(data.water),                                                                                   // 117
          energy: Number(data.energy),                                                                                 // 118
          feed: Number(data.feed),                                                                                     // 119
          insects: Number(data.insects),                                                                               // 120
          harvested: Number(data.harvested),                                                                           // 121
          moveOn: Number(data.moveOn),                                                                                 // 122
          frass: Number(data.frass),                                                                                   // 123
          eggs: Number(data.eggs),                                                                                     // 124
          dead: Number(data.dead),                                                                                     // 125
          createdAt: new Date(),                                                                                       // 126
          owner: this.userId,                                                                                          // 127
          username: Meteor.users.findOne(this.userId).username                                                         // 128
        });                                                                                                            // 116
      }                                                                                                                // 130
    }                                                                                                                  // 131
                                                                                                                       //
    return areaDataInsert;                                                                                             // 17
  }()                                                                                                                  // 17
});                                                                                                                    // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"climateData.js":["meteor/mongo","meteor/factory","faker",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/climateData.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// import { Mongo } from 'meteor/mongo';                                                                               //
// import { Factory } from 'meteor/factory';                                                                           //
// import faker from 'faker';                                                                                          //
                                                                                                                       //
var Mongo = require('meteor/mongo');                                                                                   // 5
var Factory = require('meteor/factory');                                                                               // 6
var faker = require('faker');                                                                                          // 7
                                                                                                                       //
// export const ClimateData = new Mongo.Collection('climate_data');                                                    //
Object.defineProperty(exports, "__esModule", {                                                                         // 10
  value: true                                                                                                          // 11
});                                                                                                                    // 10
var ClimateData = exports.ClimateData = new Mongo.Collection('climate_data');                                          // 13
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 15
  Meteor.publish('climateData', function () {                                                                          // 16
    function climateDataPublication() {                                                                                // 16
      return ClimateData.find();                                                                                       // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return climateDataPublication;                                                                                     // 16
  }());                                                                                                                // 16
}                                                                                                                      // 19
                                                                                                                       //
Factory.define('climateData', ClimateData, {                                                                           // 21
  temp: function () {                                                                                                  // 22
    function temp() {                                                                                                  // 22
      return faker.random.number();                                                                                    // 22
    }                                                                                                                  // 22
                                                                                                                       //
    return temp;                                                                                                       // 22
  }(),                                                                                                                 // 22
  humidity: function () {                                                                                              // 23
    function humidity() {                                                                                              // 23
      return faker.random.number();                                                                                    // 23
    }                                                                                                                  // 23
                                                                                                                       //
    return humidity;                                                                                                   // 23
  }(),                                                                                                                 // 23
  createdAt: function () {                                                                                             // 24
    function createdAt() {                                                                                             // 24
      return new Date();                                                                                               // 24
    }                                                                                                                  // 24
                                                                                                                       //
    return createdAt;                                                                                                  // 24
  }()                                                                                                                  // 24
});                                                                                                                    // 21
                                                                                                                       //
// Meteor.methods({                                                                                                    //
//   'climateData.insert'(temp, humidity) {                                                                            //
//                                                                                                                     //
//     if(! this.userId) {                                                                                             //
//       throw new Meteor.Error('not-authorized');                                                                     //
//     }                                                                                                               //
//                                                                                                                     //
//     ClimateData.insert({                                                                                            //
//       temp: temp,                                                                                                   //
//       humidity: humidity,                                                                                           //
//       createdAt: new Date(),                                                                                        //
//       username: Meteor.users.findOne(this.userId).username,                                                         //
//     });                                                                                                             //
//   }                                                                                                                 //
// });                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/accounts-config.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                               // 1
                                                                                                                       //
Accounts.ui.config({                                                                                                   // 3
  passwordSignupFields: 'USERNAME_ONLY'                                                                                // 4
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AccountsUIWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/templating","meteor/blaze",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/AccountsUIWrapper.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Blaze;module.import('meteor/blaze',{"Blaze":function(v){Blaze=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       //
var AccountsUIWrapper = function (_Component) {                                                                        //
  _inherits(AccountsUIWrapper, _Component);                                                                            //
                                                                                                                       //
  function AccountsUIWrapper() {                                                                                       //
    _classCallCheck(this, AccountsUIWrapper);                                                                          //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  AccountsUIWrapper.prototype.componentDidMount = function () {                                                        //
    function componentDidMount() {                                                                                     //
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));                      // 8
    }                                                                                                                  // 10
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsUIWrapper.prototype.componentWillUnmount = function () {                                                     //
    function componentWillUnmount() {                                                                                  //
      Blaze.remove(this.view);                                                                                         // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return componentWillUnmount;                                                                                       //
  }();                                                                                                                 //
                                                                                                                       //
  AccountsUIWrapper.prototype.render = function () {                                                                   //
    function render() {                                                                                                //
      return React.createElement('span', { ref: 'container' });                                                        // 15
    }                                                                                                                  // 16
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return AccountsUIWrapper;                                                                                            //
}(Component);                                                                                                          //
                                                                                                                       //
module.export("default",exports.default=(AccountsUIWrapper));                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","../api/climateData.js","../api/areaData.js","./Floorplan.jsx","./ClimateChart.jsx","./YieldChart.jsx","./InputChart.jsx","./DataInput.jsx","./AccountsUIWrapper.jsx","./Header.jsx","./Charts.jsx","react-bootstrap",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/App.jsx                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var ClimateData;module.import('../api/climateData.js',{"ClimateData":function(v){ClimateData=v}});var AreaData,AggregateData;module.import('../api/areaData.js',{"AreaData":function(v){AreaData=v},"AggregateData":function(v){AggregateData=v}});var Floorplan;module.import('./Floorplan.jsx',{"default":function(v){Floorplan=v}});var ClimateChart;module.import('./ClimateChart.jsx',{"default":function(v){ClimateChart=v}});var YieldChart;module.import('./YieldChart.jsx',{"default":function(v){YieldChart=v}});var InputChart;module.import('./InputChart.jsx',{"default":function(v){InputChart=v}});var DataInput;module.import('./DataInput.jsx',{"default":function(v){DataInput=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});var Header;module.import('./Header.jsx',{"default":function(v){Header=v}});var Charts;module.import('./Charts.jsx',{"default":function(v){Charts=v}});var Grid,Row,Col,Button,ButtonToolbar;module.import('react-bootstrap',{"Grid":function(v){Grid=v},"Row":function(v){Row=v},"Col":function(v){Col=v},"Button":function(v){Button=v},"ButtonToolbar":function(v){ButtonToolbar=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       // 5
                                                                                                                       // 6
                                                                                                                       // 7
                                                                                                                       // 8
                                                                                                                       // 9
                                                                                                                       // 10
                                                                                                                       // 11
                                                                                                                       // 12
                                                                                                                       // 13
                                                                                                                       //
var App = function (_Component) {                                                                                      //
  _inherits(App, _Component);                                                                                          //
                                                                                                                       //
  function App() {                                                                                                     //
    _classCallCheck(this, App);                                                                                        //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  App.prototype.changeTimeShown = function () {                                                                        //
    function changeTimeShown(days) {                                                                                   //
      this.setState({ timeShown: days });                                                                              // 18
    }                                                                                                                  // 19
                                                                                                                       //
    return changeTimeShown;                                                                                            //
  }();                                                                                                                 //
                                                                                                                       //
  App.prototype.render = function () {                                                                                 //
    function render() {                                                                                                //
      return React.createElement(                                                                                      // 22
        'div',                                                                                                         // 23
        { className: 'container' },                                                                                    // 23
        React.createElement(Header, null),                                                                             // 24
        React.createElement(                                                                                           // 26
          Grid,                                                                                                        // 26
          null,                                                                                                        // 26
          React.createElement(                                                                                         // 27
            Row,                                                                                                       // 27
            { className: 'show-grid' },                                                                                // 27
            React.createElement(                                                                                       // 28
              Col,                                                                                                     // 28
              { md: 6, mdPush: 3 },                                                                                    // 28
              React.createElement(Floorplan, null)                                                                     // 29
            )                                                                                                          // 28
          ),                                                                                                           // 27
          React.createElement(                                                                                         // 33
            Row,                                                                                                       // 33
            { className: 'show-grid' },                                                                                // 33
            React.createElement(Col, { md: 6, mdPush: 3 })                                                             // 34
          ),                                                                                                           // 33
          React.createElement(                                                                                         // 39
            Row,                                                                                                       // 39
            { className: 'show-grid' },                                                                                // 39
            React.createElement(                                                                                       // 40
              Col,                                                                                                     // 40
              { md: 6, mdPush: 3 },                                                                                    // 40
              React.createElement(                                                                                     // 41
                ButtonToolbar,                                                                                         // 41
                null,                                                                                                  // 41
                React.createElement(                                                                                   // 42
                  Button,                                                                                              // 42
                  { onClick: this.changeTimeShown(7), active: this.props.timeShown === 7 },                            // 42
                  'Week'                                                                                               // 42
                ),                                                                                                     // 42
                React.createElement(                                                                                   // 43
                  Button,                                                                                              // 43
                  { onClick: this.changeTimeShown(14), active: this.props.timeShown === 14 },                          // 43
                  '2 Weeks'                                                                                            // 43
                ),                                                                                                     // 43
                React.createElement(                                                                                   // 44
                  Button,                                                                                              // 44
                  { onClick: this.changeTimeShown(30), active: this.props.timeShown === 30 },                          // 44
                  'Month'                                                                                              // 44
                ),                                                                                                     // 44
                React.createElement(                                                                                   // 45
                  Button,                                                                                              // 45
                  { onClick: this.changeTimeShown(90), active: this.props.timeShown === 90 },                          // 45
                  '3 Months'                                                                                           // 45
                ),                                                                                                     // 45
                React.createElement(                                                                                   // 46
                  Button,                                                                                              // 46
                  { onClick: this.changeTimeShown(180), active: this.props.timeShown === 180 },                        // 46
                  '6 Months'                                                                                           // 46
                ),                                                                                                     // 46
                React.createElement(                                                                                   // 47
                  Button,                                                                                              // 47
                  { onClick: this.changeTimeShown(365), active: this.props.timeShown === 365 },                        // 47
                  'Year'                                                                                               // 47
                )                                                                                                      // 47
              )                                                                                                        // 41
            )                                                                                                          // 40
          ),                                                                                                           // 39
          React.createElement(                                                                                         // 52
            Row,                                                                                                       // 52
            { className: 'show-grid' },                                                                                // 52
            React.createElement(Col, { md: 6, mdPush: 3 })                                                             // 53
          ),                                                                                                           // 52
          React.createElement(Charts, { timeShown: this.props.timeShown })                                             // 58
        )                                                                                                              // 26
      );                                                                                                               // 23
    }                                                                                                                  // 63
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return App;                                                                                                          //
}(Component);                                                                                                          //
                                                                                                                       //
App.propTypes = {                                                                                                      // 66
  climateData: PropTypes.array.isRequired,                                                                             // 67
  areaNames: PropTypes.object.isRequired,                                                                              // 68
  timeShown: PropTypes.number,                                                                                         // 69
  currentUser: PropTypes.object                                                                                        // 70
};                                                                                                                     // 66
                                                                                                                       //
module.export("default",exports.default=(createContainer(function () {                                                 // 73
  Meteor.subscribe('climateData');                                                                                     // 74
  Meteor.subscribe('areaData');                                                                                        // 75
  Meteor.subscribe('aggregateData');                                                                                   // 76
                                                                                                                       //
  return {                                                                                                             // 78
    climateData: ClimateData.find({}, { sort: { createdAt: -1 } }).fetch(),                                            // 79
    areaNames: {                                                                                                       // 80
      incubation: 'Incubation Area',                                                                                   // 81
      growout1: 'Growout Area 1',                                                                                      // 82
      growout2: 'Growout Area 2',                                                                                      // 83
      breeding: 'Breeding Area'                                                                                        // 84
    },                                                                                                                 // 80
    timeShown: 7,                                                                                                      // 86
    currentUser: Meteor.user()                                                                                         // 87
  };                                                                                                                   // 78
}, App)));                                                                                                             // 89
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Charts.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","../api/climateData.js","../api/areaData.js","./ClimateChart.jsx","./YieldChart.jsx","./InputChart.jsx","./DataInput.jsx","react-bootstrap",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Charts.jsx                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var ClimateData;module.import('../api/climateData.js',{"ClimateData":function(v){ClimateData=v}});var AreaData,AggregateData;module.import('../api/areaData.js',{"AreaData":function(v){AreaData=v},"AggregateData":function(v){AggregateData=v}});var ClimateChart;module.import('./ClimateChart.jsx',{"default":function(v){ClimateChart=v}});var YieldChart;module.import('./YieldChart.jsx',{"default":function(v){YieldChart=v}});var InputChart;module.import('./InputChart.jsx',{"default":function(v){InputChart=v}});var DataInput;module.import('./DataInput.jsx',{"default":function(v){DataInput=v}});var Grid,Row,Col,Button,Carousel,Tabs,Tab;module.import('react-bootstrap',{"Grid":function(v){Grid=v},"Row":function(v){Row=v},"Col":function(v){Col=v},"Button":function(v){Button=v},"Carousel":function(v){Carousel=v},"Tabs":function(v){Tabs=v},"Tab":function(v){Tab=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       // 5
                                                                                                                       // 6
                                                                                                                       // 7
                                                                                                                       // 8
                                                                                                                       // 9
                                                                                                                       //
var Charts = function (_Component) {                                                                                   //
  _inherits(Charts, _Component);                                                                                       //
                                                                                                                       //
  function Charts() {                                                                                                  //
    _classCallCheck(this, Charts);                                                                                     //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  Charts.prototype.renderClimateChart = function () {                                                                  //
    function renderClimateChart(area) {                                                                                //
      var data = ClimateData.find({ area: area }, { sort: { createdAt: -1 } }).fetch();                                // 13
                                                                                                                       //
      return React.createElement(ClimateChart, { climateData: data, title: this.props.areaNames[area] + ' Climate' });
    }                                                                                                                  // 18
                                                                                                                       //
    return renderClimateChart;                                                                                         //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.renderYieldChart = function () {                                                                    //
    function renderYieldChart(area) {                                                                                  //
      var data = AreaData.find({ area: area }, { sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();      // 21
                                                                                                                       //
      return React.createElement(YieldChart, { data: data, title: this.props.areaNames[area] + ' Yields' });           // 23
    }                                                                                                                  // 26
                                                                                                                       //
    return renderYieldChart;                                                                                           //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.renderInputChart = function () {                                                                    //
    function renderInputChart(area) {                                                                                  //
      var data = AreaData.find({ area: area }, { sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();      // 29
                                                                                                                       //
      return React.createElement(InputChart, { data: data, title: this.props.areaNames[area] + ' Inputs' });           // 31
    }                                                                                                                  // 34
                                                                                                                       //
    return renderInputChart;                                                                                           //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.renderInsectAggregateChart = function () {                                                          //
    function renderInsectAggregateChart() {                                                                            //
      var data = AggregateData.find({}, { sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();             // 37
                                                                                                                       //
      return React.createElement(YieldChart, { data: data, title: 'Total Yields' });                                   // 39
    }                                                                                                                  // 42
                                                                                                                       //
    return renderInsectAggregateChart;                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.renderInputAggregateChart = function () {                                                           //
    function renderInputAggregateChart() {                                                                             //
      var data = AggregateData.find({}, { sort: { createdAt: -1 }, limit: this.props.timeShown }).fetch();             // 45
                                                                                                                       //
      return React.createElement(InputChart, { data: data, title: 'Total Inputs' });                                   // 47
    }                                                                                                                  // 50
                                                                                                                       //
    return renderInputAggregateChart;                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.handleSelect = function () {                                                                        //
    function handleSelect(key) {                                                                                       //
      this.setState({ key: key });                                                                                     // 53
    }                                                                                                                  // 54
                                                                                                                       //
    return handleSelect;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  Charts.prototype.render = function () {                                                                              //
    function render() {                                                                                                //
      var _this2 = this;                                                                                               // 56
                                                                                                                       //
      return React.createElement(                                                                                      // 57
        'div',                                                                                                         // 58
        null,                                                                                                          // 58
        React.createElement(                                                                                           // 59
          Row,                                                                                                         // 59
          { className: 'show-grid' },                                                                                  // 59
          React.createElement(                                                                                         // 60
            Col,                                                                                                       // 60
            { md: 8, mdPush: 2 },                                                                                      // 60
            React.createElement(                                                                                       // 61
              'h3',                                                                                                    // 61
              null,                                                                                                    // 61
              'Aggregate Data'                                                                                         // 61
            ),                                                                                                         // 61
            React.createElement(                                                                                       // 62
              Tabs,                                                                                                    // 62
              null,                                                                                                    // 62
              React.createElement(                                                                                     // 63
                Tab,                                                                                                   // 63
                { eventKey: 'total yields', title: 'Yields' },                                                         // 63
                this.renderInsectAggregateChart()                                                                      // 63
              ),                                                                                                       // 63
              React.createElement(                                                                                     // 64
                Tab,                                                                                                   // 64
                { eventKey: 'total inputs', title: 'Inputs' },                                                         // 64
                this.renderInputAggregateChart()                                                                       // 64
              )                                                                                                        // 64
            )                                                                                                          // 62
          )                                                                                                            // 60
        ),                                                                                                             // 59
        React.createElement(                                                                                           // 68
          Row,                                                                                                         // 68
          { className: 'show-grid' },                                                                                  // 68
          Object.keys(this.props.areaNames).map(function (area) {                                                      // 69
            return React.createElement(                                                                                // 70
              Col,                                                                                                     // 71
              { md: 5, mdPush: 1 },                                                                                    // 71
              React.createElement(                                                                                     // 72
                Row,                                                                                                   // 72
                null,                                                                                                  // 72
                React.createElement(                                                                                   // 73
                  Col,                                                                                                 // 73
                  { md: 5 },                                                                                           // 73
                  React.createElement(                                                                                 // 74
                    'h3',                                                                                              // 74
                    null,                                                                                              // 74
                    _this2.props.areaNames[area]                                                                       // 74
                  )                                                                                                    // 74
                )                                                                                                      // 73
              ),                                                                                                       // 72
              React.createElement(                                                                                     // 77
                Row,                                                                                                   // 77
                null,                                                                                                  // 77
                React.createElement(                                                                                   // 78
                  Col,                                                                                                 // 78
                  { md: 3, mdPush: 9 },                                                                                // 78
                  React.createElement(DataInput, { pullRight: 'true', area: area })                                    // 79
                )                                                                                                      // 78
              ),                                                                                                       // 77
              React.createElement(                                                                                     // 82
                Tabs,                                                                                                  // 82
                null,                                                                                                  // 82
                React.createElement(                                                                                   // 83
                  Tab,                                                                                                 // 83
                  { eventKey: area + 'yields', title: 'Yields' },                                                      // 83
                  _this2.renderYieldChart(area)                                                                        // 83
                ),                                                                                                     // 83
                React.createElement(                                                                                   // 84
                  Tab,                                                                                                 // 84
                  { eventKey: area + 'inputs', title: 'Inputs' },                                                      // 84
                  _this2.renderInputChart(area)                                                                        // 84
                ),                                                                                                     // 84
                React.createElement(                                                                                   // 85
                  Tab,                                                                                                 // 85
                  { eventKey: area + 'climate', title: 'Climate' },                                                    // 85
                  _this2.renderClimateChart(area)                                                                      // 85
                )                                                                                                      // 85
              )                                                                                                        // 82
            );                                                                                                         // 71
          })                                                                                                           // 89
        )                                                                                                              // 68
      );                                                                                                               // 58
    }                                                                                                                  // 93
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Charts;                                                                                                       //
}(Component);                                                                                                          //
                                                                                                                       //
Charts.propTypes = {                                                                                                   // 96
  climateData: PropTypes.array.isRequired,                                                                             // 97
  areaNames: PropTypes.object.isRequired,                                                                              // 98
  timeShown: PropTypes.number,                                                                                         // 99
  currentUser: PropTypes.object                                                                                        // 100
};                                                                                                                     // 96
                                                                                                                       //
module.export("default",exports.default=(createContainer(function () {                                                 // 103
  Meteor.subscribe('climateData');                                                                                     // 104
  Meteor.subscribe('areaData');                                                                                        // 105
  Meteor.subscribe('aggregateData');                                                                                   // 106
                                                                                                                       //
  return {                                                                                                             // 108
    climateData: ClimateData.find({}, { sort: { createdAt: -1 } }).fetch(),                                            // 109
    areaNames: {                                                                                                       // 110
      incubation: 'Incubation Area',                                                                                   // 111
      growout1: 'Growout Area 1',                                                                                      // 112
      growout2: 'Growout Area 2',                                                                                      // 113
      breeding: 'Breeding Area'                                                                                        // 114
    },                                                                                                                 // 110
    timeShown: 7,                                                                                                      // 116
    currentUser: Meteor.user()                                                                                         // 117
  };                                                                                                                   // 108
}, Charts)));                                                                                                          // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ClimateChart.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-chartjs","../api/climateData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/ClimateChart.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Line;module.import('react-chartjs',{"Line":function(v){Line=v}});var ClimateData;module.import('../api/climateData.js',{"ClimateData":function(v){ClimateData=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       //
var ClimateChart = function (_Component) {                                                                             //
  _inherits(ClimateChart, _Component);                                                                                 //
                                                                                                                       //
  function ClimateChart() {                                                                                            //
    _classCallCheck(this, ClimateChart);                                                                               //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  ClimateChart.prototype.formatData = function () {                                                                    //
    function formatData() {                                                                                            //
      return {                                                                                                         // 9
        size: this.props.climateData.length,                                                                           // 10
        createdAt: this.props.climateData.map(function (climate) {                                                     // 11
          return climate.createdAt;                                                                                    // 11
        }),                                                                                                            // 11
        temp: this.props.climateData.map(function (climate) {                                                          // 12
          return climate.temp;                                                                                         // 12
        }),                                                                                                            // 12
        humidity: this.props.climateData.map(function (climate) {                                                      // 13
          return climate.humidity * 100;                                                                               // 13
        })                                                                                                             // 13
      };                                                                                                               // 9
    }                                                                                                                  // 15
                                                                                                                       //
    return formatData;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  ClimateChart.prototype.formatClimate = function () {                                                                 //
    function formatClimate() {                                                                                         //
      return {                                                                                                         // 18
        labels: Array(this.formatData().size).fill(''),                                                                // 19
        datasets: [{                                                                                                   // 20
          label: 'temperature',                                                                                        // 22
          backgroundColor: 'rgba(250, 195, 168, 0.5)',                                                                 // 23
          borderColor: 'rgba(250, 195, 168, 0.8)',                                                                     // 24
          pointColor: 'rgba(250, 195, 168, 1)',                                                                        // 25
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 26
          data: this.formatData().temp,                                                                                // 27
          yAxisID: 'y-axis-0'                                                                                          // 28
        }, {                                                                                                           // 21
          label: 'humidity',                                                                                           // 31
          backgroundColor: 'rgba(167, 238, 250, 0.5)',                                                                 // 32
          borderColor: 'rgba(167, 213, 250, 0.8)',                                                                     // 33
          pointColor: 'rgba(167, 213, 250, 1)',                                                                        // 34
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 35
          data: this.formatData().humidity,                                                                            // 36
          yAxisID: 'y-axis-1'                                                                                          // 37
        }]                                                                                                             // 30
      };                                                                                                               // 18
    }                                                                                                                  // 41
                                                                                                                       //
    return formatClimate;                                                                                              //
  }();                                                                                                                 //
                                                                                                                       //
  ClimateChart.prototype.chartOptions = function () {                                                                  //
    function chartOptions() {                                                                                          //
      return {                                                                                                         // 44
        title: {                                                                                                       // 45
          display: false,                                                                                              // 46
          text: this.props.title                                                                                       // 47
        },                                                                                                             // 45
        responsive: true,                                                                                              // 49
        scales: {                                                                                                      // 50
          yAxes: [{                                                                                                    // 51
            id: 'y-axis-0',                                                                                            // 53
            position: "left",                                                                                          // 54
            scaleLabel: {                                                                                              // 55
              display: true,                                                                                           // 56
              labelString: 'temperature (F)'                                                                           // 57
            },                                                                                                         // 55
            ticks: {                                                                                                   // 59
              min: 60,                                                                                                 // 60
              max: 100,                                                                                                // 61
              stepSize: 5                                                                                              // 62
            }                                                                                                          // 59
          }, {                                                                                                         // 52
            id: 'y-axis-1',                                                                                            // 66
            position: "right",                                                                                         // 67
            scaleLabel: {                                                                                              // 68
              display: true,                                                                                           // 69
              labelString: 'humidity (%)'                                                                              // 70
            },                                                                                                         // 68
            ticks: {                                                                                                   // 72
              min: 20,                                                                                                 // 73
              max: 100,                                                                                                // 74
              stepSize: 10                                                                                             // 75
            }                                                                                                          // 72
          }]                                                                                                           // 65
        }                                                                                                              // 50
      };                                                                                                               // 44
    }                                                                                                                  // 81
                                                                                                                       //
    return chartOptions;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  ClimateChart.prototype.render = function () {                                                                        //
    function render() {                                                                                                //
      return React.createElement(Line, { data: this.formatClimate(), className: 'unichart', options: this.chartOptions() });
    }                                                                                                                  // 87
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return ClimateChart;                                                                                                 //
}(Component);                                                                                                          //
                                                                                                                       //
module.export("default",exports.default=(ClimateChart));                                                               //
                                                                                                                       //
                                                                                                                       //
ClimateChart.propTypes = {                                                                                             // 90
  climateData: PropTypes.array.isRequired,                                                                             // 91
  title: PropTypes.string.isRequired                                                                                   // 92
};                                                                                                                     // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"DataInput.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","../api/climateData.js","../api/areaData.js","react-bootstrap",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/DataInput.jsx                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var ClimateData;module.import('../api/climateData.js',{"ClimateData":function(v){ClimateData=v}});var AreaData;module.import('../api/areaData.js',{"AreaData":function(v){AreaData=v}});var Button,Modal,Form,FormGroup,FieldGroup,ControlLabel,FormControl,Col;module.import('react-bootstrap',{"Button":function(v){Button=v},"Modal":function(v){Modal=v},"Form":function(v){Form=v},"FormGroup":function(v){FormGroup=v},"FieldGroup":function(v){FieldGroup=v},"ControlLabel":function(v){ControlLabel=v},"FormControl":function(v){FormControl=v},"Col":function(v){Col=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       // 5
                                                                                                                       // 6
                                                                                                                       //
var DataInput = function (_Component) {                                                                                //
  _inherits(DataInput, _Component);                                                                                    //
                                                                                                                       //
  function DataInput(props) {                                                                                          // 9
    _classCallCheck(this, DataInput);                                                                                  // 9
                                                                                                                       //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                                        // 9
                                                                                                                       //
    _this.state = { showModal: false };                                                                                // 11
                                                                                                                       //
    _this.handleSubmit = _this.handleSubmit.bind(_this);                                                               // 13
    _this.showModal = _this.showModal.bind(_this);                                                                     // 14
    _this.hideModal = _this.hideModal.bind(_this);                                                                     // 15
    return _this;                                                                                                      // 9
  }                                                                                                                    // 16
                                                                                                                       //
  DataInput.prototype.handleSubmit = function () {                                                                     //
    function handleSubmit(event) {                                                                                     //
      event.preventDefault();                                                                                          // 19
                                                                                                                       //
      var data = {                                                                                                     // 21
        area: ReactDOM.findDOMNode(this.refs.areaInput).value,                                                         // 22
        water: ReactDOM.findDOMNode(this.refs.waterInput).value.trim(),                                                // 23
        energy: ReactDOM.findDOMNode(this.refs.energyInput).value.trim(),                                              // 24
        feed: ReactDOM.findDOMNode(this.refs.feedInput).value.trim(),                                                  // 25
        insects: ReactDOM.findDOMNode(this.refs.insectInput).value.trim(),                                             // 26
        harvested: ReactDOM.findDOMNode(this.refs.harvestedInput).value.trim(),                                        // 27
        moveOn: ReactDOM.findDOMNode(this.refs.moveOnInput).value.trim(),                                              // 28
        frass: ReactDOM.findDOMNode(this.refs.frassInput).value.trim(),                                                // 29
        eggs: ReactDOM.findDOMNode(this.refs.eggsInput).value.trim(),                                                  // 30
        dead: ReactDOM.findDOMNode(this.refs.deadInput).value.trim()                                                   // 31
      };                                                                                                               // 21
                                                                                                                       //
      Meteor.call('areaData.insert', data);                                                                            // 34
                                                                                                                       //
      // ReactDOM.findDOMNode(this.refs.areaInput).value = '';                                                         //
      ReactDOM.findDOMNode(this.refs.waterInput).value = '';                                                           // 37
      ReactDOM.findDOMNode(this.refs.energyInput).value = '';                                                          // 38
      ReactDOM.findDOMNode(this.refs.feedInput).value = '';                                                            // 39
      ReactDOM.findDOMNode(this.refs.insectInput).value = '';                                                          // 40
      ReactDOM.findDOMNode(this.refs.harvestedInput).value = '';                                                       // 41
      ReactDOM.findDOMNode(this.refs.moveOnInput).value = '';                                                          // 42
      ReactDOM.findDOMNode(this.refs.frassInput).value = '';                                                           // 43
      ReactDOM.findDOMNode(this.refs.eggsInput).value = '';                                                            // 44
      ReactDOM.findDOMNode(this.refs.deadInput).value = '';                                                            // 45
                                                                                                                       //
      this.hideModal();                                                                                                // 47
    }                                                                                                                  // 48
                                                                                                                       //
    return handleSubmit;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  DataInput.prototype.showModal = function () {                                                                        //
    function showModal() {                                                                                             //
      this.setState({ showModal: true });                                                                              // 51
    }                                                                                                                  // 52
                                                                                                                       //
    return showModal;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  DataInput.prototype.hideModal = function () {                                                                        //
    function hideModal() {                                                                                             //
      this.setState({ showModal: false });                                                                             // 55
    }                                                                                                                  // 56
                                                                                                                       //
    return hideModal;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  DataInput.prototype.render = function () {                                                                           //
    function render() {                                                                                                //
      return React.createElement(                                                                                      // 59
        'div',                                                                                                         // 60
        { className: 'form' },                                                                                         // 60
        this.props.currentUser ? React.createElement(                                                                  // 61
          'div',                                                                                                       // 62
          null,                                                                                                        // 62
          React.createElement(                                                                                         // 63
            Button,                                                                                                    // 63
            {                                                                                                          // 63
              bsStyle: 'primary',                                                                                      // 64
              bsSize: 'small',                                                                                         // 65
              onClick: this.showModal                                                                                  // 66
            },                                                                                                         // 63
            'Data Input'                                                                                               // 63
          ),                                                                                                           // 63
          React.createElement(                                                                                         // 72
            Modal,                                                                                                     // 72
            { show: this.state.showModal, onHide: this.hideModal },                                                    // 72
            React.createElement(                                                                                       // 73
              Modal.Header,                                                                                            // 73
              { closeButton: true },                                                                                   // 73
              React.createElement(                                                                                     // 74
                Modal.Title,                                                                                           // 74
                null,                                                                                                  // 74
                'Data Input'                                                                                           // 74
              )                                                                                                        // 74
            ),                                                                                                         // 73
            React.createElement(                                                                                       // 76
              Modal.Body,                                                                                              // 76
              null,                                                                                                    // 76
              React.createElement(                                                                                     // 77
                Form,                                                                                                  // 77
                { horizontal: true },                                                                                  // 77
                React.createElement(                                                                                   // 78
                  FormGroup,                                                                                           // 78
                  { controlId: 'areaInput' },                                                                          // 78
                  React.createElement(                                                                                 // 79
                    Col,                                                                                               // 79
                    { componentClass: ControlLabel, sm: 2 },                                                           // 79
                    'Area'                                                                                             // 79
                  ),                                                                                                   // 79
                  React.createElement(                                                                                 // 82
                    Col,                                                                                               // 82
                    { sm: 10 },                                                                                        // 82
                    React.createElement(                                                                               // 83
                      FormControl,                                                                                     // 83
                      { ref: 'areaInput', componentClass: 'select', placeholder: 'area', value: this.props.area },     // 83
                      React.createElement(                                                                             // 84
                        'option',                                                                                      // 84
                        { value: 'incubation' },                                                                       // 84
                        'Incubation Area'                                                                              // 84
                      ),                                                                                               // 84
                      React.createElement(                                                                             // 85
                        'option',                                                                                      // 85
                        { value: 'growout1' },                                                                         // 85
                        'Growout Area 1'                                                                               // 85
                      ),                                                                                               // 85
                      React.createElement(                                                                             // 86
                        'option',                                                                                      // 86
                        { value: 'growout2' },                                                                         // 86
                        'Growout Area 2'                                                                               // 86
                      ),                                                                                               // 86
                      React.createElement(                                                                             // 87
                        'option',                                                                                      // 87
                        { value: 'breeding' },                                                                         // 87
                        'Breeding Area'                                                                                // 87
                      )                                                                                                // 87
                    )                                                                                                  // 83
                  )                                                                                                    // 82
                ),                                                                                                     // 78
                React.createElement(                                                                                   // 91
                  FormGroup,                                                                                           // 91
                  { controlId: 'waterInput' },                                                                         // 91
                  React.createElement(                                                                                 // 92
                    Col,                                                                                               // 92
                    { componentClass: ControlLabel, sm: 2 },                                                           // 92
                    'Water (gal)'                                                                                      // 92
                  ),                                                                                                   // 92
                  React.createElement(                                                                                 // 95
                    Col,                                                                                               // 95
                    { sm: 3 },                                                                                         // 95
                    React.createElement(FormControl, { ref: 'waterInput', type: 'number', placeholder: 'water' })      // 96
                  ),                                                                                                   // 95
                  React.createElement(                                                                                 // 98
                    Col,                                                                                               // 98
                    { componentClass: ControlLabel, sm: 2 },                                                           // 98
                    'Energy (kWh)'                                                                                     // 98
                  ),                                                                                                   // 98
                  React.createElement(                                                                                 // 101
                    Col,                                                                                               // 101
                    { sm: 3 },                                                                                         // 101
                    React.createElement(FormControl, { ref: 'energyInput', type: 'number', placeholder: 'energy' })    // 102
                  )                                                                                                    // 101
                ),                                                                                                     // 91
                React.createElement(                                                                                   // 105
                  FormGroup,                                                                                           // 105
                  { controlId: 'feedInput' },                                                                          // 105
                  React.createElement(                                                                                 // 106
                    Col,                                                                                               // 106
                    { componentClass: ControlLabel, sm: 2 },                                                           // 106
                    'Feed (lbs)'                                                                                       // 106
                  ),                                                                                                   // 106
                  React.createElement(                                                                                 // 109
                    Col,                                                                                               // 109
                    { sm: 3 },                                                                                         // 109
                    React.createElement(FormControl, { ref: 'feedInput', type: 'number', placeholder: 'feed' })        // 110
                  ),                                                                                                   // 109
                  React.createElement(                                                                                 // 112
                    Col,                                                                                               // 112
                    { componentClass: ControlLabel, sm: 2 },                                                           // 112
                    'Insects (lbs)'                                                                                    // 112
                  ),                                                                                                   // 112
                  React.createElement(                                                                                 // 115
                    Col,                                                                                               // 115
                    { sm: 3 },                                                                                         // 115
                    React.createElement(FormControl, { ref: 'insectInput', type: 'number', placeholder: 'insects' })   // 116
                  )                                                                                                    // 115
                ),                                                                                                     // 105
                React.createElement(                                                                                   // 119
                  FormGroup,                                                                                           // 119
                  { controlId: 'harvestedInput' },                                                                     // 119
                  React.createElement(                                                                                 // 120
                    Col,                                                                                               // 120
                    { componentClass: ControlLabel, sm: 2 },                                                           // 120
                    'Harvested (lbs)'                                                                                  // 120
                  ),                                                                                                   // 120
                  React.createElement(                                                                                 // 123
                    Col,                                                                                               // 123
                    { sm: 3 },                                                                                         // 123
                    React.createElement(FormControl, { ref: 'harvestedInput', type: 'number', placeholder: 'harvested' })
                  ),                                                                                                   // 123
                  React.createElement(                                                                                 // 126
                    Col,                                                                                               // 126
                    { componentClass: ControlLabel, sm: 2 },                                                           // 126
                    'Insects Moving On (lbs)'                                                                          // 126
                  ),                                                                                                   // 126
                  React.createElement(                                                                                 // 129
                    Col,                                                                                               // 129
                    { sm: 3 },                                                                                         // 129
                    React.createElement(FormControl, { ref: 'moveOnInput', type: 'number', placeholder: 'moving on' })
                  )                                                                                                    // 129
                ),                                                                                                     // 119
                React.createElement(                                                                                   // 133
                  FormGroup,                                                                                           // 133
                  { controlId: 'frassInput' },                                                                         // 133
                  React.createElement(                                                                                 // 134
                    Col,                                                                                               // 134
                    { componentClass: ControlLabel, sm: 2 },                                                           // 134
                    'Frass (lbs)'                                                                                      // 134
                  ),                                                                                                   // 134
                  React.createElement(                                                                                 // 137
                    Col,                                                                                               // 137
                    { sm: 3 },                                                                                         // 137
                    React.createElement(FormControl, { ref: 'frassInput', type: 'number', placeholder: 'frass' })      // 138
                  ),                                                                                                   // 137
                  React.createElement(                                                                                 // 140
                    Col,                                                                                               // 140
                    { componentClass: ControlLabel, sm: 2 },                                                           // 140
                    'Eggs (lbs)'                                                                                       // 140
                  ),                                                                                                   // 140
                  React.createElement(                                                                                 // 143
                    Col,                                                                                               // 143
                    { sm: 3 },                                                                                         // 143
                    React.createElement(FormControl, { ref: 'eggsInput', type: 'number', placeholder: 'eggs' })        // 144
                  )                                                                                                    // 143
                ),                                                                                                     // 133
                React.createElement(                                                                                   // 147
                  FormGroup,                                                                                           // 147
                  { controlId: 'deadInput' },                                                                          // 147
                  React.createElement(                                                                                 // 148
                    Col,                                                                                               // 148
                    { componentClass: ControlLabel, sm: 2 },                                                           // 148
                    'Dead Insects (lbs)'                                                                               // 148
                  ),                                                                                                   // 148
                  React.createElement(                                                                                 // 151
                    Col,                                                                                               // 151
                    { sm: 3 },                                                                                         // 151
                    React.createElement(FormControl, { ref: 'deadInput', type: 'number', placeholder: 'dead' })        // 152
                  )                                                                                                    // 151
                ),                                                                                                     // 147
                React.createElement(                                                                                   // 155
                  FormGroup,                                                                                           // 155
                  { controlId: 'submit' },                                                                             // 155
                  React.createElement(                                                                                 // 156
                    Col,                                                                                               // 156
                    { sm: 2, smPush: 10 },                                                                             // 156
                    React.createElement(                                                                               // 157
                      Button,                                                                                          // 157
                      { onClick: this.handleSubmit, bsStyle: 'success' },                                              // 157
                      'Submit'                                                                                         // 157
                    )                                                                                                  // 157
                  )                                                                                                    // 156
                )                                                                                                      // 155
              )                                                                                                        // 77
            ),                                                                                                         // 76
            React.createElement(                                                                                       // 164
              Modal.Footer,                                                                                            // 164
              null,                                                                                                    // 164
              React.createElement(                                                                                     // 165
                Button,                                                                                                // 165
                { onClick: this.hideModal },                                                                           // 165
                'Close'                                                                                                // 165
              )                                                                                                        // 165
            )                                                                                                          // 164
          )                                                                                                            // 72
        ) : ''                                                                                                         // 62
      );                                                                                                               // 60
    }                                                                                                                  // 172
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return DataInput;                                                                                                    //
}(Component);                                                                                                          //
                                                                                                                       //
DataInput.propTypes = {                                                                                                // 175
  area: PropTypes.string,                                                                                              // 176
  currentUser: PropTypes.object                                                                                        // 177
};                                                                                                                     // 175
                                                                                                                       //
module.export("default",exports.default=(createContainer(function () {                                                 // 180
  return {                                                                                                             // 181
    currentUser: Meteor.user()                                                                                         // 182
  };                                                                                                                   // 181
}, DataInput)));                                                                                                       // 184
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Floorplan.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","./DataInput.jsx","react-bootstrap",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Floorplan.jsx                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var render,setState;module.import('react-dom',{"render":function(v){render=v},"setState":function(v){setState=v}});var DataInput;module.import('./DataInput.jsx',{"default":function(v){DataInput=v}});var Button,Modal,Form,FormGroup,FieldGroup,ControlLabel,FormControl,Col;module.import('react-bootstrap',{"Button":function(v){Button=v},"Modal":function(v){Modal=v},"Form":function(v){Form=v},"FormGroup":function(v){FormGroup=v},"FieldGroup":function(v){FieldGroup=v},"ControlLabel":function(v){ControlLabel=v},"FormControl":function(v){FormControl=v},"Col":function(v){Col=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       //
var Floorplan = function (_Component) {                                                                                //
  _inherits(Floorplan, _Component);                                                                                    //
                                                                                                                       //
  function Floorplan(props) {                                                                                          // 7
    _classCallCheck(this, Floorplan);                                                                                  // 7
                                                                                                                       //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                                        // 7
                                                                                                                       //
    _this.state = { showModal: false };                                                                                // 9
                                                                                                                       //
    _this.showModal = _this.showModal.bind(_this);                                                                     // 11
    _this.hideModal = _this.hideModal.bind(_this);                                                                     // 12
    return _this;                                                                                                      // 7
  }                                                                                                                    // 13
                                                                                                                       //
  Floorplan.prototype.componentDidMount = function () {                                                                //
    function componentDidMount() {                                                                                     //
                                                                                                                       //
      var floorplanCanvas = document.getElementById('floorplanCanvas');                                                // 17
      floorplanCanvas.width = document.getElementById('canvasDiv').clientWidth;                                        // 18
      floorplanCanvas.height = document.getElementById('canvasDiv').clientHeight;                                      // 19
      paper.setup(floorplanCanvas);                                                                                    // 20
                                                                                                                       //
      var BUILDING_SCALING_FACTOR = 100;                                                                               // 22
                                                                                                                       //
      paper.view.draw();                                                                                               // 24
                                                                                                                       //
      var drawing = null;                                                                                              // 26
      var size = {                                                                                                     // 27
        length: 3 * BUILDING_SCALING_FACTOR,                                                                           // 28
        width: 2 * BUILDING_SCALING_FACTOR,                                                                            // 29
        walls: 3                                                                                                       // 30
      };                                                                                                               // 27
      var position = {                                                                                                 // 32
        x: 0,                                                                                                          // 33
        y: 0                                                                                                           // 34
      };                                                                                                               // 32
                                                                                                                       //
      var drawOutline = function () {                                                                                  // 37
        function drawOutline() {                                                                                       // 37
          var outline = new paper.Path.Rectangle({                                                                     // 38
            topLeft: [position.x, position.y],                                                                         // 39
            bottomRight: [position.x + size.width, position.y + size.length],                                          // 40
            strokeColor: 'black'                                                                                       // 41
          });                                                                                                          // 38
                                                                                                                       //
          drawing = new paper.Group([outline]);                                                                        // 44
        }                                                                                                              // 45
                                                                                                                       //
        return drawOutline;                                                                                            // 37
      }();                                                                                                             // 37
                                                                                                                       //
      var drawRooms = function () {                                                                                    // 47
        function drawRooms() {                                                                                         // 47
          var rooms = {                                                                                                // 48
            incubation: drawing.addChild(new paper.Group()),                                                           // 49
            growout1: drawing.addChild(new paper.Group()),                                                             // 50
            growout2: drawing.addChild(new paper.Group()),                                                             // 51
            breeding: drawing.addChild(new paper.Group())                                                              // 52
          };                                                                                                           // 48
                                                                                                                       //
          var outlines = {                                                                                             // 55
            incubation: rooms.incubation.addChild(new paper.Path.Rectangle({                                           // 56
              topLeft: [position.x + size.walls, position.y + 3 * size.walls + 0.55 * size.length],                    // 57
              bottomRight: [position.x + size.walls + 0.45 * size.width, position.y + 3 * size.walls + 0.65 * size.length],
              strokeColor: 'black'                                                                                     // 59
            })),                                                                                                       // 56
            growout1: rooms.growout1.addChild(new paper.Path.Rectangle({                                               // 61
              topLeft: [position.x + size.walls, position.y + size.walls + 0.4 * size.length],                         // 62
              bottomRight: [position.x + size.walls + 0.45 * size.width, position.y + 2 * size.walls + 0.55 * size.length],
              strokeColor: 'black'                                                                                     // 64
            })),                                                                                                       // 61
            growout2: rooms.growout2.addChild(new paper.Path.Rectangle({                                               // 66
              topLeft: [position.x + size.walls, position.y + size.walls],                                             // 67
              bottomRight: [position.x + size.width - size.walls, position.y + 0.4 * size.length],                     // 68
              strokeColor: 'black'                                                                                     // 69
            })),                                                                                                       // 66
            breeding: rooms.breeding.addChild(new paper.Path.Rectangle({                                               // 71
              topLeft: [position.x + 0.55 * size.width, position.y + size.walls + 0.4 * size.length],                  // 72
              bottomRight: [position.x + size.width - size.walls, position.y + 2 * size.walls + 0.6 * size.length],    // 73
              strokeColor: 'black'                                                                                     // 74
            }))                                                                                                        // 71
          };                                                                                                           // 55
                                                                                                                       //
          var text = {                                                                                                 // 78
            incubation: rooms.incubation.addChild(new paper.PointText({                                                // 79
              point: rooms.incubation.bounds.leftCenter,                                                               // 80
              content: 'Incubation Area',                                                                              // 81
              fillColor: 'black',                                                                                      // 82
              fontSize: '5'                                                                                            // 83
            })),                                                                                                       // 79
            growout1: rooms.growout1.addChild(new paper.PointText({                                                    // 85
              point: rooms.growout1.bounds.leftCenter,                                                                 // 86
              content: 'Growout Area 1',                                                                               // 87
              fillColor: 'black',                                                                                      // 88
              fontSize: '5'                                                                                            // 89
            })),                                                                                                       // 85
            growout2: rooms.growout2.addChild(new paper.PointText({                                                    // 91
              point: rooms.growout2.bounds.leftCenter,                                                                 // 92
              content: 'Growout Area 2',                                                                               // 93
              fillColor: 'black',                                                                                      // 94
              fontSize: '5'                                                                                            // 95
            })),                                                                                                       // 91
            breeding: rooms.breeding.addChild(new paper.PointText({                                                    // 97
              point: rooms.breeding.bounds.leftCenter,                                                                 // 98
              content: 'Breeding Area',                                                                                // 99
              fillColor: 'black',                                                                                      // 100
              fontSize: '5'                                                                                            // 101
            }))                                                                                                        // 97
          };                                                                                                           // 78
        }                                                                                                              // 104
                                                                                                                       //
        return drawRooms;                                                                                              // 47
      }();                                                                                                             // 47
                                                                                                                       //
      var showModal = function () {                                                                                    // 106
        function showModal() {                                                                                         // 106
          this.setState({ showModal: true });                                                                          // 107
        }                                                                                                              // 108
                                                                                                                       //
        return showModal;                                                                                              // 106
      }();                                                                                                             // 106
                                                                                                                       //
      var hideModal = function () {                                                                                    // 110
        function hideModal() {                                                                                         // 110
          this.setState({ showModal: false });                                                                         // 111
        }                                                                                                              // 112
                                                                                                                       //
        return hideModal;                                                                                              // 110
      }();                                                                                                             // 110
                                                                                                                       //
      // var floorplan = {                                                                                             //
      //   drawing: null,                                                                                              //
      //   size: {                                                                                                     //
      //     length: 3*BUILDING_SCALING_FACTOR,                                                                        //
      //     width: 2*BUILDING_SCALING_FACTOR,                                                                         //
      //     walls: 3,                                                                                                 //
      //   },                                                                                                          //
      //   position: {                                                                                                 //
      //     x: 0,                                                                                                     //
      //     y: 0,                                                                                                     //
      //   },                                                                                                          //
      //                                                                                                               //
      //   drawOutline: function() {                                                                                   //
      //     var outline = new paper.Path.Rectangle({                                                                  //
      //       topLeft: [this.position.x, this.position.y],                                                            //
      //       bottomRight: [this.position.x+this.size.width, this.position.y+this.size.length],                       //
      //       strokeColor: 'black',                                                                                   //
      //     });                                                                                                       //
      //                                                                                                               //
      //     this.drawing = new paper.Group([outline]);                                                                //
      //   },                                                                                                          //
      //                                                                                                               //
      //   drawRooms: function() {                                                                                     //
      //     var rooms = {                                                                                             //
      //       incubation: this.drawing.addChild(new paper.Group()),                                                   //
      //       growout1: this.drawing.addChild(new paper.Group()),                                                     //
      //       growout2: this.drawing.addChild(new paper.Group()),                                                     //
      //       breeding: this.drawing.addChild(new paper.Group()),                                                     //
      //     };                                                                                                        //
      //                                                                                                               //
      //     var outlines = {                                                                                          //
      //       incubation: rooms.incubation.addChild(new paper.Path.Rectangle({                                        //
      //         topLeft: [this.position.x+this.size.walls, this.position.y+3*this.size.walls+0.55*this.size.length],  //
      //         bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+3*this.size.walls+0.65*this.size.length],
      //         strokeColor: 'black',                                                                                 //
      //       })),                                                                                                    //
      //       growout1: rooms.growout1.addChild(new paper.Path.Rectangle({                                            //
      //         topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls+0.4*this.size.length],     //
      //         bottomRight: [this.position.x+this.size.walls+0.45*this.size.width, this.position.y+2*this.size.walls+0.55*this.size.length],
      //         strokeColor: 'black',                                                                                 //
      //       })),                                                                                                    //
      //       growout2: rooms.growout2.addChild(new paper.Path.Rectangle({                                            //
      //         topLeft: [this.position.x+this.size.walls, this.position.y+this.size.walls],                          //
      //         bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+0.4*this.size.length],
      //         strokeColor: 'black',                                                                                 //
      //       })),                                                                                                    //
      //       breeding: rooms.breeding.addChild(new paper.Path.Rectangle({                                            //
      //         topLeft: [this.position.x+0.55*this.size.width, this.position.y+this.size.walls+0.4*this.size.length],
      //         bottomRight: [this.position.x+this.size.width-this.size.walls, this.position.y+2*this.size.walls+0.6*this.size.length],
      //         strokeColor: 'black',                                                                                 //
      //       })),                                                                                                    //
      //     }                                                                                                         //
      //                                                                                                               //
      //     var text = {                                                                                              //
      //       incubation: rooms.incubation.addChild(new paper.PointText({                                             //
      //         point: rooms.incubation.bounds.leftCenter,                                                            //
      //         content: 'Incubation Area',                                                                           //
      //         fillColor: 'black',                                                                                   //
      //         fontSize: '5',                                                                                        //
      //       })),                                                                                                    //
      //       growout1: rooms.growout1.addChild(new paper.PointText({                                                 //
      //         point: rooms.growout1.bounds.leftCenter,                                                              //
      //         content: 'Growout Area 1',                                                                            //
      //         fillColor: 'black',                                                                                   //
      //         fontSize: '5',                                                                                        //
      //       })),                                                                                                    //
      //       growout2: rooms.growout2.addChild(new paper.PointText({                                                 //
      //         point: rooms.growout2.bounds.leftCenter,                                                              //
      //         content: 'Growout Area 2',                                                                            //
      //         fillColor: 'black',                                                                                   //
      //         fontSize: '5',                                                                                        //
      //       })),                                                                                                    //
      //       breeding: rooms.breeding.addChild(new paper.PointText({                                                 //
      //         point: rooms.breeding.bounds.leftCenter,                                                              //
      //         content: 'Breeding Area',                                                                             //
      //         fillColor: 'black',                                                                                   //
      //         fontSize: '5',                                                                                        //
      //       })),                                                                                                    //
      //     };                                                                                                        //
      //                                                                                                               //
      //     // rooms.incubation.onClick = function(event) {                                                           //
      //     //   this.fillColor = 'red';                                                                              //
      //     // }                                                                                                      //
      //   },                                                                                                          //
      //                                                                                                               //
      //   showModal: function() {                                                                                     //
      //     this.setState({ showModal: true });                                                                       //
      //   },                                                                                                          //
      //                                                                                                               //
      //   hideModal: function() {                                                                                     //
      //     this.setState({ showModal: false });                                                                      //
      //   },                                                                                                          //
      // };                                                                                                            //
                                                                                                                       //
      drawOutline();                                                                                                   // 208
      drawRooms();                                                                                                     // 209
                                                                                                                       //
      // floorplan.drawing.position = paper.view.center;                                                               //
                                                                                                                       //
      var tool = new paper.Tool();                                                                                     // 213
      // var path;                                                                                                     //
      //                                                                                                               //
      // // Define a mousedown and mousedrag handler                                                                   //
      // // Draws pretty lines (test mouse tracking)                                                                   //
      // tool.onMouseDown = function(event) {                                                                          //
      // 	path = new paper.Path();                                                                                     //
      // 	path.strokeColor = 'black';                                                                                  //
      // 	path.add(event.point);                                                                                       //
      // }                                                                                                             //
      //                                                                                                               //
      // tool.onMouseDrag = function(event) {                                                                          //
      // 	path.add(event.point);                                                                                       //
      // }                                                                                                             //
                                                                                                                       //
      tool.onMouseUp = function (event) {                                                                              // 228
        console.log(event.point);                                                                                      // 229
                                                                                                                       //
        if (event.point.isInside(drawing.children[1].bounds)) {                                                        // 231
          console.log('incubation');                                                                                   // 232
          showModal();                                                                                                 // 233
        } else if (event.point.isInside(drawing.children[2].bounds)) {                                                 // 234
          console.log('growout1');                                                                                     // 235
          this.showModal();                                                                                            // 236
        } else if (event.point.isInside(drawing.children[3].bounds)) {                                                 // 237
          console.log('growout2');                                                                                     // 238
          this.showModal();                                                                                            // 239
        } else if (event.point.isInside(drawing.children[4].bounds)) {                                                 // 240
          console.log('breeding');                                                                                     // 241
          this.showModal();                                                                                            // 242
        }                                                                                                              // 243
      };                                                                                                               // 244
    }                                                                                                                  // 245
                                                                                                                       //
    return componentDidMount;                                                                                          //
  }();                                                                                                                 //
                                                                                                                       //
  Floorplan.prototype.showModal = function () {                                                                        //
    function showModal() {                                                                                             //
      this.setState({ showModal: true });                                                                              // 248
    }                                                                                                                  // 249
                                                                                                                       //
    return showModal;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  Floorplan.prototype.hideModal = function () {                                                                        //
    function hideModal() {                                                                                             //
      this.setState({ showModal: false });                                                                             // 252
    }                                                                                                                  // 253
                                                                                                                       //
    return hideModal;                                                                                                  //
  }();                                                                                                                 //
                                                                                                                       //
  Floorplan.prototype.render = function () {                                                                           //
    function render() {                                                                                                //
      return React.createElement(                                                                                      // 256
        'div',                                                                                                         // 257
        { id: 'canvasDiv' },                                                                                           // 257
        React.createElement('canvas', { id: 'floorplanCanvas', height: '300', hidden: true })                          // 258
      );                                                                                                               // 257
    }                                                                                                                  // 261
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Floorplan;                                                                                                    //
}(Component);                                                                                                          //
                                                                                                                       //
module.export("default",exports.default=(Floorplan));                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Header.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","./AccountsUIWrapper.jsx","react-bootstrap",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/Header.jsx                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});var Navbar,Nav,NavItem;module.import('react-bootstrap',{"Navbar":function(v){Navbar=v},"Nav":function(v){Nav=v},"NavItem":function(v){NavItem=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       // 5
                                                                                                                       //
var Header = function (_Component) {                                                                                   //
  _inherits(Header, _Component);                                                                                       //
                                                                                                                       //
  function Header() {                                                                                                  //
    _classCallCheck(this, Header);                                                                                     //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  Header.prototype.render = function () {                                                                              //
    function render() {                                                                                                //
      return React.createElement(                                                                                      // 9
        Navbar,                                                                                                        // 10
        { staticTop: true },                                                                                           // 10
        React.createElement(                                                                                           // 11
          Navbar.Header,                                                                                               // 11
          null,                                                                                                        // 11
          React.createElement(                                                                                         // 12
            Navbar.Brand,                                                                                              // 12
            null,                                                                                                      // 12
            React.createElement(                                                                                       // 13
              'a',                                                                                                     // 13
              { href: '#' },                                                                                           // 13
              'The Hive | Colony Farm'                                                                                 // 13
            )                                                                                                          // 13
          )                                                                                                            // 12
        ),                                                                                                             // 11
        React.createElement(                                                                                           // 16
          Navbar.Text,                                                                                                 // 16
          null,                                                                                                        // 16
          React.createElement(AccountsUIWrapper, null)                                                                 // 17
        )                                                                                                              // 16
      );                                                                                                               // 10
    }                                                                                                                  // 21
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return Header;                                                                                                       //
}(Component);                                                                                                          //
                                                                                                                       //
Header.propTypes = {                                                                                                   // 24
  currentUser: PropTypes.object                                                                                        // 25
};                                                                                                                     // 24
                                                                                                                       //
module.export("default",exports.default=(createContainer(function () {                                                 // 28
  return {                                                                                                             // 29
    currentUser: Meteor.user()                                                                                         // 30
  };                                                                                                                   // 29
}, Header)));                                                                                                          // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"InputChart.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-chartjs","../api/areaData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/InputChart.jsx                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Line;module.import('react-chartjs',{"Line":function(v){Line=v}});var AreaData;module.import('../api/areaData.js',{"AreaData":function(v){AreaData=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       //
var InputChart = function (_Component) {                                                                               //
  _inherits(InputChart, _Component);                                                                                   //
                                                                                                                       //
  function InputChart() {                                                                                              //
    _classCallCheck(this, InputChart);                                                                                 //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  InputChart.prototype.formatData = function () {                                                                      //
    function formatData() {                                                                                            //
      return {                                                                                                         // 9
        size: this.props.data.length,                                                                                  // 10
        createdAt: this.props.data.map(function (area) {                                                               // 11
          return area.createdAt;                                                                                       // 11
        }),                                                                                                            // 11
        water: this.props.data.map(function (area) {                                                                   // 12
          return area.water;                                                                                           // 12
        }),                                                                                                            // 12
        energy: this.props.data.map(function (area) {                                                                  // 13
          return area.energy;                                                                                          // 13
        }),                                                                                                            // 13
        feed: this.props.data.map(function (area) {                                                                    // 14
          return area.feed;                                                                                            // 14
        })                                                                                                             // 14
      };                                                                                                               // 9
    }                                                                                                                  // 16
                                                                                                                       //
    return formatData;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  InputChart.prototype.formatInputs = function () {                                                                    //
    function formatInputs() {                                                                                          //
      return {                                                                                                         // 19
        labels: Array(this.formatData().size).fill(''),                                                                // 20
        datasets: [{                                                                                                   // 21
          label: 'feed',                                                                                               // 23
          backgroundColor: 'rgba(167, 250, 210, 0.5)',                                                                 // 24
          borderColor: 'rgba(167, 250, 210, 0.8)',                                                                     // 25
          pointColor: 'rgba(167, 250, 210, 1)',                                                                        // 26
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 27
          data: this.formatData().feed,                                                                                // 28
          yAxisID: 'y-axis-0'                                                                                          // 29
        }, {                                                                                                           // 22
          label: 'water',                                                                                              // 32
          backgroundColor: 'rgba(167, 238, 250, 0.5)',                                                                 // 33
          borderColor: 'rgba(167, 213, 250, 0.8)',                                                                     // 34
          pointColor: 'rgba(167, 213, 250, 1)',                                                                        // 35
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 36
          data: this.formatData().water,                                                                               // 37
          yAxisID: 'y-axis-1'                                                                                          // 38
        }, {                                                                                                           // 31
          label: 'energy',                                                                                             // 41
          backgroundColor: 'rgba(250, 195, 168, 0.5)',                                                                 // 42
          borderColor: 'rgba(250, 195, 168, 0.8)',                                                                     // 43
          pointColor: 'rgba(250, 195, 168, 1)',                                                                        // 44
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 45
          data: this.formatData().energy,                                                                              // 46
          yAxisID: 'y-axis-2'                                                                                          // 47
        }]                                                                                                             // 40
      };                                                                                                               // 19
    }                                                                                                                  // 51
                                                                                                                       //
    return formatInputs;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  InputChart.prototype.chartOptions = function () {                                                                    //
    function chartOptions() {                                                                                          //
      return {                                                                                                         // 54
        title: {                                                                                                       // 55
          display: false,                                                                                              // 56
          text: this.props.title                                                                                       // 57
        },                                                                                                             // 55
        responsive: true,                                                                                              // 59
        scales: {                                                                                                      // 60
          yAxes: [{                                                                                                    // 61
            id: 'y-axis-0',                                                                                            // 63
            position: 'left',                                                                                          // 64
            scaleLabel: {                                                                                              // 65
              display: true,                                                                                           // 66
              labelString: 'lbs'                                                                                       // 67
            },                                                                                                         // 65
            ticks: {                                                                                                   // 69
              min: 0,                                                                                                  // 70
              max: 500,                                                                                                // 71
              stepSize: 50                                                                                             // 72
            }                                                                                                          // 69
          }, {                                                                                                         // 62
            id: 'y-axis-1',                                                                                            // 76
            position: 'right',                                                                                         // 77
            scaleLabel: {                                                                                              // 78
              display: true,                                                                                           // 79
              labelString: 'gal'                                                                                       // 80
            },                                                                                                         // 78
            ticks: {                                                                                                   // 82
              min: 0,                                                                                                  // 83
              max: 100,                                                                                                // 84
              stepSize: 10                                                                                             // 85
            }                                                                                                          // 82
          }, {                                                                                                         // 75
            id: 'y-axis-2',                                                                                            // 89
            position: 'right',                                                                                         // 90
            scaleLabel: {                                                                                              // 91
              display: true,                                                                                           // 92
              labelString: 'kWh'                                                                                       // 93
            },                                                                                                         // 91
            ticks: {                                                                                                   // 95
              min: 0,                                                                                                  // 96
              max: 100,                                                                                                // 97
              stepSize: 10                                                                                             // 98
            }                                                                                                          // 95
          }]                                                                                                           // 88
        }                                                                                                              // 60
      };                                                                                                               // 54
    }                                                                                                                  // 104
                                                                                                                       //
    return chartOptions;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  InputChart.prototype.render = function () {                                                                          //
    function render() {                                                                                                //
      return React.createElement(Line, { data: this.formatInputs(), className: 'unichart', options: this.chartOptions() });
    }                                                                                                                  // 110
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return InputChart;                                                                                                   //
}(Component);                                                                                                          //
                                                                                                                       //
module.export("default",exports.default=(InputChart));                                                                 //
                                                                                                                       //
                                                                                                                       //
InputChart.propTypes = {                                                                                               // 113
  data: PropTypes.array.isRequired,                                                                                    // 114
  title: PropTypes.string.isRequired                                                                                   // 115
};                                                                                                                     // 113
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"YieldChart.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","react-chartjs","../api/areaData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/YieldChart.jsx                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Line;module.import('react-chartjs',{"Line":function(v){Line=v}});var AreaData;module.import('../api/areaData.js',{"AreaData":function(v){AreaData=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
                                                                                                                       // 4
                                                                                                                       //
var YieldChart = function (_Component) {                                                                               //
  _inherits(YieldChart, _Component);                                                                                   //
                                                                                                                       //
  function YieldChart() {                                                                                              //
    _classCallCheck(this, YieldChart);                                                                                 //
                                                                                                                       //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                        //
  }                                                                                                                    //
                                                                                                                       //
  YieldChart.prototype.formatData = function () {                                                                      //
    function formatData() {                                                                                            //
      return {                                                                                                         // 9
        size: this.props.data.length,                                                                                  // 10
        createdAt: this.props.data.map(function (area) {                                                               // 11
          return area.createdAt;                                                                                       // 11
        }),                                                                                                            // 11
        insects: this.props.data.map(function (area) {                                                                 // 12
          return area.insects;                                                                                         // 12
        }),                                                                                                            // 12
        eggs: this.props.data.map(function (area) {                                                                    // 13
          return area.eggs;                                                                                            // 13
        }),                                                                                                            // 13
        dead: this.props.data.map(function (area) {                                                                    // 14
          return area.dead;                                                                                            // 14
        }),                                                                                                            // 14
        frass: this.props.data.map(function (area) {                                                                   // 15
          return area.frass;                                                                                           // 15
        })                                                                                                             // 15
      };                                                                                                               // 9
    }                                                                                                                  // 17
                                                                                                                       //
    return formatData;                                                                                                 //
  }();                                                                                                                 //
                                                                                                                       //
  YieldChart.prototype.formatWeights = function () {                                                                   //
    function formatWeights() {                                                                                         //
      return {                                                                                                         // 20
        labels: Array(this.formatData().size).fill(''),                                                                // 21
        datasets: [{                                                                                                   // 22
          label: 'insects',                                                                                            // 24
          backgroundColor: 'rgba(167, 250, 210, 0.5)',                                                                 // 25
          borderColor: 'rgba(167, 250, 210, 0.8)',                                                                     // 26
          pointColor: 'rgba(167, 250, 210, 1)',                                                                        // 27
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 28
          data: this.formatData().insects,                                                                             // 29
          yAxisID: 'y-axis-0'                                                                                          // 30
        }, {                                                                                                           // 23
          label: 'eggs',                                                                                               // 33
          backgroundColor: 'rgba(167, 238, 250, 0.5)',                                                                 // 34
          borderColor: 'rgba(167, 213, 250, 0.8)',                                                                     // 35
          pointColor: 'rgba(167, 213, 250, 1)',                                                                        // 36
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 37
          data: this.formatData().eggs,                                                                                // 38
          yAxisID: 'y-axis-0'                                                                                          // 39
        }, {                                                                                                           // 32
          label: 'dead',                                                                                               // 42
          backgroundColor: 'rgba(250, 195, 168, 0.5)',                                                                 // 43
          borderColor: 'rgba(250, 195, 168, 0.8)',                                                                     // 44
          pointColor: 'rgba(250, 195, 168, 1)',                                                                        // 45
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 46
          data: this.formatData().dead,                                                                                // 47
          yAxisID: 'y-axis-0'                                                                                          // 48
        }, {                                                                                                           // 41
          label: 'frass',                                                                                              // 51
          backgroundColor: 'rgba(194, 167, 250, 0.5)',                                                                 // 52
          borderColor: 'rgba(194, 167, 250, 0.8)',                                                                     // 53
          pointColor: 'rgba(194, 167, 250, 1)',                                                                        // 54
          pointStrokeColor: 'rgb(255, 255, 255)',                                                                      // 55
          data: this.formatData().frass,                                                                               // 56
          yAxisID: 'y-axis-0'                                                                                          // 57
        }]                                                                                                             // 50
      };                                                                                                               // 20
    }                                                                                                                  // 61
                                                                                                                       //
    return formatWeights;                                                                                              //
  }();                                                                                                                 //
                                                                                                                       //
  YieldChart.prototype.chartOptions = function () {                                                                    //
    function chartOptions() {                                                                                          //
      return {                                                                                                         // 64
        title: {                                                                                                       // 65
          display: false,                                                                                              // 66
          text: this.props.title                                                                                       // 67
        },                                                                                                             // 65
        responsive: true,                                                                                              // 69
        scales: {                                                                                                      // 70
          yAxes: [{                                                                                                    // 71
            id: 'y-axis-0',                                                                                            // 73
            position: "left",                                                                                          // 74
            scaleLabel: {                                                                                              // 75
              display: true,                                                                                           // 76
              labelString: 'lbs'                                                                                       // 77
            },                                                                                                         // 75
            ticks: {                                                                                                   // 79
              min: 0,                                                                                                  // 80
              max: 1000,                                                                                               // 81
              stepSize: 100                                                                                            // 82
            }                                                                                                          // 79
          }]                                                                                                           // 72
        }                                                                                                              // 70
      };                                                                                                               // 64
    }                                                                                                                  // 88
                                                                                                                       //
    return chartOptions;                                                                                               //
  }();                                                                                                                 //
                                                                                                                       //
  YieldChart.prototype.render = function () {                                                                          //
    function render() {                                                                                                //
      return React.createElement(Line, { data: this.formatWeights(), className: 'unichart', options: this.chartOptions() });
    }                                                                                                                  // 94
                                                                                                                       //
    return render;                                                                                                     //
  }();                                                                                                                 //
                                                                                                                       //
  return YieldChart;                                                                                                   //
}(Component);                                                                                                          //
                                                                                                                       //
module.export("default",exports.default=(YieldChart));                                                                 //
                                                                                                                       //
                                                                                                                       //
YieldChart.propTypes = {                                                                                               // 97
  data: PropTypes.array.isRequired,                                                                                    // 98
  title: PropTypes.string.isRequired                                                                                   // 99
};                                                                                                                     // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"api":{"rest.js":["../imports/api/climateData.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// api/rest.js                                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ClimateData;module.import('../imports/api/climateData.js',{"ClimateData":function(v){ClimateData=v}});             // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 3
  var Api = new Restivus({                                                                                             // 4
    useDefaultAuth: true,                                                                                              // 5
    prettyJson: true                                                                                                   // 6
                                                                                                                       //
  });                                                                                                                  // 4
                                                                                                                       //
  Api.addCollection(ClimateData, {                                                                                     // 10
    authRequired: false,                                                                                               // 11
    excludedEndpoints: ['deleteAll', 'delete'],                                                                        // 12
    endpoints: {                                                                                                       // 13
      post: {                                                                                                          // 14
        authRequired: true,                                                                                            // 15
        action: function () {                                                                                          // 16
          function action() {                                                                                          // 16
            var data = ClimateData.insert({                                                                            // 17
              temp: this.bodyParams.temp,                                                                              // 18
              humidity: this.bodyParams.humidity,                                                                      // 19
              area: this.bodyParams.area,                                                                              // 20
              createdAt: new Date(),                                                                                   // 21
              username: this.user.username                                                                             // 22
            });                                                                                                        // 17
            return true;                                                                                               // 24
          }                                                                                                            // 25
                                                                                                                       //
          return action;                                                                                               // 16
        }()                                                                                                            // 16
      }                                                                                                                // 14
    }                                                                                                                  // 13
  });                                                                                                                  // 10
                                                                                                                       //
  Api.addCollection(Meteor.users, {                                                                                    // 30
    excludedEndpoints: ['getAll', 'put'],                                                                              // 31
    routeOptions: {                                                                                                    // 32
      authRequired: true                                                                                               // 33
    },                                                                                                                 // 32
    endpoints: {                                                                                                       // 35
      post: {                                                                                                          // 36
        authRequired: false                                                                                            // 37
      },                                                                                                               // 36
      'delete': {                                                                                                      // 39
        roleRequired: 'admin'                                                                                          // 40
      }                                                                                                                // 39
    }                                                                                                                  // 35
  });                                                                                                                  // 30
}                                                                                                                      // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./client/template.main.js");
require("./client/js/charts.js");
require("./client/js/floorplan.js");
require("./api/rest.js");
require("./client/main.jsx");