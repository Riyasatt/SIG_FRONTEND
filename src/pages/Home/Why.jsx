
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function Why() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-primary-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
          Prime Minister's Special Scholarship Scheme
        </h1>
        <p className="mt-6 text-xl text-gray-600">
          Empowering students from Jammu & Kashmir and Ladakh to pursue higher education in top institutions across India.
        </p>
        <div className="mt-10">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Why Apply for PMSSS?</h2>
              <ul className="text-left space-y-2">
                {[
                  "Full tuition fee coverage",
                  "Annual maintenance allowance",
                  "One-time settlement allowance",
                  "Access to top institutions across India",
                  "Career guidance and support"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10">
          <Link to="/form" className="">
            <Button size="lg" className="text-lg px-8 py-3 rounded-xl bg-customAccent hover:bg-customAccent ">
              Apply Now
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Eligibility: Students from Jammu & Kashmir and Ladakh who have completed 12th standard
        </p>
      </div>
    </section>
  )
}