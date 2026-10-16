import React, { useState } from 'react';
import { Sparkles, Copy, Check, Filter, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { PageHeader } from '../../components/common/PageHeader';
import { SAYINGS_DATA } from '../../data/spiritualityData';
import { SEO } from '../../components/common/SEO';

export const SayingsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const topics = Array.from(new Set(SAYINGS_DATA.map((s) => s.topic.en)));

  const filteredSayings = SAYINGS_DATA.filter((s) => {
    return selectedTopic === 'all' || s.topic.en === selectedTopic;
  });

  const handleCopy = (s: (typeof SAYINGS_DATA)[0]) => {
    const text = `"${s.urdu}"\n\n"${s.english}"\n- ${t(s.speaker)} (${t(s.source)})`;
    navigator.clipboard.writeText(text);
    setCopiedId(s.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pb-20 space-y-12">
      <SEO
        title="Sayings & Spiritual Counsels | Silsila Naqshbandia Tahiriya"
        description="Spiritual sayings, moral counsels, and wisdom of Hazrat Khwaja Sohna Saeen and Hazrat Sajjan Saeen for heart purification and ethical conduct."
        canonicalPath="/spirituality/sayings"
        keywords={[
          'Sayings of Sajjan Saeen',
          'Hazrat Sohna Saeen sayings',
          'Islamic wisdom',
          'Malfuzat Tahiriya',
          'Zikr-e-Qalbi',
          'Islah-ul-Muslimeen',
        ]}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Spirituality', item: '/spirituality' },
          { name: 'Sayings', item: '/spirituality/sayings' },
        ]}
      />

      <PageHeader
        badge={language === 'ur' ? 'حکمت و موعظت' : language === 'ar' ? 'درر وحكم' : 'Spiritual Wisdom'}
        title={
          language === 'ur'
            ? 'ارشادات و ملفوظاتِ طاہریہ'
            : language === 'ar'
            ? 'أقوال وحكم الشيخين الجليلين'
            : 'Sayings & Counsels of the Masters'
        }
        subtitle={
          language === 'ur'
            ? 'حضرت خواجہ سوہنا سائیں اور حضرت سجن سائیں کے پرحکمت ارشادات اور اخلاقی فرمودات۔'
            : 'Profound spiritual counsels and ethical guidance for purifying inner conduct.'
        }
        breadcrumbs={[
          {
            label: language === 'ur' ? 'روحانیات' : 'Spirituality',
            path: '/spirituality',
          },
          {
            label: language === 'ur' ? 'ارشادات' : 'Sayings',
          },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner linking to Our Sheikh Profile & Detailed Sayings Section */}
        <div className="bg-gradient-to-r from-[#12247A] to-[#002FA7] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-start">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              {language === 'ur' ? 'خصوصی ارشادات' : 'Special Collection'}
            </span>
            <h3 className="text-base sm:text-lg font-bold">
              {language === 'ur'
                ? 'ہمارے شیخ: حضرت سجن سائیں کے ۵ تفصیلی ارشاداتِ عالیہ'
                : 'Our Sheikh: 5 In-depth Recorded Discourses & Full Transcripts'}
            </h3>
            <p className="text-xs text-blue-100/80">
              {language === 'ur'
                ? 'حضرت آدمؑ کا واقعہ، چار آنکھیں، فانی دنیا، ستون کی تمثیل اور مقصدِ تخلیق کا تفصیلی مطالعہ کریں۔'
                : 'Read the comprehensive discourses on Adam’s story, the four eyes, transience of property, and purpose of existence.'}
            </p>
          </div>
          <Link
            to="/about/sheikh#sheikh-sayings-section"
            className="px-4 py-2.5 rounded-xl bg-white text-[#12247A] hover:bg-blue-50 text-xs font-bold transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <span>{language === 'ur' ? 'شیخ کے ارشادات پڑھیں' : 'View Sheikh’s Sayings'}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* Topic Filters */}
        <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EEF2F7] shadow-xs flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#64748B] shrink-0">
            {language === 'ur' ? 'موضوع:' : 'Topic:'}
          </span>
          <button
            type="button"
            onClick={() => setSelectedTopic('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
              selectedTopic === 'all'
                ? 'bg-[#002FA7] text-white'
                : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
            }`}
          >
            {language === 'ur' ? 'تمام ارشادات' : 'All Sayings'}
          </button>
          {topics.map((top) => (
            <button
              key={top}
              type="button"
              onClick={() => setSelectedTopic(top)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                selectedTopic === top
                  ? 'bg-[#002FA7] text-white'
                  : 'bg-[#F7F9FC] text-[#1A1F2B] hover:bg-[#EEF2F7]'
              }`}
            >
              {top}
            </button>
          ))}
        </div>

        {/* Sayings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
          {filteredSayings.map((saying) => (
            <div
              key={saying.id}
              className="bg-white rounded-2xl border border-[#EEF2F7] p-6 sm:p-8 shadow-xs hover:border-[#002FA7]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-[#002FA7] bg-[#002FA7]/10 px-2.5 py-0.5 rounded-md uppercase">
                    {t(saying.topic)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(saying)}
                    title="Copy Saying"
                    className="p-1.5 text-[#64748B] hover:text-[#002FA7] hover:bg-[#F7F9FC] rounded-lg transition-colors"
                  >
                    {copiedId === saying.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#EEF2F7] mb-4" dir="rtl">
                  <p className="font-urdu text-lg sm:text-xl text-[#12247A] leading-relaxed text-right">
                    "{saying.urdu}"
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  "{saying.english}"
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EEF2F7] flex items-center justify-between text-xs text-[#64748B]">
                <strong className="text-[#12247A]">{t(saying.speaker)}</strong>
                <span>{t(saying.source)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
