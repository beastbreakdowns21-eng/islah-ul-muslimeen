import { NavItem } from '../types';
import { NAQSHBANDI_PRINCIPLES } from './spiritualityData';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: { en: 'Home', ur: 'ہوم', ar: 'الرئيسية' },
    path: '/',
  },
  {
    id: 'about',
    label: { en: 'About Us', ur: 'ہمارے بارے میں', ar: 'من نحن' },
    path: '/about',
    children: [
      {
        id: 'about-overview',
        label: { en: 'About Overview', ur: 'تعارفِ جماعت', ar: 'نظرة عامة' },
        path: '/about',
        description: {
          en: 'History and spiritual foundations of Islah-ul-Muslimeen',
          ur: 'جماعت اصلاح المسلمین کی تاریخ اور روحانی بنیادیں',
          ar: 'تاريخ وأسس جمعية إصلاح المسلمين',
        },
      },
      {
        id: 'sheikh',
        label: { en: 'Our Sheikh (Sajjan Saeen)', ur: 'مرشدِ کامل (سجن سائیں)', ar: 'شيخنا الجليل' },
        path: '/about/sheikh',
        description: {
          en: 'Life, teachings and leadership of Hazrat Khwaja Muhammad Tahir',
          ur: 'حضرت خواجہ محمد طاہر بخشی محبوب سجن سائیں کی سیرت و کردار',
          ar: 'سيرة وتوجيهات فضيلة الشيخ خواجه محمد طاهر',
        },
      },
      {
        id: 'khulafa',
        label: { en: 'Khulafa-e-Karam', ur: 'خلفائے کرام', ar: 'الخلفاء الكرام' },
        path: '/about/khulafa',
        description: {
          en: 'Directory of 472 authorized spiritual deputies and Khulafa across provinces and overseas',
          ur: 'حضرت خواجہ سجن سائیں مدظلہ العالی کے خلفائے کرام کا مصدقہ ریکارڈ',
          ar: 'دليل الخلفاء الكرام ونواب الطريقة في الأقاليم وخارج باكستان',
        },
      },
      {
        id: 'mission',
        label: { en: 'Mission & Purpose', ur: 'مقاصد و منشور', ar: 'الرسالة والأهداف' },
        path: '/about/mission',
        description: {
          en: 'Revival of Sunnah, inner purification, and Muslim unity',
          ur: 'احیائے سنت، تزکیۂ نفس، اور اتحادِ بین المسلمین',
          ar: 'إحياء السنة، تزكية النفس، ووحدة المسلمين',
        },
      },
      {
        id: 'organization',
        label: { en: 'Organization Structure', ur: 'تنظیمی ڈھانچہ', ar: 'الهيكل التنظيمي' },
        path: '/about/organization',
        description: {
          en: 'Administrative structure and provincial councils',
          ur: 'تنظیمی نظام، شوریٰ اور شعبہ جات',
          ar: 'النظام الإداري والمجالس الاستشارية',
        },
      },
      {
        id: 'code-of-conduct',
        label: { en: 'Code of Conduct (Dastur)', ur: 'دستور العمل', ar: 'ميثاق العمل' },
        path: '/about/code-of-conduct',
        description: {
          en: 'Spiritual rules and discipline for members and disciples',
          ur: 'اراکین اور سالکین کے لیے شرعی و اخلاقی ضابطہ اخلاق',
          ar: 'الضوابط الشرعية والأخلاقية للمنتسبين',
        },
      },
      {
        id: 'grand-mosque',
        label: { en: 'Grand Mosque Allahabad', ur: 'جامع مسجد اللہ آباد شریف', ar: 'الجامع الكبير الله آباد' },
        path: '/about/grand-mosque',
        description: {
          en: 'Architectural and spiritual center at Dargah Allahabad Sharif',
          ur: 'درگاہ اللہ آباد شریف کا عظیم الشان روحانی و تعلیمی مرکز',
          ar: 'المركز الروحي والمعماري في دركاه الله آباد شريف',
        },
      },
      {
        id: 'organizations',
        label: { en: 'Sister Organizations', ur: 'ذیلی شعبہ جات', ar: 'المؤسسات التابعة' },
        path: '/about/organizations',
        description: {
          en: 'Rohani Talaba Jamaat, Jamiat-e-Ulema Tahiriya, etc.',
          ur: 'روحانی طلبہ جماعت، جمعیت علمائے طاہریہ و دیگر',
          ar: 'اتحاد الطلاب الروحاني وجمعية العلماء الطاهرية',
        },
      },
    ],
  },
  {
    id: 'quran-hadith',
    label: { en: 'Quran & Hadith', ur: 'قرآن و حدیث', ar: 'القرآن والحديث' },
    path: '/quran',
    children: [
      {
        id: 'quran',
        label: { en: 'The Holy Quran', ur: 'قرآنِ کریم', ar: 'القرآن الكريم' },
        path: '/quran',
        description: {
          en: 'Selected verses, translations, and spiritual reflections',
          ur: 'منتخب آیات، مستند تراجم اور روحانی نکات',
          ar: 'آيات مختارة وتفاسير وتدبرات إيمانية',
        },
      },
      {
        id: 'hadith',
        label: { en: 'Hadith Sharif', ur: 'احادیثِ مبارکہ', ar: 'الأحاديث الشريفة' },
        path: '/hadith',
        description: {
          en: 'Authentic prophetic traditions on Zikr, character, and Sunnah',
          ur: 'ذکر، حسنِ اخلاق اور احیائے سنت پر صحیح احادیث',
          ar: 'أحاديث نبوية صحيحة في الذكر والأخلاق والاتباع',
        },
      },
    ],
  },
  {
    id: 'spirituality',
    label: { en: 'Spirituality', ur: 'روحانیت', ar: 'الروحانية والتصوف' },
    path: '/spirituality',
    children: [
      {
        id: 'spirituality-overview',
        label: { en: 'Spiritual Path Overview', ur: 'روحانیت کا تعارف', ar: 'مدخل إلى التصوف' },
        path: '/spirituality',
        description: {
          en: 'Core concepts of Islamic Tasawwuf and heart purification',
          ur: 'اسلامی تصوف اور تزکیۂ باطن کے بنیادی اصول',
          ar: 'مفاهيم التزكية وتطهير القلوب في الإسلام',
        },
      },
      {
        id: 'zikr-e-qalbi',
        label: { en: 'Zikr-e-Qalbi (Heart Zikr)', ur: 'ذکرِ قلبی', ar: 'الذكر القلبي' },
        path: '/spirituality/zikr-e-qalbi',
        description: {
          en: 'Lataif-e-Sitta (6 subtle spiritual centers) and practical method',
          ur: 'لطائفِ ستہ اور قلب کو جاری کرنے کا مسنون طریقہ',
          ar: 'اللطائف الستة وطريقة استحضار ذكر الله في القلب',
        },
      },
      {
        id: 'tareeqa-naqshbandi',
        label: { en: 'Tareeqa Naqshbandi', ur: 'طریقہ نقشبندیہ', ar: 'الطريقة النقشبندية' },
        path: '/spirituality/tareeqa-naqshbandi',
        description: {
          en: `Foundational ${NAQSHBANDI_PRINCIPLES.length} principles of the Naqshbandi Mujaddidi path`,
          ur: `نقشبندیہ مجددیہ کے ${NAQSHBANDI_PRINCIPLES.length === 11 ? 'گیارہ' : NAQSHBANDI_PRINCIPLES.length} کلماتِ قدسیہ اور قواعد`,
          ar: `الكلمات القدسية والأصول الـ ${NAQSHBANDI_PRINCIPLES.length === 11 ? 'إحدى عشرة' : NAQSHBANDI_PRINCIPLES.length} للطريقة النقشبندية`,
        },
      },
      {
        id: 'golden-chain',
        label: { en: 'Golden Chain (Shijra)', ur: 'شجرہ عالیہ مبارکہ', ar: 'السلسلة الذهبية' },
        path: '/spirituality/golden-chain',
        description: {
          en: 'Unbroken spiritual lineage from Prophet Muhammad ﷺ',
          ur: 'رسول اکرم ﷺ سے شروع ہونے والا متصل روحانی سلسلہ',
          ar: 'سند الطريقة المتصل إلى النبي صلى الله عليه وسلم',
        },
      },
      {
        id: 'sayings',
        label: { en: 'Sayings & Malfuzat', ur: 'ارشادات و ملفوظات', ar: 'أقوال وحكم المشايخ' },
        path: '/spirituality/sayings',
        description: {
          en: 'Wisdom from Hazrat Sajjan Saeen and noble Mashaikh',
          ur: 'حضرت سجن سائیں اور اکابرین کے حکمت بھرے فرمودات',
          ar: 'حكم ومواعظ الشيخ سجن سائیں ومشايخ السلسلة',
        },
      },
    ],
  },
  {
    id: 'library',
    label: { en: 'Library', ur: 'کتب خانہ', ar: 'المكتبة' },
    path: '/library',
    children: [
      {
        id: 'library-overview',
        label: { en: 'Library Overview', ur: 'کتب خانہ کا تعارف', ar: 'دليل المكتبة' },
        path: '/library',
        description: {
          en: 'Islamic books, research papers, and periodicals',
          ur: 'کتب، مقالات اور اشاعتیں',
          ar: 'الكتب والبحوث والمجلات الإسلامية',
        },
      },
      {
        id: 'books',
        label: { en: 'Books (Kutub)', ur: 'مستند کتب', ar: 'الكتب والمؤلفات' },
        path: '/library/books',
        description: {
          en: 'Publications by Hazrat Sohna Saeen and scholarly masters',
          ur: 'حضرت سوہنا سائیں اور علمائے طاہریہ کی تصانیف',
          ar: 'مؤلفات مشايخ الطريقة وعلماء السلسلة',
        },
      },
      {
        id: 'articles',
        label: { en: 'Articles & Researches', ur: 'مضامین و مقالات', ar: 'المقالات والأبحاث' },
        path: '/articles',
        description: {
          en: 'Scholarly articles on Islamic reform, Shariah and Tariqah',
          ur: 'شریعت، طریقت اور اصلاحِ معاشرہ پر تحقیقی مضامین',
          ar: 'مقالات علمية في الشريعة والتصوف وإصلاح المجتمع',
        },
      },
      {
        id: 'blog',
        label: { en: 'Official Blog (Sajjan Saeen)', ur: 'آفیشل بلاگ', ar: 'المدونة الرسمية' },
        path: '/library/blog',
        description: {
          en: 'Direct updates from sajjansaeen.blogspot.com',
          ur: 'سجن سائیں آفیشل بلاگ کی تحریریں اور اہم اعلانات',
          ar: 'كتابات وأخبار مدونة الشيخ الرسمية',
        },
      },
      {
        id: 'at-tahir',
        label: { en: 'Monthly At-Tahir', ur: 'ماہنامہ الطاہر', ar: 'مجلة الطاهر الشهرية' },
        path: '/library/at-tahir',
        description: {
          en: 'Official monthly organ and magazine of Islah-ul-Muslimeen',
          ur: 'جماعت اصلاح المسلمین کا ترجمان علمی و روحانی رسالہ',
          ar: 'المجلة الرسمية الناطقة باسم الجمعية',
        },
      },
      {
        id: 'biographies',
        label: { en: 'Short Biographies', ur: 'سوانح و تذکرہ', ar: 'تراجم وسير المشايخ' },
        path: '/library/biographies',
        description: {
          en: 'Biographies of Pir Mitha, Khwaja Sohna Saeen, and elders',
          ur: 'پیر مٹھا، حضرت سوہنا سائیں اور اکابرین کے حالاتِ زندگی',
          ar: 'سير الأعلام والأولياء ومشايخ الطريقة',
        },
      },
      {
        id: 'translations',
        label: { en: 'Other Translations', ur: 'تراجم و دیگر زبانیں', ar: 'الترجمات الأخرى' },
        path: '/library/translations',
        description: {
          en: 'Works translated into Sindhi, English, and Arabic',
          ur: 'سندھی، انگریزی، عربی اور دیگر زبانوں کے مستند تراجم',
          ar: 'الأعمال المترجمة إلى السندية والإنجليزية والعربية',
        },
      },
      {
        id: 'khitabat',
        label: { en: 'Khitabat & Bayanat', ur: 'خطب و بیانات', ar: 'الخطب والبيانات' },
        path: '/library/khitabat',
        description: {
          en: 'Verified lectures and Urs speeches from official YouTube channel',
          ur: 'آفیشل یوٹیوب چینل کے مصدقہ خطبات و بیانات',
          ar: 'الخطب والمواعظ المعتمدة من القناة الرسمية',
        },
      },
    ],
  },
  {
    id: 'media',
    label: { en: 'Media', ur: 'میڈیا', ar: 'المرئيات والصوتيات' },
    path: '/media',
    children: [
      {
        id: 'media-overview',
        label: { en: 'Media Gallery', ur: 'مرکزی میڈیا گیلری', ar: 'معرض الوسائط' },
        path: '/media',
        description: {
          en: 'Speeches, audio recordings, video lectures, and live broadcasts',
          ur: 'بیانات، آڈیو، ویڈیوز اور لائیو پروگرامات',
          ar: 'الخطب والتسجيلات والمحاضرات والبث الحي',
        },
      },
      {
        id: 'audio',
        label: { en: 'Audio Gallery (Bayanaat/Naat)', ur: 'آڈیو گیلری (بیانات و نعت)', ar: 'التسجيلات الصوتية' },
        path: '/media/audio',
        description: {
          en: 'Speeches, Naat, Manqabat, and Zikr-e-Qalbi guidance',
          ur: 'روحانی بیانات، مسنون اذکار، نعت شریف اور مناقب',
          ar: 'خطب روحانية، مدائح نبوية، وإرشادات الذكر',
        },
      },
      {
        id: 'video',
        label: { en: 'Video Lectures', ur: 'ویڈیو خطابات', ar: 'المحاضرات المرئية' },
        path: '/media/video',
        description: {
          en: 'Official discourses of Hazrat Sajjan Saeen',
          ur: 'حضرت سجن سائیں کے ایمان افروز بصری خطابات',
          ar: 'تسجيلات مرئية لخطب الشيخ الجليل',
        },
      },
      {
        id: 'live',
        label: { en: 'Live Programs', ur: 'براہِ راست نشریات', ar: 'البث المباشر' },
        path: '/media/live',
        description: {
          en: 'Live streaming of monthly gatherings and annual Urs',
          ur: 'ماہانہ اجتماعات اور سالانہ عرس مبارک کی براہ راست نشریات',
          ar: 'جدول البث الحي للفعاليات والمناسبات الكبرى',
        },
      },
    ],
  },
  {
    id: 'events',
    label: { en: 'Events', ur: 'تقریبات', ar: 'الفعاليات والمناسبات' },
    path: '/events',
    children: [
      {
        id: 'events-overview',
        label: { en: 'Events Calendar', ur: 'پروگرامات کا شیڈول', ar: 'جدول الفعاليات' },
        path: '/events',
        description: {
          en: 'Schedule of spiritual conferences and monthly gatherings',
          ur: 'روحانی اجتماعات اور تربیتی نشستوں کا کیلنڈر',
          ar: 'مواعيد المؤتمرات الروحية واللقاءات الدورية',
        },
      },
      {
        id: 'urs',
        label: { en: 'Salana Urs Mubarak', ur: 'سالانہ عرس مبارک', ar: 'العرس السنوي المبارك' },
        path: '/events/urs',
        description: {
          en: 'Annual Urs of Hazrat Khwaja Sohna Saeen at Allahabad Sharif',
          ur: 'درگاہ اللہ آباد شریف پر سالانہ عرسِ مبارک حضرت سوہنا سائیں',
          ar: 'احتفال العرس السنوي لشيخ الطريقة في الله آباد',
        },
      },
      {
        id: 'events-archive',
        label: { en: 'Events Archive', ur: 'سابقہ اجتماعات کا ریکارڈ', ar: 'أرشيف المناسبات' },
        path: '/events/archive',
        description: {
          en: 'Historical archive of past religious conferences',
          ur: 'ماضی کے تاریخی دینی و اصلاحی اجتماعات کا ریکارڈ',
          ar: 'سجل الفعاليات والمؤتمرات الإسلامية السابقة',
        },
      },
    ],
  },
  {
    id: 'contact',
    label: { en: 'Contact', ur: 'رابطہ', ar: 'اتصل بنا' },
    path: '/contact',
  },
];
