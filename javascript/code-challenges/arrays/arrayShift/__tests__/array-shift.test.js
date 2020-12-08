const insertShiftArray = require('../array-shift');

describe('code challenge', () => {
    it('for array with odd number of items, add the new value to right of old middle', () => {
        return expect(insertShiftArray([1,2,3], 5)).toStrictEqual([1,2,5,3]);
    });

    it('should add item to empty array', () => {
        return expect(insertShiftArray([], 5)).toStrictEqual([5]);
    });

    it('for array with even number of items, add the new value to exactly the middle', () => {
        return expect(insertShiftArray([1,2,3,4], 5)).toStrictEqual([1,2,5,3,4]);
    });

    it('for array with only 1 item, add to end', () => {
        return expect(insertShiftArray([1], 5)).toStrictEqual([1,5]);
    });

    it('for array with non-numbers, add to middle as expected', () => {
        return expect(insertShiftArray(['blah', {name: 'dina'}, null, 'foo', {text:'bar'}], 5)).toStrictEqual(['blah', {name: 'dina'}, null, 5, 'foo', {text:'bar'}]);
    });
})