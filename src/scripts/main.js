'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.appendChild(ul);

  Object.keys(data).forEach(key => {
    const li = document.createElement('li');

    li.textContent = key;

    ul.appendChild(li);

    if (Object.keys(data[key]).length > 0) {
      return createTree(li, data[key]);
    }
  });
}

createTree(tree, food);