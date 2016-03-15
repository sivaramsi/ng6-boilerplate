import template from './register.html';
import controller from './register.controller';
import './register.styl';

let registerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default registerComponent;
