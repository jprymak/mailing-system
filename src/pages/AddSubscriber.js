import React, {useState} from 'react';


import {AddSubscriberForm} from '../components/AddSubscriberForm';
import {createSubscriberRecord} from "../utils";
import {api} from "../api";

function AddSubscriber(props) {
    const [hasError, setHasError] = useState(false);

    const onSubmit = (data) =>{
        const {name, email} = data;
        api.post("https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201", createSubscriberRecord(name, email))
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