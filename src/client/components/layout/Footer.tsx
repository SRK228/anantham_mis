import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#ff8080] h-[10mm] flex items-center justify-between px-6 z-10">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-white">© 2024 Anantham Textiles</span>
        <span className="text-sm text-white">|</span>
        <span className="text-sm text-white">Version 1.0</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-white">Support: +91 1234567890</span>
      </div>
    </footer>
  );
}