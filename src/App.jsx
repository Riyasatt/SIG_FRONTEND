import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm.jsx';  // Import your Login component
import RegistrationForm from './components/RegistrationForm.jsx';  // Import your Registration (Sign Up) component
import HomePage from './pages/Home/HomePage.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Form from './pages/Form/Form.jsx';
import About from './pages/About.jsx';
import Eligibility from './pages/Eligibility.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Default route */}
        <Route path="/about" element={<About />} />  
        <Route path="/eligibility" element={<Eligibility />} />  
        <Route path="/signin" element={<SignInForm />} />  {/* Default route for Sign In */}
        <Route path="/signup" element={<RegistrationForm />} />  {/* Route for Sign Up */}
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
