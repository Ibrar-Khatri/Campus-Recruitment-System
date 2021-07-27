const studentModel = require('./studentModel');


module.exports.addAppliedJobDetails = (req, res) => {

    studentModel.addAppliedJobDetailsInDB(req.body)
        .then(appliedJobDetailsAdded => {
            console.log('user apply successfully')
            res.send({
                status: true, applied: true, appliedJobDetails: appliedJobDetailsAdded
            })
        })
        .catch(err => {
            console.log('Applied job details cannot be add')
            res.send({
                status: false, applied: false
            })
        })
}



module.exports.getListOfAppliedJobDetails = (req, res) => {
    studentModel.getListOfAppliedJobByQuery(req.body)
        .then(appliedJobDetailsFound => {
            console.log('Apply job details found successfully')
            res.send({
                status: true, found: true, appliedJob: appliedJobDetailsFound
            })
        })
        .catch(err => {
            console.log('Applied job details cannot be Found')
            res.send({
                status: false, found: false
            })
        })
}

module.exports.requestToDeletAppliedUser = (req, res) => {
    let id = req.params.id;
    studentModel.deleteAppliedUserByJobId({ jobId: id })
        .then(appliedUserDeleted => {
            console.log('User deleted successfully')
            res.send({
                status: true, deleted: true, deletedAppliedUSer: appliedUserDeleted
            })
        })
        .catch(err => {
            console.log(err)
            res.send({
                status: false, deleted: false
            })
        })
}