const mongoose = require("mongoose");

module.exports.dbConnector = () => {
  mongoose.connect(
    "mongodb+srv://admin_01:admin_01@cluster0.lbv0t.mongodb.net/cms?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  let db = mongoose.connection;

  db.once("error", (err) => {
    console.log("Error in connection to Database");
    console.log(err);
  });
  db.once("open", () => {
    console.log("Connected to Database Succesfully");
  });
};
