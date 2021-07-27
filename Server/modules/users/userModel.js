const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: { type: String, uinque: true },
  password: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
  studentPortfolio: {
    firstName: String,
    lastName: String,
    gender: String,
    dateOfBirth: String,
    contactNumber: String,
    country: String,
    nationality: String,
    experience: String,
    qualification: String,
    currentStatus: String,
  },
});

const userModel = new mongoose.model("users", userSchema);

module.exports.signUpWithDetailsInDB = (userDetails) => {
  return new Promise((resolve, reject) => {
    let userInstance = new userModel(userDetails);
    userInstance.save((err, userCreated) => {
      if (err) {
        console.log("Unable to add new user in DB");
        return reject(err);
      }
      resolve(userCreated);
    });
  });
};

module.exports.findUserInDB = (query) => {
  return new Promise((resolve, reject) => {
    userModel.findOne(query, (err, userDetails) => {
      if (err) {
        console.log("User Cannot be registered in DB");
        return reject(err);
      }
      resolve(userDetails);
    });
  });
};

module.exports.getCompaniesListByCategory = (category) => {
  return new Promise((resolve, reject) => {
    userModel.find(category, (err, companiesListFound) => {
      if (err) {
        console.log("Unable to get companies list from DB");
        return reject(err);
      }
      resolve(companiesListFound);
    });
  });
};

module.exports.getStudentsListByCategory = (category) => {
  return new Promise((resolve, reject) => {
    userModel.find(category, (err, studentListFound) => {
      if (err) {
        console.log("Unable to get student list from DB");
        return reject(err);
      }
      resolve(studentListFound);
    });
  });
};

module.exports.addPortfolioInDB = (query, updates) => {
  return new Promise((resolve, reject) => {
    userModel
      .updateOne(query, updates)
      .then((portfolio) => {
        resolve(portfolio);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.findStudentDetailsFromDB = (query) => {
  return new Promise((resolve, reject) => {
    userModel.findOne(query, (err, studentDetails) => {
      if (err) {
        console.log("Student Cannot be found");
        return reject(err);
      }
      console.log(">>>>" + studentDetails);
      resolve(studentDetails);
    });
  });
};

module.exports.deleteUserById = (query) => {
  return new Promise((resolve, reject) => {
    userModel.deleteOne(query, (err, userDeleted) => {
      if (err) {
        console.log("Unable to delete user from database");
        reject(err);
      }
      resolve(userDeleted);
    });
  });
};
