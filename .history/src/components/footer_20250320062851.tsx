import * as React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src="/BraryLabs_v2_Color.png" alt="BraryLabs Logo" className="h-10 w-auto mix-blend-multiply dark:mix-blend-screen" />
          </div>
          
          {/* Contact Button */}
          <Button 
            id="contact" 
            variant="default" 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Contact Us
          </Button>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2023 Brary Labs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">Privacy Policy</Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  );
} 