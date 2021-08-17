// increment the visits on session if present and sets it to 1 if not present
function addToSession(session) {
    if (!session) {
        throw new Error('Session Not Available');
    }
    session.visits = session.visits ? session.visits + 1 : 1;
}

module.exports = {
    addToSession
}