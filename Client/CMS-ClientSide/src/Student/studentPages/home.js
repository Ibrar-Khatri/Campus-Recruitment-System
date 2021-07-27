import React,{ useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import appSetting from '../../appSetting'
import './studentPages.css';

function Home() {

    function listOfJobs() {
        axios.get(`${appSetting.serverBaseUrl}/company/list-job`)
            .then(success => {
                setJobList(success.data.jobsList)

            })
            .catch(err => {
                console.log(err)
            })
    }

    function appliedJobsList() {
        axios.post(`${appSetting.serverBaseUrl}/student/applied-job`, { emailId: localStorage.getItem('emailID') })
            .then(success => {
                console.log(success.data.appliedJob)
                setAppliedJobs(success.data.appliedJob)
            })
            .catch(err => {
                console.log(err)
            })
    }

    let [jobList, setJobList] = useState([])
    let [appliedJobs, setAppliedJobs] = useState([])
    console.log(appliedJobs)
    useEffect(() => {
        listOfJobs()
        appliedJobsList()
    }, [])

    function applyNow(job) {
        if (localStorage.getItem('emailID')) {
            let appliedJobDetails = {
                emailId: localStorage.emailID,
                jobId: job._id,
                title: job.title,
                companyEmailId: job.companyEmailId,
            }
            axios.post(`${appSetting.serverBaseUrl}/student/apply-job`, appliedJobDetails)
                .then(success => {
                    setAppliedJobs(success.data.appliedJobDetails)
                    appliedJobsList()

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return <>
        <div className='home'>
            {
                jobList.map(job => {
                    return <>
                        <Card className='jobCard'>
                            <Card.Header>{job.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{job.category}</Card.Title>
                                <Card.Text>{job.description}</Card.Text>
                                <Button
                                    type='button'
                                    disabled={Array.isArray(appliedJobs) && appliedJobs.some(apliedJobDetails => apliedJobDetails.jobId === job._id)}
                                    variant="primary" onClick={() => { applyNow(job) }}>
                                    Apply Now
                                </Button>
                            </Card.Body>
                        </Card >
                    </>
                })
            }
        </div>
    </>
}



export default Home;