import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import inputs from '../inputs';
import emailjs from '@emailjs/browser';

function Register(props) {
  const form = useRef();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    ...props.answers,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(info);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        info,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('Correo enviado');
        },
        (error) => {
          console.log(error.text);
        }
      );
    navigate('/success');
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
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
