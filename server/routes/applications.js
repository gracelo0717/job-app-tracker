const express = require('express');
const applicationController = require('../controllers/applicationsController');
const applicationsRouter = express.Router();

applicationsRouter.post('/submitApp', applicationController.createApp, (req, res) => {
    return res.status(200).json(res.locals.createdApp);
});

applicationsRouter.get('/:id', applicationController.getApp, (req, res) => {
    return res.status(200).json(res.locals.getApp);
});


// applicationsRouter.patch('/:id',applicationController.getApp, (req, res) => {
//     return res.status(200).json(res.locals.getApp)
// });

// applicationRouter.delete('/signup', userController.hashing, userController.createUser, (req, res) => {

// })

module.exports = applicationsRouter;