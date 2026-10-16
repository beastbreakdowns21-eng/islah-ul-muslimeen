import React from 'react';
import { Globe, ExternalLink, Calendar, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { OFFICIAL_BLOG_POSTS } from '../../data/libraryData';

export const OfficialBlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pb-20 space-y-12">
      <PageHeader
        badge={language === 'ur' ? 'آفیشل بلاگ' : language === 'ar' ? 'المدونة الرسمية' : 'Official Archive'}
        title={
          language === 'ur'
            ? 'آفیشل بلاگ: sajjansaeen.blogspot.com'
            : language === 'ar'
            ? 'مدونة الشيخ سجن سائیں الرسمية'
            : 'Official Blog: sajjansaeen.blogspot.com'
        }
        subtitle={
          language === 'ur'
            ? 'امیرِ جماعت حضرت خواجہ محمد طاہر بخشی (محبوب سجن سائیں) کے فرمودات، ارشادات اور اعلانات کا مستند پورٹل۔'
            : 'Authoritative online repository chronicling discourses, announcements, and guidance of Hazrat Sajjan Saeen.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'لائبریری' : 'Library',
            path: '/library',
          },
          {
            label: language === 'ur' ? 'آفیشل بلاگ' : 'Official Blog',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-start">
        {/* Source of Truth Banner */}
        <div className="bg-[#F7F9FC] rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#002FA7]">
              <Globe className="w-4 h-4" />
              <span>{language === 'ur' ? 'آفیشل ویب لاگ' : 'Official Weblog'}</span>
            </div>
            <h2 className="text-xl font-bold text-[#12247A]">
              sajjansaeen.blogspot.com
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {language === 'ur'
                ? 'تمام بیانات، خطابات اور مجالس کے مصدقہ تفصیلی متن بلاگ پر اصل اردو متن کے ساتھ باقاعدگی سے شائع کیے جاتے ہیں۔'
                : 'All complete sermon transcripts and authoritative directives are preserved directly at the official Blogspot portal.'}
            </p>
          </div>

          <a
            href="https://sajjansaeen.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#002FA7] hover:bg-[#12247A] text-white text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0"
          >
            <span>{language === 'ur' ? 'بلاگ اوپن کریں' : 'Open Official Blog'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Posts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_BLOG_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 hover:border-[#002FA7]/40 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-2">
                  <span className="font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md">
                    {t(post.category)}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3
                  className={`text-base font-bold text-[#12247A] group-hover:text-[#002FA7] transition-colors mb-2 ${
                    language === 'ur' ? 'font-urdu text-lg' : language === 'ar' ? 'font-arabic' : ''
                  }`}
                >
                  {t(post.title)}
                </h3>

                <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed mb-4">
                  {t(post.excerpt)}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF2F7] flex items-center justify-between text-xs text-[#002FA7] font-semibold">
                <span>{t(post.author)}</span>
                <span className="flex items-center gap-1">
                  <span>{language === 'ur' ? 'مطالعہ فرمائیں' : 'Read on Blog'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
