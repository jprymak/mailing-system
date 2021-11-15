import React, {useState} from 'react';


import {AddSubscriberForm} from '../components/AddSubscriberForm';
import {createRecord} from "../utils";
import api from "../api";

function AddSubscriber(props) {
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data) =>{
        const {name, email} = data;
        api.post("https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201", createRecord(name, email))
        .catch(error=>{
            console.log(error);
            setHasError(true);
        })
    }

    return (
        <div>
           <AddSubscriberForm onSubmit={onSubmit}/>
        </div>
    );
}

export default AddSubscriber;