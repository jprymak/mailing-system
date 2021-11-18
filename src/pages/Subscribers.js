import React from 'react';
import {useState, useEffect} from "react";
import Loader from "react-loader-spinner";

import {api} from "../api";

import {SubscriberList} from "../components/SubscriberList";

function Subscribers() {
const [subscribers, setSubscribers] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
api.get("https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201")
.then(dbData=>{
    setSubscribers(dbData.records);
    setIsLoading(false);
})
.catch(error=>{
    console.log(error);
})
},[])
    return (
        <div>
            {isLoading && <Loader type="TailSpin" color="#3498db" width={60} height={60}/>}
            {!isLoading && <SubscriberList subscribers={subscribers}/>}
        </div>
    );
}

export default Subscribers;