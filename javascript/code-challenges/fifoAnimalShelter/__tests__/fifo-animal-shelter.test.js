'use strict';

const AnimalShelter = require('../animal-shelter');
const Cat = require('../cat');
const Dog = require('../dog');

describe('Animal Shelter',() => {
  var animalShelter = new AnimalShelter();
  var cats = [];
  var dogs = [];
  let i = 0;

  //Make a bunch of animals to use for our tests.
  while (i<5){
    cats[i] = new Cat('cat'+i, Math.floor(Math.random()*20),'black','shorthair domestic');
    dogs[i] = new Dog('dog'+i,Math.floor(Math.random() * 70),'brown','labrador');
    i++;
  }

  it('can enqueue a cat', ()=>{
    animalShelter.enqueue(cats[0]);
    expect(animalShelter.dequeue('Cat').name).toStrictEqual('cat0');
  });

  it('won\'t queue an animal that isn\'t a cat or a dog',() =>{
    animalShelter.enqueue({type:'Iguana',name:'Harry',weight:1.3,color:'grey', breed:'Australian Iguana'});
    expect(animalShelter.dequeue('Iguana')).toBe(null);
  });

  it('can enqueue a bunch of cats and dogs', () => {
    expect (() => {
      animalShelter.enqueue(cats[1]);
      animalShelter.enqueue(dogs[0]);
      animalShelter.enqueue(cats[2]);
      animalShelter.enqueue(dogs[1]);
      animalShelter.enqueue(dogs[2]);
      animalShelter.enqueue(cats[3]);
      animalShelter.enqueue(dogs[3]);
      animalShelter.enqueue(dogs[4]);
      animalShelter.enqueue(cats[4]);
    }).not.toThrow();
  });

  it('can dequeue a bunch of cats and dogs in the correct order', () => {
    expect(animalShelter.dequeue('Cat').name).toStrictEqual('cat1');
    expect(animalShelter.dequeue('Dog').name).toStrictEqual('dog0');
    expect(animalShelter.dequeue('Cat').name).toStrictEqual('cat2');
    expect(animalShelter.dequeue('Dog').name).toStrictEqual('dog1');
    expect(animalShelter.dequeue('Cat').name).toStrictEqual('cat3');
    expect(animalShelter.dequeue('Dog').name).toStrictEqual('dog2');
    expect(animalShelter.dequeue('Cat').name).toStrictEqual('cat4');
    expect(animalShelter.dequeue('Dog').name).toStrictEqual('dog3');
    expect(animalShelter.dequeue('Dog').name).toStrictEqual('dog4');
  });
});
