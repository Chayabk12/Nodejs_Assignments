module.exports = (app) => {
    const CustomerDetails = require('../controllers/controllers.js');
    app.post('/user', CustomerDetails.create);
    app.get('/user', CustomerDetails.findAll);
    app.get('/user/:CustomerDetailsId', CustomerDetails.findOne);
    app.put('/user/:CustomerDetailsId', CustomerDetails.update);
    app.delete('/user/:CustomerDetailsId', CustomerDetails.delete);
}
