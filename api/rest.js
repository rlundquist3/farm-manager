import { ClimateData } from '../imports/api/climateData.js';

if (Meteor.isServer) {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true,

  });

  // Api.addRoute('climate_data/:id', {authRequired: false}, {
  //   post: {
  //     action: function() {
  //       var data = this.bodyParams;
  //       console.log(JSON.stringify(data.temp));
  //       // ClimateData.insert({
  //       //   temp: this.bodyParams.temp,
  //       //
  //       // })
  //       return {status: 'success', data: data};
  //     }
  //   }
  // });

  // Api.addCollection(ClimateData);

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

  // Api.addRoute('climate_data/:id', {authRequired: false}, {
  //   get: function () {
  //     return ClimateData.findOne(this.urlParams.id);
  //   },
  //   delete: {
  //     roleRequired: ['author', 'admin'],
  //     action: function () {
  //       if (ClimateData.remove(this.urlParams.id)) {
  //         return {status: 'success', data: {message: 'removed'}};
  //       }
  //       return {
  //         statusCode: 404,
  //         body: {status: 'fail', message: 'not found'}
  //       };
  //     }
  //   }
  // });
}
