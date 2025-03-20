import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { cn } from "../lib/utils";

export function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center group">
              <img 
                src="/BraryLabs_v2_Color.png" 
                alt="BraryLabs Logo" 
                className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300 mix-blend-multiply dark:mix-blend-screen"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              BraryLabs
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Modern library management solutions for the digital age
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="ILS Software">
                        Comprehensive library system software
                      </ListItem>
                      <ListItem href="#" title="Data Analytics">
                        Powerful insights from your library data
                      </ListItem>
                      <ListItem href="#" title="Consulting">
                        Expert guidance for your library needs
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
})
ListItem.displayName = "ListItem"; 