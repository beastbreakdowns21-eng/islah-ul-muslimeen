import fs from 'fs';
import path from 'path';

const coversDir = path.join(process.cwd(), 'public', 'assets', 'publications', 'covers');
if (!fs.existsSync(coversDir)) {
  fs.mkdirSync(coversDir, { recursive: true });
}

// Generates SVG covers with exact typography, Arabic scripts, issue badges, and authentic visual compositions
const covers = [
  {
    fileName: 'cover-issue-77.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg77" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FAF5EF" />
          <stop offset="50%" stop-color="#F2E6D8" />
          <stop offset="100%" stop-color="#C25E34" />
        </linearGradient>
        <linearGradient id="banner77" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8A3E1B" />
          <stop offset="100%" stop-color="#B84D20" />
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="450" height="600" fill="url(#bg77)" />

      <!-- Top Quranic Motto Header Bar -->
      <rect x="15" y="15" width="420" height="32" rx="4" fill="url(#banner77)" />
      <text x="225" y="35" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="11" text-anchor="middle">میرا ارادہ صرف اصلاح کرنے کا ہے جہاں تک میرا بس ہے اور میری توفیق اللہ ہی کی طرف سے ہے۔ (القرآن)</text>

      <!-- Minaret & Green Dome Silhouette Art -->
      <path d="M 50 340 C 50 250, 160 250, 160 340 Z" fill="#2E7D32" opacity="0.9" />
      <rect x="95" y="240" width="20" height="25" fill="#C99700" />
      <circle cx="105" cy="235" r="5" fill="#C99700" />
      <!-- Minaret -->
      <rect x="42" y="160" width="24" height="180" fill="#E8F5E9" />
      <polygon points="42,160 54,120 66,160" fill="#C99700" />
      <circle cx="54" cy="115" r="4" fill="#C99700" />

      <!-- Decorative Right Border Geometric Band -->
      <g opacity="0.85">
        <rect x="360" y="60" width="75" height="520" fill="#7C2D12" />
        <path d="M 360 80 L 397 100 L 360 120 L 397 140 L 360 160 L 397 180 L 360 200 L 397 220 L 360 240 L 397 260 L 360 280 L 397 300 L 360 320 L 397 340 L 360 360 L 397 380 L 360 400 L 397 420 L 360 440 L 397 460 L 360 480 L 397 500 L 360 520 L 397 540 L 360 560" stroke="#FBBF24" stroke-width="2" fill="none" />
      </g>

      <!-- Official Masthead Box -->
      <rect x="230" y="60" width="195" height="85" rx="8" fill="#002FA7" stroke="#FFFFFF" stroke-width="2" />
      <text x="327" y="82" fill="#E2E8F0" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle" letter-spacing="1">Quarterly ATTAHIR</text>
      <text x="327" y="125" fill="#F8FAFC" font-family="'Noto Nastaliq Urdu', 'Scheherazade New', serif" font-weight="bold" font-size="34" text-anchor="middle">الطاہر</text>

      <!-- Issue & Date Cartouche -->
      <rect x="230" y="152" width="195" height="42" rx="6" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
      <circle cx="250" cy="173" r="14" fill="#CA8A04" />
      <text x="250" y="178" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">77</text>
      <text x="335" y="170" fill="#713F12" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="9.5" text-anchor="middle" font-weight="bold">محرم الحرام 1438ھ بمطابق اکتوبر 2016ء</text>
      <text x="335" y="186" fill="#854D0E" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Al-Tahir Issue 77 • October 2016</text>

      <!-- Calligraphy Medallion -->
      <g transform="translate(180, 200)">
        <circle cx="0" cy="0" r="45" fill="#CA8A04" opacity="0.9" />
        <circle cx="0" cy="0" r="40" fill="#854D0E" />
        <text x="0" y="6" fill="#FEF08A" font-family="'Noto Nastaliq Urdu', serif" font-size="16" text-anchor="middle">محمد رسول اللہ</text>
      </g>

      <!-- Bottom Publisher Tag -->
      <rect x="30" y="540" width="300" height="35" rx="6" fill="#FFFFFF" opacity="0.9" stroke="#CBD5E1" />
      <text x="180" y="555" fill="#12247A" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">AL-TAHIR PUBLICATION ARCHIVE</text>
      <text x="180" y="568" fill="#002FA7" font-family="sans-serif" font-size="8.5" text-anchor="middle">Jamaat Islah-ul-Muslimeen • Dargah Allahabad Sharif</text>
    </svg>`
  },
  {
    fileName: 'cover-issue-76.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg76" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2D1500" />
          <stop offset="40%" stop-color="#7C2D12" />
          <stop offset="80%" stop-color="#B45309" />
          <stop offset="100%" stop-color="#FDE68A" />
        </linearGradient>
      </defs>
      <!-- Background -->
      <rect width="450" height="600" fill="url(#bg76)" />

      <!-- Top Banner -->
      <rect x="15" y="15" width="420" height="32" rx="4" fill="#451A03" stroke="#FBBF24" stroke-width="1" />
      <text x="225" y="35" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="11" text-anchor="middle">میرا ارادہ صرف اصلاح کرنے کا ہے جہاں تک میرا بس ہے اور میری توفیق اللہ ہی کی طرف سے ہے۔ (القرآن)</text>

      <!-- Ramadan Lantern Visual Elements -->
      <g transform="translate(70, 180)">
        <line x1="0" y1="-100" x2="0" y2="0" stroke="#FDE68A" stroke-width="2" />
        <ellipse cx="0" cy="0" rx="20" ry="30" fill="#F59E0B" />
        <circle cx="0" cy="0" r="14" fill="#FEF3C7" />
        <polygon points="-15,25 15,25 0,55" fill="#D97706" />
      </g>

      <!-- Masthead Box -->
      <rect x="230" y="60" width="195" height="85" rx="8" fill="#002FA7" stroke="#FFFFFF" stroke-width="2" />
      <text x="327" y="82" fill="#E2E8F0" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle" letter-spacing="1">Quarterly ATTAHIR</text>
      <text x="327" y="125" fill="#F8FAFC" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="34" text-anchor="middle">الطاہر</text>

      <!-- Issue Cartouche -->
      <rect x="230" y="152" width="195" height="42" rx="6" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
      <circle cx="250" cy="173" r="14" fill="#CA8A04" />
      <text x="250" y="178" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">76</text>
      <text x="335" y="170" fill="#713F12" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="9.5" text-anchor="middle" font-weight="bold">رمضان المبارک 1437ھ بمطابق جون 2016ء</text>
      <text x="335" y="186" fill="#854D0E" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Al-Tahir Issue 76 • June 2016</text>

      <!-- Ramadan Kareem Calligraphy Display in Center -->
      <g transform="translate(225, 340)">
        <circle cx="0" cy="0" r="85" fill="#FFFFFF" opacity="0.15" />
        <circle cx="0" cy="0" r="75" fill="#FEF3C7" opacity="0.25" />
        <text x="0" y="15" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="44" text-anchor="middle">رمضان كريم</text>
      </g>

      <!-- Bottom Tag -->
      <rect x="40" y="535" width="370" height="40" rx="8" fill="#1E293B" opacity="0.9" stroke="#475569" />
      <text x="225" y="553" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle">AL-TAHIR ISSUE 76 — JUNE 2016</text>
      <text x="225" y="567" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Jamaat Islah-ul-Muslimeen • Dargah Allahabad Sharif</text>
    </svg>`
  },
  {
    fileName: 'cover-issue-64.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg64" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#451A03" />
          <stop offset="50%" stop-color="#78350F" />
          <stop offset="100%" stop-color="#B45309" />
        </linearGradient>
      </defs>
      <rect width="450" height="600" fill="url(#bg64)" />

      <!-- Top Banner -->
      <rect x="15" y="15" width="420" height="32" rx="4" fill="#292524" stroke="#D97706" stroke-width="1" />
      <text x="225" y="35" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="11" text-anchor="middle">میرا ارادہ صرف اصلاح کرنے کا ہے جہاں تک میرا بس ہے اور میری توفیق اللہ ہی کی طرف سے ہے۔ (القرآن)</text>

      <!-- Masthead -->
      <rect x="230" y="60" width="195" height="85" rx="8" fill="#002FA7" stroke="#FFFFFF" stroke-width="2" />
      <text x="327" y="82" fill="#E2E8F0" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle" letter-spacing="1">دو ماہی AT-TAHIR</text>
      <text x="327" y="125" fill="#F8FAFC" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="34" text-anchor="middle">الطاہر</text>

      <!-- Cartouche -->
      <rect x="230" y="152" width="195" height="42" rx="6" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5" />
      <circle cx="250" cy="173" r="14" fill="#CA8A04" />
      <text x="250" y="178" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">64</text>
      <text x="335" y="170" fill="#713F12" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="9.5" text-anchor="middle" font-weight="bold">ربیع الآخر 1433ھ بمطابق مارچ 2012ء</text>
      <text x="335" y="186" fill="#854D0E" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Al-Tahir Issue 64 • March 2012</text>

      <!-- Portrait Silhouette of Sheikh Sajjan Saeen -->
      <g transform="translate(180, 240)">
        <!-- Aura Circle -->
        <circle cx="45" cy="110" r="100" fill="#FEF3C7" opacity="0.2" />
        <!-- Turban & Silhouette -->
        <path d="M 0 110 C 0 30, 90 30, 90 110 C 90 140, 0 140, 0 110 Z" fill="#F8FAFC" opacity="0.95" />
        <ellipse cx="45" cy="110" rx="35" ry="45" fill="#FDBA74" />
        <!-- White Cloak / Shawl -->
        <path d="M -30 220 L 120 220 L 110 160 L -20 160 Z" fill="#FFFFFF" />
      </g>

      <!-- Bottom Tag -->
      <rect x="40" y="535" width="370" height="40" rx="8" fill="#0F172A" opacity="0.95" stroke="#334155" />
      <text x="225" y="553" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle">AL-TAHIR ISSUE 64 — MARCH 2012</text>
      <text x="225" y="567" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Special Urs Mubarak Edition • Dargah Allahabad Sharif</text>
    </svg>`
  },
  {
    fileName: 'cover-issue-63.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg63" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#450A0A" />
          <stop offset="60%" stop-color="#7F1D1D" />
          <stop offset="100%" stop-color="#B91C1C" />
        </linearGradient>
      </defs>
      <rect width="450" height="600" fill="url(#bg63)" />

      <!-- Top Banner -->
      <rect x="15" y="15" width="420" height="32" rx="4" fill="#1C1917" stroke="#EF4444" stroke-width="1" />
      <text x="225" y="35" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="11" text-anchor="middle">میرا ارادہ صرف اصلاح کرنے کا ہے جہاں تک میرا بس ہے اور میری توفیق اللہ ہی کی طرف سے ہے۔ (القرآن)</text>

      <!-- Masthead -->
      <rect x="230" y="60" width="195" height="85" rx="8" fill="#002FA7" stroke="#FFFFFF" stroke-width="2" />
      <text x="327" y="82" fill="#E2E8F0" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle" letter-spacing="1">دو ماہی ATTAHIR</text>
      <text x="327" y="125" fill="#F8FAFC" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="34" text-anchor="middle">الطاہر</text>

      <!-- Cartouche -->
      <rect x="230" y="152" width="195" height="42" rx="6" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
      <circle cx="250" cy="173" r="14" fill="#B91C1C" />
      <text x="250" y="178" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">63</text>
      <text x="335" y="170" fill="#713F12" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="9.5" text-anchor="middle" font-weight="bold">ذی الحج 1432ھ بمطابق نومبر 2011ء</text>
      <text x="335" y="186" fill="#854D0E" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Al-Tahir Issue 63 • November 2011</text>

      <!-- Calligraphic Allah Centerpiece -->
      <g transform="translate(225, 300)">
        <circle cx="0" cy="0" r="70" fill="#FEF08A" opacity="0.2" />
        <text x="0" y="18" fill="#FEF08A" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="48" text-anchor="middle">اللّٰہ</text>
      </g>

      <!-- Bottom Tag -->
      <rect x="40" y="535" width="370" height="40" rx="8" fill="#1E293B" opacity="0.9" stroke="#475569" />
      <text x="225" y="553" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle">AL-TAHIR ISSUE 63 — NOVEMBER 2011</text>
      <text x="225" y="567" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Special Edition • Jamaat Islah-ul-Muslimeen</text>
    </svg>`
  },
  {
    fileName: 'cover-issue-62.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <linearGradient id="bg62" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#701A75" />
          <stop offset="60%" stop-color="#4A044E" />
          <stop offset="100%" stop-color="#1E1B4B" />
        </linearGradient>
      </defs>
      <rect width="450" height="600" fill="url(#bg62)" />

      <!-- Top Banner -->
      <rect x="15" y="15" width="420" height="32" rx="4" fill="#3B0764" stroke="#E879F9" stroke-width="1" />
      <text x="225" y="35" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="11" text-anchor="middle">میرا ارادہ صرف اصلاح کرنے کا ہے جہاں تک میرا بس ہے اور میری توفیق اللہ ہی کی طرف سے ہے۔ (القرآن)</text>

      <!-- Masthead -->
      <rect x="230" y="60" width="195" height="85" rx="8" fill="#002FA7" stroke="#FFFFFF" stroke-width="2" />
      <text x="327" y="82" fill="#E2E8F0" font-family="sans-serif" font-weight="bold" font-size="11" text-anchor="middle" letter-spacing="1">دو ماہی AT-TAHIR</text>
      <text x="327" y="125" fill="#F8FAFC" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="34" text-anchor="middle">الطاہر</text>

      <!-- Cartouche -->
      <rect x="230" y="152" width="195" height="42" rx="6" fill="#FDE047" stroke="#CA8A04" stroke-width="1.5" />
      <circle cx="250" cy="173" r="14" fill="#86198F" />
      <text x="250" y="178" fill="#FFFFFF" font-family="sans-serif" font-weight="900" font-size="13" text-anchor="middle">62</text>
      <text x="335" y="170" fill="#713F12" font-family="'Noto Nastaliq Urdu', serif, Arial" font-size="9.5" text-anchor="middle" font-weight="bold">شعبان المعظم 1432ھ بمطابق جولائی 2011ء</text>
      <text x="335" y="186" fill="#854D0E" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="bold">Al-Tahir Issue 62 • July 2011</text>

      <!-- Ramadan Saeed Calligraphy Banner -->
      <g transform="translate(260, 360)">
        <ellipse cx="0" cy="0" rx="90" ry="45" fill="#FDF4FF" opacity="0.2" />
        <text x="0" y="12" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="38" text-anchor="middle">رمضان سعيد</text>
      </g>

      <!-- Bottom Tag -->
      <rect x="40" y="535" width="370" height="40" rx="8" fill="#0F172A" opacity="0.9" stroke="#334155" />
      <text x="225" y="553" fill="#F8FAFC" font-family="sans-serif" font-size="10.5" font-weight="bold" text-anchor="middle">AL-TAHIR ISSUE 62 — JULY 2011</text>
      <text x="225" y="567" fill="#94A3B8" font-family="sans-serif" font-size="9" text-anchor="middle">Jamaat Islah-ul-Muslimeen • Dargah Allahabad Sharif</text>
    </svg>`
  },
  {
    fileName: 'cover-series-1.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <radialGradient id="gradSeries1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#C29D59" />
          <stop offset="70%" stop-color="#8E6A2A" />
          <stop offset="100%" stop-color="#5E4314" />
        </radialGradient>
      </defs>
      <!-- Archival Texture Background -->
      <rect width="450" height="600" fill="url(#gradSeries1)" />

      <!-- Inner Border -->
      <rect x="20" y="20" width="410" height="560" fill="none" stroke="#FDE68A" stroke-width="2" opacity="0.6" />

      <!-- Top Quranic Verse -->
      <text x="225" y="55" fill="#FEF3C7" font-family="'Scheherazade New', serif" font-size="18" font-weight="bold" text-anchor="middle">قَدْ اَفْلَحَ مَنْ زَكّٰىهَا وَقَدْ خَابَ مَنْ دَسّٰىهَا</text>
      <text x="225" y="78" fill="#FDE68A" font-family="'Noto Nastaliq Urdu', serif" font-size="10" text-anchor="middle">تحقیق کامیاب ہوا جس نے اپنے نفس کو پاک کیا اور نامراد ہوا جس نے اسے خاک میں ملایا</text>

      <!-- Central Ornamental Medallion -->
      <g transform="translate(225, 270)">
        <!-- Outer floral ring -->
        <circle cx="0" cy="0" r="130" fill="#FFFFFF" opacity="0.9" />
        <!-- Intricate islamic rosette pattern approximation -->
        <circle cx="0" cy="0" r="118" fill="none" stroke="#8E6A2A" stroke-width="6" stroke-dasharray="8 6" />
        <circle cx="0" cy="0" r="95" fill="#781C28" />
        <!-- Series Badge inside medallion -->
        <ellipse cx="-45" cy="-45" rx="20" ry="14" fill="#C29D59" />
        <text x="-45" y="-40" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-size="9" text-anchor="middle">سلسلہ نمبر 1</text>
        <!-- Large Masthead -->
        <text x="0" y="25" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="62" text-anchor="middle">الطاہر</text>
      </g>

      <!-- Publication Subtitle -->
      <rect x="100" y="440" width="250" height="38" rx="6" fill="#781C28" stroke="#FDE68A" stroke-width="1.5" />
      <text x="225" y="464" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-size="16" text-anchor="middle">شعبۂ نشر و اشاعت</text>

      <!-- Bottom Organization Title -->
      <text x="225" y="520" fill="#FEF3C7" font-family="'Noto Nastaliq Urdu', serif" font-size="22" font-weight="bold" text-anchor="middle">روحانی طلبہ جماعت پاکستان</text>
      <text x="225" y="555" fill="#FDE68A" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">ALTAHIR SERIES 1 — OCTOBER 1985</text>
    </svg>`
  },
  {
    fileName: 'cover-series-2.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 600" width="100%" height="100%">
      <defs>
        <radialGradient id="gradSeries2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#166534" />
          <stop offset="70%" stop-color="#14532D" />
          <stop offset="100%" stop-color="#052E16" />
        </radialGradient>
      </defs>
      <!-- Archival Green Background -->
      <rect width="450" height="600" fill="url(#gradSeries2)" />

      <!-- Inner Border -->
      <rect x="20" y="20" width="410" height="560" fill="none" stroke="#86EFAC" stroke-width="2" opacity="0.6" />

      <!-- Top Quranic Verse -->
      <text x="225" y="55" fill="#DCFCE7" font-family="'Scheherazade New', serif" font-size="18" font-weight="bold" text-anchor="middle">قَدْ اَفْلَحَ مَنْ زَكّٰىهَا وَقَدْ خَابَ مَنْ دَسّٰىهَا</text>
      <text x="225" y="78" fill="#BBF7D0" font-family="'Noto Nastaliq Urdu', serif" font-size="10" text-anchor="middle">تحقیق کامیاب ہوا جس نے اپنے نفس کو پاک کیا اور نامراد ہوا جس نے اسے خاک میں ملایا</text>

      <!-- Central Ornamental Medallion -->
      <g transform="translate(225, 270)">
        <circle cx="0" cy="0" r="130" fill="#FFFFFF" opacity="0.95" />
        <circle cx="0" cy="0" r="118" fill="none" stroke="#15803D" stroke-width="6" stroke-dasharray="8 6" />
        <circle cx="0" cy="0" r="95" fill="#1E3A8A" />
        <!-- Series Badge -->
        <ellipse cx="-45" cy="-45" rx="20" ry="14" fill="#22C55E" />
        <text x="-45" y="-40" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-size="9" text-anchor="middle">سلسلہ نمبر 2</text>
        <!-- Large Masthead -->
        <text x="0" y="25" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-weight="bold" font-size="62" text-anchor="middle">الطاہر</text>
      </g>

      <!-- Publication Subtitle -->
      <rect x="100" y="440" width="250" height="38" rx="6" fill="#1E3A8A" stroke="#86EFAC" stroke-width="1.5" />
      <text x="225" y="464" fill="#FFFFFF" font-family="'Noto Nastaliq Urdu', serif" font-size="16" text-anchor="middle">شعبۂ نشر و اشاعت</text>

      <!-- Bottom Organization Title -->
      <text x="225" y="520" fill="#DCFCE7" font-family="'Noto Nastaliq Urdu', serif" font-size="22" font-weight="bold" text-anchor="middle">روحانی طلبہ جماعت پاکستان</text>
      <text x="225" y="555" fill="#86EFAC" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" letter-spacing="1">ALTAHIR SERIES 2 — JANUARY 1986</text>
    </svg>`
  }
];

for (const c of covers) {
  const filePath = path.join(coversDir, c.fileName);
  fs.writeFileSync(filePath, c.svg.trim());
  console.log(`Wrote cover asset: ${c.fileName}`);
}
console.log('All 7 covers created successfully!');
