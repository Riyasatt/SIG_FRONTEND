import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm.jsx';  // Import your Login component
import RegistrationForm from './components/RegistrationForm.jsx';  // Import your Registration (Sign Up) component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />  {/* Default route for Sign In */}
        <Route path="/signup" element={<RegistrationForm />} />  {/* Route for Sign Up */}
      </Routes>
    </Router>
  );
};

export default App;
