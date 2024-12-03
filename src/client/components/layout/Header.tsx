import React from 'react';
import { Home, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Anantham Textiles' }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">{title}</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};