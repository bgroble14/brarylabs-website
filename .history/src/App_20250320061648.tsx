import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./components/ui/navigation-menu";
import { ModeToggle } from "./components/mode-toggle";

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
      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 group">
        Contact Us
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardFooter>
  </Card>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <div className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center group">
                <img 
                  src="/BraryLabs_v2_Color.png" 
                  alt="BraryLabs Logo" 
                  className="h-20 w-auto transform group-hover:scale-110 transition-transform duration-300 mix-blend-multiply dark:mix-blend-screen"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#about">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#contact">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

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
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-16">
              <Section
                title="Integrated Library System Software"
                description="A comprehensive solution for managing your library's resources, patrons, and operations efficiently."
              />
              <Section
                title="Professional Services"
                description="Expert consultation and support to help you optimize your library management processes. We specialize in data analytics and comprehensive reporting solutions."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-24 border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/BraryLabs_v2_Color.png" 
                  alt="BraryLabs Logo" 
                  className="h-20 w-auto mix-blend-multiply dark:mix-blend-screen"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md">
                Making library management simple and efficient for the modern world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-gray-100">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#guides" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-gray-100">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;