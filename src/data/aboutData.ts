import { LocalizedString } from '../types';

export interface AboutSectionData {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  content: LocalizedString[];
  highlights?: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export const ABOUT_OVERVIEW_DATA: AboutSectionData = {
  id: 'about-overview',
  title: {
    en: 'About Jamaat Islah-ul-Muslimeen',
    ur: 'جماعت اصلاح المسلمین کا تعارف',
    ar: 'عن جمعية إصلاح المسلمين',
  },
  subtitle: {
    en: 'An International Movement for Moral, Educational, and Spiritual Revival',
    ur: 'اخلاقی، تعلیمی اور روحانی احیاء کی ایک عالمی و منظم تحریک',
    ar: 'حركة عالمية للتزكية الروحية والإصلاح الاجتماعي والتعليم الإسلامي',
  },
  content: [
    {
      en: 'Jamaat Islah-ul-Muslimeen is a non-political, purely religious and spiritual welfare organization founded in 1983 by the eminent Naqshbandi master, Hazrat Khwaja Allah Bakhsh Abbasi, affectionately venerated as Hazrat Khwaja Sohna Saeen (R.A). Headquartered at Dargah Allahabad Sharif in Kandiaro, Sindh, Pakistan, the movement works tirelessly to revitalize the Islamic character of society.',
      ur: 'جماعت اصلاح المسلمین ایک غیر سیاسی، خالص دینی، تعلیمی اور روحانی و فلاحی تنظیم ہے جس کی بنیاد 1983ء میں عظیم نقشبندی بزرگ سیدنا و مرشدنا حضرت خواجہ اللہ بخش عباسی المعروف حضرت خواجہ سوہنا سائیں نور اللہ مرقدہ نے رکھی۔ اس کا مرکزی ہیڈ کوارٹر درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان میں واقع ہے۔',
      ar: 'جمعية إصلاح المسلمين هي منظمة دينية وروحية وتربوية غير سياسية، أسسها الشيخ العارف بالله الخواجه الله بخش العباسي الشهير بـ "سوهنا سائیں" عام 1983م. يقع مقرها العام في دركاه الله آباد شريف بمديرية نوشهرو فيروز، إقليم السند، باكستان.',
    },
    {
      en: 'The mission of Islah-ul-Muslimeen focuses on instilling love for Prophet Muhammad ﷺ, spreading silent heart remembrance (Zikr-e-Qalbi), encouraging adherence to the pristine Sunnah and Shariah, and fostering brotherly harmony across all strata of the Muslim Ummah.',
      ur: 'جماعت کا بنیادی مقصد مسلمانوں کے دلوں میں حبِ رسول ﷺ کو اجاگر کرنا، ذکرِ قلبی کے ذریعے باطنی صفائی پیدا کرنا، شریعت و سنت کی عملی پاسداری اور امتِ مسلمہ کے درمیان اخوت و ہم آہنگی کو فروغ دینا ہے۔',
      ar: 'تهدف الجمعية إلى غرس محبة النبي ﷺ، ونشر الذكر القلبي الخفي، وإلزام السلوك بمقتضى الشريعة والسنة النبوية الشريفة، وتوثيق عرى الأخوة بين عموم المسلمين.',
    },
  ],
  highlights: [
    {
      title: { en: 'Founded in 1983', ur: '1983ء میں قیام', ar: 'تأسست عام 1983م' },
      description: {
        en: 'By Hazrat Khwaja Allah Bakhsh Abbasi (Khwaja Sohna Saeen)',
        ur: 'سید العارفین حضرت خواجہ سوہنا سائیں نور اللہ مرقدہ کی بابرکت سرپرستی میں',
        ar: 'برعاية وإشراف الشيخ الخواجه سوهنا سائیں رحمه الله',
      },
    },
    {
      title: { en: 'Spiritual Center', ur: 'مرکزی درگاہِ عالیہ', ar: 'المركز الروحي' },
      description: {
        en: 'Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan',
        ur: 'درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سندھ',
        ar: 'دركاه الله آباد شريف، إقليم السند، باكستان',
      },
    },
    {
      title: { en: 'Global Halqas', ur: 'عالمی نیٹ ورک', ar: 'حلقات الذكر العالمية' },
      description: {
        en: 'Thousands of weekly Zikr gatherings across Pakistan, Gulf, UK, and worldwide',
        ur: 'پاکستان، مشرقِ وسطیٰ، برطانیہ اور دنیا بھر میں ہزاروں ہفتہ وار حلقہ ہائے ذکر',
        ar: 'آلاف الحلقات الدعوية والتربوية في باكستان والخليج وأوروبا',
      },
    },
  ],
};

export const SHEIKH_PROFILE_DATA: AboutSectionData = {
  id: 'about-sheikh',
  title: {
    en: 'His Profile: Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)',
    ur: 'سیرت و سوانح: حضرت خواجہ محمد طاہر (محبوب سجن سائیں)',
    ar: 'سيرة الشيخ: الخواجه محمد طاهر (سجن سائیں)',
  },
  subtitle: {
    en: 'Current Spiritual Head & Leader of Silsila Naqshbandia Mujaddidia Tahiriya',
    ur: 'سجادہ نشین درگاہ اللہ آباد شریف و امیر جماعت اصلاح المسلمین',
    ar: 'شيخ الطريقة النقشبندية المجددية الطاهرية وأمير الجمعية الحالي',
  },
  content: [
    {
      en: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi, reverently celebrated as "Hazrat Sajjan Saeen", was born on March 21, 1963, at Dargah Faqirpur Sharif, Radhan, Sindh. He is the son and direct spiritual successor (Sajjada Nasheen) of the legendary master Hazrat Khwaja Allah Bakhsh (Sohna Saeen R.A).',
      ur: 'حضرت خواجہ محمد طاہر بخشی نقشبندی، جنہیں محبت و عقیدت کے ساتھ "محبوب سجن سائیں" کہا جاتا ہے، 21 مارچ 1963ء کو درگاہ فقیر پور شریف (رادھن، سندھ) میں پیدا ہوئے۔ آپ حضرت خواجہ اللہ بخش سوہنا سائیں کے فرزندِ ارجمند اور ان کے روحانی جانشین و سجادہ نشین ہیں۔',
      ar: 'ولد فضيلة الشيخ خواجه محمد طاهر البخشي النقشبندي (المعروف بمحبوب سجن سائیں) في 21 مارس 1963م بدركاه فقير بور شريف بسند. وهو نجل وخليفة الإمام العارف الخواجه الله بخش سوهنا سائیں رحمه الله.',
    },
    {
      en: 'Under his vision, Jamaat Islah-ul-Muslimeen expanded internationally. Hazrat Sajjan Saeen is renowned for his scholarly eloquence, gentle demeanor, emphasis on modern education balanced with traditional Islamic jurisprudence, and his dedicated humanitarian welfare programs.',
      ur: 'آپ کی بصیرت افروز قیادت میں جماعت اصلاح المسلمین نے ملکی اور بین الاقوامی سطح پر غیر معمولی وسعت پائی۔ آپ کا طرزِ خطابت نہایت دلنشین، پرامن اور دلوں میں عشقِ مصطفیٰ ﷺ اور تقویٰ کی شمع فروزاں کرنے والا ہے۔ آپ نے جدید تعلیم اور دینی علوم کے امتزاج کے لیے متعدد ادارے قائم فرمائے۔',
      ar: 'شهدت الجمعية في عهده نهضة تربوية ومؤسسية رائدة شملت تأسيس المعاهد الشرعية، والمدارس النموذجية، والمراكز الطبية الخيرية، إضافة إلى نشر كتب التراث وإقامة المؤتمرات السنوية الحاشدة.',
    },
  ],
  highlights: [
    {
      title: { en: 'Birth & Lineage', ur: 'ولادت و نسب', ar: 'المولد والنشأة' },
      description: {
        en: 'March 21, 1963 | Abbasi Hashimi Noble Lineage',
        ur: '21 مارچ 1963ء | عباسی ہاشمی عالی نسب',
        ar: '21 مارس 1963م، نسب عباسي هاشمي شريف',
      },
    },
    {
      title: { en: 'Spiritual Successorship', ur: 'دستارِ خلافت', ar: 'الخلافة الروحية' },
      description: {
        en: 'Conferred in December 1983 upon the demise of Hazrat Sohna Saeen',
        ur: 'دسمبر 1983ء میں حضرت سوہنا سائیں کے وصال کے بعد مسندِ ارشاد پر متمکن ہوئے',
        ar: 'تولى مسند الإرشاد والمشيخة في ديسمبر 1983م',
      },
    },
    {
      title: { en: 'Official Blog & Teachings', ur: 'علمی ذخیرہ و بلاگ', ar: 'المدونة والمؤلفات' },
      description: {
        en: 'Lectures, discourses, and letters archived at sajjansaeen.blogspot.com',
        ur: 'ارشادات، مکاتیب اور خطابات کا مستند ریکارڈ sajjansaeen.blogspot.com پر',
        ar: 'تدوينات وتوجيهات الشيخ عبر sajjansaeen.blogspot.com',
      },
    },
  ],
};

export const MISSION_DATA: AboutSectionData = {
  id: 'about-mission',
  title: {
    en: 'Mission & Purpose of the Movement',
    ur: 'جماعت کا مقصد و منشور',
    ar: 'رسالة وأهداف الجمعية',
  },
  subtitle: {
    en: 'Purification of Self, Revival of Sunnah, and Islamic Unity',
    ur: 'تزکیۂ نفس، احیائے سنت، اور اتحادِ بین المسلمین',
    ar: 'تزكية النفس، إحياء السنة النبوية، ووحدة المسلمين',
  },
  content: [
    {
      en: 'The core mission of Islah-ul-Muslimeen is summarized in three pillars: 1) Reforming the individual through Zikr-e-Qalbi and moral training; 2) Cultivating the household on the Sunnah of Prophet Muhammad ﷺ; and 3) Establishing an organized, peaceful society based on mutual benevolence, justice, and service to humanity.',
      ur: 'جماعت اصلاح المسلمین کا منشور تین بنیادی نکات پر استوار ہے: 1) ذکرِ قلبی اور اخلاقی تربیت کے ذریعے فرد کی اصلاح؛ 2) سنتِ نبویہ ﷺ کے مطابق اسلامی گھرانوں کی تشکیل؛ 3) باہمی ہمدردی، عدل اور خدمتِ خلق پر مبنی ایک منظم اور پرامن اسلامی معاشرے کا قیام۔',
      ar: 'تتلخص رسالة الجمعية في ثلاثة أركان: تزكية الفرد بالذكر القلبي وملازمة السنة، وبناء الأسرة المسلمة الواعية، وتوحيد جهود المسلمين في خدمة المجتمع والخير العام.',
    },
    {
      en: 'The movement maintains complete impartiality from partisan politics, directing all energy toward spiritual literacy, educational advancement, character building, and eradicating un-Islamic customs and superstitions.',
      ur: 'جماعت جماعتی و انتخابی سیاست سے بالکل الگ تھلگ رہ کر اپنی تمام تر توانائیاں دینی تعلیم، کردار سازی، بدعات و خرافات کے خاتمے اور باطنی پاکیزگی کے لیے وقف رکھتی ہے۔',
      ar: 'تنأى الجمعية بنفسها تماماً عن الصراعات السياسية الحزبية، موجهة طاقاتها كلها نحو التربية الروحية، وبناء الإنسان الصالح، ومحاربة الجهل والبدع.',
    },
  ],
};

export const ORGANIZATION_DATA: AboutSectionData = {
  id: 'about-organization',
  title: {
    en: 'Administrative & Organizational Structure',
    ur: 'تنظیمی و انتظامی ڈھانچہ',
    ar: 'الهيكل الإداري والتنظيمي',
  },
  subtitle: {
    en: 'A Tiered Democratic System of Mutual Consultation (Shura)',
    ur: 'شورائی نظام پر مبنی منظم اور مربوط تنظیمی ڈھانچہ',
    ar: 'نظام إداري مؤسسي يقوم على الشورى والانضباط',
  },
  content: [
    {
      en: 'The administrative structure of Jamaat Islah-ul-Muslimeen operates under the supreme guidance of the Ameer (Hazrat Sajjan Saeen) supported by the Central Consultative Council (Markazi Majlis-e-Shura).',
      ur: 'جماعت اصلاح المسلمین کا انتظامی نظام امیرِ جماعت (حضرت سجن سائیں) کی زیرِ سرپرستی مرکزی مجلسِ شوریٰ، صوبائی، ضلعی اور مقامی حلقوں پر مشتمل ہے۔',
      ar: 'يُدار العمل تحت إشراف أمير الجمعية واللجنة الاستشارية العليا (مجلس الشورى المركزي) مع لجان فرعية في الأقاليم والمحافظات.',
    },
    {
      en: 'Sub-councils manage education (Madaris Tahiriya), publication (Maktaba Tahiriya), youth work (Rohani Talaba Jamaat), and social welfare services to ensure transparent and orderly execution.',
      ur: 'مختلف شعبہ جات مثلاً نظامِ تعلیم (مدارس طاہریہ)، نشر و اشاعت (مکتبہ طاہریہ)، طلبہ تنظیم (روحانی طلبہ جماعت) اور فلاحی شعبہ منظم انداز میں خدمات انجام دیتے ہیں۔',
      ar: 'تتفرع الجمعية إلى قطاعات متخصصة للتعليم الشرعي، والنشر العلمي، والعمل الطلابي، والأعمال الإغاثية الإنسانية.',
    },
  ],
};

export const CODE_OF_CONDUCT_DATA: AboutSectionData = {
  id: 'about-code-of-conduct',
  title: {
    en: 'Code of Conduct (Dastur-ul-Amal)',
    ur: 'دستور العمل و ضابطۂ اخلاق',
    ar: 'ميثاق العمل والضوابط السلوكية',
  },
  subtitle: {
    en: 'Spiritual Discipline & Moral Ethics for Every Member',
    ur: 'ہر رکن، کارکن اور سالک کے لیے لازمی شرعی و اخلاقی اصول',
    ar: 'المنهج الأخلاقي والروحي الواجب على كل منتسب',
  },
  content: [
    {
      en: '1. Strict adherence to the 5 daily prayers in congregation (Ba-Jamaat) in the first row.\n2. Dedicating at least 15–30 minutes daily to silent heart Muraqabah (Zikr-e-Qalbi).\n3. Sincere honesty and halal earnings, strictly abstaining from usury (Riba) and fraud.\n4. Complete gentleness of speech, abstaining from backbiting, slandering, and sectarian controversies.\n5. Fulfilling the rights of parents, neighbors, wives, children, and fellow human beings.',
      ur: '1۔ پنج وقتہ نماز باجماعت کی پابندی تکبیرِ اولیٰ کے ساتھ۔\n2۔ روزانہ کم از کم 15 سے 30 منٹ خاموشی کے ساتھ ذکرِ قلبی (مراقبہ) کرنا۔\n3۔ صدقِ مقال اور رزقِ حلال کی پابندی، اور سود، رشوت اور دھوکہ دہی سے قطعی اجتناب۔\n4۔ زبان کی حفاظت، غیبت، چغلی، جھوٹ اور فرقہ وارانہ منافرت سے پرہیز۔\n5۔ والدین، پڑوسیوں، اہل و عیال اور خلقِ خدا کے حقوق کی احسن ادائیگی۔',
      ar: '١. المحافظة التامة على الصلوات الخمس في جماعة.\n٢. المداومة اليومية على جلسة المراقبة والذكر القلبي.\n٣. تحري الحلال في المطعم والمشرب والمكسب، واجتناب الشبهات والربا.\n٤. حفظ اللسان عن الغيبة والنميمة والجدال العقيم والخلافات المذهبية.\n٥. أداء حقوق العباد، وبر الوالدين، والإحسان إلى الأهل والجار.',
    },
  ],
};

export const GRAND_MOSQUE_DATA: AboutSectionData = {
  id: 'about-grand-mosque',
  title: {
    en: 'Grand Mosque Dargah Allahabad Sharif',
    ur: 'جامع مسجد درگاہ اللہ آباد شریف',
    ar: 'الجامع الكبير بدركاه الله آباد شريف',
  },
  subtitle: {
    en: 'An Architectural & Spiritual Masterpiece in Sindh, Pakistan',
    ur: 'سندھ دھرتی کا عظیم الشان روحانی و تعلیمی شاہکار',
    ar: 'صرح معماري وروحي مهيب في إقليم السند، باكستان',
  },
  content: [
    {
      en: 'The Grand Mosque of Dargah Allahabad Sharif in Kandiaro, District Naushahro Feroze, Sindh, is one of the largest and most magnificent Islamic architectural complexes in Pakistan. Initiated under the guidance of Hazrat Sajjan Saeen, this white marble-embellished mosque accommodates tens of thousands of worshippers.',
      ur: 'جامع مسجد درگاہ اللہ آباد شریف، کنڈیارو (ضلع نوشہرو فیروز، سندھ) پاکستان کی خوبصورت ترین اور عظیم الشان مساجد میں سے ایک ہے۔ حضرت سجن سائیں کی خصوصی نگرانی میں تعمیر ہونے والی اس مسجد میں بیک وقت دسیوں ہزار نمازی نماز ادا کر سکتے ہیں۔',
      ar: 'يعد الجامع الكبير في دركاه الله آباد شريف بباكستان تحفة معمارية إسلامية بارزة، شُيّد برؤية وإشراف الشيخ سجن سائیں، ويتسع لعشرات الآلاف من المصلين في ساحاته وقاعاته الرخامية البيضاء.',
    },
    {
      en: 'Featuring soaring minarets, intricate Islamic geometric arabesques, Quranic calligraphy, modern acoustic engineering, and extensive adjacent dormitories for students of knowledge, the Grand Mosque serves as the international spiritual heart of Silsila Tahiriya.',
      ur: 'بلند و بالا مینار، نفیس اسلامی نقاشی، قرآنی خطاطی اور دینی طلبہ کے لیے وسیع رہائشی دارالاقامہ اس مسجد کو برصغیر کے ممتاز ترین مراکزِ روحانیت کا درجہ دیتے ہیں۔',
      ar: 'يتميز الجامع بمآذنه الشامخة، ونقوشه الهندسية البديعة، والخطوط القرآنية المتقنة، إضافة إلى مرافقه التعليمية ومساكن طلبة العلم الشريف.',
    },
  ],
};

export const SISTER_ORGANIZATIONS_DATA: AboutSectionData = {
  id: 'about-organizations',
  title: {
    en: 'Sister Organizations & Subsidiaries',
    ur: 'ذیلی شعبہ جات اور معاون تنظیمیں',
    ar: 'المؤسسات التابعة والشعبة المساندة',
  },
  subtitle: {
    en: 'Specialized Wings for Youth, Ulama, Publications, and Philanthropy',
    ur: 'طلبہ، علماء، اشاعتِ کتب اور سماجی بہبود کے مخصوص شعبے',
    ar: 'أجنحة متخصصة للطلاب، العلماء، النشر، والعمل الخيري',
  },
  content: [
    {
      en: '1. Rohani Talaba Jamaat (RTJ): The premier student wing dedicated to nurturing high moral character, academic excellence, and Islamic ethos among college and university students.\n2. Jamiat-e-Ulema Tahiriya: The forum of traditional Islamic scholars, Muftis, and researchers overseeing educational standards across affiliated Madaris.\n3. Al-Tahir Publications & Media: Publishing authentic Islamic books, quarterly research journals, and the renowned monthly magazine "Al-Tahir".\n4. Tahiri Medical & Welfare Services: Free medical camps, disaster relief, ambulance services, and social assistance for the impoverished.',
      ur: '1۔ روحانی طلبہ جماعت (RTJ): کالجز اور یونیورسٹیز کے نوجوان طلبہ میں اخلاقی اقدار، محنت، اور روحانی بیداری پیدا کرنے والی فعال طلبہ تنظیم۔\n2۔ جمعیت علمائے طاہریہ: جید علماء کرام اور مفتیانِ عظام کا مقتدر علمی پلیٹ فارم جو دینی مدارس کی تعلیمی نگرانی کرتا ہے۔\n3۔ ادارہ اشاعتِ طاہریہ: مستند دینی کتب، تحقیقی مقالات اور مقبولِ عام ماہنامہ "الطاہر" کی باقاعدہ اشاعت کا ذمہ دار۔\n4۔ طاہری ویلفیئر سروسز: فری میڈیکل کیمپس، قدرتی آفات میں ریلیف ورک، ایمبولینس سروس اور ناداروں کی معاونت۔',
      ar: '١. جمعية الطلاب الروحانية (RTJ): جناح طلابي ينشط في الجامعات لغرس الأخلاق والتميز العلمي.\n٢. جمعية علماء طاهرية: هيئة علمائية للإفتاء والإشراف على المدارس والمعاهد الشرعية.\n٣. دار النشر والإعلام الطاهرية: تتولى طباعة الكتب المحققة وإصدار مجلة "الطاهر" الشهرية.\n٤. خدمات طاهري الطبية والإنسانية: إقامة المخيمات الطبية المجانية وتقديم الإغاثة العاجلة للمحتاجين.',
    },
  ],
};
