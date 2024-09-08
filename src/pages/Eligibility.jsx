import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Eligibility = () => {
  return (
    <div className="container mx-auto mt-20 min-h-[calc(100vh-72px)]">
      <Card>
        <CardHeader>
          <CardTitle>Eligibility Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Students should belong to Jammu & Kashmir or Ladakh Union
              Territories.
            </li>
            <li>
              Candidates must have passed Class 12th/ equivalent exam from J&K
              and Ladakh Board or any other recognized board in India.
            </li>
            <li>
              Students should have secured a minimum of 60% marks in their 12th
              standard or equivalent examination (55% for SC/ST students).
            </li>
            <li>Family income should be below Rs. 8 lakhs per annum.</li>
            <li>
              Age limit: Students should not be more than 21 years old as of 1st
              July of the admission year (23 years for students of PwD
              category).
            </li>
            <li>
              Students who have already taken admission in any course or college
              outside J&K and Ladakh are not eligible.
            </li>
          </ul>
          
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Link to="/apply">
          <Button
            size="lg"
            className="text-lg px-8 py-3 bg-customAccent hover:bg-customAccent rounded-xl"
          >
            Apply for PMSSS
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Eligibility;
