import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <div className="bg-background shadow-sm z-10 relative">
      <div className="py-2 sm:py-3 px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/BraryLabs_v2_Color.png" 
                alt="BraryLabs Logo" 
                className="h-10 w-auto mix-blend-multiply dark:mix-blend-screen"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 