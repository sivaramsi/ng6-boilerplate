let APIInterceptor = function($rootScope, $injector, SERVERURL, $log) {
    "ngInject";
    let service = this;

    service.request = function(config) {
        let Auth = $injector.get('Auth');
        let access_token = Auth.getToken();
        if (access_token) {
            config.headers.authorization = access_token;
        }
        return config;
    };

    service.response = function(res) {
        if (res.config.url.indexOf(SERVERURL) === 0 && res.data.token) {
            let Auth = $injector.get('Auth');
            Auth.saveToken(res.data.token);
            $log.info("AUTH TOKEN SAVED");
        }
        // temp hack
        if (res.config.url.indexOf(SERVERURL) === 0) {
            return res.data;
        }
        return res;
    };

    return service;
}
APIInterceptor.$inject = ["$rootScope", "$injector", "SERVERURL", "$log"];
export default APIInterceptor;
