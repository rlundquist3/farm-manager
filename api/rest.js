import { ClimateData } from '../imports/api/climateData.js';

if (Meteor.isServer) {
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

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

  // Api.addRoute('xxx/:id', {authRequired: false}, {
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
