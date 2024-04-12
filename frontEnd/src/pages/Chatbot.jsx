import React from 'react';
import Header from '../components/Header';

function Chatbot() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-[#111f32] py-4 flex flex-col justify-center px-4 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-4xl font-bold text-blue-500">Get in touch</h1>
              <p className="mt-2 text-gray-600 tracking-wider">We'd love to hear from you! Let's get in touch</p>
            </div>
            <div className="mt-6">
              <form onSubmit={(e)=>e.preventDefault()}>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                  <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your first name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                  <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your last name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="PhoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                  <input type="PhoneNumber" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                  <textarea id="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Chatbot;