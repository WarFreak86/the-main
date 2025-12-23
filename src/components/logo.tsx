import { cn } from '@/lib/utils';
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <svg
        className="w-auto h-6 text-primary"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AI Marketing Edge Logo"
      >
        <path
          d="M0.299988 23.3V0.899994H3.99999V23.3H0.299988ZM11.1 23.3L5.4 0.899994H9.5L12.5 14L15.5 0.899994H19.5L13.85 23.3H11.1Z"
          fill="currentColor"
        />
        <text
          x="28"
          y="18"
          className="font-headline fill-foreground text-xl font-bold"
        >
          Marketing Edge
        </text>
      </svg>
    </div>
  );
};

export default Logo;
