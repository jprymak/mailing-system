import React, {useState, useEffect} from 'react';
import Loader from "react-loader-spinner";

import { useParams } from "react-router-dom";
import {api} from "../api";

function UserInfo(props) {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

useEffect(()=>{
    api.get(`https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201/${userId}`)
        .then(dbData => {
            setUserData(dbData.fields);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setHasError(true);
        })
}, [])

return (
    <div>
        {isLoading && <Loader type="TailSpin" color="#3498db" width={60} height={60}/>}
        {userData && <p>{userData.Name} {userData.Email}</p>}
        {hasError && <p>Failed to load data</p>}
    </div>
);
}

export default UserInfo;