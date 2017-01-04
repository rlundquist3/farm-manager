import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const MealwormBagData = new Mongo.Collection('mealworm_bag_data');
export const MealwormBinData = new Mongo.Collection('mealworm_bin_data');

if (Meteor.isServer) {
  Meteor.publish('mealwormBagData', function mealwormBagDataPubliction() {
    return MealwormBagData.find();
  });
  Meteor.publish('mealwormBagData', function mealwormBinDataPubliction() {
    return MealwormBinData.find();
  });
}

Meteor.methods({
  'mealwormBagData.insert'(data) {
    check(data, Object);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    tomorrow.setDate(tomorrow.getDate()+1);

    const oldData = MealwormBagData.findOne({
      createdAt: {
        $gte: today,
        $lt: tomorrow
      },
      bagNumber: data.bagNumber,
    });

    if (oldData) {
      var newData = {
        startDate: data.startDate ? data.startDate : oldData.startDate,
        feedDate: data.feedDate ? data.feedDate : oldData.feedDate,
        moveDate: data.moveDate ? data.moveDate : oldData.moveDate,
        harvestDate: data.harvestDate ? data.harvestDate : oldData.harvestDate,
        insects: data.insects ? Number(data.insects) : Number(oldData.insects),
        wetFeed: data.wetFeed ? Number(data.wetFeed) : Number(oldData.wetFeed),
        grain: data.grain ? Number(data.grain) : Number(oldData.grain),
      }

      MealwormBagData.update(oldBagData._id, {
        $set: {
          startDate: newData.startDate,
          feedDate: newData.feedDate,
          moveDate: newData.moveDate,
          harvestDate: newData.harvestDate,
          insects: newData.insects,
          wetFeed: newData.wetFeed,
          grain: newData.grain,
        }
      });
    } else {
      MealwormBagData.insert({
        bagNumber: data.bagNumber,
        startDate: data.startDate,
        feedDate: data.feedDate,
        moveDate: data.moveDate,
        harvestDate: data.harvestDate,
        insects: Number(data.insects),
        wetFeed: Number(data.wetFeed),
        grain: Number(data.grain),
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
    }
  }

  'mealwormBinData.insert'(data) {
    check(data, Object);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    tomorrow.setDate(tomorrow.getDate()+1);

    const oldData = MealwormBinData.findOne({
      createdAt: {
        $gte: today,
        $lt: tomorrow
      },
      binNumber: data.binNumber,
    });

    if (oldData) {
      var newData = {
        startDate: data.startDate ? data.startDate : oldData.startDate,
        feedDate: data.feedDate ? data.feedDate : oldData.feedDate,
        removeAdultsDate: data.removeAdultsDate ? data.removeAdultsDate : oldData.removeAdultsDate,
        hatchDate: data.hatchDate ? data.hatchDate : oldData.hatchDate,
        insects: data.insects ? Number(data.insects) : Number(oldData.insects),
        eggs: data.eggs ? Number(data.eggs) : Number(oldData.eggs),
        wetFeed: data.wetFeed ? Number(data.wetFeed) : Number(oldData.wetFeed),
        grain: data.grain ? Number(data.grain) : Number(oldData.grain),
      }

      MealwormBagData.update(oldBagData._id, {
        $set: {
          startDate: newData.startDate,
          feedDate: newData.feedDate,
          moveDate: newData.moveDate,
          harvestDate: newData.harvestDate,
          insects: newData.insects,
          eggs: newData.eggs,
          wetFeed: newData.wetFeed,
          grain: newData.grain,
        }
      });
    } else {
      MealwormBinData.insert({
        binNumber: data.binNumber,
        startDate: data.startDate,
        feedDate: data.feedDate,
        removeAdultsDate: data.removeAdultsDate,
        hatchDate: data.hatchDate,
        insects: Number(data.insects),
        eggs: Number(data.eggs),
        wetFeed: Number(data.wetFeed),
        grain: Number(data.grain),
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
    }
  }
});
