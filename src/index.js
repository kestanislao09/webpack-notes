// import _ from 'lodash';
import myName from './myName';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Using the myName function
  element.textContent = myName('Zorojuro');
  element.classList.add('hello');

  // // Lodash, imported up top by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
