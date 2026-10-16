import { BookItem, ArticleItem, BlogPost, LocalizedString } from '../types';

export const BOOKS_DATA: BookItem[] = [
  {
    id: 'book-1',
    title: {
      en: 'Khitabat-e-Sohna Saeen',
      ur: 'خطاباتِ سوہنا سائیں',
      ar: 'خطب سوهنا سائیں',
    },
    author: {
      en: 'Hazrat Khwaja Allah Bakhsh Abbasi (Khwaja Sohna Saeen R.A)',
      ur: 'سید العارفین حضرت خواجہ سوہنا سائیں رحمتہ اللہ علیہ',
      ar: 'الخواجه الله بخش العباسي (سوهنا سائیں)',
    },
    category: {
      en: 'Spiritual Discourses & Lectures',
      ur: 'خطابات و روحانی مواعظ',
      ar: 'المواعظ والخطب الروحية',
    },
    pages: 420,
    language: 'Urdu',
    description: {
      en: 'Comprehensive collection of the historic public lectures and heartfelt sermons of Hazrat Sohna Saeen on Islamic theology, Sunnah, and Zikr-e-Qalbi.',
      ur: 'حضرت خواجہ سوہنا سائیں نور اللہ مرقدہ کے ایمان افروز خطابات اور اصلاحی مواعظ کا مستند مجموعہ۔',
      ar: 'مجموعة شاملة للخطب والمواعظ التاريخية التي ألقاها الشيخ في بيان الشريعة وسلوك القلوب.',
    },
    hasPdf: false, // Honest handling: PDF being cataloged
    hasReadOnline: false,
    sampleChapterExcerpt: {
      en: 'Excerpt: "O beloved seekers of truth! Keep in mind that true peace is not in the accumulation of earthly dust, but in purifying the soul through silent remembrance of the Divine..."',
      ur: 'اقتباس: "اے طلبگارانِ حق! یاد رکھو کہ حقیقی سکون مال و دولت کے انبار میں نہیں، بلکہ دل کو اللہ کے ذکر سے زندہ کرنے اور سنتِ مصطفیٰ ﷺ کی پیروی میں ہے۔"',
      ar: 'مقتطف: "يا طالبي الحق! اعلموا أن السكينة الحقيقية ليست في جمع حطام الدنيا، وإنما في عمارة القلب بذكر الله تعالى وملازمة سنة نبيه الكريم ﷺ..."',
    },
  },
  {
    id: 'jalwah-gah-e-dost-english',
    slug: 'jalwah-gah-e-dost-english',
    title: {
      en: 'Jalwah Gah e Dost (English Version)',
      ur: 'جلوہ گاہِ دوست (انگریزی ترجمہ)',
      ar: 'جلوة كاه دوست (الترجمة الإنجليزية)',
    },
    author: {
      en: 'Hazrat Muhammad Tahir Naqshbandi MDZA',
      ur: 'حضرت خواجہ محمد طاہر بخشی نقشبندی مدظلہ العالی',
      ar: 'حضرة محمد طاهر نقشبندي',
    },
    translator: {
      en: 'Rauf Agha',
      ur: 'رؤف آغا',
      ar: 'رؤوف آغا',
    },
    category: {
      en: 'Books / Islamic Literature / Tasawwuf',
      ur: 'کتب / اسلامی ادب / تصوف',
      ar: 'كتب / الأدب الإسلامي / تصوف',
    },
    pages: 15,
    language: 'English',
    coverImage: '/books/covers/jalwah-gah-e-dost-cover.jpg',
    pdfUrl: '/books/Jalwah-Gah-e-Dost-English-Version.pdf',
    pdfFileName: 'Jalwah-Gah-e-Dost-English-Version.pdf',
    description: {
      en: 'Translation from pages 19-24 of Jalwah Gah e Dost by Hazrat Muhammad Tahir Naqshbandi MDZA, translated into English by Rauf Agha, recording historical accounts, universal compassion, and the spiritual radiance of Hazrat Sohna Saeen R.A.',
      ur: 'حضرت خواجہ محمد طاہر بخشی نقشبندی مدظلہ العالی کی تصنیف "جلوہ گاہِ دوست" کے صفحات ۱۹ تا ۲۴ کا انگریزی ترجمہ (مترجم: رؤف آغا)، جس میں حضرت سوہنا سائیں کے اخلاقِ کریمانہ اور فیوض و برکات کا تذکرہ ہے۔',
      ar: 'ترجمة إنجليزية لفصول مختارة من كتاب جلوة كاه دوست بقلم الشيخ محمد طاهر نقشبندي وترجمة رؤوف آغا، تروي معالم من هدي وسيرة الشيخ سوهنا سائیں.',
    },
    hasPdf: true,
    hasReadOnline: true,
    sampleChapterExcerpt: {
      en: 'Those met Huzoor Sohna Saeen R.A. used to get impressed by his pious, down to earth, loving, shariah abiding personality. This is known that on way to Mosque from his house, he used to wrap a handkerchief around his head (which we saw his whole life later on), kept sight down, and walked such gently just like an Angel in the ecstasy of the love of God enlightening the hearts of the passersby. Not only Muslims, but non-Muslims also fell in love with such characteristics. Life of Sohna Saeen was spent in the love of Allah, following of the true leader sarkar-e-madina Muhammad S.A.W, blessings on all the creatures of god and love with the entire humanity.',
      ur: 'جو لوگ حضور سوہنا سائیں رحمتہ اللہ علیہ سے ملے وہ آپ کی متقی، منکسر المزاج، شفیق اور شریعت پر سختی سے کاربند شخصیت سے بے حد متاثر ہوئے۔ آپ گلیوں سے گزرتے ہوئے نگاہیں نیچی رکھتے اور ایسی نرمی سے چلتے جیسے فرشتہ، اللہ کے عشق کی سرمستی میں راہگیروں کے دلوں کو روشن کرتے۔ صرف مسلمان ہی نہیں بلکہ غیر مسلم بھی آپ کی ان پاکیزہ صفات کے گرویدہ ہو گئے۔',
      ar: 'كان كل من التقى بحضرة الشيخ سوهنا سائیں رحمه الله يُبهر بشخصيته التقية المتواضعة المحبة المتمسكة بأحكام الشريعة... كان يغض بصره ويمشي بكل سكينة وسكينة من فيض حب الله منيراً قلوب المارين. ولم يقتصر هذا الحب على المسلمين بل أحبه الجميع لما رأوا من صدق محبته لله تعالى واتباع النبي ﷺ والرحمة بجميع خلق الله.',
    },
  },
  {
    id: 'book-2',
    slug: 'malfuzat-e-tahiriya',
    title: {
      en: 'Malfuzat-e-Tahiriya',
      ur: 'ملفوظاتِ طاہریہ',
      ar: 'الملفوظات الطاهرية',
    },
    author: {
      en: 'Hazrat Khwaja Muhammad Tahir Bakhshi (Sajjan Saeen)',
      ur: 'حضرت خواجہ محمد طاہر بخشی مدظلہ العالی (محبوب سجن سائیں)',
      ar: 'الشيخ خواجه محمد طاهر البخشي (سجن سائیں)',
    },
    category: {
      en: 'Books / Islamic Literature / Malfuzat',
      ur: 'کتب / اسلامی ادب / ملفوظات',
      ar: 'كتب / الأدب الإسلامي / ملفوظات',
    },
    pages: 208,
    year: '2013',
    language: 'Urdu',
    coverImage: '/assets/library/malfuzat-tahiriya-cover.png',
    pdfUrl: '/assets/library/Malfuzat-Tahiriya-2013-Urdu.pdf',
    pdfFileName: 'Malfuzat-Tahiriya-2013-Urdu.pdf',
    publisher: {
      en: 'Maktaba Tahiriya / Jamaat Islah-ul-Muslimeen',
      ur: 'مکتبہ طاہریہ / جماعت اصلاح المسلمین',
      ar: 'مكتبة طاهرية / جماعة إصلاح المسلمين',
    },
    description: {
      en: 'Authentic compilation of the spiritual discourses, moral teachings, and practical guidance of Hazrat Khwaja Muhammad Tahir Bakhshi (Sajjan Saeen) for contemporary spiritual seekers.',
      ur: 'سلسلہ عالیہ نقشبندیہ مجددیہ طاہریہ کے امام و مربی حضرت خواجہ محمد طاہر بخشی مدظلہ العالی (محبوب سجن سائیں) کے گرانقدر ارشادات، ملفوظات اور روحانی تربیت کا مستند مجموعہ۔',
      ar: 'مجموعة معتمدة لمواعظ وإرشادات الشيخ خواجه محمد طاهر البخشي (سجن سائیں) في تزكية النفوس وملازمة السنة النبوية والسلوك إلى الله.',
    },
    hasPdf: true,
    hasReadOnline: true,
    sampleChapterExcerpt: {
      en: 'Excerpt: "True piety is not merely outer form; it is when your secret thoughts match your outward righteousness, and you seek nothing except Allah\'s divine countenance."',
      ur: 'اقتباس: "تقویٰ صرف ظاہری لباس کا نام نہیں، بلکہ تقویٰ یہ ہے کہ تمہارا باطن تمہارے ظاہر سے زیادہ روشن ہو اور تمہاری نیت میں سوائے رضائے الٰہی کے کچھ نہ ہو۔"',
      ar: 'مقتطف: "ليس التقوى مجرد مظهر خارجي، بل التقوى أن يكون سرك أصلح من علانيتك، وألا تبتغي بعملك إلا وجه الله تعالى."',
    },
  },
  {
    id: 'book-3',
    title: {
      en: 'Zikr-e-Ilahi Aur Uske Fawaid',
      ur: 'ذکرِ الٰہی اور اس کے فوائد',
      ar: 'ذكر الله تعالى وثماره',
    },
    author: {
      en: 'Scholars of Jamiat-e-Ulema Tahiriya',
      ur: 'علمائے جمعیت علمائے طاہریہ',
      ar: 'علماء الجمعية الطاهرية',
    },
    category: {
      en: 'Quran & Sunnah Research',
      ur: 'تحقیقی و شرعی مطالعہ',
      ar: 'دراسات في الكتاب والسنة',
    },
    pages: 180,
    language: 'Urdu',
    description: {
      en: 'Scholarly treatise citing over 100 Quranic verses and authentic traditions of Prophet Muhammad ﷺ validating silent heart remembrance (Zikr-e-Khafi).',
      ur: 'قرآن و حدیث کی مستند روشنی میں ذکرِ خفی، لطائفِ ستہ اور مراقبہ کے شرعی دلائل پر مبنی علمی مقالہ۔',
      ar: 'بحث علمي موثق يستدل بأكثر من مائة آية وحديث شريف على مشروعية الذكر الخفي والمراقبة.',
    },
    hasPdf: false,
    hasReadOnline: true,
    sampleChapterExcerpt: {
      en: 'Excerpt: "The consensus of the righteous Salaf confirms that the silent remembrance of the heart has seventy times more spiritual efficacy than vocal repetition alone."',
      ur: 'اقتباس: "سلف صالحین کا اتفاق ہے کہ باطنی اور قلبی ذکر کی تاثیر اور اخلاص ظاہری آواز والے ذکر سے کئی گنا زیادہ ہے۔"',
      ar: 'مقتطف: "أجمع أئمة السلف على أن ذكر القلب الخالي من الرياء هو أصل الإخلاص ومفتاح الفتوحات الربانية."',
    },
  },
  {
    id: 'book-4',
    title: {
      en: 'Tazkira Pir Mitha (R.A)',
      ur: 'تذکرۂ پیر مٹھا رحمتہ اللہ علیہ',
      ar: 'تذكرة بير مِثّا رحمه الله',
    },
    author: {
      en: 'Maktaba Tahiriya Editorial Board',
      ur: 'ادارہ اشاعتِ طاہریہ',
      ar: 'هيئة التحرير بمكتبة طاهرية',
    },
    category: {
      en: 'Spiritual Biography',
      ur: 'سوانح و حیاتِ طیبہ',
      ar: 'سير الأعلام والأولياء',
    },
    pages: 290,
    language: 'Urdu',
    description: {
      en: 'Detailed biographical account of the sublime spiritual master Hazrat Khwaja Abdul Ghaffar (Pir Mitha) and his tireless propagation of Islam in Sindh.',
      ur: 'سید العارفین حضرت خواجہ پیر مٹھا کے حیات و خدمات، کرامات اور اصلاحی تحریک کی تاریخ۔',
      ar: 'سيرة مفصلة لشيخ العارفين الخواجه عبد الغفار (بير مِثّا) وجهاده العظيم في نشر الهداية ببلاد السند.',
    },
    hasPdf: false,
    hasReadOnline: false, // Will display Coming Soon honest status
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'brief-daily-practices-in-tariqa-aliya-naqshbandia',
    title: {
      en: 'Brief (daily) Practices in Tariqa Aliya Naqshbandia',
      ur: 'طریقہ عالیہ نقشبندیہ میں یومیہ مختصر معمولات',
      ar: 'الأوراد اليومية الموجزة في الطريقة العلية النقشبندية',
    },
    author: {
      en: 'Hadhrat Khawja Muhammad Tahir Bakhshi Naqshbandi',
      ur: 'حضرت خواجہ محمد طاہر بخشی نقشبندی مدظلہ العالی',
      ar: 'حضرة خواجه محمد طاهر بخشي نقشبندي',
    },
    category: {
      en: 'Tariqa Practices',
      ur: 'معمولاتِ طریقت',
      ar: 'أوراد الطريقة',
    },
    date: 'Official PDF Publication',
    readTime: '4 min read (2 pages)',
    excerpt: {
      en: 'Essential daily spiritual practices in Tariqa Aliya Naqshbandia Mujaddidiya Fadalia Ghaffariya Bakhshiya, excerpted from Jalwah Gaahe Doost. Covers Quran recitation, Kalimah Tayibah, Durood Shareef, Astaghfaar, Tahajjud, and Munajat.',
      ur: 'کتاب جلوہ گاہِ دوست سے ماخوذ طریقہ عالیہ نقشبندیہ مجددیہ فضلیہ غفاریہ بخشیہ کے یومیہ مسنون معمولات، تلاوتِ قرآن، کلمہ طیبہ، درود شریف، استغفار، صلوٰۃ التہجد، شجرہ عالیہ، اور مسنون دعائیں مع رمضان المبارک کی عبادات۔',
      ar: 'أوراد وأذكار يومية مباركة في الطريقة العلية النقشبندية المجددية من كتاب جلوة كاه دوست، تشمل تلاوة القرآن، الكلمة الطيبة، الاستغفار، صلاة التهجد، أذكار النوم وسنن الاستيقاظ.',
    },
  },
  {
    id: 'halqa-e-zikr-or-muraqaba-or-meditation',
    title: {
      en: 'Halqa-e-Zikr or Muraqaba or Meditation',
      ur: 'حلقہ ذکر یا مراقبہ (مسنون طریقہ اور فضائل)',
      ar: 'حلقة الذكر والمراقبة والتأمل القلبي',
    },
    author: {
      en: 'Maulana Habib-ur-Rahman Gabool',
      ur: 'مولانا حبیب الرحمن گبول',
      ar: 'مولانا حبيب الرحمن كبول',
    },
    category: {
      en: 'Muraqaba & Meditation',
      ur: 'مراقبہ و ذکر',
      ar: 'المراقبة والذكر',
    },
    date: 'Official PDF Publication',
    readTime: '7 min read (4 pages)',
    excerpt: {
      en: 'Excerpts from Seerat-e-Wali Kamil (Vol 1, 1st Edition) on the foundations and practice of Halqa-e-Zikr and Muraqaba in Tareeqa-e-Aaliya Naqshbandia. Details the large-bead chaplet history, Hazoor Sohna Saeen’s routine, and group and individual meditation methods.',
      ur: 'سیرتِ ولی کامل سے ماخوذ حضرت سوہنا سائیں نور اللہ مرقدہ کی تعلیمات پر مبنی حلقہ ذکر اور مراقبہ کی حقیقت، تاریخی پس منظر، بڑے دانوں والی تسبیح کا معمول، اور طریقہ عالیہ نقشبندیہ میں اجتماعی و انفرادی مراقبہ کا جامع طریقہ کار۔',
      ar: 'مقتطفات من كتاب سيرة ولي كامل لمولانا حبيب الرحمن كبول، يبين المعنى اللغوي والروحي للمراقبة وحلقات الذكر في الطريقة النقشبندية وأسلوب المراقبة الجماعية والفردية.',
    },
  },
  {
    id: 'remembering-allah-the-only-god',
    title: {
      en: 'Remembering Allah (The only God)',
      ur: 'ذکرِ الٰہی اور ذکرِ قلبی کی حقیقت و فضیلت',
      ar: 'ذكر الله تعالى وحقيقة الذكر القلبي الخفي',
    },
    author: {
      en: 'Hazrat Muhammad Tahir Naqshbandi',
      ur: 'حضرت محمد طاہر نقشبندی دامت برکاتہم العالیہ',
      ar: 'حضرة محمد طاهر نقشبندي',
    },
    category: {
      en: 'Remembrance of Allah',
      ur: 'ذکرِ الٰہی',
      ar: 'ذكر الله',
    },
    date: 'Official PDF Publication',
    readTime: '8 min read (4 pages)',
    excerpt: {
      en: 'Excerpt from Jalwa Gah-e-Dost (Pages 38-42, 2nd Edition) expounding the method and spiritual rank of silent heart remembrance (Zikr-e-Qalbi). Cites Surah An-Noor (24:37), Imam Rabbani Mujaddid Alf-e-Thani, and Hadith affirming silent zikr is 70 times superior.',
      ur: 'کتاب جلوہ گاہِ دوست کے صفحات ۳۸ تا ۴۲ سے ماخوذ حضرت محبوبِ سجن سائیں مدظلہ العالی کا علمی و روحانی مقالہ جس میں ذکرِ قلبی کا طریقہ، امام ربانی مجدد الف ثانی کے مکتوبات، اور ملا علی قاری کے حوالے سے اخفاء ذکر کی ۷۰ گنا زیادہ فضیلت واضح کی گئی ہے۔',
      ar: 'بحث روحي مستل من كتاب جلوة كاه دوست يبين فضل الذكر القلبي وطريقته في الصدر بلا حركة اللسان، مستشهداً بنصوص القرآن ووصايا الإمام المجدد ألف ثاني وحديث فضل الذكر الخفي بسبعين ضعفاً.',
    },
  },
  {
    id: 'what-is-tasawwuf',
    title: {
      en: 'What is Tasawwuf?',
      ur: 'تصوف کیا ہے؟ (تعریف، تاریخ، اور شبہات کا تحقیقی جواب)',
      ar: 'ما هو التصوف الإسلامي؟ الحقيقة والتاريخ ورد الشبهات',
    },
    author: {
      en: 'Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi Mujaddadi Mudzila A’ali',
      ur: 'حضرت شیخ المشائخ خواجہ محمد طاہر عباسی نقشبندی مجددی مدظلہ العالی',
      ar: 'حضرة شيخ المشايخ خواجه محمد طاهر عباسي نقشبندي مجددي',
    },
    category: {
      en: 'Tasawwuf & Shariah',
      ur: 'شریعت و تصوف',
      ar: 'الشريعة والتصوف',
    },
    date: 'Official PDF Publication',
    readTime: '18 min read (9 pages)',
    excerpt: {
      en: 'Authoritative scholarly treatise defining the reality of Tasawwuf as pure Shariah and inner purification. Synthesizes classical definitions from early masters, Imam Ghazali’s Al-Munqidh, history of Tasawwuf literature, and answers 7 major contemporary doubts.',
      ur: 'حضرت شیخ المشائخ سجادہ نشین درگاہ اللہ آباد شریف کا معرکہ آرا تحقیقی مقالہ جس میں تصوف اور صوفی کی جامع تعریف، ائمہ سلف کے اقوال، امام غزالی کا مؤقف، لفظ صوفی کا تاریخی ارتقاء، اور تصوف پر وارد ہونے والے سات بنیادی اعتراضات و شبہات کے مسکت و مدلل جوابات دیئے گئے ہیں۔',
      ar: 'رسالة علمية أصيلة لشيخ المشايخ خواجه محمد طاهر عباسي نقشبندي، تبين حقيقة التصوف السني كجوهر للشريعة، مع استعراض تاريخي مفصل ورد منهجي محكم على الشبهات المعاصرة.',
    },
  },
];


export const OFFICIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-post-1',
    title: {
      en: 'Discourse on the Sacredness of Intention (Niyyah)',
      ur: 'خلوصِ نیت اور اخلاصِ عمل کی اہمیت پر خصوصی خطاب',
      ar: 'كلمة في فضل الإخلاص وتجريد النية لله',
    },
    date: 'November 2024',
    author: {
      en: 'Hazrat Sajjan Saeen Office',
      ur: 'دفتر حضرت سجن سائیں',
      ar: 'المكتب الإعلامي للشيخ',
    },
    excerpt: {
      en: 'Summary of Hazrat Sajjan Saeen’s address reminding disciples that deeds without pure intention are like empty shells without kernels.',
      ur: 'حضرت سجن سائیں کے خصوصی خطاب کا خلاصہ جس میں نیت کی درستی اور ریاکاری سے بچنے کی پرزور تلقین فرمائی گئی۔',
      ar: 'خلاصة موعظة قيمة حول تصحيح النوايا واعتبار العمل بالإخلاص لا بالمظاهر.',
    },
    url: 'https://sajjansaeen.blogspot.com/',
    category: { en: 'Spiritual Discourses', ur: 'روحانی بیانات', ar: 'مواعظ إيمانية' },
  },
  {
    id: 'blog-post-2',
    title: {
      en: 'Announcements for the Annual Urs Mubarak at Allahabad Sharif',
      ur: 'درگاہ اللہ آباد شریف کے سالانہ عرسِ مبارک کے انتظامات و ہدایات',
      ar: 'توجيهات وإرشادات العرس السنوي المبارك',
    },
    date: 'October 2024',
    author: {
      en: 'Dargah Management Committee',
      ur: 'انتظامیہ درگاہ اللہ آباد شریف',
      ar: 'لجنة إدارة دركاه الله آباد',
    },
    excerpt: {
      en: 'Guidelines for caravans and pilgrims arriving from all provinces of Pakistan and overseas for the annual congregation.',
      ur: 'سالانہ عرس مبارک میں شرکت کرنے والے قافلوں، زائرین اور مہمانوں کے لیے اہم تنظیمی و شرعی ہدایات۔',
      ar: 'إرشادات تنظيمية للوفود والزائرين القادمين من شتى البقاع لحضور التجمع السنوي الكبير.',
    },
    url: 'https://sajjansaeen.blogspot.com/',
    category: { en: 'Official Announcements', ur: 'مرکزی اعلانات', ar: 'بيانات رسمية' },
  },
  {
    id: 'blog-post-3',
    title: {
      en: 'The Spiritual Legacy of Hazrat Khwaja Sohna Saeen',
      ur: 'بانی جماعت حضرت خواجہ سوہنا سائیں کی دینی و علمی خدمات',
      ar: 'المآثر العلمية والروحية للشيخ سوهنا سائیں',
    },
    date: 'August 2024',
    author: {
      en: 'Editorial Team',
      ur: 'ادارہ بلاگ',
      ar: 'فريق التحرير',
    },
    excerpt: {
      en: 'A tribute reflecting upon the foundation of Jamaat Islah-ul-Muslimeen and its continuing growth across the globe.',
      ur: 'حضرت سوہنا سائیں کے عزم، استقامت اور جماعت اصلاح المسلمین کی بنیاد کے تاریخی پس منظر پر بصیرت افروز تحریر۔',
      ar: 'مقالة استذكارية لمسيرة تأسيس الجمعية وجهود الإمام الراحل في جمع كلمة المسلمين.',
    },
    url: 'https://sajjansaeen.blogspot.com/',
    category: { en: 'Biographical Tribute', ur: 'سوانحی خراجِ عقیدت', ar: 'سير وتراجم' },
  },
];

export interface MagazineIssue {
  id: string;
  issueNumber: string;
  monthYear: LocalizedString;
  coverTitle: LocalizedString;
  status: 'archived' | 'cataloging';
}

export interface Biography {
  id: string;
  name: LocalizedString;
  title: LocalizedString;
  lifespan: string;
  restingPlace: LocalizedString;
  summary: LocalizedString;
  legacy: LocalizedString;
}

export const BIOGRAPHIES_DATA: Biography[] = [
  {
    id: 'bio-pir-mitha',
    name: {
      en: 'Hazrat Khwaja Abdul Ghaffar Naqshbandi (Pir Mitha R.A)',
      ur: 'حضرت خواجہ عبد الغفار نقشبندی فضلی (پیر مٹھا رحمۃ اللہ علیہ)',
      ar: 'حضرة الشيخ عبد الغفار النقشبندي (بير مٹھا رحمه الله)',
    },
    title: {
      en: 'Qutb-ul-Aqtab & Master of the Naqshbandi Tariqah',
      ur: 'قطب الاقطاب، مرشدِ برحق، درگاہ رحمت پور شریف',
      ar: 'قطب الأقطاب وشيخ الطريقة النقشبندية برحمت پور شريف',
    },
    lifespan: '1880 – 1964 CE (1297 – 1384 AH)',
    restingPlace: {
      en: 'Dargah Rahmatpur Sharif, Larkana, Sindh, Pakistan',
      ur: 'درگاہ رحمت پور شریف، لاڑکانہ، سندھ، پاکستان',
      ar: 'دركاه رحمت پور شريف، لاركانه، السند، باكستان',
    },
    summary: {
      en: 'Hazrat Pir Mitha R.A was a towering spiritual master of the Naqshbandi Mujaddidi order. He revived continuous Zikr-e-Qalbi in the hearts of millions across the Indian subcontinent.',
      ur: 'حضرت پیر مٹھا رحمۃ اللہ علیہ نے طریقتِ نقشبندیہ مجددیہ کی اشاعت فرمائی اور لاکھوں دلوں کو ذکرِ الٰہی سے منور فرمایا۔ آپ نے شریعت و سنت کی سخت پابندی کی تلقین فرمائی۔',
      ar: 'من كبار مشايخ الطريقة النقشبندية المجددية. أحيا مجالس الذكر والاتباع النبوي وتخرج على يديه مئات الآلاف من السالكين والعلماء.',
    },
    legacy: {
      en: 'Chief spiritual heir was Hazrat Khwaja Sohna Saeen R.A, who institutionalized the mission through Jamaat Islah-ul-Muslimeen.',
      ur: 'آپ کے اجل خلفاء میں حضرت خواجہ سوہنا سائیں رحمۃ اللہ علیہ شامل ہیں جن کو آپ نے مسندِ طریقت عطا فرمائی۔',
      ar: 'خليفته الأجل ومجدد دعوته كان الشيخ سوهنا سائیں رحمه الله تعالى مؤسس جمعية إصلاح المسلمين.',
    },
  },
  {
    id: 'bio-sohna-saeen',
    name: {
      en: 'Hazrat Khwaja Allah Bakhsh Abbasi (Khwaja Sohna Saeen R.A)',
      ur: 'حضرت خواجہ اللہ بخش عباسی غفاری (خواجہ سوہنا سائیں رحمۃ اللہ علیہ)',
      ar: 'حضرة الشيخ الله بخش العباسي الغفاري (سوهنا سائیں رحمه الله)',
    },
    title: {
      en: 'Founder of Jamaat Islah-ul-Muslimeen & Dargah Allahabad Sharif',
      ur: 'بانی جماعت اصلاح المسلمین و درگاہ اللہ آباد شریف، کندیارو',
      ar: 'مؤسس جمعية إصلاح المسلمين ودركاه الله آباد شريف بكنديارو',
    },
    lifespan: '1910 – 1983 CE (1328 – 1404 AH)',
    restingPlace: {
      en: 'Dargah Allahabad Sharif, Kandiaro, District Naushahro Feroze, Sindh',
      ur: 'درگاہ اللہ آباد شریف، کندیارو، ضلع نوشہرو فیروز، سندھ، پاکستان',
      ar: 'دركاه الله آباد شريف، كنديارو، إقليم السند، باكستان',
    },
    summary: {
      en: 'Founder of Jamaat Islah-ul-Muslimeen, established to awaken non-sectarian spiritual reform, spread Zikr-e-Qalbi, and build welfare networks and schools across urban and rural regions.',
      ur: 'بانی جماعت اصلاح المسلمین، جنھوں نے دینی و دنیاوی تعلیم کی یکجائی، مسنون اذکار کے عام کرنے اور طبقاتی امتیازات کے خاتمے کے لیے ہمہ گیر جدوجہد فرمائی۔',
      ar: 'أسس جمعية إصلاح المسلمين لخدمة الشريعة الإسلامية ونشر التصوف السني والتربية الأخلاقية وتأسيس المدارس والمراكز الخيرية.',
    },
    legacy: {
      en: 'Established dozens of spiritual centers, including Dargah Allahabad Sharif, and initiated publication of scholarly and spiritual magazines.',
      ur: 'ملک بھر میں سینکڑوں مساجد، مدارس اور روحانی مراکز کی بنیاد رکھی اور اپنی زندگی سنتِ رسول ﷺ کے احیاء کے لیے وقف فرمائی۔',
      ar: 'أنشأ مئات المساجد والمدارس الدينية وربط مئات الآلاف من المسلمين بحلقات الذكر النبوي المبارك.',
    },
  },
  {
    id: 'bio-qureshi',
    name: {
      en: 'Hazrat Pir Fazal Ali Shah Qureshi Naqshbandi R.A',
      ur: 'حضرت پیر فضل علی شاہ قریشی نقشبندی (رحمۃ اللہ علیہ)',
      ar: 'حضرة الشيخ فضل علي شاه القريشي النقشبندي (رحمه الله)',
    },
    title: {
      en: 'Great Luminary of the Golden Chain & Master of Miskinpur Sharif',
      ur: 'سلسلہ عالیہ نقشبندیہ کے عظیم پیشوا، مسکین پور شریف',
      ar: 'إمام السلسلة النقشبندية بشريف مسكين پور',
    },
    lifespan: '1853 – 1935 CE (1270 – 1354 AH)',
    restingPlace: {
      en: 'Dargah Miskinpur Sharif, District Muzaffargarh, Punjab, Pakistan',
      ur: 'درگاہ مسکین پور شریف، ضلع مظفر گڑھ، پنجاب، پاکستان',
      ar: 'دركاه مسكين پور شريف، إقليم البنجاب، باكستان',
    },
    summary: {
      en: 'The venerable spiritual guide of Hazrat Pir Mitha R.A, whose khanqah in Miskinpur Sharif was a lighthouse of Islamic orthodoxy, Tazkiyah, and deep Quranic attachment.',
      ur: 'حضرت پیر مٹھا رحمۃ اللہ علیہ کے شیخِ محترم، جن کی خانقاہِ مسکین پور شریف برصغیر کے لیے علم و معرفت اور سنتِ مصطفیٰ ﷺ کا عظیم مینار ثابت ہوئی۔',
      ar: 'شيخ حضرة بير مٹھا رحمه الله، ومن كبار محيي السنة في شبه القارة الهندية، تميزت طريقته بالصرامة في اتباع السنة النبوية.',
    },
    legacy: {
      en: 'Trained hundreds of authorized deputies (Khulafa) who disseminated spiritual guidance across Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan.',
      ur: 'آپ کے تربیت یافتہ خلفاء نے پورے برصغیر میں اسلامی بیداری اور تزکیۂ نفس کی عظیم خدمات انجام دیں۔',
      ar: 'تخرج عليه أئمة كبار نقلوا نور الطريقة النقشبندية إلى كل أرجاء العالم الإسلامي.',
    },
  },
  {
    id: 'bio-sajjan-saeen',
    name: {
      en: 'Hazrat Khwaja Muhammad Tahir Bakhshi (Hazrat Sajjan Saeen)',
      ur: 'حضرت خواجہ محمد طاہر بخشی (محبوب سجن سائیں دامت برکاتہم العالیہ)',
      ar: 'حضرة الشيخ خواجه محمد طاهر بخشي (سجن سائیں حفظه الله)',
    },
    title: {
      en: 'Present Spiritual Master & Supreme Leader of Islah-ul-Muslimeen',
      ur: 'امیرِ جماعت اصلاح المسلمین و سجادہ نشین درگاہ اللہ آباد شریف',
      ar: 'أمير جمعية إصلاح المسلمين وشيخ الطريقة الحالي بدركاه الله آباد',
    },
    lifespan: '1963 CE – Present',
    restingPlace: {
      en: 'Currently residing at Dargah Allahabad Sharif, Sindh, Pakistan',
      ur: 'مسند نشین درگاہ اللہ آباد شریف، کندیارو، سندھ',
      ar: 'حفظه الله تعالى وبارك في عمره وعلمه',
    },
    summary: {
      en: 'The current Ameer of Jamaat Islah-ul-Muslimeen and Murshid of the Naqshbandi Tahiri order. Leading international tours, youth reformation, interfaith harmony, and modern institutional welfare projects.',
      ur: 'بانی جماعت حضرت سوہنا سائیں کے جانشین اور موجودہ مرشدِ کامل۔ آپ کی زیرِ سرپرستی جماعت نے عالمی سطح پر دعوت و تبلیغ، اصلاحِ معاشرہ اور روحانی تربیت کے جدید مراکز قائم کیے۔',
      ar: 'يقود الجمعية بحكمة وبصيرة في العصر الراهن، ويسافر للدعوة والإصلاح في شتى بلدان العالم مع التركيز على الشباب وخدمة كتاب الله.',
    },
    legacy: {
      en: 'Supervising the ongoing development of the Grand Mosque Allahabad Sharif, modern schools, health dispensaries, and publishing institutions.',
      ur: 'جامع مسجد اللہ آباد شریف کی توسیع، طاہری ڈسپنسریوں، مدارس اور دینی اشاعت کے عظیم الشان منصوبوں کی براہِ راست نگرانی فرماتے ہیں۔',
      ar: 'يشرف على توسعة الجامع الكبير في الله آباد ومشاريع التعليم والرعاية الصحية وطباعة المراجع الإسلامية.',
    },
  },
];

export interface TranslationItem {
  id: string;
  title: LocalizedString;
  originalLanguage: string;
  targetLanguages: string[];
  status: 'published' | 'in_translation' | 'cataloging';
  author: LocalizedString;
  description: LocalizedString;
}

export const TRANSLATIONS_DATA: TranslationItem[] = [
  {
    id: 'trans-1',
    title: {
      en: 'Tuhfat-ut-Tahiriya: Comprehensive Spiritual Compendium',
      ur: 'تحفۂ طاہریہ: طریقتِ نقشبندیہ مجددیہ کا مفصل انسائیکلوپیڈیا',
      ar: 'التحفة الطاهرية: في سلوك الطريقة النقشبندية المجددية',
    },
    originalLanguage: 'Sindhi / Urdu',
    targetLanguages: ['English', 'Arabic'],
    status: 'published',
    author: {
      en: 'Scholars of Jamaat Islah-ul-Muslimeen',
      ur: 'علمائے طاہریہ و محققین درگاہ اللہ آباد شریف',
      ar: 'علماء دركاه الله آباد شريف',
    },
    description: {
      en: 'Primary reference work delineating the principles, adhkar, and spiritual conduct of the Naqshbandi Tahiri order.',
      ur: 'طریقہ نقشبندیہ مجددیہ طاہریہ کے اذکار، اوراد، لطائف اور اخلاقی قواعد کا بنیادی دستاویزی مأخذ۔',
      ar: 'المرجع الرئيس لقواعد وأوراد وسلوك الطريقة النقشبندية المجددية الطاهرية.',
    },
  },
  {
    id: 'trans-2',
    title: {
      en: 'Malfuzat-e-Sohna Saeen (Spiritual Discourses)',
      ur: 'ملفوظاتِ مبارکہ حضرت خواجہ سوہنا سائیں رحمۃ اللہ علیہ',
      ar: 'ملفوظات الشيخ سوهنا سائیں رحمه الله',
    },
    originalLanguage: 'Sindhi',
    targetLanguages: ['Urdu', 'English'],
    status: 'published',
    author: {
      en: 'Hazrat Khwaja Allah Bakhsh Abbasi (R.A)',
      ur: 'حضرت خواجہ سوہنا سائیں رحمۃ اللہ علیہ',
      ar: 'الشيخ سوهنا سائیں رحمه الله',
    },
    description: {
      en: 'Direct spiritual admonitions and addresses on character reform, devotion to Allah, and eradication of pride.',
      ur: 'حضرت سوہنا سائیں کے اصلاحی بیانات، جن میں خلوصِ نیت، نماز کی پابندی اور کبر و غرور سے نجات کا درس دیا گیا ہے۔',
      ar: 'المواعظ الروحية والنصائح التربوية في تصفية البواطن وتطهير القلوب.',
    },
  },
  {
    id: 'trans-3',
    title: {
      en: 'Principles of Heart Purification (Lataif-e-Sitta)',
      ur: 'تزکیۂ باطن اور لطائفِ ستہ کی حقیقت و عملی طریقہ',
      ar: 'حقائق اللطائف الستة في السلوك النقشبندي',
    },
    originalLanguage: 'Urdu',
    targetLanguages: ['English', 'Sindhi', 'Arabic'],
    status: 'in_translation',
    author: {
      en: 'Research Wing, Islah-ul-Muslimeen',
      ur: 'شعبۂ تحقیق و تصنیف، جماعت اصلاح المسلمین',
      ar: 'مركز البحوث والترجمة بالجمعية',
    },
    description: {
      en: 'A scholarly translation providing clear guidance for modern English and Arabic readers on internal heart remembrance.',
      ur: 'انگریزی اور عربی داں قارئین کے لیے ذکرِ قلبی کے سائنسی اور قرآنی اصولوں پر مبنی جدید تحقیقی کتابچہ۔',
      ar: 'ترجمة علمية موجهة للناطقين بالإنجليزية والعربية لشرح معاني الذكر القلبي.',
    },
  },
  {
    id: 'trans-4',
    title: {
      en: 'Selected Sermons of Hazrat Sajjan Saeen (International Edition)',
      ur: 'منتخب خطابات حضرت سجن سائیں (بین الاقوامی ایڈیشن)',
      ar: 'مختارات من خطب الشيخ سجن سائیں (الطبعة الدولية)',
    },
    originalLanguage: 'Urdu / Sindhi',
    targetLanguages: ['English', 'Arabic'],
    status: 'cataloging',
    author: {
      en: 'Hazrat Khwaja Muhammad Tahir Bakhshi',
      ur: 'حضرت خواجہ محمد طاہر بخشی (محبوب سجن سائیں)',
      ar: 'الشيخ خواجه محمد طاهر بخشي',
    },
    description: {
      en: 'Addresses delivered in Europe, the Middle East, and Asia focusing on universal brotherhood and prophetic guidance.',
      ur: 'برطانیہ، مشرق وسطیٰ اور پاکستان میں دیے گئے اصلاحی خطابات کا بین الاقوامی مجموعہ۔',
      ar: 'مجموعة من الخطب الدعوية الموجهة للمسلمين في الشرق والغرب.',
    },
  },
];

export const AT_TAHIR_ISSUES: MagazineIssue[] = [
  {
    id: 'at-tahir-77',
    issueNumber: 'Issue No. 77',
    monthYear: { en: 'October 2018', ur: 'اکتوبر 2018ء', ar: 'أكتوبر 2018م' },
    coverTitle: {
      en: 'At-Tahir — Issue No. 77',
      ur: 'ماہنامہ الطاہر — شمارہ نمبر 77',
      ar: 'مجلة الطاهر — العدد رقم 77',
    },
    status: 'cataloging',
  },
];

export const getBookBySlug = (slug: string): BookItem | undefined => {
  return BOOKS_DATA.find((b) => b.slug === slug || b.id === slug);
};



