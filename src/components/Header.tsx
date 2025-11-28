import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div 
          className="flex items-center gap-2 mr-8 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <MessageCircle className="h-6 w-6 fill-blue-700 text-blue-700" />
          <span className="text-xl font-bold text-slate-900">ChatSea</span>
        </div>
        
        <div className="hidden md:flex flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a 
                        href="#" 
                        onClick={(e) => handleNavClick(e, 'about')}
                        className={navigationMenuTriggerStyle()}
                    >
                        About us
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                            onClick={(e) => handleNavClick(e, 'home')}
                          >
                            <MessageCircle className="h-6 w-6 text-white" />
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              ChatSea
                            </div>
                            <p className="text-sm leading-tight text-blue-100">
                              Experience the next generation of secure communication.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem 
                        title="Secured chat" 
                        href="#" 
                        onClick={(e) => handleNavClick(e, 'secured-chat')}
                      >
                        End-to-end encryption for all your personal conversations.
                      </ListItem>
                      <ListItem 
                        title="Connected" 
                        href="#"
                        onClick={(e) => handleNavClick(e, 'connected')}
                      >
                        Stay in touch with your contacts across devices.
                      </ListItem>
                      <ListItem 
                        title="About MCP" 
                        href="#"
                        onClick={(e) => handleNavClick(e, 'mcp')}
                      >
                        Maritime Connectivity Platform integration.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                     <a 
                        href="#" 
                        onClick={(e) => handleNavClick(e, 'blog')}
                        className={navigationMenuTriggerStyle()}
                    >
                        Blog
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6">
            Download app
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
