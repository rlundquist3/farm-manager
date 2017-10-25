import { Meteor } from 'meteor/meteor';
import { chai, assert, should } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { _ } from 'meteor/underscore';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import faker from 'faker';

import { ClimateData } from './climateData.js';

chai.should();

if (Meteor.isServer) {
  describe('ClimateData', function() {
    describe('check', function() {

      const a = 3;
      it('should work', function() {
        a.should.equal(3);
      });
    });

    describe('data', function() {
      before(function() {
        resetDatabase();
        _.times(3, function() {
          Factory.create('climateData');
        });
      });
      it('builds from factory', function() {
        const data = Factory.create('climateData');
        data.should.be.a('object');
        data.temp.should.be.a('number');
        data.humidity.should.be.a('number');
        data.createdAt.should.be.a('date');
      });

      it('sends all data (TODO: ADD FOR DIFFERENT TIME SCALES)', () => {
        const collector = new PublicationCollector();
        collector.collect('climateData', (collections) => {
          assert.equal(collections.climate_data.length, 4);
        });
      });
    });
  });
}
