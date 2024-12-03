import React from 'react';
import { motion } from "framer-motion";
import { subHeaderIcons } from '@/common/data/subHeaderIcons';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { cn } from '@/common/lib/utils';

interface SecondaryNavProps {
  items: string[];
  activeItem: string | null;
  onItemClick: (item: string) => void;
}

export const SecondaryNav: React.FC<SecondaryNavProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  return (
    <nav className="fixed top-16 left-16 right-0 bg-white border-b border-gray-200 z-10">
      <div className="h-12 px-6 flex items-center">
        <div className="flex items-center gap-2">
          {items.map((item) => {
            const Icon = subHeaderIcons[item as keyof typeof subHeaderIcons];
            const isActive = activeItem === item;

            return (
              <motion.button
                key={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onItemClick(item)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200",
                  isActive
                    ? "text-[#ff8080] bg-[#ff8080]/5"
                    : "text-gray-600 hover:text-[#ff8080] hover:bg-[#ff8080]/5"
                )}
              >
                {Icon && (
                  <Icon
                    sx={{
                      fontSize: 20,
                      transition: 'color 0.2s',
                      color: isActive ? '#ff8080' : 'inherit'
                    }}
                  />
                )}
                <span className="font-medium text-sm">{item}</span>
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