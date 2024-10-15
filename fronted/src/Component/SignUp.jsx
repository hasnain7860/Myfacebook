import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform sign-up logic, like sending form data to an API
    
    const res = await fetch("http://localhost:3000/auth/signup",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    console.log(res)
    
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">Create a new account</h2>
      <p className="text-center text-gray-600 mb-6">It's quick and easy.</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="New password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <label className="block text-gray-600">Birthday</label>
        <input
          type="date"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
        <div className="flex items-center justify-between mt-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              className="mr-2"
              required
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              className="mr-2"
              required
            />
            Female
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              className="mr-2"
              required
            />
            Other
          </label>
        </div>
        <div className="flex justify-between items-center mt-6 space-x-2">
          <button
            type="submit"
            className="w-1/2 bg-green-500 text-white font-semibold p-3 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
          <Link to="/login" className="w-1/2 bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 text-center">
          <button
            type="button"
          >
            Login
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;