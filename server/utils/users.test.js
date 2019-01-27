const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;
    
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Ben',
            room: 'Palutena mains'
        }, {
            id: '2',
            name: 'Ally',
            room: 'Snake mains'
        }, {
            id: '3',
            name: 'Nairo',
            room: 'Palutena mains'
        }]


    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '231',
            name: 'Grey',
            room: 'Greninja mains'
        }

        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');

        expect(users.users).toEqual([ {
            id: '2',
            name: 'Ally',
            room: 'Snake mains'
        }, {
            id: '3',
            name: 'Nairo',
            room: 'Palutena mains'
        }]);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var user = users.removeUser('1132');

        expect(users.users).toEqual([{
            id: '1',
            name: 'Ben',
            room: 'Palutena mains'
        }, {
            id: '2',
            name: 'Ally',
            room: 'Snake mains'
        }, {
            id: '3',
            name: 'Nairo',
            room: 'Palutena mains'
        }]);
        expect(user).toNotExist();

    });


    it('should find user', () => {
        var user = users.getUser('1');

        expect(user).toEqual({
            id: '1',
            name: 'Ben',
            room: 'Palutena mains'
        });
    });

    it('should not find user', () => {
        var user = users.getUser('1132');

        expect(user).toNotExist();
    });

    it('should return names of palutena mains', () => {
        var userList = users.getUserList('Palutena mains');

        expect(userList).toEqual(['Ben','Nairo']);
    });

    it('should return names of snake mains', () => {
        var userList = users.getUserList('Snake mains');

        expect(userList).toEqual(['Ally']);
    });
});

