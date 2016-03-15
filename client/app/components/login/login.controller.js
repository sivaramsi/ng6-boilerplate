class LoginController {
    constructor(Auth, $log, $state) {
        this.Auth = Auth;
        this.$log = $log;
        this.$state = $state;

        this.name = 'login';
        this.user = {
            emailId: '',
            password: ''
        };
    }

    login(isValid) {
        if (!isValid) {
            return;
        }
        this.loginLoading = true;
        this.Auth.login(this.user).then(() => {
            this.loginLoading = false;
            this.$state.go('home');
            this.$log.info("Auth Successful");
        }).catch((error) => {
            this.error = error.data.err;
            this.loginLoading = false;
            this.$log.error(error);
        });
    }

    // register(isValid) {
    //     if (!isValid) {
    //         return;
    //     }
    //     this.registerLoading = true;
    //     this.Auth.signup(this.user).then(function() {
    //         $log.info("registeration Successful");
    //         this.registerLoading = false;
    //         $state.go('home');
    //     }).catch(function(error) {
    //         this.registerLoading = false;
    //         $log.error(error);
    //     });
    // }
}

LoginController.$inject = ['Auth', '$log', '$state'];

export default LoginController;
