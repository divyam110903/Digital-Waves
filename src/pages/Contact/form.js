import React from 'react';

function Form() {
  return (
    <div>
      <form className='flex flex-col space-y-10'>
        <h1 className="mb-5 text-4xl font-semibold text-primary">REQUEST A QUOTE</h1>
        <div className="flex space-x-10">
          <input
            type="text"
            placeholder="First name"
            className="w-full px-5 py-3 text-gray-500 rounded-lg bg-blue-50 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full px-5 py-3 text-gray-500 rounded-lg bg-blue-50 focus:outline-none"
          />
        </div>
        <div className="flex mt-5 space-x-10">
          <input
            type="text"
            placeholder="E-mail"
            className="w-full px-5 py-3 text-gray-500 rounded-lg bg-blue-50 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-5 py-3 text-gray-500 rounded-lg bg-blue-50 focus:outline-none"
          />
        </div>
        <div className="flex mt-5">
          <textarea
          rows={8}
            placeholder="Your message"
            className="w-full px-5 py-3 text-gray-500 rounded-lg bg-blue-50 focus:outline-none"
          />
        </div>
      </form>
      <br/>
      <div className="flex justify-center mt-5">
      <button className="py-2 text-xl text-white transition duration-200 rounded-full px-7 bg-gradient-to-b from-orange-500 to-orange-600 focus:ring-2 focus:ring-blue-400 hover:shadow-xl center">
Send A Message
</button>
</div>


    </div>
  );
}

export default Form;

