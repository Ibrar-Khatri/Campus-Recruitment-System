const compnayModel = require('./companyModel');

module.exports.addNewJobWithDetails = (req, res) => {

    compnayModel.addNewJobWithDetailsInDB(req.body)
        .then(createdJob => {
            console.log('New job created')
            res.send({
                status: true, created: true, createdJob: createdJob
            })
        })
        .catch(err => {
            console.log('New job cannot be created')
            res.send({
                status: false, created: false
            })
        })
}


module.exports.jobsListOfEachCompany = (req, res) => {
    console.log(req.body.companyEmailId)
    compnayModel.getJobsListOfEachCompnayByCompanyEmailId({ companyEmailId: req.body.companyEmailId })
        .then(jobsList => {
            console.log('Job found successfully')
            res.send({
                status: true, found: true, jobsList: jobsList
            })
        })
        .catch(err => {
            console.log('Jobs cannot be found')
            res.send({
                status: false, found: false
            })
        })
}


module.exports.getListOfAllJobs = (req, res) => {
    compnayModel.getListOfAllJobsFromDB({})
        .then(jobsList => {
            console.log('Jobs found successfully')
            res.send({
                status: true, found: true, jobsList: jobsList
            })
        })
        .catch(err => {
            console.log('Jobs cannot be found')
            res.send({
                status: false, found: false
            })
        })
}

module.exports.requestToDeletJob = (req, res) => {
    let id = req.params.id;
    compnayModel.deleteJobById({ _id: id })
        .then(jobDeleted => {
            console.log('Job deleted successfully')
            res.send({
                status: true, deleted: true, deletedJob: jobDeleted
            })
        })
        .catch(err => {
            console.log(err)
            res.send({
                status: false, deleted: false
            })
        })
}


