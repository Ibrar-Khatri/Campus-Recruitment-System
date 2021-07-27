import axios from "axios";
import React, { useEffect, useState } from "react";
import appSetting from "../../appSetting";
import "./studentPages.css";

function UserProfile() {
  function getPortfolio() {
    axios
      .post(`${appSetting.serverBaseUrl}/user/student-details`, {
        emailId: localStorage.getItem("emailID"),
      })
      .then((stuDetail) => {
        if (stuDetail.data.studentDetail.studentPortfolio) {
          setIsStuudentPortfolio(true);
          console.log("Student already post portfolio");
          let stuPortfolio = stuDetail.data.studentDetail.studentPortfolio;
          setFirstName(stuPortfolio.firstName);
          setLastName(stuPortfolio.lastName);
          setGender(stuPortfolio.gender);
          setDateOfBirth(stuPortfolio.dateOfBirth);
          setContactNumber(stuPortfolio.contactNumber);
          setCountry(stuPortfolio.country);
          setNationality(stuPortfolio.nationality);
          setExperience(stuPortfolio.experience);
          setQualification(stuPortfolio.qualification);
          setCurrentStatus(stuPortfolio.currentStatus);
        }
      })
      .catch((err) => {
        console.log("Unable to found student details");
      });
  }

  useEffect(() => {
    getPortfolio();
  });

  function addPortfolio(e) {
    e.preventDefault();

    let data = {
      studentPortfolio: {
        firstName,
        lastName,
        gender,
        dateOfBirth,
        contactNumber,
        country,
        nationality,
        experience,
        qualification,
        currentStatus,
      },
      emailId: localStorage.getItem("emailID"),
    };

    axios
      .post(`${appSetting.serverBaseUrl}/user/add-portfolio`, data)
      .then((success) => {
        if (success.data.status) {
          // alert("Data Successfully Send");
        }
      })
      .catch((err) => {
        console.log("Error in sending data");
      });
  }

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [gender, setGender] = useState("");
  let [dateOfBirth, setDateOfBirth] = useState("");
  let [contactNumber, setContactNumber] = useState("");
  let [country, setCountry] = useState("");
  let [nationality, setNationality] = useState("");
  let [experience, setExperience] = useState("");
  let [qualification, setQualification] = useState("");
  let [currentStatus, setCurrentStatus] = useState("");

  let [isStuudentPortfolio, setIsStuudentPortfolio] = useState(false);
  return (
    <>
      <h1 className="tableHeading">Add Profile</h1>
      <div className="userProfileForm">
        <form onSubmit={addPortfolio}>
          <div className="form-group">
            <label>
              First Name:
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            Gender
            <label>
              <input
                type="radio"
                name="gender"
                value="man"
                onClick={() => setGender("man")}
                checked={gender === "man"}
                required
              />
              Man
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={() => setGender("female")}
                checked={gender === "female"}
                required
              />
              Female
            </label>
          </div>
          <div className="form-group">
            <label>
              Date Of Birth
              <input
                type="date"
                placeholder="Date of Birth"
                className="form-control"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                required
              />
            </label>
          </div>
          <br />

          <div className="form-group">
            <label>
              Contact Number
              <input
                type="number"
                placeholder=" Personal / Gaurdian "
                className="form-control"
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
                required
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>
              Country
              <input
                type="text"
                placeholder=" Country Name "
                className="form-control"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                required
              />
            </label>
            <label>
              Nationality
              <input
                type="text"
                placeholder=" Nationality "
                className="form-control"
                onChange={(e) => setNationality(e.target.value)}
                value={nationality}
                required
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>
              Experience
              <input
                type="text"
                className="form-control"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
              />
            </label>
          </div>
          <br />

          <div className="form-group">
            <label>
              Qualification
              <select
                name="qualification"
                className="form-control"
                onChange={(e) => setQualification(e.target.value)}
                value={qualification}
                required
              >
                <option selected="true" disabled="disabled" value="">
                  Select Qualification
                </option>
                <option value="middle"> Middle </option>
                <option value="matric/O-level" className="dropdown-item">
                  Matric/O-Level
                </option>
                <option value="intermediate"> Intermediate </option>
                <option value="graduation"> Graduation </option>
                <option value="masters"> Masters </option>
                <option value="ms/m.phill"> MS/M.Phill </option>
                <option value="ph.d"> Ph.D </option>
              </select>
            </label>
            <label>
              Current Status
              <select
                name="currentStatus"
                className="form-control"
                onChange={(e) => setCurrentStatus(e.target.value)}
                value={currentStatus}
                required
              >
                <option selected="true" disabled="disabled" value="">
                  Current Status
                </option>
                <option value="student"> Student </option>
                <option value="houseWife"> Housewife </option>
                <option value="employed"> Employed </option>
                <option value="businessOwner"> Business Owner </option>
              </select>
            </label>
          </div>

          {isStuudentPortfolio ? (
            <button
              disabled
              type="submit"
              className="form-control"
              style={{
                backgroundColor: "#190061",
                color: "white",
                opacity: 0.5,
              }}
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="form-control"
              style={{ backgroundColor: "#190061", color: "white" }}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default UserProfile;
