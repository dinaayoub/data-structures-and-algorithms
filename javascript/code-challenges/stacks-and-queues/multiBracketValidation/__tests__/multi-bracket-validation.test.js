'use strict';

const mbv = require('../multi-bracket-validation');

/*
[x] Can successfully respond with true to strings with no brackets
[x] Can successfully respond with true to strings with balanced brackets
[x] Can successfully respond with false to strings with unbalanced brackets
*/
describe('Multi Bracket Validation', () => {

  it('Can successfully respond with true to strings with no brackets', () =>{
    expect(mbv()).toBe(true);
    expect(mbv('')).toBe(true);
    expect(mbv(undefined)).toBe(true);
  });

  it('Can successfully respond with true to strings with balanced brackets', () => {
    expect(mbv('(hello ((())){world}, [how(are){you}])')).toBe(true);
    expect(mbv('{}')).toBe(true);
    expect(mbv('{}(){}')).toBe(true);
    expect(mbv('(){}[[]]')).toBe(true);
    expect(mbv('{}{Code}[Fellows](())')).toBe(true);
  });

  it('Can successfully respond with false to strings with unbalanced brackets', ()=> {
    expect(mbv('[({}]')).toBe(false);
    expect(mbv('(](')).toBe(false);
    expect(mbv('{')).toBe(false);
    expect(mbv('} ')).toBe(false);
    expect(mbv('[} ')).toBe(false);
  });

});
