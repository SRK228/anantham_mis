import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, User, Home, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/common/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // For now, just navigate to home
    navigate('/');
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 h-16 bg-[#ff8080] z-50",
      "flex items-center justify-between",
      "shadow-sm",
      className
    )}>
      {/* Left section with logo */}
      <div className="flex items-center h-full pl-6">
        <h1 
          className="text-xl font-semibold text-white cursor-pointer"
          onClick={() => navigate('/')}
        >
          Anantham Textiles
        </h1>
      </div>

      {/* Right section with actions */}
      <div className="flex items-center h-full pr-6 space-x-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/')}
          className="text-white hover:bg-white/10 transition-colors"
          title="Go to Home"
        >
          <Home className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white hover:bg-white/10 transition-colors"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/settings')}
          className="text-white hover:bg-white/10 transition-colors"
        >
          <Settings className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/10 transition-colors"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 bg-white" 
            align="end"
          >
            <DropdownMenuLabel className="font-normal bg-[#ff8080] text-white px-4 py-2">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Anantham admin</p>
                <p className="text-xs leading-none opacity-90">Administrator</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={handleLogout}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-[#ff8080]/10 focus:bg-[#ff8080]/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};