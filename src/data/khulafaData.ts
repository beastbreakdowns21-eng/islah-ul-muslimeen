/**
 * ============================================================================
 * AUTHENTIC KHULAFA-E-KARAM DIRECTORY DATA
 * ============================================================================
 * Primary authoritative source:
 * https://www.islahulmuslimeen.org/urdu/shaikh/khulafa.htm
 *
 * Official Directory of Authorized Deputies and Khulafa-e-Karam of
 * Hazrat Khwaja Muhammad Tahir Bakhshi Naqshbandi (Hazrat Sajjan Saeen)
 * Silsila Aaliya Naqshbandia Mujaddidia Tahiriya, Jamaat Islah-ul-Muslimeen.
 *
 * Preserves exact verbatim Urdu text, honorifics, recorded dates, locations,
 * district groupings, and verified profile references.
 */

export interface KhulafaItem {
  id: string;
  rawText: string;
  nameUrdu: string;
  locationUrdu: string;
  notesUrdu?: string;
  profileLink?: string;
  isDeceased: boolean;
}

export interface KhulafaDistrict {
  districtUrdu: string;
  districtEn: string;
  items: KhulafaItem[];
}

export interface KhulafaRegion {
  regionId: 'sindh' | 'punjab' | 'balochistan' | 'khyber_pakhtunkhwa' | 'azad_kashmir' | 'overseas' | 'deceased';
  regionTitleUrdu: string;
  regionTitleEn: string;
  regionTitleAr: string;
  districts: KhulafaDistrict[];
  commentedItems?: string[];
}

export const KHULAFA_REGIONS_DATA: KhulafaRegion[] = [
  {
    "regionId": "sindh",
    "regionTitleUrdu": "خلفاء کرام صوبہ سندھ",
    "regionTitleEn": "Khulafa-e-Karam (Sindh Province)",
    "regionTitleAr": "الخلفاء الكرام - إقليم السند",
    "districts": [
      {
        "districtUrdu": "ضلع بدین",
        "districtEn": "Badin",
        "items": [
          {
            "id": "kh-sindh-1-1",
            "rawText": "محترم خلیفہ محمد اسماعیل کلہوڑو طاہری (ماتلی، ضلع بدین)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل کلہوڑو طاہری",
            "locationUrdu": "ماتلی، ضلع بدین",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-2",
            "rawText": "محترم خلیفہ سید بقادار شاہ طاہری (ماتلی، ضلع بدین)",
            "nameUrdu": "محترم خلیفہ سید بقادار شاہ طاہری",
            "locationUrdu": "ماتلی، ضلع بدین",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-3",
            "rawText": "محترم خلیفہ مولانا جان محمد جت طاہری (ماتلی، ضلع بدین، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مولانا جان محمد جت طاہری",
            "locationUrdu": "ماتلی، ضلع بدین، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-4",
            "rawText": "محترم خلیفہ جمیل حسین کشمیری طاہری (کشمیری محلہ، ماتلی، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ جمیل حسین کشمیری طاہری",
            "locationUrdu": "کشمیری محلہ، ماتلی، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-5",
            "rawText": "محترم خلیفہ قاری مولانا خادم حسین چانڈیو طاہری (بدین) (فرزند خلیفہ محمد ایوب چانڈیو رحمۃ اللہ تعالیٰ علیہ)",
            "nameUrdu": "محترم خلیفہ قاری مولانا خادم حسین چانڈیو طاہری",
            "locationUrdu": "بدین",
            "notesUrdu": "(فرزند خلیفہ محمد ایوب چانڈیو رحمۃ اللہ تعالیٰ علیہ)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-6",
            "rawText": "محترم خلیفہ رحیم بخش خاصخیلی طاہری (بدین روڈ، ماتلی، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ رحیم بخش خاصخیلی طاہری",
            "locationUrdu": "بدین روڈ، ماتلی، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-7",
            "rawText": "محترم خلیفہ عبدالستار جت طاہری (ماتلی، ضلع بدین)",
            "nameUrdu": "محترم خلیفہ عبدالستار جت طاہری",
            "locationUrdu": "ماتلی، ضلع بدین",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-8",
            "rawText": "محترم خلیفہ عبدالستار راجپوت طاہری (ماتلی، ضلع بدین سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ عبدالستار راجپوت طاہری",
            "locationUrdu": "ماتلی، ضلع بدین سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-9",
            "rawText": "خلیفہ محترم مشکور علی بوزدار طاہری (گوٹھ کمال خان بوزدار، نزد ٹنڈو غلام علی، ضلع بدین، سن خلافت 2012)",
            "nameUrdu": "خلیفہ محترم مشکور علی بوزدار طاہری",
            "locationUrdu": "گوٹھ کمال خان بوزدار، نزد ٹنڈو غلام علی، ضلع بدین، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-10",
            "rawText": "محترم خلیفہ ڈاکٹر منور حسین بھرگڑی طاہری (ماتلی، ضلع بدین)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر منور حسین بھرگڑی طاہری",
            "locationUrdu": "ماتلی، ضلع بدین",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-1-11",
            "rawText": "محترم خلیفہ نور احمد کھتری طاہری (ماتلی، ضلع بدین)",
            "nameUrdu": "محترم خلیفہ نور احمد کھتری طاہری",
            "locationUrdu": "ماتلی، ضلع بدین",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ٹنڈو الہیار",
        "districtEn": "Tando Allahyar",
        "items": [
          {
            "id": "kh-sindh-2-1",
            "rawText": "محترم خلیفہ محمد رمضان مغل طاہری (ٹنڈوالہیار، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد رمضان مغل طاہری",
            "locationUrdu": "ٹنڈوالہیار، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-2-2",
            "rawText": "محترم خلیفہ عبدالغفور کمبوہ طاہری (ٹنڈو الہیار، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ عبدالغفور کمبوہ طاہری",
            "locationUrdu": "ٹنڈو الہیار، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-2-3",
            "rawText": "محترم خلیفہ مولانا غلام مصطفیٰ بوزدار طاہری (طاہر آباد شریف، ضلع ٹنڈوالہیار) (فرزند خلیفہ محمد علی بوزدار رحمۃ اللہ تعالیٰ علیہ)",
            "nameUrdu": "محترم خلیفہ مولانا غلام مصطفیٰ بوزدار طاہری",
            "locationUrdu": "طاہر آباد شریف، ضلع ٹنڈوالہیار",
            "notesUrdu": "(فرزند خلیفہ محمد علی بوزدار رحمۃ اللہ تعالیٰ علیہ)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-2-4",
            "rawText": "محترم خلیفہ نور علی بوزدار طاہری (ضلع ٹنڈوالہیار)",
            "nameUrdu": "محترم خلیفہ نور علی بوزدار طاہری",
            "locationUrdu": "ضلع ٹنڈوالہیار",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ٹنڈو محمد خان",
        "districtEn": "Tando Muhammad Khan",
        "items": [
          {
            "id": "kh-sindh-3-1",
            "rawText": "مولانا محمد عیسیٰ کھٹی طاہری (ٹنڈو محمد خان سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "مولانا محمد عیسیٰ کھٹی طاہری",
            "locationUrdu": "ٹنڈو محمد خان سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ٹھٹہ",
        "districtEn": "Thatta",
        "items": [
          {
            "id": "kh-sindh-4-1",
            "rawText": "محترم خلیفہ عبدالحنان جوکھیو طاہری (مال ماڑی، ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ عبدالحنان جوکھیو طاہری",
            "locationUrdu": "مال ماڑی، ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-2",
            "rawText": "محترم خلیفہ امیر محمد جوکھیو طاہری (دھابیجی، ضلع ٹھٹہ)",
            "nameUrdu": "محترم خلیفہ امیر محمد جوکھیو طاہری",
            "locationUrdu": "دھابیجی، ضلع ٹھٹہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-3",
            "rawText": "محترم خلیفہ حضور علی جوکھیو طاہری (مال ماڑی، ضلع ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ حضور علی جوکھیو طاہری",
            "locationUrdu": "مال ماڑی، ضلع ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-4",
            "rawText": "محترم خلیفہ محمد شریف کرمتی بلوچ طاہری (تعلقہ میرپور ساکرو، ضلع ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ محمد شریف کرمتی بلوچ طاہری",
            "locationUrdu": "تعلقہ میرپور ساکرو، ضلع ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-5",
            "rawText": "محترم خلیفہ محمد عالم جت بخشی طاہری (گھوڑاباری، ضلع ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ محمد عالم جت بخشی طاہری",
            "locationUrdu": "گھوڑاباری، ضلع ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-6",
            "rawText": "محترم خلیفہ ڈاکٹر عبدالکریم جوکھیو طاہری (ٹھٹہ، سندھ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر عبدالکریم جوکھیو طاہری",
            "locationUrdu": "ٹھٹہ، سندھ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-7",
            "rawText": "محترم خلیفہ غلام شبیر عباسی طاہری (ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ غلام شبیر عباسی طاہری",
            "locationUrdu": "ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-4-8",
            "rawText": "محترم خلیفہ محمد محسن پلیجو طاہری (شاعر ہیں، بہارا، تعلقہ میرپور ساکرو، ضلع ٹھٹھہ)",
            "nameUrdu": "محترم خلیفہ محمد محسن پلیجو طاہری",
            "locationUrdu": "شاعر ہیں، بہارا، تعلقہ میرپور ساکرو، ضلع ٹھٹھہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع جامشورو",
        "districtEn": "Jamshoro",
        "items": [
          {
            "id": "kh-sindh-5-1",
            "rawText": "محترم خلیفہ ڈاکٹر اختر حسین شورو طاہری (گوٹھ قادن شورو، ضلع جامشورو، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر اختر حسین شورو طاہری",
            "locationUrdu": "گوٹھ قادن شورو، ضلع جامشورو، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-2",
            "rawText": "محترم خلیفہ محمد اسماعیل ڈیتھو طاہری (گوٹھ بختیارپور، ضلع جامشورو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل ڈیتھو طاہری",
            "locationUrdu": "گوٹھ بختیارپور، ضلع جامشورو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-3",
            "rawText": "محترم خلیفہ محمد اشرف عباسی طاہری (کوٹری، ضلع جامشورو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد اشرف عباسی طاہری",
            "locationUrdu": "کوٹری، ضلع جامشورو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-4",
            "rawText": "محترم خلیفہ مولانا حبیب احمد سومرو طاہری (خانزادہ کالونی، جامشورو، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مولانا حبیب احمد سومرو طاہری",
            "locationUrdu": "خانزادہ کالونی، جامشورو، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-5",
            "rawText": "محترم خلیفہ دیدار علی بھٹی طاہری (جامشورو)",
            "nameUrdu": "محترم خلیفہ دیدار علی بھٹی طاہری",
            "locationUrdu": "جامشورو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-6",
            "rawText": "محترم خلیفہ محمد سعید اُنڑ طاہری (علی آباد، تعلقہ مانجھند، ضلع جامشورو)",
            "nameUrdu": "محترم خلیفہ محمد سعید اُنڑ طاہری",
            "locationUrdu": "علی آباد، تعلقہ مانجھند، ضلع جامشورو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-7",
            "rawText": "محترم خلیفہ ڈاکٹر شبیر احمد طاہری (سندھ یونیورسٹی کالونی، جامشورو، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر شبیر احمد طاہری",
            "locationUrdu": "سندھ یونیورسٹی کالونی، جامشورو، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-8",
            "rawText": "محترم خلیفہ عبدالرحیم طاہری (بئراج کالونی، جامشورو، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ عبدالرحیم طاہری",
            "locationUrdu": "بئراج کالونی، جامشورو، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-9",
            "rawText": "محترم خلیفہ عبدالشکور شیخ طاہری (جامشورو، سندھ)",
            "nameUrdu": "محترم خلیفہ عبدالشکور شیخ طاہری",
            "locationUrdu": "جامشورو، سندھ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-10",
            "rawText": "محترم خلیفہ عبدالقیوم قریشی طاہری (جامشورو سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ عبدالقیوم قریشی طاہری",
            "locationUrdu": "جامشورو سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-11",
            "rawText": "محترم خلیفہ عبداللہ طالبانی طاہری (کوٹری، ضلع جامشورو، سن خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ عبداللہ طالبانی طاہری",
            "locationUrdu": "کوٹری، ضلع جامشورو، سن خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-12",
            "rawText": "محترم خلیفہ قاری عبیداللہ لاکھو طاہری (کوٹری، ضلع جامشورو، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ قاری عبیداللہ لاکھو طاہری",
            "locationUrdu": "کوٹری، ضلع جامشورو، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-13",
            "rawText": "محترم خلیفہ لیاقت علی بھٹی طاہری (لکی شاہ صدر، جامشورو، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ لیاقت علی بھٹی طاہری",
            "locationUrdu": "لکی شاہ صدر، جامشورو، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-14",
            "rawText": "محترم خلیفہ محمد محمود کاچھیلو طاہری (نزد کیڈٹ کالج پٹارو، ضلع جامشورو)",
            "nameUrdu": "محترم خلیفہ محمد محمود کاچھیلو طاہری",
            "locationUrdu": "نزد کیڈٹ کالج پٹارو، ضلع جامشورو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-5-15",
            "rawText": "محترم خلیفہ محمد مراد جمالی طاہری (کوٹری، ضلع جامشورو)",
            "nameUrdu": "محترم خلیفہ محمد مراد جمالی طاہری",
            "locationUrdu": "کوٹری، ضلع جامشورو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع جیکب آباد",
        "districtEn": "Jacobabad",
        "items": [
          {
            "id": "kh-sindh-6-1",
            "rawText": "محترم خلیفہ سید محمد جیئل شاہ صاحب بخشی طاہری (جیکب آباد)",
            "nameUrdu": "محترم خلیفہ سید محمد جیئل شاہ صاحب بخشی طاہری",
            "locationUrdu": "جیکب آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-6-2",
            "rawText": "محترم خلیفہ عبدالغفار کیہر طاہری (سومرا محلہ، جیکب آباد، خلافت 6 جنوری 2013)",
            "nameUrdu": "محترم خلیفہ عبدالغفار کیہر طاہری",
            "locationUrdu": "سومرا محلہ، جیکب آباد، خلافت 6 جنوری 2013",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-6-3",
            "rawText": "محترم خلیفہ عبدالواحد سبھایو طاہری (جیکب آباد)",
            "nameUrdu": "محترم خلیفہ عبدالواحد سبھایو طاہری",
            "locationUrdu": "جیکب آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-6-4",
            "rawText": "محترم خلیفہ فاروق احمد لغاری طاہری (گڑھی خیرو، ضلع جیکب آباد)",
            "nameUrdu": "محترم خلیفہ فاروق احمد لغاری طاہری",
            "locationUrdu": "گڑھی خیرو، ضلع جیکب آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع حیدرآباد",
        "districtEn": "Hyderabad",
        "items": [
          {
            "id": "kh-sindh-7-1",
            "rawText": "محترم خلیفہ محمد اعظم بروہی طاہری (قاسم آباد، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ محمد اعظم بروہی طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-2",
            "rawText": "محترم خلیفہ محمد اسلم پٹھان طاہری (لطیف آباد، حیدرآباد، سن خلافت 2002)",
            "nameUrdu": "محترم خلیفہ محمد اسلم پٹھان طاہری",
            "locationUrdu": "لطیف آباد، حیدرآباد، سن خلافت 2002",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-3",
            "rawText": "محترم خلیفہ محمد اسماعیل ٹنگڑی بلوچ طاہری (نزد ٹنڈو حیدر، ضلع حیدرآباد)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل ٹنگڑی بلوچ طاہری",
            "locationUrdu": "نزد ٹنڈو حیدر، ضلع حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-4",
            "rawText": "محترم خلیفہ سید محمد جمیل طاہری (اسٹیشن روڈ، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ سید محمد جمیل طاہری",
            "locationUrdu": "اسٹیشن روڈ، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-5",
            "rawText": "محترم خلیفہ حبیب الحسن قریشی طاہری (نائن جو پیر، حیدرآباد، سن خلافت 2002)",
            "nameUrdu": "محترم خلیفہ حبیب الحسن قریشی طاہری",
            "locationUrdu": "نائن جو پیر، حیدرآباد، سن خلافت 2002",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-6",
            "rawText": "محترم خلیفہ مولانا محمد حسن راجپر طاہری (جی او آر کالونی، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ مولانا محمد حسن راجپر طاہری",
            "locationUrdu": "جی او آر کالونی، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-7",
            "rawText": "محترم خلیفہ سید خالد محمود طاہری (لطیف آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ سید خالد محمود طاہری",
            "locationUrdu": "لطیف آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-8",
            "rawText": "محترم خلیفہ مولانا قاری خلیل الرحمان طاہری (حسین آباد، حیدرآباد) (فرزند خلیفہ مفتی عبدالرحمان اللہ آبادی صاحب)",
            "nameUrdu": "محترم خلیفہ مولانا قاری خلیل الرحمان طاہری",
            "locationUrdu": "حسین آباد، حیدرآباد",
            "notesUrdu": "(فرزند خلیفہ مفتی عبدالرحمان اللہ آبادی صاحب)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-9",
            "rawText": "محترم خلیفہ محمد رفیق میمن طاہری (بھونگا لین، حیدرآباد، سن خلافت 2002)",
            "nameUrdu": "محترم خلیفہ محمد رفیق میمن طاہری",
            "locationUrdu": "بھونگا لین، حیدرآباد، سن خلافت 2002",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-10",
            "rawText": "محترم خلیفہ شیر دین طاہری (لطیف آباد، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ شیر دین طاہری",
            "locationUrdu": "لطیف آباد، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-11",
            "rawText": "محترم خلیفہ محمد صدیق راہوجا طاہری (قاسم آباد، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ محمد صدیق راہوجا طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-12",
            "rawText": "محترم خلیفہ طفیل احمد سیال طاہری (حسین آباد، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ طفیل احمد سیال طاہری",
            "locationUrdu": "حسین آباد، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-13",
            "rawText": "محترم خلیفہ قاضی ظہور اللہ طاہری (قاسم آباد، حیدرآباد، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ قاضی ظہور اللہ طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-14",
            "rawText": "محترم خلیفہ ڈاکٹر عبدالحمید میمن طاہری (قاسم آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر عبدالحمید میمن طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-15",
            "rawText": "محترم خلیفہ عبدالخالق (خالد مغل صاحب) بخشی طاہری (حیدرآباد، سن خلافت 1980ء)",
            "nameUrdu": "محترم خلیفہ عبدالخالق",
            "locationUrdu": "خالد مغل صاحب",
            "notesUrdu": "بخشی طاہری (حیدرآباد، سن خلافت 1980ء)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-16",
            "rawText": "محترم خلیفہ مولانا عبدالخالق چاچڑ طاہری (صدر، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ مولانا عبدالخالق چاچڑ طاہری",
            "locationUrdu": "صدر، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-17",
            "rawText": "محترم خلیفہ عبدالرشید گھانچی (حیدرآباد، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ عبدالرشید گھانچی",
            "locationUrdu": "حیدرآباد، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-18",
            "rawText": "محترم خلیفہ حاجی علی اکبر ملک طاہری (محمدی ٹاؤن، نزد فردوس کالونی، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ حاجی علی اکبر ملک طاہری",
            "locationUrdu": "محمدی ٹاؤن، نزد فردوس کالونی، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-19",
            "rawText": "محترم خلیفہ علی شیر شیخ طاہری (قاسم آباد، حیدرآباد، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ علی شیر شیخ طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-20",
            "rawText": "محترم خلیفہ غضنفر علی جوکھیو طاہری (قاسم آباد، حیدرآباد، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ غضنفر علی جوکھیو طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-21",
            "rawText": "محترم خلیفہ مولانا غلام حیدر لاکھو طاہری (نسیم نگر، قاسم آباد، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ مولانا غلام حیدر لاکھو طاہری",
            "locationUrdu": "نسیم نگر، قاسم آباد، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-22",
            "rawText": "محترم خلیفہ فرحت علی طاہری (لطیف آباد 9، حیدرآباد، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ فرحت علی طاہری",
            "locationUrdu": "لطیف آباد 9، حیدرآباد، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-23",
            "rawText": "محترم خلیفہ فضل الدین میمن طاہری (ہالا، ضلع مٹیاری، حالیہ رہائش حیدرآباد)",
            "nameUrdu": "محترم خلیفہ فضل الدین میمن طاہری",
            "locationUrdu": "ہالا، ضلع مٹیاری، حالیہ رہائش حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-24",
            "rawText": "محترم خلیفہ فیاض احمد طاہری (عثمان آباد، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ فیاض احمد طاہری",
            "locationUrdu": "عثمان آباد، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-25",
            "rawText": "محترم خلیفہ محمد قاسم صدیقی طاہری (الیاس آباد، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ محمد قاسم صدیقی طاہری",
            "locationUrdu": "الیاس آباد، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-26",
            "rawText": "محترم خلیفہ مولانا محمد کاشف انصاری طاہری (حیدرآباد) (فرزند خلیفہ نسیم احمد صاحب)",
            "nameUrdu": "محترم خلیفہ مولانا محمد کاشف انصاری طاہری",
            "locationUrdu": "حیدرآباد",
            "notesUrdu": "(فرزند خلیفہ نسیم احمد صاحب)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-27",
            "rawText": "محترم خلیفہ ڈاکٹر گل حسن شیخ طاہری (لاڑکانہ، حالیہ رہائش حیدرآباد)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر گل حسن شیخ طاہری",
            "locationUrdu": "لاڑکانہ، حالیہ رہائش حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-28",
            "rawText": "محترم خلیفہ محبوب علی (چنے والے) طاہری (حیدرآباد، سنِ خلافت 1999ء)",
            "nameUrdu": "محترم خلیفہ محبوب علی",
            "locationUrdu": "چنے والے",
            "notesUrdu": "طاہری (حیدرآباد، سنِ خلافت 1999ء)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-29",
            "rawText": "محترم خلیفہ مولوی محمد علی شیخ حنفی طاہری (حیدرآباد سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولوی محمد علی شیخ حنفی طاہری",
            "locationUrdu": "حیدرآباد سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-30",
            "rawText": "محترم خلیفہ محمد علی میمن طاہری (قاسم آباد، حیدرآباد، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ محمد علی میمن طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-31",
            "rawText": "محترم خلیفہ محمود الحسن مری بلوچ بخشی طاہری (چُکھی، تعلقہ و ضلع حیدرآباد)",
            "nameUrdu": "محترم خلیفہ محمود الحسن مری بلوچ بخشی طاہری",
            "locationUrdu": "چُکھی، تعلقہ و ضلع حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-32",
            "rawText": "محترم خلیفہ مختار احمد کھوکھر طاہری (لطیف آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مختار احمد کھوکھر طاہری",
            "locationUrdu": "لطیف آباد، حیدرآباد سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-33",
            "rawText": "محترم خلیفہ قاری محمد مسعود لاکھو طاہری (قاسم آباد، حیدرآباد، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ قاری محمد مسعود لاکھو طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-34",
            "rawText": "محترم خلیفہ مظہر حسین چنہ طاہری (لطیف آباد، حیدرآباد)",
            "nameUrdu": "محترم خلیفہ مظہر حسین چنہ طاہری",
            "locationUrdu": "لطیف آباد، حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-35",
            "rawText": "محترم خلیفہ نثار احمد صدیقی طاہری (قاسم آباد، حیدرآباد، سنِ خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ نثار احمد صدیقی طاہری",
            "locationUrdu": "قاسم آباد، حیدرآباد، سنِ خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-36",
            "rawText": "محترم خلیفہ نسیم احمد انصاری بخشی طاہری (حیدرآباد، سنِ خلافت 1982ء)",
            "nameUrdu": "محترم خلیفہ نسیم احمد انصاری بخشی طاہری",
            "locationUrdu": "حیدرآباد، سنِ خلافت 1982ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-7-37",
            "rawText": "محترم خلیفہ سید واحد علی شاہ طاہری (حیدرآباد)",
            "nameUrdu": "محترم خلیفہ سید واحد علی شاہ طاہری",
            "locationUrdu": "حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع خیرپور",
        "districtEn": "Khairpur",
        "items": [
          {
            "id": "kh-sindh-8-1",
            "rawText": "محترم خلیفہ مولانا احمد بخش گِلال طاہری (ہنگورجہ، ضلع خیرپور میرس، سن خلافت 1995)",
            "nameUrdu": "محترم خلیفہ مولانا احمد بخش گِلال طاہری",
            "locationUrdu": "ہنگورجہ، ضلع خیرپور میرس، سن خلافت 1995",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-2",
            "rawText": "محترم خلیفہ خالد حسین راجپر طاہری (پیر وَسن، تحصیل ٹھری میرواہ، ضلع خیرپور، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ خالد حسین راجپر طاہری",
            "locationUrdu": "پیر وَسن، تحصیل ٹھری میرواہ، ضلع خیرپور، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-3",
            "rawText": "محترم خلیفہ خان محمد برڑو بخشی طاہری (کوٹڈیجی، ضلع خیرپور میرس، سن خلافت 1980)",
            "nameUrdu": "محترم خلیفہ خان محمد برڑو بخشی طاہری",
            "locationUrdu": "کوٹڈیجی، ضلع خیرپور میرس، سن خلافت 1980",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-4",
            "rawText": "محترم خلیفہ رحمت اللہ راجپر طاہری (کنب، ضلع خیرپور میرس، سن خلافت 1998)",
            "nameUrdu": "محترم خلیفہ رحمت اللہ راجپر طاہری",
            "locationUrdu": "کنب، ضلع خیرپور میرس، سن خلافت 1998",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-5",
            "rawText": "محترم خلیفہ رحیم بخش کٹوہر طاہری (خیرپور میرس، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ رحیم بخش کٹوہر طاہری",
            "locationUrdu": "خیرپور میرس، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-6",
            "rawText": "محترم خلیفہ عبدالقادر بھیو طاہری (رانی پور، ضلع خیرپور میرس، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ عبدالقادر بھیو طاہری",
            "locationUrdu": "رانی پور، ضلع خیرپور میرس، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-7",
            "rawText": "محترم خلیفہ غلام حیدر بروہی طاہری (کنب، تحصیل کوٹ ڈیجی، ضلع خیرپور، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ غلام حیدر بروہی طاہری",
            "locationUrdu": "کنب، تحصیل کوٹ ڈیجی، ضلع خیرپور، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-8",
            "rawText": "محترم خلیفہ قادر بخش راجپر طاہری (گوٹھ حاجی خان راجپر، نزد پکا چانگ، تحصیل فیض گنج، ضلع خیرپور، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ قادر بخش راجپر طاہری",
            "locationUrdu": "گوٹھ حاجی خان راجپر، نزد پکا چانگ، تحصیل فیض گنج، ضلع خیرپور، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-9",
            "rawText": "محترم خلیفہ حافظ مشتاق علی سیال طاہری (میمن محلہ، گمبٹ، ضلع خیرپور، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ حافظ مشتاق علی سیال طاہری",
            "locationUrdu": "میمن محلہ، گمبٹ، ضلع خیرپور، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-10",
            "rawText": "محترم خلیفہ منور علی عباسی طاہری (سوبھو دیرو، ضلع خیرپور میرس، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ منور علی عباسی طاہری",
            "locationUrdu": "سوبھو دیرو، ضلع خیرپور میرس، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-11",
            "rawText": "محترم خلیفہ محمد ندیم طاہری (کوٹ بنگلو، تحصیل کوٹ ڈیجی، ضلع خیرپور، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ محمد ندیم طاہری",
            "locationUrdu": "کوٹ بنگلو، تحصیل کوٹ ڈیجی، ضلع خیرپور، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-12",
            "rawText": "محترم خلیفہ محمد یعقوب شر بلوچ طاہری (ٹھری میرواہ، ضلع خیرپور میرس)",
            "nameUrdu": "محترم خلیفہ محمد یعقوب شر بلوچ طاہری",
            "locationUrdu": "ٹھری میرواہ، ضلع خیرپور میرس",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-8-13",
            "rawText": "محترم خلیفہ مولانا محمد یوسف شر بلوچ طاہری (فضل آباد، ٹھری میرواہ، ضلع خیرپور میرس سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا محمد یوسف شر بلوچ طاہری",
            "locationUrdu": "فضل آباد، ٹھری میرواہ، ضلع خیرپور میرس سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع دادو",
        "districtEn": "Dadu",
        "items": [
          {
            "id": "kh-sindh-9-1",
            "rawText": "محترم خلیفہ مولانا ارشاد اللہ مہیسر طاہری (تحصیل میہڑ، ضلع دادو سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا ارشاد اللہ مہیسر طاہری",
            "locationUrdu": "تحصیل میہڑ، ضلع دادو سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-2",
            "rawText": "محترم خلیفہ محمد اسماعیل چنہ طاہری (میہڑ، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل چنہ طاہری",
            "locationUrdu": "میہڑ، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-3",
            "rawText": "محترم خلیفہ امان اللہ سوڈھر طاہری (دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ امان اللہ سوڈھر طاہری",
            "locationUrdu": "دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-4",
            "rawText": "محترم خلیفہ محمد ایوب قریشی طاہری (دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد ایوب قریشی طاہری",
            "locationUrdu": "دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-5",
            "rawText": "محترم خلیفہ قاری محمد بلال سہارن بخشی طاہری (فقیر پور شریف، رادھن اسٹیشن، ضلع دادو)",
            "nameUrdu": "محترم خلیفہ قاری محمد بلال سہارن بخشی طاہری",
            "locationUrdu": "فقیر پور شریف، رادھن اسٹیشن، ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-6",
            "rawText": "محترم خلیفہ مولانا دیدار حسین عباسی طاہری (خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 1996ء)",
            "nameUrdu": "محترم خلیفہ مولانا دیدار حسین عباسی طاہری",
            "locationUrdu": "خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 1996ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-7",
            "rawText": "محترم خلیفہ رسول بخش چنہ طاہری (میہڑ، ضلع دادو، سن خلافت 1996ء)",
            "nameUrdu": "محترم خلیفہ رسول بخش چنہ طاہری",
            "locationUrdu": "میہڑ، ضلع دادو، سن خلافت 1996ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-8",
            "rawText": "محترم خلیفہ مولانا محمد سعید لاکھیر طاہری (فقیرپور، ضلع دادو، سن خلافت 1998ء)، فرزند خلیفہ حاجی محمد صدیق صاحب",
            "nameUrdu": "محترم خلیفہ مولانا محمد سعید لاکھیر طاہری",
            "locationUrdu": "فقیرپور، ضلع دادو، سن خلافت 1998ء",
            "notesUrdu": "فرزند خلیفہ حاجی محمد صدیق صاحب",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-9",
            "rawText": "محترم خلیفہ مولانا محمد عالم سومرو طاہری (رادھن، دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عالم سومرو طاہری",
            "locationUrdu": "رادھن، دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-10",
            "rawText": "محترم خلیفہ عبدالرحیم شاہانی طاہری (موندر ضلع دادو)",
            "nameUrdu": "محترم خلیفہ عبدالرحیم شاہانی طاہری",
            "locationUrdu": "موندر ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-11",
            "rawText": "محترم خلیفہ عبدالرسول ڈیپر بخشی طاہری (خاص دربان، فقیر پور شریف، ضلع دادو، سن خلافت 1969ء)",
            "nameUrdu": "محترم خلیفہ عبدالرسول ڈیپر بخشی طاہری",
            "locationUrdu": "خاص دربان، فقیر پور شریف، ضلع دادو، سن خلافت 1969ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-12",
            "rawText": "محترم خلیفہ مولانا صوفی عبدالستار چانڈیو طاہری (نزد جوہی، ضلع دادو)، فرزند خلیفہ حاجی عبدالسلام چانڈیو رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ مولانا صوفی عبدالستار چانڈیو طاہری",
            "locationUrdu": "نزد جوہی، ضلع دادو",
            "notesUrdu": "فرزند خلیفہ حاجی عبدالسلام چانڈیو رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-13",
            "rawText": "محترم خلیفہ عبدالقادر چانڈیو طاہری (رحمانی نگر، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبدالقادر چانڈیو طاہری",
            "locationUrdu": "رحمانی نگر، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-14",
            "rawText": "محترم خلیفہ حاجی عبدالمجید سوڈھر بخشی طاہری (فقیر پور شریف، ضلع دادو، سن خلافت 1983ء)، فرزند خلیفہ حاجی محمد بخشل رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ حاجی عبدالمجید سوڈھر بخشی طاہری",
            "locationUrdu": "فقیر پور شریف، ضلع دادو، سن خلافت 1983ء",
            "notesUrdu": "فرزند خلیفہ حاجی محمد بخشل رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-15",
            "rawText": "محترم خلیفہ عبدالقیوم لغاری طاہری (خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبدالقیوم لغاری طاہری",
            "locationUrdu": "خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-16",
            "rawText": "محترم خلیفہ مولانا عرض محمد چانڈیو طاہری (میہڑ ضلع دادو)",
            "nameUrdu": "محترم خلیفہ مولانا عرض محمد چانڈیو طاہری",
            "locationUrdu": "میہڑ ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-17",
            "rawText": "محترم خلیفہ سید علی اصغر شاہ طاہری (تحصیل میہڑ، ضلع دادو، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ سید علی اصغر شاہ طاہری",
            "locationUrdu": "تحصیل میہڑ، ضلع دادو، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-18",
            "rawText": "محترم خلیفہ مولانا علی حسن لاشاری طاہری (ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا علی حسن لاشاری طاہری",
            "locationUrdu": "ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-19",
            "rawText": "محترم خلیفہ محمد عمر کلہوڑو طاہری (گوٹھ الہ ڈتو کلہوڑو، تحصیل خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ محمد عمر کلہوڑو طاہری",
            "locationUrdu": "گوٹھ الہ ڈتو کلہوڑو، تحصیل خیرپور ناتھن شاہ، ضلع دادو، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-20",
            "rawText": "محترم خلیفہ مولانا محمد عیسیٰ چنہ طاہری (تحصیل میہڑ، ضلع دادو سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عیسیٰ چنہ طاہری",
            "locationUrdu": "تحصیل میہڑ، ضلع دادو سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-21",
            "rawText": "محترم خلیفہ غلام اللہ سوڈھر طاہری (دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ غلام اللہ سوڈھر طاہری",
            "locationUrdu": "دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-22",
            "rawText": "محترم خلیفہ غلام شبیر رند طاہری (میہڑ، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ غلام شبیر رند طاہری",
            "locationUrdu": "میہڑ، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-23",
            "rawText": "محترم خلیفہ کلیم اللہ سوڈھر طاہری (میہڑ، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ کلیم اللہ سوڈھر طاہری",
            "locationUrdu": "میہڑ، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-24",
            "rawText": "محترم خلیفہ منیر احمد کلہوڑو طاہری (گوٹھ حافظ میر محمد کلہوڑو، نزد خدا آباد، ضلع دادو، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ منیر احمد کلہوڑو طاہری",
            "locationUrdu": "گوٹھ حافظ میر محمد کلہوڑو، نزد خدا آباد، ضلع دادو، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-25",
            "rawText": "محترم خلیفہ نبی بخش جلبانی طاہری (فقیر پور شریف، ضلع دادو، سن خلافت 1993ء)",
            "nameUrdu": "محترم خلیفہ نبی بخش جلبانی طاہری",
            "locationUrdu": "فقیر پور شریف، ضلع دادو، سن خلافت 1993ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-26",
            "rawText": "محترم خلیفہ نعمت اللہ قریشی طاہری (دادو، سن خلافت 1992ء)",
            "nameUrdu": "محترم خلیفہ نعمت اللہ قریشی طاہری",
            "locationUrdu": "دادو، سن خلافت 1992ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-27",
            "rawText": "محترم خلیفہ نواز علی مگسی بخشی طاہری (میہڑ ضلع دادو)",
            "nameUrdu": "محترم خلیفہ نواز علی مگسی بخشی طاہری",
            "locationUrdu": "میہڑ ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-28",
            "rawText": "محترم خلیفہ حاجی محمد نوازیل بروہی طاہری (نعت خواں، تعلقہ جوہی، ضلع دادو)",
            "nameUrdu": "محترم خلیفہ حاجی محمد نوازیل بروہی طاہری",
            "locationUrdu": "نعت خواں، تعلقہ جوہی، ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-9-29",
            "rawText": "محترم خلیفہ ولی محمد میرانی طاہری (فقیرپور شریف، ضلع دادو، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ ولی محمد میرانی طاہری",
            "locationUrdu": "فقیرپور شریف، ضلع دادو، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع سانگھڑ",
        "districtEn": "Sanghar",
        "items": [
          {
            "id": "kh-sindh-10-1",
            "rawText": "محترم خلیفہ خدا بخش لغاری طاہری (سانگھڑ)",
            "nameUrdu": "محترم خلیفہ خدا بخش لغاری طاہری",
            "locationUrdu": "سانگھڑ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-2",
            "rawText": "محترم خلیفہ حاجی علی حسن مری بلوچ طاہری (گوٹھ حاجی جامن خان مری بلوچ، نزد کھاہی، تحصیل کھپرو، ضلع سانگھڑ، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ حاجی علی حسن مری بلوچ طاہری",
            "locationUrdu": "گوٹھ حاجی جامن خان مری بلوچ، نزد کھاہی، تحصیل کھپرو، ضلع سانگھڑ، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-3",
            "rawText": "محترم خلیفہ فیض محمد آرائیں طاہری (سانگھڑ)",
            "nameUrdu": "محترم خلیفہ فیض محمد آرائیں طاہری",
            "locationUrdu": "سانگھڑ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-4",
            "rawText": "محترم حاجی قادر بخش مری بلوچ طاہری (کھاہی، ضلع سانگھڑ، سن خلافت جون 2014)",
            "nameUrdu": "محترم حاجی قادر بخش مری بلوچ طاہری",
            "locationUrdu": "کھاہی، ضلع سانگھڑ، سن خلافت جون 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-5",
            "rawText": "محترم خلیفہ محمد حسن کنبھر طاہری (گوٹھ بھٹ بھائٹی، تحصیل کھپرو، ضلع سانگھڑ، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ محمد حسن کنبھر طاہری",
            "locationUrdu": "گوٹھ بھٹ بھائٹی، تحصیل کھپرو، ضلع سانگھڑ، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-6",
            "rawText": "محترم خلیفہ منظور احمد مری بلوچ طاہری (شاہ پور چاکر، تحصیل سنجھورو، ضلع سانگھڑ، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ منظور احمد مری بلوچ طاہری",
            "locationUrdu": "شاہ پور چاکر، تحصیل سنجھورو، ضلع سانگھڑ، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-10-7",
            "rawText": "محترم خلیفہ حاجی نیاز محمد مری بلوچ طاہری (کھاہی، ضلع سانگھڑ، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ حاجی نیاز محمد مری بلوچ طاہری",
            "locationUrdu": "کھاہی، ضلع سانگھڑ، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع سکھر",
        "districtEn": "Sukkur",
        "items": [
          {
            "id": "kh-sindh-11-1",
            "rawText": "محترم خلیفہ مولانا محمد اشرف جتوئی طاہری (پنو عاقل، ضلع سکھر، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا محمد اشرف جتوئی طاہری",
            "locationUrdu": "پنو عاقل، ضلع سکھر، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-11-2",
            "rawText": "محترم خلیفہ عبیداللہ عباسی طاہری (پنو عاقل، ضلع سکھر، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبیداللہ عباسی طاہری",
            "locationUrdu": "پنو عاقل، ضلع سکھر، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع شکارپور",
        "districtEn": "Shikarpur",
        "items": [
          {
            "id": "kh-sindh-12-1",
            "rawText": "محترم خلیفہ سید حسین شاہ بخاری بخشی طاہری (شکارپور)",
            "nameUrdu": "محترم خلیفہ سید حسین شاہ بخاری بخشی طاہری",
            "locationUrdu": "شکارپور",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-12-2",
            "rawText": "محترم خلیفہ مفتی حضور بخش میرانی طاہری (شکارپور، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مفتی حضور بخش میرانی طاہری",
            "locationUrdu": "شکارپور، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-12-3",
            "rawText": "محترم خلیفہ خلیل احمد راہوجا طاہری (شکارپور، سن خلافت 1998ء)",
            "nameUrdu": "محترم خلیفہ خلیل احمد راہوجا طاہری",
            "locationUrdu": "شکارپور، سن خلافت 1998ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-12-4",
            "rawText": "محترم خلیفہ زاہد احمد سومرو طاہری (گڑھی یاسین، ضلع شکارپور، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ زاہد احمد سومرو طاہری",
            "locationUrdu": "گڑھی یاسین، ضلع شکارپور، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-12-5",
            "rawText": "محترم خلیفہ عبدالرحمان سولنگی طاہری (مدیجی، ضلع شکارپور، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبدالرحمان سولنگی طاہری",
            "locationUrdu": "مدیجی، ضلع شکارپور، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-12-6",
            "rawText": "محترم خلیفہ حاجی عطا محمد سیٹھار (اسٹیشن روڈ، شکارپور، خلافت 6 جنوری 2013)",
            "nameUrdu": "محترم خلیفہ حاجی عطا محمد سیٹھار",
            "locationUrdu": "اسٹیشن روڈ، شکارپور، خلافت 6 جنوری 2013",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع عمرکوٹ",
        "districtEn": "Umerkot",
        "items": [
          {
            "id": "kh-sindh-13-1",
            "rawText": "محترم خلیفہ سکیلدھو کمبھر طاہری (عمرکوٹ، سندھ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ سکیلدھو کمبھر طاہری",
            "locationUrdu": "عمرکوٹ، سندھ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کراچی جنوبی",
        "districtEn": "Karachi South",
        "items": [
          {
            "id": "kh-sindh-14-1",
            "rawText": "محترم خلیفہ محمد اشرف رانا طاہری (میٹھا در، ضلع جنوبی کراچی، خلافت25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد اشرف رانا طاہری",
            "locationUrdu": "میٹھا در، ضلع جنوبی کراچی، خلافت25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-14-2",
            "rawText": "حترم خلیفہ مولانا رحمت اللہ قریشی بخشی طاہری (میراں ناکہ، لیاری، کراچی)",
            "nameUrdu": "حترم خلیفہ مولانا رحمت اللہ قریشی بخشی طاہری",
            "locationUrdu": "میراں ناکہ، لیاری، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-14-3",
            "rawText": "محترم خلیفہ عبدالرحیم خاصخیلی طاہری (مولا مدد، لیاری، کراچی)",
            "nameUrdu": "محترم خلیفہ عبدالرحیم خاصخیلی طاہری",
            "locationUrdu": "مولا مدد، لیاری، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-14-4",
            "rawText": "محترم خلیفہ حاجی عبدالغفور لاسی بلوچ طاہری (لیاری، ضلع کراچی جنوبی، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ حاجی عبدالغفور لاسی بلوچ طاہری",
            "locationUrdu": "لیاری، ضلع کراچی جنوبی، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-14-5",
            "rawText": "محترم خلیفہ عبدالواحد بلوچ طاہری (چاکیواڑہ، کراچی)",
            "nameUrdu": "محترم خلیفہ عبدالواحد بلوچ طاہری",
            "locationUrdu": "چاکیواڑہ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-14-6",
            "rawText": "محترم خلیفہ مولانا مطیع اللہ قریشی طاہری، ضلع جنوبی کراچی (فرزند مولانا خلیفہ رحمۃ اللہ قریشی بخشی طاہری، خلافت 10 جولائی 2011)",
            "nameUrdu": "محترم خلیفہ مولانا مطیع اللہ قریشی طاہری، ضلع جنوبی کراچی",
            "locationUrdu": "فرزند مولانا خلیفہ رحمۃ اللہ قریشی بخشی طاہری، خلافت 10 جولائی 2011",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کراچی شرقی",
        "districtEn": "Karachi East",
        "items": [
          {
            "id": "kh-sindh-15-1",
            "rawText": "محترم خلیفہ ابصار خان طاہری (ضلع کراچی شرقی، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ ابصار خان طاہری",
            "locationUrdu": "ضلع کراچی شرقی، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-2",
            "rawText": "محترم خلیفہ قاضی ارشاد علی قریشی طاہری (منگھو پیر، کراچی، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ قاضی ارشاد علی قریشی طاہری",
            "locationUrdu": "منگھو پیر، کراچی، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-3",
            "rawText": "محترم خلیفہ اشفاق احمد آرائیں طاہری (گرین ٹاؤن، ضلع شرقی کراچی، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ اشفاق احمد آرائیں طاہری",
            "locationUrdu": "گرین ٹاؤن، ضلع شرقی کراچی، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-4",
            "rawText": "محترم خلیفہ اصغر علی عباسی طاہری (پی آئی اے ٹاؤنشپ، ضلع شرقی کراچی، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ اصغر علی عباسی طاہری",
            "locationUrdu": "پی آئی اے ٹاؤنشپ، ضلع شرقی کراچی، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-5",
            "rawText": "محترم خلیفہ حافظ قاضی اعجاز احمد میمن طاہری (بہادرآباد، کراچی شرقی)",
            "nameUrdu": "محترم خلیفہ حافظ قاضی اعجاز احمد میمن طاہری",
            "locationUrdu": "بہادرآباد، کراچی شرقی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-6",
            "rawText": "محترم خلیفہ محمد اعظم راجپوت طاہری (گرین ٹاؤن، کراچی)",
            "nameUrdu": "محترم خلیفہ محمد اعظم راجپوت طاہری",
            "locationUrdu": "گرین ٹاؤن، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-7",
            "rawText": "محترم خلیفہ حاجی محمد افضل شاہد طاہری (کارساز، کراچی، سن خلافت 2004ء)",
            "nameUrdu": "محترم خلیفہ حاجی محمد افضل شاہد طاہری",
            "locationUrdu": "کارساز، کراچی، سن خلافت 2004ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-8",
            "rawText": "محترم خلیفہ قاری انور علی طاہری (فیڈرل بی ایریا، کراچی شرقی)",
            "nameUrdu": "محترم خلیفہ قاری انور علی طاہری",
            "locationUrdu": "فیڈرل بی ایریا، کراچی شرقی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-9",
            "rawText": "محترم خلیفہ ڈاکٹر جمیل احمد طاہری (گلشن اقبال، ضلع شرقی کراچی، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر جمیل احمد طاہری",
            "locationUrdu": "گلشن اقبال، ضلع شرقی کراچی، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-10",
            "rawText": "محترم خلیفہ مرزا خالد اقبال طاہری (کارساز، کراچی، سن خلافت 2004ء)",
            "nameUrdu": "محترم خلیفہ مرزا خالد اقبال طاہری",
            "locationUrdu": "کارساز، کراچی، سن خلافت 2004ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-11",
            "rawText": "محترم خلیفہ حاجی رفاقت علی طاہری (گلستان جوہر، کراچی شرقی، سن خلافت 1993ء)",
            "nameUrdu": "محترم خلیفہ حاجی رفاقت علی طاہری",
            "locationUrdu": "گلستان جوہر، کراچی شرقی، سن خلافت 1993ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-12",
            "rawText": "محترم خلیفہ سراج الدین شیخ طاہری (گلشن اقبال، کراچی، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ سراج الدین شیخ طاہری",
            "locationUrdu": "گلشن اقبال، کراچی، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-13",
            "rawText": "محترم خلیفہ سعید اللہ قریشی طاہری (فیڈرل بی ایریا، کراچی)",
            "nameUrdu": "محترم خلیفہ سعید اللہ قریشی طاہری",
            "locationUrdu": "فیڈرل بی ایریا، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-14",
            "rawText": "محترم خلیفہ شوکت علی طاہری (کارساز، کراچی، سن خلافت 2004ء)",
            "nameUrdu": "محترم خلیفہ شوکت علی طاہری",
            "locationUrdu": "کارساز، کراچی، سن خلافت 2004ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-15",
            "rawText": "محترم خلیفہ میاں محمد عارف طاہری (ڈالمیان، کراچی شرقی)",
            "nameUrdu": "محترم خلیفہ میاں محمد عارف طاہری",
            "locationUrdu": "ڈالمیان، کراچی شرقی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-15-16",
            "rawText": "محترم خلیفہ منظور احمد طاہری (ڈالمیان، ضلع کراچی شرقی، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ منظور احمد طاہری",
            "locationUrdu": "ڈالمیان، ضلع کراچی شرقی، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کراچی غربی",
        "districtEn": "Karachi West",
        "items": [
          {
            "id": "kh-sindh-16-1",
            "rawText": "محترم خلیفہ احمد زمان بخشی طاہری (بلدیہ ٹاؤن، کراچی)",
            "nameUrdu": "محترم خلیفہ احمد زمان بخشی طاہری",
            "locationUrdu": "بلدیہ ٹاؤن، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-2",
            "rawText": "محترم خلیفہ امیر بخش مری بلوچ طاہری (کیماڑی، کراچی)",
            "nameUrdu": "محترم خلیفہ امیر بخش مری بلوچ طاہری",
            "locationUrdu": "کیماڑی، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-3",
            "rawText": "محترم خلیفہ جان محمد خاصخیلی طاہری (حب ریور روڈ، کراچی غربی، سن خلافت 2002)",
            "nameUrdu": "محترم خلیفہ جان محمد خاصخیلی طاہری",
            "locationUrdu": "حب ریور روڈ، کراچی غربی، سن خلافت 2002",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-4",
            "rawText": "محترم خلیفہ حاجی محمد حنیف طاہری (المرکز روحانی، بلدیہ ٹاؤن، کراچی غربی، سن خلافت 2007)",
            "nameUrdu": "محترم خلیفہ حاجی محمد حنیف طاہری",
            "locationUrdu": "المرکز روحانی، بلدیہ ٹاؤن، کراچی غربی، سن خلافت 2007",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-5",
            "rawText": "محترم خلیفہ خدا بخش سولنگی طاہری (سائٹ کالونی، ضلع کراچی غربی، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ خدا بخش سولنگی طاہری",
            "locationUrdu": "سائٹ کالونی، ضلع کراچی غربی، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-6",
            "rawText": "محترم خلیفہ دوست محمد خاصخیلی طاہری (یوسف گوٹھ، کراچی)",
            "nameUrdu": "محترم خلیفہ دوست محمد خاصخیلی طاہری",
            "locationUrdu": "یوسف گوٹھ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-7",
            "rawText": "محترم خلیفہ مولانا رفیق احمد موجائی طاہری (گلشن مزدور، ضلع غربی کراچی، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا رفیق احمد موجائی طاہری",
            "locationUrdu": "گلشن مزدور، ضلع غربی کراچی، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-8",
            "rawText": "محترم خلیفہ طارق مسعود میر طاہری (شیر شاہ کالونی، ضلع غربی کراچی، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ طارق مسعود میر طاہری",
            "locationUrdu": "شیر شاہ کالونی، ضلع غربی کراچی، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-9",
            "rawText": "محترم خلیفہ عبدالغفور کونہرو طاہری (ضلع غربی کراچی، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبدالغفور کونہرو طاہری",
            "locationUrdu": "ضلع غربی کراچی، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-10",
            "rawText": "محترم خلیفہ غلام نبی دودا بلوچ طاہری (سائٹ ایریا، کراچی)",
            "nameUrdu": "محترم خلیفہ غلام نبی دودا بلوچ طاہری",
            "locationUrdu": "سائٹ ایریا، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-11",
            "rawText": "محترم خلیفہ فیض محمد لاسی طاہری (سعید آباد، کراچی)",
            "nameUrdu": "محترم خلیفہ فیض محمد لاسی طاہری",
            "locationUrdu": "سعید آباد، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-16-12",
            "rawText": "محترم خلیفہ محمد قاسم طاہری (شیر شاہ ولیج، کراچی)",
            "nameUrdu": "محترم خلیفہ محمد قاسم طاہری",
            "locationUrdu": "شیر شاہ ولیج، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کراچی ملیر",
        "districtEn": "Karachi Malir",
        "items": [
          {
            "id": "kh-sindh-17-1",
            "rawText": "محترم خلیفہ محمد آدم بروہی بخشی طاہری (گڈاپ، کراچی)",
            "nameUrdu": "محترم خلیفہ محمد آدم بروہی بخشی طاہری",
            "locationUrdu": "گڈاپ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-2",
            "rawText": "محترم خلیفہ مولانا محمد ابراہیم بروہی طاہری (المرکز ٹول پلازہ، کراچی، داماد حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ)",
            "nameUrdu": "محترم خلیفہ مولانا محمد ابراہیم بروہی طاہری",
            "locationUrdu": "المرکز ٹول پلازہ، کراچی، داماد حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-3",
            "rawText": "محترم خلیفہ محمد ارشاد جوکھیو طاہری (ضلع ملیر کراچی، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ محمد ارشاد جوکھیو طاہری",
            "locationUrdu": "ضلع ملیر کراچی، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-4",
            "rawText": "محترم خلیفہ مولانا امام علی چانڈیو بخشی طاہری (گڈاپ، کراچی)",
            "nameUrdu": "محترم خلیفہ مولانا امام علی چانڈیو بخشی طاہری",
            "locationUrdu": "گڈاپ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-5",
            "rawText": "محترم خلیفہ مولانا محمد پارسا طاہری (ملیر کراچی، سن خلافت 1998ء)، فرزند محترم خلیفہ مفتی کریم بخش صاحب",
            "nameUrdu": "محترم خلیفہ مولانا محمد پارسا طاہری",
            "locationUrdu": "ملیر کراچی، سن خلافت 1998ء",
            "notesUrdu": "فرزند محترم خلیفہ مفتی کریم بخش صاحب",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-6",
            "rawText": "محترم خلیفہ مولانا محمد حسان لاکھو طاہری (المرکز اصلاح المسلمین، ٹول پلازہ، کراچی، خلافت 10 جولائی 2011)، فرزند خلیفہ مولانا محمد رمضان لاکھو بخشی طاہری",
            "nameUrdu": "محترم خلیفہ مولانا محمد حسان لاکھو طاہری",
            "locationUrdu": "المرکز اصلاح المسلمین، ٹول پلازہ، کراچی، خلافت 10 جولائی 2011",
            "notesUrdu": "فرزند خلیفہ مولانا محمد رمضان لاکھو بخشی طاہری",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-7",
            "rawText": "محترم خلیفہ رحمت اللہ بروہی طاہری (گلشن معمار، کراچی)",
            "nameUrdu": "محترم خلیفہ رحمت اللہ بروہی طاہری",
            "locationUrdu": "گلشن معمار، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-8",
            "rawText": "محترم خلیفہ محمد رمضان گبول طاہری (گڈاپ، کراچی، سن خلافت 1996ء)",
            "nameUrdu": "محترم خلیفہ محمد رمضان گبول طاہری",
            "locationUrdu": "گڈاپ، کراچی، سن خلافت 1996ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-9",
            "rawText": "محترم خلیفہ مولانا شبیر احمد کھوکھر طاہری (بھٹائی آباد، ضلع ملیر، کراچی، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا شبیر احمد کھوکھر طاہری",
            "locationUrdu": "بھٹائی آباد، ضلع ملیر، کراچی، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-10",
            "rawText": "محترم خلیفہ محمد شریف جوکھیو بخشی طاہری (چوکنڈی، ضلع ملیر)",
            "nameUrdu": "محترم خلیفہ محمد شریف جوکھیو بخشی طاہری",
            "locationUrdu": "چوکنڈی، ضلع ملیر",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-11",
            "rawText": "محترم خلیفہ ڈاکٹر عبدالحق چنہ طاہری (انڈسٹریل ایریا روڈ، ضلع ملیر کراچی، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر عبدالحق چنہ طاہری",
            "locationUrdu": "انڈسٹریل ایریا روڈ، ضلع ملیر کراچی، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-12",
            "rawText": "محترم خلیفہ عبدالرحمان چانڈیو طاہری (بھینس کالونی، کورنگی، کراچی، سن خلافت 1988ء)",
            "nameUrdu": "محترم خلیفہ عبدالرحمان چانڈیو طاہری",
            "locationUrdu": "بھینس کالونی، کورنگی، کراچی، سن خلافت 1988ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-13",
            "rawText": "محترم خلیفہ عبدالغنی پالاری طاہری (گڈاپ، کراچی)",
            "nameUrdu": "محترم خلیفہ عبدالغنی پالاری طاہری",
            "locationUrdu": "گڈاپ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-14",
            "rawText": "محترم خلیفہ مولانا عبداللہ بلوچ طاہری (ماڈل کالونی، ضلع ملیر، کراچی، سن خلافت 2004ء)",
            "nameUrdu": "محترم خلیفہ مولانا عبداللہ بلوچ طاہری",
            "locationUrdu": "ماڈل کالونی، ضلع ملیر، کراچی، سن خلافت 2004ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-15",
            "rawText": "محترم خلیفہ مولانا عطاء اللہ مگسی طاہری (دنبا گوٹھ، ضلع ملیر، کراچی، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا عطاء اللہ مگسی طاہری",
            "locationUrdu": "دنبا گوٹھ، ضلع ملیر، کراچی، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-16",
            "rawText": "محترم خلیفہ غلام حیدر تیونو طاہری (جوگی گوٹھ، ضلع ملیر، کراچی)",
            "nameUrdu": "محترم خلیفہ غلام حیدر تیونو طاہری",
            "locationUrdu": "جوگی گوٹھ، ضلع ملیر، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-17",
            "rawText": "محترم خلیفہ محمد محسن بروہی بخشی طاہری (گڈاپ، کراچی)",
            "nameUrdu": "محترم خلیفہ محمد محسن بروہی بخشی طاہری",
            "locationUrdu": "گڈاپ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-18",
            "rawText": "محترم خلیفہ مدد علی پالاری طاہری (گڈاپ، کراچی، سنِ خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ مدد علی پالاری طاہری",
            "locationUrdu": "گڈاپ، کراچی، سنِ خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-19",
            "rawText": "محترم خلیفہ مظفر حسین سیہڑو طاہری (گلشن حدید، ضلع کراچی ملیر، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مظفر حسین سیہڑو طاہری",
            "locationUrdu": "گلشن حدید، ضلع کراچی ملیر، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-20",
            "rawText": "محترم خلیفہ محمد موسیٰ میمن طاہری (گلشن معمار، کراچی، سنِ خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ محمد موسیٰ میمن طاہری",
            "locationUrdu": "گلشن معمار، کراچی، سنِ خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-21",
            "rawText": "محترم خلیفہ محمد ناصر پٹھان طاہری (گلشن حدید، ضلع ملیر کراچی، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد ناصر پٹھان طاہری",
            "locationUrdu": "گلشن حدید، ضلع ملیر کراچی، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-17-22",
            "rawText": "محترم خلیفہ حکیم محمد یوسف چنہ طاہری (اسٹیل ٹاؤن، ضلع کراچی ملیر، سنِ خلافت 1998ء)",
            "nameUrdu": "محترم خلیفہ حکیم محمد یوسف چنہ طاہری",
            "locationUrdu": "اسٹیل ٹاؤن، ضلع کراچی ملیر، سنِ خلافت 1998ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کراچی وسطی",
        "districtEn": "Karachi Central",
        "items": [
          {
            "id": "kh-sindh-18-1",
            "rawText": "محترم خلیفہ قاری حبیب الرحمان بروہی طاہری (کھنڈو گوٹھ، نارتھ ناظم آباد، کراچی، سن خلافت 2004ء)، (فرزند خلیفہ قاری شاہ محمد صاحب)",
            "nameUrdu": "محترم خلیفہ قاری حبیب الرحمان بروہی طاہری",
            "locationUrdu": "کھنڈو گوٹھ، نارتھ ناظم آباد، کراچی، سن خلافت 2004ء",
            "notesUrdu": "(فرزند خلیفہ قاری شاہ محمد صاحب)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-18-2",
            "rawText": "محترم خلیفہ قاری شاہ محمد بروہی بخشی طاہری (کھنڈو گوٹھ، نارتھ ناظم آباد، کراچی)",
            "nameUrdu": "محترم خلیفہ قاری شاہ محمد بروہی بخشی طاہری",
            "locationUrdu": "کھنڈو گوٹھ، نارتھ ناظم آباد، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-18-3",
            "rawText": "محترم خلیفہ عبدالعزیز بلوچ طاہری (کھنڈو گوٹھ، کراچی، سن خلافت 2002ء)، (فرزند خلیفہ حاجی عبدالستار صاحب، کھنڈو گوٹھ، کراچی)",
            "nameUrdu": "محترم خلیفہ عبدالعزیز بلوچ طاہری",
            "locationUrdu": "کھنڈو گوٹھ، کراچی، سن خلافت 2002ء",
            "notesUrdu": "(فرزند خلیفہ حاجی عبدالستار صاحب، کھنڈو گوٹھ، کراچی)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-18-4",
            "rawText": "محترم خلیفہ حاجی عبدالغفور مری بلوچ بخشی طاہری (موسیٰ گوٹھ، نارتھ ناظم آباد، کراچی)",
            "nameUrdu": "محترم خلیفہ حاجی عبدالغفور مری بلوچ بخشی طاہری",
            "locationUrdu": "موسیٰ گوٹھ، نارتھ ناظم آباد، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-18-5",
            "rawText": "",
            "nameUrdu": "",
            "locationUrdu": "",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع کشمور کندھ کوٹ",
        "districtEn": "Kashmore-Kandhkot",
        "items": [
          {
            "id": "kh-sindh-19-1",
            "rawText": "محترم خلیفہ ذوالفقار علی اوگاہی طاہری (غوث پور، ضلع کشمور کندھ کوٹ، خلافت 6 جنوری 2013)",
            "nameUrdu": "محترم خلیفہ ذوالفقار علی اوگاہی طاہری",
            "locationUrdu": "غوث پور، ضلع کشمور کندھ کوٹ، خلافت 6 جنوری 2013",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-19-2",
            "rawText": "محترم خلیفہ غلام محمد ملک طاہری (کندھ کوٹ، ضلع کشمور کندھ کوٹ)",
            "nameUrdu": "محترم خلیفہ غلام محمد ملک طاہری",
            "locationUrdu": "کندھ کوٹ، ضلع کشمور کندھ کوٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع قمبر شہدادکوٹ",
        "districtEn": "Qambar Shahdadkot",
        "items": [
          {
            "id": "kh-sindh-20-1",
            "rawText": "محترم خلیفہ حاجی احمد حسن لاشاری بخشی طاہری (تعلقہ وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 1969ء)",
            "nameUrdu": "محترم خلیفہ حاجی احمد حسن لاشاری بخشی طاہری",
            "locationUrdu": "تعلقہ وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 1969ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-2",
            "rawText": "محترم خلیفہ محمد اسحاق واہوچو طاہری (قمبر، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد اسحاق واہوچو طاہری",
            "locationUrdu": "قمبر، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-3",
            "rawText": "محترم خلیفہ رکن دین برڑو طاہری (وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ رکن دین برڑو طاہری",
            "locationUrdu": "وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-4",
            "rawText": "محترم خلیفہ خلیفہ عبدالعزیز چانڈیو طاہری (غیبی دیرہ، ضلع قمبر شہدادکوٹ)",
            "nameUrdu": "محترم خلیفہ خلیفہ عبدالعزیز چانڈیو طاہری",
            "locationUrdu": "غیبی دیرہ، ضلع قمبر شہدادکوٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-5",
            "rawText": "محترم خلیفہ عبدالہادی چانڈیو طاہری (وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 1988ء)",
            "nameUrdu": "محترم خلیفہ عبدالہادی چانڈیو طاہری",
            "locationUrdu": "وارہ، ضلع قمبر شہدادکوٹ، سن خلافت 1988ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-6",
            "rawText": "محترم خلیفہ قاری عبیداللہ پنہور طاہری (نصیرآباد، ضلع قمبر شہدادکوٹ)، فرزند خلیفہ قاری خان محمد رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ قاری عبیداللہ پنہور طاہری",
            "locationUrdu": "نصیرآباد، ضلع قمبر شہدادکوٹ",
            "notesUrdu": "فرزند خلیفہ قاری خان محمد رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-7",
            "rawText": "محترم خلیفہ مولانا قربان علی شیخ طاہری (قمبر)",
            "nameUrdu": "محترم خلیفہ مولانا قربان علی شیخ طاہری",
            "locationUrdu": "قمبر",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-8",
            "rawText": "محترم خلیفہ محمد جان بروہی طاہری (وارہ، ضلع قمبر شہدادکوٹ)، فرزند خلیفہ محمد صدیق بروہی رحمۃ اللہ تعالیٰ علیہ، دبئی",
            "nameUrdu": "محترم خلیفہ محمد جان بروہی طاہری",
            "locationUrdu": "وارہ، ضلع قمبر شہدادکوٹ",
            "notesUrdu": "فرزند خلیفہ محمد صدیق بروہی رحمۃ اللہ تعالیٰ علیہ، دبئی",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-9",
            "rawText": "محترم خلیفہ مولا بخش چانڈیو بخشی طاہری (نزد غیبی دیرو، ضلع قمبر شہدادکوٹ)",
            "nameUrdu": "محترم خلیفہ مولا بخش چانڈیو بخشی طاہری",
            "locationUrdu": "نزد غیبی دیرو، ضلع قمبر شہدادکوٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-20-10",
            "rawText": "محترم خلیفہ حافظ یار محمد چھٹو طاہری (وارہ، ضلع قمبرشہدادکوٹ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ حافظ یار محمد چھٹو طاہری",
            "locationUrdu": "وارہ، ضلع قمبرشہدادکوٹ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع گھوٹکی",
        "districtEn": "Ghotki",
        "items": [
          {
            "id": "kh-sindh-21-1",
            "rawText": "محترم خلیفہ خوشی محمد طاہری (اباوڑو، ضلع گھوٹکی، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ خوشی محمد طاہری",
            "locationUrdu": "اباوڑو، ضلع گھوٹکی، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-21-2",
            "rawText": "محترم خلیفہ عبداللطیف ملک طاہری (اوباوڑو، ضلع گھوٹکی، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ عبداللطیف ملک طاہری",
            "locationUrdu": "اوباوڑو، ضلع گھوٹکی، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع لاڑکانہ",
        "districtEn": "Larkana",
        "items": [
          {
            "id": "kh-sindh-22-1",
            "rawText": "محترم خلیفہ مولانا اسد اللہ بھٹو طاہری (نوڈیرہ، ضلع لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ مولانا اسد اللہ بھٹو طاہری",
            "locationUrdu": "نوڈیرہ، ضلع لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-2",
            "rawText": "محترم خلیفہ اصغر علی جھتیال طاہری (تحصیل ڈوکری، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ اصغر علی جھتیال طاہری",
            "locationUrdu": "تحصیل ڈوکری، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-3",
            "rawText": "محترم خلیفہ محمد افضل شیخ طاہری (لاڑکانہ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد افضل شیخ طاہری",
            "locationUrdu": "لاڑکانہ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-4",
            "rawText": "محترم خلیفہ صاحبزادہ محمد دیدہ دل طاہری (غریب آباد، لاڑکانہ)، نواسہ حضرت پیر مٹھا رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ صاحبزادہ محمد دیدہ دل طاہری",
            "locationUrdu": "غریب آباد، لاڑکانہ",
            "notesUrdu": "نواسہ حضرت پیر مٹھا رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-5",
            "rawText": "محترم خلیفہ سلطان احمد چنہ طاہری (نوڈیرہ، ضلع لاڑکانہ، سن خلافت 1992ء)",
            "nameUrdu": "محترم خلیفہ سلطان احمد چنہ طاہری",
            "locationUrdu": "نوڈیرہ، ضلع لاڑکانہ، سن خلافت 1992ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-6",
            "rawText": "محترم خلیفہ محمد عاشق عباسی دینپوری طاہری (ڈوکری، لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ محمد عاشق عباسی دینپوری طاہری",
            "locationUrdu": "ڈوکری، لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-7",
            "rawText": "محترم خلیفہ ڈاکٹر عبدالحمید منگی طاہری (درگاہ رحمت پور شریف، لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر عبدالحمید منگی طاہری",
            "locationUrdu": "درگاہ رحمت پور شریف، لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-8",
            "rawText": "محترم خلیفہ مولانا مفتی عبدالرحیم کندھر طاہری (نوڈیرہ لاڑکانہ، سن خلافت 1984ء)، فرزند خلیفہ حاجی محمد عیسیٰ کندھر رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ مولانا مفتی عبدالرحیم کندھر طاہری",
            "locationUrdu": "نوڈیرہ لاڑکانہ، سن خلافت 1984ء",
            "notesUrdu": "فرزند خلیفہ حاجی محمد عیسیٰ کندھر رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-9",
            "rawText": "محترم خلیفہ مولانا عبدالقدیر شیخ طاہری (لاڑکانہ، سن خلافت 1999)",
            "nameUrdu": "محترم خلیفہ مولانا عبدالقدیر شیخ طاہری",
            "locationUrdu": "لاڑکانہ، سن خلافت 1999",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-10",
            "rawText": "محترم خلیفہ مولانا محمد عثمان جلبانی طاہری (رتودیرہ، ضلع لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عثمان جلبانی طاہری",
            "locationUrdu": "رتودیرہ، ضلع لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-11",
            "rawText": "محترم خلیفہ مولانا محمد عثمان عمرانی طاہری (درگاہ غریب آباد، لاڑکانہ، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عثمان عمرانی طاہری",
            "locationUrdu": "درگاہ غریب آباد، لاڑکانہ، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-12",
            "rawText": "محترم خلیفہ حافظ عطا محمد چنہ طاہری (جامعہ عربیہ بخشیہ، نوڈیرو، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ حافظ عطا محمد چنہ طاہری",
            "locationUrdu": "جامعہ عربیہ بخشیہ، نوڈیرو، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-13",
            "rawText": "محترم خلیفہ مولانا غلام رسول کُندھر طاہری (جامعہ عربیہ بخشیہ، نوڈیرو، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا غلام رسول کُندھر طاہری",
            "locationUrdu": "جامعہ عربیہ بخشیہ، نوڈیرو، ضلع لاڑکانہ سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-14",
            "rawText": "محترم خلیفہ غلام شبیر شیخ طاہری (نوڈیرو، ضلع لاڑکانہ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ غلام شبیر شیخ طاہری",
            "locationUrdu": "نوڈیرو، ضلع لاڑکانہ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-15",
            "rawText": "محترم خلیفہ غلام عمر بروہی طاہری (لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ غلام عمر بروہی طاہری",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-16",
            "rawText": "محترم خلیفہ فتح محمد مہیسر طاہری (نوڈیرو، ضلع لاڑکانہ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ فتح محمد مہیسر طاہری",
            "locationUrdu": "نوڈیرو، ضلع لاڑکانہ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-17",
            "rawText": "محترم خلیفہ محمد بخش عالمانی طاہری (لاڑکانہ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد بخش عالمانی طاہری",
            "locationUrdu": "لاڑکانہ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-18",
            "rawText": "محترم خلیفہ محمد معشوق مسن طاہری (باڈہ، ضلع لاڑکانہ، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ محمد معشوق مسن طاہری",
            "locationUrdu": "باڈہ، ضلع لاڑکانہ، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-19",
            "rawText": "محترم خلیفہ معشوق علی جوکھیو طاہری (ویہڑ شریف، ضلع لاڑکانہ، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ معشوق علی جوکھیو طاہری",
            "locationUrdu": "ویہڑ شریف، ضلع لاڑکانہ، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-20",
            "rawText": "محترم خلیفہ محمد نواز میمن طاہری (لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ محمد نواز میمن طاہری",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-22-21",
            "rawText": "محترم خلیفہ نور الحق شیخ طاہری (لاڑکانہ سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ نور الحق شیخ طاہری",
            "locationUrdu": "لاڑکانہ سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع مٹیاری",
        "districtEn": "Matiari",
        "items": [
          {
            "id": "kh-sindh-23-1",
            "rawText": "محترم خلیفہ حافظ بشارت احمد میمن طاہری (مٹیاری)",
            "nameUrdu": "محترم خلیفہ حافظ بشارت احمد میمن طاہری",
            "locationUrdu": "مٹیاری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-2",
            "rawText": "محترم خلیفہ محمد بلاول کھوسو طاہری (اڈیرو لعل، ضلع مٹیاری)",
            "nameUrdu": "محترم خلیفہ محمد بلاول کھوسو طاہری",
            "locationUrdu": "اڈیرو لعل، ضلع مٹیاری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-3",
            "rawText": "محترم خلیفہ شاکر علی راجپوت طاہری (بھٹ شاہ، ضلع مٹیاری)",
            "nameUrdu": "محترم خلیفہ شاکر علی راجپوت طاہری",
            "locationUrdu": "بھٹ شاہ، ضلع مٹیاری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-4",
            "rawText": "محترم خلیفہ حاجی عبدالحکیم میمن بخشی طاہری (ہالا، ضلع مٹیاری، سن خلافت 1973ء)",
            "nameUrdu": "محترم خلیفہ حاجی عبدالحکیم میمن بخشی طاہری",
            "locationUrdu": "ہالا، ضلع مٹیاری، سن خلافت 1973ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-5",
            "rawText": "محترم خلیفہ حافظ عبدالقدوس قاضی طاہری (مٹیاری، سندھ، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ حافظ عبدالقدوس قاضی طاہری",
            "locationUrdu": "مٹیاری، سندھ، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-6",
            "rawText": "محترم خلیفہ فاروق احمد میمن طاہری (نیو ہالا، ضلع مٹیاری سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ فاروق احمد میمن طاہری",
            "locationUrdu": "نیو ہالا، ضلع مٹیاری سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-7",
            "rawText": "محترم خلیفہ محمد مکی میمن طاہری (نیو ہالا، ضلع مٹیاری، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ محمد مکی میمن طاہری",
            "locationUrdu": "نیو ہالا، ضلع مٹیاری، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-23-8",
            "rawText": "محترم خلیفہ محمد یوسف پیرزادو بخشی طاہری (ہالا، ضلع مٹیاری)",
            "nameUrdu": "محترم خلیفہ محمد یوسف پیرزادو بخشی طاہری",
            "locationUrdu": "ہالا، ضلع مٹیاری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع میرپورخاص",
        "districtEn": "Mirpurkhas",
        "items": [
          {
            "id": "kh-sindh-24-1",
            "rawText": "محترم خلیفہ مولانا احمد خان مری بلوچ طاہری (میرپور خاص، سن خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ مولانا احمد خان مری بلوچ طاہری",
            "locationUrdu": "میرپور خاص، سن خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-2",
            "rawText": "محترم خلیفہ قاری محمد اسلم طاہری (ڈگڑی، ضلع میرپور خاص، سن خلافت 2010 )",
            "nameUrdu": "محترم خلیفہ قاری محمد اسلم طاہری",
            "locationUrdu": "ڈگڑی، ضلع میرپور خاص، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-3",
            "rawText": "محترم خلیفہ اصغر علی چنہ طاہری (میرپور خاص، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ اصغر علی چنہ طاہری",
            "locationUrdu": "میرپور خاص، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-4",
            "rawText": "محترم خلیفہ محمد اسماعیل شر بلوچ طاہری (نزد ہنگورنو، ضلع میرپور خاص، سن خلافت جون 2014)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل شر بلوچ طاہری",
            "locationUrdu": "نزد ہنگورنو، ضلع میرپور خاص، سن خلافت جون 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-5",
            "rawText": "محترم خلیفہ محمد اشرف آرائیں طاہری (جھڈو، ضلع میرپور خاص)",
            "nameUrdu": "محترم خلیفہ محمد اشرف آرائیں طاہری",
            "locationUrdu": "جھڈو، ضلع میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-6",
            "rawText": "محترم خلیفہ مولانا محمد جمن لاکھو طاہری (تعلقہ سندھڑی، ضلع میرپور خاص)",
            "nameUrdu": "محترم خلیفہ مولانا محمد جمن لاکھو طاہری",
            "locationUrdu": "تعلقہ سندھڑی، ضلع میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-7",
            "rawText": "محترم خلیفہ مولانا محمد حیات مری بلوچ طاہری (میرپور خاص)",
            "nameUrdu": "محترم خلیفہ مولانا محمد حیات مری بلوچ طاہری",
            "locationUrdu": "میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-8",
            "rawText": "محترم خلیفہ حاجی سائیں بخش مری بلوچ طاہری (تعلقہ سندھڑی، ضلع میرپور خاص)",
            "nameUrdu": "محترم خلیفہ حاجی سائیں بخش مری بلوچ طاہری",
            "locationUrdu": "تعلقہ سندھڑی، ضلع میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-9",
            "rawText": "محترم خلیفہ مولانا غلام فاروق چانڈیو طاہری (پرانہ دنبالہ، تحصیل ڈگری، ضلع میرپور خاص، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا غلام فاروق چانڈیو طاہری",
            "locationUrdu": "پرانہ دنبالہ، تحصیل ڈگری، ضلع میرپور خاص، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-10",
            "rawText": "محترم خلیفہ محمد علی آرائیں بخشی طاہری (ڈگری، ضلع میرپور خاص)",
            "nameUrdu": "محترم خلیفہ محمد علی آرائیں بخشی طاہری",
            "locationUrdu": "ڈگری، ضلع میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-24-11",
            "rawText": "محترم خلیفہ محمد یونس آرائیں طاہری (جھڈو، ضلع میرپور خاص)",
            "nameUrdu": "محترم خلیفہ محمد یونس آرائیں طاہری",
            "locationUrdu": "جھڈو، ضلع میرپور خاص",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع نوابشاہ",
        "districtEn": "Nawabshah (Shaheed Benazirabad)",
        "items": [
          {
            "id": "kh-sindh-25-1",
            "rawText": "محترم خلیفہ ڈاکٹر میجر احمد خان زرداری طاہری (نوابشاہ، حالیہ سروس حیدرآباد)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر میجر احمد خان زرداری طاہری",
            "locationUrdu": "نوابشاہ، حالیہ سروس حیدرآباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-2",
            "rawText": "محترم خلیفہ محمد امین اوٹھو طاہری (نوابشاہ، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ محمد امین اوٹھو طاہری",
            "locationUrdu": "نوابشاہ، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-3",
            "rawText": "محترم خلیفہ حافظ حبیب الرحمان سیال طاہری (نوابشاہ، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ حافظ حبیب الرحمان سیال طاہری",
            "locationUrdu": "نوابشاہ، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-4",
            "rawText": "محترم خلیفہ محمد حسن اوٹھو بخشی طاہری (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ محمد حسن اوٹھو بخشی طاہری",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-5",
            "rawText": "محترم خلیفہ مولانا رضا محمد انڑ طاہری (قاضی احمد، ضلع نوابشاہ)",
            "nameUrdu": "محترم خلیفہ مولانا رضا محمد انڑ طاہری",
            "locationUrdu": "قاضی احمد، ضلع نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-6",
            "rawText": "محترم خلیفہ زبیر احمد اُنڑ طاہری (نزد نوابشاہ، سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ زبیر احمد اُنڑ طاہری",
            "locationUrdu": "نزد نوابشاہ، سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-7",
            "rawText": "محترم خلیفہ ڈاکٹر شکیل احمد طاہری (راؤ محمد حنیف کالونی، نوابشاہ، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر شکیل احمد طاہری",
            "locationUrdu": "راؤ محمد حنیف کالونی، نوابشاہ، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-8",
            "rawText": "محترم خلیفہ مولانا عبدالجبار تنیو طاہری (نوابشاہ، سن خلافت 1990ء)",
            "nameUrdu": "محترم خلیفہ مولانا عبدالجبار تنیو طاہری",
            "locationUrdu": "نوابشاہ، سن خلافت 1990ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-9",
            "rawText": "محترم خلیفہ حاجی محمد عمر بروہی طاہری (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ حاجی محمد عمر بروہی طاہری",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-10",
            "rawText": "محترم خلیفہ غلام محمد تنیو بخشی طاہری (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ غلام محمد تنیو بخشی طاہری",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-11",
            "rawText": "محترم خلیفہ غلام مرتضیٰ چنڑ طاہری (نوابشاہ، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ غلام مرتضیٰ چنڑ طاہری",
            "locationUrdu": "نوابشاہ، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-12",
            "rawText": "محترم خلیفہ کرنل ڈاکٹر غلام یاسین سیال طاہری (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ کرنل ڈاکٹر غلام یاسین سیال طاہری",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-13",
            "rawText": "محترم خلیفہ مفتی مختیار احمد ٹاٹری طاہری (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ مفتی مختیار احمد ٹاٹری طاہری",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-25-14",
            "rawText": "محترم خلیفہ نثار احمد خاصخیلی طاہری (سکرنڈ، ضلع نوابشاہ، سنِ خلافت 2000ء)",
            "nameUrdu": "محترم خلیفہ نثار احمد خاصخیلی طاہری",
            "locationUrdu": "سکرنڈ، ضلع نوابشاہ، سنِ خلافت 2000ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع نوشہروفیروز",
        "districtEn": "Naushahro Feroze",
        "items": [
          {
            "id": "kh-sindh-26-1",
            "rawText": "محترم خلیفہ مولانا محمد ادریس ڈاہری بخشی طاہری (شاہپور جہانیہ، مورو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ مولانا محمد ادریس ڈاہری بخشی طاہری",
            "locationUrdu": "شاہپور جہانیہ، مورو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-2",
            "rawText": "محترم خلیفہ مولانا محمد اسحاق شر بلوچ طاہری (درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا محمد اسحاق شر بلوچ طاہری",
            "locationUrdu": "درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-3",
            "rawText": "محترم خلیفہ مولانا اسرار احمد شر بلوچ طاہری (اللہ آباد شریف، ضلع نوشہروفیروز، سن خلافت 2009)، فرزند خلیفہ مولانا مشتاق احمد شر بلوچ بخشی طاہری",
            "nameUrdu": "محترم خلیفہ مولانا اسرار احمد شر بلوچ طاہری",
            "locationUrdu": "اللہ آباد شریف، ضلع نوشہروفیروز، سن خلافت 2009",
            "notesUrdu": "فرزند خلیفہ مولانا مشتاق احمد شر بلوچ بخشی طاہری",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-4",
            "rawText": "محترم خلیفہ مولانا محمد اسلم راجپر طاہری (تعلقہ محراب پور، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ مولانا محمد اسلم راجپر طاہری",
            "locationUrdu": "تعلقہ محراب پور، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-5",
            "rawText": "محترم خلیفہ مولانا اللہ رکھیو چنہ طاہری (خانواہن، ضلع نوشہروفیروز، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ مولانا اللہ رکھیو چنہ طاہری",
            "locationUrdu": "خانواہن، ضلع نوشہروفیروز، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-6",
            "rawText": "محترم خلیفہ محمد ایوب کلیری طاہری (کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ محمد ایوب کلیری طاہری",
            "locationUrdu": "کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-7",
            "rawText": "محترم خلیفہ جان محمد چانڈیو طاہری (مٹھیانی، ضلع نوشہروفیروز، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ جان محمد چانڈیو طاہری",
            "locationUrdu": "مٹھیانی، ضلع نوشہروفیروز، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-8",
            "rawText": "حضرت خلیفہ صاحبزادہ محمد جعفر صادق عباسی طاہری (درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز سندھ، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "حضرت خلیفہ صاحبزادہ محمد جعفر صادق عباسی طاہری",
            "locationUrdu": "درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز سندھ، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-9",
            "rawText": "محترم خلیفہ مولانا حافظ محمد جمیل عباسی طاہری (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز) (نواسہ حضرت سوہنا سائیں نور اللہ مرقدہ، فرزند حضرت خلیفہ غلام مرتضیٰ عباسی)",
            "nameUrdu": "محترم خلیفہ مولانا حافظ محمد جمیل عباسی طاہری",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": "(نواسہ حضرت سوہنا سائیں نور اللہ مرقدہ، فرزند حضرت خلیفہ غلام مرتضیٰ عباسی)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-10",
            "rawText": "محترم خلیفہ مفتی حبیب الرحمان گبول طاہری (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز، سن خلافت 2008)، فرزند خلیفہ مولانا محمد بخش گبول بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ مفتی حبیب الرحمان گبول طاہری",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": "فرزند خلیفہ مولانا محمد بخش گبول بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-11",
            "rawText": "محترم خلیفہ محمد حنیف سولنگی طاہری (درٻیلو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ محمد حنیف سولنگی طاہری",
            "locationUrdu": "درٻیلو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-12",
            "rawText": "محترم خلیفہ دین محمد چنڑ طاہری (گوٹھ سومر چنڑ، تعلقہ کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ دین محمد چنڑ طاہری",
            "locationUrdu": "گوٹھ سومر چنڑ، تعلقہ کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-13",
            "rawText": "محترم خلیفہ رفیق احمد آرائیں طاہری (بھریا ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ رفیق احمد آرائیں طاہری",
            "locationUrdu": "بھریا ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-14",
            "rawText": "محترم خلیفہ شاہنواز پنہور طاہری (گوٹھ قمر الدین چانڈیو، مورو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ شاہنواز پنہور طاہری",
            "locationUrdu": "گوٹھ قمر الدین چانڈیو، مورو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-15",
            "rawText": "محترم خلیفہ شمس الدین سولنگی طاہری (مورو، ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ شمس الدین سولنگی طاہری",
            "locationUrdu": "مورو، ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-16",
            "rawText": "محترم خلیفہ قاری عاشق حسین راجپر طاہری (محراب پور، ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ قاری عاشق حسین راجپر طاہری",
            "locationUrdu": "محراب پور، ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-17",
            "rawText": "محترم خلیفہ مولانا محمد عاشق لنڈ بلوچ طاہری (درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عاشق لنڈ بلوچ طاہری",
            "locationUrdu": "درگاہ اللہ آباد شریف، کنڈیارو، ضلع نوشہرو فیروز، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-18",
            "rawText": "محترم خلیفہ مفتی عبدالرحمان اللہ آبادی غفاری بخشی طاہری (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ مفتی عبدالرحمان اللہ آبادی غفاری بخشی طاہری",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-19",
            "rawText": "محترم خلیفہ سید عبدالکریم شاہ طاہری (المرکز غفاریہ، مورو، ضلع نوشہروفیروز، سن خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ سید عبدالکریم شاہ طاہری",
            "locationUrdu": "المرکز غفاریہ، مورو، ضلع نوشہروفیروز، سن خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-20",
            "rawText": "محترم خلیفہ محمد عظیم مہیسر طاہری (تعلقہ محراب پور، ضلع نوشہروفیروز، سن خلافت 1993ء)",
            "nameUrdu": "محترم خلیفہ محمد عظیم مہیسر طاہری",
            "locationUrdu": "تعلقہ محراب پور، ضلع نوشہروفیروز، سن خلافت 1993ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-21",
            "rawText": "محترم خلیفہ علی اکبر مری بلوچ طاہری (تعلقہ محراب پور، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ علی اکبر مری بلوچ طاہری",
            "locationUrdu": "تعلقہ محراب پور، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-22",
            "rawText": "محترم خلیفہ غلام محمد میمن طاہری (مورو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ غلام محمد میمن طاہری",
            "locationUrdu": "مورو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-23",
            "rawText": "محترم خلیفہ مولانا فتح علی عباسی طاہری (دالی، بھریا، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ مولانا فتح علی عباسی طاہری",
            "locationUrdu": "دالی، بھریا، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-24",
            "rawText": "محترم خلیفہ محمد قاسم گبول بخشی طاہری (اللہ آباد شریف)، فرزند خلیفہ محمد بخش گبول صاحب",
            "nameUrdu": "محترم خلیفہ محمد قاسم گبول بخشی طاہری",
            "locationUrdu": "اللہ آباد شریف",
            "notesUrdu": "فرزند خلیفہ محمد بخش گبول صاحب",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-25",
            "rawText": "محترم خلیفہ محمد یار سبزوئی بلوچ بخشی طاہری (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ محمد یار سبزوئی بلوچ بخشی طاہری",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-26",
            "rawText": "محترم خلیفہ مشتاق احمد شر بلوچ بخشی طاہری (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ مشتاق احمد شر بلوچ بخشی طاہری",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-27",
            "rawText": "محترم خلیفہ قاضی مشہود احمد قریشی طاہری (نوشہرو فیروز، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ قاضی مشہود احمد قریشی طاہری",
            "locationUrdu": "نوشہرو فیروز، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-28",
            "rawText": "محترم خلیفہ منظور احمد عباسی طاہری (دالی، ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ منظور احمد عباسی طاہری",
            "locationUrdu": "دالی، ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-29",
            "rawText": "محترم خلیفہ ڈاکٹر منور حسین قریشی طاہری (خانواہن کنڈیارو، ضلع نوشہروفیروز)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر منور حسین قریشی طاہری",
            "locationUrdu": "خانواہن کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-30",
            "rawText": "محترم خلیفہ منور علی چنڑ طاہری (سومر چنڑ، ضلع نوشہروفیروز، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ منور علی چنڑ طاہری",
            "locationUrdu": "سومر چنڑ، ضلع نوشہروفیروز، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-31",
            "rawText": "محترم خلیفہ میہر الدین منگریو طاہری (کنڈیارو، ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ میہر الدین منگریو طاہری",
            "locationUrdu": "کنڈیارو، ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-32",
            "rawText": "محترم خلیفہ نذیر احمد چنہ طاہری (دربیلہ، کنڈیارو، ضلع نوشہروفیروز، سن خلافت 1995ء)",
            "nameUrdu": "محترم خلیفہ نذیر احمد چنہ طاہری",
            "locationUrdu": "دربیلہ، کنڈیارو، ضلع نوشہروفیروز، سن خلافت 1995ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-33",
            "rawText": "محترم خلیفہ مولانا محمد ہاشم گبول طاہری (اللہ آباد شریف کنڈیارو، ضلع نوشہروفیروز)، فرزند خلیفہ مولانا محمد قاسم گبول بخشی طاہری",
            "nameUrdu": "محترم خلیفہ مولانا محمد ہاشم گبول طاہری",
            "locationUrdu": "اللہ آباد شریف کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": "فرزند خلیفہ مولانا محمد قاسم گبول بخشی طاہری",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-34",
            "rawText": "محترم خلیفہ حافظ ہدایت اللہ سومرو طاہری (ضلع نوشہروفیروز، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ حافظ ہدایت اللہ سومرو طاہری",
            "locationUrdu": "ضلع نوشہروفیروز، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-35",
            "rawText": "محترم خلیفہ ڈاکٹر وجیہ الدین میمن طاہری (مورو، ضلع نوشہرو فیروز، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر وجیہ الدین میمن طاہری",
            "locationUrdu": "مورو، ضلع نوشہرو فیروز، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-sindh-26-36",
            "rawText": "محترم خلیفہ محمد یونس چنہ طاہری عرف ڈاڈا سائیں (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز)، سالہ حضرت سجن سائیں مدظلہ العالی، فرزند خلیفہ ڈاکٹر عبداللطیف چنہ رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ محمد یونس چنہ طاہری عرف ڈاڈا سائیں",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": "سالہ حضرت سجن سائیں مدظلہ العالی، فرزند خلیفہ ڈاکٹر عبداللطیف چنہ رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": null
  },
  {
    "regionId": "punjab",
    "regionTitleUrdu": "خلفاء کرام صوبہ پنجاب",
    "regionTitleEn": "Khulafa-e-Karam (Punjab Province)",
    "regionTitleAr": "الخلفاء الكرام - إقليم البنجاب",
    "districts": [
      {
        "districtUrdu": "اسلام آباد",
        "districtEn": "Islamabad",
        "items": [
          {
            "id": "kh-punjab-1-1",
            "rawText": "محترم خلیفہ مولانا محمد اسلم آرائیں طاہری (میرا بیگیوال، اسلام آباد)",
            "nameUrdu": "محترم خلیفہ مولانا محمد اسلم آرائیں طاہری",
            "locationUrdu": "میرا بیگیوال، اسلام آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-1-2",
            "rawText": "محترم خلیفہ محمد صدیق طاہری (اسلام آباد)",
            "nameUrdu": "محترم خلیفہ محمد صدیق طاہری",
            "locationUrdu": "اسلام آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-1-3",
            "rawText": "محترم خلیفہ محمد منظور ضیاء طاہری (اسلام آباد، خلافت 22 نومبر 2011)",
            "nameUrdu": "محترم خلیفہ محمد منظور ضیاء طاہری",
            "locationUrdu": "اسلام آباد، خلافت 22 نومبر 2011",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع اوکاڑہ",
        "districtEn": "Okara",
        "items": [
          {
            "id": "kh-punjab-2-1",
            "rawText": "محترم خلیفہ غلام رسول طاہری (تحصیل دیپالپور، ضلع اوکاڑہ، پنجاب)",
            "nameUrdu": "محترم خلیفہ غلام رسول طاہری",
            "locationUrdu": "تحصیل دیپالپور، ضلع اوکاڑہ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع بہاولپور",
        "districtEn": "Bahawalpur",
        "items": [
          {
            "id": "kh-punjab-3-1",
            "rawText": "محترم خلیفہ محمد شفیع بخشی طاہری (درگاہ غفاریہ طاہریہ، بہاولپور، پنجاب)",
            "nameUrdu": "محترم خلیفہ محمد شفیع بخشی طاہری",
            "locationUrdu": "درگاہ غفاریہ طاہریہ، بہاولپور، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع بہاول نگر",
        "districtEn": "Bahawalnagar",
        "items": [
          {
            "id": "kh-punjab-4-1",
            "rawText": "محترم خلیفہ محمد انور طاہری (منچن آباد، ضلع بہاول نگر، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد انور طاہری",
            "locationUrdu": "منچن آباد، ضلع بہاول نگر، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ٹوبہ ٹیک سنگھ",
        "districtEn": "Toba Tek Singh",
        "items": [
          {
            "id": "kh-punjab-5-1",
            "rawText": "محترم خلیفہ علی محمد ارشد طاہری (نزد چٹیانہ، تحصیل و ضلع ٹوبہ ٹیک سنگھ، پنجاب)، فرزند خلیفہ حاجی نیک محمد ارشد رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ علی محمد ارشد طاہری",
            "locationUrdu": "نزد چٹیانہ، تحصیل و ضلع ٹوبہ ٹیک سنگھ، پنجاب",
            "notesUrdu": "فرزند خلیفہ حاجی نیک محمد ارشد رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع پاک پتن",
        "districtEn": "Pakpattan",
        "items": [
          {
            "id": "kh-punjab-6-1",
            "rawText": "محترم خلیفہ حاجی محمد اقرار بھٹی طاہری (تحصیل عارف والا، ضلع پاک پتن، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ حاجی محمد اقرار بھٹی طاہری",
            "locationUrdu": "تحصیل عارف والا، ضلع پاک پتن، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-6-2",
            "rawText": "محترم خلیفہ محمد ظفر جوئیہ طاہری (تحصیل عارف والا، ضلع پاک پتن، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد ظفر جوئیہ طاہری",
            "locationUrdu": "تحصیل عارف والا، ضلع پاک پتن، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع جھنگ",
        "districtEn": "Jhang",
        "items": [
          {
            "id": "kh-punjab-7-1",
            "rawText": "محترم خلیفہ غلام باقر طاہری (تحصیل و ضلع جھنگ، پنجاب)",
            "nameUrdu": "محترم خلیفہ غلام باقر طاہری",
            "locationUrdu": "تحصیل و ضلع جھنگ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع چکوال",
        "districtEn": "Chakwal",
        "items": [
          {
            "id": "kh-punjab-8-1",
            "rawText": "محترم خلیفہ عبدالستار طاہری (چکوال، پنجاب، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ عبدالستار طاہری",
            "locationUrdu": "چکوال، پنجاب، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع راولپنڈی",
        "districtEn": "Rawalpindi",
        "items": [
          {
            "id": "kh-punjab-9-1",
            "rawText": "محترم خلیفہ سید محمد اسماعیل شاہ بخشی طاہری (درگاہ طاہریہ مرکز روح الاسلام، نصیر آباد، پشاور روڈ، راولپنڈی)",
            "nameUrdu": "محترم خلیفہ سید محمد اسماعیل شاہ بخشی طاہری",
            "locationUrdu": "درگاہ طاہریہ مرکز روح الاسلام، نصیر آباد، پشاور روڈ، راولپنڈی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-9-2",
            "rawText": "محترم خلیفہ بلال یونس شیخ طاہری (راولپنڈی، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ بلال یونس شیخ طاہری",
            "locationUrdu": "راولپنڈی، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-9-3",
            "rawText": "محترم خلیفہ مولانا ثاقب یاسین طاہری (ساگری، ضلع راولپنڈی، سن خلافت نومبر 2014)",
            "nameUrdu": "محترم خلیفہ مولانا ثاقب یاسین طاہری",
            "locationUrdu": "ساگری، ضلع راولپنڈی، سن خلافت نومبر 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-9-4",
            "rawText": "محترم خلیفہ محمد ریاض طاہری (ڈاکخانہ ساہلی سینیٹوریم، تحصیل مری، ضلع راولپنڈی، پنجاب)",
            "nameUrdu": "محترم خلیفہ محمد ریاض طاہری",
            "locationUrdu": "ڈاکخانہ ساہلی سینیٹوریم، تحصیل مری، ضلع راولپنڈی، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع رحیم یار خان",
        "districtEn": "Rahim Yar Khan",
        "items": [
          {
            "id": "kh-punjab-10-1",
            "rawText": "محترم خلیفہ محمد رمضان آرائیں طاہری (رحیم یار خان، پنجاب، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد رمضان آرائیں طاہری",
            "locationUrdu": "رحیم یار خان، پنجاب، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-10-2",
            "rawText": "محترم خلیفہ ماسٹر لیاقت علی طاہری (تحصیل و ضلع رحیم یار خان،پنجاب)، سن خلافت دسمبر 2010ء",
            "nameUrdu": "محترم خلیفہ ماسٹر لیاقت علی طاہری",
            "locationUrdu": "تحصیل و ضلع رحیم یار خان،پنجاب",
            "notesUrdu": "سن خلافت دسمبر 2010ء",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-10-3",
            "rawText": "محترم خلیفہ محمد معین الدین عمر طاہری (گوٹھ ماچھی، تحصیل صادق آباد، ضلع رحیم یار خان، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد معین الدین عمر طاہری",
            "locationUrdu": "گوٹھ ماچھی، تحصیل صادق آباد، ضلع رحیم یار خان، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع سیالکوٹ",
        "districtEn": "Sialkot",
        "items": [
          {
            "id": "kh-punjab-11-1",
            "rawText": "محترم خلیفہ محمد اسماعیل طاہری (تحصیل ڈسکہ، ضلع سیالکوٹ، پنجاب، خلافت 22 نومبر 2011)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل طاہری",
            "locationUrdu": "تحصیل ڈسکہ، ضلع سیالکوٹ، پنجاب، خلافت 22 نومبر 2011",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-11-2",
            "rawText": "محترم خلیفہ صلاح الدین ایوبی طاہری (سیالکوٹ، پنجاب)، (فرزند خلیفہ ریاست علی صاحب)",
            "nameUrdu": "محترم خلیفہ صلاح الدین ایوبی طاہری",
            "locationUrdu": "سیالکوٹ، پنجاب",
            "notesUrdu": "(فرزند خلیفہ ریاست علی صاحب)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-11-3",
            "rawText": "محترم خلیفہ حاجی عطاء الرحمان طاہری (سیالکوٹ، پنجاب)",
            "nameUrdu": "محترم خلیفہ حاجی عطاء الرحمان طاہری",
            "locationUrdu": "سیالکوٹ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-11-4",
            "rawText": "محترم خلیفہ سید غلام رسول طاہری (بمقام کھروٹہ سیداں، تحصل و ضلع سیالکوٹ، پنجاب، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ سید غلام رسول طاہری",
            "locationUrdu": "بمقام کھروٹہ سیداں، تحصل و ضلع سیالکوٹ، پنجاب، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع شیخوپورہ",
        "districtEn": "Sheikhupura",
        "items": [
          {
            "id": "kh-punjab-12-1",
            "rawText": "محترم خلیفہ محمد اختر جاوید طاہری (شیخوپورہ، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد اختر جاوید طاہری",
            "locationUrdu": "شیخوپورہ، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-12-2",
            "rawText": "محترم خلیفہ سید سجاد حسین شاہ طاہری (فاروق آباد، ضلع شیخوپورہ، پنجاب)",
            "nameUrdu": "محترم خلیفہ سید سجاد حسین شاہ طاہری",
            "locationUrdu": "فاروق آباد، ضلع شیخوپورہ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع فیصل آباد",
        "districtEn": "Faisalabad",
        "items": [
          {
            "id": "kh-punjab-13-1",
            "rawText": "محترم خلیفہ مولانا محمد شہزاد طاہری (تحصیل جڑانوالہ، ضلع فیصل آباد، سن خلافت نومبر 2014)",
            "nameUrdu": "محترم خلیفہ مولانا محمد شہزاد طاہری",
            "locationUrdu": "تحصیل جڑانوالہ، ضلع فیصل آباد، سن خلافت نومبر 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-2",
            "rawText": "محترم خلیفہ محمد دلبر خان طاہری (جڑانوالہ، ضلع فیصل آباد، سن خلافت نومبر 2014)",
            "nameUrdu": "محترم خلیفہ محمد دلبر خان طاہری",
            "locationUrdu": "جڑانوالہ، ضلع فیصل آباد، سن خلافت نومبر 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-3",
            "rawText": "محترم خلیفہ محمد عمر فاروق طاہری (فرزند خلیفہ نور حسین طاہری، تحصیل جڑانولہ، ضلع فیصل آباد، سن خلافت نومبر 2014)",
            "nameUrdu": "محترم خلیفہ محمد عمر فاروق طاہری",
            "locationUrdu": "فرزند خلیفہ نور حسین طاہری، تحصیل جڑانولہ، ضلع فیصل آباد، سن خلافت نومبر 2014",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-4",
            "rawText": "محترم خلیفہ فیاض علی طاہری، مکوانہ ضلع فیصل آباد، پنجاب، خلافت ۲۴ ستمبر ۲۰۱۳",
            "nameUrdu": "محترم خلیفہ فیاض علی طاہری، مکوانہ ضلع فیصل آباد، پنجاب، خلافت ۲۴ ستمبر ۲۰۱۳",
            "locationUrdu": "",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-5",
            "rawText": "محترم خلیفہ حکیم محمد حبیب طاہری (مرکز روح الاسلام، مائی مستانی، مکوانہ، تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ حکیم محمد حبیب طاہری",
            "locationUrdu": "مرکز روح الاسلام، مائی مستانی، مکوانہ، تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-6",
            "rawText": "محترم خلیفہ محمد رمضان بخشی طاہری (دربار پیر مٹھا، چک نمبر 562 ک ب تحصل جڑانوالہ، فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ محمد رمضان بخشی طاہری",
            "locationUrdu": "دربار پیر مٹھا، چک نمبر 562 ک ب تحصل جڑانوالہ، فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-7",
            "rawText": "محترم خلیفہ طالب حسین طاہری (تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب)، فرزند خلیفہ علی احمد صاحب",
            "nameUrdu": "محترم خلیفہ طالب حسین طاہری",
            "locationUrdu": "تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب",
            "notesUrdu": "فرزند خلیفہ علی احمد صاحب",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-8",
            "rawText": "محترم خلیفہ علی احمد بخشی طاہری (تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ علی احمد بخشی طاہری",
            "locationUrdu": "تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-9",
            "rawText": "محترم خلیفہ غلام غوث طاہری (غلام محمد آباد، فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ غلام غوث طاہری",
            "locationUrdu": "غلام محمد آباد، فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-10",
            "rawText": "محترم خلیفہ ملک منظور احمد طاہری (تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ ملک منظور احمد طاہری",
            "locationUrdu": "تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-13-11",
            "rawText": "محترم خلیفہ ڈاکٹر محمد یوسف بخشی طاہری (منڈی بچیانہ، تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب، سنِ خلافت 1975ء)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر محمد یوسف بخشی طاہری",
            "locationUrdu": "منڈی بچیانہ، تحصل جڑانوالہ، ضلع فیصل آباد، پنجاب، سنِ خلافت 1975ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع گجرات",
        "districtEn": "Gujrat",
        "items": [
          {
            "id": "kh-punjab-14-1",
            "rawText": "محترم خلیفہ حاجی محمد اکرم طاہری (ڈاکخانہ جوڑہ، کرنانہ تحصیل کھاریاں، ضلع گجرات، پنجاب)",
            "nameUrdu": "محترم خلیفہ حاجی محمد اکرم طاہری",
            "locationUrdu": "ڈاکخانہ جوڑہ، کرنانہ تحصیل کھاریاں، ضلع گجرات، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-14-2",
            "rawText": "محترم خلیفہ محمد رفیق طاہری (ڈاکخانہ جوڑہ، کرنانہ تحصیل کھاریاں، ضلع گجرات، پنجاب)",
            "nameUrdu": "محترم خلیفہ محمد رفیق طاہری",
            "locationUrdu": "ڈاکخانہ جوڑہ، کرنانہ تحصیل کھاریاں، ضلع گجرات، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع گجرانوالہ",
        "districtEn": "Gujranwala",
        "items": [
          {
            "id": "kh-punjab-15-1",
            "rawText": "محترم خلیفہ مولانا محمد امجد طاہری (گوجرانوالہ، پنجاب)",
            "nameUrdu": "محترم خلیفہ مولانا محمد امجد طاہری",
            "locationUrdu": "گوجرانوالہ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-15-2",
            "rawText": "محترم خلیفہ ذوالفقار علی طاہری (گوجرانوالہ، پنجاب)",
            "nameUrdu": "محترم خلیفہ ذوالفقار علی طاہری",
            "locationUrdu": "گوجرانوالہ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع لاہور",
        "districtEn": "Lahore",
        "items": [
          {
            "id": "kh-punjab-16-1",
            "rawText": "محترم خلیفہ جمیل احمد قریشی طاہری (بیدیاں روڈ، لاہور کینٹ)",
            "nameUrdu": "محترم خلیفہ جمیل احمد قریشی طاہری",
            "locationUrdu": "بیدیاں روڈ، لاہور کینٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-16-2",
            "rawText": "محترم خلیفہ مولانا قاری حبیب الرحمان طاہری (مرکز روح الاسلام طاہریہ، بلال ٹاؤن، بیدیاں روڈ، لاہور کینٹ)",
            "nameUrdu": "محترم خلیفہ مولانا قاری حبیب الرحمان طاہری",
            "locationUrdu": "مرکز روح الاسلام طاہریہ، بلال ٹاؤن، بیدیاں روڈ، لاہور کینٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-16-3",
            "rawText": "محترم خلیفہ ڈاکٹر شفیق احمد طاہری (عنایت کالونی، بیدیاں روڈ، لاہور کینٹ)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر شفیق احمد طاہری",
            "locationUrdu": "عنایت کالونی، بیدیاں روڈ، لاہور کینٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-16-4",
            "rawText": "محترم خلیفہ عبدالرزاق طاہری (مکا کالونی، گلبرگ III، لاہور)",
            "nameUrdu": "محترم خلیفہ عبدالرزاق طاہری",
            "locationUrdu": "مکا کالونی، گلبرگ III، لاہور",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع مظفرگڑھ",
        "districtEn": "Muzaffargarh",
        "items": [
          {
            "id": "kh-punjab-17-1",
            "rawText": "محترم خلیفہ مولانا محمد رفیق شاہ صاحب بخشی طاہری (دربار مسکین پور شریف، شہر سلطان، تحصل جتوئی، ضلع مظفرگڑھ، پنجاب)، نواسہ حضرت خواجہ پیر فضل علی شاہ قریشی رحمۃ اللہ تعالیٰ علیہ",
            "nameUrdu": "محترم خلیفہ مولانا محمد رفیق شاہ صاحب بخشی طاہری",
            "locationUrdu": "دربار مسکین پور شریف، شہر سلطان، تحصل جتوئی، ضلع مظفرگڑھ، پنجاب",
            "notesUrdu": "نواسہ حضرت خواجہ پیر فضل علی شاہ قریشی رحمۃ اللہ تعالیٰ علیہ",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-17-2",
            "rawText": "محترم خلیفہ محمد معصوم بخشی طاہری (دربار حبیبیہ، سناواں، تحصیل کوٹ ادو، ضلع مظفر گڑھ، پنجاب)",
            "nameUrdu": "محترم خلیفہ محمد معصوم بخشی طاہری",
            "locationUrdu": "دربار حبیبیہ، سناواں، تحصیل کوٹ ادو، ضلع مظفر گڑھ، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ملتان",
        "districtEn": "Multan",
        "items": [
          {
            "id": "kh-punjab-18-1",
            "rawText": "محترم خلیفہ محمد رفیق طاہری (نیو ملتان، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ محمد رفیق طاہری",
            "locationUrdu": "نیو ملتان، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-18-2",
            "rawText": "محترم خلیفہ عبدالستار طاہری (نیو ملتان، پنجاب)",
            "nameUrdu": "محترم خلیفہ عبدالستار طاہری",
            "locationUrdu": "نیو ملتان، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع نارووال",
        "districtEn": "Narowal",
        "items": [
          {
            "id": "kh-punjab-19-1",
            "rawText": "محترم خلیفہ محمد امین طاہری (تحصیل شکرگڑھ، ضلع نارووال، پنجاب، خلافت 25 دسمبر 2012)",
            "nameUrdu": "محترم خلیفہ محمد امین طاہری",
            "locationUrdu": "تحصیل شکرگڑھ، ضلع نارووال، پنجاب، خلافت 25 دسمبر 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-19-2",
            "rawText": "محترم خلیفہ ریاست علی بخشی طاہری (تحصل شکرگڑھ، ضلع نارووال، پنجاب)",
            "nameUrdu": "محترم خلیفہ ریاست علی بخشی طاہری",
            "locationUrdu": "تحصل شکرگڑھ، ضلع نارووال، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-19-3",
            "rawText": "محترم خلیفہ مختار احمد طاہری (مہار شریف، ڈاکخانہ خاص ناروال، تحصیل و ضلع نارووال، پنجاب)",
            "nameUrdu": "محترم خلیفہ مختار احمد طاہری",
            "locationUrdu": "مہار شریف، ڈاکخانہ خاص ناروال، تحصیل و ضلع نارووال، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع ننکانہ صاحب",
        "districtEn": "Nankana Sahib",
        "items": [
          {
            "id": "kh-punjab-20-1",
            "rawText": "محترم خلیفہ سید شاہ نواز طاہری (تحصل و ضلع ننکانہ صاحب، پنجاب)",
            "nameUrdu": "محترم خلیفہ سید شاہ نواز طاہری",
            "locationUrdu": "تحصل و ضلع ننکانہ صاحب، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-20-2",
            "rawText": "محترم خلیفہ عبدالخالق طاہری (دربار پیر مٹھا رحمت پور شریف، بچیکی، تحصل و ضلع ننکانہ صاحب، پنجاب)",
            "nameUrdu": "محترم خلیفہ عبدالخالق طاہری",
            "locationUrdu": "دربار پیر مٹھا رحمت پور شریف، بچیکی، تحصل و ضلع ننکانہ صاحب، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-punjab-20-3",
            "rawText": "محترم خلیفہ حاجی فلک شیر طاہری، (تحصیل شاہ کوٹ، ضلع ننکانہ صاحب، پنجاب، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ حاجی فلک شیر طاہری،",
            "locationUrdu": "تحصیل شاہ کوٹ، ضلع ننکانہ صاحب، پنجاب، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع وہاڑی",
        "districtEn": "Vehari",
        "items": [
          {
            "id": "kh-punjab-21-1",
            "rawText": "محترم خلیفہ قاری اللہ وسایہ طاہری (سلطان پور، ضلع وہاڑی، پنجاب، سن خلافت 2010)",
            "nameUrdu": "محترم خلیفہ قاری اللہ وسایہ طاہری",
            "locationUrdu": "سلطان پور، ضلع وہاڑی، پنجاب، سن خلافت 2010",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": null
  },
  {
    "regionId": "balochistan",
    "regionTitleUrdu": "خلفاء کرام صوبہ بلوچستان",
    "regionTitleEn": "Khulafa-e-Karam (Balochistan Province)",
    "regionTitleAr": "الخلفاء الكرام - إقليم بلوشستان",
    "districts": [
      {
        "districtUrdu": "ضلع اواران",
        "districtEn": "Awaran",
        "items": [
          {
            "id": "kh-balochistan-1-1",
            "rawText": "محترم خلیفہ مولانا محمد جنید طاہری (ضلع اواران، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا محمد جنید طاہری",
            "locationUrdu": "ضلع اواران، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع جعفرآباد",
        "districtEn": "Jafarabad",
        "items": [
          {
            "id": "kh-balochistan-2-1",
            "rawText": "محترم خلیفہ مولانا حافظ خاوند بخش طاہری (ضلع جعفرآباد، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا حافظ خاوند بخش طاہری",
            "locationUrdu": "ضلع جعفرآباد، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-2-2",
            "rawText": "محترم خلیفہ مولانا محمد ساجد طاہری (ضلع جعفرآباد، بلوچستان، سن خلافت 2008)",
            "nameUrdu": "محترم خلیفہ مولانا محمد ساجد طاہری",
            "locationUrdu": "ضلع جعفرآباد، بلوچستان، سن خلافت 2008",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع خضدار",
        "districtEn": "Khuzdar",
        "items": [
          {
            "id": "kh-balochistan-3-1",
            "rawText": "محترم خلیفہ غلام حسین بروہی طاہری (گوٹھ ساند فقیر، درگاہ شاہ نورانی، ضلع خضدار، بلوچستان، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ غلام حسین بروہی طاہری",
            "locationUrdu": "گوٹھ ساند فقیر، درگاہ شاہ نورانی، ضلع خضدار، بلوچستان، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-3-2",
            "rawText": "محترم خلیفہ مفتی محمد کریم بروہی طاہری (ضلع خضدار، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مفتی محمد کریم بروہی طاہری",
            "locationUrdu": "ضلع خضدار، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-3-3",
            "rawText": "محترم خلیفہ مولانا نور محمد بروہی طاہری (ضلع خضدار بلوچستان، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ مولانا نور محمد بروہی طاہری",
            "locationUrdu": "ضلع خضدار بلوچستان، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع لسبیلہ",
        "districtEn": "Lasbela",
        "items": [
          {
            "id": "kh-balochistan-4-1",
            "rawText": "محترم خلیفہ حسین بخش جمالی طاہری (گوٹھ لوہی، تحصیل دریجی، ضلع لسبیلہ، بلوچستان، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ حسین بخش جمالی طاہری",
            "locationUrdu": "گوٹھ لوہی، تحصیل دریجی، ضلع لسبیلہ، بلوچستان، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-2",
            "rawText": "محترم خلیفہ مولانا محمد دلمراد بلوچ طاہری (ضلع لسبیلہ، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا محمد دلمراد بلوچ طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-3",
            "rawText": "محترم خلیفہ مفتی محمد رحیم بلوچ طاہری (ضلع لسبیلہ، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مفتی محمد رحیم بلوچ طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-4",
            "rawText": "محترم خلیفہ مولانا محمد شریف بلوچ طاہری (ضلع لسبیلہ، بلوچستان، سن خلافت 2002ء)",
            "nameUrdu": "محترم خلیفہ مولانا محمد شریف بلوچ طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان، سن خلافت 2002ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-5",
            "rawText": "محترم خلیفہ عبدالمجید شیخ طاہری (گڈانی، ضلع لسبیلہ، بلوچستان، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ عبدالمجید شیخ طاہری",
            "locationUrdu": "گڈانی، ضلع لسبیلہ، بلوچستان، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-6",
            "rawText": "محترم خلیفہ مولانا محمد عمر بخشی طاہری (ضلع لسبیلہ، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا محمد عمر بخشی طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-7",
            "rawText": "محترم خلیفہ مولانا محمد مشتاق جت بخشی طاہری (ضلع لسبیلہ، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا محمد مشتاق جت بخشی طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-balochistan-4-8",
            "rawText": "محترم خلیفہ مولانا محمد موسیٰ منگیانی طاہری (ضلع لسبیلہ، بلوچستان)",
            "nameUrdu": "محترم خلیفہ مولانا محمد موسیٰ منگیانی طاہری",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع لورالائی",
        "districtEn": "Loralai",
        "items": [
          {
            "id": "kh-balochistan-5-1",
            "rawText": "محترم خلیفہ محمد بخش مری بلوچ طاہری (ضلع لورالائی، بلوچستان، خلافت 22 نومبر 2011)",
            "nameUrdu": "محترم خلیفہ محمد بخش مری بلوچ طاہری",
            "locationUrdu": "ضلع لورالائی، بلوچستان، خلافت 22 نومبر 2011",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      },
      {
        "districtUrdu": "ضلع نصیرآباد",
        "districtEn": "Nasirabad",
        "items": [
          {
            "id": "kh-balochistan-6-1",
            "rawText": "محترم خلیفہ سوالی خان کورار طاہری (نزد دیرہ مراد خان جمالی، تحصیل چھتر، ضلع نصیرآباد، بلوچستان، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ سوالی خان کورار طاہری",
            "locationUrdu": "نزد دیرہ مراد خان جمالی، تحصیل چھتر، ضلع نصیرآباد، بلوچستان، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": null
  },
  {
    "regionId": "khyber_pakhtunkhwa",
    "regionTitleUrdu": "خلفاء کرام صوبہ خیبر پختونخوا",
    "regionTitleEn": "Khulafa-e-Karam (Khyber Pakhtunkhwa)",
    "regionTitleAr": "الخلفاء الكرام - إقليم خيبر بختونخوا",
    "districts": [
      {
        "districtUrdu": "خلفاء کرام صوبہ خیبر پختونخوا",
        "districtEn": "Khulafa-e-Karam (Khyber Pakhtunkhwa)",
        "items": [
          {
            "id": "kh-khyber_pakhtunkhwa-1",
            "rawText": "محترم خلیفہ صوفی محمد حنیف طاہری (پشاور)",
            "nameUrdu": "محترم خلیفہ صوفی محمد حنیف طاہری",
            "locationUrdu": "پشاور",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-khyber_pakhtunkhwa-2",
            "rawText": "محترم خلیفہ رقیم خان طاہری (ضلع کڑک، صوبہ خیبر پختونخوا)",
            "nameUrdu": "محترم خلیفہ رقیم خان طاہری",
            "locationUrdu": "ضلع کڑک، صوبہ خیبر پختونخوا",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-khyber_pakhtunkhwa-3",
            "rawText": "محترم خلیفہ حاجی محمد سلام وزیر بخشی طاہری (ضلع لکی مروت، سرحد، حالیہ رہائش اسلام آباد)",
            "nameUrdu": "محترم خلیفہ حاجی محمد سلام وزیر بخشی طاہری",
            "locationUrdu": "ضلع لکی مروت، سرحد، حالیہ رہائش اسلام آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-khyber_pakhtunkhwa-4",
            "rawText": "محترم خلیفہ محمد قاسم جان طاہری، نوشہرہ (خیبرپختونخوا، سن خلافت دسمبر 2010ء)",
            "nameUrdu": "محترم خلیفہ محمد قاسم جان طاہری، نوشہرہ",
            "locationUrdu": "خیبرپختونخوا، سن خلافت دسمبر 2010ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-khyber_pakhtunkhwa-5",
            "rawText": "محترم خلیفہ وحید زمان وزیر طاہری (ضلع بنوں، صوبہ خیبر پختونخوا) (فرزند خلیفہ محمد سلام وزیر، بنوں)",
            "nameUrdu": "محترم خلیفہ وحید زمان وزیر طاہری",
            "locationUrdu": "ضلع بنوں، صوبہ خیبر پختونخوا",
            "notesUrdu": "(فرزند خلیفہ محمد سلام وزیر، بنوں)",
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-khyber_pakhtunkhwa-6",
            "rawText": "محترم خلیفہ عبدالرشید طاہری (نزد نیو خانپور، تحصیل و ضلع ہری پور، صوبہ خیبر پختونخوا، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ عبدالرشید طاہری",
            "locationUrdu": "نزد نیو خانپور، تحصیل و ضلع ہری پور، صوبہ خیبر پختونخوا، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": null
  },
  {
    "regionId": "azad_kashmir",
    "regionTitleUrdu": "خلفاء کرام آزاد کشمیر",
    "regionTitleEn": "Khulafa-e-Karam (Azad Kashmir)",
    "regionTitleAr": "الخلفاء الكرام - آزاد كشمير",
    "districts": [
      {
        "districtUrdu": "خلفاء کرام آزاد کشمیر",
        "districtEn": "Khulafa-e-Karam (Azad Kashmir)",
        "items": [
          {
            "id": "kh-azad_kashmir-1",
            "rawText": "محترم خلیفہ رشید گل طاہری (ایڈیشنل ڈسٹرکٹ قاضی، مظفرآباد، آزاد کشمیر، سن خلافت 2012)",
            "nameUrdu": "محترم خلیفہ رشید گل طاہری",
            "locationUrdu": "ایڈیشنل ڈسٹرکٹ قاضی، مظفرآباد، آزاد کشمیر، سن خلافت 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": null
  },
  {
    "regionId": "overseas",
    "regionTitleUrdu": "خلفاء کرام بیرون پاکستان",
    "regionTitleEn": "Khulafa-e-Karam (Overseas / International)",
    "regionTitleAr": "الخلفاء الكرام - خارج باكستان",
    "districts": [
      {
        "districtUrdu": "خلفاء کرام بیرون پاکستان",
        "districtEn": "Khulafa-e-Karam (Overseas / International)",
        "items": [
          {
            "id": "kh-overseas-1",
            "rawText": "محترم خلیفہ محمد ارشد خان ناغر طاہری (سڈنی، آسٹریلیا، سن خلافت 2009)",
            "nameUrdu": "محترم خلیفہ محمد ارشد خان ناغر طاہری",
            "locationUrdu": "سڈنی، آسٹریلیا، سن خلافت 2009",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-2",
            "rawText": "محترم خلیفہ محمد سلطان طاہری (متحدہ عرب امارات)",
            "nameUrdu": "محترم خلیفہ محمد سلطان طاہری",
            "locationUrdu": "متحدہ عرب امارات",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-3",
            "rawText": "محترم خلیفہ محمد سلیم طاہری (متحدہ عرب امارات)",
            "nameUrdu": "محترم خلیفہ محمد سلیم طاہری",
            "locationUrdu": "متحدہ عرب امارات",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-4",
            "rawText": "محترم خلیفہ حاجی محمد صدیق ساگری طاہری (عجمان، متحدہ عرب امارات)",
            "nameUrdu": "محترم خلیفہ حاجی محمد صدیق ساگری طاہری",
            "locationUrdu": "عجمان، متحدہ عرب امارات",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-5",
            "rawText": "محترم خلیفہ ڈاکٹر غلام شبیر جویو طاہری (امریکا)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر غلام شبیر جویو طاہری",
            "locationUrdu": "امریکا",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-6",
            "rawText": "محترم خلیفہ غلام نبی میمن طاہری (دبئی، برطانیہ)",
            "nameUrdu": "محترم خلیفہ غلام نبی میمن طاہری",
            "locationUrdu": "دبئی، برطانیہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-7",
            "rawText": "محترم خلیفہ قمر ہاشمی طاہری (اصل دادو، حالیہ مدینہ منورہ)",
            "nameUrdu": "محترم خلیفہ قمر ہاشمی طاہری",
            "locationUrdu": "اصل دادو، حالیہ مدینہ منورہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-8",
            "rawText": "محترم خلیفہ مسعود صاحب (بیجنگ، چین، سن خلافت 2007ء)",
            "nameUrdu": "محترم خلیفہ مسعود صاحب",
            "locationUrdu": "بیجنگ، چین، سن خلافت 2007ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          },
          {
            "id": "kh-overseas-9",
            "rawText": "محترم خلیفہ نذیر احمد کشمیری طاہری (مسقط)",
            "nameUrdu": "محترم خلیفہ نذیر احمد کشمیری طاہری",
            "locationUrdu": "مسقط",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": false
          }
        ]
      }
    ],
    "commentedItems": [
      "محترم خلیفہ سید احمد طاہری (انڈیا، حالیہ رہائش متحدہ عرب امارات)",
      "محترم خلیفہ احمد حسین طاہری (آزاد کشمیر، حالیہ رہائش متحدہ عرب امارات)"
    ]
  },
  {
    "regionId": "deceased",
    "regionTitleUrdu": "وفات شدہ خلفاء کرام",
    "regionTitleEn": "Deceased Khulafa-e-Karam (Marhoomeen)",
    "regionTitleAr": "الخلفاء المتوفون رحمهم الله تعالى",
    "districts": [
      {
        "districtUrdu": "وفات شدہ خلفاء کرام",
        "districtEn": "Deceased Khulafa-e-Karam (Marhoomeen)",
        "items": [
          {
            "id": "kh-deceased-1",
            "rawText": "محترم خلیفہ حاجی محمد ابراہیم غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (گڑھی یاسین، ضلع لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ حاجی محمد ابراہیم غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "گڑھی یاسین، ضلع لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-2",
            "rawText": "محترم خلیفہ محمد اسماعیل لنڈ بلوچ بخشی طاہری رحمۃ اللہ علیہ (سیٹھارجا، خیرپور میرس)",
            "nameUrdu": "محترم خلیفہ محمد اسماعیل لنڈ بلوچ بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "سیٹھارجا، خیرپور میرس",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-3",
            "rawText": "محترم خلیفہ حافظ حبیب اللہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (ظفروال، پنجاب)",
            "nameUrdu": "محترم خلیفہ حافظ حبیب اللہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "ظفروال، پنجاب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-4",
            "rawText": "محترم خلیفہ در محمد پنہور بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (دادو)",
            "nameUrdu": "محترم خلیفہ در محمد پنہور بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-5",
            "rawText": "محترم خلیفہ حاجی ربنواز بخشی رحمۃ اللہ تعالیٰ علیہ (خیرپور میرس، دبئی)",
            "nameUrdu": "محترم خلیفہ حاجی ربنواز بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "خیرپور میرس، دبئی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-6",
            "rawText": "محترم خلیفہ محمد سعید آرائیں طاہری رحمۃ اللہ تعالیٰ علیہ (نوابشاہ)",
            "nameUrdu": "محترم خلیفہ محمد سعید آرائیں طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "نوابشاہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-7",
            "rawText": "محترم خلیفہ محمد شریف بروہی بخشی رحمۃ اللہ تعالیٰ علیہ (خضدار، بلوچستان)",
            "nameUrdu": "محترم خلیفہ محمد شریف بروہی بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "خضدار، بلوچستان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-8",
            "rawText": "محترم خلیفہ حاجی محمد صدیق بروہی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (دبئی)",
            "nameUrdu": "محترم خلیفہ حاجی محمد صدیق بروہی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "دبئی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-9",
            "rawText": "محترم خلیفہ حاجی عبدالسلام چانڈیو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (کاچھو، دادو)",
            "nameUrdu": "محترم خلیفہ حاجی عبدالسلام چانڈیو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "کاچھو، دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-10",
            "rawText": "محترم خلیفہ عبدالکریم قریشی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (انڑپور، دادو)",
            "nameUrdu": "محترم خلیفہ عبدالکریم قریشی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "انڑپور، دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-11",
            "rawText": "محترم خلیفہ عبدالکریم منگی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ عبدالکریم منگی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-12",
            "rawText": "محترم خلیفہ مولانا عبداللہ اُجن طاہری رحمۃ اللہ تعالیٰ علیہ (نزد گمبٹ)",
            "nameUrdu": "محترم خلیفہ مولانا عبداللہ اُجن طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "نزد گمبٹ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-13",
            "rawText": "محترم خلیفہ عبداللہ سہارن بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)",
            "nameUrdu": "محترم خلیفہ عبداللہ سہارن بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-14",
            "rawText": "محترم خلیفہ حاجی علی محمد جتوئی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)",
            "nameUrdu": "محترم خلیفہ حاجی علی محمد جتوئی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-15",
            "rawText": "محترم خلیفہ محمد عیسیٰ لغاری بخشی رحمۃ اللہ تعالیٰ علیہ (سانگھڑ)",
            "nameUrdu": "محترم خلیفہ محمد عیسیٰ لغاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "سانگھڑ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-16",
            "rawText": "محترم خلیفہ غلام محمد بھٹی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (غریب آباد)",
            "nameUrdu": "محترم خلیفہ غلام محمد بھٹی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "غریب آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-17",
            "rawText": "محترم خلیفہ فضل احمد ابڑو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (شکارپور)",
            "nameUrdu": "محترم خلیفہ فضل احمد ابڑو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "شکارپور",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-18",
            "rawText": "محترم خلیفہ فضل احمد بروہی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)",
            "nameUrdu": "محترم خلیفہ فضل احمد بروہی غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-19",
            "rawText": "محترم خلیفہ حاجی محمد قاسم خاصخیلی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (تھانہ بولا خان)",
            "nameUrdu": "محترم خلیفہ حاجی محمد قاسم خاصخیلی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "تھانہ بولا خان",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-20",
            "rawText": "محترم خلیفہ گل حسن جوکھیو غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (کاٹھوڑ، کراچی)",
            "nameUrdu": "محترم خلیفہ گل حسن جوکھیو غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "کاٹھوڑ، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-21",
            "rawText": "محترم خلیفہ محبّ علی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (جیکب آباد)",
            "nameUrdu": "محترم خلیفہ محبّ علی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "جیکب آباد",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-22",
            "rawText": "محترم خلیفہ نثار احمد کھوسو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (فقیرپور شریف، ضلع دادو)",
            "nameUrdu": "محترم خلیفہ نثار احمد کھوسو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیرپور شریف، ضلع دادو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-23",
            "rawText": "محترم خلیفہ نور الدین شر بلوچ غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (خیرپور میرس)",
            "nameUrdu": "محترم خلیفہ نور الدین شر بلوچ غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "خیرپور میرس",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-24",
            "rawText": "محترم خلیفہ حافظ نور محمد راجپر غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (کوٹ لعلو)",
            "nameUrdu": "محترم خلیفہ حافظ نور محمد راجپر غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "کوٹ لعلو",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-25",
            "rawText": "محترم خلیفہ حافظ نور محمد کلہوڑو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (وارہ، نزد لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ حافظ نور محمد کلہوڑو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "وارہ، نزد لاڑکانہ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-26",
            "rawText": "محترم خلیفہ ڈاکٹر عبداللطیف چنہ بخشی رحمۃ اللہ تعالیٰ علیہ (سسر حضرت سجن سائیں مدظلہ العالی، وصال 3 ستمبر 1978ء، نمازِ جنازہ قاری غلام حسین صاحب)",
            "nameUrdu": "محترم خلیفہ ڈاکٹر عبداللطیف چنہ بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "سسر حضرت سجن سائیں مدظلہ العالی، وصال 3 ستمبر 1978ء، نمازِ جنازہ قاری غلام حسین صاحب",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-27",
            "rawText": "محترم خلیفہ حاجی ولی محمد گبول بخشی رحمۃ اللہ تعالیٰ علیہ (تھانہ بولا خان) (وصال 10 دسمبر 1981ء)",
            "nameUrdu": "محترم خلیفہ حاجی ولی محمد گبول بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "تھانہ بولا خان",
            "notesUrdu": "(وصال 10 دسمبر 1981ء)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-28",
            "rawText": "محترم خلیفہ محمد ایوب چانڈیو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (پرانہ دنبالہ تھرپارکر)۔ وصال 22 اپریل 1982ء، مزار پرانہ دنبالہ، نزد میرپور خاص",
            "nameUrdu": "محترم خلیفہ محمد ایوب چانڈیو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "پرانہ دنبالہ تھرپارکر",
            "notesUrdu": "۔ وصال 22 اپریل 1982ء، مزار پرانہ دنبالہ، نزد میرپور خاص",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-29",
            "rawText": "محترم خلیفہ حاجی محمد بخشل غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)۔ وصال 20 دسمبر 1982ء، نماز جنازہ حاجی عبدالحمید صاحب، شمولیت حضرت سوہنا سائیں نور اللہ مرقدہ، مزار فقیر پور شریف",
            "nameUrdu": "محترم خلیفہ حاجی محمد بخشل غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": "۔ وصال 20 دسمبر 1982ء، نماز جنازہ حاجی عبدالحمید صاحب، شمولیت حضرت سوہنا سائیں نور اللہ مرقدہ، مزار فقیر پور شریف",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-30",
            "rawText": "محترم خلیفہ سید نصیر الدین شاہ غفاری بخشی رحمۃ اللہ تعالیٰ علیہ۔ (وصال 11 اگست 1983ء، نمازِ جنازہ حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ، مزار گوٹھ خان محمد بوزدار، ٹنڈوالہیار)",
            "nameUrdu": "محترم خلیفہ سید نصیر الدین شاہ غفاری بخشی رحمۃ اللہ تعالیٰ علیہ۔",
            "locationUrdu": "وصال 11 اگست 1983ء، نمازِ جنازہ حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ، مزار گوٹھ خان محمد بوزدار، ٹنڈوالہیار",
            "notesUrdu": null,
            "profileLink": "/about/khulafa/nasiruddin-shah",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-31",
            "rawText": "محترم خلیفہ حاجی خیر محمد کلہوڑو غفاری بخشی رحمۃ اللہ تعالیٰ علیہ (تحصیل کنڈیارو)۔ وصال 23 دسمبر 1983ء",
            "nameUrdu": "محترم خلیفہ حاجی خیر محمد کلہوڑو غفاری بخشی رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "تحصیل کنڈیارو",
            "notesUrdu": "۔ وصال 23 دسمبر 1983ء",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-32",
            "rawText": "محترم خلیفہ حاجی نیک محمد ارشد بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (پنجاب) (وصال 2 نومبر 1984ء، ٹوبہ ٹیک سنگھ، پنجاب)",
            "nameUrdu": "محترم خلیفہ حاجی نیک محمد ارشد بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "پنجاب",
            "notesUrdu": "(وصال 2 نومبر 1984ء، ٹوبہ ٹیک سنگھ، پنجاب)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-33",
            "rawText": "محترم خلیفہ عاشق محمد سیال غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (ٹنڈوالہیار) (وصال 1986ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی، مزار گوٹھ خان محمد بوزدار، ٹنڈوالہیار)",
            "nameUrdu": "محترم خلیفہ عاشق محمد سیال غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "ٹنڈوالہیار",
            "notesUrdu": "(وصال 1986ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی، مزار گوٹھ خان محمد بوزدار، ٹنڈوالہیار)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-34",
            "rawText": "محترم خلیفہ عبدالرحمان غفاری بخشی طاہری (دادا لانگری) رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)۔ وصال 5 نومبر 1989ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی",
            "nameUrdu": "محترم خلیفہ عبدالرحمان غفاری بخشی طاہری",
            "locationUrdu": "دادا لانگری",
            "notesUrdu": "رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)۔ وصال 5 نومبر 1989ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-35",
            "rawText": "محترم خلیفہ جان محمد سولنگی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (سیوہن شریف) (وصال 16 اکتوبر 1990ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی، مزار سیوہن شریف)",
            "nameUrdu": "محترم خلیفہ جان محمد سولنگی بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "سیوہن شریف",
            "notesUrdu": "(وصال 16 اکتوبر 1990ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی، مزار سیوہن شریف)",
            "profileLink": "/about/khulafa/jan-muhammad-solangi",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-36",
            "rawText": "محترم خلیفہ یار محمد انڑ ہوتھیپوٹو طاہری رحمۃ اللہ تعالیٰ علیہ (دولت پور) (وصال 30 اکتوبر 1990ء)",
            "nameUrdu": "محترم خلیفہ یار محمد انڑ ہوتھیپوٹو طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "دولت پور",
            "notesUrdu": "(وصال 30 اکتوبر 1990ء)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-37",
            "rawText": "محترم خلیفہ قاری خان محمد پنہور غفاری بخشی طاہری رحمۃ اللہ علیہ (نصیرآباد، لاڑکانہ)۔ وصال 1991ء، نماز جنازہ حافظ نور محمد کلہوڑو رحمۃ اللہ تعالیٰ علیہ، مزار مدرسہ نصیرآباد",
            "nameUrdu": "محترم خلیفہ قاری خان محمد پنہور غفاری بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "نصیرآباد، لاڑکانہ",
            "notesUrdu": "۔ وصال 1991ء، نماز جنازہ حافظ نور محمد کلہوڑو رحمۃ اللہ تعالیٰ علیہ، مزار مدرسہ نصیرآباد",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-38",
            "rawText": "محترم خلیفہ محمد صدیق میمن رحمۃ اللہ تعالیٰ علیہ بخشی طاہری (مورو) (وصال 9 نومبر 1991ء، نمازِ جنازہ خلیفہ مولانا غلام قادر صاحب میمن، مزار مقام خلیفہ صاحب مورو)",
            "nameUrdu": "محترم خلیفہ محمد صدیق میمن رحمۃ اللہ تعالیٰ علیہ بخشی طاہری",
            "locationUrdu": "مورو",
            "notesUrdu": "(وصال 9 نومبر 1991ء، نمازِ جنازہ خلیفہ مولانا غلام قادر صاحب میمن، مزار مقام خلیفہ صاحب مورو)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-39",
            "rawText": "محترم خلیفہ محمد صالح چنہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (سوبھودیرو، گمبٹ) (وصال 1 اکتوبر 1992ء)",
            "nameUrdu": "محترم خلیفہ محمد صالح چنہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "سوبھودیرو، گمبٹ",
            "notesUrdu": "(وصال 1 اکتوبر 1992ء)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-40",
            "rawText": "محترم خلیفہ صاحب ڈنو چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف) (وصال 28 نومبر 1992ء)",
            "nameUrdu": "محترم خلیفہ صاحب ڈنو چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": "(وصال 28 نومبر 1992ء)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-41",
            "rawText": "محترم خلیفہ مفتی کریم بخش غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (ملیر کراچی) (وصال 16 مارچ 1995ء، نمازِ جنازہ مولانا محمد رمضان لاکھو، مزار درسانہ چھنہ کراچی)",
            "nameUrdu": "محترم خلیفہ مفتی کریم بخش غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "ملیر کراچی",
            "notesUrdu": "(وصال 16 مارچ 1995ء، نمازِ جنازہ مولانا محمد رمضان لاکھو، مزار درسانہ چھنہ کراچی)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-42",
            "rawText": "محترم خلیفہ حاجی محمد عیسیٰ کندھر بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (نوڈیرہ، لاڑکانہ)۔ وصال جولائی 1996ء، نمازِ جنازہ (بوصیت) مفتی عبدالرحیم صاحب (فرزند)، مزار مدینہ مسجد نوڈیرہ",
            "nameUrdu": "محترم خلیفہ حاجی محمد عیسیٰ کندھر بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "نوڈیرہ، لاڑکانہ",
            "notesUrdu": "۔ وصال جولائی 1996ء، نمازِ جنازہ (بوصیت) مفتی عبدالرحیم صاحب (فرزند)، مزار مدینہ مسجد نوڈیرہ",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-43",
            "rawText": "محترم خلیفہ حاجی محمد علی بوزدار غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (طاہرآباد)۔ وصال 17 جولائی 1996ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی، مزار طاہرآباد ٹنڈوالہیار",
            "nameUrdu": "محترم خلیفہ حاجی محمد علی بوزدار غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "طاہرآباد",
            "notesUrdu": "۔ وصال 17 جولائی 1996ء، نمازِ جنازہ حضرت سجن سائیں مدظلہ العالی، مزار طاہرآباد ٹنڈوالہیار",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-44",
            "rawText": "محترم خلیفہ سید مٹھل شاہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (قاضی احمد) (وصال 18 جنوری 1999ء، نمازِ جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "nameUrdu": "محترم خلیفہ سید مٹھل شاہ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "قاضی احمد",
            "notesUrdu": "(وصال 18 جنوری 1999ء، نمازِ جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-45",
            "rawText": "محترم خلیفہ میر محمد چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (مٹھیانی) (وصال 22 جنوری 1999ء، نمازِ جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "nameUrdu": "محترم خلیفہ میر محمد چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "مٹھیانی",
            "notesUrdu": "(وصال 22 جنوری 1999ء، نمازِ جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-46",
            "rawText": "محترم خلیفہ مولانا بشیر احمد سومرو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (فقیر پور شریف)۔ وصال 24 اگست 1999ء، نماز جنازہ حضرت سجن سائیں مدظلہ العالی، مزار فقیر پور شریف",
            "nameUrdu": "محترم خلیفہ مولانا بشیر احمد سومرو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "فقیر پور شریف",
            "notesUrdu": "۔ وصال 24 اگست 1999ء، نماز جنازہ حضرت سجن سائیں مدظلہ العالی، مزار فقیر پور شریف",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-47",
            "rawText": "محترم خلیفہ احمد شہریار خان شہید طاہری رحمۃ اللہ تعالیٰ علیہ (پنڈی و کراچی، نیوی میں افسر تھے)۔ وصال 29 اکتوبر 1999ء، نعش چار ماہ بعد سمندر سے صحیح سلامت برآمد ہوئی بتاریخ 28 فروری 2000ء",
            "nameUrdu": "محترم خلیفہ احمد شہریار خان شہید طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "پنڈی و کراچی، نیوی میں افسر تھے",
            "notesUrdu": "۔ وصال 29 اکتوبر 1999ء، نعش چار ماہ بعد سمندر سے صحیح سلامت برآمد ہوئی بتاریخ 28 فروری 2000ء",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-48",
            "rawText": "محترم خلیفہ حاجی عطا محمد راجپر غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (محراب پور)۔ وصال 15 اکتوبر 1999ء",
            "nameUrdu": "محترم خلیفہ حاجی عطا محمد راجپر غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "محراب پور",
            "notesUrdu": "۔ وصال 15 اکتوبر 1999ء",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-49",
            "rawText": "محترم خلیفہ محمد داؤد شر بلوچ غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (خیرپور میرس)۔ وصال 14 دسمبر 1999ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی",
            "nameUrdu": "محترم خلیفہ محمد داؤد شر بلوچ غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "خیرپور میرس",
            "notesUrdu": "۔ وصال 14 دسمبر 1999ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-50",
            "rawText": "محترم خلیفہ احمد بخش ہوتھیپوٹو طاہری رحمۃ اللہ تعالیٰ علیہ (دولتپور، مورو)، (وصال 26 دسمبر 1999ء، نماز جنازہ محترم خلیفہ غلام قادر صاحب مورو)",
            "nameUrdu": "محترم خلیفہ احمد بخش ہوتھیپوٹو طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "دولتپور، مورو",
            "notesUrdu": "(وصال 26 دسمبر 1999ء، نماز جنازہ محترم خلیفہ غلام قادر صاحب مورو)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-51",
            "rawText": "محترم خلیفہ فضل احمد چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (لاڑکانہ) (وصال 24 فروری 2000ء، نماز جنازہ حافظ نور محمد کلہوڑو رحمۃ اللہ تعالیٰ علیہ)",
            "nameUrdu": "محترم خلیفہ فضل احمد چانڈیو بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": "(وصال 24 فروری 2000ء، نماز جنازہ حافظ نور محمد کلہوڑو رحمۃ اللہ تعالیٰ علیہ)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-52",
            "rawText": "محترم خلیفہ حاجی محمد علی جبلی مری بلوچ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (مکہ مکرمہ)۔(وصال 28 نومبر 2003ء، نمازِ جنازہ امام کعبہ قاری عبدالرحمٰن سدیس",
            "nameUrdu": "محترم خلیفہ حاجی محمد علی جبلی مری بلوچ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "مکہ مکرمہ",
            "notesUrdu": "۔(وصال 28 نومبر 2003ء، نمازِ جنازہ امام کعبہ قاری عبدالرحمٰن سدیس",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-53",
            "rawText": "محترم خلیفہ مولانا گل محمد عمرانی طاہری رحمۃ اللہ تعالیٰ علیہ (اللہ آباد شریف، کنڈیارو)۔ (وصال 23 جولائی 2004ء، نماز جنازہ صاحبزادہ محمد دیدہ دل صاحب)",
            "nameUrdu": "محترم خلیفہ مولانا گل محمد عمرانی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو",
            "notesUrdu": "۔ (وصال 23 جولائی 2004ء، نماز جنازہ صاحبزادہ محمد دیدہ دل صاحب)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-54",
            "rawText": "محترم خلیفہ بخش علی کھوسو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (کنڈیارو) (وصال 6 ستمبر 2004ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "nameUrdu": "محترم خلیفہ بخش علی کھوسو غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "کنڈیارو",
            "notesUrdu": "(وصال 6 ستمبر 2004ء، نماز جنازہ حضرت قبلہ سجن سائیں مدظلہ العالی)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-55",
            "rawText": "محترم خلیفہ محمد یامین لاشاری بخشی طاہری ورحمۃ اللہ تعالیٰ علیہ (لاڑکانہ) (وصال 15 شعبان 1425ھ، 29 یا 30 دسمبر 2004)",
            "nameUrdu": "محترم خلیفہ محمد یامین لاشاری بخشی طاہری ورحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": "(وصال 15 شعبان 1425ھ، 29 یا 30 دسمبر 2004)",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-56",
            "rawText": "محترم خلیفہ محمد بخش گبول بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز، وفات 5 مئی 2007)",
            "nameUrdu": "محترم خلیفہ محمد بخش گبول بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز، وفات 5 مئی 2007",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-57",
            "rawText": "محترم خلیفہ محمد رحیم دل بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (المرکز غفاریہ، مورو، ضلع نوشہروفیروز، وفات 24 جنوری 2008ء مطابق 14 محرم 1429ھ بروز جمعرات، نماز جنازہ خلیفہ غلام قادر میمن غفاری بخشی طاہری)",
            "nameUrdu": "محترم خلیفہ محمد رحیم دل بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "المرکز غفاریہ، مورو، ضلع نوشہروفیروز، وفات 24 جنوری 2008ء مطابق 14 محرم 1429ھ بروز جمعرات، نماز جنازہ خلیفہ غلام قادر میمن غفاری بخشی طاہری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-58",
            "rawText": "محترم خلیفہ حاجی محمد حسین شیخ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (لاڑکانہ) (وفات 27 محرم 1429ھ بمطابق 8 فروری 2008ء، نماز جنازہ صاحبزادہ مولانا محمد دیدہ دل صاحب، مزار بمقام غفاری مسجد، لاڑکانہ)",
            "nameUrdu": "محترم خلیفہ حاجی محمد حسین شیخ بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "لاڑکانہ",
            "notesUrdu": "(وفات 27 محرم 1429ھ بمطابق 8 فروری 2008ء، نماز جنازہ صاحبزادہ مولانا محمد دیدہ دل صاحب، مزار بمقام غفاری مسجد، لاڑکانہ)",
            "profileLink": "/about/khulafa/muhammad-hussain-shaikh",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-59",
            "rawText": "محترم خلیفہ ظفر اللہ طاہری رحمۃ اللہ تعالیٰ علیہ (امریکا، وفات 2008ء)",
            "nameUrdu": "محترم خلیفہ ظفر اللہ طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "امریکا، وفات 2008ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-60",
            "rawText": "محترم خلیفہ محمد عثمان چنہ بخشی طاہری (کنڈیارو، ضلع نوشہروفیروز) رحمۃ اللہ تعالیٰ علیہ، وصال 9 جولائی 2009 بمقام کنڈیارو، جنازہ نماز حضرت خواجہ سجن سائیں مدظلہ",
            "nameUrdu": "محترم خلیفہ محمد عثمان چنہ بخشی طاہری",
            "locationUrdu": "کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": "رحمۃ اللہ تعالیٰ علیہ، وصال 9 جولائی 2009 بمقام کنڈیارو، جنازہ نماز حضرت خواجہ سجن سائیں مدظلہ",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-61",
            "rawText": "محترم خلیفہ غلام محمد سولنگی طاہری رحمۃ اللہ تعالیٰ علیہ (تعلقہ سندھڑی، ضلع میرپور خاص، وفات 13 دسمبر 2009ء)",
            "nameUrdu": "محترم خلیفہ غلام محمد سولنگی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "تعلقہ سندھڑی، ضلع میرپور خاص، وفات 13 دسمبر 2009ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-62",
            "rawText": "محترم خلیفہ عبدالحکیم طاہری (سکھر) رحمۃ اللہ تعالیٰ علیہ، وفات 7 جنوری 2010 بمقام گوادر دوران تبلیغ بعد نماز تہجد",
            "nameUrdu": "محترم خلیفہ عبدالحکیم طاہری",
            "locationUrdu": "سکھر",
            "notesUrdu": "رحمۃ اللہ تعالیٰ علیہ، وفات 7 جنوری 2010 بمقام گوادر دوران تبلیغ بعد نماز تہجد",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-63",
            "rawText": "محترم خلیفہ عبدالرحمان جت بخشی طاہری رحمۃ اللہ علیہ(ماتلی، ضلع بدین، وفات 14 نومبر 2010 بعمر 64 سال، جنازہ خلیفہ عبدالستار جت طاھری)",
            "nameUrdu": "محترم خلیفہ عبدالرحمان جت بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "ماتلی، ضلع بدین، وفات 14 نومبر 2010 بعمر 64 سال، جنازہ خلیفہ عبدالستار جت طاھری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-64",
            "rawText": "محترم خلیفہ شیر محمد بروہی طاہری رحمۃ اللہ تعالیٰ علیہ (وارہ، ضلع قمبر شہدادکوٹ) وفات بروز جمعہ 16 اپریل 2010ء، نماز جنازہ خلیفہ مولانا عبدالہادی چانڈیو",
            "nameUrdu": "محترم خلیفہ شیر محمد بروہی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "وارہ، ضلع قمبر شہدادکوٹ",
            "notesUrdu": "وفات بروز جمعہ 16 اپریل 2010ء، نماز جنازہ خلیفہ مولانا عبدالہادی چانڈیو",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-65",
            "rawText": "محترم خلیفہ قاری محمد داؤد لاکھو طاہری رحمۃ اللہ تعالیٰ علیہ (داسوڑی، ضلع ٹنڈوالہیار، سن خلافت 2002ء، وفات 29 جون 2010ء، نماز جنازہ خلیفہ مفتی عبدالرحیم طاہری)",
            "nameUrdu": "محترم خلیفہ قاری محمد داؤد لاکھو طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "داسوڑی، ضلع ٹنڈوالہیار، سن خلافت 2002ء، وفات 29 جون 2010ء، نماز جنازہ خلیفہ مفتی عبدالرحیم طاہری",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-66",
            "rawText": "محترم خلیفہ حاجی خیر محمد عباسی بخشی طاہری رحمۃ اللہ علیہ (حیدرآباد، وفات 31 جنوری 2011ء، مطابق 26 صفر 1432ھ، نماز جنازہ حضرت قبلہ عالم محبوب سجن سائیں مدظلہ العالی، مدفن مسجد عمر اسلام، گاڑی کھاتہ حیدرآباد)",
            "nameUrdu": "محترم خلیفہ حاجی خیر محمد عباسی بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "حیدرآباد، وفات 31 جنوری 2011ء، مطابق 26 صفر 1432ھ، نماز جنازہ حضرت قبلہ عالم محبوب سجن سائیں مدظلہ العالی، مدفن مسجد عمر اسلام، گاڑی کھاتہ حیدرآباد",
            "notesUrdu": null,
            "profileLink": "/about/khulafa/haji-khair-muhammad-abbasi",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-67",
            "rawText": "محترم خلیفہ محمد امین الدین طاہری رحمۃ اللہ علیہ (ٹنڈو آدم، ضلع سانگھڑ، وفات 27 مارچ 2011ء)",
            "nameUrdu": "محترم خلیفہ محمد امین الدین طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "ٹنڈو آدم، ضلع سانگھڑ، وفات 27 مارچ 2011ء",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-68",
            "rawText": "محترم خلیفہ سرتاج احمد گدی پٹھان طاہری رحمۃ اللہ علیہ (میرپور خاص،سن خلافت 1992ء، وفات 4 جون 2011ء، نماز جنازہ مولانا محمد حیات مری بلوچ طاہری، مدفن آبائی قبرستان، نزد مکھن سموں)",
            "nameUrdu": "محترم خلیفہ سرتاج احمد گدی پٹھان طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "میرپور خاص،سن خلافت 1992ء، وفات 4 جون 2011ء، نماز جنازہ مولانا محمد حیات مری بلوچ طاہری، مدفن آبائی قبرستان، نزد مکھن سموں",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-69",
            "rawText": "محترم خلیفہ مولانا ولی محمد بروہی بخشی طاہری رحمۃ اللہ علیہ (ضلع لسبیلہ، بلوچستان)، وفات 6 جون 2011",
            "nameUrdu": "محترم خلیفہ مولانا ولی محمد بروہی بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "ضلع لسبیلہ، بلوچستان",
            "notesUrdu": "وفات 6 جون 2011",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-70",
            "rawText": "محترم خلیفہ محمد مٹھل عمرانی بلوچ طاہری (ڈیرہ مراد خان جمالی، تحصیل چھتر، ضلع نصیرآباد، بلوچستان)، وفات 31 جنوری 2012",
            "nameUrdu": "محترم خلیفہ محمد مٹھل عمرانی بلوچ طاہری",
            "locationUrdu": "ڈیرہ مراد خان جمالی، تحصیل چھتر، ضلع نصیرآباد، بلوچستان",
            "notesUrdu": "وفات 31 جنوری 2012",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-71",
            "rawText": "محترم خلیفہ سردار احمد ثانی صاحب بخشی طاہری رحمۃ اللہ علیہ (نوابشاہ، وفات 9 مارچ 2012)",
            "nameUrdu": "محترم خلیفہ سردار احمد ثانی صاحب بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "نوابشاہ، وفات 9 مارچ 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-72",
            "rawText": "محترم خلیفہ مولانا محمد موسیٰ قمبرانی طاہری رحمۃ اللہ علیہ (ٹنڈو محمد خان، سندھ، سن خلافت 2008، وفات 2 مئی 2012)",
            "nameUrdu": "محترم خلیفہ مولانا محمد موسیٰ قمبرانی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "ٹنڈو محمد خان، سندھ، سن خلافت 2008، وفات 2 مئی 2012",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-73",
            "rawText": "محترم خلیفہ غلام قادر میمن غفاری بخشی طاہری رحمۃ اللہ علیہ (مورو، ضلع نوشہروفیروز)، وفات 30 اکتوبر 2012 بمقام مورو",
            "nameUrdu": "محترم خلیفہ غلام قادر میمن غفاری بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "مورو، ضلع نوشہروفیروز",
            "notesUrdu": "وفات 30 اکتوبر 2012 بمقام مورو",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-74",
            "rawText": "محترم خلیفہ غلام مرتضیٰ عباسی بخشی طاہری رحمة اللہ علیہ (اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز)، بھانجہ حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ۔ وصال 5 مارچ 2013",
            "nameUrdu": "محترم خلیفہ غلام مرتضیٰ عباسی بخشی طاہری رحمة اللہ علیہ",
            "locationUrdu": "اللہ آباد شریف، کنڈیارو، ضلع نوشہروفیروز",
            "notesUrdu": "بھانجہ حضرت سوہنا سائیں رحمۃ اللہ تعالیٰ علیہ۔ وصال 5 مارچ 2013",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-75",
            "rawText": "محترم خلیفہ عبدالرب بنگالی بخشی طاہری رحمة اللہ علیہ (گلشن اقبال، کراچی)، وصال 13 اپریل 2013 شام 4 بجے۔ تدفین محمد شاہ قبرستان، اجمیر نگری، کراچی۔",
            "nameUrdu": "محترم خلیفہ عبدالرب بنگالی بخشی طاہری رحمة اللہ علیہ",
            "locationUrdu": "گلشن اقبال، کراچی",
            "notesUrdu": "وصال 13 اپریل 2013 شام 4 بجے۔ تدفین محمد شاہ قبرستان، اجمیر نگری، کراچی۔",
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-76",
            "rawText": "محترم خلیفہ فدا حسین چانڈیو طاہری رحمۃ اللہ علیہ (میہڑ، ضلع دادو، وفات 22 اپریل 2013)",
            "nameUrdu": "محترم خلیفہ فدا حسین چانڈیو طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "میہڑ، ضلع دادو، وفات 22 اپریل 2013",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-77",
            "rawText": "محترم خلیفہ جمیل اصغر طاہری رحمۃ اللہ علیہ (مکوانہ ضلع فیصل آباد، پنجاب)، وصال مؤرخہ 10 ستمبر 2013",
            "nameUrdu": "محترم خلیفہ جمیل اصغر طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "مکوانہ ضلع فیصل آباد، پنجاب",
            "notesUrdu": "وصال مؤرخہ 10 ستمبر 2013",
            "profileLink": "/about/khulafa/jamil-asghar-tahiri",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-78",
            "rawText": "محترم خلیفہ صوفی نور حسین بخشی طاہری رحمۃ اللہ علیہ (تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب، وفات بروز بدھ 18 دسمبر 2013 بوقت 2:30 دوپہر، مطابق 14 صفر 1435ھ۔ نماز جنازہ مولانا ڈاکٹر غلام غوث طاہری۔ تدفین بمقام المرکز طاہریہ، محمد پورہ، گنگاپور، ضلع فیصل آباد، پنجاب)",
            "nameUrdu": "محترم خلیفہ صوفی نور حسین بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "تحصیل جڑانوالہ، ضلع فیصل آباد، پنجاب، وفات بروز بدھ 18 دسمبر 2013 بوقت 2:30 دوپہر، مطابق 14 صفر 1435ھ۔ نماز جنازہ مولانا ڈاکٹر غلام غوث طاہری۔ تدفین بمقام المرکز طاہریہ، محمد پورہ، گنگاپور، ضلع فیصل آباد، پنجاب",
            "notesUrdu": null,
            "profileLink": "/about/khulafa/noor-hussain-bakhshi",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-79",
            "rawText": "محترم خلیفہ فتح الدین سومرو بخشی طاہری المعروف ”بیدار مورائی“ رحمۃ اللہ علیہ (مورو، ضلع نوشہروفیروز، ولادت 1937ء، سن خلافت 1970ء، وفات بروز بدھ 18 دسمبر 2013 بوقت 7:15 شام، مطابق شب 15 صفر 1435ھ، نماز جنازہ حضرت محبوب سجن سائیں مدظلہ العالی، تدفین بمقام خلیفہ قبرستان، مورو، سندھ)",
            "nameUrdu": "محترم خلیفہ فتح الدین سومرو بخشی طاہری المعروف ”بیدار مورائی“ رحمۃ اللہ علیہ",
            "locationUrdu": "مورو، ضلع نوشہروفیروز، ولادت 1937ء، سن خلافت 1970ء، وفات بروز بدھ 18 دسمبر 2013 بوقت 7:15 شام، مطابق شب 15 صفر 1435ھ، نماز جنازہ حضرت محبوب سجن سائیں مدظلہ العالی، تدفین بمقام خلیفہ قبرستان، مورو، سندھ",
            "notesUrdu": null,
            "profileLink": "/about/khulafa/bedar-morai",
            "isDeceased": true
          },
          {
            "id": "kh-deceased-80",
            "rawText": "محترم خلیفہ محمد خان مری بلوچ طاہری رحمۃ اللہ علیہ (وفات 26 فروری 2014 بعمر 80 سال، نماز جنازہ مولانا محمد ابراہیم بروہی، تدفین کھپرو ضلع سانگھڑ)",
            "nameUrdu": "محترم خلیفہ محمد خان مری بلوچ طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "وفات 26 فروری 2014 بعمر 80 سال، نماز جنازہ مولانا محمد ابراہیم بروہی، تدفین کھپرو ضلع سانگھڑ",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-81",
            "rawText": "محترم خلیفہ گل محمد چانڈیو بخشی طاہری رحمۃ اللہ علیہ (بھٹ شاہ، ضلع مٹیاری، سندھ، وفات 29 مارچ 2014 بعمر 78 برس، نماز جنازہ مولانا محمد حسن اوٹھو، مدفون اللہ آباد شریف)",
            "nameUrdu": "محترم خلیفہ گل محمد چانڈیو بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "بھٹ شاہ، ضلع مٹیاری، سندھ، وفات 29 مارچ 2014 بعمر 78 برس، نماز جنازہ مولانا محمد حسن اوٹھو، مدفون اللہ آباد شریف",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-82",
            "rawText": "محترم خلیفہ مولانا محمد رمضان لاکھو بخشی طاہری رحمۃ اللہ علیہ (ماڈل کالونی، کراچی)",
            "nameUrdu": "محترم خلیفہ مولانا محمد رمضان لاکھو بخشی طاہری رحمۃ اللہ علیہ",
            "locationUrdu": "ماڈل کالونی، کراچی",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          },
          {
            "id": "kh-deceased-83",
            "rawText": "محترم خلیفہ مولانا محمد سردار احمد غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ (دربار پیر مٹھا رحمت پور شریف، بچیکی، تحصل و ضلع ننکانہ صاحب، پنجاب۔ وفات 31 جنوری 2016 بروز اتوار)",
            "nameUrdu": "محترم خلیفہ مولانا محمد سردار احمد غفاری بخشی طاہری رحمۃ اللہ تعالیٰ علیہ",
            "locationUrdu": "دربار پیر مٹھا رحمت پور شریف، بچیکی، تحصل و ضلع ننکانہ صاحب، پنجاب۔ وفات 31 جنوری 2016 بروز اتوار",
            "notesUrdu": null,
            "profileLink": null,
            "isDeceased": true
          }
        ]
      }
    ],
    "commentedItems": null
  }
];

/**
 * Returns a flat array of all Khulafa-e-Karam entries across all regions.
 */
export function getAllKhulafaItems(): (KhulafaItem & { regionId: string; districtUrdu: string; districtEn: string })[] {
  const all: (KhulafaItem & { regionId: string; districtUrdu: string; districtEn: string })[] = [];
  for (const reg of KHULAFA_REGIONS_DATA) {
    for (const dist of reg.districts) {
      for (const item of dist.items) {
        all.push({
          ...item,
          regionId: reg.regionId,
          districtUrdu: dist.districtUrdu,
          districtEn: dist.districtEn,
        });
      }
    }
  }
  return all;
}

/**
 * Returns verified counts and summary statistics.
 */
export function getKhulafaStats() {
  const regionsSummary = KHULAFA_REGIONS_DATA.map((r) => {
    const totalItems = r.districts.reduce((acc, d) => acc + d.items.length, 0);
    return {
      regionId: r.regionId,
      regionTitleUrdu: r.regionTitleUrdu,
      regionTitleEn: r.regionTitleEn,
      regionTitleAr: r.regionTitleAr,
      districtCount: r.districts.length,
      totalItems,
    };
  });

  const grandTotal = regionsSummary.reduce((acc, r) => acc + r.totalItems, 0);
  const totalDistricts = regionsSummary.reduce((acc, r) => acc + r.districtCount, 0);

  return {
    grandTotal,
    totalDistricts,
    regionsSummary,
  };
}
