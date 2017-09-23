angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('quiet-wave-69460.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $http.post('quiet-wave-69460.herokuapp.com/api/listings', listing);
      },

      read: function(id) {
        return $http.get('quiet-wave-69460.herokuapp.com/api/listings' + id);
      },

      update: function(id, listing) {
        return $http.put('quiet-wave-69460.herokuapp.com/api/listings' + id, listing);
      },

      delete: function(id) {
        return $http.delete('quiet-wave-69460.herokuapp.com/api/listings' + id);
      }
    };

    return methods;
  }
]);
