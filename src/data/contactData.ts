import { LocalizedString } from '../types';

export interface MainContactPerson {
  name: string;
  mobile: string;
}

export interface MainContactInfo {
  name: LocalizedString;
  headquartersTitle: LocalizedString;
  address: LocalizedString;
  notes: LocalizedString;
  contacts: MainContactPerson[];
}

export interface PakistanCenterItem {
  id: string;
  cityArea: LocalizedString;
  centerName: string;
  address: string;
  contactPerson: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export interface InternationalContactItem {
  id: string;
  country: LocalizedString;
  contactPerson: string;
  location: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export interface KhalifaContactItem {
  id: string;
  province: 'sindh' | 'punjab';
  name: string;
  location: string;
  telephone?: string;
  mobile?: string;
  email?: string;
}

// 1. MAIN CONTACT (VERIFIED FROM SOURCE WEBSITE)
export const MAIN_CONTACT_DATA: MainContactInfo = {
  name: {
    en: 'Islah-ul-Muslimeen',
    ur: 'جماعت اصلاح المسلمین',
    ar: 'جمعية إصلاح المسلمين',
  },
  headquartersTitle: {
    en: 'Dargah Allahabad Shareef (Central Markaz)',
    ur: 'مرکزی درگاہ اللہ آباد شریف',
    ar: 'المركز العام: دركاه الله آباد شريف',
  },
  address: {
    en: 'Dargah Allahabad Shareef, Kandiaro, Naushahro Feroze District, Sindh, Pakistan',
    ur: 'درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سندھ، پاکستان',
    ar: 'دركاه الله آباد شريف، كنډيارو، مديرية نوشهرو فيروز، إقليم السند، باكستان',
  },
  notes: {
    en: "Jamaat Islahulmuslimeen's head office is located in Allahabad Sharif, also the residence of Hazrat Sajjan Saeen. The Darbar is located near the National Highway that connects the southern parts of the country with the north. Darbar Allahabad Sharif is located near the Kandiaro city bypass between Sukkur and Moro.",
    ur: 'جماعت اصلاح المسلمین کا مرکزی ہیڈ آفس درگاہ اللہ آباد شریف میں واقع ہے، جو محبوب سجن سائیں مدظلہ العالی کی جائے قیام بھی ہے۔ دربار عالیہ قومی شاہراہ (نیشنل ہائی وے) کے قریب سکھر اور مورو کے درمیان کنڈیارو بائی پاس پر واقع ہے۔',
    ar: 'يقع المقر العام لجمعية إصلاح المسلمين في دركاه الله آباد شريف، وهو أيضاً مقر إقامة فضيلة الشيخ محبوب سجن سائیں. يقع المركز بالقرب من الطريق القومي السريع بين سكر ومورو عند مخرج مدينة كنډيارو.',
  },
  contacts: [
    {
      name: 'Hazrat Sheikh-ul-Hadith Khalifa Mollana Habib-ur-Rehman Gabool Tahiri',
      mobile: '+92 (300) 315-7606',
    },
    {
      name: 'Mr. Engineer Ghulam Mohammad Memon Tahiri',
      mobile: '+92 (0300) 320 6080',
    },
    {
      name: 'Mr. Moulana Aziz ur Rehman Tahiri',
      mobile: '+92 (0300) 888 - 7557',
    },
  ],
};

// 2. CENTERS IN PAKISTAN (VERIFIED FROM SOURCE WEBSITE)
export const PAKISTAN_CENTERS_DATA: PakistanCenterItem[] = [
  // Karachi
  {
    id: 'pk-khi-1',
    cityArea: { en: 'Karachi', ur: 'کراچی', ar: 'كراتشي' },
    centerName: 'Jamia Rehimi Masjid',
    address: 'Malir Saudabad, Kala Board, Karachi, Pakistan',
    contactPerson: 'Hazrat Khalifa Haji Molana Nasrullah Chandio Tahiri',
    mobile: '+92 (300) 215-5992',
  },
  {
    id: 'pk-khi-2',
    cityArea: { en: 'Karachi', ur: 'کراچی', ar: 'كراتشي' },
    centerName: 'Usmania Masjid',
    address: 'Malir City, North Nazimabad, Karachi, Pakistan',
    contactPerson: 'Hazrat Khalifa Molana Abdul Ghafoor Panhwar Tahiri',
    mobile: '+92 (301) 241 5807',
  },

  // Hyderabad
  {
    id: 'pk-hyd-1',
    cityArea: { en: 'Hyderabad', ur: 'حیدرآباد', ar: 'حيدرآباد' },
    centerName: 'Masjid Umar Farooq',
    address: 'Station Road, Qasimabad, Hyderabad, Pakistan',
    contactPerson: 'Hazrat Khalifa Haji Molana Abdul Ghafoor Tahiri',
    phone: '+92 (22) 278-2966',
    mobile: '+92 (336) 327-0089',
  },
  {
    id: 'pk-hyd-2',
    cityArea: { en: 'Hyderabad', ur: 'حیدرآباد', ar: 'حيدرآباد' },
    centerName: 'Maddarsa Dar-ul-Ehsan',
    address: 'Near Kohinoor Chowk, Resham Gali, Hyderabad, Pakistan',
    contactPerson: 'Hazrat Khalifa Mollana Hakeem Muhammad Tahiri',
    phone: '+92 (22) 386-3182',
    mobile: '+92 (346) 293-5484',
  },
  {
    id: 'pk-hyd-3',
    cityArea: { en: 'Hyderabad', ur: 'حیدرآباد', ar: 'حيدرآباد' },
    centerName: "Dar-ul-Uloom Jami'ah Arabia Tahiria",
    address: 'Muhammad Ali Town, Near Firdous Colony, Hyderabad, Pakistan',
    contactPerson: 'Hazrat Khalifa Mollana Naeem Ahmed Tahiri',
    phone: '+92 (22) 351-4925',
    mobile: '+92 (346) 293-5484',
  },

  // Larkana
  {
    id: 'pk-lrk-1',
    cityArea: { en: 'Larkana', ur: 'لاڑکانہ', ar: 'لاركانة' },
    centerName: 'Jamia Masjid Dargah Chanehoabad Sharif',
    address: 'New S.P Office, Dail chala, Larkana, Pakistan',
    contactPerson: 'Mollana Muhammad Janan Umrani Tahiri',
    mobile: '+92 (300) 341-8509',
  },
  {
    id: 'pk-lrk-2',
    cityArea: { en: 'Larkana', ur: 'لاڑکانہ', ar: 'لاركانة' },
    centerName: 'Ghaffari Markaz',
    address: 'Near DC High School, Empire Road, Larkana, Pakistan',
    contactPerson: 'Hazrat Khalifa Mollana Abdul Qadeer Sheikh Tahiri',
    mobile: '+92 (333) 757-0285',
  },

  // Tando Allahyar
  {
    id: 'pk-tando-1',
    cityArea: { en: 'Tando Allahyar', ur: 'ٹنڈو الہ یار', ar: 'تاندو الله يار' },
    centerName: 'Markaz Rooh-ul-Islam, Masjid Tahiria Naqshbandia',
    address: 'Pir Shah Muhammad Goth, Tando Allahyar, Pakistan',
    contactPerson: 'Mr. Muhammad Ramzan Mughal Tahiri',
    phone: '+92 (22) 276-2185',
    mobile: '+92 (302) 201-1946',
  },

  // Kotri / Jamshoro
  {
    id: 'pk-kotri-1',
    cityArea: { en: 'Kotri / Jamshoro', ur: 'کوٹری / جامشورو', ar: 'كوتري / جامشورو' },
    centerName: 'Jamia Ghausia Tahiriya',
    address: 'Railo Road, Kotri, Jamshoro / Hyderabad, Pakistan',
    contactPerson: 'Hazrat Khalifa Hafiz Basharat Memon Tahiri',
    phone: '+92 (22) 387-1943',
    mobile: '+92 (300) 262-0193',
  },

  // Hala
  {
    id: 'pk-hala-1',
    cityArea: { en: 'Hala', ur: 'ہالا', ar: 'هالا' },
    centerName: 'Masjid Sohna Saeen',
    address: 'Hala Old, New Hala, District Matiari, Pakistan',
    contactPerson: 'Haji Nabi Bux Tahiri',
    mobile: '+92 (301) 321 4899',
  },

  // Lahore
  {
    id: 'pk-lhr-1',
    cityArea: { en: 'Lahore', ur: 'لاہور', ar: 'لاهور' },
    centerName: 'Markaz Rooh-ul-Islam',
    address: 'Shadman Road, Ghotta Stop, Lahore, Pakistan',
    contactPerson: 'Hazrat Khalifa Qari Habib-ur-Rehman Tahiri',
    phone: '+92 (42) 746-7883',
  },

  // Faisalabad
  {
    id: 'pk-fsd-1',
    cityArea: { en: 'Faisalabad', ur: 'فیصل آباد', ar: 'فيصل آباد' },
    centerName: 'Markaz Attahir, Jamia Masjid Subhan',
    address: 'Ghulam Muhammad Abad, Faisalabad, Pakistan',
    contactPerson: 'Hazrat Khalifa Dr. Ghulam Ghous Tahiri',
    mobile: '+92 (300) 565-8983',
  },

  // Rawalpindi
  {
    id: 'pk-rwp-1',
    cityArea: { en: 'Rawalpindi', ur: 'راولپنڈی', ar: 'راولبندي' },
    centerName: 'Dargah Tahiri Markaz Rooh-ul-Islam',
    address: 'Naseerabad, Near Koh-e-Noor Mills, Rawalpindi, Pakistan',
    contactPerson: 'Hazrat Khalifa Syed Muhammad Ismail Shah Tahiri Naqshbandi',
    phone: '+92 (51) 547-1422',
    mobile: '+92 (333) 527-2808',
  },
];

// 3. INTERNATIONAL CONTACTS (VERIFIED FROM SOURCE WEBSITE)
export const INTERNATIONAL_CONTACTS_DATA: InternationalContactItem[] = [
  // Australia
  {
    id: 'intl-aus-1',
    country: { en: 'Australia', ur: 'آسٹریلیا', ar: 'أستراليا' },
    contactPerson: 'Mollana Muhammad Arshad Khan Tahiri',
    location: 'Sydney, Australia',
    phone: '61-410 624 945',
  },

  // Canada
  {
    id: 'intl-can-1',
    country: { en: 'Canada', ur: 'کینیڈا', ar: 'كندا' },
    contactPerson: 'Muhammad Azam Chandio',
    location: 'Halifax, Canada',
    phone: '001 902 404 7239',
    email: 'azam_chandio@hotmail.com',
  },

  // China
  {
    id: 'intl-chn-1',
    country: { en: 'China', ur: 'چین', ar: 'الصين' },
    contactPerson: 'Khalifa Mollana Masood Ma Siao Hui',
    location: 'Beijing, China',
    phone: '0086 1360 115 2174',
    email: 'abu_asad69@hotmail.com',
  },

  // Germany
  {
    id: 'intl-ger-1',
    country: { en: 'Germany', ur: 'جرمنی', ar: 'ألمانيا' },
    contactPerson: 'Faqir Tauqeer Ahmed Tahiri',
    location: 'Luchow, 150km from Hamburg, Germany',
    phone: '0049 584 197 9688',
    mobile: '0049 177 646 2630',
    email: 'sajan_peer@hotmail.com',
  },
  {
    id: 'intl-ger-2',
    country: { en: 'Germany', ur: 'جرمنی', ar: 'ألمانيا' },
    contactPerson: 'Faqir Nadeem Ahmed Tahiri',
    location: 'Halle, Germany',
    phone: '0049 157 714 75719',
  },

  // Saudi Arabia
  {
    id: 'intl-ksa-1',
    country: { en: 'Saudi Arabia', ur: 'سعودی عرب', ar: 'المملكة العربية السعودية' },
    contactPerson: 'Khalifa Mollana Qamar Hashmi',
    location: 'Madina Munnawara, Saudi Arabia',
    phone: '0096 653 207 8865 / 0096 656 354 8090',
  },

  // Sri Lanka
  {
    id: 'intl-lka-1',
    country: { en: 'Sri Lanka', ur: 'سری لنکا', ar: 'سريلانكا' },
    contactPerson: 'Muhammad Asim Chandio Tahiri',
    location: 'Colombo, Sri Lanka',
    phone: '0094 77 777 1670',
    email: 'asim_chandio@hotmail.com',
  },

  // Spain
  {
    id: 'intl-esp-1',
    country: { en: 'Spain', ur: 'اسپین', ar: 'إسبانيا' },
    contactPerson: 'Faqir Asadullah Sheikh Tahiri',
    location: 'Spain',
    phone: '0034 936 73 5021',
    mobile: '0034 634 88 5611',
    email: 'shaikhasad@hotmail.com',
  },

  // Sweden / Sverige
  {
    id: 'intl-swe-1',
    country: { en: 'Sweden / Sverige', ur: 'سویڈن', ar: 'السويد' },
    contactPerson: 'Abdul Raheem Nizamani Tahiri',
    location: 'Göteborg, Sweden',
    phone: '0046 700 77 3942',
    email: 'ar_niz@yahoo.com',
  },
  {
    id: 'intl-swe-2',
    country: { en: 'Sweden / Sverige', ur: 'سویڈن', ar: 'السويد' },
    contactPerson: 'Muhammad Zaafran Tahiri',
    location: 'Malmö, Sweden',
    phone: '0046 734 94 3508',
  },

  // United Arab Emirates
  {
    id: 'intl-uae-1',
    country: { en: 'United Arab Emirates', ur: 'متحدہ عرب امارات', ar: 'الإمارات العربية المتحدة' },
    contactPerson: 'Hafiz Mushtaq Ahmed Tahiri',
    location: 'UAE',
    phone: '0097 150 582 2902',
    email: 'alhafiz@yahoo.com',
  },

  // United Kingdom
  {
    id: 'intl-gbr-1',
    country: { en: 'United Kingdom', ur: 'برطانیہ (UK)', ar: 'المملكة المتحدة' },
    contactPerson: 'Mollana Liaquat Ali Tahiri',
    location: 'Slough, UK',
    phone: '0044 796 847 1719',
  },
  {
    id: 'intl-gbr-2',
    country: { en: 'United Kingdom', ur: 'برطانیہ (UK)', ar: 'المملكة المتحدة' },
    contactPerson: 'Faqir Sajjad Tahiri',
    location: 'Slough, UK',
    phone: '0044 796 82 7465',
  },
  {
    id: 'intl-gbr-3',
    country: { en: 'United Kingdom', ur: 'برطانیہ (UK)', ar: 'المملكة المتحدة' },
    contactPerson: 'Faqir Haji Pola Khan Tahiri',
    location: 'Derby, UK',
    phone: '0044 332 72 8158',
  },
  {
    id: 'intl-gbr-4',
    country: { en: 'United Kingdom', ur: 'برطانیہ (UK)', ar: 'المملكة المتحدة' },
    contactPerson: 'Faqir Abdul Mannan Tahiri',
    location: 'Nelson, UK',
    phone: '0044 781 602 3562',
  },
];

// 4. KHULAFA-E-KARAM (VERIFIED FROM SOURCE WEBSITE)
export const KHULAFA_KARAM_DATA: KhalifaContactItem[] = [
  // Sindh, Pakistan
  {
    id: 'kh-sindh-1',
    province: 'sindh',
    name: 'Hazrat Khalifa Mollana Muhammad Arif Tahiri',
    location: 'Karachi, Pakistan',
    mobile: '+92 (300) 272-8507, +92 (300) 884-1112',
  },
  {
    id: 'kh-sindh-2',
    province: 'sindh',
    name: 'Hazrat Khalifa Haji Rafaqat Ali Tahiri',
    location: 'Karachi, Pakistan',
    mobile: '+92 (300) 201-4585',
  },
  {
    id: 'kh-sindh-3',
    province: 'sindh',
    name: 'Hazrat Khalifa Abdullah Talibani',
    location: 'Kotri, Near Hyderabad, Pakistan',
    mobile: '+92 (345) 365-1978',
  },
  {
    id: 'kh-sindh-4',
    province: 'sindh',
    name: 'Hazrat Khalifa Mollana Abdul Hakim Tahiri',
    location: 'Sukkur, Pakistan',
    mobile: '+92 (333) 202-3216',
  },
  {
    id: 'kh-sindh-5',
    province: 'sindh',
    name: 'Hazrat Khalifa Mollana Muhammad Hassan Otho',
    location: 'Near Madni Masjid, Golimar, Nawabshah, Pakistan',
    mobile: '+92 (300) 322-6609',
  },
  {
    id: 'kh-sindh-6',
    province: 'sindh',
    name: 'Hazrat Khalifa Mollana Jan Muhammad Birohi',
    location: 'Larkana, Pakistan',
    mobile: '+92 (300) 340-0765',
  },
  {
    id: 'kh-sindh-7',
    province: 'sindh',
    name: 'Mollana Khalid Ishaq Tahiri',
    location: 'Larkana, Pakistan',
    mobile: '+92 (333) 292-5725, +92 (346) 890-7435',
  },

  // Punjab, Pakistan
  {
    id: 'kh-punjab-1',
    province: 'punjab',
    name: 'Hazrat Khalifa Syed Muhammad Ismail Shah Tahiri Naqshbandi',
    location: 'Dargah Tahiri Markaz Rooh-ul-Islam, Naseerabad, Near Koh-e-Noor Mills, Rawalpindi, Pakistan',
    telephone: '+92 (51) 547-1422',
    mobile: '+92 (333) 527-2808',
  },
  {
    id: 'kh-punjab-2',
    province: 'punjab',
    name: 'Hazrat Khalifa Mollana Riasat Ali Tahiri Naqshbandi',
    location: 'Chakri Sharif, Tehsil Shakargarh, District Narowal, Pakistan',
    telephone: '+92 (54) 242-0098',
    mobile: '+92 (300) 610-0724',
  },
  {
    id: 'kh-punjab-3',
    province: 'punjab',
    name: 'Mollana Salahuddin Ayubi',
    location: 'Sialkot, Pakistan',
    mobile: '+92 (345) 677-9877',
  },
  {
    id: 'kh-punjab-4',
    province: 'punjab',
    name: 'Hazrat Khalifa Dr. Muhammad Yousuf Tahiri',
    location: 'Chak No. 208, Faisalabad, Pakistan',
    telephone: '+92 (44) 139-2769',
  },
  {
    id: 'kh-punjab-5',
    province: 'punjab',
    name: 'Hazrat Khalifa Mollana Ali Muhammad Arshad Tahiri',
    location: 'Punjab, Pakistan',
    telephone: '+92 (301) 729-7389',
  },
];
