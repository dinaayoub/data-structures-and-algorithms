'use strict';
const Animal = require('./animal');
class Cat extends Animal{
  constructor(name,weight,color,breed){
    super(name,weight,color,breed);
    this.type = 'Cat';
  }
}
module.exports = Cat;
