import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const AreaData = new Mongo.Collection('area_data');

if (Meteor.isServer) {
  Meteor.publish('areaData', function areaDataPublication() {
    return AreaData.find();
  });
}

Meteor.methods({
  'areaData.insert'(data) {
    check(data, Object);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    AreaData.insert({
      area: data.area,
      water: data.water,
      energy: data.energy,
      feed: data.feed,
      insects: data.insects,
      harvested: data.harvested,
      moveOn: data.moveOn,
      frass: data.frass,
      eggs: data.eggs,
      dead: data.dead,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'areaData.update'(id, data) {
    check(id, String);

    const areaData = AreaData.findOne(id);

    var newData = areaData.data;
    newData.water += data.water;
    newData.energy += data.energy;
    newData.feed += data.feed;
    newData.insects += data.insects;
    newData.harvested += data.harvested;
    newData.moveOn += data.moveOn;
    newData.frass += data.frass;
    newData.dead += data.dead;

    AreaData.update(id, { $set: { data: newData } });
  }
});
