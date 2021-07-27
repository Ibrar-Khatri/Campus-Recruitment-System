const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dbHelper = require("./DBHelper/dbHelper");
const userRoute = require('./modules/users/userRoute')
const studentRoute = require('./modules/student/studentRoute')
const companyRoute = require('./modules/company/companyRoute')

const port = 5050;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/user', userRoute)
app.use('/company', companyRoute)
app.use('/student', studentRoute)


app.listen(port, (err) => {
  if (err) {
    console.log("Unable to Start Server at " + port);
    console.log(err);
    return;
  }
  console.log("Server Started Successfully at " + port);

  dbHelper.dbConnector();
});
