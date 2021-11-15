import React from 'react';


function SubscriberList({subscribers}) {
    console.log(subscribers)
    return (
        <div>
            <ul>
                {subscribers.map(({fields,id})=><li key={id}>{fields.Name}; {fields.Email}</li>)}
            </ul>
        </div>
    );
}

export default SubscriberList;