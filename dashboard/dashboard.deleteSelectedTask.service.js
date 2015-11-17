(function() {
    'use strict';
    angular.module('userTaskModule')
            .factory('deleteSelectedTask', deleteSelectedTask);

    function deleteSelectedTask($http, $q) {
        return {
            remove: function(selectedIds, email) {
                for (var i = 0; i <= selectedIds.length; i++) {
                    var baseApi = 'server/';
                    var def = $q.defer();
                    $http({
                        url: baseApi + "deleteTask.php",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        transformRequest: function(obj) {
                            var str = [];
                            for (var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data: {taskId: selectedIds[i], email: email},
                    }).success(function(data) {
                        def.resolve(data);
                    }).error(function() {
                        def.reject('500');
                    });

                }
                return def.promise;
            }
        };
    }



})();