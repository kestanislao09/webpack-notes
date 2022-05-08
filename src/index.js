// import _ from 'lodash';
import myName from './myName';
import './style.css';
import Doggo from './raincoat.png'
// Uses CSV and XML loaders
import Data from './data.xml'
import Notes from './data.csv'
// Uses custom parsers
import toml from './data.toml';
import yaml from './data.yaml';
import json from './datajson5';

// Logs data using custom parsers
console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.crew);

console.log(json.title);
console.log(json.owner.bio);

function component() {
  const element = document.createElement('div');

  // Using the myName function
  element.textContent = myName('Zorojuro');
  element.classList.add('hello');

  // Add an image that we imported above
  const aPicture = new Image();
  aPicture.src = Doggo;
  element.appendChild(aPicture);

  // Use imported data in things
  console.log(Data);
  console.log(Notes);

  // // Lodash, imported up top by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
