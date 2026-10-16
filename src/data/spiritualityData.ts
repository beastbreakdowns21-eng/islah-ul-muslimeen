import { LocalizedString, ShijraNode, SayingItem } from '../types';

export interface Latifa {
  id: string;
  name: LocalizedString;
  location: LocalizedString;
  color: LocalizedString;
  colorHex: string;
  propheticConnection: LocalizedString;
  spiritualFunction: LocalizedString;
}

export const LATAIF_DATA: Latifa[] = [
  {
    id: 'qalb',
    name: { en: 'Latifa Qalb (The Heart)', ur: 'لطیفۂ قلب', ar: 'لطيفة القلب' },
    location: {
      en: 'Two fingers below the left breast towards the side',
      ur: 'بائیں پستان کے دو انگل نیچے پہلو کی طرف',
      ar: 'بمقدار إصبعين تحت الثدي الأيسر مائلاً إلى الجنب',
    },
    color: { en: 'Golden-Yellow light', ur: 'زرد / سنہری نور', ar: 'نور أصفر ذهبي' },
    colorHex: '#EAB308',
    propheticConnection: {
      en: 'Under the spiritual light of Prophet Adam (A.S)',
      ur: 'حضرت آدم علیہ السلام کے زیرِ قدم روحانی نسبت',
      ar: 'تحت قدم سيدنا آدم عليه السلام',
    },
    spiritualFunction: {
      en: 'Removes heedlessness, awakens divine love, and instills peaceful contemplation.',
      ur: 'غفلت کو دور کرنا، قلبی اضطراب کا خاتمہ اور ذاتِ الٰہی کی محبت کی بیداری۔',
      ar: 'دفع الغفلة، إيقاظ المحبة الإلهية، وتحصيل السكينة والطمأنينة.',
    },
  },
  {
    id: 'ruh',
    name: { en: 'Latifa Ruh (The Spirit)', ur: 'لطیفۂ روح', ar: 'لطيفة الروح' },
    location: {
      en: 'Two fingers below the right breast towards the side',
      ur: 'دائیں پستان کے دو انگل نیچے پہلو کی جانب',
      ar: 'بمقدار إصبعين تحت الثدي الأيمن مائلاً إلى الجنب',
    },
    color: { en: 'Crimson-Red light', ur: 'سرخ نور', ar: 'نور أحمر' },
    colorHex: '#DC2626',
    propheticConnection: {
      en: 'Under the spiritual light of Prophets Ibrahim & Nuh (A.S)',
      ur: 'حضرت نوح اور حضرت ابراہیم علیہما السلام کی روحانی نسبت',
      ar: 'تحت قدم سيدنا نوح وإبراهيم عليهما السلام',
    },
    spiritualFunction: {
      en: 'Extinguishes anger, burns worldly greed, and transforms the spirit into divine passion.',
      ur: 'غصہ و حرص کی تخفیف، جذبہ ایمانی اور اطاعتِ خداوندی کی شمع روشن کرنا۔',
      ar: 'إخماد نار الغضب والطمع، ورقي الروح إلى معارج الشوق الإلهي.',
    },
  },
  {
    id: 'sirr',
    name: { en: 'Latifa Sirr (The Secret)', ur: 'لطیفۂ سِر', ar: 'لطيفة السر' },
    location: {
      en: 'Two fingers above the left breast towards the center',
      ur: 'بائیں پستان کے دو انگل اوپر سینے کی طرف',
      ar: 'فوق الثدي الأيسر بإصبعين جهة الصدر',
    },
    color: { en: 'Pure White light', ur: 'سفید نور', ar: 'نور أبيض ناصع' },
    colorHex: '#E2E8F0',
    propheticConnection: {
      en: 'Under the spiritual light of Prophet Musa (A.S)',
      ur: 'حضرت موسیٰ علیہ السلام کی روحانی نسبت',
      ar: 'تحت قدم سيدنا موسى عليه السلام',
    },
    spiritualFunction: {
      en: 'Eliminates miserliness, fosters deep devotion, and reveals hidden divine wisdom.',
      ur: 'بخل و کنجوسی سے نجات، انکساری، اور انوارِ الٰہیہ کا کشف۔',
      ar: 'التخلص من الشح، والتوجه بالكلية إلى مناجاة الحق سبحانه.',
    },
  },
  {
    id: 'khafi',
    name: { en: 'Latifa Khafi (The Hidden)', ur: 'لطیفۂ خفی', ar: 'لطيفة الخفي' },
    location: {
      en: 'Two fingers above the right breast towards the center',
      ur: 'دائیں پستان کے دو انگل اوپر سینے کی جانب',
      ar: 'فوق الثدي الأيمن بإصبعين جهة الصدر',
    },
    color: { en: 'Deep Black / Lapis light', ur: 'سیاہ مائل نور', ar: 'نور أسود براق' },
    colorHex: '#1E293B',
    propheticConnection: {
      en: 'Under the spiritual light of Prophet Isa (A.S)',
      ur: 'حضرت عیسیٰ علیہ السلام کی روحانی نسبت',
      ar: 'تحت قدم سيدنا عيسى عليه السلام',
    },
    spiritualFunction: {
      en: 'Wards off envy and jealousy, establishing pure selflessness and patience.',
      ur: 'حسد اور کینہ کا قلع قمع، حلم و بردباری اور صلح کل کا جذبہ۔',
      ar: 'طرد الحسد والغل من القلب وإحلال الحلم والصفاء الإيماني.',
    },
  },
  {
    id: 'akhfa',
    name: { en: 'Latifa Akhfa (The Most Hidden)', ur: 'لطیفۂ اخفیٰ', ar: 'لطيفة الأخفى' },
    location: {
      en: 'Middle of the chest (sternum)',
      ur: 'سینے کے بالکل وسط میں',
      ar: 'في وسط الصدر بين الثديين',
    },
    color: { en: 'Emerald Green light', ur: 'سبز زمردی نور', ar: 'نور أخضر زمردي' },
    colorHex: '#059669',
    propheticConnection: {
      en: 'Under the blessed light of Prophet Muhammad ﷺ',
      ur: 'سید الانبیاء خاتم النبیین حضرت محمد مصطفیٰ ﷺ کی خاص نسبت',
      ar: 'تحت قدم سيد الوجود محمد صلى الله عليه وسلم',
    },
    spiritualFunction: {
      en: 'Subdues pride and ostentation (Riya), bestowing profound unity with divine will.',
      ur: 'تکبر، خود پسندی اور ریاکاری کا خاتمہ، اخلاصِ کامل اور فنا فی اللہ کا حصول۔',
      ar: 'محو الكبر والعجب والرياء، وتثبيت الإخلاص التام لله رب العالمين.',
    },
  },
  {
    id: 'nafs',
    name: { en: 'Latifa Nafs (The Self / Ego)', ur: 'لطیفۂ نفس', ar: 'لطيفة النفس' },
    location: {
      en: 'Between the eyebrows / Forehead',
      ur: 'دونوں آنکھوں کے درمیان، پیشانی کے مقام پر',
      ar: 'في الجبهة بين الحاجبين',
    },
    color: { en: 'Variegated Crystal light', ur: 'ہمہ رنگ / بلوری نور', ar: 'نور بلوري جامع' },
    colorHex: '#8B5CF6',
    propheticConnection: {
      en: 'Trained through strict adherence to the prophetic Sunnah',
      ur: 'سنتِ نبویہ کی اتباع سے نفسِ امارہ کو نفسِ مطمئنہ میں تبدیل کرنا',
      ar: 'تزكية النفس الأمارة بالسوء إلى النفس المطمئنة بالاتباع النبوي',
    },
    spiritualFunction: {
      en: 'Transforms the carnal soul (Nafs Ammarah) into the tranquil soul (Nafs Mutma\'innah).',
      ur: 'سرکشی و نافرمانی کو اطاعت و عبودیت میں تبدیل کرنا۔',
      ar: 'قهر الشهوات والشبهات وإلزام النفس التقوى والانقياد لأمر الله.',
    },
  },
];

export interface PrincipleDetailItem {
  type: 'paragraph' | 'blockquote' | 'subheading' | 'quran';
  text?: string;
  attribution?: string;
  arabic?: string;
  translation?: string;
  reference?: string;
}

export interface NaqshbandiPrinciple {
  number: number;
  slug?: string;
  term: string;
  transliteration: string;
  meaning: LocalizedString;
  explanation: LocalizedString;
  preview?: LocalizedString;
  source?: LocalizedString;
  detailedContent?: {
    en?: PrincipleDetailItem[];
  };
}

export const NAQSHBANDI_PRINCIPLES: NaqshbandiPrinciple[] = [
  {
    number: 1,
    slug: 'hosh-dar-dam',
    term: 'ہوش در دم',
    transliteration: 'Hosh Dar Dam',
    meaning: {
      en: 'Mindfulness in Every Breath',
      ur: 'ہر سانس میں ہوشیاری و بیداری',
      ar: 'الوعي مع كل نَفَس',
    },
    preview: {
      en: '“Hosh Dar Dam” means being aware of every breath, ensuring it is spent in remembrance of Allah and not in negligence. It’s about making an effort to ensure that not even a single breath passes in forgetfulness of Allah.',
      ur: 'ہر سانس کی آمد و رفت میں غفلت سے بچنا اور ہوشیار رہنا۔ سالک کا کوئی سانس بھی اللہ تعالیٰ کے ذکر اور یاد کے بغیر خارج یا داخل نہ ہو۔',
      ar: 'صيانة كل نَفَس من الغفلة عند الشهيق والزفير، بحيث يعيش السالك في حضور دائم مع الله تعالى.',
    },
    explanation: {
      en: 'Guarding every breath so that neither inhalation nor exhalation occurs in heedlessness. The seeker remains conscious of Allah in every moment, preserving continuous spiritual presence.',
      ur: 'ہر سانس کی آمد و رفت میں غفلت سے بچنا اور ہوشیار رہنا۔ سالک کا کوئی سانس بھی اللہ تعالیٰ کے ذکر اور یاد کے بغیر خارج یا داخل نہ ہو۔',
      ar: 'صيانة كل نَفَس من الغفلة عند الشهيق والزفير، بحيث يعيش السالك في حضور دائم مع الله تعالى.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Hosh Dar Dam” means being aware of every breath, ensuring it is spent in remembrance of Allah and not in negligence. It’s about making an effort to ensure that not even a single breath passes in forgetfulness of Allah. Therefore, one should reflect after every moment to achieve constant presence and awareness. If negligence is found upon reflection, one should seek forgiveness and make a firm intention to avoid it in the future, valuing every breath and staying aligned with it, ensuring no breath is wasted aimlessly.',
        },
        {
          type: 'blockquote',
          text: '“The foundation of this path lies in the breath. Neither while inhaling nor exhaling should it be lost in negligence. Each breath should be with the presence of heart.”',
          attribution: 'Hazrat Khwaja Bahauddin Naqshband, may Allah sanctify his secret,',
        },
        {
          type: 'paragraph',
          text: 'Regarding Hazrat Shah Naqshband’s, may Allah sanctify his secret, personal practice and how he preserved his breath, Hazrat Mawlana Abdur Rahman Jami, may Allah sanctify his secret, mentions in Tuhfat al-Ahrar that he rarely took a breath without presence and contemplation. He did not let his gaze wander beyond his steps, swiftly embarked on the journey ahead, and his step did not halt but rather, he attained Divine proximity.',
        },
      ],
    },
  },
  {
    number: 2,
    slug: 'nazar-bar-qadam',
    term: 'نظر بر قدم',
    transliteration: 'Nazar Bar Qadam',
    meaning: {
      en: 'Watch Your Step',
      ur: 'قدموں پر نگاہ رکھنا',
      ar: 'النظر على القدم',
    },
    preview: {
      en: '“Nazar Bar Qadam” signifies that a seeker (salik) should keep their gaze lowered towards their feet or nearby while walking or moving. One should not look far ahead without reason and should focus in front of themselves while sitting...',
      ur: 'چلتے وقت اپنی نظر کو پاؤں کی پشت پر رکھنا تاکہ نگاہ نامناسب مناظر سے اور دل دنیاوی وسوسوں سے محفوظ رہے۔ معنوی طور پر اس سے مراد شریعت و سنت کے راستے پر قدم جمانا ہے۔',
      ar: 'إبقاء البصر عند المشي على موضع الخطوة صيانةً للقلب عن فضول النظر ومفسدات البصيرة، ولزوم منهج الشريعة والسنة في كل خطوة.',
    },
    explanation: {
      en: 'Keeping one’s gaze lowered upon one’s footsteps while walking to shield the heart from distracting sights and temptations. It also signifies ensuring that each step in life conforms strictly to the sacred law and the Prophetic way.',
      ur: 'چلتے وقت اپنی نظر کو پاؤں کی پشت پر رکھنا تاکہ نگاہ نامناسب مناظر سے اور دل دنیاوی وسوسوں سے محفوظ رہے۔ معنوی طور پر اس سے مراد شریعت و سنت کے راستے پر قدم جمانا ہے۔',
      ar: 'إبقاء البصر عند المشي على موضع الخطوة صيانةً للقلب عن فضول النظر ومفسدات البصيرة، ولزوم منهج الشريعة والسنة في كل خطوة.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Nazar Bar Qadam” signifies that a seeker (salik) should keep their gaze lowered towards their feet or nearby while walking or moving. One should not look far ahead without reason and should focus in front of themselves while sitting, not looking to the right or left, nor getting distracted by conversations around them. This precaution helps avoid unintentional glances at non-mahrams or hearing inappropriate speech, diverting attention from the primary objective, which is a significant loss.',
        },
        {
          type: 'paragraph',
          text: 'In Islamic law, during prayer (namaz), there are specific instructions to look at the place of prostration during standing, at the back of the feet during bowing, at the tip of the nose during prostration, and at one’s lap during the sitting position. These instructions aim to maintain concentration and prevent scattered thoughts during prayer.',
        },
        {
          type: 'subheading',
          text: 'A beneficial narrative',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Rabia bin Khaytham, may Allah be pleased with him, was always seen with his head bowed down, to the extent that some thought he was blind. Hazrat Mas’ud, may Allah be pleased with him, who had been visiting his house for twenty years, said, “By Allah, O Rabia, if the Prophet Muhammad, peace be upon him, saw you, he would be very pleased.” Similarly, it is famous about many other saints that they did not look up towards the sky for forty years.',
        },
        {
          type: 'paragraph',
          text: 'Like other practices of Sufis, “Nazar Bar Qadam” is also established from the Quran. Allah commands,',
        },
        {
          type: 'quran',
          arabic: 'قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَـٰرِهِمْ',
          translation: '“O Prophet! Tell the believing men to lower their gaze”',
          reference: 'Quran 24:30',
        },
        {
          type: 'paragraph',
          text: 'This principle of keeping one’s gaze lowered during movement follows the Sunnah of Prophet Muhammad, peace be upon him, and contains many wisdoms that the seeker will gradually realize.',
        },
        {
          type: 'paragraph',
          text: 'Sheikh al-Arab wal Ajam, Hazrat Pir Fazal Ali Qureshi Muskinpuri, may Allah sanctify his secret, used to say that one should always keep the gaze towards the footsteps of the Prophet Muhammad, peace be upon him, meaning always keeping the Sharia and Sunnah in view. All actions, stillness, morals, and habits should be in accordance with the Sunnah of the Prophet, and this is the distinguishing feature of the Naqshbandiyya way.',
        },
      ],
    },
  },
  {
    number: 3,
    slug: 'safar-dar-watan',
    term: 'سفر در وطن',
    transliteration: 'Safar Dar Watan',
    meaning: {
      en: 'Journey in One’s Homeland',
      ur: 'اپنے باطن میں سفر',
      ar: 'السفر في الوطن',
    },
    preview: {
      en: '“Safar Dar Watan” refers to an internal and spiritual journey. It means that while remaining physically at home, a seeker (salik) abandons base human traits such as envy, arrogance, malice, and love for status and wealth...',
      ur: 'انسان کا اپنے ہی باطن میں روحانی سفر کرنا، یعنی نفسانی اور رذیلہ اوصاف سے اخلاقِ حمیدہ، پاکیزگی اور قربِ الٰہی کی طرف ہجرت کرنا۔',
      ar: 'السفر الباطني بالانتقال من الأخلاق المذمومة ورذائل النفس إلى الأخلاق الإيمانية الفاضلة والقرب من الله تعالى.',
    },
    explanation: {
      en: 'Undertaking an inward spiritual journey by migrating away from blameworthy human traits—such as pride, envy, and anger—toward praiseworthy character, moral purity, and divine closeness.',
      ur: 'انسان کا اپنے ہی باطن میں روحانی سفر کرنا، یعنی نفسانی اور رذیلہ اوصاف (تکبر، حسد، غصہ) سے اخلاقِ حمیدہ، پاکیزگی اور قربِ الٰہی کی طرف ہجرت کرنا۔',
      ar: 'السفر الباطني بالانتقال من الأخلاق المذمومة ورذائل النفس إلى الأخلاق الإيمانية الفاضلة والقرب من الله تعالى.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Safar Dar Watan” refers to an internal and spiritual journey. It means that while remaining physically at home, a seeker (salik) abandons base human traits such as envy, arrogance, malice, and love for status and wealth, and instead, adopts angelic qualities like patience, gratitude, contentment with divine decree, and sincerity in good deeds. Through such practices, love for anything other than Allah is eradicated from the heart, facilitating spiritual advancement. If ever love for the non-divine is felt in the heart, consider it a loss and negate it with the word “la” (no), affirming divine love with “illa Allah” (but Allah) and refocusing on the Creator, thereby experiencing divine proximity at home. As Mawlana Abdul Rahman Jami states, the journey isn’t physical; acceptance is due to one’s purity and light.',
        },
        {
          type: 'paragraph',
          text: 'Sayyidi and my guide, Sohna Saeen, emphasized that if one’s heart harbors love for wealth or worldly desires, it cannot house the Divine, for the Sultan of Beloveds is jealous. Such a heart cannot attain the honor of being “the believer’s heart is Allah’s home.” However, it’s possible for the heart to remember Allah and be devoid of any love for the non-divine, even if wealth is present, as long as the heart isn’t attached to it.',
        },
        {
          type: 'paragraph',
          text: 'Remember, love for prophets and saints, and similar affections if for Allah’s pleasure, doesn’t count as love for the non-divine but aids in spiritual growth and drawing closer to Allah. Allama Sawi mentions that means to divine proximity include love for prophets and saints, charity, visiting the righteous, abundant supplication, maintaining family ties, and frequent remembrance of Allah. The essence is to cling to what brings you closer to Allah and avoid what distances you from Him.',
        },
      ],
    },
  },
  {
    number: 4,
    slug: 'khalwat-dar-anjuman',
    term: 'خلوت در انجمن',
    transliteration: 'Khalwat Dar Anjuman',
    meaning: {
      en: 'Solitude in the Crowd',
      ur: 'انجمن میں خلوت نشینی',
      ar: 'الخلوة في الجلوة',
    },
    preview: {
      en: '“Khilwat Dar Anjuman” means that a seeker’s heart should always be immersed in the remembrance of Allah, whether in silence, speaking, eating, or drinking, without ever letting a moment pass in heedlessness. The saints say, “A Sufi is physically with people but spiritually detached.”',
      ur: 'ظاہراً لوگوں کے درمیان رہ کر خدمتِ خلق اور روزمرہ فرائض انجام دینا، جبکہ باطنی طور پر دل ہمہ وقت اللہ تعالیٰ کی یاد اور خلوت میں مستغرق رہے۔',
      ar: 'أن يكون العبد ظاهراً مع الخلق في نفعهم ومعاشهم، وباطناً منفرداً في خلوة تامة مع الحق سبحانه وتعالى.',
    },
    explanation: {
      en: 'Remaining inwardly in seclusion and intimacy with Allah while outwardly engaging with people, fulfilling worldly duties, and serving creation.',
      ur: 'ظاہراً لوگوں کے درمیان رہ کر خدمتِ خلق اور روزمرہ فرائض انجام دینا، جبکہ باطنی طور پر دل ہمہ وقت اللہ تعالیٰ کی یاد اور خلوت میں مستغرق رہے۔',
      ar: 'أن يكون العبد ظاهراً مع الخلق في نفعهم ومعاشهم، وباطناً منفرداً في خلوة تامة مع الحق سبحانه وتعالى.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Khilwat Dar Anjuman” means that a seeker’s heart should always be immersed in the remembrance of Allah, whether in silence, speaking, eating, or drinking, without ever letting a moment pass in heedlessness. The saints say, “A Sufi is physically with people but spiritually detached.”',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Shah Naqshband (may Allah sanctify his secret) points to the verse “Men whom neither commerce nor sale distracts from the remembrance of Allah” as indicative of this state. This verse, revealed about the companions of the Prophet (peace be upon them), highlights their constant remembrance and attentiveness to Allah, setting an example for future generations.',
        },
        {
          type: 'blockquote',
          text: '“Be aware of your inner self and oblivious to external things, for such a noble trait is rare in this world.”',
          attribution: 'Hazrat Azizan Ali Ramitani (may Allah have mercy on him)',
        },
        {
          type: 'paragraph',
          text: 'It is reported that when asked about the foundation of his method, Shah Naqshband (may Allah sanctify his secret) replied, “Khilwat Dar Anjuman” (Solitude in the crowd), meaning our way relies on being outwardly with creation but inwardly with God.',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Sohna Saeen (may Allah have mercy on him) often emphasized “Dast ba-kar o dil ba-yaar” (Hands in work, heart with the Beloved), advocating for lawful work with the hands while keeping the heart focused on Allah, echoing the sentiment that while one’s body may be in the marketplace, their soul remains with their Beloved, Allah Almighty.',
        },
      ],
    },
  },
  {
    number: 5,
    slug: 'yad-kard',
    term: 'یاد کرد',
    transliteration: 'Yad Kard',
    meaning: {
      en: 'Continuous Remembrance',
      ur: 'مسلسل ذکر و یاد',
      ar: 'المداومة على الذكر',
    },
    preview: {
      en: '“Yad Kard” means that the seeker should continually engage in the remembrance of Allah as instructed by their perfect guide (Sheikh), whether it be silent (Qalbi), aloud (Jahri), or through negation and affirmation.',
      ur: 'مرشدِ کامل کی تعلیم کردہ ترتیب کے مطابق ذکرِ الٰہی پر مداومت اختیار کرنا، یہاں تک کہ یادِ خدا دل کی گہرائیوں میں سما جائے اور غفلت مٹ جائے۔',
      ar: 'المداومة على ذكر الله تعالى بالكيفية المأثورة عن الشيخ المرشد حتى يستقر الذكر في سويداء القلب وتزول الغفلة.',
    },
    explanation: {
      en: 'Persevering in the remembrance of Allah according to the authorized method taught by one’s spiritual guide, until awareness of the Divine permeates the seeker’s heart and consciousness.',
      ur: 'مرشدِ کامل کی تعلیم کردہ ترتیب کے مطابق ذکرِ الٰہی پر مداومت اختیار کرنا، یہاں تک کہ یادِ خدا دل کی گہرائیوں میں سما جائے اور غفلت مٹ جائے۔',
      ar: 'المداومة على ذكر الله تعالى بالكيفية المأثورة عن الشيخ المرشد حتى يستقر الذكر في سويداء القلب وتزول الغفلة.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Yad Kard” means that the seeker should continually engage in the remembrance of Allah as instructed by their perfect guide (Sheikh), whether it be silent (Qalbi), aloud (Jahri), or through negation and affirmation. They should not be lazy or negligent in this practice and should continuously remember Allah with love and devotion until they achieve the presence of Allah Almighty.',
        },
        {
          type: 'blockquote',
          text: 'Translation: Keep remembering, keep remembering until your soul has life. The purification of the heart is only obtained through the remembrance of Allah.',
        },
        {
          type: 'paragraph',
          text: 'The verse “And remember Allah much that you may be successful” explicitly states that success and victory depend on the remembrance of Allah.',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Shah Naqshband (may Allah sanctify his secret) says, “The purpose of remembrance is to keep the heart always present with the Truth (Allah) in a state of love and reverence because remembrance is the elimination of heedlessness.”',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Khwaja Ala’uddin Attar (may Allah have mercy on him) says,',
        },
        {
          type: 'blockquote',
          text: 'Translation: O young one, if you are aware of Allah’s justice, then you should remember Him at all times.',
        },
      ],
    },
  },
  {
    number: 6,
    slug: 'baz-gasht',
    term: 'باز گشت',
    transliteration: 'Baz Gasht',
    meaning: {
      en: 'Returning to Allah',
      ur: 'بارگاہِ الٰہی میں رجوع',
      ar: 'الرجوع والإنابة',
    },
    preview: {
      en: '“Baazgasht” means returning or reverting, and it implies that after a period of remembrance (Dhikr), the seeker should supplicate in the Divine Presence, saying with utmost humility and sincerity: “O Lord, You are my aim and Your pleasure is my goal. Grant me Your love and knowledge.”',
      ur: 'بارگاہِ الٰہی میں عاجزی اور اخلاص کے ساتھ رجوع کرنا اور یہ دعا کرنا: "اِلٰھِی اَنْتَ مَقْصُوْدِیْ وَرِضَاکَ مَطْلُوْبِیْ" تاکہ مقصود صرف ذاتِ باری تعالیٰ رہے۔',
      ar: 'الرجوع إلى الله تعالى بالإخلاص والتذلل عند الفراغ من الذكر بقول: "إلهي أنت مقصودي ورضاك مطلوبي".',
    },
    explanation: {
      en: 'Returning to Allah with sincere humility during and after remembrance, making the traditional supplication: "Ilāhī Anta Maqṣūdī wa-Riḍāka Maṭlūbī" (O Allah, You alone are my objective, and Your pleasure is what I seek). This prevents the seeker from desiring spiritual states or miraculous gifts.',
      ur: 'ذکر کے بعد بارگاہِ الٰہی میں عاجزی اور اخلاص کے ساتھ رجوع کرنا اور یہ دعا کرنا: "اِلٰھِی اَنْتَ مَقْصُوْدِیْ وَرِضَاکَ مَطْلُوْبِیْ" (اے اللہ! تو ہی میرا مقصود ہے اور تیری رضا ہی میری طلب ہے)، تاکہ مقصود صرف ذاتِ باری تعالیٰ رہے نہ کہ کشف و کرامات۔',
      ar: 'الرجوع إلى الله تعالى بالإخلاص والتذلل عند الفراغ من الذكر بقول: "إلهي أنت مقصودي ورضاك مطلوبي"، حتى لا يكون القصد طلباً للمقامات أو الكرامات بل وجه الله الكريم.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Baazgasht” means returning or reverting, and it implies that after a period of remembrance (Dhikr), the seeker should supplicate in the Divine Presence, saying with utmost humility and sincerity:',
        },
        {
          type: 'blockquote',
          text: '“O Lord, You are my aim and Your pleasure is my goal. Grant me Your love and knowledge.”',
        },
        {
          type: 'paragraph',
          text: 'These words should be uttered silently within the heart, filled with humility, so that the seeker does not become arrogant over the bliss or light attained through Dhikr and reflection, and instead remains focused on seeking the love and pleasure of Allah.',
        },
        {
          type: 'paragraph',
          text: 'Maulana Rumi (may Allah’s mercy be upon him) says:',
        },
        {
          type: 'blockquote',
          text: '“Dear brother, this is a boundless court; wherever you reach, do not just stand there but keep moving forward.”',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Shah Waliullah Dehlawi (may Allah’s mercy be upon him) mentions that he heard from his father and guide, “Returning (in Dhikr) is a great condition; it is not fitting for the seeker to neglect this. Whatever we have attained has been through the blessings of this practice.”',
        },
      ],
    },
  },
  {
    number: 7,
    slug: 'nigah-dasht',
    term: 'نگاہ داشت',
    transliteration: 'Nigah Dasht',
    meaning: {
      en: 'Watchfulness over Thoughts',
      ur: 'خطرات و خیالات کی نگہبانی',
      ar: 'حراسة الخواطر',
    },
    preview: {
      en: '“Negahdasht” means vigilance, and it signifies the seeker’s effort to expel all distracting thoughts and whispers from the heart, staying alert to prevent any harmful thoughts from settling in the heart...',
      ur: 'دل کی نگہبانی کرنا تاکہ ذکر کے دوران اور عام اوقات میں کوئی غیر متعلقہ وسوسہ یا دنیاوی خیال دل کے اندر داخل ہو کر روحانی یکسوئی کو منتشر نہ کر سکے۔',
      ar: 'مراقبة القلب وحراسته من طروق الخواطر الفاسدة والوساوس والشواغل الدنيوية أثناء الذكر وبعده، صيانةً لجمعية القلب.',
    },
    explanation: {
      en: 'Vigilantly guarding the heart against stray thoughts, worldly anxieties, and distracting notions during and after remembrance, so that the mind remains tranquil and steadfast.',
      ur: 'دل کی نگہبانی کرنا تاکہ ذکر کے دوران اور عام اوقات میں کوئی غیر متعلقہ وسوسہ یا دنیاوی خیال دل کے اندر داخل ہو کر روحانی یکسوئی کو منتشر نہ کر سکے۔',
      ar: 'مراقبة القلب وحراسته من طروق الخواطر الفاسدة والوساوس والشواغل الدنيوية أثناء الذكر وبعده، صيانةً لجمعية القلب.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Negahdasht” means vigilance, and it signifies the seeker’s effort to expel all distracting thoughts and whispers from the heart, staying alert to prevent any harmful thoughts from settling in the heart, which could lead to difficulties in their removal. When external distractions and thoughts cease, the seeker will achieve a state of “jama’iyat” and tranquility, eventually reaching the station of “fana” (annihilation) of the heart. If thoughts still persist or do not fade away, the seeker should immerse in the remembrance of Allah and envision their complete and perfect spiritual guide, which, God willing, will free them from unwanted thoughts and whispers.',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Khwaja Bahauddin Naqshband Bukhari (may Allah sanctify his secret) advises that the seeker should stop the onset of intrusive thoughts and imaginations from the beginning. Once they manifest and the soul inclines towards them, and once their impact strengthens within the soul, it becomes challenging to dispel them.',
        },
        {
          type: 'paragraph',
          text: 'After mastering vigilance, not only does the seeker stay away from alien thoughts and dangers, but sometimes they become so absorbed in their spiritual state that they are unaware even of their own existence. It is reported about Khwaja Khwajagan, Hazrat Peer Mitha Rahmatpuri (may Allah’s mercy be upon him), that he was so engrossed in preaching and advising that he was oblivious to hunger, thirst, heat, and cold. He lived a long life, consuming only a tiny amount of food, yet his passion for preaching was such that his sermons, starting after Fajr prayer, would continue until noon or even after offering the Zuhr prayer.',
        },
      ],
    },
  },
  {
    number: 8,
    slug: 'yad-dasht',
    term: 'یاد داشت',
    transliteration: 'Yad Dasht',
    meaning: {
      en: 'Perpetual Divine Awareness',
      ur: 'دوامِ حضور و یادداشتِ کامل',
      ar: 'دوام الحضور والشهود',
    },
    preview: {
      en: '“Yaddasht” refers to the state of continuous remembrance where, after persistent effort in maintaining vigilance, the seeker’s heart naturally turns towards the unparalleled and incomparable Being of Allah Almighty.',
      ur: 'تکلف اور مشقت کے بغیر ہمہ وقت بارگاہِ حق کے کامل حضور اور یاد میں مستغرق رہنا۔ یہ مقام ذکر کی مسلسل ریاضت کے بعد حاصل ہوتا ہے۔',
      ar: 'استدامة الحضور والشهود القلبي مع الله تعالى بذوق ووجدان دائم من غير تكلف، وهو غاية السلوك وثمرته العظمى.',
    },
    explanation: {
      en: 'An unbroken, effortless state of continuous divine awareness and inner witnessing. In this station, consciousness of Allah becomes permanent without struggle or strain.',
      ur: 'تکلف اور مشقت کے بغیر ہمہ وقت بارگاہِ حق کے کامل حضور اور یاد میں مستغرق رہنا۔ یہ مقام ذکر کی مسلسل ریاضت کے بعد حاصل ہوتا ہے۔',
      ar: 'استدامة الحضور والشهود القلبي مع الله تعالى بذوق ووجدان دائم من غير تكلف، وهو غاية السلوك وثمرته العظمى.',
    },
    source: {
      en: 'Khwaja Abdul Khaliq Ghujdawani (RA)',
      ur: 'خواجہ عبد الخالق غجدوانی ؒ',
      ar: 'الخواجة عبد الخالق الغجدواني رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Yaddasht” refers to the state of continuous remembrance where, after persistent effort in maintaining vigilance, the seeker’s heart naturally turns towards the unparalleled and incomparable Being of Allah Almighty. This state is reflective of the verse, “And He is with you wherever you are.” This state of constant remembrance, “Yaddasht,” is achieved when the seeker’s heart becomes so absorbed in the remembrance of Allah that it becomes immune to distractions that scatter and disperse thoughts.',
        },
      ],
    },
  },
  {
    number: 9,
    slug: 'wuquf-e-zamani',
    term: 'وقوفِ زمانی',
    transliteration: 'Wuqoof-e-Zamani',
    meaning: {
      en: 'Temporal Awareness',
      ur: 'وقت اور احوال کا جائزہ',
      ar: 'الوقوف الزماني',
    },
    preview: {
      en: '“Wuqoof-e-Zamani” implies that a seeker should introspect and review themselves. After every hour, one should reflect to see if the past time was spent in the remembrance of Allah...',
      ur: 'وقت اور اپنے باطنی احوال کا وقفے وقفے سے احتساب کرنا۔ اگر وقت ذکر و شکر میں گزرا ہو تو اللہ کی حمد کرے، اور اگر غفلت و کوتاہی سرزد ہوئی ہو تو استغفار اور توبہ کرے۔',
      ar: 'محاسبة النفس ومراقبة أحوالها على مر الساعات والأوقات؛ فإن كان في حضور وطاعة شكر الله، وإن كان في غفلة أو تقصير استغفر وتاب.',
    },
    explanation: {
      en: 'Periodically assessing one’s spiritual state to observe how time is being spent. If moments have passed in presence and obedience, the seeker gives thanks (shukr); if in negligence, one repents and seeks forgiveness (istighfar).',
      ur: 'وقت اور اپنے باطنی احوال کا وقفے وقفے سے احتساب کرنا۔ اگر وقت ذکر و شکر میں گزرا ہو تو اللہ کی حمد کرے، اور اگر غفلت و کوتاہی سرزد ہوئی ہو تو استغفار اور توبہ کرے۔',
      ar: 'محاسبة النفس ومراقبة أحوالها على مر الساعات والأوقات؛ فإن كان في حضور وطاعة شكر الله، وإن كان في غفلة أو تقصير استغفر وتاب.',
    },
    source: {
      en: 'Khwaja Bahauddin Naqshband (RA)',
      ur: 'خواجہ بہاؤالدین نقشبند ؒ',
      ar: 'الخواجة بهاء الدين نقشبند رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Wuqoof-e-Zamani” implies that a seeker should introspect and review themselves. After every hour, one should reflect to see if the past time was spent in the remembrance of Allah. If it was, then give thanks; if it was spent in negligence, then repent and make a firm intention to avoid such negligence in the future, never stepping beyond the bounds set by the Shariah. This concept aligns with the divine command: “Let every soul look to what it has put forth for tomorrow” which points towards this practice.',
        },
        {
          type: 'paragraph',
          text: 'This is also supported by the saying of Sayyidna Amir al-Mu’minin, Hazrat Umar (R.A.), who advised, “Account yourselves before you are accounted, and weigh your deeds before they are weighed for you, and prepare yourselves for the greatest exposition,” referring to the Day of Judgement when every individual’s actions will be accounted for and weighed.',
        },
      ],
    },
  },
  {
    number: 10,
    slug: 'wuquf-e-adadi',
    term: 'وقوفِ عددی',
    transliteration: 'Wuqoof-e-Adadi',
    meaning: {
      en: 'Numerical Awareness',
      ur: 'تعداد کا شعور و دھیان',
      ar: 'الوقوف العددي',
    },
    preview: {
      en: '“Wuqoof-e-Adadi” refers to the awareness of number, specifically in the repetition of remembrance (Dhikr). The seeker observes the prescribed count to gather scattered thoughts and anchor the heart...',
      ur: 'ذکر کے دوران مرشد کی بتائی ہوئی تعداد کا دھیان رکھنا۔ اس کا مقصد محض گنتی گننا نہیں بلکہ ذہن کو منتشر ہونے سے بچا کر دل کو یکسو کرنا ہے۔',
      ar: 'مراعاة العدد المحدد في أذكار الطريقة لحفظ الذهن من الشتات، مع العلم بأن المقصود هو حضور القلب بالذكر لا مجرد عد الأرقام.',
    },
    explanation: {
      en: 'Keeping mindful count during repetitive remembrance as prescribed by the guide. The purpose of observing the count is to anchor mental discipline and prevent wandering thoughts, rather than merely tallying figures.',
      ur: 'ذکر کے دوران مرشد کی بتائی ہوئی تعداد کا دھیان رکھنا۔ اس کا مقصد محض گنتی گننا نہیں بلکہ ذہن کو منتشر ہونے سے بچا کر دل کو یکسو کرنا ہے۔',
      ar: 'مراعاة العدد المحدد في أذكار الطريقة لحفظ الذهن من الشتات، مع العلم بأن المقصود هو حضور القلب بالذكر لا مجرد عد الأرقام.',
    },
    source: {
      en: 'Khwaja Bahauddin Naqshband (RA)',
      ur: 'خواجہ بہاؤالدین نقشبند ؒ',
      ar: 'الخواجة بہاؤالدین نقشبند رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Wuqoof-e-Adadi” means awareness of numbers, and it signifies the seeker’s conscious observation of the prescribed repetitions of Dhikr. The primary objective of observing the count is to gather scattered thoughts, shield the heart from distraction, and bring mental discipline into the presence of remembrance.',
        },
        {
          type: 'paragraph',
          text: 'The practice of counting in remembrance prepares the heart to achieve perfection in remembering “Al Ahad — the One.” By adhering to the established order and numbers taught by the Prophet (peace and blessings be upon him) and prescribed by the spiritual guide, the seeker learns to direct diverse mental faculties toward singular devotion to the Creator.',
        },
        {
          type: 'paragraph',
          text: 'While observing the number disciplines the mind, spiritual masters emphasize that true remembrance transcends mere numerical counting; the essence is complete presence of heart and sincere orientation toward Allah Almighty.',
        },
      ],
    },
  },
  {
    number: 11,
    slug: 'wuquf-e-qalbi',
    term: 'وقوفِ قلبی',
    transliteration: 'Wuqoof-e-Qalbi',
    meaning: {
      en: 'Awareness of the Heart',
      ur: 'دل کی طرف دھیان اور توجہ',
      ar: 'الوقوف القلبي',
    },
    preview: {
      en: '“Wuqoof-e-Qalbi” refers to the seeker’s continuous attention towards their heart. It signifies the heart’s presence and awareness in the Divine Presence, to the extent that it feels no need for anything other than Allah...',
      ur: 'باطنی دھیان اور توجہ کو دل کی طرف مرکوز رکھنا، تاکہ دل غیر اللہ کے خیالات سے خالی ہو کر ہمہ وقت ذاتِ باری تعالیٰ کی یاد اور انوار سے زندہ و بیدار رہے۔',
      ar: 'توجه الباطن بكليته نحو القلب، واستحضار عظمة المذكور سبحانه حتى يفيض القلب بالحياة النورانية والذكر المستمر.',
    },
    explanation: {
      en: 'Focusing the inner attention firmly upon the heart, directing all spiritual awareness toward the Divine Presence so that the heart remains active, illuminated, and conscious of Allah at all times.',
      ur: 'باطنی دھیان اور توجہ کو دل کی طرف مرکوز رکھنا، تاکہ دل غیر اللہ کے خیالات سے خالی ہو کر ہمہ وقت ذاتِ باری تعالیٰ کی یاد اور انوار سے زندہ و بیدار رہے۔',
      ar: 'توجه الباطن بكليته نحو القلب، واستحضار عظمة المذكور سبحانه حتى يفيض القلب بالحياة النورانية والذكر المستمر.',
    },
    source: {
      en: 'Khwaja Bahauddin Naqshband (RA)',
      ur: 'خواجہ بہاؤالدین نقشبند ؒ',
      ar: 'الخواجة بہاؤالدین نقشبند رحمه الله',
    },
    detailedContent: {
      en: [
        {
          type: 'paragraph',
          text: '“Wuqoof-e-Qalbi” refers to the seeker’s continuous attention towards their heart, which is located just below the left chest at a distance of two fingers. It signifies the heart’s presence and awareness in the Divine Presence, to the extent that it feels no need for anything other than Allah.',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Khwaja Ubaidullah Ahrar (may Allah sanctify his secret) explained Wuqoof-e-Qalbi as an awareness and presence of the heart toward the Most High Real, where the heart feels no need for anything except the Real.',
        },
        {
          type: 'paragraph',
          text: 'Hazrat Khwaja Bahauddin Naqshband Bukhari (may Allah sanctify his secret) considered Wuqoof-e-Qalbi essential for Dhikr (remembrance), stating that without it, eliminating heedlessness is challenging, and actions performed in such a state are ineffective. The term “Wuqoof” comes from “waqf,” meaning to pause or maintain; hence Wuqoof-e-Qalbi means to pause, maintain, and still the heart upon the remembrance of Allah Almighty, preventing it from deviating into thoughts of anything other than Allah.',
        },
      ],
    },
  },
];

export interface GoldenChainEra {
  eraId: string;
  eraTitle: LocalizedString;
  masters: ShijraNode[];
}

export const GOLDEN_CHAIN_ERAS: GoldenChainEra[] = [
  {
    eraId: 'early-companions',
    eraTitle: {
      en: 'Early Companions (1–5)',
      ur: 'قرونِ اولیٰ و صحابہ کرام (۱ تا ۵)',
      ar: 'الصحابة والقرون الأولى (١-٥)',
    },
    masters: [
      {
        generation: 1,
        name: {
          en: 'Hazrat Muhammad Mustafa ﷺ',
          ur: 'سید الانبیاء والمرسلین حضرت محمد مصطفیٰ ﷺ',
          ar: 'سيدنا ونبينا وإمامنا محمد المصطفى ﷺ',
        },
        title: {
          en: 'The Final Prophet & Source of Divine Light',
          ur: 'خاتم النبیین، رحمۃ للعالمین، منبعِ جمیع انوار',
          ar: 'خاتم النبيين، رحمة للعالمين، وسيد المرسلين',
        },
        restingPlace: {
          en: 'Al-Masjid an-Nabawi, Madinah Munawwarah',
          ur: 'گنبد خضراء، مسجد نبوی شریف، مدینہ منورہ',
          ar: 'الروضة الشريفة، المسجد النبوي، المدينة المنورة',
        },
        description: {
          en: 'The blessed fountainhead of all divine guidance, Shariah, and Tariqah, from whom the divine light flows through the hearts of the saints until the Day of Judgment.',
          ur: 'شریعت، طریقت اور تمام سلاسلِ ولایت کے اصل منبع و سرچشمہ، جن کے فیضِ باطنی سے تا قیامت قلوبِ مومنین منور ہیں۔',
          ar: 'أصل الشريعة والحقيقة والمنبع الأقدس لكافة سلاسل الولاية والمعرفة الإلهية.',
        },
      },
      {
        generation: 2,
        name: {
          en: 'Hazrat Abu Bakr Siddiq رضي الله عنه',
          ur: 'سیدنا حضرت ابوبکر صدیق رضی اللہ عنہ',
          ar: 'سيدنا الإمام أبو بكر الصديق رضي الله عنه',
        },
        title: {
          en: 'The First Caliph & The Truthful',
          ur: 'یارِ غار، خلیفۂ اول، افضل البشر بعد الانبیاء',
          ar: 'الخليفة الأول، الصديق الأكبر، رفيق الغار',
        },
        restingPlace: {
          en: 'Beside the Prophet ﷺ, Madinah Munawwarah',
          ur: 'پہلوئے اقدس نبی کریم ﷺ، مدینہ منورہ',
          ar: 'بجوار الحبيب المصطفى ﷺ، المدينة المنورة',
        },
        description: {
          en: 'Received the sacred mystery of silent heart remembrance (Zikr-e-Khafi) inside the Cave of Thawr, establishing the pristine Siddiqi foundation of this tariqah.',
          ur: 'غارِ ثور میں حضور نبی اکرم ﷺ سے ذکرِ خفی اور باطنی نسبت کا فیض حاصل کیا، جس سے طریقۂ نقشبندیہ کی صدیقیت قائم ہوئی۔',
          ar: 'تلقى سر الذكر الخفي في غار ثور، فأسس الأصل الصديقي المبارك لهذه الطريقة.',
        },
      },
      {
        generation: 3,
        name: {
          en: 'Hazrat Salman al-Farsi رضي الله عنه',
          ur: 'حضرت سلمان فارسی رضی اللہ عنہ',
          ar: 'سيدنا سلمان الفارسي رضي الله عنه',
        },
        title: {
          en: 'Ahl al-Bayt by Prophetic Declaration',
          ur: 'منا اہل البیت کے عظیم منصب پر فائز جلیل القدر صحابی',
          ar: 'من أهل البيت طهارةً ومقاماً',
        },
        restingPlace: {
          en: "Mada'in (Salman Pak), Iraq",
          ur: 'مدائن (سلمان پاک)، عراق',
          ar: 'المدائن، العراق',
        },
        description: {
          en: "Eminent Companion and seeker of divine truth whose spiritual transmission from Sayyiduna Abu Bakr As-Siddiq bridged the Sahaba to the Tabi'in.",
          ur: 'جلیل القدر صحابی رسول جنہیں حضور ﷺ نے اہلِ بیت میں شمار فرمایا اور سیدنا ابوبکر صدیق ؓ سے فیضِ باطنی کے امین بنے۔',
          ar: 'الصحابي الجليل الباحث عن الحق وجامع أسرار الصديق رضي الله عنه.',
        },
      },
      {
        generation: 4,
        name: {
          en: 'Hazrat Qasim ibn Muhammad ibn Abi Bakr رحمه الله',
          ur: 'حضرت امام قاسم بن محمد بن ابوبکر رضی اللہ عنہ',
          ar: 'الإمام القاسم بن محمد بن أبي بكر الصديق رحمه الله',
        },
        title: {
          en: 'Grand Jurist of Madinah Munawwarah',
          ur: 'فقہائے سبعہ مدینہ منورہ کے سرکردہ امام',
          ar: 'أحد الفقهاء السبعة بالمدينة المنورة',
        },
        restingPlace: {
          en: 'Qudayd, near Madinah Munawwarah',
          ur: 'قدید (قرب مدینہ منورہ)',
          ar: 'قديد، قرب المدينة المنورة',
        },
        description: {
          en: 'Grandson of Abu Bakr As-Siddiq, raised in the blessed household of Hazrat Aisha Siddiqa, harmonizing external Islamic jurisprudence with internal purity.',
          ur: 'سیدنا ابوبکر صدیق کے پوتے اور سیدہ عائشہ صدیقہ کے تربیت یافتہ، فقہ و طریقت کے جامع امام۔',
          ar: 'حفيد الصديق الأكبر وربيب أم المؤمنين عائشة رضي الله عنها، مجمع الفقه والولاية.',
        },
      },
      {
        generation: 5,
        name: {
          en: 'Hazrat Imam Jafar Sadiq رحمه الله',
          ur: 'حضرت امام جعفر صادق رضی اللہ عنہ',
          ar: 'الإمام جعفر بن محمد الصادق رحمه الله',
        },
        title: {
          en: 'The Pillar of Ahl al-Bayt & Master of Truth',
          ur: 'امامِ برحق، مجمع البحرین (صدیقی و علوی فیض کے جامع)',
          ar: 'إمام أهل البيت النبوي وعلم العلماء',
        },
        restingPlace: {
          en: 'Jannat al-Baqi, Madinah Munawwarah',
          ur: 'جنت البقیع، مدینہ منورہ',
          ar: 'مقبرة البقيع، المدينة المنورة',
        },
        description: {
          en: 'Sixth Imam of the Ahl al-Bayt, in whom the spiritual streams of Sayyiduna Ali and Sayyiduna Abu Bakr As-Siddiq harmonized into a magnificent ocean of gnosis.',
          ur: 'اہلِ بیت کے عظیم امام جن کی ذات میں صدیقی اور علوی انوار کا کامل امتزاج ہوا اور اسرارِ معرفت عروج پر پہنچے۔',
          ar: 'جامع النسبين الشريفين الصديقي والعلوي، وإمام أرباب الحقيقة والشريعة.',
        },
      },
    ],
  },
  {
    eraId: 'central-asia-bukhara',
    eraTitle: {
      en: 'Central Asia & Bukhara (6–23)',
      ur: 'مشائخِ وسط ایشیا و بخارا (۶ تا ۲۳)',
      ar: 'مشايخ آسيا الوسطى وبخارى (٦-٢٣)',
    },
    masters: [
      {
        generation: 6,
        name: {
          en: 'Hazrat Khwaja Bayazid Bastami رحمه الله',
          ur: 'سلطان العارفین حضرت خواجہ بایزید بسطامی رحمتہ اللہ علیہ',
          ar: 'سلطان العارفين أبو يزيد طيفور بن عيسى البسطامي رحمه الله',
        },
        title: {
          en: 'Sultan of the Gnostics (Sultan al-Arifin)',
          ur: 'سلطان العارفین، امام اربابِ تجرید و فنا',
          ar: 'سلطان العارفين ولسان التوحيد',
        },
        restingPlace: {
          en: 'Bistam, Semnan, Iran',
          ur: 'بسطام، سمنان، ایران',
          ar: 'بسطام، إيران',
        },
        description: {
          en: 'Pinnacle of divine love, self-effacement, and Uwaisi spiritual transmission from Imam Jafar Sadiq, exemplifying total extinction in the divine presence.',
          ur: 'مقامِ فنا و بقا اور عشقِ الٰہی کے بے مثل امام جن کا باطنی تعلق امام جعفر صادق سے اویسی طور پر فیض یاب تھا۔',
          ar: 'إمام التجرد في محبة الله، وأحد أقطاب الولاية الكبار في فناء الذات وشهود التوحيد.',
        },
      },
      {
        generation: 7,
        name: {
          en: 'Hazrat Khwaja Abul-Hassan Kharaqani رحمه الله',
          ur: 'حضرت خواجہ ابو الحسن خرقانی رحمتہ اللہ علیہ',
          ar: 'الخواجه أبو الحسن علي بن أحمد الخرقاني رحمه الله',
        },
        title: {
          en: 'The Ocean of Compassion & Divine Ecstasy',
          ur: 'شیخِ وقت، مربی سالکین',
          ar: 'قطب العارفين ونور السالكين',
        },
        restingPlace: {
          en: 'Kharaqan, near Bistam, Iran',
          ur: 'خرقان (قرب بسطام)، ایران',
          ar: 'خرقان، قرب بسطام، إيران',
        },
        description: {
          en: 'Celebrated spiritual master renowned for profound selflessness, humanitarian service, and spiritual lineage connection to Bayazid Bastami.',
          ur: 'ایثار و خدمتِ خلق اور فقر و توکل کے عظیم رہنما جن کے دروازے پر ہر مخلوق کے لیے رحمت کا سایہ تھا۔',
          ar: 'العارف بالله المشهور بفيضه الروحي العظيم وخدمة الخلق ومحبة المساكين.',
        },
      },
      {
        generation: 8,
        name: {
          en: 'Hazrat Khwaja Abul Qasim Gurgani رحمه الله',
          ur: 'حضرت خواجہ ابوالقاسم گورگانی رحمتہ اللہ علیہ',
          ar: 'الخواجه أبو القاسم علي الكركاني (الجرجاني) رحمه الله',
        },
        title: {
          en: 'Guide of the Spiritual Travelers',
          ur: 'پیشوائے اہلِ معرفت',
          ar: 'مرشد السالكين وقدوة المحققين',
        },
        restingPlace: {
          en: 'Gurgan (Jorjan), Iran',
          ur: 'گورگان (جرجان)، ایران',
          ar: 'جرجان، إيران',
        },
        description: {
          en: 'Eminent master in the transmission of silent heart recollection and ascetic discipline in Khorasan.',
          ur: 'خراسان کے جلیل القدر مرشد جن کے فیض سے خطے میں طریقت و تصوف کے چراغ روشن ہوئے۔',
          ar: 'أحد أوتاد التصوف في خراسان، ناشر أنوار الذكر القلبي وحقيقة السلوك.',
        },
      },
      {
        generation: 9,
        name: {
          en: 'Hazrat Khwaja Abu Ali Farmadi رحمه الله',
          ur: 'حضرت خواجہ ابو علی فارمدی رحمتہ اللہ علیہ',
          ar: 'الخواجه أبو علي الفضل بن محمد الفارمدي رحمه الله',
        },
        title: {
          en: 'The Orator of Khorasan & Master of Imam Ghazali',
          ur: 'لسانِ وقت، استاد و مرشدِ امام غزالی',
          ar: 'لسان العصر وشيخ حجة الإسلام أبي حامد الغزالي',
        },
        restingPlace: {
          en: 'Farmad, near Tus, Mashhad, Iran',
          ur: 'فارمد (قرب طوس/مشہد)، ایران',
          ar: 'فارمد، قرب طوس، إيران',
        },
        description: {
          en: 'Spiritual teacher and guide to Hujjat al-Islam Imam Abu Hamid al-Ghazali, harmonizing intellectual sciences with inward illumination.',
          ur: 'امام محمد غزالی کے مرشدِ گرامی جنہوں نے علومِ ظاہرہ اور معرفتِ باطنہ کو یکجا کیا۔',
          ar: 'الشيخ العارف الذي وجه الإمام الغزالي إلى علوم المكاشفة وحقيقة التزكية.',
        },
      },
      {
        generation: 10,
        name: {
          en: 'Hazrat Khwaja Abu Yaqub Yusuf Hamadani رحمه الله',
          ur: 'حضرت خواجہ ابو یعقوب یوسف ہمدانی رحمتہ اللہ علیہ',
          ar: 'الخواجه أبو يعقوب يوسف الهمداني رحمه الله',
        },
        title: {
          en: 'The Kaaba of Khorasan',
          ur: 'کعبۂ خراسان، پیشوائے مشائخِ خواجگان',
          ar: 'كعبة خراسان وإمام أئمة الطريقة',
        },
        restingPlace: {
          en: 'Merv (Mary), Turkmenistan',
          ur: 'مرو الشاہجان، ترکمانستان',
          ar: 'مرو، تركمانستان',
        },
        description: {
          en: 'Venerated master from whom the great traditions of Central Asia sprang, mentor to both Khwaja Abdul Khaliq Ghujdawani and Khwaja Ahmad Yasawi.',
          ur: 'خواجہ عبدالخالق غجدوانی اور احمد یسوی کے عظیم مرشد، جنہیں مشائخ "کعبۂ خراسان" کہتے تھے۔',
          ar: 'أستاذ شيوخ ما وراء النهر، ومنبع السلسلة الخواجكانية المباركة.',
        },
      },
      {
        generation: 11,
        name: {
          en: 'Hazrat Khwaja Abdul Khaliq Ghujdawani رحمه الله',
          ur: 'حضرت خواجہ عبدالخالق غجدوانی رحمتہ اللہ علیہ',
          ar: 'الخواجه عبد الخالق الغجدواني رحمه الله',
        },
        title: {
          en: 'Codifier of the Naqshbandi Principles (Kalimat-e-Qudsiyya)',
          ur: 'بانی طریقۂ خواجگان، واضعِ کلماتِ قدسیہ',
          ar: 'واضع الكلمات القدسية وإمام الخواجكان',
        },
        restingPlace: {
          en: 'Ghujdawan, near Bukhara, Uzbekistan',
          ur: 'غجدوان (قرب بخارا)، ازبکستان',
          ar: 'غجدوان، قرب بخارى، أوزبكستان',
        },
        description: {
          en: 'Codified the foundational principles of the Naqshbandi way (Hosh dar Dam, Nazar bar Qadam, etc.) and revived silent heart remembrance under direct guidance of Khidr (A.S).',
          ur: 'طریقۂ خواجگان کے آٹھ کلماتِ قدسیہ کے واضع، جنہیں حضرت خضر علیہ السلام سے باطنی تلقین ذکرِ قلبی حاصل ہوئی۔',
          ar: 'أسس الكلمات القدسية لضبط النفس وصيانة الأنفاس عن الغفلة.',
        },
      },
      {
        generation: 12,
        name: {
          en: 'Hazrat Khwaja Arif Riwgari رحمه الله',
          ur: 'حضرت خواجہ عارف ریوگری رحمتہ اللہ علیہ',
          ar: 'الخواجه عارف الريوكري رحمه الله',
        },
        title: {
          en: 'The Mirror of Pure Guidance',
          ur: 'سراجِ طریقت، مونسِ سالکین',
          ar: 'سراج الطريقة وبرهان الحقيقة',
        },
        restingPlace: {
          en: 'Riwgar, Bukhara, Uzbekistan',
          ur: 'ریوگر، بخارا، ازبکستان',
          ar: 'ريوكر، بخارى، أوزبكستان',
        },
        description: {
          en: 'Senior deputy of Khwaja Ghujdawani who steadfastly maintained the Sunnah and preserved the pristine purity of silent Zikr.',
          ur: 'خواجہ عبدالخالق غجدوانی کے خلیفۂ اعظم، جنہوں نے استقامتِ شریعت اور ذکرِ خفی کا پرچم بلند رکھا۔',
          ar: 'خليفة الغجدواني، والمحافظ على سنن الهدى وآداب الخلوة والحضور.',
        },
      },
      {
        generation: 13,
        name: {
          en: 'Hazrat Khwaja Mahmood Anjir-Faghnawi رحمه الله',
          ur: 'حضرت خواجہ محمود انجیر فغنوی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمود الخير فغنوي رحمه الله',
        },
        title: {
          en: 'The Radiant Light of Bukhara',
          ur: 'محبوبِ بارگاہِ ربانی',
          ar: 'نور بخارى وقطب زمانه',
        },
        restingPlace: {
          en: 'Faghna, Bukhara, Uzbekistan',
          ur: 'فغنہ (وابقند)، بخارا، ازبکستان',
          ar: 'فغنة، بخارى، أوزبكستان',
        },
        description: {
          en: 'Master of spiritual states and discernment whose luminous discourses awakened hearts across Transoxiana.',
          ur: 'بخارا کے پرتاثیر ولیِ کامل جن کے فیض سے ماوراء النہر کے خطے میں ہزاروں تشنگانِ حق سیراب ہوئے۔',
          ar: 'عالم رباني أحيا النفوس بمواعظه وأسرار صحبته المباركة.',
        },
      },
      {
        generation: 14,
        name: {
          en: 'Hazrat Khwaja Ali Ramitani رحمه الله',
          ur: 'حضرت خواجہ علی رامتینی (حضرت عزیزان) رحمتہ اللہ علیہ',
          ar: 'الخواجه علي الرامتيني (حضرة عزيزان) رحمه الله',
        },
        title: {
          en: 'Hazrat Azizan (The Beloved)',
          ur: 'حضرت عزیزان، قطبِ جہاں',
          ar: 'حضرة عزيزان وقطب الأقطاب',
        },
        restingPlace: {
          en: 'Kunya-Urgench, Turkmenistan',
          ur: 'کہنہ ارگنج، خوارزم، ترکمانستان',
          ar: 'أوركنج، خوارزم، تركمانستان',
        },
        description: {
          en: 'Affectionately known as "Hazrat Azizan", a master artisan whose humble daily work never distracted his heart from constant presence with Allah.',
          ur: 'مشہور بہ "حضرت عزیزان"، جو روزگار کے ساتھ ہر لمحہ دل کو بارگاہِ الٰہی میں حاضر رکھنے کے مجسم پیکر تھے۔',
          ar: 'العارف الشهير بـ "عزيزان"، ضرب أروع الأمثلة في جمع القلب على الله مع مباشرة أسباب الكسب الحلال.',
        },
      },
      {
        generation: 15,
        name: {
          en: 'Hazrat Khwaja Muhammad Baba As-Samasi رحمه الله',
          ur: 'حضرت خواجہ محمد بابا سماسی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد بابا السماسي رحمه الله',
        },
        title: {
          en: 'The Forecaster of Naqshbandi Dawn',
          ur: 'بشارت دہندۂ ولادتِ شاہِ نقشبند',
          ar: 'المبشر بنور الإمام بهاء الدين النقشبند',
        },
        restingPlace: {
          en: 'Samas, Romitan, Bukhara, Uzbekistan',
          ur: 'سماس، رومیتن، بخارا، ازبکستان',
          ar: 'سماس، رامتين، بخارى، أوزبكستان',
        },
        description: {
          en: 'Renowned for foretelling the birth and spiritual grandeur of Khwaja Bahauddin Naqshband when passing by the village of Qasr-e-Hinduran.',
          ur: 'وہ جلیل القدر ولی جنہوں نے قصرِ ہندواں سے گزرتے ہوئے فرمایا تھا کہ اس بستی سے ولایت کے آفتاب (شاہ نقشبند) طلوع ہوں گے۔',
          ar: 'تنبأ بظهور شمس الطريقة بهاء الدين نقشبند، وتعهده بالدعاء والتربية.',
        },
      },
      {
        generation: 16,
        name: {
          en: 'Hazrat Khwaja Sayyid Amir Kulal رحمه الله',
          ur: 'حضرت خواجہ سید امیر کلال رحمتہ اللہ علیہ',
          ar: 'الخواجه السيد أمير كلال رحمه الله',
        },
        title: {
          en: 'The Master Potter & Teacher of Shah Naqshband',
          ur: 'استاد و مرشدِ شاہِ نقشبند',
          ar: 'شيخ ومربي الإمام بهاء الدين نقشبند',
        },
        restingPlace: {
          en: 'Sukhari, Kagan, Bukhara, Uzbekistan',
          ur: 'سوخار، کاغان، بخارا، ازبکستان',
          ar: 'سوخار، بخارى، أوزبكستان',
        },
        description: {
          en: 'Direct spiritual preceptor of Khwaja Bahauddin Naqshband who completed his formal inner training and conferred full authority upon him.',
          ur: 'سلسلہ سادات کے عظیم مرشد اور شاہِ نقشبند کے شیخ جنہوں نے انہیں تکمیلِ طریقت کے بعد مسندِ ارشاد پر فائز کیا۔',
          ar: 'المرشد الكامل الذي صقل همة الإمام نقشبند وأفاض عليه أسرار الخلافة.',
        },
      },
      {
        generation: 17,
        name: {
          en: "Hazrat Khwaja Muhammad Baha'uddin Naqshband Bukhari رحمه الله",
          ur: 'امام الطریقہ حضرت خواجہ شاہ محمد بہاؤالدین نقشبند بخاری رحمتہ اللہ علیہ',
          ar: 'إمام الطريقة الخواجه بهاء الدين محمد بن محمد البخاري نقشبند رحمه الله',
        },
        title: {
          en: 'Imam of the Tariqah & Bearer of the Divine Seal',
          ur: 'امام طریقہ، غوث الاعظم فیضِ باطن، صاحبِ نقشِ الٰہی',
          ar: 'إمام الطريقة النقشبندية ومحييها',
        },
        restingPlace: {
          en: 'Qasr-e-Arifan, Bukhara, Uzbekistan',
          ur: 'قصرِ عارفان، بخارا، ازبکستان',
          ar: 'قصر العارفين، بخارى، أوزبكستان',
        },
        description: {
          en: 'The illustrious namesake of the Naqshbandi Tariqah who instituted the golden principle "Dil ba Yar, Dast ba Kar" (Heart with the Beloved, hand at work) and sealed silent Zikr as the ultimate path of heart reformation.',
          ur: 'سلسلہ عالیہ نقشبندیہ کے بانی جن کا نقشِ الٰہی قلوبِ سالکین پر ثبت ہوتا ہے اور جن کا زریں قول ہے: دل بہ یار و دست بہ کار۔',
          ar: 'إمام الطريقة الذي سُميت باسمه، ومقرر منهج الذكر القلبي ومبدأ "القلب مع الحبيب واليد في العمل".',
        },
      },
      {
        generation: 18,
        name: {
          en: "Hazrat Khwaja Ala'uddin Attar رحمه الله",
          ur: 'حضرت خواجہ علاؤالدین عطار رحمتہ اللہ علیہ',
          ar: 'الخواجه علاء الدين العطار رحمه الله',
        },
        title: {
          en: 'Pillar of Spiritual Succession',
          ur: 'خلیفۂ اعظم شاہِ نقشبند، پرتوِ انوارِ نقشبندی',
          ar: 'خليفة الإمام نقشبند وصهره العظيم',
        },
        restingPlace: {
          en: 'Denov, Surxondaryo, Uzbekistan',
          ur: 'دیناؤ (چغانیاں)، سرخان دریا، ازبکستان',
          ar: 'ديناو، أوزبكستان',
        },
        description: {
          en: 'Chief successor and son-in-law of Khwaja Bahauddin Naqshband, about whom Shah Naqshband testified: "He lifted the burdens from my spiritual shoulders."',
          ur: 'شاہِ نقشبند کے خلیفہ اول و داماد، جن کے بارے میں شاہ صاحب نے فرمایا تھا کہ علاؤالدین نے میرا بوجھ ہلکا کر دیا۔',
          ar: 'الخليفة الأبرز للإمام نقشبند، والمؤتمن على أسراره وطريقته.',
        },
      },
      {
        generation: 19,
        name: {
          en: 'Hazrat Khwaja Yaqub Charkhi رحمه الله',
          ur: 'حضرت خواجہ یعقوب چرخی رحمتہ اللہ علیہ',
          ar: 'الخواجه يعقوب الجرخي رحمه الله',
        },
        title: {
          en: 'The Quranic Commentator & Guide of Khwaja Ahrar',
          ur: 'مفسرِ قرآن، مرشدِ خواجہ احرار',
          ar: 'المفسر الرباني ومرشد الخواجه أحرار',
        },
        restingPlace: {
          en: 'Gulistan, Dushanbe, Tajikistan',
          ur: 'گلستان، حصار (نزد دوشنبہ)، تاجکستان',
          ar: 'حصار، قرب دوشنبيه، طاجيكستان',
        },
        description: {
          en: 'Author of an esteemed Persian Tafsir of the Quran and spiritual mentor to Khwaja Ubaidullah Ahrar.',
          ur: 'تفسیرِ چرخی کے مصنف اور علومِ شریعت و طریقت کے جامع مرشد، جن کے ذریعے خواجہ احرار فیض یاب ہوئے۔',
          ar: 'صاحب التفسير المعروف، وجسر الوصل العظيم بين خواجه عطار وخواجه أحرار.',
        },
      },
      {
        generation: 20,
        name: {
          en: 'Hazrat Khwaja Ubaidullah Ahrar رحمه الله',
          ur: 'حضرت خواجہ عبید اللہ احرار رحمتہ اللہ علیہ',
          ar: 'الخواجه ناصر الدين عبيد الله أحرار رحمه الله',
        },
        title: {
          en: 'Qutb of the Era & Patron of Social Justice',
          ur: 'قطبِ جہاں، مربی سلاطین، حامیِ شریعت',
          ar: 'قطب الزمان ومصلح شؤون الأمة والسلاطين',
        },
        restingPlace: {
          en: 'Samarkand, Uzbekistan',
          ur: 'سمرقند، ازبکستان',
          ar: 'سمرقند، أوزبكستان',
        },
        description: {
          en: 'Transcendent spiritual leader whose immense moral authority brought justice to kingdoms and shielded Muslims across Central Asia from tyranny.',
          ur: 'سمرقند و بخارا کے مقتدر مرشد جنہوں نے اپنی روحانی قوت سے سلاطین کو شریعت اور عدل کا پابند بنایا۔',
          ar: 'سلطان الأولياء في زمانه، وظف هيبته الروحية لنصرة المظلومين وتطبيق الشريعة.',
        },
      },
      {
        generation: 21,
        name: {
          en: 'Hazrat Khwaja Muhammad Zahid Vakhshi رحمه الله',
          ur: 'حضرت خواجہ محمد زاہد وخش رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد زاهد الوخشي رحمه الله',
        },
        title: {
          en: 'The Ascetic of Vakhsh',
          ur: 'خلیفۂ خواجہ احرار، پیکرِ زہد و تقویٰ',
          ar: 'الزاهد الكامل وخليفة الخواجه أحرار',
        },
        restingPlace: {
          en: 'Vakhsh, Khatlon, Tajikistan',
          ur: 'وخش، ختلان، تاجکستان',
          ar: 'وخش، طاجيكستان',
        },
        description: {
          en: 'Illustrious deputy of Khwaja Ahrar who spent decades guiding disciples in the mountainous reaches of Central Asia in absolute ascetic devotion.',
          ur: 'خواجہ احرار کے برگزیدہ خلیفہ جنہوں نے زہد و استغناء کے ساتھ ذکرِ الٰہی کے چمن کو شاداب رکھا۔',
          ar: 'وارث أنوار الخواجه أحرار، ومربي السالكين في التبتل والإخلاص.',
        },
      },
      {
        generation: 22,
        name: {
          en: 'Hazrat Khwaja Darwish Muhammad رحمه الله',
          ur: 'حضرت خواجہ درویش محمد رحمتہ اللہ علیہ',
          ar: 'الخواجه درويش محمد رحمه الله',
        },
        title: {
          en: 'The Master of Selfless Devotion',
          ur: 'وارثِ نسبتِ احراریہ',
          ar: 'صاحب النفس الزكية والهمة العالية',
        },
        restingPlace: {
          en: 'Askarar, Kitob, Qashqadaryo, Uzbekistan',
          ur: 'اسقرار، کتاب، قشقہ دریا، ازبکستان',
          ar: 'كتاب، قشقداريا، أوزبكستان',
        },
        description: {
          en: 'Maternal nephew of Khwaja Zahid Vakhshi and stalwart preserver of the central lineage.',
          ur: 'خواجہ زاہد وخش کے بھانجے اور خلیفہ، جنہوں نے ریاضت و مجاہدہ سے باطنی کمالات حاصل کیے۔',
          ar: 'جامع بين صلة الرحم ووراثة السر الروحي، ومربي الأجيال في طاعة الله.',
        },
      },
      {
        generation: 23,
        name: {
          en: 'Hazrat Khwaja Muhammad Amkanagi رحمه الله',
          ur: 'حضرت خواجہ محمد امکنگی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد الأمكنكي رحمه الله',
        },
        title: {
          en: 'The Conduit to the Subcontinent',
          ur: 'شیخ و مرشدِ خواجہ باقی باللہ',
          ar: 'شيخ ومربي الخواجه باقي بالله',
        },
        restingPlace: {
          en: 'Amkana, near Kitob, Uzbekistan',
          ur: 'امکنہ (نزد کتاب)، ازبکستان',
          ar: 'أمكنة، قرب كتاب، أوزبكستان',
        },
        description: {
          en: 'Son and successor of Khwaja Darwish Muhammad, who dispatched Khwaja Baqi Billah to India with the prophecy that a spiritual sun (Imam Rabbani) would rise through him.',
          ur: 'خواجہ درویش محمد کے فرزند جن کے حکم سے خواجہ باقی باللہ ہندوستان روانہ ہوئے اور مجدد الف ثانی کا ظہور ہوا۔',
          ar: 'وجه تلميذه الخواجه باقي بالله إلى الهند مبشراً بظهور شمس التجديد الرباني.',
        },
      },
    ],
  },
  {
    eraId: 'mujaddidi-revival',
    eraTitle: {
      en: 'Mujaddidi Revival (24–38)',
      ur: 'تجدیدِ مجددیہ و مسکین پور (۲۴ تا ۳۸)',
      ar: 'التجديد المجددي ومسكين بور (٢٤-٣٨)',
    },
    masters: [
      {
        generation: 24,
        name: {
          en: 'Hazrat Khwaja Muhammad Baqi Billah رحمه الله',
          ur: 'حضرت خواجہ محمد باقی باللہ دہلوی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد باقي بالله الدهلوي رحمه الله',
        },
        title: {
          en: 'The Pioneer of Naqshbandi Order in India',
          ur: 'ہند میں بانیِ طریقۂ نقشبندیہ، مرشدِ امامِ ربانی',
          ar: 'مغرس الطريقة النقشبندية في الديار الهندية',
        },
        restingPlace: {
          en: 'Delhi, India',
          ur: 'قرب قطب روڈ، دہلی، بھارت',
          ar: 'دلهي، الهند',
        },
        description: {
          en: 'Transplanted the Naqshbandi tree from Central Asia into India and discovered and trained Sheikh Ahmad al-Sirhindi (Imam Rabbani).',
          ur: 'وہ جلیل القدر مرشد جنہوں نے وسط ایشیا سے فیضِ نقشبند ہند لا کر امام ربانی مجدد الف ثانی جیسی ہستی کو پروان چڑھایا۔',
          ar: 'ناقل النور النقشبندي إلى الهند، والمربي العظيم للإمام السرهندي.',
        },
      },
      {
        generation: 25,
        name: {
          en: 'Hazrat Sheikh Ahmad al-Faruqi al-Sirhindi, Imam Rabbani رحمه الله',
          ur: 'امام ربانی مجدد الفِ ثانی حضرت شیخ احمد فاروقی سرہندی رحمتہ اللہ علیہ',
          ar: 'الإمام الرباني مجدد الألف الثاني أحمد بن عبد الأحد الفاروقي السرهندي رحمه الله',
        },
        title: {
          en: 'Mujaddid Alf-e-Sani (Reviver of the Second Millennium)',
          ur: 'مجددِ الفِ ثانی، قیومِ اول، مصنفِ مکتوباتِ شریف',
          ar: 'مجدد الألف الثاني، القيوم الأول، وناشر التوحيد الخالص',
        },
        restingPlace: {
          en: 'Sirhind Sharif, Punjab, India',
          ur: 'سرہند شریف، پنجاب، بھارت',
          ar: 'سرهند شريف، البنجاب، الهند',
        },
        description: {
          en: "The monumental reviver of orthodox Sunni Islam who defeated Akbar's syncretic Din-i-Ilahi, harmonized tasawwuf with strict Shariah, and authored the immortal Maktubat-e-Imam Rabbani.",
          ur: 'دینِ الٰہی کے فتنے کا قلع قمع کرنے والے، شریعت و طریقت کے مجددِ اعظم اور مکتوباتِ قدسیہ کے مصنف جن سے سلسلہ "مجددیہ" کہلایا۔',
          ar: 'قائم السنة وقامع البدعة، صاغ التصوف في قال الشريعة وألّف "المكتوبات الشريفة" العظيمة.',
        },
      },
      {
        generation: 26,
        name: {
          en: 'Hazrat Imam Khwaja Muhammad Masum Faruqi رحمه الله',
          ur: 'حضرت امام خواجہ محمد معصوم فاروقی سرہندی رحمتہ اللہ علیہ',
          ar: 'الإمام الخواجه محمد معصوم الفاروقي السرهندي رحمه الله',
        },
        title: {
          en: 'Qayyum-e-Sani (The Second Sustainer of the Universe)',
          ur: 'قیومِ ثانی، عروۃ الوثقیٰ، فرزند و جانشینِ مجدد',
          ar: 'القيوم الثاني والعروة الوثقى',
        },
        restingPlace: {
          en: 'Sirhind Sharif, Punjab, India',
          ur: 'سرہند شریف، پنجاب، بھارت',
          ar: 'سرهند شريف، البنجاب، الهند',
        },
        description: {
          en: 'Third son and designated spiritual heir of Imam Rabbani, under whose leadership hundreds of thousands embraced spiritual training and 900 deputies spread across the Islamic world.',
          ur: 'امام ربانی کے جانشینِ اعظم جن کے زیرِ تربیت لاکھوں سالکین اور 900 کامل خلفاء نے دنیا بھر میں شریعت کا نور پھیلایا۔',
          ar: 'وارث الإمام المجدد، الذي تخرج على يديه مئات الأولياء وسار نوره إلى أرجاء العالم الإسلامي.',
        },
      },
      {
        generation: 27,
        name: {
          en: 'Hazrat Khwaja Muhammad Saifuddin Faruqi رحمه الله',
          ur: 'حضرت خواجہ محمد سیف الدین فاروقی سرہندی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد سيف الدين الفاروقي السرهندي رحمه الله',
        },
        title: {
          en: 'The Sword of Religion & Royal Preceptor',
          ur: 'سیف اللہ، مرشدِ شاہی (اورنگزیب عالمگیر)',
          ar: 'سيف الدين ومرشد السلطان أورنك زيب',
        },
        restingPlace: {
          en: 'Sirhind Sharif, Punjab, India',
          ur: 'سرہند شریف، پنجاب، بھارت',
          ar: 'سرهند شريف، البنجاب، الهند',
        },
        description: {
          en: 'Fifth son of Khwaja Muhammad Masum, spiritual mentor to Emperor Aurangzeb Alamgir, who eradicated un-Islamic customs from the royal court.',
          ur: 'خواجہ محمد معصوم کے فرزندِ ارجمند اور مغل فرمانروا اورنگزیب عالمگیر کے مرشد جنہوں نے دربار سے غیر شرعی رسومات کا خاتمہ کیا۔',
          ar: 'أستاذ ومرشد السلطان العادل أورنك زيب، ومطهر البلاط من البدع والرسوم الباطلة.',
        },
      },
      {
        generation: 28,
        name: {
          en: 'Hazrat Hafiz Muhammad Mohsin Dehlavi رحمه الله',
          ur: 'حضرت حافظ محمد محسن دہلوی رحمتہ اللہ علیہ',
          ar: 'الحافظ محمد محسن الدهلوي رحمه الله',
        },
        title: {
          en: 'The Luminous Guide of Delhi',
          ur: 'پیشوائے طریقت دہلی',
          ar: 'علم العلماء ونور دلهي',
        },
        restingPlace: {
          en: 'Delhi, India',
          ur: 'دہلی، بھارت',
          ar: 'دلهي، الهند',
        },
        description: {
          en: 'Eminent successor of Khwaja Saifuddin who preserved the fiery spiritual concentration of Sirhind in the Mughal capital of Delhi.',
          ur: 'خواجہ سیف الدین کے خلیفہ جنہوں نے دہلی کے مرکز میں مجددی نسبت کی روشنی کو قائم رکھا۔',
          ar: 'حامل لواء النسبة المجددية في العاصمة دلهي ومربي جيل الصدق.',
        },
      },
      {
        generation: 29,
        name: {
          en: 'Hazrat Sayyid Nur Muhammad Badayuni رحمه الله',
          ur: 'حضرت سید نور محمد بدایونی رحمتہ اللہ علیہ',
          ar: 'السيد نور محمد البدايوني رحمه الله',
        },
        title: {
          en: "The Pure Master of Scrupulous Piety (Wara')",
          ur: 'صاحبِ ورع و تقویٰ، مرشدِ مرزا مظہر',
          ar: 'قدوة أهل الورع والتقوى وشيخ الشهيد مظهر',
        },
        restingPlace: {
          en: 'Near Turkman Gate, Delhi, India',
          ur: 'ترکمان گیٹ، دہلی، بھارت',
          ar: 'قرب بوابة التركمان، دلهي، الهند',
        },
        description: {
          en: 'Legendary for unmatched scrupulous adherence to halal sustenance and spiritual vigilance, teacher of Mirza Mazhar Jan-e-Janaan.',
          ur: 'رزقِ حلال، پرہیزگاری اور مراقبۂ قلبی کے بے مثل امام، جنہوں نے مرزا مظہر جانِ جاناں کو تربیت دی۔',
          ar: 'ضرب به المثل في الورع الشديد والتحري في المأكل الحلال ودوام المراقبة.',
        },
      },
      {
        generation: 30,
        name: {
          en: 'Hazrat Shaheed Mirza Mazhar Jan-e-Janaan, Shams-ud-Din Habibullah رحمه الله',
          ur: 'حضرت شہید مرزا مظہر جانِ جاناں، شمس الدین حبیب اللہ رحمتہ اللہ علیہ',
          ar: 'الشهيد مرزا مظهر جان جانان، شمس الدين حبيب الله رحمه الله',
        },
        title: {
          en: 'Sun of the Faith & Martyr of Love',
          ur: 'شمس الدین، شہیدِ محبت و شریعت، بانی خانقاہ مظہریہ',
          ar: 'شمس الدين وشهيد المحبة الإلهية ومؤسس الخانقاه المظهرية',
        },
        restingPlace: {
          en: 'Chitli Qabr, Delhi, India',
          ur: 'چتلی قبر، دہلی، بھارت',
          ar: 'دلهي، الهند',
        },
        description: {
          en: 'Sublime poet, jurist, and martyr of divine love whose Khanqah Mazhariya in Delhi became the spiritual epicenter of the Islamic world.',
          ur: 'عظیم صوفی شاعر، متبعِ سنت اور شہیدِ راہِ حق، جن کی خانقاہِ مظہریہ دہلی سے دنیا بھر میں فیض پہنچا۔',
          ar: 'الإمام المحدث والشاعر العارف، استشهد في سبيل الله بعد أن ملأ الآفاق علماً وتقوى.',
        },
      },
      {
        generation: 31,
        name: {
          en: 'Hazrat Khwaja Abdullah Dehlavi, alias Shah Ghulam Ali Dehlavi رحمه الله',
          ur: 'حضرت خواجہ عبداللہ دہلوی المعروف شاہ غلام علی دہلوی رحمتہ اللہ علیہ',
          ar: 'الخواجه عبد الله الدهلوي المعروف بشاه غلام علي الدهلوي رحمه الله',
        },
        title: {
          en: 'Global Beacon of the Naqshbandi Tariqah',
          ur: 'قطب الارشاد، مقتدائے عالم، مربیِ مشائخِ عرب و عجم',
          ar: 'قطب الإرشاد ومربي مشايخ العالم الإسلامي',
        },
        restingPlace: {
          en: 'Beside Mirza Mazhar, Delhi, India',
          ur: 'پہلوئے مرزا مظہر جانِ جاناں، دہلی، بھارت',
          ar: 'بجوار الإمام مظهر، دلهي، الهند',
        },
        description: {
          en: 'Whose Khanqah attracted seekers from Baghdad, Syria, Turkey, Afghanistan, and the Hijaz; spiritual father of Mawlana Khalid al-Baghdadi.',
          ur: 'جن کی خانقاہ میں بغداد، شام، روم، حجاز اور افغانستان سے سالکین کھنچے چلے آتے تھے، اور جن کے خلفاء نے مشرق تا مغرب فیض پھیلایا۔',
          ar: 'أمّت خانقاهه وفود الطلاب من الحجاز والشام وبلاد الروم وبغداد، وتخرج عليه مولانا خالد البغدادي.',
        },
      },
      {
        generation: 32,
        name: {
          en: 'Hazrat Hafiz Abu Saeed Faruqi Mujaddidi رحمه الله',
          ur: 'حضرت حافظ شاہ ابو سعید فاروقی مجددی دہلوی رحمتہ اللہ علیہ',
          ar: 'الحافظ شاه أبو سعيد الفاروقي المجددي رحمه الله',
        },
        title: {
          en: 'Heir to the Mazhari Spiritual Throne',
          ur: 'سجادہ نشین خانقاہِ مظہریہ دہلی',
          ar: 'وارث الخانقاه المظهرية وشيخ الطريقة',
        },
        restingPlace: {
          en: 'Tonk, Rajasthan, India',
          ur: 'ٹونک، راجستھان، بھارت',
          ar: 'تونك، راجستان، الهند',
        },
        description: {
          en: 'Direct descendant of Imam Rabbani and chosen successor of Shah Ghulam Ali Dehlavi, celebrated for encyclopedic Quranic knowledge.',
          ur: 'امام ربانی کی اولاد میں سے شاہ غلام علی دہلوی کے جانشین، جن کے تقویٰ اور زہد کی بدولت ہزاروں افراد ہدایت یاب ہوئے۔',
          ar: 'سليل الإمام المجدد وخليفة شاه غلام علي، صاحب العلم والعمل والورع التام.',
        },
      },
      {
        generation: 33,
        name: {
          en: 'Hazrat Khwaja Shah Ahmed Saeed Faruqi Mujaddidi رحمه الله',
          ur: 'حضرت خواجہ شاہ احمد سعید فاروقی مجددی مہاجر مدنی رحمتہ اللہ علیہ',
          ar: 'الخواجه شاه أحمد سعيد الفاروقي المجددي المهاجر المدني رحمه الله',
        },
        title: {
          en: 'The Luminous Immigrant to the City of the Prophet',
          ur: 'مہاجرِ مدینہ منورہ، مصلحِ ملت',
          ar: 'المهاجر إلى المدينة المنورة وناشر السنة',
        },
        restingPlace: {
          en: 'Jannat al-Baqi, Madinah Munawwarah',
          ur: 'جنت البقیع (قرب عثمان غنی ؓ)، مدینہ منورہ',
          ar: 'مقبرة البقيع، المدينة المنورة',
        },
        description: {
          en: 'Son of Shah Abu Saeed and author of profound defences of the Sunnah, who migrated to Madinah Munawwarah and was laid to rest in Jannat al-Baqi.',
          ur: 'شاہ ابو سعید کے فرزندِ ارجمند جنہوں نے 1857ء کے بعد مدینہ منورہ ہجرت کی اور جنت البقیع میں دفن ہوئے۔',
          ar: 'هاجر إلى طيبة الطيبة ونشر الطريقة فيها، ودفن بالبقيع بجوار سادات الصحابة.',
        },
      },
      {
        generation: 34,
        name: {
          en: 'Hazrat Khwaja Haji Dost Muhammad Qandhari رحمه الله',
          ur: 'حضرت خواجہ حاجی دوست محمد قندھاری رحمتہ اللہ علیہ',
          ar: 'الخواجه الحاج دوست محمد القندهاري رحمه الله',
        },
        title: {
          en: 'Founder of Dargah Musa Zai Sharif',
          ur: 'بانی خانقاہِ موسیٰ زئی شریف، قطبِ وقت',
          ar: 'مؤسس خانقاه موسى زئي شريف وقطب الزمان',
        },
        restingPlace: {
          en: 'Musa Zai Sharif, Dera Ismail Khan, KPK, Pakistan',
          ur: 'موسیٰ زئی شریف، ڈیرہ اسماعیل خان، خیبر پختونخوا، پاکستان',
          ar: 'موسى زئي شريف، خيبر بختونخوا، باكستان',
        },
        description: {
          en: 'Premier deputy of Shah Ahmed Saeed Faruqi who established the renowned spiritual bastion of Dargah Musa Zai Sharif, illuminating the frontier lands.',
          ur: 'شاہ احمد سعید مجددی کے خلیفۂ اعظم، جنہوں نے ڈیرہ اسماعیل خان میں موسیٰ زئی شریف کی بنیاد رکھ کر پورے خطے کو فیض یاب کیا۔',
          ar: 'خليفة شاه أحمد سعيد، غرس دوحة النور في موسى زئي شريف ونشر الهداية في ربوع أفغانستان وباكستان.',
        },
      },
      {
        generation: 35,
        name: {
          en: 'Hazrat Khwaja Muhammad Usman Damani رحمه الله',
          ur: 'حضرت خواجہ محمد عثمان دامانی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد عثمان الداماني رحمه الله',
        },
        title: {
          en: 'The Resplendent Pearl of Daman',
          ur: 'سجادہ نشین موسیٰ زئی شریف، برہانِ طریقت',
          ar: 'بدر الدامان وخليفة موسى زئي شريف',
        },
        restingPlace: {
          en: 'Musa Zai Sharif, Dera Ismail Khan, KPK, Pakistan',
          ur: 'موسیٰ زئی شریف، ڈیرہ اسماعیل خان، پاکستان',
          ar: 'موسى زئي شريف، باكستان',
        },
        description: {
          en: 'Beloved successor of Khwaja Dost Muhammad Qandhari whose profound spiritual absorption and discourses guided counts of scholars and seekers.',
          ur: 'خواجہ دوست محمد قندھاری کے خلیفۂ برحق جن کے باطنی تصرف اور نگاہِ کرم سے لاتعداد دل زندہ ہوئے۔',
          ar: 'العارف المربي الذي توارثت القلوب عنه سر الذكر والتوجه القلبي الخالص.',
        },
      },
      {
        generation: 36,
        name: {
          en: 'Hazrat Sayyad Laal Shah Hamdani رحمه الله',
          ur: 'حضرت سید لعل شاہ ہمدانی رحمتہ اللہ علیہ',
          ar: 'السيد لعل شاه الهمداني رحمه الله',
        },
        title: {
          en: 'The Luminous Saint of Danda Shah Bilawal',
          ur: 'پیکرِ اخلاص و محبت، قطبِ زمان',
          ar: 'القطب الرباني في دندا شاه بيلاول',
        },
        restingPlace: {
          en: 'Danda Shah Bilawal, Chakwal, Punjab, Pakistan',
          ur: 'ڈھنڈا شاہ بلاول، ضلع چکوال، پنجاب، پاکستان',
          ar: 'دندا شاه بيلاول، جكوال، البنجاب، باكستان',
        },
        description: {
          en: 'Eminent saint and master of the Damani line whose spiritual luminescence revitalized the Punjab and North-West frontier.',
          ur: 'خواجہ محمد عثمان دامانی کے جلیل القدر خلیفہ جنہوں نے پنجاب اور سرحد میں ذکرِ الٰہی کی ترویج فرمائی۔',
          ar: 'الولي الصالح والسيد الحسيني الذي نشر أنوار الطريقة في إقليم البنجاب.',
        },
      },
      {
        generation: 37,
        name: {
          en: 'Hazrat Khwaja Muhammad Sirajuddin Naqshbandi رحمه الله',
          ur: 'حضرت خواجہ محمد سراج الدین نقشبندی مجددی رحمتہ اللہ علیہ',
          ar: 'الخواجه محمد سراج الدين النقشبندي المجددي رحمه الله',
        },
        title: {
          en: 'Siraj al-Ummah (The Lamp of the Ummah)',
          ur: 'سراج الامہ، قیومِ زماں، والیِ موسیٰ زئی شریف',
          ar: 'سراج الأمة ووارث المشيخة في موسى زئي شريف',
        },
        restingPlace: {
          en: 'Musa Zai Sharif, Dera Ismail Khan, KPK, Pakistan',
          ur: 'موسیٰ زئی شریف، ڈیرہ اسماعیل خان، پاکستان',
          ar: 'موسى زئي شريف، باكستان',
        },
        description: {
          en: 'Illustrious son of Khwaja Muhammad Usman Damani whose spiritual magnetism transformed tens of thousands and whose chief deputy was Pir Fazal Ali Qureshi.',
          ur: 'خواجہ محمد عثمان دامانی کے فرزند و جانشین جن کے دستِ حق پرست پر لاکھوں سالکین نے بیعت کی اور جن کے خلیفۂ اعظم پیر فضل علی قریشی تھے۔',
          ar: 'سراج العارفين وابن الشيخ الداماني، أمد الأمة بنور الهداية وخرج كبار الأقطاب.',
        },
      },
      {
        generation: 38,
        name: {
          en: 'Hazrat Pir Muhammad Fazal Ali Shah Qureshi رحمه الله',
          ur: 'حضرت پیر محمد فضل علی شاہ قریشی رحمتہ اللہ علیہ',
          ar: 'الشيخ بير محمد فضل علي شاه القريشي رحمه الله',
        },
        title: {
          en: 'Founder of Miskeenpur Sharif',
          ur: 'بانی خانقاہِ مسکین پور شریف، مجددِ طریقت',
          ar: 'مؤسس خانقاه مسكين بور شريف ومحيي الطريقة',
        },
        restingPlace: {
          en: 'Miskeenpur Sharif, Muzaffargarh, Punjab, Pakistan',
          ur: 'مسکین پور شریف، مظفرگڑھ، پنجاب، پاکستان',
          ar: 'مسكين بور شريف، مظفركره، البنجاب، باكستان',
        },
        description: {
          en: 'Great reviver who traveled thousands of miles on foot across Punjab and Sindh, establishing Khanqahs and awakening hearts to silent Zikr.',
          ur: 'سندھ اور پنجاب میں پیدل سفر کر کے خانقاہیں قائم کیں اور سنت و ذکرِ قلبی کو زندہ فرما کر لاکھوں لوگوں کو باطنی فیض بخشا۔',
          ar: 'الداعية الكبير والمربي الصالح الذي طاف البلاد ناشراً لحلقات الذكر ومؤسساً للخانقاهات.',
        },
      },
    ],
  },
  {
    eraId: 'allahabad-sharif',
    eraTitle: {
      en: 'Dargah Allahabad Sharif (39–41)',
      ur: 'درگاہ اللہ آباد شریف (۳۹ تا ۴۱)',
      ar: 'دركاه الله آباد شريف (٣٩-٤١)',
    },
    masters: [
      {
        generation: 39,
        name: {
          en: 'Hazrat Khwaja Abdul Ghaffar Naqshbandi, alias Pir Mitha رحمه الله',
          ur: 'سید العارفین حضرت خواجہ عبد الغفار نقشبندی المعروف پیر مٹھا رحمتہ اللہ علیہ',
          ar: 'الخواجه عبد الغفار النقشبندي الشهير بـ "بير مِثّا" رحمه الله',
        },
        title: {
          en: 'The Ocean of Compassion & Spiritual Transformation',
          ur: 'پیر مٹھا، صاحبِ رحمت پور شریف، بحرِ فیض و محبت',
          ar: 'بحر المحبة والمربي العظيم في السند وبلوشستان',
        },
        restingPlace: {
          en: 'Rahmatpur Sharif, Larkana, Sindh, Pakistan',
          ur: 'رحمت پور شریف، لاڑکانہ، سندھ، پاکستان',
          ar: 'رحمت بور شريف، لاركانه، السند، باكستان',
        },
        description: {
          en: 'Revered spiritual master whose tears of compassion, humility, and nightly vigils brought hundreds of thousands of people into repentance and devotion to Sunnah.',
          ur: 'رحمت پور شریف کے وہ عظیم مرشد جن کے عشقِ الٰہی، اخلاق اور پرنور محافل نے سندھ، پنجاب اور بلوچستان میں شریعت و طریقت کا انقلاب برپا کیا۔',
          ar: 'صاحب الأخلاق النبوية والمجاهدات العظيمة، أقام مئات المساجد والمراكز الروحية.',
        },
      },
      {
        generation: 40,
        name: {
          en: 'Hazrat Khwaja Allah Bakhsh Abbasi Ghaffari, alias Sohna Saeen رحمه الله',
          ur: 'حضرت خواجہ اللہ بخش عباسی غفاری المعروف خواجہ سوہنا سائیں رحمتہ اللہ علیہ',
          ar: 'الخواجه الله بخش العباسي الغفاري الشهير بـ "سوهنا سائیں" رحمه الله',
        },
        title: {
          en: 'Founder of Jamaat Islah-ul-Muslimeen & Dargah Allahabad Sharif',
          ur: 'بانی جماعت اصلاح المسلمین و درگاہ اللہ آباد شریف، آفتابِ معرفت',
          ar: 'مؤسس جمعية إصلاح المسلمين ودركاه الله آباد شريف',
        },
        era: '1910 - 1983 CE',
        restingPlace: {
          en: 'Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan',
          ur: 'درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سندھ، پاکستان',
          ar: 'دركاه الله آباد شريف، كندياره، السند، باكستان',
        },
        description: {
          en: 'Beloved spiritual reviver (1910–1983 CE) who established Jamaat Islah-ul-Muslimeen and founded Dargah Allahabad Sharif, organizing institutional welfare, education, and heart remembrance nationwide.',
          ur: '1983ء میں جماعت اصلاح المسلمین اور درگاہ اللہ آباد شریف کے بانی، جنہوں نے امتِ مسلمہ کو مسنون اعمال، خدمتِ خلق اور ذکرِ قلبی کی بنیاد پر متحد کیا۔',
          ar: 'مؤسس جمعية إصلاح المسلمين، وباني نهضة التربية الصوفية المعاصرة على نهج الكتاب والسنة.',
        },
      },
      {
        generation: 41,
        name: {
          en: 'Hazrat Khwaja Muhammad Tahir Abbasi Bakhshi, alias Sajjan Saeen',
          ur: 'حضرت خواجہ محمد طاہر عباسی بخشی المعروف محبوب سجن سائیں مدظلہ العالی',
          ar: 'فضيلة الشيخ خواجه محمد طاهر العباسي البخشي الشهير بـ "سجن سائیں" حفظه الله',
        },
        title: {
          en: 'Current Spiritual Head of Silsila Naqshbandia Mujaddidia Tahiriya',
          ur: 'موجودہ سجادہ نشین درگاہ اللہ آباد شریف و امیر جماعت اصلاح المسلمین',
          ar: 'أمير جمعية إصلاح المسلمين وشيخ السلسلة النقشبندية الطاهرية الحالي',
        },
        era: 'Born 1963 - Present',
        restingPlace: {
          en: 'Headquarters: Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan',
          ur: 'مرکز: درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان',
          ar: 'المقر العام: دركاه الله آباد شريف، السند، باكستان',
        },
        description: {
          en: 'The present spiritual master leading millions worldwide across Pakistan, UAE, UK, and globally; pioneering modern educational institutions, free healthcare, and pristine spiritual guidance in Zikr-e-Qalbi.',
          ur: 'دورِ حاضر کے عظیم پیشوا و روحانی مرشد، جو دنیا بھر میں مساجد، مدارس، فلاحی ہسپتالوں اور ذکرِ قلبی کی مجالس کے ذریعے لاکھوں قلوب کو منور فرما رہے ہیں۔',
          ar: 'يقود النهضة العلمية والروحية والخيرية المعاصرة لجمعية إصلاح المسلمين والسلسلة الطاهرية في العالم.',
        },
      },
    ],
  },
];

export const SAYINGS_DATA: SayingItem[] = [
  {
    id: 'saying-1',
    speaker: {
      en: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)',
      ur: 'حضرت خواجہ محمد طاہر (محبوب سجن سائیں)',
      ar: 'الشيخ خواجه محمد طاهر (سجن سائیں)',
    },
    source: {
      en: 'Malfuzat-e-Tahiriya, Vol. 1',
      ur: 'ملفوظاتِ طاہریہ، جلد اول',
      ar: 'الملفوظات الطاهرية',
    },
    textArabicOrUrdu: 'شریعت کے بغیر طریقت اندھیرا ہے اور طریقت کے بغیر شریعت میں باطنی حلاوت پیدا نہیں ہوتی۔',
    urdu: 'شریعت کے بغیر طریقت اندھیرا ہے اور طریقت کے بغیر شریعت میں باطنی حلاوت اور اخلاص پیدا نہیں ہوتا۔ دونوں ایک دوسرے کے لیے ناگزیر ہیں۔',
    english: 'Tariqah without Shariah is darkness, and Shariah without Tariqah lacks inward sweetness and complete sincerity. Both are inseparable.',
    topic: {
      en: 'Harmony of Shariah and Tariqah',
      ur: 'شریعت و طریقت کی ہم آہنگی',
      ar: 'التلازم بين الشريعة والطريقة',
    },
  },
  {
    id: 'saying-2',
    speaker: {
      en: 'Hazrat Khwaja Allah Bakhsh (Sohna Saeen)',
      ur: 'حضرت خواجہ سوہنا سائیں رحمتہ اللہ علیہ',
      ar: 'الخواجه سوهنا سائیں رحمه الله',
    },
    source: {
      en: 'Khitabat-e-Sohna Saeen',
      ur: 'خطاباتِ سوہنا سائیں',
      ar: 'خطب سوهنا سائیں',
    },
    textArabicOrUrdu: 'اپنے دل کو اللہ کے ذکر کا عادی بناؤ، جب دل زندہ ہو جائے تو گناہ کی طرف رغبت خود بخود ختم ہو جاتی ہے۔',
    urdu: 'اپنے دل کو اللہ کے ذکر کا عادی بناؤ۔ جب دل ذکر سے زندہ اور روشن ہو جائے تو برائی اور گناہ کی طرف رغبت خود بخود ختم ہو جاتی ہے۔',
    english: 'Accustom your heart to the remembrance of Allah. When the heart awakens with divine light, the inclination toward sin dissipates naturally.',
    topic: {
      en: 'Awakening the Heart',
      ur: 'قلب کی بیداری اور ترکِ گناہ',
      ar: 'إحياء القلب وترك الذنوب',
    },
  },
  {
    id: 'saying-3',
    speaker: {
      en: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)',
      ur: 'حضرت خواجہ محمد طاہر (محبوب سجن سائیں)',
      ar: 'الشيخ خواجه محمد طاهر (سجن سائیں)',
    },
    source: {
      en: 'Address at Allahabad Sharif Annual Gathering',
      ur: 'خطاب درگاہ اللہ آباد شریف',
      ar: 'كلمة في دركاه الله آباد',
    },
    textArabicOrUrdu: 'سچے سالک کا نشان یہ ہے کہ وہ اپنی ذات کو سب سے ادنیٰ سمجھے اور مخلوقِ خدا کی خدمت کو اپنی سعادت جانے۔',
    urdu: 'سچے سالک اور ذاکر کا نشان یہ ہے کہ وہ اپنی ذات کو تمام دنیا سے ادنیٰ سمجھے اور مخلوقِ خدا کی خدمت کو بغیر کسی لالچ کے اپنی سعادت جانے۔',
    english: 'The true mark of a spiritual seeker is that they consider themselves the humblest among mankind and deem unconditional service to creation as their highest honor.',
    topic: {
      en: 'Humility & Service to Humanity',
      ur: 'انکساری اور خدمتِ خلق',
      ar: 'التواضع وخدمة الخلق',
    },
  },
  {
    id: 'saying-4',
    speaker: {
      en: 'Khwaja Abdul Ghaffar (Pir Mitha)',
      ur: 'حضرت خواجہ پیر مٹھا رحمتہ اللہ علیہ',
      ar: 'الخواجه بير مِثّا رحمه الله',
    },
    source: {
      en: 'Tazkira Pir Mitha',
      ur: 'تذکرۂ پیر مٹھا',
      ar: 'تذكرة بير مِثّا',
    },
    textArabicOrUrdu: 'جو وقت غفلت میں گزرا وہ نقصان میں شمار ہوا، جو وقت ذکر میں گزرا وہی زندگی کا اصل سرمایہ ہے۔',
    urdu: 'جو لمحہ غفلت میں گزرا وہ خسارے میں شمار ہوا، اور جو گھڑی اللہ کی یاد میں گزری وہی بقیہ زندگی کا اصل نفع بخش سرمایہ ہے۔',
    english: 'The moment spent in heedlessness is reckoned as loss, whereas the instant devoted to divine remembrance is the true treasure of one’s lifespan.',
    topic: {
      en: 'Valuing Time for Allah',
      ur: 'وقت کی قدر اور غفلت سے بیداری',
      ar: 'اغتنام الوقت في طاعة الله',
    },
  },
];

export interface MuraqabahStep {
  title: LocalizedString;
  description: LocalizedString;
}

export interface MuraqabahGuide {
  title: LocalizedString;
  steps: MuraqabahStep[];
}

export const MURAQABAH_GUIDE: MuraqabahGuide = {
  title: {
    en: 'Daily Method of Naqshbandi Muraqabah (Heart Contemplation)',
    ur: 'طریقۂ مراقبہ و ذکرِ قلبی (روزمرہ معمول)',
    ar: 'منهج المراقبة اليومية والذكر الخفي',
  },
  steps: [
    {
      title: { en: '1. Purity & Clean Seclusion (Taharah & Khalwah)', ur: '۱۔ طہارت و پاکیزہ خلوت', ar: '١. الطهارة والخلوة' },
      description: {
        en: 'Perform fresh Wudu, face the Qiblah in a calm and quiet space, and sit in a modest respectful posture (Tashahhud position).',
        ur: 'تازہ وضو فرما کر پرسکون و پاک جگہ پر قبلہ رو ہو کر با ادب (دوزانو یا آلتی پالتی) بیٹھ جائیں۔',
        ar: 'الوضوء الكامل واستقبال القبلة في مكان هادئ نظيف والجلوس بأدب وخشوع.',
      },
    },
    {
      title: { en: '2. Closing Eyes & Calming Breath (Istighfar & Niyyah)', ur: '۲۔ استغفار و بندشِ چشم', ar: '٢. الاستغفار وغض البصر' },
      description: {
        en: 'Close your eyes, recite Istighfar and Salawat 3 times, sincerely asking Allah to detach your heart from all worldly anxieties.',
        ur: 'آنکھیں بند کر کے تین بار استغفار اور درود شریف پڑھیں، اور دل سے دنیا کے تمام تفکرات نکال دیں۔',
        ar: 'إغماض العينين وتلاوة الاستغفار والصلاة على النبي ﷺ ثلاثاً مع تجريد القلب من شواغل الدنيا.',
      },
    },
    {
      title: { en: '3. Focusing on the Spiritual Heart (Tawajjuh ila al-Qalb)', ur: '۳۔ توجہ الیٰ القلب', ar: '٣. التوجه إلى لطيفة القلب' },
      description: {
        en: 'Direct your inner awareness two fingers below the left breast. Envision divine grace (Faiz) pouring from the Throne of Allah into your heart.',
        ur: 'اپنی باطنی توجہ کو بائیں پستان سے دو انگل نیچے دل پر مرکوز کریں اور تصور کریں کہ عرشِ الٰہی سے فیض اتر کر دل میں سما رہا ہے۔',
        ar: 'تركيز النظر الباطني تحت الثدي الأيسر بإصبعين، واستحضار نزول الفيض الإلهي من العرش إلى القلب.',
      },
    },
    {
      title: { en: '4. Silent Heartbeat Resonance (Allah, Allah)', ur: '۴۔ اسمِ ذات کی باطنی ضرب', ar: '٤. ضربات اسم الجلالة في القلب' },
      description: {
        en: 'Without moving tongue or lips, let every heartbeat echo the divine majesty: "Allah, Allah". Maintain this state with love and tranquility for 15-30 minutes.',
        ur: 'زبان کو تالو سے لگائے بغیر حرکت کیے دل کی ہر دھڑکن کے ساتھ پکاریں: "اللہ، اللہ"۔ کم از کم 15 سے 30 منٹ تک اس دوامِ ذکر میں رہیں۔',
        ar: 'بلا تحريك اللسان، تدع نبضات القلب تنطق بالاسم الأعظم: "الله، الله" بسكينة وخشوع تام لمدة ربع إلى نصف ساعة.',
      },
    },
  ],
};

export interface MasterWithEra extends ShijraNode {
  eraId: string;
  eraTitle: LocalizedString;
}

export const GOLDEN_CHAIN_MASTERS: MasterWithEra[] = GOLDEN_CHAIN_ERAS.flatMap((era) =>
  era.masters.map((master) => ({
    ...master,
    eraId: era.eraId,
    eraTitle: era.eraTitle,
  }))
);

