import React, {useState} from 'react';
const initialFormValues = {
  fullName: "",
  email: "",
  message:"",
  formSubmitted: false,
  success: false
}

const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});
  const validate = (fieldValues = values) => {
    // check if the form values are valid
  }


  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  }

  
  const handleFormSubmit = async (e) => {
    // this function will be triggered by the submit event
  }
  const formIsValid = () => {
    // this function will check if the form values and return a boolean value
  }
 return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  };
}

export default useFormControls;