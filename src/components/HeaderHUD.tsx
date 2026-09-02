import React from 'react';
import { 
  Search,
  Bookmark,
  FileText,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

interface HeaderHUDProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fontSize: 'normal' | 'large';
  setFontSize: React.Dispatch<React.SetStateAction<'normal' | 'large'>>;
  activeSection: string;
  onJumpToSection: (sectionId: string) => void;
}

export const HeaderHUD: React.FC<HeaderHUDProps> = ({
  searchQuery,
  setSearchQuery,
  fontSize,
  setFontSize,
  activeSection,
  onJumpToSection
}) => {
  const sectionsNav = [
    { id: 'sec-1', label: '1. Pain Point' },
    { id: 'sec-2', label: '2. Target Audience' },
    { id: 'sec-3', label: '3. Proposed Solution' },
    { id: 'sec-4', label: '4. User Journey' },
    { id: 'sec-5', label: '5. Technical Operation' },
    { id: 'sec-6', label: '6. Validation Plan' },
    { id: 'sec-9', label: '9. Reference List' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#241711]/95 backdrop-blur-md border-b-2 border-[#3d2b1f] shadow-2xl">
      {/* Top Gold Trim Bar */}
      <div className="bg-gradient-to-r from-[#a16207] via-[#facc15] to-[#a16207] h-1 w-full"></div>

      <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Document Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#facc15] border border-[#1a0f0a] flex items-center justify-center text-[#1a0f0a] shadow">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#facc15]">
                  SeaStride Proposal
                </h1>
                <p className="text-xs uppercase tracking-wider text-[#a68a64] font-semibold">
                  Gamified Fitness RPG • Specification Reader
                </p>
              </div>
            </div>
          </div>

          {/* Search & Tool Actions Bar */}
          <div className="flex flex-wrap items-center justify-end gap-2 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#facc15]/70" />
              <input
                type="text"
                id="proposal-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search proposal text..."
                className="w-full bg-[#1a0f0a] border border-[#3d2b1f] focus:border-[#facc15] rounded pl-8 pr-7 py-1.5 text-xs text-[#f4e4bc] placeholder-[#a68a64] outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#a68a64] hover:text-white cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Font Size Toggle */}
            <button
              onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'normal')}
              className="p-1.5 px-2.5 rounded bg-[#1a0f0a] hover:bg-[#3d2b1f] border border-[#3d2b1f] text-[#facc15] text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Toggle Font Size (Standard / Large)"
            >
              {fontSize === 'normal' ? (
                <>
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Text Size: Standard</span>
                </>
              ) : (
                <>
                  <ZoomOut className="w-3.5 h-3.5" />
                  <span>Text Size: Large</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Quick-Jump Section Navigation Bar */}
        <div className="mt-2.5 pt-2 border-t border-[#3d2b1f] flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#a68a64] whitespace-nowrap mr-1 hidden sm:inline flex items-center gap-1">
            <Bookmark className="w-3 h-3 text-[#facc15]" /> Sections:
          </span>
          {sectionsNav.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => onJumpToSection(sec.id)}
                className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-tight whitespace-nowrap transition-all border cursor-pointer ${
                  isActive
                    ? 'game-btn-gold shadow-sm'
                    : 'bg-[#1a0f0a] text-[#f4e4bc] border-[#3d2b1f] hover:border-[#facc15]/50 hover:text-white'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
