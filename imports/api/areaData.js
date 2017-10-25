import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const AreaData = new Mongo.Collection('area_data');
export const AggregateData = new Mongo.Collection('aggregate_data');

if (Meteor.isServer) {
  Meteor.publish('areaData', function areaDataPublication() {
    return AreaData.find();
  });
  Meteor.publish('aggregateData', function aggregateDataPublication() {
    return AggregateData.find();
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

    const oldAggregateData = AggregateData.findOne({
      createdAt: {
        $gte: today,
        $lt: tomorrow
      },
    });

    if (oldAggregateData) {
      var newData = {
        water: Number(oldAggregateData.water) + Number(data.water),
        energy: Number(oldAggregateData.energy) + Number(data.energy),
        feed: Number(oldAggregateData.feed) + Number(data.feed),
        insects: Number(oldAggregateData.insects) + Number(data.insects),
        eggs: Number(oldAggregateData.eggs) + Number(data.eggs),
        harvested: Number(oldAggregateData.harvested) + Number(data.harvested),
        moveOn: Number(oldAggregateData.moveOn) + Number(data.moveOn),
        frass: Number(oldAggregateData.frass) + Number(data.frass),
        dead: Number(oldAggregateData.dead) + Number(data.dead),
    }

      AggregateData.update(oldAggregateData._id, {
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
      AggregateData.insert({
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
});
