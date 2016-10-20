import { Mongo } from 'meteor/mongo';

export const ClimateData = new Mongo.Collection('climate_data');

if (Meteor.isServer) {
  Meteor.publish('climateData', function climateDataPublication() {
    return ClimateData.find();
  });
}
