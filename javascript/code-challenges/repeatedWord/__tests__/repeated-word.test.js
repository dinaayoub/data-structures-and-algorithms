'use strict';
const repeatedWord = require('../repeated-word');

describe('Repeated Word', () => {

  it('Can return the correct result', () => {
    var string = 'Once upon a time, there was a brave princess who...';
    var result = repeatedWord(string);
    expect(result).toEqual('a');
  });
});
