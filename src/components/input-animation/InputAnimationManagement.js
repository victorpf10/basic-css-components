import { useState } from 'react';
import InputAnimation from './InputAnimation';

const firstInput = {
    name: 'firstName',
    textLabel: 'First Name',
    type: 'text',
  };
  const lastInput = {
    name: 'lastName',
    textLabel: 'last Name',
    type: 'text',
  };
  
  const defaultFormFields = {
    firstName: '',
    lastName: '',
  }
const InputAnimationManagement = () => {
    const [formInputs, setFormInputs] = useState(defaultFormFields);
    const {firstName, lastName} = formInputs;
  
    const handleChange = (e) => {
      setFormInputs({...formInputs, [e.target.name]: e.target.value});
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', backgroundColor: '#222'}}>
            <InputAnimation inputName={firstInput.name} value={firstName} textLabel={firstInput.textLabel} type={firstInput.type} handleInput={handleChange}/>
            <InputAnimation inputName={lastInput.name} value={lastName} textLabel={lastInput.textLabel} type='password'  handleInput={handleChange}/>
        </div>
    )
}

export default InputAnimationManagement