const { handleAllVisits } = require('./visits');

describe('/visits handler functions', () => {
    let req, res, sendMock, statusMock;

    beforeEach(() => {
        sendMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({
            send: sendMock
        })
        req = {
            session: {}
        };

        res = {
            status: statusMock
        }
    });

    describe('handleAllVisits', () => {
        it('should normally return a 200 status', () => {
            handleAllVisits(req, res);
            expect(req.session.visits).toEqual(1);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.status).toHaveBeenCalledTimes(1);
            expect(sendMock).toHaveBeenCalledWith({ success: true, visits: 1 });
            expect(sendMock).toHaveBeenCalledTimes(1);
        });

        it('should return a 500 status if no session is found', () => {
            req = {};
            handleAllVisits(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.status).toHaveBeenCalledTimes(1);
            expect(sendMock).toHaveBeenCalledWith({ success: false, message: 'Unexpected Error'});
            expect(sendMock).toHaveBeenCalledTimes(1);
        })
    });
});