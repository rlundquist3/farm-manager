// import { Mongo } from 'meteor/mongo';
// import { Factory } from 'meteor/factory';
// import faker from 'faker';

var Mongo = require('meteor/mongo');
var Factory = require('meteor/factory');
var faker = require('faker');

export const ClimateData = new Mongo.Collection('climate_data');

if (Meteor.isServer) {
  Meteor.publish('climateData', function climateDataPublication() {
    return ClimateData.find();
  });
}

Factory.define('climateData', ClimateData, {
  temp: () => faker.random.number(),
  humidity: () => faker.random.number(),
  createdAt: () => new Date(),
});

// Meteor.methods({
//   'climateData.insert'(temp, humidity) {
//
//     if(! this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }
//
//     ClimateData.insert({
//       temp: temp,
//       humidity: humidity,
//       createdAt: new Date(),
//       username: Meteor.users.findOne(this.userId).username,
//     });
//   }
// });
