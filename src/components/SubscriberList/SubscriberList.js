import React from 'react';
import PropTypes  from "prop-types";

import {Link} from "react-router-dom";



function SubscriberList({subscribers}) {
    
 
    return (
        <div>
            <ul>
                {subscribers.map(({fields,id, createdTime})=><li key={id}><Link to={`/subscribers/${id}`}>{fields.Name}; {fields.Email}; {createdTime}</Link></li>)}
            </ul>
        </div>
    );
}

export default SubscriberList;


SubscriberList.propTypes={
    subscribers: PropTypes.array.isRequired
}
