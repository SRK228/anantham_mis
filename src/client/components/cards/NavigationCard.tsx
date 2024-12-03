import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  icon: LucideIcon;
  title: React.ReactNode;
  description: string;
  onClick?: () => void;
  iconBgColor?: string;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  iconBgColor = 'bg-primary',
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 duration-200"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`p-4 ${iconBgColor} rounded-full`}>
          <Icon className="h-12 w-12 text-white" />
        </div>
        <div className="text-center">
          {title}
        </div>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};