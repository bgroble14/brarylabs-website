import React from 'react';
import { Book, ArrowRight } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => (
  <div className="w-full p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
        {title}
      </h3>
      <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
        {description}
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 flex items-center mx-auto font-medium shadow-md hover:shadow-lg transition-all duration-300 group/button">
        Contact Us
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover/button:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center group">
                <img 
                  src="/logo.png" 
                  alt="BraryLabs Logo" 
                  className="h-8 w-auto transform group-hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                />
                <span className="text-2xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  BraryLabs
                </span>
              </div>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Modern Library Management</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Made Simple
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-medium leading-relaxed">
              Streamline your library operations with our cutting-edge software solution.
              Designed for the modern librarian.
            </p>

            {/* Service Sections */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
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
      <footer className="bg-white mt-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="BraryLabs Logo" 
                  className="h-7 w-auto mix-blend-multiply"
                />
                <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  BraryLabs
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Making library management simple and efficient for the modern world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-6 text-gray-900">Support</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#guides" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Guides
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-6 text-gray-900">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">
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