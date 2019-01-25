var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate correct message object', () => {
        var from = 'grey';
        var text = 'test text';
        var message = generateMessage(from,text);
        
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });

});