import * as React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <img src="/BraryLabs_v2_Color.png" alt="BraryLabs Logo" className="h-12 w-auto mb-4 mix-blend-multiply dark:mix-blend-screen" />
            <p className="text-muted-foreground mb-4">
              Modern library management solutions for the digital age
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">ILS Software</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Professional Services</Button></li>
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Reporting & Analytics</Button></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Blog</Button></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@brarylabs.com</li>
              <li className="text-muted-foreground">123-456-7890</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-muted-foreground">© 2023 Brary Labs. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Privacy Policy</Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  );
} 