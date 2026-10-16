import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; nativeName: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English' },
    { code: 'ur', label: 'Urdu', nativeName: 'اردو' },
    { code: 'ar', label: 'Arabic', nativeName: 'العربية' },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative inline-block text-start" ref={dropdownRef}>
      {/* Professional Selector: [ 🌐 English ▾ ] */}
      <button
        type="button"
        id="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={language === 'ur' ? 'زبان تبدیل کریں' : 'Change language'}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-white text-xs font-semibold shadow-xs transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] ${
          isOpen
            ? 'border-[#002FA7] text-[#002FA7] bg-[#F4F7FF]'
            : 'border-[#E2E8F0] text-[#12247A] hover:border-[#002FA7]/50 hover:bg-[#F4F7FF] hover:text-[#002FA7]'
        }`}
      >
        <Globe className="w-3.5 h-3.5 text-[#002FA7] shrink-0" aria-hidden="true" />
        <span className="font-semibold text-xs text-[#12247A]">{current.nativeName}</span>
        <ChevronDown
          className={`w-3 h-3 text-[#64748B] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#002FA7]' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-switcher-btn"
          className="absolute end-0 mt-1.5 w-44 rounded-xl bg-white border border-[#E2E8F0] shadow-xl shadow-[#002FA7]/8 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3 py-1.5 border-b border-[#EEF2F7] text-[10px] uppercase font-bold text-[#64748B] tracking-wider font-urdu">
            {language === 'ur' ? 'زبان منتخب کریں' : language === 'ar' ? 'اختر اللغة' : 'Select Language'}
          </div>
          {languages.map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                type="button"
                role="menuitem"
                id={`lang-select-${item.code}`}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-start transition-colors ${
                  isSelected
                    ? 'bg-[#002FA7]/8 text-[#002FA7] font-bold'
                    : 'text-[#1A1F2B] hover:bg-[#F4F7FF] hover:text-[#002FA7] font-medium'
                }`}
              >
                <div className="flex flex-col">
                  <span
                    className={
                      item.code === 'ur'
                        ? 'font-urdu text-[13px] leading-tight'
                        : item.code === 'ar'
                        ? 'font-arabic text-[12px]'
                        : 'font-semibold'
                    }
                  >
                    {item.nativeName}
                  </span>
                  <span className="text-[10.5px] text-[#64748B] font-normal">{item.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#002FA7] shrink-0" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

