let UserFactory = function($http,SERVERURL) {
    "ngInject";
    let getProfile = () => {
        return $http.get(SERVERURL + 'users/me');
    }
    return { getProfile };
};

export default UserFactory;
