let AuthFactory = function(SERVERURL, $http, $window, $state) {


    let login = (data) => {
        return $http.post(SERVERURL + 'login', data);
    }

    let signup = (data) => {
        return $http.post(SERVERURL + 'users', data);
    }

    let isAuthenticated = () => {
        var authToken = getToken();
        if (authToken) {
            return true;
        }
        return false;
    }

    let saveToken = (token) => {
        $window.localStorage['authToken'] = token;
        return $window.localStorage['authToken'];
    }

    let getToken = () => {
        return $window.localStorage['authToken'];
    }
    let removeToken = () => {
        return $window.localStorage.removeItem('authToken');
    }
    let parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse($window.atob(base64));
    }
    let logout = () => {
        this.removeToken();
        $state.go('login');
    }
    let isAuthed = () => {
        var token = this.getToken();
        if (token) {
            var params = this.parseJwt(token);
            return Math.round(new Date().getTime() / 1000) <= params.exp;
        } else {
            return false;
        }
    }

    return { login, signup,isAuthenticated, saveToken, getToken, removeToken, parseJwt, logout, isAuthed };
};

AuthFactory.$inject = ['SERVERURL', '$http', '$window', '$state'];
export default AuthFactory;
