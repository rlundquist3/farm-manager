import { Mongo } from 'meteor/mongo';

export const ClimateData = new Mongo.Collection('climate_data');

if (Meteor.isServer) {
  Meteor.publish('climateData', function climateDataPublication() {
    return ClimateData.find();
  });
}

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
