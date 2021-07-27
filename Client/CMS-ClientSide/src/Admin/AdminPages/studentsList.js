import React,{ useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import appSetting from '../../appSetting';
import axios from 'axios';

export default function StudentsList() {

    function getStudentsList() {
        axios.post(`${appSetting.serverBaseUrl}/user/students-list`, { category: 'student' })
            .then(success => {
                setStudentDetails(success.data.StudentsList)
            })
            .catch(err => {
                alert('Student list cannot be found')
            })
    }
    function sendRequestToDeleteStudent(id) {
        axios.delete(`${appSetting.serverBaseUrl}/user/remove-student/${id}`)
            .then(success => {
                getStudentsList()

            })
            .catch(err => {
                console.log(err)
            })
    }

    let [studentDetails, setStudentDetails] = useState([])

    useEffect(() => {
        getStudentsList()
    }, [])


    let serialNo = 1;
    return <>
        <h1>Registered Students</h1>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentDetails.map(student => {
                        return <>
                            <tr>
                                <th scope="row" style={{ color: 'black' }}>{serialNo++}</th>
                                <td>{student.firstName + ' ' + student.lastName}</td>
                                <td>{student.emailId}</td>
                                <td>
                                    <Button onClick={() => { sendRequestToDeleteStudent(student._id) }}>Delete</Button>
                                </td>
                            </tr></>
                    })
                }

            </tbody>
        </table>
    </>
}