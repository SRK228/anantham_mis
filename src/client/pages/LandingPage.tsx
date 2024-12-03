import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, LineChart } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { NavigationCard } from '../components/cards/NavigationCard';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Anantham Textiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NavigationCard
              icon={BarChart3}
              title={
                <div className="space-y-1">
                  <div className="text-xl font-bold">MIS</div>
                  <div className="text-sm text-gray-600">Management Information System</div>
                </div>
              }
              description="Access comprehensive business analytics and management tools"
              onClick={() => navigate('/mis')}
            />
            <NavigationCard
              icon={LineChart}
              title={
                <div className="space-y-1">
                  <div className="text-xl font-bold">PMS</div>
                  <div className="text-sm text-gray-600">Performance Management System</div>
                </div>
              }
              description="Track, measure, and optimize employee and organizational performance metrics"
              onClick={() => navigate('/pms')}
              iconBgColor="bg-[#ff8080]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;