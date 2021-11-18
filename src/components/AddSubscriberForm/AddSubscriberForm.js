import React from 'react';
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Button from "../Button";

import "./index.css";

function AddSubscriberForm({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className="add-subscriber" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-header">Add subscriber</h2>
            <label htmlFor="name">Name: </label><input {...register("name", { required: "This field is required",  pattern: {
      value: /^[A-Z]/,
      message: 'Name must start with uppercase letter'
    } })} type="text" />
            {errors.name && <p>{errors.name.message}</p>}
            <label htmlFor="email">Email: </label><input {...register("email", { required: "This field is required", 
            pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: 'Email address is invalid'
    }
    })} type="email" />
    {errors.email && <p>{errors.email.message}</p>}
            <Button text="Add"/>
        </form>
    );
}

export default AddSubscriberForm;


AddSubscriberForm.propTypes={
    onSubmit: PropTypes.func.isRequired
}
