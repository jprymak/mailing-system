import React, { useState, useEffect } from 'react';


import { api } from "../api";
import { createCampaign } from "../utils"
import { sendEmail } from "../api/mail";


function Campaign(props) {
    const [data, setData] = useState({ subject: "", content: "" });
    const [subscribers, setSubscribers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        api.get("https://api.airtable.com/v0/appfrBxpRB3whj4LA/Table%201")
            .then(dbData => {
                setSubscribers(dbData.records);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setHasError(true);
            })
    }, [])

    const handleSaveCampaign = () => {
        const { subject, content } = data;
        api.post("https://api.airtable.com/v0/apptajSBIyxWDEYjS/Table%201", createCampaign(subject, content, "Draft"))
            .catch(error => {
                console.log(error);
            }
            )
        setData({ subject: "", content: "" })
    }
    const handleSendCampaign = () => {
        const { subject, content } = data;
        subscribers.forEach(subscriber=>{
            const templateParams = {
                subject: subject,
                content: content,
                email: subscriber.fields.Email,
                name: subscriber.fields.Name
            };
            console.log(templateParams)
            sendEmail(templateParams).then((response) => {
                api.post("https://api.airtable.com/v0/apptajSBIyxWDEYjS/Table%201", createCampaign(subject, content, "Sent")).then()
                    .catch(error => {
                        console.log(error);
                    }
                    )
            }, function (error) {
                console.log('FAILED...', error);
            });
        })

        setData({ subject: "", content: "" })
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} value={data.subject} type="text" id="subject" name="subject" placeholder="Subject" />
            <textarea onChange={handleInputChange} value={data.content} id="content" name="content"></textarea>
            <button onClick={() => handleSaveCampaign()}>SAVE</button>
            <button onClick={() => handleSendCampaign()}>SEND</button>
        </form>
    );
}

export default Campaign;