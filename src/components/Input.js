import React from 'react';
import PhoneInput from 'react-phone-input-2';

function Input(props) {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={props.name}
        >
          {props.label}
        </label>
      </div>
      <div className="md:w-2/3">
        {props.type === 'phone' ? (
          <PhoneInput
            specialLabel=""
            country={'mx'}
            onChange={(e) =>
              props.onChange((prev) => ({ ...prev, [props.name]: e }))
            }
            inputProps={{
              name: props.name,
              required: props.required,
              className:
                'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-[#4c4c47] leading-tight focus:outline-none focus:bg-white focus:border-[#edf3e9]',
            }}
          />
        ) : (
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-[#4c4c47] leading-tight focus:outline-none focus:bg-white focus:border-[#edf3e9]"
            name={props.name}
            type={props.type}
            id={props.name}
            required={props.required}
            onChange={(e) =>
              props.onChange((prev) => ({
                ...prev,
                [props.name]: e.target.value,
              }))
            }
          />
        )}
      </div>
    </div>
  );
}

export default Input;
