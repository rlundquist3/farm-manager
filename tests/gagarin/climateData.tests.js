// import { ClimateData } from './climateData.js';
var ClimateData = require('../../imports/api/climateData.js');

describe('Climate Data Tests', function() {
  var server = meteor();

  it('builds correctly from factory', function () {
    const climateData = Factory.create('climateData');
    climateData.should.be.a('object');
    climateData.temp.should.be.a('number');
    climateData.humidity.should.be.a('number');
    climateData.createdAt.should.be.a('date');
  });
});
