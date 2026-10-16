import React, { useState, useMemo } from 'react';
import { Search, Video, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { VERIFIED_YOUTUBE_VIDEOS } from '../../data/youtubeContent';
import { YouTubeCard } from '../../components/media/YouTubeCard';
import { SEO } from '../../components/common/SEO';

export const VideoPage: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'urs' | 'discourses'>('all');

  const filteredVideos = useMemo(() => {
    return VERIFIED_YOUTUBE_VIDEOS.filter((video) => {
      // Category filter
      if (selectedCategory === 'urs' && !video.isUrsMubarak) return false;
      if (selectedCategory === 'discourses' && video.isUrsMubarak) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = video.title.toLowerCase().includes(query);
        const matchesSpeaker = video.speaker ? video.speaker.toLowerCase().includes(query) : false;
        const matchesDesc = video.description ? video.description.toLowerCase().includes(query) : false;
        return matchesTitle || matchesSpeaker || matchesDesc;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pb-20 space-y-8 sm:space-y-10">
      <SEO
        title="Official Video Discourses | Islah-ul-Muslimeen"
        description="Official YouTube video archive of Hazrat Khwaja Muhammad Tahir (Sajjan Saeen) discourses, Annual Urs Mubarak proceedings, and spiritual lectures."
        canonicalPath="/media/video"
      />

      <PageHeader
        badge={language === 'ur' ? 'ویڈیو گیلری' : language === 'ar' ? 'المرئيات' : 'Video Gallery'}
        title={
          language === 'ur'
            ? 'آفیشل ویڈیو خطابات و بیانات'
            : language === 'ar'
            ? 'التسجيلات المرئية الرسمية'
            : 'Official Video Discourses'
        }
        subtitle={
          language === 'ur'
            ? 'حضرت سجن سائیں کے آفیشل یوٹیوب خطابات، سالانہ عرس مبارک اور روحانی بیانات۔'
            : 'Official YouTube video discourses, annual Urs Mubarak proceedings, and spiritual guidance from Hazrat Khwaja Sajjan Saeen.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'میڈیا' : 'Media',
            path: '/media',
          },
          {
            label: language === 'ur' ? 'ویڈیو' : 'Video',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-start">
        {/* Controls: Category Filter and Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#EEF2F7] shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#12247A] hover:bg-[#F1F5F9]'
              }`}
            >
              {language === 'ur' ? 'تمام ویڈیوز' : language === 'ar' ? 'الكل' : 'All Videos'} (
              {VERIFIED_YOUTUBE_VIDEOS.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('urs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 ${
                selectedCategory === 'urs'
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#12247A] hover:bg-[#F1F5F9]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'عرس مبارک' : language === 'ar' ? 'العرس المبارك' : 'Urs Mubarak'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('discourses')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 ${
                selectedCategory === 'discourses'
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#12247A] hover:bg-[#F1F5F9]'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{language === 'ur' ? 'خطبات و مواعظ' : language === 'ar' ? 'الخطب والمواعظ' : 'Discourses'}</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#94A3B8] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'ویڈیو یا خطاب تلاش کریں...'
                  : language === 'ar'
                  ? 'بحث في المرئيات...'
                  : 'Search video discourses...'
              }
              className="w-full ps-9 pe-4 py-2 text-xs rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7] transition-all"
            />
          </div>
        </div>

        {/* Real YouTube Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <YouTubeCard
                key={video.id}
                video={video}
                showSpeaker={true}
                showDescription={true}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#EEF2F7] p-12 text-center space-y-3">
            <Video className="w-10 h-10 text-[#94A3B8] mx-auto" />
            <h3 className="text-sm font-bold text-[#12247A]">
              {language === 'ur' ? 'کوئی ویڈیو نہیں ملی' : 'No videos found'}
            </h3>
            <p className="text-xs text-[#64748B]">
              {language === 'ur'
                ? 'براہِ کرم دیگر الفاظ سے تلاش کیجیے۔'
                : 'Try adjusting your search criteria.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
