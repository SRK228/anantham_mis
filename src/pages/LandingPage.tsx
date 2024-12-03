import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { Button } from '@/common/components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-[#0096B2]">
              Anantham Textiles
            </h1>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-500"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Welcome to Anantham Textiles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* MIS Card */}
            <div 
              onClick={() => navigate('/mis')}
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-[#0096B2] rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">MIS</h3>
              <p className="text-sm text-gray-600 mb-4">Management Information System</p>
              <p className="text-gray-500">
                Access comprehensive business analytics and management tools
              </p>
            </div>

            {/* PMS Card */}
            <div 
              onClick={() => navigate('/pms')}
              className="bg-white rounded-lg shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-[#FFB800] rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">PMS</h3>
              <p className="text-sm text-gray-600 mb-4">Performance Management System</p>
              <p className="text-gray-500">
                Track, measure, and optimize employee and organizational performance metrics
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;