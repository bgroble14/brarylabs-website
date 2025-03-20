import React from 'react';
import { ArrowRight, Library, BarChart3 } from 'lucide-react';

import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./components/ui/navigation-menu";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/BraryLabs_v2_Color.png" 
              alt="BraryLabs Logo" 
              className="h-12 w-auto"
            />
          </div>
          
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
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Modern Library Management <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-[700px] mx-auto">
            Streamline your library operations with our cutting-edge software solution.
            Designed for the modern librarian.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader>
              <Library className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">Integrated Library System Software</CardTitle>
              <CardDescription className="text-lg">
                A comprehensive solution for managing your library's resources, patrons, and operations efficiently.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full mt-4" variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="h-full">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle className="text-2xl">Professional Services</CardTitle>
              <CardDescription className="text-lg">
                Expert consultation and support to help you optimize your library management processes. We specialize in data analytics and comprehensive reporting solutions.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full mt-4" variant="outline">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/BraryLabs_v2_Color.png" 
                  alt="BraryLabs Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-500 max-w-md">
                Making library management simple and efficient for the modern world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#docs" className="text-gray-500 hover:text-blue-600 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#guides" className="text-gray-500 hover:text-blue-600 transition-colors">
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-gray-500 hover:text-blue-600 transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BraryLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;