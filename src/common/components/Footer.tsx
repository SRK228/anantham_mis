import React from 'react';
import { cn } from '@/common/lib/utils';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn(
      "fixed bottom-0 left-0 right-0 h-12 bg-[#ff8080] z-50",
      "flex items-center justify-between px-6",
      "text-white text-sm",
      "shadow-sm",
      className
    )}>
      <div className="flex items-center space-x-2">
        <span>© 2024 Anantham Textiles</span>
        <span className="text-white/80">|</span>
        <span className="text-white/80">Version 1.0</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-white/80">Support:</span>
        <a 
          href="tel:+911234567890" 
          className="hover:text-white/90 transition-colors"
        >
          +91 1234567890
        </a>
      </div>
    </footer>
  );
};