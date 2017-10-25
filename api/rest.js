import { ClimateData } from '../imports/api/climateData.js';

if (Meteor.isServer) {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true,

  });

  Api.addCollection(ClimateData, {
    authRequired: false,
    excludedEndpoints: ['deleteAll', 'delete'],
    endpoints: {
      post: {
        authRequired: true,
        action: function () {
          var data = ClimateData.insert({
            temp: this.bodyParams.temp,
            humidity: this.bodyParams.humidity,
            area: this.bodyParams.area,
            createdAt: new Date(),
            username: this.user.username,
          });
          return true;
        }
      }
    }
  });

  Api.addCollection(Meteor.users, {
    excludedEndpoints: ['getAll', 'put'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin'
      }
    }
  });
}
