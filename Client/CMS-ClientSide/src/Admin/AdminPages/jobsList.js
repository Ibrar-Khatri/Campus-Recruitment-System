import React, { useEffect, useState } from 'react'
import appSetting from '../../appSetting';
import axios from 'axios';
import { Button } from 'react-bootstrap'

export default function JobsList() {

    function listOfJobs() {
        axios.get(`${appSetting.serverBaseUrl}/company/list-job`)
            .then(success => {
                setJobList(success.data.jobsList)

            })
            .catch(err => {
                console.log(err)
            })
    }

    function sendRequestToDeleteJob(id) {
        axios.delete(`${appSetting.serverBaseUrl}/company/delete-job/${id}`)
            .then(success => {
                console.log(success)
                listOfJobs()

            })
            .catch(err => {
                console.log(err)
            })
    }

    let [jobList, setJobList] = useState([])

    useEffect(() => {
        listOfJobs()
    }, [])

    let serialNo = 1;
    return <>
        <h1>Jobs List</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobList.map(job => {
                        return <>
                            <tr>
                                <th scope="row" style={{ color: 'black' }}>{serialNo++}</th>
                                <td>{job.title}</td>
                                <td>{job.category}</td>
                                <td>{job.companyEmailId}</td>
                                <td>
                                    <Button onClick={() => { sendRequestToDeleteJob(job._id)}}>Delete</Button>
                                </td>
                            </tr>
                            </>
                    })
                }
                {/* <tr>
                    <th scope="row" style={{ color: 'black' }}>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>
                        <Button>Delete</Button>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </>
}