const express = require('express');
const router = express.Router();
const userController = require('./userController');



router.post('/signup', userController.signUpWithDetails)
router.post('/signin', userController.signInWithEmailIdAndPwd)
router.post('/add-portfolio', userController.addPortfolio)
router.post('/student-details', userController.getStudentDetails)


//yeh request Student k page sy aaie haii
router.post('/company-list', userController.getCompaniesList)

//yeh request admin k page sy aaie hai k page sy aaie haii
router.post('/students-list', userController.getStudentsList)


router.delete('/remove-student/:id', userController.requestToDeletUser)
router.delete('/remove-company/:id', userController.requestToDeletUser)

module.exports = router;