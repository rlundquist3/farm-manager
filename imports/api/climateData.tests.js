import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/factory';
import { PublicationCollector } from 'meteor/publication-collector';
import { chai, assert } from 'meteor/practicalmeteor:chai';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { ClimateData } from './climateData.js';

if (Meteor.isServer) {
  describe('climateData', () => {
    describe('mutators', () => {
      it('builds correctly from factory', () => {
        const climateData = Factory.create('climateData');
        assert.typeOf(climateData, 'object');
        assert.typeOf(climateData.temp, 'number');
        assert.typeOf(climateData.humidity, 'number');
        assert.typeOf(climateData.createdAt, 'date');
      });
    });

    before(() => {
      userId = Random.id();

      _.times(3, () => {
        Factory.create('climateData');
      });
    });

    describe('climbateData.list', () => {
      it('sends all data (TODO: ADD FOR DIFFERENT TIME SCALES)', () => {
        const collector = new PublicationCollector();
        collector.collect(
          'climateData.inList',
          (collections) => {
            chai.assert.equal(collections.ClimateData.length, 3);
            done();
          }
        );
      });
    });
  });
};
