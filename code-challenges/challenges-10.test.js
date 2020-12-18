'use strict';

const { response } = require('express');

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Build a simple express server. Connect a '/hello' route that sends a greeting of your  choice. Connect a '/aboutme' route that sends a short bio about you to the front-end. Finally, connect a '/favoritefoods' route that sends an array to the front-end of your favorite foods. All other routes should respond with a status of 404.
------------------------------------------------------------------------------------------------ */

const createServer = () => {
  // Solution code here...

  var express = require('express');
  var app = express();
  
  
  app.get('/hello',sayHello);
  app.get('/aboutme',getAboutMe);
  app.get('/favoritefoods',getFavoriteFoods);
  app.get('*',sendError);

  function sayHello(req,res) {
    res.status(200).send('Hello there! My name is Dina. Welcome to my 10th code challenge.');
  }

  function getAboutMe(req,res) {
    res.status(200).send('About me: ');
  }

  function Food(str,cuisine) {
    this.name = str;
    this.cuisine = cuisine;
  }
  function getFavoriteFoods(req,res) {
    var myFavoriteFoods = [];
    myFavoriteFoods.push(new Food('Molokheya', 'Egyptian'));
    myFavoriteFoods.push(new Food('Mombar', 'Egyptian'));
    myFavoriteFoods.push(new Food('Hamam mahshy', 'Egyptian'));
    myFavoriteFoods.push(new Food('Duck confit', 'French'));
    res.json(myFavoriteFoods);
  }

  function sendError(req,res) {
    res.status(404).send('Sorry, we can\'t find that page!');
  }

  var server = app.listen(3301, function () {
    var port = server.address().port;
    //console.log('Example app listening at port', port);
  });
  return server;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */

const count = (target, input) => {
  // Solution code here...
  return input.reduce((accumulator,current) => {
    accumulator += current.filter(item => item===target).length;
    return accumulator;
  },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  // Solution code here...
  return input.reduce((accumulator,current) => {
    accumulator += current.reduce((acc,curr) => acc+curr)
    return accumulator;
  },0);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
  //console.log('original array of arrays: ' + input);
  var clearedArrays = input.map(individualArray => {
    //console.log('original array: ' + individualArray);
    var filteredArray= individualArray.filter(eachNumber => {
      if (typeof(eachNumber) !== 'string')
      return eachNumber%5===0;
    });
    //console.log('array with only numbers divisible by 5: ' + filteredArray);
    var poweredArray = filteredArray.map(num => Math.pow(2,num));
    //console.log('array with 2 to the power of each number: ' + poweredArray);
    return poweredArray;
  });
  //console.log(clearedArrays);
  return clearedArrays;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stetch Goal

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {

  const request = require('supertest');

  let server;

  beforeAll(function () {
    server = createServer();
  });

  afterAll(function () {
    server.close();
  });

  test('responds to /hello', function testHello(done) {
    request(server)
      .get('/hello')
      .expect(200, done);
  });

  test('responds to /aboutme', function testAboutMe(done) {
    request(server)
      .get('/aboutme')
      .expect(200, done);
  });

  test('responds to /favoritefoods', function testFavoriteFoods(done) {
    request(server)
      .get('/favoritefoods')
      .expect(200, done);
  });

  test('responds to /foo', function testNotFound(done) {
    request(server)
      .get('/foo')
      .expect(404, done);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 3', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 4', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

xdescribe('Testing challenge 5', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

xdescribe('Testing challenge 6', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
