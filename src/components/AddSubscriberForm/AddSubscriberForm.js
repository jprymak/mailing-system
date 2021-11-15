import React from 'react';
import { useForm } from "react-hook-form";

function AddSubscriberForm({ onSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button>Add</button>
        </form>
    );
}

export default AddSubscriberForm;