import React from 'react';
import Logo from '@/components/logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Marketing Edge. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
