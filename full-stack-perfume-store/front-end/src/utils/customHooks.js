import React,{useState} from "react";


export const useFormHook = () => {
    const [formInputs, setFormInputs] = useState({});
   
    const onInputChange = (event) => {
        console.log(event) 
      setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
    };
  
    // const onSubmit = (message) => {
    //   console.log(message);
    // };
  
    return {
      formInputs,
      onInputChange,
      setFormInputs
    };
  };
  