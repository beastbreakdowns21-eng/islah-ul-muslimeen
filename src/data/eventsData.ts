import { EventItem, LocalizedString } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'urs-mubarak-annual',
    title: {
      en: 'Salana Urs Mubarak: Hazrat Khwaja Sohna Saeen (R.A)',
      ur: 'سالانہ عرس مبارک: سید العارفین حضرت خواجہ سوہنا سائیں نور اللہ مرقدہ',
      ar: 'العرس السنوي المبارك: الشيخ الخواجه سوهنا سائیں رحمه الله',
    },
    location: {
      en: 'Dargah Allahabad Sharif, Kandiaro, District Naushahro Feroze, Sindh, Pakistan',
      ur: 'درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سندھ، پاکستان',
      ar: 'دركاه الله آباد شريف، كنډيارو، إقليم السند، باكستان',
    },
    date: '27 — 28 — 29 November 2026',
    hijriDate: 'Jamadi-ul-Awwal 1448 AH (Expected)',
    status: 'upcoming',
    description: {
      en: 'The grandest international congregation of Silsila Naqshbandia Tahiriya, drawing hundreds of thousands of disciples, scholars, and spiritual seekers from across Pakistan and across the globe for 3 days of intensive Quranic recitation, Zikr-e-Qalbi, Islamic lectures, and collective supplications led by Hazrat Sajjan Saeen.',
      ur: 'سلسلہ عالیہ نقشبندیہ طاہریہ کا عظیم الشان سالانہ اجتماع جس میں پاکستان اور دنیا بھر سے لاکھوں سالکین، علماء اور عقیدت مند شرکت کرتے ہیں۔ تین روزہ روح پرور پروگرامات، شب بیداری، ذکرِ قلبی، اور حضرت سجن سائیں کی رقت آمیز دعا اس کی خاص برکات ہیں۔',
      ar: 'أعظم تجمع سنوي عالمي للطريقة النقشبندية الطاهرية، يشارك فيه مئات الآلاف من العلماء والسالكين والمحبين، ويتضمن تلاوة القرآن، وحلقات الذكر القلبي، والمواعظ، والدعاء الجماعي المؤثر.',
    },
    schedule: [
      {
        en: 'Day 1 (27 Nov 2026): Arrival of Caravans, Pilgrim Welcome, and Inaugural Zikr Halqa',
        ur: 'پہلا دن (27 نومبر 2026): قافلوں کی آمد، استقبالیہ، اور افتتاحی حلقۂ ذکر',
        ar: 'اليوم الأول (27 نوفمبر 2026): استقبال الوفود وحلقة الافتتاح للذكر المبارك',
      },
      {
        en: 'Day 2 (28 Nov 2026): Educational Conferences of Jamiat-e-Ulema & Rohani Talaba Jamaat',
        ur: 'دوسرا دن (28 نومبر 2026): جمعیت علمائے طاہریہ و روحانی طلبہ جماعت کے تربیتی کنونشنز',
        ar: 'اليوم الثاني (28 نوفمبر 2026): مؤتمر العلماء والندوات الطلابية والتربوية',
      },
      {
        en: 'Day 3 (29 Nov 2026): Central Address by Hazrat Sajjan Saeen & Concluding Supplication (Dua)',
        ur: 'تیسرا دن (29 نومبر 2026): امیرِ جماعت حضرت سجن سائیں کا مرکزی خطاب اور اختتامی رقت آمیز دعا',
        ar: 'اليوم الثالث (29 نوفمبر 2026): الخطاب الجامع للشيخ سجن سائیں والدعاء الختامي المهيب',
      },
    ],
  },
  {
    id: 'monthly-zikr-ijtima',
    title: {
      en: 'Monthly Zikr-e-Qalbi Congregation (Mahana Ijtima)',
      ur: 'ماہانہ روحانی اجتماع و مجلسِ ذکرِ قلبی',
      ar: 'المجلس الشهري للذكر القلبي والمراقبة',
    },
    location: {
      en: 'All Divisional & District Markaz Centers Nationwide & Online Broadcast',
      ur: 'تمام ڈویژنل و ضلعی مراکز اور بذریعہ انٹرنیٹ براہِ راست نشریات',
      ar: 'المراكز الإقليمية في المحافظات مع البث المباشر عبر الإنترنت',
    },
    date: 'First Sunday of Every Islamic Month',
    status: 'upcoming',
    description: {
      en: 'Coordinated monthly gatherings across Pakistan, Gulf regions, and international branches for spiritual reinvigoration, review of moral progress, and group Muraqabah.',
      ur: 'سالکین کی باطنی تجدید، اخلاقی محاسبہ اور اجتماعی مراقبہ کے لیے ہر اسلامی مہینے کے پہلے اتوار کو منعقد ہونے والا منظم اجتماع۔',
      ar: 'لقاء شهري منتظم في مختلف المراكز للمراقبة الجماعية والتذكير بآداب السلوك وتجديد العهد مع الله.',
    },
  },
  {
    id: 'archive-historical-congregation',
    title: {
      en: 'Historical Archive: Golden Jubilee of Dargah Allahabad Sharif',
      ur: 'تاریخی ریکارڈ: درگاہ اللہ آباد شریف کی تاریخی تقریبات',
      ar: 'أرشيف المناسبات التاريخية لدركاه الله آباد',
    },
    location: {
      en: 'Dargah Allahabad Sharif Central Archives',
      ur: 'مرکزی آرکائیو درگاہ اللہ آباد شریف',
      ar: 'سجل المناسبات التاريخية لدركاه الله آباد شريف',
    },
    date: 'Historical Collection',
    status: 'archived',
    description: {
      en: 'Historical records, documentary records, and photographs of landmark Islamic conferences held over the past four decades under the banner of Islah-ul-Muslimeen.',
      ur: 'گزشتہ چار دہائیوں کے دوران منعقد ہونے والے تاریخی و یادگار دینی اجتماعات اور سالانہ کانفرنسز کا مصدقہ تاریخی ریکارڈ۔',
      ar: 'سجل موثق لأبرز المؤتمرات الإسلامية والتجمعات الدينية التي نظمتها الجمعية خلال العقود الأربعة الماضية.',
    },
  },
];
