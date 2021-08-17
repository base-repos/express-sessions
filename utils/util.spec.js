const util = require('./util');


describe('addToSession', () => {
    let session;

    beforeEach(() => {
        session = {};
    });

    it('should add a "visits" key to session if it doesn\'t already exist', () => {
        util.addToSession(session);
        expect(session.visits).toEqual(1);
    });

    it('should increment the "visits" key in session if it already exists', () => {
        session.visits = 10;
        util.addToSession(session);
        
        expect(session.visits).toEqual(11);
    });

    /**
     * The function should definitely handle this case so as to not crash, but if 
     * undefined or null is being passed into the function when a Session object
     * should be passed in, it means something is wrong with the code elsewhere
     */
    it('should throw an error ifif undefined or null are passed in', () => {
        expect(() => { util.addToSession(undefined); }).toThrowError('Session Not Available');
    });
})