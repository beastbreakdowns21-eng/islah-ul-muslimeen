import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Menu,
  ChevronDown,
  Info,
  User,
  Users,
  Target,
  Network,
  ShieldCheck,
  Landmark,
  Building2,
  BookOpen,
  Quote,
  Sparkles,
  Heart,
  Compass,
  GitCommit,
  MessageSquare,
  Library,
  Book,
  FileText,
  Globe,
  Newspaper,
  UserCheck,
  Languages,
  Mic,
  Film,
  Headphones,
  Video,
  Radio,
  Calendar,
  History,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileDrawer } from './MobileDrawer';
import { SearchModal } from './SearchModal';

/**
 * Icons mapped to submenu items for rich visual hierarchy
 */
const SUBMENU_ICONS: Record<string, React.ReactNode> = {
  // About Us
  'about-overview': <Info className="w-3.5 h-3.5" />,
  'sheikh': <User className="w-3.5 h-3.5" />,
  'khulafa': <Users className="w-3.5 h-3.5" />,
  'mission': <Target className="w-3.5 h-3.5" />,
  'organization': <Network className="w-3.5 h-3.5" />,
  'code-of-conduct': <ShieldCheck className="w-3.5 h-3.5" />,
  'grand-mosque': <Landmark className="w-3.5 h-3.5" />,
  'organizations': <Building2 className="w-3.5 h-3.5" />,
  // Quran & Hadith
  'quran': <BookOpen className="w-3.5 h-3.5" />,
  'hadith': <Quote className="w-3.5 h-3.5" />,
  // Spirituality
  'spirituality-overview': <Sparkles className="w-3.5 h-3.5" />,
  'zikr-e-qalbi': <Heart className="w-3.5 h-3.5" />,
  'tareeqa-naqshbandi': <Compass className="w-3.5 h-3.5" />,
  'golden-chain': <GitCommit className="w-3.5 h-3.5" />,
  'sayings': <MessageSquare className="w-3.5 h-3.5" />,
  // Library
  'library-overview': <Library className="w-3.5 h-3.5" />,
  'books': <Book className="w-3.5 h-3.5" />,
  'articles': <FileText className="w-3.5 h-3.5" />,
  'blog': <Globe className="w-3.5 h-3.5" />,
  'at-tahir': <Newspaper className="w-3.5 h-3.5" />,
  'biographies': <UserCheck className="w-3.5 h-3.5" />,
  'translations': <Languages className="w-3.5 h-3.5" />,
  'khitabat': <Mic className="w-3.5 h-3.5" />,
  // Media
  'media-overview': <Film className="w-3.5 h-3.5" />,
  'audio': <Headphones className="w-3.5 h-3.5" />,
  'video': <Video className="w-3.5 h-3.5" />,
  'live': <Radio className="w-3.5 h-3.5" />,
  // Events
  'events-overview': <Calendar className="w-3.5 h-3.5" />,
  'urs': <Sparkles className="w-3.5 h-3.5" />,
  'events-archive': <History className="w-3.5 h-3.5" />,
};

export const Header: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Scroll listener for sticky header height transition & subtle institutional shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: ESC closes open dropdown, Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  // Click outside to close active dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown upon route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <>
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/98 backdrop-blur-md border-b border-[#EEF2F7] ${
          isScrolled
            ? 'h-[70px] sm:h-[72px] shadow-xs shadow-[#002FA7]/5'
            : 'h-[80px] sm:h-[84px] shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-6">
          
          {/* ========================================================
              LEFT: Official Logo & Organization Lockup
             ======================================================== */}
          <div className="shrink-0 flex items-center">
            <Logo variant="header" />
          </div>

          {/* ========================================================
              CENTER: Primary Desktop Navigation
             ======================================================== */}
          <nav
            ref={navContainerRef}
            className="hidden lg:flex items-center justify-center flex-1 mx-2"
            aria-label="Main Navigation"
          >
            <ul className="flex items-center gap-1 xl:gap-1.5 list-none m-0 p-0">
              {NAVIGATION_ITEMS.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isCurrent = location.pathname === item.path;
                const isChildActive = Boolean(
                  hasChildren &&
                    item.path !== '/' &&
                    location.pathname.startsWith(item.path)
                );
                const isActive = isCurrent || isChildActive;
                const isDropdownOpen = activeDropdown === item.id;

                return (
                  <li
                    key={item.id}
                    className="relative list-none"
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.id)}
                    onMouseLeave={hasChildren ? handleMouseLeave : undefined}
                  >
                    {/* Navigation Item Button / Link */}
                    <Link
                      to={item.path}
                      id={`nav-item-${item.id}`}
                      aria-haspopup={hasChildren ? 'true' : undefined}
                      aria-expanded={hasChildren ? isDropdownOpen : undefined}
                      onClick={() => {
                        if (hasChildren && !isDropdownOpen) {
                          setActiveDropdown(item.id);
                        } else {
                          setActiveDropdown(null);
                        }
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 rounded-xl text-xs xl:text-[13.5px] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] select-none ${
                        isActive
                          ? 'bg-[#002FA7]/8 text-[#002FA7] font-bold shadow-xs'
                          : isDropdownOpen
                          ? 'bg-[#F4F7FF] text-[#002FA7] font-semibold'
                          : 'text-[#12247A] font-semibold hover:bg-[#F4F7FF] hover:text-[#002FA7]'
                      } ${
                        language === 'ur'
                          ? 'font-urdu text-[14px] xl:text-[15.5px] leading-snug'
                          : language === 'ar'
                          ? 'font-arabic text-[13px] xl:text-[14.5px]'
                          : ''
                      }`}
                    >
                      <span>{t(item.label)}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-[#002FA7]' : 'text-[#64748B]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* ========================================================
                        DESKTOP DROPDOWN SUBMENU
                       ======================================================== */}
                    {hasChildren && isDropdownOpen && (
                      <div
                        role="menu"
                        aria-labelledby={`nav-item-${item.id}`}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        className={`absolute mt-1.5 w-72 xl:w-80 bg-white rounded-2xl shadow-xl shadow-[#002FA7]/10 border border-[#E2E8F0] p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                          isRTL ? 'end-0' : 'start-0'
                        }`}
                      >
                        <div className="px-3 py-1.5 mb-1 border-b border-[#EEF2F7] flex items-center justify-between text-[10.5px] font-bold text-[#64748B] uppercase tracking-wider">
                          <span>{t(item.label)}</span>
                          <span className="text-[#002FA7] text-[10px] font-medium lowercase">
                            {item.children!.length} {language === 'ur' ? 'شعبہ جات' : 'sections'}
                          </span>
                        </div>

                        <div className="space-y-0.5 max-h-[420px] overflow-y-auto">
                          {item.children!.map((sub) => {
                            const isSubActive = location.pathname === sub.path;
                            const iconElement = SUBMENU_ICONS[sub.id] || (
                              <Sparkles className="w-3.5 h-3.5" />
                            );

                            return (
                              <Link
                                key={sub.id}
                                to={sub.path}
                                role="menuitem"
                                id={`subnav-${sub.id}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 text-start group/item ${
                                  isSubActive
                                    ? 'bg-[#002FA7]/10 text-[#002FA7]'
                                    : 'hover:bg-[#F4F7FF] text-[#1A1F2B]'
                                }`}
                              >
                                {/* Submenu Icon Pill */}
                                <div
                                  className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                                    isSubActive
                                      ? 'bg-[#002FA7] text-white'
                                      : 'bg-[#F4F7FF] text-[#002FA7] group-hover/item:bg-[#002FA7] group-hover/item:text-white'
                                  }`}
                                  aria-hidden="true"
                                >
                                  {iconElement}
                                </div>

                                {/* Title and Optional Short Description */}
                                <div className="flex-1 min-w-0">
                                  <div
                                    className={`text-xs xl:text-[13px] font-bold transition-colors ${
                                      isSubActive
                                        ? 'text-[#002FA7]'
                                        : 'text-[#12247A] group-hover/item:text-[#002FA7]'
                                    } ${
                                      language === 'ur'
                                        ? 'font-urdu leading-tight text-[13.5px]'
                                        : language === 'ar'
                                        ? 'font-arabic text-[12.5px]'
                                        : ''
                                    }`}
                                  >
                                    {t(sub.label)}
                                  </div>

                                  {sub.description && (
                                    <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5 font-normal">
                                      {t(sub.description)}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ========================================================
              RIGHT: Search Button, Language Selector, Mobile Toggle
             ======================================================== */}
          <div className="shrink-0 flex items-center gap-2 sm:gap-2.5">
            {/* Desktop & Tablet Search Button: [ 🔍 Search ] */}
            <button
              type="button"
              id="search-header-trigger"
              onClick={() => setIsSearchOpen(true)}
              aria-label={language === 'ur' ? 'تلاش' : 'Search Islamic Content'}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#002FA7]/60 hover:bg-[#F4F7FF] text-[#12247A] hover:text-[#002FA7] text-xs font-semibold shadow-xs transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7]"
            >
              <Search className="w-3.5 h-3.5 text-[#002FA7] shrink-0" aria-hidden="true" />
              <span className={`hidden sm:inline font-semibold ${language === 'ur' ? 'font-urdu text-sm' : ''}`}>
                {language === 'ur' ? 'تلاش' : language === 'ar' ? 'بحث' : 'Search'}
              </span>
              <kbd className="hidden xl:inline text-[9.5px] font-mono text-[#64748B] bg-[#F1F5F9] px-1.5 py-0.5 rounded border border-[#E2E8F0]">
                ⌘K
              </kbd>
            </button>

            {/* Language Selector: [ 🌐 English ▾ ] */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={language === 'ur' ? 'موبائل مینو کھولیں' : 'Open Mobile Menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-11 h-11 shrink-0 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F4F7FF] text-[#12247A] hover:text-[#002FA7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] flex items-center justify-center shadow-xs"
            >
              <Menu className="w-5 h-5 text-[#002FA7]" aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
