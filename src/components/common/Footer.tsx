import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer id="site-footer" className="bg-[#12247A] text-white pt-14 pb-8 border-t border-[#002FA7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-start">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="inline-block bg-white p-2 rounded-2xl shadow-sm">
              <Logo variant="footer" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {language === 'ur'
                ? 'جماعت اصلاح المسلمین کا مقصد مسلمانوں کے دلوں کو ذکرِ الٰہی سے بیدار کرنا، احیائے سنت اور امتِ مسلمہ میں محبت و اخوت قائم کرنا ہے۔'
                : language === 'ar'
                ? 'جمعية إسلامية دعوية وتربوية تعنى بإحياء السنة النبوية، ونشر الذكر القلبي، وتزكية النفوس وبناء الشخصية المسلمة المتوازنة.'
                : 'Jamaat Islah-ul-Muslimeen is dedicated to awakening hearts with divine remembrance (Zikr-e-Qalbi), reviving the prophetic Sunnah, and fostering fraternal Islamic unity.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {language === 'ur'
                  ? 'جماعت اصلاح المسلمین کا مصدقہ پلیٹ فارم'
                  : 'Official Institutional Platform'}
              </span>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              {language === 'ur' ? 'اہم روابط' : language === 'ar' ? 'روابط هامة' : 'Important Links'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'تعارفِ جماعت' : language === 'ar' ? 'عن الجمعية' : 'About Islah-ul-Muslimeen'}
                </Link>
              </li>
              <li>
                <Link to="/about/sheikh" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'حضرت سجن سائیں' : language === 'ar' ? 'الشيخ سجن سائیں' : 'Hazrat Sajjan Saeen Profile'}
                </Link>
              </li>
              <li>
                <Link to="/about/grand-mosque" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'جامع مسجد اللہ آباد شریف' : language === 'ar' ? 'الجامع الكبير الله آباد' : 'Grand Mosque Allahabad'}
                </Link>
              </li>
              <li>
                <Link to="/spirituality/golden-chain" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'شجرہ عالیہ نقشبندیہ' : language === 'ar' ? 'السلسلة الذهبية' : 'Golden Chain (Shijra)'}
                </Link>
              </li>
              <li>
                <Link to="/about/code-of-conduct" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'دستور العمل' : language === 'ar' ? 'ميثاق العمل' : 'Code of Conduct'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              {language === 'ur' ? 'اسلامی وسائل' : language === 'ar' ? 'المصادر والعلوم' : 'Islamic Resources'}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/quran" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'قرآنِ کریم و تراجم' : language === 'ar' ? 'القرآن الكريم' : 'The Holy Quran'}
                </Link>
              </li>
              <li>
                <Link to="/hadith" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'احادیثِ مبارکہ' : language === 'ar' ? 'الأحاديث الشريفة' : 'Hadith Sharif'}
                </Link>
              </li>
              <li>
                <Link to="/spirituality/zikr-e-qalbi" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'ذکرِ قلبی و لطائف' : language === 'ar' ? 'الذكر القلبي' : 'Zikr-e-Qalbi & Lataif'}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'علمی مقالات و پی ڈی ایف' : language === 'ar' ? 'المقالات والبحوث (PDF)' : 'Articles (PDF Library)'}
                </Link>
              </li>
              <li>
                <Link to="/library/books" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'مستند کتب و تصانیف' : language === 'ar' ? 'الكتب والمؤلفات' : 'Islamic Books (Kutub)'}
                </Link>
              </li>
              <li>
                <Link to="/library/at-tahir" className="hover:text-white hover:underline transition-colors">
                  {language === 'ur' ? 'ماہنامہ الطاہر' : language === 'ar' ? 'مجلة الطاهر' : 'Monthly At-Tahir'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Central Headquarters & Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              {language === 'ur' ? 'مرکزی ہیڈکوارٹر و رابطہ' : language === 'ar' ? 'المقر العام والاتصال' : 'Headquarters & Contact'}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#002FA7] bg-white p-0.5 rounded-full shrink-0 mt-0.5" />
                <span className={language === 'ur' ? 'font-urdu text-[13px]' : ''}>
                  {language === 'ur'
                    ? 'درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سندھ، پاکستان'
                    : 'Dargah Allahabad Sharif, Kandiaro, District Naushahro Feroze, Sindh, Pakistan'}
                </span>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#002FA7] hover:bg-[#00227B] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{language === 'ur' ? 'مرکزی رابطہ و مراکز' : 'Contact Us & Centers'}</span>
                </Link>
                <Link
                  to="/library/blog"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  <span>{language === 'ur' ? 'بیانات و بلاگ' : 'Discourses & Blog'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()}{' '}
            {language === 'ur'
              ? 'جماعت اصلاح المسلمین۔ جملہ حقوق محفوظ ہیں۔'
              : 'Islah-ul-Muslimeen (جماعت اصلاح المسلمین). All rights reserved.'}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">
              {language === 'ur' ? 'رابطہ' : language === 'ar' ? 'اتصل بنا' : 'Contact'}
            </Link>
            <span className="text-white/20">•</span>
            <div className="text-slate-400 flex items-center gap-1">
              <span className={language === 'ur' ? 'font-urdu' : ''}>
                {language === 'ur'
                  ? 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ'
                  : 'Silsila Naqshbandia Mujaddidia Tahiriya'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
