angular.module('kodkollektivet.factories', [])

    // TODO: Make Project factory generic to allow next/previous
    .factory('Project', function($resource){
        return $resource('http://api.kodkollektivet.se/project/', {}, {
	    query: { method: "GET", isArray: false }
	});
    })

    .factory('Contributor', function($resource){
        return $resource('http://api.kodkollektivet.se/contributor/');
    })

    .factory('Language', function($resource){
        return $resource('http://api.kodkollektivet.se/language/');
    })

    .factory('ProCon', function($resource){
        return $resource('http://api.kodkollektivet.se/procon/');
    })

    .factory('ProFra', function($resource){
        return $resource('http://api.kodkollektivet.se/profra/');
    })

    .factory('ProLan', function($resource){
        return $resource('http://api.kodkollektivet.se/prolan/');
    })

    .factory('Contact', function($resource) {
        return $resource('http://api.kodkollektivet.se/contact/', {}, {
            'save': {
                method: 'POST',
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            }
        });
    })

    .factory('SharedData', function() {
        var selectedProject = {};

        return {
            setProject: function(project){
                selectedProject = project;
            },
            getProject: function(){
                return selectedProject;
            }
        };
    });



