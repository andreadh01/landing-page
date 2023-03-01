import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import inputs from '../inputs';

function Register(props) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info);
    navigate('/success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-sm py-16 px-10 rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-[#4c4c47] text-center mb-4">
          Receive an email with our course!
        </h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            required={input.required}
            name={input.name}
            label={input.label}
            onChange={setInfo}
          />
        ))}
        <div className="flex justify-center">
          <Button type="submit" text="Register" />
        </div>
      </div>
    </form>
  );
}

export default Register;
