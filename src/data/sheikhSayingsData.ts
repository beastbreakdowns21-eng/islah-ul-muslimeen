import { LocalizedString } from '../types';

export interface SheikhSaying {
  id: string;
  title: LocalizedString;
  sourceDate: LocalizedString;
  location: LocalizedString;
  topic: LocalizedString;
  themeTags: string[];
  summary: LocalizedString;
  fullQuote: LocalizedString;
  keyTakeaway: LocalizedString;
}

export const SHEIKH_OFFICIAL_SAYINGS: SheikhSaying[] = [
  {
    id: 'saying-adam-story',
    title: {
      en: "Adam's (AS) Story is the Story of Entire Mankind",
      ur: 'حضرت آدمؑ کا واقعہ پوری انسانیت کی داستان ہے',
      ar: 'قصة آدم عليه السلام هي قصة البشرية جمعاء',
    },
    sourceDate: {
      en: 'Address delivered in Islamabad, Pakistan — March 30, 2009',
      ur: 'خطاب مبارک: اسلام آباد، پاکستان — ۳۰ مارچ ۲۰۰۹ء',
      ar: 'خطاب مبارك: إسلام آباد، باكستان — ۳۰ مارس ۲۰۰۹م',
    },
    location: {
      en: 'Islamabad, Pakistan',
      ur: 'اسلام آباد، پاکستان',
      ar: 'إسلام آباد، باكستان',
    },
    topic: {
      en: 'Human Fallibility, Repentance & The Shield of Daily Prayers',
      ur: 'انسانی خطائیں، توبہ و استغفار اور پانچ وقت نماز کی برکت',
      ar: 'الخطأ البشري والتوبة وأسرار الصلوات الخمس',
    },
    themeTags: ['Tawbah & Forgiveness', 'Daily Prayers', 'Human Nature', 'Prophets'],
    summary: {
      en: 'Human beings are naturally prone to error, but true spiritual nobility lies in sincere acknowledgment of wrongdoing and prompt repentance through the gift of daily prayers.',
      ur: 'انسان خطا کا پتلا ہے، لیکن روحانی کمال غلطی کے بر وقت اعتراف، خلوصِ دل سے استغفار اور پنج وقتہ نمازوں کی مسلسل تطہیر میں مضمر ہے۔',
      ar: 'الإنسان مجبول على الخطأ، وكمال الإيمان في سرعة الاعتراف بالذنب، ولزوم الاستغفار، والتطهر بالصلوات الخمس المفروضة.',
    },
    fullQuote: {
      en: `“Listen to Adam’s (AS) story, who arrived in this world as a representative of Allah, who was prostrated to by the angels by the order of Allah—don’t you see your own story in the story of Adam (AS)? Don’t I see my own story in it?

Allah removed his loneliness, he got married. He was told to do these things and not to do these things, and he said yes. The devil misled him, and he got misled and did what was forbidden. Doesn’t this happen to us? If someone thinks, ‘No, this doesn’t happen to me,’ then he is not a human—he would be an angel.

Adam’s (AS) story is very simple. This story is not only his story, but is the story of the entire mankind. It means that a human is full of err, full of mistakes. He will do wrong, but should also accept his wrongdoing. You can read the story of Adam (AS) in the Quran, can listen to it.

So what happened that Allah showed His displeasure and said that you will go to the world, you cannot stay in the heaven. So he came to this earth and started asking for forgiveness.

We are told to come for prayers. We don’t go for prayers! Why are we told to pray? Why are we told to pray in the morning? Why are we told to pray in the afternoon (Zuhr)? Why are we told to pray at Asr? Why are we told to pray at Maghrib (sunset)? Why are we told to pray at Isha (night)? One prayer was enough if Allah wished.

But there is a lot of wisdom in it where my mind cannot reach, but one thing is clear. It is obvious that a human will go out for his necessities, will go to the markets, will go to the farms, will sit in the offices, will work hard, will earn money, meet with people; he will do good deeds and will also do wrong deeds. So there should be a way for remedying the wrongs.

Allah has commanded us that He wants to see us clean, clean from all the sins. He opened a door for you: come and pray, purify yourself from all sins, get rid of all the sins. So why do we feel burdened by praying five times a day when we want Allah’s love and gain His proximity?

So friends! The way is very easy. While sins happen—Adam (AS) had sinned and spent all his life in regret and asked for forgiveness all his life.”`,
      ur: `”حضرت آدم علیہ السلام کا قصہ سنو، جو اللہ کے نائب بن کر اس دنیا میں تشریف لائے، جنہیں اللہ کے حکم سے فرشتوں نے سجدہ کیا—کیا آپ حضرت آدم علیہ السلام کی کہانی میں اپنی کہانی نہیں دیکھتے؟ کیا میں اپنی کہانی اس میں نہیں پاتا؟

اللہ تعالیٰ نے ان کی تنہائی دور فرمائی، ان کا نکاح ہوا، انہیں بتایا گیا کہ یہ کام کرو اور یہ نہ کرو، انہوں نے اقرار فرمایا۔ پھر شیطان نے وسوسہ ڈالا اور وہ لغزش کھا گئے اور وہ کام سرزد ہوا جو منع کیا گیا تھا۔ کیا یہ سب کچھ ہمارے ساتھ نہیں ہوتا؟ اگر کوئی یہ سمجھے کہ ’نہیں، مجھ سے تو کبھی کوئی خطا سرزد نہیں ہوتی،‘ تو وہ انسان نہیں، کوئی فرشتہ ہی ہو سکتا ہے۔

حضرت آدمؑ کا واقعہ نہایت سادہ مگر بصیرت افروز ہے۔ یہ واقعہ محض ان کی انفرادی داستان نہیں بلکہ پوری انسانیت کی داستان ہے۔ اس کا مفہوم یہ ہے کہ انسان لغزشوں اور کوتاہیوں کا مجموعہ ہے۔ اس سے غلطی سرزد ہوگی، مگر انسان کا کمال یہ ہے کہ وہ اپنی کوتاہی کا اعتراف بھی کرے اور بارگاہِ الٰہی میں جھک جائے۔ آپ قرآنِ مجید میں حضرت آدمؑ کا واقعہ پڑھ سکتے ہیں اور سن سکتے ہیں۔

جب لغزش ہوئی تو اللہ تعالیٰ کا حکم ہوا کہ دنیا میں تشریف لے جاؤ، اب جنت کا قیام باقی نہیں رہا۔ پس وہ اس دھرتی پر تشریف لائے اور مسلسل آنسوؤں کے ساتھ بخشش و مغفرت طلب کرنے لگے۔

ہمیں پانچ وقت نماز کی طرف بلایا جاتا ہے، لیکن ہم کوتاہی برتتے ہیں! ہمیں بار بار نماز کا حکم کیوں دیا گیا؟ صبح فجر کے وقت کیوں بلایا گیا؟ ظہر کی تپش میں کیوں بلایا گیا؟ عصر، مغرب اور پھر رات کو عشاء کے وقت کیوں؟ اگر اللہ تعالیٰ چاہتا تو دن رات میں ایک ہی نماز کافی فرما دیتا۔

لیکن اس میں ربِّ کریم کی وہ بے پایاں حکمتیں پوشیدہ ہیں جہاں ہمارے فہم کا احاطہ ممکن نہیں۔ لیکن ایک بات روزِ روشن کی طرح واضح ہے: انسان اپنی ضروریات کے لیے باہر نکلے گا، بازاروں کا رخ کرے گا، کھیتوں میں جائے گا، دفاتر میں بیٹھے گا، محنت مشقت کرے گا، روزی کمائے گا، لوگوں سے میل جول رکھے گا—اس دوران اس سے نیکیاں بھی سرزد ہوں گی اور نادانستہ کوتاہیاں اور لغزشیں بھی ہوں گی۔ پس ان گناہوں کی دھلائی اور ازالے کا کوئی باقاعدہ نظام ہونا چاہیے تھا۔

اللہ تعالیٰ کا ارشاد ہے کہ وہ اپنے بندے کو گناہوں سے بالکل پاک و صاف دیکھنا چاہتا ہے۔ اس نے تمہارے لیے توبہ و طہارت کا دروازہ کھول دیا: آؤ، نماز پڑھو، اپنے آپ کو تمام گناہوں سے پاک کرو اور آلودگیوں کو دھو ڈالو۔ پس جب ہم اللہ تعالیٰ کی محبت اور اس کا قرب چاہتے ہیں تو ہمیں دن میں پانچ بار نماز پڑھتے ہوئے بوجھ کیوں محسوس ہو؟

پس میرے دوستو! راستہ نہایت آسان ہے۔ گناہ اور خطائیں انسان سے سرزد ہو جاتی ہیں، جیسے حضرت آدمؑ سے لغزش ہوئی اور انہوں نے پوری زندگی ندامت کے ساتھ بارگاہِ رب العزت میں استغفار فرمائی۔“`,
      ar: `«استمعوا إلى قصة أبينا آدم عليه السلام، الذي هبط إلى هذه الأرض خليفةً لله، وسجدت له الملائكة بأمر بارئها—ألا ترون قصتكم منعكسة في قصة آدم؟ ألا أرى أنا قصتي فيها؟

رفع الله عنه الوحشة ورزقه الزوجة، وبُيّن له ما يفعل وما يترك. فوسوس له الشيطان فزلّ، وفعل ما نُهي عنه. أليس هذا حال كل واحد منا؟ إن ظن امرؤٌ أنه معصوم لا يخطئ فليس بآدمي، بل هو من صنف الملائكة!

إن قصة آدم يسيرة وجلية، وهي قصة الإنسانية كلها: فالإنسان مجبول على الخطأ والنقص، يقع في الزلل ولكن عليه أن يسارع بالاعتراف والإنابة. هبط آدم إلى الأرض وقضى عمره مستغفراً نادماً تائباً.

ونحن نُدعى إلى الصلوات الخمس في أوقاتها: فجر، وظهر، وعصر، ومغرب، وعشاء. وفي توزيع هذه الأوقات حكمة ربانية بالغة؛ فالإنسان يخالط الناس في الأسواق والمكاتب والزروع، فيكسب ويعامل، وتصيبه لوثة الخطايا. فجعل الله الصلوات كفارات ومطهرات يغسل بها العبد ذنوبه أولاً بأول ليبقى نقياً طاهراً مقرباً إلى مولاه. فالطريق ممهد وباب التوبة مفتوح دائماً.»`,
    },
    keyTakeaway: {
      en: 'Acknowledge errors without pride, and use the five daily prayers as regular cleansing intervals for the soul.',
      ur: 'تکبر کو چھوڑ کر اپنی کوتاہی کا اعتراف کریں اور پانچ وقت نماز کو روح کی مسلسل صفائی کا ذریعہ بنائیں۔',
      ar: 'التجرد من الكبر، والمسارعة إلى الاعتراف بالذنب، وجعل الصلوات الخمس محطات يومية لتطهير الروح.',
    },
  },
  {
    id: 'saying-four-eyes',
    title: {
      en: 'All Humans Have Four Eyes',
      ur: 'ہر انسان کی چار آنکھیں ہوتی ہیں',
      ar: 'لكل إنسان أربعة أعين',
    },
    sourceDate: {
      en: 'Extract translated from the discourse “Ehl-e-Zikr Hazraat ke Khidmat May Chund Maaruzaat”',
      ur: 'مستفاد از مقالہ و خطاب: ”اہلِ ذکر حضرات کی خدمت میں چند معروضات“',
      ar: 'مقتبس من رسالة وتوجيهات: «أهل الذكر - إرشادات وتوجيهات»',
    },
    location: {
      en: 'Spiritual Training Gathering',
      ur: 'تربیتی نشست، جماعت اصلاح المسلمین',
      ar: 'مجلس التربية الروحية وتزكية السالكين',
    },
    topic: {
      en: 'Inner Insight, Basirah & Discernment of Halal and Haram',
      ur: 'بصیرتِ قلبی اور حلال و حرام کی تمیز',
      ar: 'البصيرة الباطنية والتفريق بين الحلال والحرام',
    },
    themeTags: ['Inner Eyes', 'Zikr-e-Qalbi', 'Basirah', 'Spiritual Vision'],
    summary: {
      en: 'Drawing upon Imam Al-Ghazali’s Ihya Ulum al-Din, the Sheikh illuminates that head eyes view physical worldly gains, whereas the heart’s eyes perceive the eternal life hereafter.',
      ur: 'امام غزالیؒ کی احیاء علوم الدین کے حوالے سے وضاحت: سر کی ظاہری آنکھیں دنیا اور نفع و نقصان دیکھتی ہیں، جبکہ دل کی باطنی آنکھیں آخرت اور حلال و حرام میں تمیز کرتی ہیں۔',
      ar: 'استناداً إلى إحياء علوم الدين للإمام الغزالي: عينان في الرأس للنظر في شؤون الدنيا العاجلة، وعينان في القلب لمشاهدة حقائق الآخرة ومعرفة الحلال من الحرام.',
    },
    fullQuote: {
      en: `“Imam Ghazali (Rehmatullah Alaih) states in his renowned monumental work ‘Ihya-e-Uloom’:

‘All humans have four eyes. Two are present at his head which he uses to view the worldly affairs, understand material gains and losses; whereas two eyes are present in the heart, with which he sees the life hereafter, distinguishes between right and wrong, and understands the profound difference between what is allowed (Halal) and what is forbidden (Haram).’

When the heart remains enveloped in spiritual heedlessness and distant from the persistent remembrance of Allah (Zikr), its inner eyes remain shut. The purpose of spiritual wayfaring and Zikr-e-Qalbi is to illuminate those eyes of the heart so that truth becomes distinct from falsehood.”`,
      ur: `”حجة الاسلام حضرت امام غزالی رحمتہ اللہ علیہ اپنی شہرۂ آفاق کتاب ’احیاء علوم الدین‘ میں تحریر فرماتے ہیں:

’ہر انسان کی چار آنکھیں ہوتی ہیں۔ دو آنکھیں اس کے سر پر موجود ہیں جن کے ذریعے وہ دنیاوی معاملات دیکھتا ہے اور نفع و نقصان کی سمجھ بوجھ حاصل کرتا ہے؛ جبکہ دو آنکھیں اس کے دل کے اندر ودیعت کی گئی ہیں، جن کے ذریعے وہ آخرت کے احوال کا مشاہدہ کرتا ہے، حق و باطل کے درمیان تفریق کرتا ہے، اور حلال اور حرام کے نازک اور واضح فرق کو پہچانتا ہے۔‘

جب دل غفلت کی نیند سویا رہے اور اللہ کے ذکر سے دور ہو تو باطن کی آنکھیں بند ہو جاتی ہیں۔ ذکرِ قلبی اور صحبتِ صالحین کا مقصود یہی ہے کہ دل کی یہ بند آنکھیں کھل جائیں اور انسان ظاہر کے ساتھ باطن کی حقیقتوں کا ادراک کر سکے۔“`,
      ar: `«يقول الإمام الغزالي رحمه الله تعالى في كتابه الجليل "إحياء علوم الدين":

"لكل إنسان أربعة أعين: عينان في رأسه ينظر بهما إلى أمور دنياه، ويدرك بهما منافعه ومضارّه المادية؛ وعينان في قلبه، يبصر بهما أمر آخرته، ويميز بهما بين الحق والباطل، ويدرك بهما الفرق الجلي بين الحلال والحرام."

فإذا ران على القلب غبار الغفلة وأعرض عن ذكر الله انطبقت عينا قلبه، وعاش أعمى البصيرة. ومقصد الذكر القلبي وملازمة المرشد الصادق إنما هو جلاء مرآة الفؤاد لتنفتح هاتان العينان وتستنير بنور الإيمان.»`,
    },
    keyTakeaway: {
      en: 'Awaken the eyes of the heart through Zikr-e-Qalbi so you can clearly discern eternal consequence and divine pleasure in daily life.',
      ur: 'ذکرِ قلبی کے ذریعے دل کی آنکھیں بیدار کریں تاکہ روزمرہ زندگی میں آخرت کی ابدی کامیابی اور رضائے الٰہی کی پہچان حاصل ہو۔',
      ar: 'إيقاظ بصيرة القلب بالذكر الخفي ليصبح العبد قادراً على تمييز الحق والحرص على مرضاة الله في شؤون حياته.',
    },
  },
  {
    id: 'saying-leave-behind',
    title: {
      en: 'One Has to Leave Them Behind!!!',
      ur: 'سب کچھ یہیں پیچھے چھوڑ جانا ہے!',
      ar: 'لا محالة أن يتركها المرء خلفه!',
    },
    sourceDate: {
      en: 'Annual Urs Markaz Gathering at Toll Plaza, Karachi, Pakistan — 2007',
      ur: 'سالانہ عرس مبارک مرکز: ٹول پلازہ، کراچی، پاکستان — ۲۰۰۷ء',
      ar: 'مجلس العرس السنوي المبارك: تول بلازا، كراتشي، باكستان — ۲۰۰۷م',
    },
    location: {
      en: 'Karachi, Pakistan',
      ur: 'کراچی، پاکستان',
      ar: 'كراتشي، باكستان',
    },
    topic: {
      en: 'Worldly Transience, True Reliance upon Allah & Freedom from Material Pride',
      ur: 'دنیا کی بے ثباتی، توکل علی اللہ اور فانی مال و متاع سے بے رغبتی',
      ar: 'زوال الدنيا، وكمال التوكل على الله، وحقيقة الرضا بالرزق',
    },
    themeTags: ['Worldly Transience', 'Tawakkul', 'Zuhd', 'Remembrance of Death'],
    summary: {
      en: 'Through the narrative of a man of God refusing royal gifts and Hazrat Shah Ghulam Ali Dehlawi’s wisdom, the Sheikh emphasizes that whether grand or humble, all worldly houses must be left behind.',
      ur: 'ایک مردِ خدا کی بادشاہ کے انعام سے بے نیازی اور حضرت شاہ غلام علی دہلویؒ کے واقعے کے ذریعے یہ سبق کہ نیا مکان ہو یا پرانا محل، انسان کو بالآخر سب کچھ یہیں چھوڑ کر رخصت ہو جانا ہے۔',
      ar: 'عبر قصة الولي الصالح مع عطاء الملك وموقف العارف الشاه غلام علي الدهلوي: لا فرق بين قصر مشيد وبيت متواضع؛ فكل ما في الدنيا سيتركه المرء وراء ظهره ويرحل.',
    },
    fullQuote: {
      en: `“A king sent his servant to an Allah-wala (a devoted man of God) with a ‘Deh’. ‘Deh’ in Sindhi denotes a substantial expanse of fertile land. The king instructed his servant to go and present the property deed to the man of God.

When the servant arrived and presented the royal documents, the devotee did not even look at those papers. The servant insisted, ‘Sir, the King desires to present you a Deh!’

The saint responded with a sublime Persian verse containing an enduring lesson for us:

‘Shah hammara deh dihat minnat nehat
Raazik-e-ma Raazik-e-ma aa Rizq peh minnat dehat’

And he said: ‘The King gives me a small piece of land and boasts about his favor over me. I devote myself to my Allah who sustains me every moment and never boasts of His favor! Why then should I place myself in debt to an earthly king? For me, my Allah is sufficient.’

I ask you all: if Allah were to summon us to account for everything He has bestowed upon us, would we ever be capable of repaying Him? This air, this water, this earth… whose is it?

We declare: ‘This land is mine! This orchard is mine! This farm is mine! This house is mine! This property is mine!’

Friends! Countless generations have walked upon this earth who proclaimed the very same words.

A wealthy notable once visited Hazrat Shah Ghulam Ali Dehlawi (RA) and remarked: ‘Sir, your spiritual sanctuary has weathered and aged; I will designate an opulent wing of my palace for you, and you should move there.’

The venerable master replied: ‘When someone has to depart, he simply departs. For him, his own house or someone else’s is identical; an old house or a brand new palace are entirely equal.’

How are they equal? One has to leave them behind.”`,
      ur: `”ایک بادشاہ نے اپنے خادم کو ایک مردِ خدا (اللہ والے) کے پاس ایک ’دیہہ‘ دے کر بھیجا۔ سندھی زبان میں ’دیہہ‘ زرخیز اراضی کے وسیع رقبے کو کہتے ہیں۔ بادشاہ نے حکم دیا کہ جاؤ اور یہ جاگیر اس مردِ درویش کی خدمت میں پیش کرو۔

جب خادم دستاویزات لے کر پہنچا اور پیش کیں تو اس اللہ والے نے ان کاغذات کی طرف نگاہ اٹھا کر دیکھنا بھی گوارا نہ کیا۔ خادم نے اصرار سے عرض کیا: ’حضور! بادشاہ سلامت نے آپ کو ایک دیہہ نذرانہ بھیجا ہے۔‘

اس درویش نے ایک لاجواب فارسی شعر پڑھا جس میں ہم سب کے لیے عبرت اور نصیحت کا خزانہ ہے:

’شاہِ ہمہ را دہ دہد منت نہد
رازقِ ما رازقِ ما آں رزق پہ منت نہ دہد‘

اور فرمایا: بادشاہ مجھے زمین کا ایک ٹکڑا دیتا ہے اور اپنا احسان جتلاتا ہے۔ میں اپنے اس رب کے سامنے جھکتا ہوں جو ہر آن مجھے رزق عطا فرماتا ہے اور کبھی احسان نہیں جتلاتا۔ پس میں کسی بادشاہ کا احسان مند کیوں بنوں؟ میرے لیے میرا اللہ ہی کافی ہے۔

میں آپ سب سے پوچھتا ہوں: اگر اللہ تعالیٰ ہم سے ان تمام نعمتوں کا حساب مانگ لے جو اس نے ہمیں عطا فرمائیں، تو کیا ہم اس کا حق ادا کرنے کی سکت رکھتے ہیں؟ یہ ہوا، یہ پانی، یہ زمین… یہ سب کس کی ملکیت ہے؟

ہم دعویٰ کرتے ہیں: ’یہ زمین میری ہے، یہ باغ میرا ہے، یہ فارم ہاؤس میرا ہے، یہ عالی شان مکان میرا ہے، یہ جائیداد میری ہے!‘

میرے دوستو! اس دنیا میں ہم سے پہلے کروڑوں لوگ آئے جنہوں نے یہی دعوے کیے اور خاک میں مل گئے۔

ایک امیر آدمی قطبِ عالم حضرت شاہ غلام علی دہلوی رحمتہ اللہ علیہ کی خدمت میں حاضر ہوا اور عرض کی: ’حضور! آپ کی یہ خانقاہ بوسیدہ ہو چکی ہے، میں اپنے عالیشان محل کا ایک حصہ آپ کے لیے وقف کرتا ہوں، آپ وہاں تشریف لے چلیں۔‘

حضرت شاہ صاحبؒ نے جواباً ارشاد فرمایا: ’جس مسافر نے رختِ سفر باندھ کر چلے جانا ہو وہ بس چلا جاتا ہے۔ اس کے لیے اپنا مکان ہو یا کسی غیر کا، دونوں برابر ہیں؛ پرانی جھونپڑی ہو یا نیا محل، دونوں یکساں ہیں۔‘

پوچھا گیا کہ وہ یکساں کیسے ہیں؟ فرمایا: ’سب کچھ یہیں پیچھے چھوڑ جانا ہے!‘“`,
      ar: `«أرسل ملكٌ خادمه إلى رجل صالح من أولياء الله ومعه صكّ بملكية "ديه" (وهي رقعة واسعة من الأراضي الزراعية في لغة السند). فلما قدم الخادم وقدم الأوراق، لم يلتفت الولي إليها. فقال الخادم متعجباً: سيدي، الملك يهبك هذه الأرض!

فأنشد الولي بيتاً بالفارسية يحمل موعظة بليغة:
"الملك يعطي الأرض ويمتنّ بعطائه
ورازقنا الكريم يرزقنا ولا يمنّ على خلقه"

وقال: الملك يعطيني أرضاً زائلة ويمنّ بها، وأنا عبدٌ لمولاي الحق الذي يرزقني ليل نهار بلا مَنّ ولا أذى، فكيف أرتهن نفسي لملك فانٍ؟ حسبي الله وكفى!

يا إخواني، لو حاسبنا ربنا على نعمه العظيمة أفي وسعنا أداء شكرها؟ الهواء، الماء، الأرض... ملك من هي؟ يقول أحدنا: هذه أرضي، وهذا بستاني، وهذه داري! كم مر بالدنيا من قال ذلك ثم رحل صفر اليدين؟

وجاء رجل ثري إلى العارف بالله الشاه غلام علي الدهلوي رحمه الله وقال: يا سيدي، زاويتك باتت قديمة، وسأخصص لك جناحاً في قصري المشيد لتسكنه. فقال له الشيخ: "المسافر متى حان رحيله رحل؛ وسواء عنده داره أو دار غيره، وبيت عتيق أو قصر جديد!" قيل له: كيف يستويان؟ قال: "لأن المرء في النهاية سيتركهما معاً خلف ظهره ويمضي!"»`,
    },
    keyTakeaway: {
      en: 'Realize that material possessions are temporary loans; real peace stems from complete reliance on the unboasting Provider.',
      ur: 'یاد رکھیں کہ دنیاوی جائیدادیں عارضی امانت ہیں؛ اصل سکون اس رب پر توکل میں ہے جو ہر آن رزق دیتا ہے اور احسان نہیں جتاتا۔',
      ar: 'اليقين بأن المقتنيات عوارٍ مستردة، وأن الغنى الحقيقي هو التوكل على الرزاق الذي لا يمنّ على عباده.',
    },
  },
  {
    id: 'saying-eye-of-admonitory',
    title: {
      en: 'The Eye of Admonitory (Ibrat ki Nazar)',
      ur: 'عبرت کی نظر (عبرت کی نگاہ)',
      ar: 'عين الاعتبار والموعظة (عبرت کی نظر)',
    },
    sourceDate: {
      en: 'Discourse delivered in Manchester, United Kingdom — 2008',
      ur: 'خطاب مبارک: مانچسٹر، برطانیہ — ۲۰۰۸ء',
      ar: 'خطاب مبارك: مانشستر، المملكة المتحدة — ۲۰۰۸م',
    },
    location: {
      en: 'Manchester, United Kingdom',
      ur: 'مانچسٹر، برطانیہ',
      ar: 'مانشستر، المملكة المتحدة',
    },
    topic: {
      en: 'Selfless Service Without Expectation of Reward & Cultivating Thankfulness',
      ur: 'بے لوث خدمت، شکر گزاری اور کائنات کے ہر مظہر سے درسِ عبرت',
      ar: 'الخدمة الخالصة لوجه الله، والشكر، واستلهام العبرة من المخلوقات',
    },
    themeTags: ['Admonition', 'Selfless Service', 'Gratitude', 'Nature Contemplation'],
    summary: {
      en: 'Contemplating a steadfast pillar and a patient tree reveals the essence of genuine altruism: offering enduring shelter and fruit to others without demanding personal gain or harboring ingratitude.',
      ur: 'ستون اور سایہ دار درخت کی تمثیل سے بے غرض خدمت کا انوکھا درس: بغیر کسی ذاتی فائدے کے خلقِ خدا کو نفع پہنچانا اور ہر حال میں شکر ادا کرنا۔',
      ar: 'التأمل في ثبات العمود وصبر الشجرة يقدم درساً في الإيثار الحقيقي: نفع عباد الله بلا انتظار جزاء ولا شكوى من تقلب الأحوال.',
    },
    fullQuote: {
      en: `“If we look at this pillar, for years it is standing like this, holding the roof for us to sit underneath it in warm and cold weather; we are enjoying the serenity under this roof. We are getting the benefit, whereas the pillar itself has no advantage from it.

Our lives should be like this pillar—without any intention of seeking selfish benefits.

A tree spreads its branches, tolerates the scorching rays of the sun, and bears harsh winds, but never complains; it is never thankless. The tree remains green if it receives water; it still stands patient and green if it does not get water.

If we look at ourselves, we have so many blessings: we eat so many different kinds of foods, we tailor so many clothes, our women adorn diverse jewelry, yet we remain thankless!

If we possess the eye of admonitory (ibrat ki nazar), then everything in existence will take us towards Allah—even a stone, which possesses no physical life, will guide our thoughts towards Allah.”`,
      ur: `”اگر ہم اس ستون پر غور کریں تو یہ برسوں سے اسی طرح مضبوطی کے ساتھ کھڑا ہے، اس نے چھت کو سنبھال رکھا ہے تاکہ ہم سخت گرمی اور سردی میں اس کے نیچے پرسکون بیٹھ سکیں۔ ہم سب اس چھت کے سائے اور راحت سے مستفید ہو رہے ہیں، جبکہ اس ستون کو اپنی ذات کے لیے اس سے کوئی فائدہ نہیں پہنچتا۔

ہماری زندگیاں بھی اس ستون کی مانند ہونی چاہئیں—کہ مخلوقِ خدا کو مسلسل نفع اور راحت پہنچائیں بغیر اس کے کہ اپنے ذاتی مفاد اور صلے کی تمنا کریں۔

ایک درخت اپنی شاخیں پھیلاتا ہے، تپتی ہوئی دھوپ کے تیز شعلے خود برداشت کرتا ہے، لُو اور گرم ہوائیں سہتا ہے، مگر کبھی شکوہ و شکایت نہیں کرتا؛ کبھی ناشکری کا کلمہ زبان پر نہیں لاتا۔ درخت کو اگر پانی میسر آئے تب بھی وہ ہرا بھرا رہتا ہے، اور اگر نہ ملے تب بھی صبر کے ساتھ کھڑا رہتا ہے۔

اس کے برعکس جب ہم اپنے احوال پر نظر ڈالتے ہیں تو دیکھتے ہیں کہ ہم پر ربِّ کریم کی کتنی بے شمار نعمتیں ہیں: ہم انواع و اقسام کے لذیذ کھانے کھاتے ہیں، طرح طرح کے خوبصورت لباس زیب تن کرتے ہیں، ہماری مائیں بہنیں زیورات پہنتی ہیں، لیکن اس کے باوجود ہم ناشکری کے مرتکب ہوتے ہیں!

اگر ہمارے پاس عبرت کی نگاہ ہو تو اس کائنات کی ہر ہر شے ہمیں اللہ کی طرف لے جائے گی—یہاں تک کہ ایک بے جان پتھر بھی ہمیں اپنے رب کی یاد دلا دے گا۔“`,
      ar: `«تأملوا في هذا العمود؛ إنه قائم منذ سنين يحمل السقف فوق رؤوسنا، نستظل به في القيظ والبرد ونهنأ بالسكينة تحته. نحن ننتفع بظله وثباته، بينما العمود لا ينتظر لنفسه نفعاً ولا جزاءً.

ينبغي أن تكون حياة أحدنا كهذا العمود: ينفع الخلق ويعينهم دون أن يبتغي مصلحة شخصية أو ثناءً عاجلاً.

وانظروا إلى الشجرة؛ تبسط ظلالها الوارفة، وتصطلي بحرّ الهاجرة ورياح السموم، ولا تشتكي قط، ولا تكفر نعمة باريها. إن سُقيت ماءً نضرت وخضرت، وإن حُبست عنه صبرت وثبتت.

أما نحن، فغارقون في بحار النعم: نأكل ألوان الطعام، ونلبس فاخر الثياب، وتتزين نساؤنا بالحلي، ومع ذلك نكثر الشكوى والجحود!

لو رُزقنا "عين الاعتبار" (عبرت کی نظر) لهدانا كل شيء في هذا الوجود إلى الله، حتى الحجر الأصم الذي لا حياة فيه سيذكرنا بعظمة الخالق جل وعلا.»`,
    },
    keyTakeaway: {
      en: 'Serve society selflessly like a steadfast pillar, and cultivate constant gratitude by learning from the silent obedience of nature.',
      ur: 'ستون کی مانند بے غرض خدمت کا نمونہ بنیں اور قدرت کے مظاہر سے سبق لے کر ہر حال میں شکر گزاری کی عادت اپنائیں۔',
      ar: 'بذل المعروف للناس بلا منّ كشأن العمود الثابت، ودوام الشكر لله بالاعتبار بآيات الله في خلقه.',
    },
  },
  {
    id: 'saying-reason-of-existence',
    title: {
      en: 'The Reason of Existence',
      ur: 'تخلیقِ انسانی کا اصل مقصد',
      ar: 'الغاية العظمى من الوجود الإنساني',
    },
    sourceDate: {
      en: 'Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan — May 2008',
      ur: 'درگاہ اللہ آباد شریف، کنڈیارو، سندھ، پاکستان — مئی ۲۰۰۸ء',
      ar: 'دركاه الله آباد شريف، كنډيارو، السند، باكستان — مايو ۲۰۰۸م',
    },
    location: {
      en: 'Dargah Allahabad Sharif, Kandiaro, Sindh',
      ur: 'درگاہ اللہ آباد شریف، کنڈیارو، سندھ',
      ar: 'دركاه الله آباد شريف، كراتشي / السند',
    },
    topic: {
      en: 'The Supreme Purpose of Life: Reverence to Allah, Constant Zikr & Devotion',
      ur: 'زندگی کا اعلیٰ ترین مقصد: معرفتِ الٰہی، دائمی ذکر اور سچی بندگی',
      ar: 'الغاية الكبرى للحياة: إخلاص العبودية لله، ودوام الذكر، والمحبة الإلهية',
    },
    themeTags: ['Purpose of Life', 'Zikr of Allah', 'Divine Love', 'Spiritual Dignity'],
    summary: {
      en: 'The noble aim of human life is reverence to the Divine. While a tree generously returns sweet fruit when struck by a stone, the reason for human existence is infinitely more exalted: love of Allah, perpetual Zikr, and sincere devotion.',
      ur: 'انسانی زندگی کا اصل مقصد یادِ الٰہی ہے۔ پتھر مارنے والے کو میٹھا پھل دینے والے درخت کی تخلیق اگر اتنی عظیم ہے، تو انسان کا وجود اس سے بھی کہیں زیادہ بلند مرتبہ ہے: یعنی اللہ کی سچی محبت، اس کا دائمی ذکر اور خلوصِ دل سے بندگی۔',
      ar: 'أشرف مقاصد الحياة توحيد الله ومحبته وذكره. وإذا كانت غاية خلق الشجرة التي تقابل راميها بالحجر بالثمر غاية جليلة، فإن وجود الإنسان أعظم شرفاً وأرفع قدراً: وهو محبة الله، ودوام ذكره، والعبودية الخالصة له.',
    },
    fullQuote: {
      en: `“The most important objective of a person’s life is his reverence to Allah. He should spend every moment in the Zikr (remembrance) of Allah. A heedless person is like the discarded peel of a banana that is neither eaten by a human nor accepted by an animal.

A human should learn a profound lesson from a tree that stands in the scorching sun but gives shade to Allah’s creatures. The tree is among the wondrous signs of Allah: when someone throws a stone at the tree, it returns to him a sweet fruit!

The reason for the creation of a tree is so magnificent; the existence of a human being is even more glorious!

And that supreme reason is: the love of Allah, His Zikr (remembrance), and sincere devotion.”`,
      ur: `”انسان کی پوری زندگی کا سب سے اہم اور بنیادی مقصد اپنے رب کی بارگاہ میں خشوع و خضوع اور بندگی اختیار کرنا ہے۔ انسان کو اپنی زندگی کا ہر ہر لمحہ اللہ تعالیٰ کے ذکر میں گزارنا چاہیے۔ جو شخص غفلت میں زندگی گزار دے اس کی مثال کیلے کے اس چھلکے جیسی ہے جسے نہ انسان کھاتا ہے اور نہ کوئی جانور منہ لگاتا ہے۔

انسان کو اس درخت سے بڑا سبق حاصل کرنا چاہیے جو چلچلاتی دھوپ میں خود جلتا رہتا ہے مگر اللہ کی مخلوق کو ٹھنڈا سایہ فراہم کرتا ہے۔ درخت اللہ تعالیٰ کی قدرت کے عظیم الشان نشانیوں میں سے ہے: جب کوئی شخص اس درخت پر پتھر مارتا ہے، تو درخت بدلے میں اسے میٹھا پھل عطا کرتا ہے!

جب ایک درخت کی پیدائش کا مقصد اتنا عظیم الشان اور بابرکت ہے، تو ایک انسان کی تخلیق اور اس کا وجود تو اس سے بھی کہیں زیادہ بلند مرتبت، مکرم اور شاندار ہے۔

اور وہ مقصدِ جلیلہ کیا ہے؟ وہ ہے: اللہ تعالیٰ کی سچی محبت، اس کا دائمی ذکر اور اس کی بارگاہ میں خلوصِ دل سے بندگی۔“`,
      ar: `«إن أشرف مقصد خُلق الإنسان لأجله هو تعظيم الله تعالى والإنكسار بين يديه. ينبغي للعبد أن يعمر أنفاسه كلها بذكر الله؛ فإن الغافل عن ذكر ربه كقشرة الموز المطروحة، لا ينتفع بها إنسان ولا ترغب فيها بهيمة!

ينبغي للآدمي أن يتعلم الحكمة من شجرة تقف صابرة تحت وهج الشمس المحرقة لتهب الظل الظليل لخلق الله. إن الشجرة من آيات الله الباهرة: يرميها الإنسان بالحجر، فترد عليه بالثمر الحلو الشهي!

فإذا كان المقصد من خلق الشجرة بهذا القدر من النفع والجمال، فإن الغاية من وجود الإنسان أعظم مجداً وأشرف قدراً.

وتلك الغاية العظمى هي: محبة الله، ودوام ذكره، وكمال العبودية والإخلاص لجنابه العلي.»`,
    },
    keyTakeaway: {
      en: 'Dedicate every breath to the remembrance and love of Allah, responding to hostility with the sweet fruit of benevolence.',
      ur: 'اپنی ہر سانس کو یادِ الٰہی اور محبتِ الٰہی میں بسر کریں، اور بدی کا جواب بھی درخت کی مانند نیکی اور احسان کے میٹھے پھل سے دیں۔',
      ar: 'عمارة كل نَفَس بمحبة الله وذكره، ومقابلة الإساءة بالإحسان كالشجرة التي تعطي الثمر لمن يرميها بالحجر.',
    },
  },
];
