'use strict';
const repeatedWord = require('../repeated-word');

describe('Repeated Word', () => {

  it('Can return the correct result', () => {
    var string = 'Once upon a time, there was a brave princess who...';
    var result = repeatedWord(string);
    expect(result).toEqual('a');
  });

  it('Can return the correct result when the word is repeated with diferent case (capitals vs small letters)', () => {
    var string = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    var result = repeatedWord(string);
    expect(result).toEqual('it');
  });

  it('Can return an empty string if there are no repeats', () => {
    var string = 'it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    var result = repeatedWord(string);
    expect(result).toEqual('it');
  });

  it('Can return an empty string if the sentence is empty', () => {
    var string = 't was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    var result = repeatedWord(string);
    expect(result).toEqual('summer');
  });
});
