import React from 'react';
import {useState, useEffect} from "react";

import {api} from "../api";

import {SubscriberList} from "../components/SubscriberList";

function Subscribers() {
const [subscribers, setSubscribers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [hasError, setHasError] = useState(false);
useEffect(()=>{
api.get("https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201")
.then(dbData=>{
    setSubscribers(dbData.records);
    setIsLoading(false);
})
.catch(error=>{
    console.log(error);
    setHasError(true);
})
},[])
    return (
        <div>
            {!isLoading && <SubscriberList subscribers={subscribers}/>}
        </div>
    );
}

export default Subscribers;