import React from 'react';
import {ErrorMessage,useField} from 'formik'

export const Textfield =({lable, ...props}) =>{
   
    const [field,meta]=useField(props)
    return(
        <div className="mb-4">
            <lable htmlFor={field.name}>{lable}</lable>

            <input 
               className={`form-control shadow-none ${meta.touched && meta.error && 'is-inValid'}`}
               {...field} {...props}
               autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error"/ >

        </div>
    )

}