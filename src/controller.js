import model from '../js_modules/model.js';
import view from '../js_modules/view.js';

// console.log(model.tester());
// console.log(view.tester());
const controller = (function (m, v) {
  return console.log(m.tester(), v.tester());
})(model, view);
