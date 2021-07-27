const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    companyEmailId: String,
    createdAt: { type: Date, default: Date.now }

})

const jobModel = new mongoose.model('jobs', jobSchema);



module.exports.addNewJobWithDetailsInDB = (jobDetails) => {
    return new Promise((resolve, reject) => {
        let jobInstance = new jobModel(jobDetails)

        jobInstance.save((err, jobCreated) => {
            if (err) {
                console.log('Unable to create new job in DB')
                return reject(err)
            }
            resolve(jobCreated)
        })
    })

}

module.exports.getJobsListOfEachCompnayByCompanyEmailId = (query) => {
    return new Promise((resolve, reject) => {

        jobModel.find(query, (err, jobsFound) => {
            if (err) {
                console.log('Unable to Find job of this company ' + query.companyEmailId)
                return reject(err)
            }
            resolve(jobsFound)
        })
    })

}
module.exports.getListOfAllJobsFromDB = (query) => {
    return new Promise((resolve, reject) => {

        jobModel.find(query, (err, jobsFound) => {
            if (err) {
                console.log('Unable to Find jobs ')
                return reject(err)
            }
            resolve(jobsFound)
        })
    })

}

module.exports.deleteJobById = (query) => {
    return new Promise((resolve, reject) => {
        jobModel.deleteOne(query, (err, jobDeleted) => {
            if (err) {
                console.log('Unable to delete from database')
                reject(err)
            }
            resolve(jobDeleted)
        })
    })
}
