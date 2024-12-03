import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const TopNav: React.FC = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#ff8080] shadow-sm z-20">
      <div className="h-16 px-6 flex items-center justify-end">
        <TooltipProvider>
          <div className="flex items-center space-x-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-white/10 transition-all duration-200"
                  onClick={handleSettingsClick}
                >
                  <Settings className="h-5 w-5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-white/10 transition-all duration-200"
                >
                  <Bell className="h-5 w-5 text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Notifications</TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="relative h-8 w-8 rounded-full hover:bg-white/10 transition-all duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 bg-white border border-gray-200" 
                align="end" 
                forceMount
              >
                <DropdownMenuLabel className="font-normal bg-[#ff8080] text-white px-4 py-2">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">ananthamkmu</p>
                    <p className="text-xs leading-none opacity-90">
                      admin
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={() => navigate('/')}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-[#ff8080]/10"
                >
                  Back to Home
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
}