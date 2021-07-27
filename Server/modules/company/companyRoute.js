const express = require('express');
const router = express.Router();
const companyController = require('./companyController')

router.post('/add-new-job', companyController.addNewJobWithDetails)
router.post('/list-job', companyController.jobsListOfEachCompany)
router.get('/list-job', companyController.getListOfAllJobs)

router.delete('/delete-job/:id', companyController.requestToDeletJob)

module.exports = router;