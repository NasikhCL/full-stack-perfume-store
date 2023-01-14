import React from 'react';
export default function Login() {
  const FormField = ({ type, name, placeholder, className }) => {
    return (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} h-[6px] p-3 py-4 text-lg bg-gray-50 roboto-regular border-2 rounded-lg focus:outline-primary-600 border-2 border-primary-300 m-3 shadow-md placeholder:font-hand placeholder:text-2xl`}
      />
    );
  };

  const logo = (
    <img className="w-20 h-20 rounded-full mx-2"  src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"/>  
  );

  return (
    <>
      <div className="flex flex-col items-center justify-cenetr w-fit h-fit p-4 bg-white shadow-xl rounded-xl">
        {logo}
        <form className="flex flex-col items-center justify-between w-11/12 max-w-[400px] ">
          <FormField
            type="email"
            name="email"
            placeholder="email address"
            className="w-full"
          />
          <FormField
            type="password"
            name="password"
            placeholder="password"
            className="w-full"
          />
          
          <button className='py-2 px-5 bg-gray-200 border rounded-lg hover:bg-gray-600'>SignUp</button>
        </form>
      </div>
    </>
  );
}