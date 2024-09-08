import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Empower Your Education",
    subtitle: "Prime Minister's Special Student Scheme",
    description: "For students of Jammu and Kashmir",
    image: p1,
    alt: "Student with digital devices",
  },
  {
    title: "Comprehensive Coverage",
    subtitle: "Course and Maintenance Fees",
    description: "Full financial support for your academic journey",
    image: p2,
    alt: "Students in a classroom",
  },
  {
    title: "Direct Institute Payment",
    subtitle: "Hassle-Free Fee Management",
    description: "We handle the paperwork, you focus on learning",
    image: p3,
    alt: "University building",
  },
  {
    title: "Student Maintenance Support",
    subtitle: "Beyond Tuition Coverage",
    description: "Financial aid for hostel, books, and living expenses",
    image: p4,
    alt: "Students in a library",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
      const intervalId = setInterval(nextSlide, 5000)
  
      return () => clearInterval(intervalId)
    }, [nextSlide])

  return (
    <div className="relative bg-indigo-600 overflow-hidden h-[500px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 h-full">
        <div className={`flex flex-col md:flex-row items-center w-full justify-between h-full`}>
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full px-4 md:px-0 h-full transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : index === (currentSlide - direction + slides.length) % slides.length
                  ? "translate-x-full opacity-0"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col md:justify-center h-full">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {slide.title}
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
                  {slide.subtitle}
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-6">
                  {slide.description}
                </p>
                <Link to="/form">
                  <Button className="bg-background text-primary hover:bg-primary-foreground">
                    Apply Now
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 hidden md:flex items-center overflow-hidden  absolute top-0 right-2 h-full">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-[500px] h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-12 z-10 h-1 rounded ${
              index === currentSlide ? "bg-indigo-200" : "bg-indigo-400"
            }`}
          ></div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute z-10 left-4 top-[90%] md:top-1/2 -translate-y-1/2 bg-white/40 border-none text-indigo-600 hover:bg-indigo-100"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute z-10 right-4 top-[90%] md:top-1/2 -translate-y-1/2 bg-white/40 border-none text-indigo-600 hover:bg-indigo-100"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute inset-0 bg-indigo-600 opacity-75"></div>
      <div
        className="hidden sm:block absolute inset-y-0 h-full w-full"
        aria-hidden="true"
      >
        <div className="relative h-full">
          <svg
            className="absolute right-0 h-full w-48 text-indigo-700 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
    </div>
  );
}
