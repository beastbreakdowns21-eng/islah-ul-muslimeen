import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ScrollToTop } from './components/common/ScrollToTop';
import { RouteLoadingFallback } from './components/common/RouteLoadingFallback';

// Immediate home page for instant first paint without bundle waterfalls
import { HomePage } from './pages/HomePage';

// Lazy-loaded routes for optimal code-splitting and minimum initial bundle size
const QuranPage = React.lazy(() => import('./pages/quran/QuranPage').then(m => ({ default: m.QuranPage })));
const HadithPage = React.lazy(() => import('./pages/hadith/HadithPage').then(m => ({ default: m.HadithPage })));

// Spirituality
const SpiritualityHub = React.lazy(() => import('./pages/spirituality/SpiritualityHub').then(m => ({ default: m.SpiritualityHub })));
const ZikrQalbiPage = React.lazy(() => import('./pages/spirituality/ZikrQalbiPage').then(m => ({ default: m.ZikrQalbiPage })));
const GoldenChainPage = React.lazy(() => import('./pages/spirituality/GoldenChainPage').then(m => ({ default: m.GoldenChainPage })));
const TareeqaPrinciplesPage = React.lazy(() => import('./pages/spirituality/TareeqaPrinciplesPage').then(m => ({ default: m.TareeqaPrinciplesPage })));
const PrincipleDetailPage = React.lazy(() => import('./pages/spirituality/PrincipleDetailPage').then(m => ({ default: m.PrincipleDetailPage })));
const SayingsPage = React.lazy(() => import('./pages/spirituality/SayingsPage').then(m => ({ default: m.SayingsPage })));

// About
const AboutOverviewPage = React.lazy(() => import('./pages/about/AboutOverviewPage').then(m => ({ default: m.AboutOverviewPage })));
const SheikhProfilePage = React.lazy(() => import('./pages/about/SheikhProfilePage').then(m => ({ default: m.SheikhProfilePage })));
const KhulafaPage = React.lazy(() => import('./pages/about/KhulafaPage').then(m => ({ default: m.KhulafaPage })));
const KhalifaProfilePage = React.lazy(() => import('./pages/about/KhalifaProfilePage').then(m => ({ default: m.KhalifaProfilePage })));
const GrandMosquePage = React.lazy(() => import('./pages/about/GrandMosquePage').then(m => ({ default: m.GrandMosquePage })));
const MissionPage = React.lazy(() => import('./pages/about/MissionPage').then(m => ({ default: m.MissionPage })));
const OrganizationPage = React.lazy(() => import('./pages/about/OrganizationPage').then(m => ({ default: m.OrganizationPage })));
const CodeOfConductPage = React.lazy(() => import('./pages/about/CodeOfConductPage').then(m => ({ default: m.CodeOfConductPage })));
const SisterOrganizationsPage = React.lazy(() => import('./pages/about/SisterOrganizationsPage').then(m => ({ default: m.SisterOrganizationsPage })));

// Library
const LibraryOverviewPage = React.lazy(() => import('./pages/library/LibraryOverviewPage').then(m => ({ default: m.LibraryOverviewPage })));
const BooksPage = React.lazy(() => import('./pages/library/BooksPage').then(m => ({ default: m.BooksPage })));
const BookDetailPage = React.lazy(() => import('./pages/library/BookDetailPage').then(m => ({ default: m.BookDetailPage })));
const ArticlesPage = React.lazy(() => import('./pages/library/ArticlesPage').then(m => ({ default: m.ArticlesPage })));
const ArticleDetailPage = React.lazy(() => import('./pages/library/ArticleDetailPage').then(m => ({ default: m.ArticleDetailPage })));
const OfficialBlogPage = React.lazy(() => import('./pages/library/OfficialBlogPage').then(m => ({ default: m.OfficialBlogPage })));
const AtTahirMagazinePage = React.lazy(() => import('./pages/library/AtTahirMagazinePage').then(m => ({ default: m.AtTahirMagazinePage })));
const AtTahirDetailPage = React.lazy(() => import('./pages/library/AtTahirDetailPage').then(m => ({ default: m.AtTahirDetailPage })));
const BiographiesPage = React.lazy(() => import('./pages/library/BiographiesPage').then(m => ({ default: m.BiographiesPage })));
const TranslationsPage = React.lazy(() => import('./pages/library/TranslationsPage').then(m => ({ default: m.TranslationsPage })));
const KhitabatPage = React.lazy(() => import('./pages/library/KhitabatPage').then(m => ({ default: m.KhitabatPage })));

// Media
const MediaOverviewPage = React.lazy(() => import('./pages/media/MediaOverviewPage').then(m => ({ default: m.MediaOverviewPage })));
const AudioPage = React.lazy(() => import('./pages/media/AudioPage').then(m => ({ default: m.AudioPage })));
const VideoPage = React.lazy(() => import('./pages/media/VideoPage').then(m => ({ default: m.VideoPage })));
const LiveStreamPage = React.lazy(() => import('./pages/media/LiveStreamPage').then(m => ({ default: m.LiveStreamPage })));

// Events
const EventsOverviewPage = React.lazy(() => import('./pages/events/EventsOverviewPage').then(m => ({ default: m.EventsOverviewPage })));
const UrsPage = React.lazy(() => import('./pages/events/UrsPage').then(m => ({ default: m.UrsPage })));
const MonthlyGatheringsPage = React.lazy(() => import('./pages/events/MonthlyGatheringsPage').then(m => ({ default: m.MonthlyGatheringsPage })));
const HistoricalArchivesPage = React.lazy(() => import('./pages/events/HistoricalArchivesPage').then(m => ({ default: m.HistoricalArchivesPage })));

// Contact & Fallback
const ContactPage = React.lazy(() => import('./pages/contact/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1A1F2B] font-sans antialiased selection:bg-[#002FA7] selection:text-white">
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <main className="flex-1 w-full" id="main-content">
            <ErrorBoundary>
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  {/* Home */}
                  <Route path="/" element={<HomePage />} />

                {/* Top-Level Clean Target Aliases for Search Engines & Visitors */}
                <Route path="/sajjan-sain" element={<SheikhProfilePage />} />
                <Route path="/sajjan-saeen" element={<SheikhProfilePage />} />
                <Route path="/zikr" element={<ZikrQalbiPage />} />
                <Route path="/zikr-e-qalbi" element={<ZikrQalbiPage />} />
                <Route path="/at-tahir" element={<AtTahirMagazinePage />} />
                <Route path="/at-tahir/:issueSlug" element={<AtTahirDetailPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:bookSlug" element={<BookDetailPage />} />
                <Route path="/malfuzat-e-tahiriya" element={<BookDetailPage />} />
                <Route path="/library/malfuzat-e-tahiriya" element={<BookDetailPage />} />
                <Route path="/jalwah-gah-e-dost" element={<BookDetailPage />} />
                <Route path="/jalwah-gah-e-dost-english" element={<BookDetailPage />} />
                <Route path="/library/jalwah-gah-e-dost" element={<BookDetailPage />} />

                {/* Quran & Hadith */}
                <Route path="/quran" element={<QuranPage />} />
                <Route path="/hadith" element={<HadithPage />} />

                {/* Spirituality Hub & Details */}
                <Route path="/spirituality" element={<SpiritualityHub />} />
                <Route path="/spirituality/zikr-qalbi" element={<ZikrQalbiPage />} />
                <Route path="/spirituality/zikr-e-qalbi" element={<ZikrQalbiPage />} />
                <Route path="/spirituality/golden-chain" element={<GoldenChainPage />} />
                <Route path="/spirituality/principles" element={<TareeqaPrinciplesPage />} />
                <Route path="/spirituality/principles/:slug" element={<PrincipleDetailPage />} />
                <Route path="/spirituality/principle/:slug" element={<PrincipleDetailPage />} />
                <Route path="/spirituality/tareeqa-naqshbandi" element={<TareeqaPrinciplesPage />} />
                <Route path="/spirituality/sayings" element={<SayingsPage />} />

                {/* About Movement */}
                <Route path="/about" element={<AboutOverviewPage />} />
                <Route path="/about-us" element={<AboutOverviewPage />} />
                <Route path="/about/sheikh" element={<SheikhProfilePage />} />
                <Route path="/about-us/our-sheikh" element={<SheikhProfilePage />} />
                <Route path="/about/khulafa" element={<KhulafaPage />} />
                <Route path="/about/khulafa-e-karam" element={<KhulafaPage />} />
                <Route path="/about/khulafa/:slug" element={<KhalifaProfilePage />} />
                <Route path="/khulafa" element={<KhulafaPage />} />
                <Route path="/khulafa/:slug" element={<KhalifaProfilePage />} />
                <Route path="/shaikh/khulafa" element={<KhulafaPage />} />
                <Route path="/shaikh/khulafa/:slug" element={<KhalifaProfilePage />} />
                <Route path="/about/grand-mosque" element={<GrandMosquePage />} />
                <Route path="/about/mission" element={<MissionPage />} />
                <Route path="/about/organization" element={<OrganizationPage />} />
                <Route path="/about/code-of-conduct" element={<CodeOfConductPage />} />
                <Route path="/about/organizations" element={<SisterOrganizationsPage />} />

                {/* Articles */}
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/articles/:articleSlug" element={<ArticleDetailPage />} />

                {/* Library */}
                <Route path="/library" element={<LibraryOverviewPage />} />
                <Route path="/library/books" element={<BooksPage />} />
                <Route path="/library/books/:bookSlug" element={<BookDetailPage />} />
                <Route path="/library/articles" element={<ArticlesPage />} />
                <Route path="/library/articles/:articleSlug" element={<ArticleDetailPage />} />
                <Route path="/library/blog" element={<OfficialBlogPage />} />
                <Route path="/library/at-tahir" element={<AtTahirMagazinePage />} />
                <Route path="/library/at-tahir/:issueSlug" element={<AtTahirDetailPage />} />
                <Route path="/library/magazine" element={<AtTahirMagazinePage />} />
                <Route path="/library/biographies" element={<BiographiesPage />} />
                <Route path="/library/translations" element={<TranslationsPage />} />
                <Route path="/library/khitabat" element={<KhitabatPage />} />
                <Route path="/library/bayan" element={<KhitabatPage />} />
                <Route path="/library/bayanat" element={<KhitabatPage />} />

                {/* Media */}
                <Route path="/media" element={<MediaOverviewPage />} />
                <Route path="/media/audio" element={<AudioPage />} />
                <Route path="/media/video" element={<VideoPage />} />
                <Route path="/media/khitabat" element={<KhitabatPage />} />
                <Route path="/media/live" element={<LiveStreamPage />} />

                {/* Events */}
                <Route path="/events" element={<EventsOverviewPage />} />
                <Route path="/events/urs" element={<UrsPage />} />
                <Route path="/events/monthly" element={<MonthlyGatheringsPage />} />
                <Route path="/events/archive" element={<HistoricalArchivesPage />} />
                <Route path="/events/archives" element={<HistoricalArchivesPage />} />

                {/* Contact */}
                <Route path="/contact" element={<ContactPage />} />

                {/* 404 Fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
