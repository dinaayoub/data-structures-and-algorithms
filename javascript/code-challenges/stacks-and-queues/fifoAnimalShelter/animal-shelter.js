'use strict';
const Queue = require('../queue');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.type === 'Cat') {
      this.cats.enqueue(animal);
    }
    else if (animal.type === 'Dog') {
      this.dogs.enqueue(animal);
    }
  }

  dequeue(preference) {
    if (preference === 'Dog') {
      return this.dogs.dequeue();
    } else if (preference === 'Cat') {
      return this.cats.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
