import Banner from "@/components/Banner";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  GraduationCap,
  FileText,
  Users,
  Laptop,
  IndianRupee,
} from "lucide-react";
import { Link } from "react-router-dom";
import Why from "./Why";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-grow">
        {/* <section className="bg-gradient-to-r from-orange-100 via-white to-green-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prime Minister's Special Student Scheme
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Empowering India's Future Through Education
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/signin">
                <Button className="bg-customAccent hover:bg-customAccent">
                  Apply Now
                </Button>
              </Link>

              <Link to='/eligibility'>
                <Button
                  variant="outline"
                  className=" hover:text-customAccent text-customAccent  bg-transparent hover:bg-transparent rounded-none border-customAccent px-6 border-r"
                >
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </section> */}
        <Banner />
        <Why />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
              Scheme Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                icon={<IndianRupee className="h-12 w-12 text-orange-500" />}
                title="Comprehensive Coverage"
                description="The Scholarship covers both Course fees and maintenance fees, providing full financial support to eligible students."
              />
              <BenefitCard
                icon={<Laptop className="h-12 w-12 text-green-500" />}
                title="Direct Payment of Course Fees"
                description="Course Fee is paid directly to the Institute, covering tuition fees, university fees, exam fees, library fees, internet fees, and more."
              />
              <BenefitCard
                icon={<GraduationCap className="h-12 w-12 text-blue-500" />}
                title="Maintenance Fee Support"
                description="Maintenance fee is paid to the student in 2 equal installments, covering hostel fees, books, mess charges, and other essential expenses."
              />
            </div>
            
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
              How to Apply
            </h3>
            <div className="max-w-3xl mx-auto">
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg text-gray-700 ">
                  Check your eligibility. &nbsp;
                  <Link
                    to="/eligibility"
                    className="underline text-customAccent"
                  >
                    Check eligibility
                  </Link>
                </li>
                <li className="text-lg text-gray-700">
                  Gather all necessary documents. &nbsp;
                  <Link
                    to="/eligibility"
                    className="underline text-customAccent"
                  >
                    See Required Document
                  </Link>
                </li>
                <li className="text-lg text-gray-700">
                  Fill out the online application form. &nbsp;
                  <Link to="/form" className="underline text-customAccent">
                    Fill Form
                  </Link>
                </li>
                <li className="text-lg text-gray-700">
                  Upload required documents
                </li>
                <li className="text-lg text-gray-700">
                  Submit your application and note down the application number
                </li>
                <li className="text-lg text-gray-700">
                  Track your application status using the provided application.
                  &nbsp;
                  <Link
                    to="/track-application"
                    className="underline text-customAccent"
                  >
                    Check Status
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
