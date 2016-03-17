import NavbarModule from './navbar';
import AuthModule from '../auth/auth';
import UserModule from '../user/user';

import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';


describe('Navbar', () => {
  let $rootScope, makeController,AuthService,UserService;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(window.module(UserModule.name));

  beforeEach(window.module(AuthModule.name));
  beforeEach(window.module(function ($provide) {
    $provide.value('SERVERURL', {
        SERVERURL: 'test'
    });
  }));


  beforeEach(inject((_$rootScope_,Auth,User) => {
    $rootScope = _$rootScope_;
    AuthService = Auth;
    UserService = User;
    makeController = () => {
      return new NavbarController(AuthService,UserService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(NavbarTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NavbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavbarTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavbarController);
      });
  });
});
