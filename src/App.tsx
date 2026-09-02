/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeaderHUD } from './components/HeaderHUD';
import { ProposalViewer } from './components/ProposalViewer';
import { sfx } from './utils/audio';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [activeSection, setActiveSection] = useState<string>('sec-1');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Monitor scroll for back-to-top button and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sectionIds = ['sec-1', 'sec-2', 'sec-3', 'sec-4', 'sec-5', 'sec-6', 'sec-9'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJumpToSection = (sectionId: string) => {
    sfx.playClick();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1a0f0a] text-[#f4e4bc] flex flex-col selection:bg-[#facc15] selection:text-[#1a0f0a] font-sans relative" style={{ backgroundImage: 'radial-gradient(circle at 50% 20%, #2d1e15 0%, #1a0f0a 100%)' }}>
      
      {/* Background Noise Subtle Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-noise"></div>

      {/* Top Document Header */}
      <HeaderHUD
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fontSize={fontSize}
        setFontSize={setFontSize}
        activeSection={activeSection}
        onJumpToSection={handleJumpToSection}
      />

      {/* Main Document Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        <ProposalViewer 
          searchQuery={searchQuery}
          fontSize={fontSize}
        />
      </main>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 game-btn-gold p-3 rounded-full shadow-2xl cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#1a0f0a] font-bold" />
        </button>
      )}

      {/* Clean Document Reader Footer */}
      <footer className="w-full bg-[#241711] border-t-2 border-[#3d2b1f] py-6 px-4 text-center relative z-10 mt-12 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-heading text-base font-black text-[#facc15] uppercase tracking-wider">
              SeaStride Proposal
            </span>
            <span className="text-[#a68a64]">•</span>
            <span className="text-sm text-[#f4e4bc]/80 font-serif">
              Gamified Fitness RPG Specification
            </span>
          </div>

          <div className="text-[11px] text-[#a68a64]/70 font-sans">
            SeaStride Proposal • Document Reader
          </div>
        </div>
      </footer>

    </div>
  );
}
