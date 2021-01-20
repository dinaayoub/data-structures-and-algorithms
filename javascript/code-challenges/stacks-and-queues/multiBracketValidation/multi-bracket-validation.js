'use strict';
const Stack = require('../stack');

var stack = new Stack();

function multiBracketValidation(input) {

  //fail first
  if (!input) return true; //or do we want to throw an error?

  var characterArray = input.split('');

  for (let i = 0; i < characterArray.length; i++) {
    if (characterArray[i] === '[' || characterArray[i] === '(' || characterArray[i] === '{') {
      stack.push(characterArray[i]);
    }
    else if (characterArray[i] === ']' || characterArray[i] === ')' || characterArray[i] === '}') {
      var isCorrectParen = checkPrevious(characterArray[i]);
      if (!isCorrectParen) { return false; }
    }
  }
  if (stack.isEmpty()) return true;
  else return false;
}

function checkPrevious(char) {
  if (stack.isEmpty()) return false;
  if (char === ']') { return stack.pop() === '['; }
  else if (char === '}') { return stack.pop() === '{'; }
  else if (char === ')') { return stack.pop() === '('; }
}

module.exports = multiBracketValidation;
