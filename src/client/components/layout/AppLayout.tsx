import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />
      <main className="pl-16 pt-16 pb-[10mm] min-h-screen bg-[#F5F5F5]">
        {children}
      </main>
      <Footer />
    </div>
  );
};