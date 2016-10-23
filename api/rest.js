import { ClimateData } from '../imports/api/climateData.js';

if (Meteor.isServer) {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Api.addRoute('climate_data/:id', {authRequired: true}, {
  //   post: {
  //     action: function() {
  //       var data = ClimateData.insert(this.bodyParams);
  //       if (data)
  //         return {status: 'success', data: data};
  //       return {
  //         statusCode: 400,
  //         body: {status: 'fail', message: 'boogers'}
  //       };
  //     }
  //   }
  // });

  Api.addCollection(ClimateData);

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
