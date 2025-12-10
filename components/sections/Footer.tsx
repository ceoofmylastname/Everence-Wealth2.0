import React from 'react';
import { Container } from '../ui/Layout';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="bg-navy-950 py-12">
        <Container className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
             <img 
               src="https://storage.googleapis.com/msgsndr/1Iy8SCOEyLe3gY5SIyaF/media/6939d317b263279df8a31258.png" 
               alt="Everence Wealth" 
               className="h-10 w-auto" 
             />
             <span className="text-xl font-display font-bold text-white">Everence<span className="text-white/50">Wealth</span></span>
          </div>
          <div className="text-center text-xs text-gray-600">
            © 2025 Everence Wealth. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
};