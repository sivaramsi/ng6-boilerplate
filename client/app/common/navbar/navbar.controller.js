class NavbarController {
    constructor(Auth) {
        this.name = 'navbar';
        this.Auth = Auth;
    }

    logout() {
        this.Auth.logout();
    }
}
NavbarController.$inject = ['Auth'];

export default NavbarController;
