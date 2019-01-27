const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var notString = 123;
        var valid = isRealString(notString);

        expect(valid).toBe(false);

    });

    it('should reject string with only spaces', () => {
        var spaceString = '   ';
        var valid = isRealString(spaceString);

        expect(valid).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var str = ' asd ads     ';
        var valid = isRealString(str);

        expect(valid).toBe(true);
    });

});