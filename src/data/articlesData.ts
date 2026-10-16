export interface ArticleSection {
  heading?: string;
  subheading?: string;
  arabicText?: string;
  urduText?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  reference?: string;
}

export interface OfficialArticle {
  id: string;
  slug: string;
  title: string;
  titleUrdu: string;
  titleArabic: string;
  subtitle?: string;
  author: string;
  authorUrdu?: string;
  authorArabic?: string;
  translator: string;
  language: string;
  format: string;
  pageCount: number;
  category: string;
  categoryUrdu: string;
  categoryArabic: string;
  description: string;
  descriptionUrdu: string;
  descriptionArabic: string;
  fileName: string;
  pdfUrl: string;
  coverImage: string;
  originalSourceOrBook?: string;
  copyright?: string;
  availableActions: Array<'read_pdf' | 'download_pdf'>;
  hasPdfFile: boolean;
  sections: ArticleSection[];
  searchKeywords: string[];
}

export const OFFICIAL_ARTICLES: OfficialArticle[] = [
  {
    id: 'article-brief-practices',
    slug: 'brief-daily-practices-in-tariqa-aliya-naqshbandia',
    title: 'Brief (daily) Practices in Tariqa Aliya Naqshbandia',
    titleUrdu: 'طریقہ عالیہ نقشبندیہ میں یومیہ مختصر معمولات',
    titleArabic: 'الأوراد اليومية الموجزة في الطريقة العلية النقشبندية',
    subtitle: 'Jalwah Gaahe Doost',
    originalSourceOrBook: 'Excerpt from Jalwah Gaahe Doost (جلوہ گاہِ دوست)',
    author: 'Hadhrat Khawja Muhammad Tahir Bakhshi Naqshbandi',
    authorUrdu: 'حضرت خواجہ محمد طاہر بخشی نقشبندی مدظلہ العالی',
    authorArabic: 'حضرة خواجه محمد طاهر بخشي نقشبندي',
    translator: 'Not specified',
    language: 'English',
    format: 'PDF',
    pageCount: 2,
    category: 'Tariqa Practices',
    categoryUrdu: 'معمولاتِ طریقت',
    categoryArabic: 'أوراد الطريقة',
    description:
      'Official daily spiritual practices prescribed in Tariqa Aliya Naqshbandia Mujaddidiya Fadalia Ghaffariya Bakhshiya, excerpted from the revered text Jalwah Gaahe Doost. Covers daily Quran recitation, Kalimah Tayibah, Durood Shareef, Astaghfaar, Tasbeeh Subhan Allah, Tahajjud prayers, recitation of Silsila Aaliyah (Shajrah Shareef / Munajat), bedtime Quranic chapters (Surah Fatiha, initial verses of Baqarah, Ayatul Kursi, Aamanur Rasool, Four Qul chapters), Sunnah sleeping and waking supplications, and special Ramadan worship.',
    descriptionUrdu:
      'کتاب جلوہ گاہِ دوست سے ماخوذ طریقہ عالیہ نقشبندیہ مجددیہ فضلیہ غفاریہ بخشیہ کے یومیہ مسنون معمولات، تلاوتِ قرآن، کلمہ طیبہ، درود شریف، استغفار، صلوٰۃ التہجد، شجرہ عالیہ، اور مسنون دعائیں مع رمضان المبارک کی عبادات۔',
    descriptionArabic:
      'أوراد وأذكار يومية مباركة في الطريقة العلية النقشبندية المجددية من كتاب "جلوة كاه دوست"، تشمل تلاوة القرآن، الكلمة الطيبة، الاستغفار، صلاة التهجد، أذكار النوم وسنن الاستيقاظ.',
    fileName: 'en_Brief_Daily Practices.pdf',
    pdfUrl: '/assets/articles/en_Brief_Daily%20Practices.pdf',
    coverImage: '/assets/articles/covers/en_Brief_Daily_Practices.jpg',
    copyright: 'Jamaat Islah-ul-Muslimeen',
    availableActions: ['read_pdf', 'download_pdf'],
    hasPdfFile: true,
    searchKeywords: [
      'daily practices',
      'tariqa aliya naqshbandia',
      'jalwah gaahe doost',
      'jalwa gah-e-dost',
      'khawja muhammad tahir bakhshi',
      'kalimah tayibah',
      'durood shareef',
      'astaghfaar',
      'tasbeeh',
      'tahajjud',
      'silsila aaliyah',
      'shajrah shareef',
      'four qul',
      'sunnah dua',
      'ramadhan',
      'معمولات',
      'طریقہ عالیہ',
      'نقشبندیہ',
      'جلوہ گاہ دوست',
      'تہجد',
      'استغفار',
      'شجرہ شریف',
      'طریقت',
    ],
    sections: [
      {
        heading: 'Recitation of Quran',
        paragraphs: [
          'Quran recitation should be performed everyday, one part or more. Better to make a habit of at least half a part and without any reason it should not be left.',
        ],
      },
      {
        heading: 'Kalimah Tayibah',
        arabicText: 'لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
        paragraphs: [
          'Recite Kalima Tayibah as much as possible, it is not necessary to recite with a loud voice as long you can hear or the person sitting next to you can hear.',
          'Recite LA ILAHA ILLALLAH 99 times, and then recite complete Kalimah Shareef once: LA ILAHA ILLALLAH MUHAMMADUR RASOOL ALLAH SALLALLAH ALAIHAI WASALLAM.',
          'It is necessary to recite at least two tasbeehs (100 × 2 = 200 times) everyday.',
        ],
      },
      {
        heading: 'Durood Shareef & Astaghfaar',
        arabicText: 'أَسْتَغْفِرُ اللَّهَ تَعَالَى رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ',
        paragraphs: [
          'Durood Shareef: As much as possible but recite at least two tasbeehs everyday and increase recitation on Fridays.',
          'Astaghfaar: Two tasbeehs should be recited everyday: "Astaghfirullah Ta’ala Rabbi min kulli zambinw wa atoobu ilayh".',
        ],
      },
      {
        heading: 'Tasbeeh & Night Prayer (Tahajjud)',
        arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ',
        paragraphs: [
          'Two tasbeeh Subhan Allah: "Subhan Allahi wa bihamdihi Subhan Allahil Azeem wa bihamdihi".',
          'Night Prayer (Tahajjud): After half of the night has passed, when one wakes up, read 8 to 12 rakah (units), depending upon one’s strength.',
        ],
      },
      {
        heading: 'Silsila Aaliyah (Shajrah Shareef)',
        paragraphs: [
          'Silsila Aaliyah (shajrah shareef) Naqshbandia Mujadidiya Fadalia Ghaffariya Bakhshiya and prayers (munajat) should be recited before sleeping or at the time of Tahajjud prayer. It should be read in Arabic, Urdu or Sindhi, whichever language is easier for one.',
          'Along with the above, before sleeping at night the following should also be recited:',
        ],
        bulletPoints: [
          'Surah Fatiha (chapter 1)',
          'Initial verses of Surah Baqarah (chapter 2) from verse Alif Laam Meem to Muflihoon',
          'Ayatul Kursi up to Khalidoon (also from Surah Baqarah)',
          'Last verses of Surah Baqarah from Aamanur Rasool up to the end of chapter',
          'Four Qul chapters: Qul ya ayyuhal kaafiroon, Qul huwallahu ahad, Qul aoozu bi rabbil falaq, Qul aoozu bi rabbin naas (recite Bismillah with each one)',
          'Recite Durood Shareef 11 times, blow on your hands, run hands over your body, and blow on family members especially children.',
        ],
      },
      {
        heading: 'Sunnah Bedtime & Awakening Duas & Ramadan Observance',
        paragraphs: [
          'Recite sunnah bedtime dua before sleeping: "Bismika Allahumma amootu wa ahya".',
          'Recite awakening dua on rising: "Alhamdulillahilladhi ahyana ba’da ma amatana wa ilayhin-nushoor".',
          'During the blessed month of Ramadhan: Kalimah Tayyibah and recitation of Quran should be performed with abundance. Salat-ul-Tasbeeh should be offered as much as possible with the prescribed Tasbih: "Subhaan Allahi Wal Hamdulillahi Wa Laa ilaha illal Laahu Wallahu Akbar".',
        ],
      },
    ],
  },
  {
    id: 'article-halqa-zikr',
    slug: 'halqa-e-zikr-or-muraqaba-or-meditation',
    title: 'Halqa-e-Zikr or Muraqaba or Meditation',
    titleUrdu: 'حلقہ ذکر یا مراقبہ (مسنون طریقہ اور فضائل)',
    titleArabic: 'حلقة الذكر والمراقبة والتأمل القلبي',
    subtitle: 'Excerpts from the Biography of Hadrat Sohna Saeen (RA) “Seerat-e-Wali Kamil”',
    originalSourceOrBook: 'Excerpts from the Biography of Hadrat Sohna Saeen (RA) “Seerat-e-Wali Kamil” (Vol 1, 1st Edition)',
    author: 'Maulana Habib-ur-Rahman Gabool',
    authorUrdu: 'مولانا حبیب الرحمن گبول',
    authorArabic: 'مولانا حبيب الرحمن كبول',
    translator: 'Not specified',
    language: 'English',
    format: 'PDF',
    pageCount: 4,
    category: 'Muraqaba & Meditation',
    categoryUrdu: 'مراقبہ و ذکر',
    categoryArabic: 'المراقبة والذكر',
    description:
      'Excerpts from the biography of Hadrat Sohna Saeen (RA) "Seerat-e-Wali Kamil" (Vol 1, 1st Edition) by Maulana Habib-ur-Rahman Gabool on the spiritual foundations and practice of Halqa-e-Zikr and Muraqaba in Tareeqa-e-Aaliya Naqshbandia. Details the linguistic and spiritual meaning of Muraqaba, the essence of silent heart remembrance (Zikr-e-Qalbi), historical use of the large-bead chaplet from Hadrat Haji Dost Muhammad Qandahari (RA) and Murshidina Hadhrat Fazal Ali Qureshi (RA), Hazoor Sohna Saeen’s daily Fajr routine, and precise instructions for both group and individual meditation.',
    descriptionUrdu:
      'سیرتِ ولی کامل سے ماخوذ حضرت سوہنا سائیں نور اللہ مرقدہ کی تعلیمات پر مبنی حلقہ ذکر اور مراقبہ کی حقیقت، تاریخی پس منظر، بڑے دانوں والی تسبیح کا معمول، اور طریقہ عالیہ نقشبندیہ میں اجتماعی و انفرادی مراقبہ کا جامع و باضابطہ طریقہ کار۔',
    descriptionArabic:
      'مقتطفات من كتاب "سيرة ولي كامل" لمولانا حبيب الرحمن كبول، يبين المعنى اللغوي والروحي للمراقبة وحلقات الذكر في الطريقة النقشبندية وأسلوب المراقبة الجماعية والفردية.',
    fileName: 'en_Muraqaba_or_Meditation.pdf',
    pdfUrl: '/assets/articles/en_Muraqaba_or_Meditation.pdf',
    coverImage: '/assets/articles/covers/en_Muraqaba_or_Meditation.jpg',
    copyright: 'Jamaat Islah-ul-Muslimeen',
    availableActions: ['read_pdf', 'download_pdf'],
    hasPdfFile: true,
    searchKeywords: [
      'halqa-e-zikr',
      'muraqaba',
      'meditation',
      'sohna saeen',
      'seerat-e-wali kamil',
      'habib-ur-rahman gabool',
      'zikr-e-qalbi',
      'tareeqa aaliya naqshbandi',
      'haji dost muhammad qandahari',
      'fazal ali qureshi',
      'group meditation',
      'chaplet',
      'thak thak',
      'fajr',
      'مراقبہ',
      'حلقہ ذکر',
      'سوہنا سائیں',
      'سیرت ولی کامل',
      'ذکر قلبی',
      'نقشبندیہ',
    ],
    sections: [
      {
        heading: 'Linguistic & Spiritual Meaning of Muraqaba',
        paragraphs: [
          'Hadhrat Rasool-e-Maqbool (Peace be upon him) said: "When you pass near the gardens of the Jannah, sate your hunger completely."',
          'Linguistic meaning of Halqa is a round circle and Muraqaba means to bow your head and wait. According to the Sufis, to sit in a circle and wait for the blessings (Faizan-e-Ilahi) of Allah.',
        ],
      },
      {
        heading: 'The Essence of Muraqaba',
        paragraphs: [
          'During different times, the Mujaddideen (innovators in din without changing the rules of the Shariah) brought about new and innovative ideas to keep the remembrance of Allah. Therefore, some perform "Zikr biljahar" (Zikr in loud voices) and some performed Zikr quietly or in one’s heart. All of these methods are used to reach Allah and these methods are based according to the acquiescence of Allah.',
          'Our scholars of Tareeqa-e-Aaliya Naqshbandia favored the method of Zikr-e-Qalbi (remembering Allah in one’s heart). Thanks to Allah Almighty, this method is becoming popular day by day.',
        ],
      },
      {
        heading: 'Historical Origin of the Large-Bead Chaplet',
        paragraphs: [
          'For a long time the followers would sit quietly in a circle and concentrate on performing Zikr. But as time has passed, due to worldly matters, worries and problems, the mind is subject to more worldly thoughts. It was difficult to concentrate towards Allah while sitting quietly in a circle for new and old followers due to the influence and pressure of worldly worries.',
          'In order to acquire complete concentration towards Zikr, some scholars of Tareeqa-e-Aaliya Naqshbadiya started the recitation of the Holy Quran, verses of hamd (praise of Allah), verses of naat-e-rasool (SW) or verses of Manqabat during muraqaba in group. Along with it, a chaplet of big size beads was taken to generate the sound "Thak Thak Thak" meaning the heart beat of Allah, Allah Allah and with it creating complete concentration.',
          'It has been almost 100 years since the big sized beads chaplets are being used. Hazoor Sohna Saeen (RA) used to take the name of Hadrat Haji Dost Muhammad Qandahari Quds sara (RA) for the use of the chaplet with big beads. He also used to say that Hadrat Syed Muhammad Baqadar Shah and Peer Sahab Pagara (RA) also possessed such a chaplet which is with the family even today as a sacred relic. (Speech on 5th Safar 1403 Hijri).',
          'Murshidina Hadhrat Fazal Ali Qureshi had so much associated with it that he would put it around his neck most of the time.',
        ],
      },
      {
        heading: 'Hazoor Sohna Saeen’s Daily Gathering Routine',
        paragraphs: [
          'Hazoor Sohna Saeen (RA) had a lot of interest in the Halqa and Muraqaba. In the morning after the Fajr prayers, the Jamaat would sit in a circle to perform zikr-e-Allah. They would do maswaaq, recite Durood 100 times, then recite Quranic verse 500 times for Isaal-e-Sawab of Hadrat Peer Mitha (RA).',
          'After that all Fuqra would recite Durood 100 times again, then once Surah Fateha, 11 times Surah Ikhlaas and 11 times Surah Quresh would be recited by everyone. At the end everyone would pray to Allah to transfer the reward to Hazrat Muhammad (pbuh), Anbiya Karaam, Sahabah and Ahl-e-Bait (RA), and all beloved to Allah. After that, everyone would cover their faces, close their eyes and wait for the blessing of Allah to come into their hearts for 15 to 30 minutes of meditation.',
        ],
      },
      {
        heading: 'Method of Group & Individual Meditation',
        paragraphs: [
          '1. Meditation in Group:',
          '• Sit in a circle (Halqa)',
          '• Cover your face with some cloth',
          '• Remove all thoughts from your mind',
          '• Using a chaplet of big beads, generate the sound of "Thak Thak Thak". This should only be taken as the sound of heart beat.',
          '• Stick your tongue to the top of your mouth and recite Allah Allah Allah in your heart as if your heart is beating Allah Allah Allah.',
          '• The only thoughts in your mind should be of Allah, and acquiring the blessings of Allah through the heart of Hazrat Muhammad (pbuh) coming through the hearts of all beloved to Allah.',
          '',
          '2. Meditation in Individual:',
          '• Cover your face with some cloth',
          '• Remove all thoughts from your mind',
          '• Stick your tongue to the top of your mouth and recite Allah Allah Allah in your heart as if your heart is beating Allah Allah Allah.',
          'With practice, one can reach such a position that one’s heart is beating Allah Allah Allah all the time, in office, school, sleeping, or working.',
        ],
      },
    ],
  },
  {
    id: 'article-remembering-allah',
    slug: 'remembering-allah-the-only-god',
    title: 'Remembering Allah (The only God)',
    titleUrdu: 'ذکرِ الٰہی اور ذکرِ قلبی کی حقیقت و فضیلت',
    titleArabic: 'ذكر الله تعالى وحقيقة الذكر القلبي الخفي',
    subtitle: 'An Excerpt from Jalwa Gah-e-Dost (Pages 38-42, 2nd Edition)',
    originalSourceOrBook: 'An Excerpt from جلوہ گاہِ دوست (Pages 38-42, 2nd Edition)',
    author: 'Hazrat Muhammad Tahir Naqshbandi',
    authorUrdu: 'حضرت محمد طاہر نقشبندی دامت برکاتہم العالیہ',
    authorArabic: 'حضرة محمد طاهر نقشبندي',
    translator: 'Not specified',
    language: 'English',
    format: 'PDF',
    pageCount: 4,
    category: 'Remembrance of Allah',
    categoryUrdu: 'ذکرِ الٰہی',
    categoryArabic: 'ذكر الله',
    description:
      'An excerpt from "Jalwa Gah-e-Dost" (Pages 38-42, 2nd Edition) by Hazrat Muhammad Tahir Naqshbandi expounding the methodology of silent heart remembrance (Zikr-e-Qalbi). Cites Quranic verse Surah An-Noor (24:37), instructions of Hazrat Khawja Ahmad Saeed Naqshbandi and Hazrat Imam Rabbani Mujaddid Alf-e-Thani (Letter 190, Vol 1), and authentic prophetic Hadith narrated by Abu’d-Darda and Hazrat Ayesha documented in Mirqat al-Mafatih demonstrating that hidden remembrance in the heart (Zikr-e-Khaffi) is seventy times superior to verbal recitation.',
    descriptionUrdu:
      'کتاب جلوہ گاہِ دوست کے صفحات ۳۸ تا ۴۲ سے ماخوذ حضرت محبوبِ سجن سائیں مدظلہ العالی کا علمی و روحانی مقالہ جس میں ذکرِ قلبی کا طریقہ، امام ربانی مجدد الف ثانی کے مکتوبات، اور ملا علی قاری کے حوالے سے اخفاء ذکر کی ۷۰ گنا زیادہ فضیلت واضح کی گئی ہے۔',
    descriptionArabic:
      'بحث روحي مستل من كتاب "جلوة كاه دوست" يبين فضل الذكر القلبي وطريقته في الصدر بلا حركة اللسان، مستشهداً بنصوص القرآن ووصايا الإمام المجدد ألف ثاني وحديث فضل الذكر الخفي بسبعين ضعفاً.',
    fileName: 'en_Remembering_Allah.pdf',
    pdfUrl: '/assets/articles/en_Remembering_Allah.pdf',
    coverImage: '/assets/articles/covers/en_Remembering_Allah.jpg',
    copyright: 'Jamaat Islah-ul-Muslimeen',
    availableActions: ['read_pdf', 'download_pdf'],
    hasPdfFile: true,
    searchKeywords: [
      'remembering allah',
      'the only god',
      'jalwa gah-e-dost',
      'zikr e qalbi',
      'muhammad tahir naqshbandi',
      'heart remembrance',
      'surah an-noor 24:37',
      'ahmad saeed naqshbandi',
      'imam rabbani',
      'mujaddad',
      'mulla ali qari',
      'mishkat ul masabih',
      'jihad-e-akbar',
      'zikr-e-khaffi',
      '70 times',
      'kiram an-katibin',
      'ذکر الہی',
      'ذکر قلبی',
      'جلوہ گاہ دوست',
      'مجدد الف ثانی',
      'ملا علی قاری',
      'خفی ذکر',
    ],
    sections: [
      {
        heading: 'Method of Remembering Allah in the Heart',
        paragraphs: [
          'Human beings have the heart on the upper left side of the chest; personal name of God, "Allah" should be remembered in this heart. When we feel thirsty, we find ourselves focused towards quenching our thirst, however we do not repeat and say "water", "water" with our tongue, but our attention remains towards water!',
          'Just as a thirsty person has all attention towards water, our heart should also focus in the same way towards the name of Allah and repeat the name, "Allah", "Allah". While doing this one should remain silent, without any movement of the tongue, rather it should rest at the palate (upper part inside the mouth).',
          'This method should be adopted all the time. There is no condition of being in the state of ablution, neither the cleanliness of body nor dress is required; one does not need to be alone; does not matter if you are busy in daily chores all day long, 24 hours; busy in your business, traveling or resting, while in the markets or at home just make sure that this thing is in your heart that it (heart) is repeating the name "Allah", "Allah".',
        ],
      },
      {
        heading: 'Quranic Foundation (Surah An-Noor 24:37)',
        arabicText: 'رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ عَن ذِكْرِ اللَّهِ وَإِقَامِ الصَّلَاةِ وَإِيتَاءِ الزَّكَاةِ ۙ يَخَافُونَ يَوْمًا تَتَقَلَّبُ فِيهِ الْقُلُوبُ وَالْأَبْصَارُ',
        paragraphs: [
          '"By men whom neither traffic nor merchandise can divert from the Remembrance of Allah, nor from regular Prayer, nor from the practice of regular Charity: Their (only) fear is for the Day when hearts and eyes will be transformed (in a world wholly new)."(Surah An-Noor [24:37])',
        ],
      },
      {
        heading: 'Guidance from Khawja Ahmad Saeed Naqshbandi & Imam Rabbani',
        paragraphs: [
          'Hazrat Khawja Ahmad Saeed Naqshbandi quds saarahu writes that the remembrance of personal name of Allah Almighty "Allah" should be done in following way:',
          '• Disciple or spiritual student should rest the tongue at palate and completely free the heart from all thoughts.',
          '• Next consider the Spiritual guide or Sheikh, from whom he learnt this method of remembrance, in front of oneself.',
          '• Repeat the name "Allah", "Allah" with tongue of one’s heart i.e. keep attention towards the meaning of the word "Allah" in the heart.',
          '• Next concentrate that I believe in my Lord, "Allah" Almighty, Who has all the best characteristics and is free of all lower characteristics.',
          '',
          'Hazrat Imam Rabbani Mujaddid Alf-e-Thani quds saara hu says in Letter 190 (Volume 1, Part 3):',
          '"In the start of spiritual journey, student has no other way except remembering Allah. He should be attentive towards his heart that this piece of flesh is like a resting place for the real heart. Pass the blessed highest name of Allah through the same heart and while doing this do not intentionally move any other body part rather be fully attentive to your heart, not towards its shape; absorb and observe the meaning of blessed and highest name Allah by believing in its uniqueness and singularity."',
        ],
      },
      {
        heading: 'Virtues of Silent Remembrance (Seventy Times Superior)',
        paragraphs: [
          'Hadhrat Mulla Ali Qari Rahmatullah Alleyhey quotes Abu’d-Darda reported that the Messenger of Allah (may peace be upon him) said: "Shall I inform you of the best of your actions and the purest of your property and the highest of your degrees and what is better for you than spending gold and silver and better for you than encountering the enemy and striking their necks and their striking your necks?" They said, "Yes, indeed!" He said, "Remembrance of Allah Almighty." (Mishkat ul Masabih Page 198, Ahmad, Tirmidhi, Ibn Majah).',
          'Commenting on this, Mulla Ali Qari writes: "This remembrance means remembrance in one’s heart. This is the same remembrance which has greater virtues than sacrificing lives and wealth. Because this is a veiled and hidden action of heart which is harder to perform by the self (nafs). This is the greater struggle (Jihad-e-Akbar)!" (Mirqat al-Mafatih, Page 22 Volume 3).',
          '',
          'In Mirqat al-Mafatih (Vol 1, Page 342), Hazrat Ayesha (RA) narrates that the Messenger of Allah (pbuh) said:',
          '"The zikr which cannot be known to the Kiram an-Katibin, is seventy times superior to other types of zikr that they can listen (i.e. verbal). On the Day of Judgment, when angels present records, Allah will say: I have one good deed that these angels do not recognize and I Will Give you reward for this, and this good deed is the secret (hidden) remembrance (zikr-e-khaffi)."',
        ],
      },
    ],
  },
  {
    id: 'article-what-is-tasawwuf',
    slug: 'what-is-tasawwuf',
    title: 'What is Tasawwuf?',
    titleUrdu: 'تصوف کیا ہے؟ (تعریف، تاریخ، اور شبہات کا تحقیقی جواب)',
    titleArabic: 'ما هو التصوف الإسلامي؟ الحقيقة والتاريخ ورد الشبهات',
    subtitle: 'A Scholarly Exposition by Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi',
    originalSourceOrBook: 'Official Treatise published by Idarat-ul-Maarfat, Dargah Allahabad Sharif Kandyaro',
    author: 'Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi Mujaddadi Mudzila A’ali',
    authorUrdu: 'حضرت شیخ المشائخ خواجہ محمد طاہر عباسی نقشبندی مجددی مدظلہ العالی',
    authorArabic: 'حضرة شيخ المشايخ خواجه محمد طاهر عباسي نقشبندي مجددي',
    translator: 'Not specified (English translation published by Idarat-ul-Maarfat)',
    language: 'English',
    format: 'PDF',
    pageCount: 9,
    category: 'Tasawwuf & Shariah',
    categoryUrdu: 'شریعت و تصوف',
    categoryArabic: 'الشريعة والتصوف',
    description:
      'An authoritative scholarly treatise by Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqshbandi defining the reality of Tasawwuf as pure Shariah and inner purification. Synthesizes classical definitions by Sheikh ul Islam Zakarya Al-Ansari, Abul Hassan Nori, Abu Ali Qazwini, Abu Muhammad Jareri, and Katanee; definitions of the Sufi citing Sheikh Abu Ali Rodbari, Abdul Qadir Jilani, Shibli, Dhul-Nun al-Misri, and Imam Ghazali (Al-Munqidh min al-Dalal); explores etymology and historical milestones from Basra to the classical era; and delivers scholarly refutations to seven major contemporary doubts regarding Sufism.',
    descriptionUrdu:
      'حضرت شیخ المشائخ سجادہ نشین درگاہ اللہ آباد شریف کا معرکہ آرا تحقیقی مقالہ جس میں تصوف اور صوفی کی جامع تعریف، ائمہ سلف کے اقوال، امام غزالی کا مؤقف، لفظ صوفی کا تاریخی ارتقاء، اور تصوف پر وارد ہونے والے سات بنیادی اعتراضات و شبہات کے مسکت و مدلل جوابات دیئے گئے ہیں۔',
    descriptionArabic:
      'رسالة علمية أصيلة لشيخ المشايخ خواجه محمد طاهر عباسي نقشبندي، تبين حقيقة التصوف السني كجوهر للشريعة، مع استعراض تاريخي مفصل ورد منهجي محكم على الشبهات المعاصرة.',
    fileName: 'en_What_Is_Tasawwuf.pdf',
    pdfUrl: '/assets/articles/en_What_Is_Tasawwuf.pdf',
    coverImage: '/assets/articles/covers/en_What_Is_Tasawwuf.jpg',
    copyright: 'Idarat-ul-Maarfat, Dargah Allahabad Sharif Kandyaro',
    availableActions: ['read_pdf', 'download_pdf'],
    hasPdfFile: true,
    searchKeywords: [
      'what is tasawwuf',
      'tasawwuf',
      'sufism',
      'tahir abbasi naqshbandi',
      'idarat-ul-maarfat',
      'dargah allahabad sharif',
      'definition of tasawwuf',
      'definition of sufi',
      'imam ghazali',
      'al-munqidh min al-dalal',
      'zakarya alansari',
      'abul hassan nori',
      'abdul qadir jilani',
      'shariat tareeqat haqiqat maarfat',
      'doubts about tasawwuf',
      'surat al-ala',
      'surat ash-shams',
      'تصوف',
      'صوفی',
      'شریعت',
      'طریقت',
      'حقیقت',
      'معرفت',
      'امام غزالی',
      'عبد القادر جیلانی',
    ],
    sections: [
      {
        heading: 'Definition of Tasawwuf',
        paragraphs: [
          'Tasawwuf has been defined by different Muslim scholars as follows:',
          '• According to Sharah Sheikh ul Islam Abi Yahya Zakarya Alansari: "Tasawwuf is the knowledge of those feelings with which one controls the will, purifies moral values, and develops the external and internal self, so that the man can get eternal benefit."',
          '• According to Hazrat Abul Hassan Nori: "Tasawwuf is the name of depleting all inner wishes."',
          '• According to Hazrat Abu Ali Qazwini: "Tasawwuf is the name of acquiring best moral values."',
          '• According to Abu Muhammad Jareri: "Tasawwuf is name of implementing all praiseworthy values and getting rid of all meanness and baseness values."',
          '• According to Hazrat Katanee: "Tasawwuf is the name of good moral values, so those who have better moral values than you will be ahead of you in purity."',
          '',
          'The above definitions show that implementing higher moral values and getting rid of all immoral values, especially correcting the inner self along with the exterior and building a connection with Allah, giving preference to life hereafter over this world and for everything in life getting the will of Allah and accepting the will of Allah is the name of Tasawwuf.',
          'Acquiring these qualities is also known as Zuhud (devotion, abstinence), Salook (conduct), and Ehsan (beneficence).',
        ],
      },
      {
        heading: 'Definition of Sufi & Testimony of Imam Ghazali',
        paragraphs: [
          'Those who practice Tasawwuf are called Sufi:',
          '• Hazrat Sheikh Abu Ali Rodbari: "Sufi is that who along with purifying the heart is also simple looking and shows abstinence to his inner will/wishes and keeps hold of the Shariat-e-Mustafa and thinks this world unimportant."',
          '• Hazrat Syedina Sheikh Abdul Qadir Jilani: "Because of peaceful body, satisfied heart, glowing face, generous heart, inner soul alive and connection with Allah, a Sufi does not care about this world."',
          '• Hazrat Sheikh Shibli: "Sufi is independent of all creatures and is attached to Allah."',
          '• Hazrat Zawalnoon Misri: "Sufis are those who prefer Allah’s will upon all other things."',
          '',
          'Hazrat Imam Ghazali in "Al Munqadh Min Alzalal" conveys:',
          '"Sufi’s method is complete with both knowledge and its implementation and their essence of knowledge is that the inner will should be clear of all evil and immoral values so that the heart is purified of everything that takes away from Allah and the heart beautifies with the remembrance of Allah."',
          '"I have come to know with complete proof that Sufis will be the ones who walk on the path to Allah... their act whether visible or invisible is taken from the nur (luminosity) of naboowat and there is no other light in the entire universe that can give light of nur."',
        ],
      },
      {
        heading: 'Reason for Naming & Etymology of Sufi',
        paragraphs: [
          '1. Sufi is derived from Safa (pure) and Safa means purity of the heart. Sufi is called a Sufi because his heart is clean from the internal infirmity.',
          '2. Sufi is derived from Saf and Saf means the first top purity. Since Sufis are the nearest/closest to Allah that is why they are called Sufi.',
          '3. Sufi is derived from Safah (platform in the Holy Prophet’s mosque). Ehl-e-Safah were companions who dedicated their lives to the court of Rasool Allah (peace be upon him). Since Sufis live like Ashab-e-Safah, they are called Sufi.',
          'According to Allama Ibn-e-Taimia, this third reason is the most logical etymological origin.',
        ],
      },
      {
        heading: 'Brief History of Tasawwuf Literature',
        paragraphs: [
          'Tasawwuf is true Islam. In the beginning it was known as Zuhud, Sulook, and Ehsan. As Hazrat Ali Hajweri noted: "In the past tasawwuf was a reality without a name; today it has become a name without reality."',
          'The word Sufi was first used in Basra for associates of Hazrat Khwaja Hasan al-Basri due to their intense worship and piety.',
          '• 243 Hijri: Hazrat Haris Muhasibi organized educational works in "Al-Ri’aya".',
          '• 297 Hijri: Imam of the Sufis Hazrat Junaid Baghdadi codified tasawwuf according to the Sunnah.',
          '• 4th Century: Abu Nasr Sarraj Tusi wrote "Kitab al-Luma", Abu Bakr Kalabadhi wrote "At-Ta’arruf", and Abu Talib Makki wrote "Qut al-Qulub".',
          '• 5th Century: Abu Nu’aym Isfahani wrote "Hilyat al-Awliya", Allama Qushayri wrote "Al-Risala al-Qushayriyya", and Hazrat Ali Hajweri wrote "Kashf al-Mahjub".',
          '• End of 5th Century: Imam Ghazali authored "Ihya Ulum al-Din" and "Al-Munqidh".',
          '• 6th Century onwards: Hazrat Sheikh Abdul Qadir Jilani, Imam Rabbani Mujaddid Alf-e-Thani, Sheikh Shahabuddin Suhrawardi, and Khwaja Moinuddin Chishti Ajmeri.',
        ],
      },
      {
        heading: 'Answers to Doubts About Tasawwuf',
        paragraphs: [
          'Question 1: There was no word "tasawwuf" in the time of the Prophet ﷺ; does that mean it has nothing to do with Islam?',
          'Answer: The terms Ilm-ul-Sarf, Ilm-ul-Nahw, Usul al-Fiqh, and Usul al-Hadith also did not exist as formal terms in the prophetic era. Yet no one rejects grammar or hadith sciences. Tasawwuf is the Quranic science of Tazkiyah (inner purification), commanded in Surah Al-A’la (87:14) and Surah Ash-Shams (91:9-10).',
          '',
          'Question 2: Tasawwuf divides knowledge into external and internal. Is this valid?',
          'Answer: External knowledge deals with outward bodily actions, while internal knowledge deals with the states of the heart. The Quran strictly forbids inward sins such as hypocrisy (nifaq), jealousy (hasad), and pride (kibr). For example, facing the Kaaba is an outward rule of prayer, while performing prayer with complete sincerity (ikhlas) free of hypocrisy is an inward commandment.',
          '',
          'Question 3: Sufis use terms like Shariat, Tareeqat, Haqiqat, and Ma’rifat. Is Shariat not everything?',
          'Answer: These are dimensions of one reality. As Imam Rabbani Mujaddid Alf-e-Thani stated: "Shariah has three elements: 1. Knowledge, 2. Practice, 3. Sincerity. Tareeqat and Haqiqat are the servants of Shariat. Their motive is the true execution of Shariat."',
          '',
          'Questions 4-6: Refutations regarding Greek origins, misconduct by false claimants, and monasticism:',
          '• The word Sufi is purely Arabic, rooted in Safa and Ashab-e-Suffah; Greek contains no such word.',
          '• The wrong actions of individual pretenders do not invalidate true Tasawwuf, just as crimes of individuals do not invalidate Islam.',
          '• Sufism is not monasticism (priesthood). While priesthood abandons society and human relations, Tasawwuf commands fulfilling both Huquq Allah and Huquq al-Ibad.',
          '',
          'Question 7: What is the benefit of Tasawwuf in the modern materialistic age?',
          'Answer: Modern progress without spiritual balance leads to greed, pride, corruption, and discord. Tasawwuf cures the disease of the ego, eliminates greed, hypocrisy, and hatred, and builds moral discipline, social brotherhood, and internal peace for humanity.',
        ],
      },
    ],
  },
];

/**
 * Resolves the authentic local PDF path for an article by its filename.
 */
export function getLocalArticlePdfPath(fileName: string): string | null {
  if (!fileName) return null;
  const normalized = fileName.trim().toLowerCase();
  const article = OFFICIAL_ARTICLES.find(
    (a) =>
      a.fileName.toLowerCase() === normalized ||
      a.fileName.replace(/%20/g, ' ').toLowerCase() === normalized ||
      decodeURIComponent(a.fileName).toLowerCase() === normalized
  );
  return article ? article.pdfUrl : null;
}
