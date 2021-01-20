'use strict';
const Animal = require('./animal');
class Dog extends Animal{
  constructor(name,weight,color,breed){
    super(name,weight,color,breed);
    this.type = 'Dog';
  }
}
module.exports = Dog;
