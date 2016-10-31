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

    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    tomorrow.setDate(tomorrow.getDate()+1);

    const oldData = AreaData.findOne({
      createdAt: {
        $gte: today,
        $lt: tomorrow
      },
      area: data.area,
    });

    if (oldData) {
      var newData = {
        water: Number(oldData.water) + Number(data.water),
        energy: Number(oldData.energy) + Number(data.energy),
        feed: Number(oldData.feed) + Number(data.feed),
        insects: Number(oldData.insects) + Number(data.insects),
        eggs: Number(oldData.eggs) + Number(data.eggs),
        harvested: Number(oldData.harvested) + Number(data.harvested),
        moveOn: Number(oldData.moveOn) + Number(data.moveOn),
        frass: Number(oldData.frass) + Number(data.frass),
        dead: Number(oldData.dead) + Number(data.dead),
    }

      AreaData.update(oldData._id, {
        $set: {
          water: newData.water,
          energy: newData.energy,
          feed: newData.feed,
          insects: newData.insects,
          eggs: newData.eggs,
          harvested: newData.harvested,
          moveOn: newData.moveOn,
          frass: newData.frass,
          dead: newData.dead,
        }
      });
    } else {
      AreaData.insert({
        area: data.area,
        water: Number(data.water),
        energy: Number(data.energy),
        feed: Number(data.feed),
        insects: Number(data.insects),
        harvested: Number(data.harvested),
        moveOn: Number(data.moveOn),
        frass: Number(data.frass),
        eggs: Number(data.eggs),
        dead: Number(data.dead),
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
    }
  },
  // 'areaData.update'(id, data) {
  //   check(id, String);
  //
  //   const areaData = AreaData.findOne(id);
  //
  //   var newData = areaData.data;
  //   newData.water += data.water;
  //   newData.energy += data.energy;
  //   newData.feed += data.feed;
  //   newData.insects += data.insects;
  //   newData.harvested += data.harvested;
  //   newData.moveOn += data.moveOn;
  //   newData.frass += data.frass;
  //   newData.dead += data.dead;
  //
  //   AreaData.update(id, { $set: { data: newData } });
  // }
});
