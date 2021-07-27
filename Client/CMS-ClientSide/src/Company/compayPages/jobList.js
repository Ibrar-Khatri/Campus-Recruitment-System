import React,{ useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './companyPages.css';
import appSetting from '../../appSetting';

function JobsList() {


    function listOfJobs() {
        console.log(localStorage.getItem('emailID'))
        axios.post(`${appSetting.serverBaseUrl}/company/list-job`, { companyEmailId: localStorage.getItem('emailID') })
            .then(success => {
                setJobList(success.data.jobsList)
            })
            .catch(err => {
                // alert('Jobs Cannot Found')
                console.log(err)
            })
    }
    // listOfJobs()


    function sendRequestToDeleteJob(id) {
        axios.delete(`${appSetting.serverBaseUrl}/company/delete-job/${id}`)
            .then(success => {
                console.log(success)
                listOfJobs()
            })
            .catch(err => {
                console.log(err)
            })

        axios.delete(`${appSetting.serverBaseUrl}/student/delete-applied-user/${id}`)
            .then(success => {
                console.log(success)
            })
            .catch(err => {
                console.log(err)
            })
    }



    let [jobList, setJobList] = useState([])
    useEffect(() => {
        listOfJobs()
    }, [])


    console.log(jobList)

    return <>
        <h1>Created Jobs</h1>
        <div className='accordian'>
            {
                    jobList.map(job => {
                        return <>
                            <Card className='jobCard' >
                                <Card.Header>{job.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{job.category}</Card.Title>
                                    <Card.Text>{job.description}</Card.Text>
                                    <Button variant="primary" onClick={() => { sendRequestToDeleteJob(job._id) }}>Delete Job</Button>
                                </Card.Body>
                            </Card >


                        </>
                    })

            }

        </div>
    </>
}

export default JobsList;













