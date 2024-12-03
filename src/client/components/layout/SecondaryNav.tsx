import React from 'react';
import { motion } from 'framer-motion';
import { subHeaderIcons } from '../../data/subHeaderIcons';

interface SecondaryNavProps {
  items: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <nav className="sticky top-16 bg-white border-b border-gray-200 z-10">
      <div className="px-6 py-2">
        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const Icon = subHeaderIcons[item as keyof typeof subHeaderIcons];
            const isActive = activeItem === item;
            return (
              <motion.button
                key={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onItemClick(item)}
                className={`relative flex items-center gap-2 px-4 py-2 transition-all duration-200 ${
                  isActive
                    ? 'text-[#ff8080]'
                    : 'text-gray-600 hover:text-[#ff8080]'
                }`}
              >
                {Icon && (
                  <Icon 
                    className={`h-4 w-4 transition-colors duration-200 ${
                      isActive ? 'text-[#ff8080]' : 'text-gray-600'
                    }`} 
                  />
                )}
                <span className="font-medium">{item}</span>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff8080]"
                    initial={false}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};