import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Scroll, Book, FileText, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { performGlobalSearch } from '../../data/searchIndex';
import { SearchResult } from '../../types';
import { UI_STRINGS } from '../../data/translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Execute live search
  useEffect(() => {
    if (query.trim().length >= 2) {
      const res = performGlobalSearch(query, language);
      setResults(res);
    } else {
      setResults([]);
    }
  }, [query, language]);

  if (!isOpen) return null;

  const handleSelectResult = (path: string) => {
    onClose();
    navigate(path);
  };

  const getCategoryIcon = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes('quran') || c.includes('قرآن')) return <BookOpen className="w-4 h-4 text-[#002FA7]" />;
    if (c.includes('hadith') || c.includes('حدیث')) return <Scroll className="w-4 h-4 text-[#002FA7]" />;
    if (c.includes('book') || c.includes('کتب')) return <Book className="w-4 h-4 text-[#002FA7]" />;
    if (c.includes('article') || c.includes('مقالات')) return <FileText className="w-4 h-4 text-[#002FA7]" />;
    return <Sparkles className="w-4 h-4 text-[#002FA7]" />;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#12247A]/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#EEF2F7] overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#EEF2F7] bg-white">
          <Search className="w-5 h-5 text-[#64748B] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            id="global-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'ur' ? 'تلاش کریں...' : t(UI_STRINGS.searchPlaceholder)}
            className="w-full px-3 text-sm sm:text-base text-[#1A1F2B] placeholder:text-[#64748B] focus:outline-none bg-transparent"
            dir={language === 'ur' ? 'rtl' : 'ltr'}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={language === 'ur' ? 'بند کریں' : 'Close search'}
            title={language === 'ur' ? 'بند کریں' : 'Close search'}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#1A1F2B] hover:bg-[#F7F9FC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills when input empty */}
        {query.trim().length < 2 && (
          <div className="p-4 sm:p-6 text-start">
            <h3 id="search-modal-title" className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
              {language === 'ur' ? 'تجویز کردہ موضوعات' : language === 'ar' ? 'مواضيع مقترحة' : 'Suggested Topics'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: language === 'ur' ? 'قرآن' : 'Quran', q: 'Quran' },
                { label: language === 'ur' ? 'حدیث' : 'Hadith', q: 'Hadith' },
                { label: language === 'ur' ? 'ذکرِ قلبی' : 'Zikr', q: 'Zikr' },
                { label: language === 'ur' ? 'طریقہ نقشبندیہ' : 'Naqshbandi', q: 'Naqshbandi' },
                { label: language === 'ur' ? 'کتب' : 'Books', q: 'Books' },
                { label: language === 'ur' ? 'سجن سائیں' : 'Sajjan Saeen', q: 'Sajjan Saeen' },
              ].map((pill) => (
                <button
                  key={pill.q}
                  type="button"
                  onClick={() => setQuery(pill.q)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#F7F9FC] hover:bg-[#002FA7]/10 text-[#002FA7] border border-[#EEF2F7] transition-colors"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim().length >= 2 && (
          <div className="flex-1 overflow-y-auto p-4 space-y-2 divide-y divide-[#EEF2F7]">
            {results.length > 0 ? (
              <>
                <div className="text-xs font-semibold text-[#64748B] px-2 py-1">
                  {results.length} {language === 'ur' ? 'نتائج' : t(UI_STRINGS.searchResults)}
                </div>
                {results.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item.path)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSelectResult(item.path);
                    }}
                    className="pt-2 pb-2 px-3 rounded-xl hover:bg-[#F7F9FC] cursor-pointer transition-colors group flex items-start justify-between gap-3 text-start"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#002FA7]/5 group-hover:bg-[#002FA7]/10 transition-colors shrink-0 mt-0.5">
                        {getCategoryIcon(item.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#002FA7] bg-[#002FA7]/10 px-2 py-0.5 rounded-md">
                            {item.category}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mt-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#64748B] line-clamp-2 mt-1">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#002FA7] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                ))}
              </>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm font-semibold text-[#1A1F2B]">
                  {language === 'ur' ? 'کوئی نتیجہ نہیں ملا' : t(UI_STRINGS.noResults)}
                </p>
                <p className="text-xs text-[#64748B] mt-1">
                  {language === 'ur'
                    ? 'قرآن، حدیث، ذکر، کتب یا سوانح کے متعلق تلاش فرمائیں۔'
                    : 'Try searching for Quran, Hadith, Zikr, Books, or Sheikh in English, Urdu, or Arabic.'}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-[#F7F9FC] border-t border-[#EEF2F7] flex items-center justify-between text-[11px] text-[#64748B]">
          <span>{language === 'ur' ? 'بند کرنے کے لیے Esc دبائیں' : 'Esc to close'}</span>
        </div>
      </div>
    </div>
  );
};
