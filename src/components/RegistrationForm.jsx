import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Generate date options dynamically
  const generateDateOptions = () => {
    const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the selected month and year
    const options = [];
    for (let i = 1; i <= daysInMonth; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  // Generate month options
  const monthOptions = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  // Generate year options dynamically
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = currentYear - 100; i <= currentYear; i++) {
    yearOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-72px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Creating an account is fast and easy!</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
            <div className="flex gap-2">
              {/* Date Selection */}
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                disabled={!month || !year} // Disable if month or year is not selected
              >
                <option value="">Date</option>
                {month && year && generateDateOptions()} {/* Only generate options if both month and year are selected */}
              </select>
              
              {/* Month Selection */}
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Month</option>
                {monthOptions.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>

              {/* Year Selection */}
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Year</option>
                {yearOptions}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" name="gender" value="male" className="mr-1" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" className="mr-1" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="other" className="mr-1" /> Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Mobile Number*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Set 6 digit security PIN*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6 text-sm text-gray-600">
            I agree to the <a href="#" className="text-blue-500 hover:underline">PMSSS Terms of Service.</a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?  <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
