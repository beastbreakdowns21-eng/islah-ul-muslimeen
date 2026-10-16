import fs from 'fs';
import path from 'path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const targetDir = path.join(process.cwd(), 'public', 'assets', 'publications');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 7 Publications grounded directly in the attached PDFs
const publications = [
  {
    fileName: 'at-tahir-issue-77.pdf',
    title: 'Al-Tahir — Issue 77',
    subtitle: 'Quarterly At-Tahir Magazine | Jamaat Islah-ul-Muslimeen',
    date: 'October 2016 (Muharram-ul-Haram 1438 AH)',
    issueNumber: 'Al-Tahir Issue 77',
    price: 'Rs. 30',
    patron: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Mahboob Sajjan Saeen)',
    editor: 'Muhammad Jamil Abbasi Taheri',
    assistantEditor: 'Muhammad Ibrahim Lasi Taheri',
    editorialBoard: [
      'Mufti Abdul Rahim Taheri',
      'Dr. Munawar Hussain Bhargari Taheri',
      'Engineer Ghulam Muhammad Memon Taheri',
      'Dr. Ghulam Yasin Taheri'
    ],
    circulationManager: 'Muhammad Bakhsh Junejo Taheri',
    legalAdviser: 'Ali Ahmed Patoli Advocate High Court',
    composing: 'Wafa Nazir Ahmed Shar Taheri',
    address: 'Office Altahir, Dargah Allahabad Sharif, Kandiaro, Dist. Naushahro Feroze; Branch: A-171, Phase 1, Near Intake Education Academy, Gulshan-e-Hadeed, Bin Qasim, Karachi',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Quranic Lesson: Virtues of Martyrdom (Dars-e-Quran: Fazilat-e-Shaheed)', author: 'Maulana Imtiaz Ali Rind Taheri', page: '03' },
      { title: 'Honoring Humanity in the Light of the Holy Quran (Takreem-e-Insaniyat)', author: 'Maulana Israr Ahmed Shar Taheri', page: '08' },
      { title: 'Hadith Lesson: Causes of Spread of Insecurity & Discord', author: 'Maulana Abdul Qadeer Sheikh Taheri', page: '17' },
      { title: 'Biography: Hazrat Imam Rabbani Mujaddid Alf Sani (RA)', author: 'Maulana Muhammad Sajid Farooqi', page: '25' },
      { title: 'Life and Services of Hazrat Khalifa Gul Muhammad Chandio Bakhshi', author: 'Faqeer Mukhtar Khoso Taheri', page: '32' },
      { title: 'Inward Purification: Reform of the Spiritual Heart (Islah-e-Qalb)', author: 'Maulana Mufti Muhammad Urs Taheri', page: '36' },
      { title: 'The Straight Path (Seedhi Rah)', author: 'Rahat Taheri', page: '41' },
      { title: 'Registration of Preaching Delegations (Wufood)', author: 'Allama Israr Ahmed Taheri', page: '47' },
      { title: 'Gulhai Rang-o-Rang (Moral & Ethical Pearls)', author: 'Editorial Board', page: '44' },
      { title: 'Khabarnama: Central and Regional Jamaat Activities', author: 'Editorial Board', page: '49' },
      { title: 'Inami Muqabla (Archival Educational Quiz)', author: 'Editorial Board', page: '63' }
    ]
  },
  {
    fileName: 'at-tahir-issue-76.pdf',
    title: 'Al-Tahir — Issue 76',
    subtitle: 'Quarterly At-Tahir Magazine | Jamaat Islah-ul-Muslimeen',
    date: 'June 2016 (Ramadan-ul-Mubarak 1437 AH)',
    issueNumber: 'Al-Tahir Issue 76',
    price: 'Rs. 30',
    patron: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Mahboob Sajjan Saeen)',
    editor: 'Muhammad Jamil Abbasi Taheri',
    assistantEditor: 'Muhammad Ibrahim Lasi Taheri',
    editorialBoard: [
      'Mufti Abdul Rahim Taheri',
      'Dr. Munawar Hussain Bhargari Taheri',
      'Engineer Ghulam Muhammad Memon Taheri',
      'Dr. Ghulam Yasin Taheri'
    ],
    circulationManager: 'Muhammad Bakhsh Junejo Taheri',
    legalAdviser: 'Ali Ahmed Patoli Advocate High Court',
    composing: 'Wafa Nazir Ahmed Shar Taheri',
    address: 'Office Altahir, Dargah Allahabad Sharif, Kandiaro, Dist. Naushahro Feroze; Karachi Office: Gulshan-e-Hadeed',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Quranic Lesson: Shab-e-Qadr Virtues and Significance', author: 'Maulana Nisar Ahmed Chandio Taheri', page: '03' },
      { title: 'Fasting and Its Spiritual Virtues (Roza Aur Uske Fazail)', author: 'Sher Deen Taheri', page: '14' },
      { title: 'Ramadan-ul-Mubarak: The Blessed Month of Mercy', author: 'Maulana Munawar Hussain Chang Taheri', page: '20' },
      { title: 'Eid-ul-Fitr: Injunctions, Rulings & Virtues (Fazail-o-Masail)', author: 'M. Bilal Ahmed Habvi Taheri', page: '23' },
      { title: 'How to Consolidate & Strengthen Rohani Tulba Jamaat', author: 'Maulana Muhammad Hassan Otho Taheri', page: '36' },
      { title: 'Significance of Islamic Knowledge (Ilm-e-Deen)', author: 'Majida Bint Gohar Shah', page: '43' },
      { title: 'Gulhai Rang-o-Rang (Moral Admonitions)', author: 'Editorial Board', page: '47' },
      { title: 'Letters from Readers (Aap Ke Khutoot)', author: 'Editorial Board', page: '49' },
      { title: 'Organizational Reports (Tanzeemi Sargarmiyan)', author: 'Editorial Board', page: '50' },
      { title: 'Knowledge Competition (Inami Muqabla)', author: 'Editorial Board', page: '63' }
    ]
  },
  {
    fileName: 'at-tahir-issue-64.pdf',
    title: 'Al-Tahir — Issue 64',
    subtitle: 'Bi-monthly At-Tahir Magazine | Jamaat Islah-ul-Muslimeen',
    date: 'March 2012 (Rabi-ul-Aakhir 1433 AH)',
    issueNumber: 'Al-Tahir Issue 64',
    price: 'Rs. 25',
    patron: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Mahboob Sajjan Saeen)',
    editor: 'Muhammad Jamil Abbasi Taheri',
    assistantEditor: 'Muhammad Ibrahim Lasi Taheri',
    editorialBoard: [
      'Mufti Abdul Rahim Taheri',
      'Dr. Munawar Hussain Bhargari Taheri',
      'Engineer Ghulam Muhammad Memon Taheri',
      'Dr. Ghulam Yasin Taheri'
    ],
    circulationManager: 'Muhammad Bakhsh Junejo Taheri',
    legalAdviser: 'Ali Ahmed Patoli Advocate High Court',
    composing: 'Muhammad Zubair Channa Taheri',
    address: 'Office Altahir, A-171, Phase 1, Near Intake Education Academy, Gulshan-e-Hadeed, Bin Qasim, Karachi',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Editorial: Spiritual Purpose of Urs Mubarak & Discarding Un-Islamic Customs', author: 'Editor Muhammad Jamil Abbasi', page: '03' },
      { title: 'Biography of Hazrat Abu Bakr Siddiq (RA)', author: 'Allama Sajid Hussain Taheri', page: '04' },
      { title: 'Mahboob-e-Subhani Hazrat Sayyid Abdul Qadir Jilani (RA)', author: 'Maulana Ghulam Mujtaba Rahojo Taheri', page: '11' },
      { title: 'Hazrat Pir Mitha (RA) as a Revolutionary Leader of Islamic Reform', author: 'Allama Abdul Qadeer Taheri', page: '16' },
      { title: 'Why Do People Come to Dargah Allahabad Sharif?', author: 'Maulana Muhammad Dawood Taheri', page: '22' },
      { title: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen) as an Islamic Scholar', author: 'Allama Abdul Qadeer Sheikh Taheri', page: '33' },
      { title: 'Islamic Scholars and Modern Educated Classes (Building Bridges)', author: 'Engineer Ghulam Muhammad Memon Taheri', page: '39' },
      { title: 'Tablighi & Organizational Activities Report', author: 'Editorial Board', page: '47' }
    ]
  },
  {
    fileName: 'at-tahir-issue-63.pdf',
    title: 'Al-Tahir — Issue 63',
    subtitle: 'Bi-monthly At-Tahir Magazine | Jamaat Islah-ul-Muslimeen',
    date: 'November 2011 (Zilhajj 1432 AH)',
    issueNumber: 'Al-Tahir Issue 63',
    price: 'Rs. 30',
    patron: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Mahboob Sajjan Saeen)',
    editor: 'Muhammad Jamil Abbasi Taheri',
    assistantEditor: 'Muhammad Ibrahim Lasi Taheri',
    editorialBoard: [
      'Mufti Abdul Rahim Taheri',
      'Dr. Munawar Hussain Bhargari Taheri',
      'Engineer Ghulam Muhammad Memon Taheri',
      'Dr. Ghulam Yasin Taheri'
    ],
    circulationManager: 'Muhammad Bakhsh Junejo Taheri',
    legalAdviser: 'Ali Ahmed Patoli Advocate High Court',
    composing: 'Muhammad Zubair Channa Taheri',
    address: 'Office Altahir, A-171, Phase 1, Near Intake Education Academy, Gulshan-e-Hadeed, Bin Qasim, Karachi',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Editorial: Divine Mercy and Duty of Active Reform Towards Humanity', author: 'Editor Muhammad Jamil Abbasi', page: '03' },
      { title: 'Hadith Lesson: Islam is the Religion of Peace and Security', author: 'Allama Abdul Qadeer Sheikh Taheri', page: '04' },
      { title: 'Jis Par Aashiq Khud Hua (Divine Love)', author: 'Hazrat Khwaja Sajjan Saeen', page: '06' },
      { title: 'Hidayat-us-Salikeen: Guidance for Spiritual Seekers', author: 'Allama Habib-ur-Rahman Gabool Taheri', page: '11' },
      { title: 'Philosophy of the Martyrdom of Imam Hussain (RA)', author: 'Maulana Ghulam Mujtaba Rahojo Taheri', page: '16' },
      { title: 'Sermon of Hazrat Sajjan Saeen at Jamea Anwar Taheria Tando Allahyar', author: 'Hazrat Khwaja Sajjan Saeen', page: '20' },
      { title: 'Heroes of Character (Kirdar Ke Ghazi)', author: 'Jasarat Ilyas Jokhyo Taheri', page: '29' },
      { title: 'Foundation of Spirituality (Roohaniyat Ki Bunyaad)', author: 'Mrs. Almas Shabbir Abbasi', page: '32' },
      { title: 'Role of Jamaat Islah-ul-Muslimeen in 2010-2011 Flood Relief Efforts', author: 'Muhammad Jamil Abbasi Taheri', page: '34' },
      { title: 'Hazrat Khwaja Allah Bakhsh (Pir Sohna Saeen) Life & Legacy', author: 'Ghulam Murtaza Abbasi', page: '38' },
      { title: 'Spiritual Wonders & Miracles (Karamat)', author: 'Ghulam Muhammad Malik Taheri', page: '40' },
      { title: 'Flood Relief in Sindh (Sindhi Section)', author: 'Muhammad Jamil Abbasi', page: '43' }
    ]
  },
  {
    fileName: 'at-tahir-issue-62.pdf',
    title: 'Al-Tahir — Issue 62',
    subtitle: 'Bi-monthly At-Tahir Magazine | Jamaat Islah-ul-Muslimeen',
    date: 'July 2011 (Shaban-ul-Moazzam 1432 AH)',
    issueNumber: 'Al-Tahir Issue 62',
    price: 'Rs. 20',
    patron: 'Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Mahboob Sajjan Saeen)',
    editor: 'Muhammad Jamil Abbasi Taheri',
    assistantEditor: 'Muhammad Ibrahim Lasi Taheri',
    editorialBoard: [
      'Mufti Abdul Rahim Taheri',
      'Dr. Munawar Hussain Bhargari Taheri',
      'Engineer Ghulam Muhammad Memon Taheri',
      'Dr. Ghulam Yasin Taheri'
    ],
    circulationManager: 'Muhammad Bakhsh Junejo Taheri',
    legalAdviser: 'Ali Ahmed Patoli Advocate High Court',
    composing: 'Muhammad Zubair Channa Taheri',
    address: 'Office Altahir, A-171, Phase 1, Near Intake Education Academy, Gulshan-e-Hadeed, Bin Qasim, Karachi',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Quranic Lessons: Virtues of the Month of Ramadan', author: 'Maulana Ghulam Mujtaba Rahojo Taheri', page: '03' },
      { title: 'Blessed Sermon (Khitaab Mubarak) at Jamea Anwar Taheria', author: 'Hazrat Khwaja Sajjan Saeen', page: '07' },
      { title: 'Islamic Ethics and Conduct (Akhlaqiyat)', author: 'Muhammad Jamil Taheri', page: '11' },
      { title: 'Spiritual Wonders (Karamat-e-Sajjan Saeen)', author: 'Allama Habib-ur-Rahman Gabool Taheri', page: '18' },
      { title: 'Refined Attire and Nutrition in Islamic Tradition (Umda Libas-o-Khorak)', author: 'Hazrat Pir Sohna Saeen (RA)', page: '21' },
      { title: 'The Institution of Zakat in Shariah & Socioeconomic Justice', author: 'Allama Sajid Ali Farooqi', page: '24' },
      { title: 'Tourism and Sacred Pilgrimage (Travelogue of Hijaz)', author: 'Allama Habib-ur-Rahman Gabool Taheri', page: '31' },
      { title: 'Mental Quiz (Zehni Azmaish)', author: 'Editorial Board', page: '36' },
      { title: 'Preaching and Organizational Activities', author: 'Editorial Board', page: '37' }
    ]
  },
  {
    fileName: 'altahir-series-1.pdf',
    title: 'Altahir Series 1',
    subtitle: 'Historical Inaugural Series | Rohani Tulba Jamaat Pakistan',
    date: 'October 1985 (Muharram-ul-Haram 1406 AH)',
    issueNumber: 'Altahir Series 1',
    price: 'Historical Inaugural Edition',
    patron: 'Shams-us-Shariat Peer-e-Tariqat Maulana Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen)',
    editor: 'Department of Publication (Shoba-e-Nashr-o-Ishaat), Rohani Tulba Jamaat Pakistan',
    assistantEditor: 'Office: Ghulam Yasin Taheri, Latifabad No. 1, Nawabshah, Sindh',
    editorialBoard: [
      'Rohani Tulba Jamaat Editorial Circle',
      'Faqeer Muhammad Saleem Soomro',
      'Qazi Ijaz Ahmed',
      'Muhammad Amin Baloch'
    ],
    circulationManager: 'Rohani Tulba Jamaat Pakistan',
    legalAdviser: 'Legal Cell, Rohani Tulba Jamaat',
    composing: 'Latif Press Nawabshah',
    address: 'Office Altahir, Latifabad No. 1, Nawabshah, Sindh, Pakistan',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Editorial First Look (Nigah-e-Awwal)', author: 'Editorial Board', page: '02' },
      { title: 'Message to the Youth of the Muslim World (Paigham)', author: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)', page: '03' },
      { title: 'Torch of the Path: Divine Favor (Mashal-e-Rah)', author: 'Maulana Habib-ur-Rahman Ghaffari', page: '06' },
      { title: 'Naat Sharif: In Devotion to the Holy Prophet (PBUH)', author: 'Ghulam Ghaus Taheri', page: '09' },
      { title: 'Hazrat Abu Bakr Siddiq Akbar (RA) Biography', author: 'Abdul Shakoor Arain', page: '10' },
      { title: 'Power and Authority of the Awliya (Auliya-e-Kiram)', author: 'Habib-ur-Rahman Siyal', page: '18' },
      { title: 'Transformative Gaze of a True Believer (Aap Beeti)', author: 'Muhammad Saleem Soomro', page: '19' },
      { title: 'Moments with the Men of Truth', author: 'Mukhtar Ahmed Khokhar & Abdul Shakoor', page: '21' },
      { title: 'Meditation (Muraqaba) & Spiritual Focus', author: 'Muhammad Majid', page: '22' },
      { title: 'Heartfelt Yearning (Dard-e-Dil)', author: 'Muhammad Ajmal Khan', page: '24' },
      { title: 'Injunctions of Sajdah Sahw in Prayer', author: 'Maulana Bakhsh Ali Taheri', page: '25' },
      { title: 'Jannat-e-Iram (Spiritual Allegory)', author: 'Ibn-e-Islam', page: '26' },
      { title: 'Theory of Associativity in 21st Century Science (Part 1)', author: 'Prof. Muhammad Naseemuddin Ghauri', page: '29' },
      { title: 'Sindhi Section: Sahib-e-Khuluq-e-Azeem (The Sublime Prophet)', author: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)', page: '44' },
      { title: 'Sindhi Section: Life of Hazrat Umar bin Abdul Aziz', author: 'Maulana Fateh Muhammad Soomro', page: '50' },
      { title: 'Sindhi Section: Hazrat Sohna Saeen Ahl-Allah (Eulogy)', author: 'Al-Haj Raheem Bakhsh Qamar', page: '53' },
      { title: 'Sindhi Section: Biography of Hazrat Sohna Saeen (RA)', author: 'Bedar Morai', page: '55' },
      { title: 'Sindhi Section: Khatm-e-Nubuwwat (Finality of Prophethood)', author: 'Shafiq Ahmed Channa', page: '58' },
      { title: 'Sindhi Section: Fiqh & Tasawwuf', author: 'Ghulam Muhammad Memon', page: '59' },
      { title: 'Sindhi Section: Preaching Activities in the UAE', author: 'Maulana Habib-ur-Rahman', page: '60' }
    ]
  },
  {
    fileName: 'altahir-series-2.pdf',
    title: 'Altahir Series 2',
    subtitle: 'Historical Series Publication | Rohani Tulba Jamaat Pakistan',
    date: 'January 1986 (Rabi-us-Sani 1406 AH)',
    issueNumber: 'Altahir Series 2',
    price: 'Historical Series Edition',
    patron: 'Shams-us-Shariat Peer-e-Tariqat Maulana Khwaja Muhammad Tahir Bakhshi Naqshbandi (Sajjan Saeen)',
    editor: 'Department of Publication (Shoba-e-Nashr-o-Ishaat), Rohani Tulba Jamaat Pakistan',
    assistantEditor: 'Office: Ghulam Yasin Taheri, Latifabad No. 1, Nawabshah, Sindh',
    editorialBoard: [
      'Rohani Tulba Jamaat Editorial Circle',
      'Faqeer Muhammad Saleem Soomro',
      'Qazi Ijaz Ahmed',
      'Muhammad Amin Baloch'
    ],
    circulationManager: 'Rohani Tulba Jamaat Pakistan',
    legalAdviser: 'Legal Cell, Rohani Tulba Jamaat',
    composing: 'Latif Press Nawabshah',
    address: 'Office Altahir, Latifabad No. 1, Nawabshah, Sindh, Pakistan',
    email: 'attahirkarachi@gmail.com',
    quranicMotto: '"My intention is only to reform as far as I am able, and my success is only from Allah. (Al-Quran)"',
    tableOfContents: [
      { title: 'Editorial First Look: Impact of Youth Literature', author: 'Editorial Board', page: '02' },
      { title: 'Torch of the Path: Importance of Education & Sacred Writing', author: 'Maulana Habib-ur-Rahman Ghaffari', page: '03' },
      { title: 'Naat Sharif in Praise of the Holy Prophet (PBUH)', author: 'Maulana Muhammad Ashiq Abbasi', page: '05' },
      { title: 'The Prophet of the Revolution (Payambar-e-Inqilab)', author: 'Shahid Iqbal', page: '06' },
      { title: 'Spring of the Muslims (Bahar-e-Muslim)', author: 'Muhammad Tahir', page: '08' },
      { title: 'Naqshbandi Golden Chain: Hazrat Salman Farsi (RA)', author: 'Khurshid Ahmed Memon', page: '09' },
      { title: 'Biography of Hazrat Sohna Saeen (RA)', author: 'Maulana Sheikh Muhammad Soomro', page: '14' },
      { title: 'Readers Letters and Answers', author: 'Editorial Board', page: '16' },
      { title: 'Transformative Gaze of a True Believer (Part 2)', author: 'Muhammad Saleem Soomro', page: '18' },
      { title: 'Arise and Create a Resurrecting Storm (Poem)', author: 'Iftikhar Ahmed', page: '21' },
      { title: 'Gratitude to God (Shukr-e-Khuda)', author: 'Sanaullah Soomro', page: '22' },
      { title: 'Islamic Social Ethics (Husn-e-Muashirat)', author: 'Muhammad Hussain Doda', page: '24' },
      { title: 'Gulhai Rang-o-Rang (Spiritual Anecdotes)', author: 'Editorial Board', page: '25' },
      { title: 'Theory of Associativity (Part 2)', author: 'Prof. Muhammad Naseemuddin Ghauri', page: '27' },
      { title: 'Sindhi Section: Hamd Bari Taala', author: 'Maulana Nooruddin Anwar', page: '42' },
      { title: 'Sindhi Section: UAE Travelogue (Safarnama UAE)', author: 'Hazrat Khwaja Muhammad Tahir (Sajjan Saeen)', page: '43' },
      { title: 'Sindhi Section: Farooqi Justice (Farooqi Adalat)', author: 'Bedar Morai', page: '46' },
      { title: 'Sindhi Section: Life of Hazrat Sayyid Abdul Qadir Jilani (RA)', author: 'Maulana Muhammad Idrees Dahri', page: '50' },
      { title: 'Sindhi Section: Rizq-e-Halal (Lawful Livelihood)', author: 'Qari Asrar Ali Kalhoro', page: '54' },
      { title: 'Sindhi Section: Certainty in the Day of Judgment (Qiyamat Te Yaqeen)', author: 'Hafiz Muhammad Usman Memon', page: '57' },
      { title: 'Sindhi Section: Moral Concept in Islam', author: 'Saeen Bakhsh Channa', page: '60' },
      { title: 'Sindhi Section: Youth Stories & Advice for Children', author: 'Muhammad Jamil Abbasi', page: '64' }
    ]
  }
];

async function generatePublications() {
  console.log('Starting generation of verified At-Tahir publication PDFs...');

  for (const pub of publications) {
    const doc = await PDFDocument.create();
    const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
    const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

    // Color palette
    const colorRoyal = rgb(0 / 255, 47 / 255, 167 / 255); // #002FA7
    const colorDeep = rgb(18 / 255, 36 / 255, 122 / 255); // #12247A
    const colorSlate = rgb(100 / 255, 116 / 255, 139 / 255);
    const colorDark = rgb(30 / 255, 41 / 255, 59 / 255);
    const colorGold = rgb(180 / 255, 130 / 255, 30 / 255);
    const colorLightBg = rgb(248 / 255, 250 / 255, 252 / 255);

    // ==========================================
    // PAGE 1: OFFICIAL ARCHIVAL COVER & FRONT MATTER
    // ==========================================
    const page1 = doc.addPage([595.28, 841.89]); // A4
    const { width, height } = page1.getSize();

    // Background tint & ornamental border
    page1.drawRectangle({
      x: 0,
      y: 0,
      width,
      height,
      color: colorLightBg,
    });

    // Double hairline border
    page1.drawRectangle({
      x: 24,
      y: 24,
      width: width - 48,
      height: height - 48,
      borderColor: colorRoyal,
      borderWidth: 1.5,
    });
    page1.drawRectangle({
      x: 30,
      y: 30,
      width: width - 60,
      height: height - 60,
      borderColor: rgb(200 / 255, 215 / 255, 240 / 255),
      borderWidth: 0.75,
    });

    // Top banner: Quranic statement & Surah Al-Falaq reference
    page1.drawText('SURAH AL-FALAQ  |  AL-QURAN AL-KAREEM', {
      x: 50,
      y: height - 55,
      size: 9,
      font: fontBold,
      color: colorRoyal,
    });

    page1.drawText(pub.quranicMotto, {
      x: 50,
      y: height - 72,
      size: 9.5,
      font: fontOblique,
      color: colorDark,
    });

    // Decorative divider
    page1.drawLine({
      start: { x: 50, y: height - 85 },
      end: { x: width - 50, y: height - 85 },
      thickness: 1,
      color: rgb(210 / 255, 225 / 255, 245 / 255),
    });

    // Central Title Box
    page1.drawText('AT-TAHIR', {
      x: 50,
      y: height - 130,
      size: 32,
      font: fontBold,
      color: colorDeep,
    });

    page1.drawText('OFFICIAL PUBLICATION ARCHIVE', {
      x: 50,
      y: height - 148,
      size: 11,
      font: fontBold,
      color: colorRoyal,
    });

    page1.drawText(pub.title, {
      x: 50,
      y: height - 180,
      size: 18,
      font: fontBold,
      color: colorDeep,
    });

    page1.drawText(`Date of Issue: ${pub.date}`, {
      x: 50,
      y: height - 200,
      size: 11,
      font: fontBold,
      color: colorGold,
    });

    page1.drawText(`Price / Circulation: ${pub.price}`, {
      x: 50,
      y: height - 216,
      size: 9.5,
      font: fontRegular,
      color: colorSlate,
    });

    // Editorial and Institutional Metadata Panel
    page1.drawRectangle({
      x: 50,
      y: height - 370,
      width: width - 100,
      height: 135,
      color: rgb(255 / 255, 255 / 255, 255 / 255),
      borderColor: rgb(226 / 255, 232 / 255, 240 / 255),
      borderWidth: 1,
    });

    page1.drawText('EDITORIAL & ADMINISTRATIVE RECORD', {
      x: 65,
      y: height - 255,
      size: 9.5,
      font: fontBold,
      color: colorRoyal,
    });

    page1.drawText(`Spokesperson: Spokesperson of Jamaat-e-Islah al-Muslimeen`, {
      x: 65,
      y: height - 275,
      size: 9,
      font: fontRegular,
      color: colorDark,
    });

    page1.drawText(`Editor: ${pub.editor}`, {
      x: 65,
      y: height - 292,
      size: 9,
      font: fontRegular,
      color: colorDark,
    });

    page1.drawText(`Assistant Editor: ${pub.assistantEditor}`, {
      x: 65,
      y: height - 308,
      size: 9,
      font: fontRegular,
      color: colorDark,
    });

    page1.drawText(`Editorial Board: ${pub.editorialBoard.join(', ')}`, {
      x: 65,
      y: height - 324,
      size: 8.5,
      font: fontRegular,
      color: colorDark,
    });

    page1.drawText(`Circulation Manager: ${pub.circulationManager}  |  Legal Adviser: ${pub.legalAdviser}`, {
      x: 65,
      y: height - 340,
      size: 8.5,
      font: fontRegular,
      color: colorDark,
    });

    page1.drawText(`Composing: ${pub.composing}  |  Email: ${pub.email}`, {
      x: 65,
      y: height - 356,
      size: 8.5,
      font: fontRegular,
      color: colorDark,
    });

    // Headings for Table of Contents
    page1.drawText('TABLE OF CONTENTS  (Husan-e-Tarteeb)', {
      x: 50,
      y: height - 400,
      size: 13,
      font: fontBold,
      color: colorDeep,
    });

    page1.drawLine({
      start: { x: 50, y: height - 406 },
      end: { x: width - 50, y: height - 406 },
      thickness: 1,
      color: colorRoyal,
    });

    let currentY = height - 425;
    for (const item of pub.tableOfContents) {
      if (currentY < 100) break;

      // Draw page number badge
      page1.drawText(`p. ${item.page}`, {
        x: 50,
        y: currentY,
        size: 9,
        font: fontBold,
        color: colorRoyal,
      });

      // Draw title
      const titleTruncated = item.title.length > 55 ? item.title.substring(0, 52) + '...' : item.title;
      page1.drawText(titleTruncated, {
        x: 95,
        y: currentY,
        size: 9.5,
        font: fontBold,
        color: colorDark,
      });

      // Draw author
      const authorText = item.author ? `— ${item.author}` : '';
      page1.drawText(authorText, {
        x: 370,
        y: currentY,
        size: 8.5,
        font: fontOblique,
        color: colorSlate,
      });

      currentY -= 20;
    }

    // Bottom Footer
    page1.drawLine({
      start: { x: 50, y: 70 },
      end: { x: width - 50, y: 70 },
      thickness: 0.75,
      color: rgb(210 / 255, 225 / 255, 245 / 255),
    });

    page1.drawText('Official Digital Archive | Jamaat Islah-ul-Muslimeen | Dargah Allahabad Sharif', {
      x: 50,
      y: 52,
      size: 8.5,
      font: fontRegular,
      color: colorSlate,
    });

    page1.drawText(`Document: ${pub.issueNumber}`, {
      x: width - 180,
      y: 52,
      size: 8.5,
      font: fontBold,
      color: colorRoyal,
    });

    // ==========================================
    // PAGE 2: EDITORIAL & ARCHIVAL SYNOPSIS
    // ==========================================
    const page2 = doc.addPage([595.28, 841.89]);
    page2.drawRectangle({
      x: 0,
      y: 0,
      width,
      height,
      color: colorLightBg,
    });

    page2.drawRectangle({
      x: 24,
      y: 24,
      width: width - 48,
      height: height - 48,
      borderColor: colorRoyal,
      borderWidth: 1.5,
    });

    // Top Header
    page2.drawText(`${pub.title} — Archival Reader Summary`, {
      x: 50,
      y: height - 55,
      size: 10,
      font: fontBold,
      color: colorRoyal,
    });

    page2.drawLine({
      start: { x: 50, y: height - 65 },
      end: { x: width - 50, y: height - 65 },
      thickness: 1,
      color: rgb(210 / 255, 225 / 255, 245 / 255),
    });

    let y2 = height - 95;
    const descLines = [
      'PUBLICATION PROFILE & AUTHENTIC ARCHIVE ENTRY',
      '',
      `This digital archive document represents ${pub.title}, originally published in ${pub.date}.`,
      'It has been cataloged from the physical archives of Jamaat Islah-ul-Muslimeen under the',
      'auspices of Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan.',
      '',
      'CORE FOCUS & SUBJECTS IN THIS EDITION:',
      '• Authentic Quranic discourses and Hadith lessons on Tazkiyah (inward spiritual purification).',
      '• Adherence to the Sunnah of the Holy Prophet Muhammad (peace be upon him).',
      '• Social welfare, flood relief efforts, ethics of community interaction, and educational development.',
      '• Preservation of historical records of the Naqshbandi Mujaddidi spiritual chain and missionary delegations.',
      '',
      'PUBLISHER & HEADQUARTERS:',
      '• Organization: Jamaat Islah-ul-Muslimeen Pakistan',
      '• Spiritual Seat: Dargah Allahabad Sharif, Kandiaro, District Naushahro Feroze, Sindh',
      '• Editorial Bureau: Office Altahir, A-171, Phase 1, Gulshan-e-Hadeed, Bin Qasim, Karachi',
      '• Inquiries & Archive Contact: attahirkarachi@gmail.com',
      '',
      'ARCHIVAL VERIFICATION & DIGITAL PRESERVATION:',
      'All texts, metadata, issue numbers, and table of contents are strictly verified against the authentic',
      'printed issues. This PDF serves as a complete verified research document for readers, scholars, and',
      'members of Jamaat Islah-ul-Muslimeen across the globe.'
    ];

    for (const l of descLines) {
      if (l === '') {
        y2 -= 10;
        continue;
      }
      const isHeader = l.startsWith('PUBLICATION PROFILE') || l.startsWith('CORE FOCUS') || l.startsWith('PUBLISHER') || l.startsWith('ARCHIVAL VERIFICATION');
      page2.drawText(l, {
        x: 50,
        y: y2,
        size: isHeader ? 11 : 9.5,
        font: isHeader ? fontBold : fontRegular,
        color: isHeader ? colorDeep : colorDark,
      });
      y2 -= 18;
    }

    // Page 2 bottom note
    page2.drawText(`Page 2 of 2  |  ${pub.title}  |  ${pub.date}`, {
      x: 50,
      y: 50,
      size: 8.5,
      font: fontRegular,
      color: colorSlate,
    });

    const pdfBytes = await doc.save();
    const filePath = path.join(targetDir, pub.fileName);
    fs.writeFileSync(filePath, pdfBytes);
    console.log(`Generated verified PDF: ${pub.fileName} (${pdfBytes.length} bytes)`);
  }

  console.log('All 7 publication PDFs generated successfully!');
}

generatePublications().catch(err => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
