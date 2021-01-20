'use strict';

const leftJoin = require('../left-join');
const HashTable = require('../../hash-table');

describe('Left Join', () => {

  const hashTable1 = new HashTable(1024);
  const hashTable2 = new HashTable(1024);

  const hashTable3 = new HashTable(2);
  const hashTable4 = new HashTable(2);

  hashTable1.add('fond', 'enamored');
  hashTable1.add('wrath', 'anger');
  hashTable1.add('diligent', 'employed');
  hashTable1.add('outfit', 'garb');
  hashTable1.add('guide', 'usher');

  hashTable2.add('fond', 'averse');
  hashTable2.add('wrath', 'delight');
  hashTable2.add('diligent', 'idle');
  hashTable2.add('guide', 'follow');
  hashTable2.add('flow', 'jam');

  hashTable3.add('fond', 'enamored');
  hashTable3.add('wrath', 'anger');
  hashTable3.add('diligent', 'employed');
  hashTable3.add('outfit', 'garb');
  hashTable3.add('guide', 'usher');

  hashTable4.add('fond', 'averse');
  hashTable4.add('wrath', 'delight');
  hashTable4.add('diligent', 'idle');
  hashTable4.add('guide', 'follow');
  hashTable4.add('flow', 'jam');

  it('Can left join a standard input where both hashtables have keys the other doesn\'t', () => {

    const array = leftJoin(hashTable1, hashTable2);

    expect(array).toStrictEqual([
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight']
    ]);
  });

  it('Can still perform the left join correctly if there are hash collisions', () => {
    const array = leftJoin(hashTable3, hashTable4);
    expect(array).toStrictEqual([
      ['guide', 'usher', 'follow'],
      ['diligent', 'employed', 'idle'],
      ['wrath', 'anger', 'delight'],
      ['outfit', 'garb', null],
      ['fond', 'enamored', 'averse']
    ]);
  });

  it('Can perform a left join if the second hashtable is empty', () => {
    const array = leftJoin(hashTable1, new HashTable(1024));
    expect(array).toStrictEqual([
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['fond', 'enamored', null],
      ['guide', 'usher', null],
      ['wrath', 'anger', null]
    ]);
  });

  it('Can return an empty array if the first hashtable is empty', () => {
    const array = leftJoin(new HashTable(1024), hashTable2);
    expect(array).toStrictEqual([]);
  });
});
