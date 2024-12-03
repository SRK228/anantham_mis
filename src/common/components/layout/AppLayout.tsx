import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from './Sidebar';
import { cn } from '@/common/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed at top */}
      <Header />

      {/* Sidebar - Fixed at left */}
      <Sidebar />

      {/* Main content area */}
      <main className="pt-28 pl-16 pb-16">
        {children}
      </main>

      {/* Footer - Fixed at bottom */}
      <Footer />
    </div>
  );
};