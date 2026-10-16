import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  ChevronDown,
  ChevronUp,
  Search,
  Home,
  Info,
  BookOpen,
  Sparkles,
  Book,
  Video,
  Calendar,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onOpenSearch }) => {
  const { t, isRTL, language } = useLanguage();
  const location = useLocation();
  const [expandedNavId, setExpandedNavId] = useState<string | null>(null);

  // Close drawer on route change
  useEffect(() => {
    onClose();
    setExpandedNavId(null);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
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

  if (!isOpen) return null;

  const toggleExpand = (id: string) => {
    setExpandedNavId((prev) => (prev === id ? null : id));
  };

  const getNavIcon = (id: string) => {
    switch (id) {
      case 'home':
        return <Home className="w-4 h-4" />;
      case 'about':
        return <Info className="w-4 h-4" />;
      case 'quran-hadith':
        return <BookOpen className="w-4 h-4" />;
      case 'spirituality':
        return <Sparkles className="w-4 h-4" />;
      case 'library':
        return <Book className="w-4 h-4" />;
      case 'media':
        return <Video className="w-4 h-4" />;
      case 'events':
        return <Calendar className="w-4 h-4" />;
      case 'contact':
        return <Mail className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={language === 'ur' ? 'موبائل نیویگیشن مینو' : 'Mobile Navigation Menu'}
      className="fixed inset-0 z-50 flex lg:hidden animate-in fade-in duration-200"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-[#12247A]/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`relative z-10 w-[86%] max-w-[340px] bg-white h-full flex flex-col shadow-2xl border-e border-[#EEF2F7] overflow-y-auto animate-in slide-in-from-start duration-250 ${
          isRTL ? 'ms-auto' : 'me-auto'
        }`}
      >
        {/* Top bar with Logo & Close button */}
        <div className="flex items-center justify-between p-4 border-b border-[#EEF2F7] bg-white">
          <Logo variant="drawer" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            aria-label={language === 'ur' ? 'بند کریں' : 'Close navigation menu'}
            title={language === 'ur' ? 'بند کریں' : 'Close navigation menu'}
            className="w-11 h-11 shrink-0 rounded-xl text-[#64748B] hover:text-[#12247A] hover:bg-[#F4F7FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action strip: Search button + Language Switcher */}
        <div className="p-3 border-b border-[#EEF2F7] bg-[#F7F9FC] flex items-center justify-between gap-2">
          <button
            type="button"
            id="mobile-search-trigger"
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex-1 min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs font-semibold text-[#12247A] hover:text-[#002FA7] hover:border-[#002FA7]/40 hover:bg-[#F4F7FF] transition-colors shadow-xs"
          >
            <Search className="w-3.5 h-3.5 text-[#002FA7]" aria-hidden="true" />
            <span>
              {language === 'ur' ? 'تلاش کریں...' : language === 'ar' ? 'بحث...' : 'Search...'}
            </span>
          </button>
          <div className="shrink-0">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Navigation items list (8 items) */}
        <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto" aria-label={language === 'ur' ? 'موبائل نیویگیشن' : 'Mobile Navigation'}>
          {NAVIGATION_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = expandedNavId === item.id;
            const isCurrent = location.pathname === item.path;
            const isChildActive = Boolean(
              hasChildren &&
                item.path !== '/' &&
                location.pathname.startsWith(item.path)
            );
            const isActive = isCurrent || isChildActive;

            return (
              <div key={item.id} className="rounded-xl overflow-hidden border border-transparent">
                <div className="flex items-center justify-between gap-1">
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (!hasChildren) {
                        onClose();
                      }
                    }}
                    className={`flex-1 min-w-0 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                      isActive
                        ? 'bg-[#002FA7]/10 text-[#002FA7] font-bold'
                        : 'text-[#12247A] hover:bg-[#F4F7FF] hover:text-[#002FA7]'
                    }`}
                  >
                    <span
                      className={`shrink-0 ${
                        isActive ? 'text-[#002FA7]' : 'text-[#002FA7]/80'
                      }`}
                    >
                      {getNavIcon(item.id)}
                    </span>
                    <span
                      className={`truncate ${
                        language === 'ur'
                          ? 'font-urdu leading-normal text-[15px]'
                          : language === 'ar'
                          ? 'font-arabic text-[14px]'
                          : ''
                      }`}
                    >
                      {t(item.label)}
                    </span>
                  </Link>

                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      aria-expanded={isExpanded}
                      aria-label={
                        language === 'ur'
                          ? `${t(item.label)} ذیلی مینو کھولیں/بند کریں`
                          : `Toggle ${t(item.label)} submenu`
                      }
                      className={`w-11 h-11 shrink-0 rounded-xl transition-colors flex items-center justify-center ${
                        isExpanded
                          ? 'bg-[#002FA7]/8 text-[#002FA7]'
                          : 'text-[#64748B] hover:text-[#002FA7] hover:bg-[#F4F7FF]'
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Submenu Accordion */}
                {hasChildren && isExpanded && (
                  <div className="ms-5 me-1 my-1 ps-3 border-s-2 border-[#002FA7]/30 space-y-1 animate-in slide-in-from-top-2 duration-150">
                    {item.children!.map((sub) => {
                      const isSubActive = location.pathname === sub.path;
                      return (
                        <Link
                          key={sub.id}
                          to={sub.path}
                          onClick={onClose}
                          className={`min-h-[44px] flex flex-col justify-center px-3 py-2 rounded-xl text-xs transition-colors ${
                            isSubActive
                              ? 'bg-[#002FA7] text-white font-bold shadow-xs'
                              : 'text-[#12247A] hover:text-[#002FA7] hover:bg-[#F4F7FF] font-medium'
                          }`}
                        >
                          <span
                            className={`font-semibold ${
                              isSubActive ? 'text-white' : ''
                            } ${
                              language === 'ur'
                                ? 'font-urdu text-[13px] leading-tight'
                                : language === 'ar'
                                ? 'font-arabic text-[12.5px]'
                                : ''
                            }`}
                          >
                            {t(sub.label)}
                          </span>
                          {sub.description && (
                            <span
                              className={`text-[10.5px] line-clamp-1 mt-0.5 ${
                                isSubActive ? 'text-white/80' : 'text-[#64748B]'
                              }`}
                            >
                              {t(sub.description)}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-[#EEF2F7] bg-[#F7F9FC] text-center text-xs text-[#64748B]">
          <p className="font-bold text-[#12247A] text-xs font-urdu">
            {language === 'ur' ? 'جماعت اصلاح المسلمین' : 'Islah-ul-Muslimeen'}
          </p>
          <p className="text-[11px] text-[#64748B] mt-0.5 font-urdu">
            {language === 'ur' ? 'درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان' : 'Dargah Allahabad Sharif, Sindh, Pakistan'}
          </p>
        </div>
      </div>
    </div>
  );
};
