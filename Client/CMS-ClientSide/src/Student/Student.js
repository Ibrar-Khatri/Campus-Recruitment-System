import React from "react";
import "./student.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Home from "./studentPages/home";
import Company from "./studentPages/company";
import AppliedJobs from "./studentPages/appliedJobs";
import UserProfile from "./studentPages/profile";
import Footer from "../footer/footer";
import image from "../images/bruce-mars-S8ffHr_dxHo-unsplash.jpg";

export default function Student() {

  let history = useHistory()

  function logOut() {
    localStorage.setItem('emailID', '')
    history.push('/')

  }

  return (
    <>
      <div className="header">
        <div className="heading1">
          <h1> CAMPUS MANAGEMENT SYSTEM </h1>
          <Button className='logoutButton' onClick={logOut}>Logout</Button>
        </div>
        <div className="category">
          <Link to="/student" className="linkColors">
            Home
            </Link>
          <Link to="/student/company-names" className="linkColors">
            Companies
            </Link>
          <Link to="/student/applied-jobs" className="linkColors">
            {" "}
              Applied Jobs{" "}
          </Link>
          <Link to="/student/my-profile" className="linkColors">
            My profile{" "}
          </Link>
        </div>

        <div>
          <img
            width="100%"
            height="800px"
            src={image}
            alt="Web_Profile_Image "
          />
        </div>
        <Switch>
          <Route path="/student" exact>
            <Home />
          </Route>
          <Route path="/student/company-names">
            <Company />
          </Route>
          <Route path="/student/applied-jobs">
            <AppliedJobs />
          </Route>
          <Route path="/student/my-profile">
            <UserProfile />
          </Route>
        </Switch>

        <Footer />
      </div>
    </>
  );
}
