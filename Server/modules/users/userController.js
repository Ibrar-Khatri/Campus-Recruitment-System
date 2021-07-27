const userModel = require("./userModel");

module.exports.signUpWithDetails = (req, res) => {
  userModel
    .signUpWithDetailsInDB(req.body)
    .then((createdUser) => {
      res.send({
        status: true,
        created: true,
        createdUser: createdUser,
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        created: false,
      });
    });
};

module.exports.signInWithEmailIdAndPwd = (req, res) => {
  userModel
    .findUserInDB({ emailId: req.body.emailId })
    .then((userDetails) => {
      if (!userDetails) {
        res.send({
          status: false,
          found: false,
          errMessage: "No user found with matching email ID",
        });
      }
      if (userDetails.password !== req.body.password) {
        res.send({
          status: false,
          found: false,
          errMessage: "Invalid Password",
        });
        return;
      }
      res.send({ status: true, found: true, userInfo: userDetails });
    })
    .catch((err) => {
      console.log("Unable to find user ID");
      res.send({
        status: false,
        found: false,
        pwdMatched: false,
      });
    });
};

module.exports.addPortfolio = (req, res) => {
  //   console.log(
  //     "Requedted data ===> " + JSON.stringify(req.body.studentPortfolio)
  //   );
  //   console.log("Requedted data ===> " + JSON.stringify(req.body.emailId));
  let query = { emailId: req.body.emailId };
  let update = {
    $set: {
      studentPortfolio: req.body.studentPortfolio,
    },
  };

  userModel
    .addPortfolioInDB(query, update)
    .then((stuPortfolio) => {
      console.log("Student Portfolio add successfully");
      res.send({ status: true, created: true, stuPortfolio: stuPortfolrio });
    })
    .catch((err) => {
      console.log("Unable to add Student Portfolio", err);
      res.send({
        status: false,
        created: false,
      });
    });
};
module.exports.getStudentDetails = (req, res) => {
  // console.log('>>>> ' + req.body.emailId)
  // res.send({
  //         status: false,
  //         found: false,
  //       });
  userModel
    .findStudentDetailsFromDB({ emailId: req.body.emailId })
    .then((stuDetail) => {
      console.log("Student details found successfully");
      res.send({ status: true, found: true, studentDetail: stuDetail });
    })
    .catch((err) => {
      console.log("Unable to find student detials", err);
      res.send({
        status: false,
        found: false,
      });
    });
};

module.exports.getCompaniesList = (req, res) => {
  userModel
    .getCompaniesListByCategory(req.body)
    .then((companiesList) => {
      console.log("Companies List found Successfully");
      res.send({
        status: true,
        found: true,
        companiesList: companiesList,
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        found: false,
      });
    });
};

module.exports.getStudentsList = (req, res) => {
  userModel
    .getStudentsListByCategory(req.body)
    .then((studentsList) => {
      res.send({
        status: true,
        found: true,
        StudentsList: studentsList,
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        found: false,
      });
    });
};

module.exports.requestToDeletUser = (req, res) => {
  let id = req.params.id;
  userModel
    .deleteUserById({ _id: id })
    .then((userDeleted) => {
      console.log("USer deleted successfully");
      res.send({
        status: true,
        deleted: true,
        deletedUser: userDeleted,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        status: false,
        deleted: false,
      });
    });
};
