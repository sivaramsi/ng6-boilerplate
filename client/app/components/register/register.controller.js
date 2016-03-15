class RegisterController {
    constructor(Auth, $log, $state) {
        this.name = 'register';
        this.Auth = Auth;
        this.$log = $log;
        this.$state = $state;
    }

    register(isValid) {
        if (!isValid) {
            return;
        }
        this.registerLoading = true;
        this.Auth.signup(this.user).then(() => {
            this.$log.info("registeration Successful");
            this.registerLoading = false;
            this.$state.go('home');
        }).catch((error) => {
            this.registerLoading = false;
            this.$log.error(error);
        });
    }

}

RegisterController.$inject = ['Auth', '$log', '$state'];
export default RegisterController;
