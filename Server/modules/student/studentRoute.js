const express = require('express');
const router = express.Router();
const studentController = require('./studentController')

router.post('/apply-job', studentController.addAppliedJobDetails)

router.post('/applied-job', studentController.getListOfAppliedJobDetails)

router.post('/applied-jobs-list', studentController.getListOfAppliedJobDetails)

router.post('/applied-user', studentController.getListOfAppliedJobDetails)

router.delete('/delete-applied-user/:id', studentController.requestToDeletAppliedUser)

module.exports = router