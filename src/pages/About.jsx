import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Users, FileText, HelpCircle } from "lucide-react"
import {Link} from "react-router-dom"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-customAccent text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Prime Minister's Special Scholarship Scheme (PMSSS)</h1>
          <p className="mt-2 text-xl">Empowering students from Jammu & Kashmir and Ladakh</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-4 ">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
            <TabsTrigger value="eligibility" className="flex-1">Eligibility</TabsTrigger>
            <TabsTrigger value="benefits" className="flex-1">Benefits</TabsTrigger>
            <TabsTrigger value="process" className="flex-1">Process</TabsTrigger>
            <TabsTrigger value="faq" className="flex-1">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="text-customAccent">About PMSSS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Prime Minister's Special Scholarship Scheme (PMSSS) is an initiative by the Government of India to provide educational opportunities to the youth of Jammu & Kashmir and Ladakh. This scheme aims to build capacities of the youth in these regions by educating, enabling, and empowering them to compete in the normal course.
                </p>
                <p>
                  PMSSS offers 5,000 scholarships per annum to pursue undergraduate studies outside the Union Territories of Jammu & Kashmir and Ladakh in institutions across the country.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="border-customAccent">
                    <CardContent className="flex flex-col items-center p-6">
                      <BookOpen className="h-12 w-12 mb-4 text-customAccent" />
                      <h3 className="text-lg font-semibold text-center ">Educational Empowerment</h3>
                      <p className="text-center mt-2">Providing access to quality education across India</p>
                    </CardContent>
                  </Card>
                  <Card className="border-customAccent">
                    <CardContent className="flex flex-col items-center p-6">
                      <Users className="h-12 w-12  mb-4 text-customAccent" />
                      <h3 className="text-lg font-semibold text-center">Capacity Building</h3>
                      <p className="text-center mt-2">Developing skills and knowledge for future leaders</p>
                    </CardContent>
                  </Card>
                  <Card className="border-customAccent">
                    <CardContent className="flex flex-col items-center p-6">
                      <GraduationCap className="h-12 w-12 text-customAccent mb-4" />
                      <h3 className="text-lg font-semibold text-center">Career Opportunities</h3>
                      <p className="text-center mt-2">Opening doors to diverse career paths</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="eligibility">
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Students should belong to Jammu & Kashmir or Ladakh Union Territories.</li>
                  <li>Candidates must have passed Class 12th/ equivalent exam from J&K and Ladakh Board or any other recognized board in India.</li>
                  <li>Students should have secured a minimum of 60% marks in their 12th standard or equivalent examination (55% for SC/ST students).</li>
                  <li>Family income should be below Rs. 8 lakhs per annum.</li>
                  <li>Age limit: Students should not be more than 21 years old as of 1st July of the admission year (23 years for students of PwD category).</li>
                  <li>Students who have already taken admission in any course or college outside J&K and Ladakh are not eligible.</li>
                </ul>
                <p className="font-semibold mt-4">Note: Eligibility criteria may be subject to change. Please refer to the official AICTE website for the most up-to-date information.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>Scholarship Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>The PMSSS offers comprehensive financial support to selected students:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Academic Fee: Up to Rs. 1.30 Lakh per annum.</li>
                  <li>Maintenance Allowance: Rs. 1.00 Lakh per annum.</li>
                  <li>One-time Settlement Allowance: Rs. 20,000 to cover initial settlement expenses.</li>
                </ul>
                <p className="font-semibold mt-4">Additional Benefits:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to top institutions across India.</li>
                  <li>Exposure to diverse cultural experiences.</li>
                  <li>Career guidance and support throughout the course.</li>
                  <li>Networking opportunities with students from across the country.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <h3 className="font-semibold">Registration</h3>
                    <p>Visit the official AICTE website and register for PMSSS.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Online Application</h3>
                    <p>Fill out the online application form with accurate personal and academic details.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Document Upload</h3>
                    <p>Upload all required documents, including academic certificates, income proof, and domicile certificate.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Counselling</h3>
                    <p>Attend the counselling session for seat allocation in your preferred course and college.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Admission Confirmation</h3>
                    <p>Confirm your admission in the allotted institution within the specified timeframe.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Scholarship Disbursement</h3>
                    <p>Once admitted, the scholarship amount will be disbursed directly to the institution and the student.</p>
                  </li>
                </ol>
                <p className="font-semibold mt-4">Important: Keep checking the official website for updates on application dates and procedures.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    q: "Can I apply for PMSSS if I've already taken admission in a college in J&K or Ladakh?",
                    a: "No, PMSSS is specifically for students who wish to study outside J&K and Ladakh."
                  },
                  {
                    q: "Is there any reservation for different categories under PMSSS?",
                    a: "Yes, there are reservations for SC, ST, and PwD categories as per government norms."
                  },
                  {
                    q: "Can I choose any course or college under PMSSS?",
                    a: "You can choose from a wide range of courses and colleges approved under the scheme. The list is available on the official AICTE website."
                  },
                  {
                    q: "What happens if I don't perform well academically after getting the scholarship?",
                    a: "Students are expected to maintain good academic performance. Continued poor performance may result in the scholarship being discontinued."
                  },
                  {
                    q: "Can I change my course or college after admission?",
                    a: "Generally, changes are not allowed. In exceptional cases, you may need to contact the AICTE PMSSS cell for guidance."
                  }
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Link href="/apply">
            <Button size="lg" className="text-lg px-8 py-3 bg-customAccent hover:bg-customAccent rounded-xl">
              Apply for PMSSS
            </Button>
          </Link>
        </div>
      </main>

      
      
    </div>
  )
}