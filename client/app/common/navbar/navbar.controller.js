class NavbarController {
  constructor(Auth, User) {
    this.name = 'navbar';
    this.Auth = Auth;
    User.getProfile().then((data) => {
      console.log("user data" + data);
      this.user = data;
    });
  }

  logout() {
    this.Auth.logout();
  }
}
NavbarController.$inject = ['Auth', 'User'];

export default NavbarController;
