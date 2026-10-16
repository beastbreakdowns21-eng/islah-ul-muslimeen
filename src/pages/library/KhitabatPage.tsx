import React, { useState, useMemo } from 'react';
import {
  Play,
  ExternalLink,
  Search,
  Filter,
  Sparkles,
  Clock,
  Eye,
  Video,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import {
  VERIFIED_YOUTUBE_VIDEOS,
  OFFICIAL_YOUTUBE_CHANNEL_URL,
  YouTubeVideo,
} from '../../data/youtubeContent';
import { SEO } from '../../components/common/SEO';
import { YouTubeCard } from '../../components/media/YouTubeCard';

export const KhitabatPage: React.FC = () => {
  const { language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const khitabatSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Islamic Lectures & Bayanat (Khitabat)',
    'description':
      'Verified Islamic lectures, sermons, Urs Mubarak speeches, and spiritual guidance by Hazrat Sajjan Saeen on Islah-ul-Muslimeen official media.',
    'itemListElement': VERIFIED_YOUTUBE_VIDEOS.slice(0, 10).map((vid, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'VideoObject',
        'name': vid.title,
        'description': vid.description || 'Official Islamic lecture by Hazrat Sajjan Saeen',
        'thumbnailUrl': vid.thumbnail,
        'uploadDate': vid.publishedAt,
        'author': {
          '@type': 'Person',
          'name': vid.speaker || 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Jamaat Islah-ul-Muslimeen',
          'url': 'https://islahulmuslimeen.org/',
        },
      },
    })),
  };

  const categories = [
    { id: 'all', label: { en: 'All Lectures', ur: 'تمام بیانات', ar: 'جميع المحاضرات' } },
    { id: 'urs', label: { en: 'Urs Mubarak', ur: 'عرس مبارک', ar: 'العرس المبارك' } },
    { id: 'khitabat', label: { en: 'Khitabat', ur: 'خطابات', ar: 'الخطب الرسمية' } },
    { id: 'bayan', label: { en: 'Bayanat', ur: 'بیانات', ar: 'البيانات والمواعظ' } },
    { id: 'spiritual-talks', label: { en: 'Spiritual Talks', ur: 'روحانی مجالس', ar: 'المجالس الروحية' } },
  ];

  const filteredVideos = useMemo(() => {
    return VERIFIED_YOUTUBE_VIDEOS.filter((video) => {
      // Category filter
      if (selectedCategory === 'urs') {
        if (!video.isUrsMubarak) return false;
      } else if (selectedCategory !== 'all') {
        if (video.category !== selectedCategory) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = video.title.toLowerCase().includes(query);
        const matchSpeaker = (video.speaker || '').toLowerCase().includes(query);
        const matchDesc = (video.description || '').toLowerCase().includes(query);
        return matchTitle || matchSpeaker || matchDesc;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pb-20 space-y-12 text-start">
      <SEO
        title="Islamic Lectures, Khitabat & Bayanat | Islah-ul-Muslimeen"
        description="Listen to verified Islamic lectures, sermons (Khitabat), and bayanat by Hazrat Sajjan Saeen from the official media archive of Jamaat Islah-ul-Muslimeen."
        canonicalPath="/library/khitabat"
        keywords={[
          'Islamic lectures',
          'Islamic bayan',
          'Islamic khitab',
          'Khitabat',
          'Bayanat',
          'Sajjan Sain',
          'Sajjan Sain Islamic content',
          'Islah-ul-Muslimeen',
          'Urs Mubarak speeches',
          'خطابات',
          'بیانات',
        ]}
        breadcrumbs={[
          { name: 'Library', item: '/library' },
          { name: 'Khitabat & Bayanat', item: '/library/khitabat' },
        ]}
        structuredData={khitabatSchema}
      />
      <PageHeader
        badge={language === 'ur' ? 'خطب و بیانات' : language === 'ar' ? 'الخطب والبيانات' : 'Khitabat & Bayanat'}
        title={
          language === 'ur'
            ? 'مستند خطبات، بیانات اور روحانی مجالس'
            : language === 'ar'
            ? 'الخطب والمواعظ المعتمدة من القناة الرسمية'
            : 'Verified Lectures & Spiritual Discourses'
        }
        subtitle={
          language === 'ur'
            ? 'جماعت اصلاح المسلمین کے آفیشل یوٹیوب چینل (JIM Media Wing) کے مصدقہ بیانات اور عرس مبارک کے خطابات۔'
            : language === 'ar'
            ? 'خطبات حضرة الشيخ محمد طاهر بخشي (سجن سائیں) ومشايخ الطريقة الموثقة عبر القناة الرسمية.'
            : 'Official audio-visual repository of speeches, sermons, and spiritual gatherings by Hazrat Sajjan Saeen and noble scholars.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : language === 'ar' ? 'المكتبة' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'خطب و بیانات' : language === 'ar' ? 'الخطب والبيانات' : 'Khitabat & Bayanat',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Official Channel Verification & Link Card */}
        <div className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>@alislahofficial</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#12247A]">
              {language === 'ur'
                ? 'الجماعت اصلاح المسلمین میڈیا ونگ'
                : 'Jamaat Islah-ul-Muslimeen Media Wing'}
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-2xl leading-relaxed">
              {language === 'ur'
                ? 'تمام ویڈیوز، خطابات اور عرس مبارک کی لائیو تقاریب کے آفیشل یوٹیوب پورٹل سے براہِ راست تصدیق شدہ روابط۔'
                : 'Directly cataloged recordings of Annual Urs Mubarak conventions, spiritual tarbiyati sessions, and guidance addresses.'}
            </p>
          </div>

          <a
            href={OFFICIAL_YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="view-official-youtube-channel-btn"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <Video className="w-5 h-5" />
            <span>
              {language === 'ur'
                ? 'آفیشل یوٹیوب چینل ملاحظہ فرمائیں'
                : language === 'ar'
                ? 'زيارة القناة الرسمية على يوتيوب'
                : 'Visit Official YouTube Channel'}
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#002FA7] ${
                  selectedCategory === cat.id
                    ? 'bg-[#002FA7] text-white shadow-xs'
                    : 'bg-white text-[#64748B] hover:text-[#12247A] border border-[#EEF2F7] hover:border-[#002FA7]/30'
                }`}
              >
                {cat.label[language] || cat.label.en}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#64748B] absolute top-1/2 -translate-y-1/2 start-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'ur'
                  ? 'خطابات میں تلاش کریں...'
                  : language === 'ar'
                  ? 'بحث في المحاضرات...'
                  : 'Search lectures & speakers...'
              }
              className="w-full ps-10 pe-4 py-2 rounded-xl border border-[#EEF2F7] bg-white text-xs sm:text-sm text-[#1A1F2B] focus:outline-none focus:border-[#002FA7] focus:ring-1 focus:ring-[#002FA7]"
            />
          </div>
        </div>

        {/* Video Grid */}
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
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EEF2F7] p-8">
            <p className="text-[#64748B] text-sm">
              {language === 'ur'
                ? 'کوئی ویڈیو تلاش کے معیار پر پورا نہیں اتری۔'
                : 'No lectures matched your search query.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
