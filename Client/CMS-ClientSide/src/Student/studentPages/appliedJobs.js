import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./studentPages.css";
import appSetting from "../../appSetting";

function AppliedJobs() {
  function getListOfAppliedJobsList() {
    axios
      .post(`${appSetting.serverBaseUrl}/student/applied-jobs-list`, {
        emailId: localStorage.getItem("emailID"),
      })
      .then((success) => {
        setAppliedJobsList(success.data.appliedJob);
      })
      .catch((err) => {
        // alert("Applied Jobs List Cannot Found Successfully");
      });
  }

  let [appliedJobsList, setAppliedJobsList] = useState([]);

  useEffect(() => {
    getListOfAppliedJobsList();
  }, []);

  let serialNo = 1;
  return (
    <>
      <h1 className="tableHeading">Applied Jobs</h1>
      <table className="table companyList">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Job Title</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobsList.map((appliedJob) => {
            return (
              <>
                <tr>
                  <th scope="row" style={{ color: "black" }}>
                    {serialNo++}
                  </th>
                  <td>{appliedJob.title}</td>
                  <td>{appliedJob.companyEmailId}</td>
                  <td>
                    <Button color="primary">Delete</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default AppliedJobs;
