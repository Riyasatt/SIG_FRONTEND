import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useLocation } from 'react-router-dom'

const Footer = () => {

      const location = useLocation()

  return (
      <footer className={`bg-gray-800 text-white py-8 ${(location.pathname === '/signin' || location.pathname === '/signup') && "hidden"}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">About the Scheme</h4>
            <p className="text-sm text-gray-400">
              The Prime Minister's Special Student Scheme aims to support and
              empower students across India, providing financial aid and
              resources for higher education.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Eligibility Criteria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Application Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Important Information</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Document Verification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Scholarship Disbursement
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mb-2"
            />
            <Button className="w-full bg-green-500 hover:bg-green-600">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2023 Prime Minister's Special Student Scheme. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer