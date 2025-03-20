import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from "./components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <Card className="w-full h-full transition-all duration-300 hover:shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300">
        {title}
      </CardTitle>
      <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
        {description}
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 group">
        <a href="/contact">
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900 dark:text-gray-100">Modern Library Management</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
              Streamline your library operations with our cutting-edge software solution.
              Designed for the modern librarian.
            </p>

            {/* Service Sections */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-16">
              <Section
                title="Integrated Library System Software"
                description="A comprehensive solution for managing your library's resources, patrons, and operations efficiently."
              />
              <Section
                title="Professional Services"
                description="Expert consultation and support to help you optimize your library management processes and workflows."
              />
              <Section
                title="Reporting & Analytics"
                description="Transform your library data into actionable insights with our comprehensive reporting and analytics solutions."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;