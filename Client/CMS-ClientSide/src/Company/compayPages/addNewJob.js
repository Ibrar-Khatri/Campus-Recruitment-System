import React,{ useState, useEffect } from 'react'
import '../compayPages/companyPages.css'
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import axios from 'axios'
import appSetting from '../../appSetting';




function AddNewJob() {

    useEffect(() => {
        setCompanyEmailId(localStorage.getItem('emailID'))
    }, [])

    let [title, setTitle] = useState('')
    let [category, setCategory] = useState('')
    let [description, setDescription] = useState('')
    let [companyEmailId, setCompanyEmailId] = useState('')


    function addNewJob(e) {
        e.preventDefault()
        let newJob = {
            title,
            category,
            description,
            companyEmailId,
        }
        if (companyEmailId) {
            axios.post(`${appSetting.serverBaseUrl}/company/add-new-job`, newJob)
                .then(success => {
                    console.log(success.data.createdJob)
                    // is kii madad sy form kii sare feilds empty hojaigee
                    e.target.reset()
                })
                .catch(err => {
                    // alert('unable to add new job in db')
                })
        }


    }

    return <>
        <div>
            <h1>Add New Job</h1>
            <div >
                <form onSubmit={addNewJob} className='newJob'>
                    <TextField
                        id="standard-textarea"
                        label="Title"
                        placeholder="Title"
                        multiline
                        onChange={e => setTitle(e.target.value)}
                    />
                    <TextField
                        id="standard-textarea"
                        label="Category"
                        placeholder="Category"
                        multiline
                        onChange={e => setCategory(e.target.value)}

                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Button
                        className='newJobButton'
                        variant="contained"
                        type="submit"
                        style={{ backgroundColor: "#190061", color: "white" }}
                    >Post Job</Button>
                </form>
            </div>

        </div>
    </>
}

export default AddNewJob;