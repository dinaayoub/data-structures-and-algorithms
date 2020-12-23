const Cat = require('./cat');
const Dog = require('./dog');
const AnimalShelter = require('./animal-shelter');

const homewardPet = new AnimalShelter();

var bendy = new Cat('Bendy',9.3,'black','shorthair domestic');
var pointy = new Cat('Pointy',7.2,'black','shorthair domestic');
var foofoo = new Dog('foofoo',20,'white','husky');
var strawberry = new Dog('strawberry',70,'black','great dane');

homewardPet.enqueue(bendy);

console.log(homewardPet.dequeue());
console.log(homewardPet.dequeue('Cat').name);

homewardPet.enqueue(foofoo);
homewardPet.enqueue(strawberry);
homewardPet.enqueue(pointy);
console.log(homewardPet.dequeue('Dog').name);
console.log(homewardPet.dequeue('Cat').name);
console.log(homewardPet.dequeue('Dog').name);
