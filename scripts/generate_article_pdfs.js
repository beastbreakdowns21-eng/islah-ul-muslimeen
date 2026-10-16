import fs from 'fs';
import path from 'path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const articles = [
  {
    fileName: 'brief-daily-practices-in-tariqa-aliya-naqshbandia.pdf',
    title: 'Brief (daily) Practices in Tariqa Aliya Naqshbandia',
    subtitle: 'Jalwah Gaahe Doost',
    author: 'By Hadhrat Khawja Muhammad Tahir Bakhshi Naqshbandi',
    pages: [
      [
        'Brief (daily) Practices in Tariqa Aliya Naqshbandia',
        'Jalwah Gaahe Doost',
        'By Hadhrat Khawja Muhammad Tahir Bakhshi Naqshbandi',
        'Source: Jalwah Gaahe Doost | Jamaat Islah-ul-Muslimeen',
        '',
        'Recitation of Quran:',
        'Quran recitation should be performed everyday, one part or more. Better to make a habit of at least half a part and without any reason it should not be left.',
        '',
        'Kalimah Tayibah:',
        'Recite Kalima Tayibah as much as possible, it is not necessary to recite with a loud voice as long you can hear or the person sitting next to you can hear. Recite LA ILAHA ILLALLAH 99 times, and then recite complete Kalimah Shareef once LA ILAHA ILLALLAH MUHAMMADUR RASOOL ALLAH SALLALLAH ALAIHAI WASALLAM.',
        'It is necessary to recite at least two tasbeehs (100*2) everyday.',
        '',
        'Durood Shareef:',
        'As much as possible but recite at least two tasbeehs everyday and increase recitation on Fridays.',
        '',
        'Astaghfaar:',
        'Two tasbeehs should be recited everyday: "Astaghfirullah Rabbi min kulli zambinw wa atoobu ilayh".',
        '',
        'Tasbeeh:',
        'Two tasbeeh Subhan Allah: "Subhan Allahi wa bihamdihi Subhan Allahil Azeem wa bihamdihi".',
        '',
        'Night Prayer (Tahajjud):',
        'After half of the night has passed, when one wakes up, read 8 to 12 rakah (units), depending upon one’s strength.',
        '',
        'Silsila Aaliyah:',
        'Silsila Aaliyah (shajrah shareef) Naqshbandia Mujadidiya Fadalia Ghaffariya Bakhshiya and prayers (munajat) should be recited before sleeping or at the time of Tahajjud prayer. It should be read in Arabic, Urdu or Sindhi, which ever language is easier for one.',
        'Along with the above before sleeping at night the following should also be recited: Surah Fatiha (chapter 1).'
      ],
      [
        'Brief (daily) Practices in Tariqa Aliya Naqshbandia (Continued)',
        '',
        '• Initial verses of Surah Baqarah (chapter 2) from verse Alif Laam Meem to Muflihoon',
        '• Ayatul Kursi up to Khalidoon (this is also from surah baqarah)',
        '• And last verses from Surah Baqarah from Aamanur Rasool up to the end of chapter',
        '• Recite Four Qul chapters:',
        '   - Qul ya ayuhal kaafiroon',
        '   - Qul howalla hu ahad',
        '   - Qul aoozo be rabil falaq',
        '   - Qul aoozo be rabbin naas',
        '   Recite Bismillah with each one of these.',
        '• Recite Durood Shareef 11 times',
        '',
        'And blow on your hands then run hands over your body. Then blow on your family members especially children.',
        '',
        'Recite sunnah dua (bismika allah huma amooto wa ahya) before sleeping',
        'and recite (Alhamdulilah hiladhi ahyani bada ma amatani wa ilahinushoor) on awakening.',
        '',
        'During the blessed month of Ramadhan:',
        'Kalimah Tayabah and recitation of Quran should be performed with abundance. Salat ul tasbeeh should be offered as much as possible.',
        '(The Tasbih to be read in Salaat-Ul-Tasbeeh: "Subhaan Allahi Wal Hamdulillahi Wa Laa ilaha illal Laahu Wallahu Akbar")',
        '',
        'Copyright © Islah-ul-Muslimeen | Official Publication'
      ]
    ]
  },
  {
    fileName: 'halqa-e-zikr-or-muraqaba-or-meditation.pdf',
    title: 'Halqa-e-Zikr or Muraqaba or Meditation',
    subtitle: 'Excerpts from the Biography of Hadrat Sohna Saeen (RA) “Seerat-e-Wali Kamil”',
    author: 'Written by Maulana Habib-ur-Rahman Gabool, Vol 1, 1st Edition',
    pages: [
      [
        'Jamaat Islah-ul-Muslimeen | Official Archival Publication',
        '',
        'Halqa-e-Zikr or Muraqaba or Meditation',
        'Excerpts from the Biography of Hadrat Sohna Saeen (RA) "Seerat-e-Wali Kamil"',
        '(Written by Maulana Habib-ur-Rahman Gabool, Vol 1, 1st Edition)',
        '',
        'Hadhrat Rasool-e-Maqbool (Peace be upon him) said: "When you pass near the gardens of the Jannah, sate your hunger completely."',
        '',
        'Linguistic meaning of Halqa is a round circle and Muraqaba means to bow your head and wait. According to the Sufis, to sit in a circle and wait for the blessings (Faizan-e-Ilahi) of Allah.',
        '',
        'Essence of Muraqaba:',
        'During different times, the Mujaddideen (revivers in din without changing the rules of the Shariah) brought about new and innovative ideas to keep the remembrance of Allah. Therefore, some perform "Zikr biljahar" (Zikr in loud voices) and some performed Zikr quietly or in one’s heart. All of these methods are used to reach Allah and these methods are based according to the acquiescence of Allah.',
        '',
        'Our scholars of Tareeqa-e-Aaliya Naqshbandia favored the method of Zikr-e-Qalbi (remembering Allah in one’s heart). Thanks to Allah Almighty, this method is becoming popular day by day.'
      ],
      [
        'Halqa-e-Zikr or Muraqaba or Meditation (Page 2)',
        '',
        'For a long time the followers would sit quietly in a circle and concentrate on performing Zikr. But as time has passed, due to worldly matters, worries and problems, the mind is subject to more worldly thoughts. It was difficult to concentrate towards Allah while sitting quietly in a circle for new and old followers due to the influence and pressure of worldly worries.',
        '',
        'In order to acquire complete concentration towards Zikr, some scholars of Tareeqa-e-Aaliya Naqshbadiya started the recitation of the Holy Quran, verses of hamd (praise of Allah), verses of naat-e-rasool (SW) or verses of Manqabat during muraqaba in group. Along with it, a chaplet of big size beads was taken to generate the sound "Thak Thak Thak" meaning the heart beat of Allah, Allah Allah and with it creating complete concentration.',
        '',
        'It has been almost 100 years since the big sized beads chaplets are being used. Hazoor Sohna Saeen (RA) used to take the name of Hadrat Haji Dost Muhammad Qandahari Quds sara (RA) for the use of the chaplet with big beads. He also used to say that Hadrat Syed Muhammad Baqadar Shah and Peer Sahab Pagara (RA) also possessed such a chaplet which is with the family even today as a sacred relic. (Speech on 5th Safar 1403 Hijri).',
        '',
        'Hence, this method was extremely successful. The hearts of the participants of the Halqa and Muraqaba got inclined towards Allah permanently. Murshidina Hadhrat Fazal Ali Qureshi had so much associated with it that he would put it around his neck most of the time.',
        '',
        'Hazoor Sohna Saeen (RA) had a lot of interest in the Halqa and Muraqaba. In the morning after the Fajr prayers, the Jamaat would sit in a circle to perform zikr-e-Allah. They would do maswaaq, recite Durood 100 times, then recite Quranic verse 500 times for Isaal-e-Sawab of Hadrat Peer Mitha (RA).'
      ],
      [
        'Halqa-e-Zikr or Muraqaba or Meditation (Page 3)',
        '',
        'After that all Fuqra would recite Durood 100 times again, then once Surah Fateha, 11 times Surah Ikhlaas and 11 times Surah Quresh would be recited by every one. (Speech 22nd Ramadhan 1399 Hijri).',
        '',
        'At the end everyone would pray to Allah to transfer the reward of what has been recited to Hazrat Muhammad (peace be upon him), to all Anbiya Karaam (Prophets), all Sahabah and Ahl-e-Bait (RA), to all beloved to Allah.',
        '',
        'After that, everyone would cover their faces, close their eyes and remove all worldly thoughts from their minds, and on the sound of the chaplets "Thak Thak Thak" would think of Allah in their hearts and wait for the blessing of Allah to come into their hearts. And for acquiring these blessings they were told to think that blessings are being transferred from the heart of Hazrat Muhammad (peace be upon him) thru the hearts of the beloved of Allah into your heart. This would be 15 to 30 minutes of meditation.',
        '',
        'Method of Meditation According to Tareeqa Aaliya Naqshbandi:',
        'There are two ways to do meditation: one in group and second in individual/self.',
        '',
        '1. Meditation in Group:',
        '• Sit in a circle (Halqa)',
        '• Cover your face with some cloth',
        '• Remove all thoughts from your mind',
        '• Using a chaplet of big beads, generate the sound of "Thak Thak Thak". This should only be taken as the sound of heartbeat.',
        '• Stick your tongue to the top of your mouth and recite Allah Allah Allah in your heart as if your heart is beating Allah Allah Allah.',
        '• The only thoughts in your mind should be of Allah, and acquiring the blessings of Allah through the heart of Hazrat Muhammad (pbuh) coming through the hearts of all beloved to Allah.'
      ],
      [
        'Halqa-e-Zikr or Muraqaba or Meditation (Page 4)',
        '',
        '2. Meditation in Individual:',
        '• Cover your face with some cloth',
        '• Remove all thoughts from your mind',
        '• Stick your tongue to the top of your mouth and recite Allah Allah Allah in your heart as if your heart is beating Allah Allah Allah.',
        '• The only thoughts in your mind should be of Allah, and acquiring the blessings of Allah through the heart of Hazrat Muhammad (peace be upon him) coming through the hearts of all beloved to Allah.',
        '',
        'With practice, one can reach to such a position that his/her heart would be beating Allah Allah Allah all the time, whether one is in office, in schools, sleeping, bathing etc. One should be involved in all worldly chores but the heart should be towards Allah.',
        '',
        'Copyright © Islah-ul-Muslimeen | Official Publication'
      ]
    ]
  },
  {
    fileName: 'remembering-allah-the-only-god.pdf',
    title: 'Remembering Allah (The only God)',
    subtitle: 'An Excerpt from Jalwa Gah-e-Dost (Pages 38-42, 2nd Edition)',
    author: 'Written by Hazrat Muhammad Tahir Naqshbandi',
    pages: [
      [
        'Jamaat Islah-ul-Muslimeen | Official Archival Publication',
        '',
        'Remembering Allah (The only God)',
        'An Excerpt from Jalwa Gah-e-Dost',
        '(Written by Hazrat Muhammad Tahir Naqshbandi, Pages 38-42, 2nd Edition)',
        '',
        'Method of Remembering Allah:',
        'Method of remembering Allah is: Human beings have the heart on the upper left side of the chest; personal name of God, "Allah" should be remembered in this heart. When we feel thirsty, we find ourselves focused towards quenching our thirst, however we do not repeat and say "water", "water" with our tongue, but our attention remains towards water!',
        '',
        'Just as a thirsty person has all its attention towards water, our heart should also focus in the same way towards the name of Allah and repeat the name, "Allah", "Allah". While doing this one should remain silent, without any movement of the tongue, rather it should rest at the palate (upper part inside the mouth). This method should be adopted all the time. There is no condition of being in the state of ablution, neither the cleanliness of body nor dress is required; one does not need to be alone; does not matter if you are busy in daily chores all day long, 24 hours; busy in your business, traveling or resting, while in the markets or at home just make sure that this thing is in your heart that it (heart) is repeating the name "Allah", "Allah".',
        '',
        'Quranic Foundation (Surah An-Noor 24:37):',
        '"By men whom neither traffic nor merchandise can divert from the Remembrance of Allah, nor from regular Prayer, nor from the practice of regular Charity: Their (only) fear is for the Day when hearts and eyes will be transformed."'
      ],
      [
        'Remembering Allah (The only God) - Page 2',
        '',
        'Allah’s slaves are the ones who do not get distracted from remembrance of Allah because of worldly chores and business. Practicing the remembrance of Allah’s name this way in your heart for a few days makes the heart alive and it starts doing this itself. Due to this practice heart gets purified and attention and fear towards Allah Almighty remains in the heart.',
        '',
        'Hazrat Khawja Ahmad Saeed Naqshbandi quds saarahu writes:',
        '• Disciple or spiritual student should rest the tongue at palate and completely free the heart from all thoughts.',
        '• Next consider the Spiritual guide or Sheikh, from whom he learnt this method of remembrance, in front of oneself.',
        '• Repeat the name "Allah", "Allah" with tongue of one’s heart i.e. keep attention towards the meaning of the word "Allah" in the heart.',
        '• Next concentrate that I believe in my Lord, "Allah" Almighty, Who has all the best characteristics and is free of all lower characteristics.',
        '',
        'Hazrat Imam Rabbani Mujaddid Alf-e-Thani quds saarahu says:',
        '"In the start of spiritual journey, student has no other way except remembering Allah. He should be attentive towards his heart that this piece of flesh is like a resting place for the real heart. Pass the blessed highest name of Allah through the same heart and while doing this do not intentionally move any other body part rather be fully attentive to your heart, not towards its shape; absorb and observe the meaning of blessed and highest name Allah by believing in its uniqueness and singularity." (Letter 190, Volume 1, Part 3).',
        '',
        'Remembering Allah in the Heart (Zikr e Qalbi):',
        '(Repetitively saying ALLAH ALLAH in the heart, silently, without any movement of tongue)'
      ],
      [
        'Remembering Allah (The only God) - Page 3',
        '',
        'Merits of Silent Heart Remembrance:',
        'Remembering Allah (doing zikr) whether it is done in heart (silently) or verbally, individually or in groups, its merits and importance are well known. But from the Holy Quran and Hadith we find out that the merits of doing it silently in heart are many times more than doing it verbally.',
        '',
        'However if Allah Almighty specially bless someone and choose him as his lucky slave and bless him so that the person simultaneously practice verbal remembrance (dhikr) and his heart also practices in the same way; and he is promoted from verbal remembrance to heartily remembrance (zikr-e-qalbi); to such an extent that even if he is silent, tongue is quiet, still his heart will not remain silent! This is called abundant remembrance (zikr-e-kaseer).',
        '',
        'Noble Hadith Documented by Hadith Master Hadhrat Mulla Ali Qari:',
        'Abu’d-Darda reported that the Messenger of Allah (may peace be upon him) said: "Shall I inform you of the best of your actions and the purest of your property and the highest of your degrees and what is better for you than spending gold and silver and better for you than encountering the enemy and striking their necks and their striking your necks?" They said, "Yes, indeed!" He said, "Remembrance of Allah Almighty." Mu’adh ibn Jabal said, "There is nothing which saves from the punishment of Allah more than remembrance of Allah." [Mishkat ul Masabih Page 198, Ahmad, Ibn Abi’d-Dunya, at-Tirmidhi and Ibn Majah].',
        '',
        'Mulla Ali Qari writes in Mirqat al-Mafatih (Page 22, Volume 3):',
        '"This remembrance (zikr) means remembrance in one’s heart. This is the same remembrance which has greater virtues than sacrificing lives and wealth. Because this is a veiled and hidden action of heart which is harder to perform by the self (nafs). This is the greater struggle (Jihad-e-Akbar)!"'
      ],
      [
        'Remembering Allah (The only God) - Page 4',
        '',
        'Virtues to Remember Allah in One’s Heart Are 70 Times:',
        'Great hadith master, Hadhrat Mulla Ali Qari has quoted hadith in Mirqat al-Mafatih commentary on Mishkat ul Masabih, volume 1, page 342, narrated by Hazrat Ayesha, mother of believers (May Allah be pleased with her):',
        '',
        '"Hazrat Ayesha (may Allah be pleased with her) narrates that Messenger of Allah (may peace be upon him) said: The zikr (remembering Allah) which cannot be known to the Kiram an-Katibin, is seventy times superior to other types of zikr that they can listen i.e. verbal remembrance.',
        '',
        'On the Day of Judgment, mankind will be called to reckoning by Him and the Kiram an-Katibin directed to produce the Register of Conduct of every person. Angels will present everything that they remembered or have written. These Angels will be commanded to re-examine the records to see if any of their deeds remained unrecorded. They would submit that everything what we know or remembered had been duly put down.',
        '',
        'On this Allah Almighty Shall then inform the person that I have one good deed that these angels do not recognize and I Will Give you reward for this and this good deed is the secret (hidden or veiled) remembrance (zikr-e-khaffi)."',
        '',
        'Copyright © Islah-ul-Muslimeen | Official Publication'
      ]
    ]
  },
  {
    fileName: 'what-is-tasawwuf.pdf',
    title: 'What is Tasawwuf?',
    subtitle: 'By Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi Mujaddadi Mudzila A’ali',
    author: 'Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi Mujaddadi Mudzila A’ali',
    pages: [
      [
        'What is Tasawwuf?',
        'By Hazrat Sheikh ul Mashaikh Khwaja Muhammad Tahir Abbasi Naqsbandi Mujaddadi Mudzila A’ali',
        'Copyright: Idarat-ul-Maarfat, Dargah Allahabad Sharif Kandyaro',
        'Source: Idarat-ul-Maarfat | Dargah Allahabad Sharif',
        '',
        'Table of Content:',
        '• Definition of Tasawwuf',
        '• Definition of Sufi',
        '• Reason for naming in Sufism',
        '• Brief history of the word Sufi and Tasawwuf',
        '• Some doubts about Tasawwuf and their answers',
        '',
        'Disclaimer:',
        'This article is a translation of an article written in Urdu language. While every effort is made to ensure the accuracy of the translation, the translation is for informational purposes only, and is not a substitute for the original article available at Dargah Allahabad Sharif.',
        '',
        'Definition of Tasawwuf:',
        'Tasawwuf has been defined by different Muslim scholars as follows:',
        '• Sheikh ul Islam Abi Yahya Zakarya Alansari: "Tasawwuf is the knowledge of those feelings with which one controls the will, purifies moral values, and develops the external and internal self, so that the man can get eternal benefit."',
        '• Hazrat Abul Hassan Nori: "Tasawwuf is the name of depleting all inner wishes."',
        '• Hazrat Abu Ali Qazwini: "Tasawwuf is the name of acquiring best moral values."',
        '• Abu Muhammad Jareri: "Tasawwuf is name of implementing all praiseworthy values and getting rid of all meanness and baseness values."',
        '• Hazrat Katanee: "Tasawwuf is the name of good moral values, so those who have better moral values than you will be ahead of you in purity (tasawwuf and purity of heart)."'
      ],
      [
        'What is Tasawwuf? - Page 2',
        '',
        'Core Synthesis of Tasawwuf:',
        'The above mentioned definitions show that implementing higher moral values and getting rid of all immoral values especially correcting the inner self along with the exterior and building a connection with Allah, giving preference to life hereafter over this world and for everything in life getting the will of Allah and accepting the will of Allah is the name of Tasawwuf.',
        '',
        'Those who disagree with tasawwuf should think of what tasawwuf is: If tasawwuf is the name of all of the above defined concepts, then what exactly is it that they disagree to, or are they against the Quran and the Sunnah? If some illiterate have named their wrong doings as tasawwuf, or called themselves Sufi in spite of being non-Sharia, then it is their own fault and not the fault of tasawwuf.',
        '',
        'Acquiring these qualities is also known as Zuhud (devotion, abstinence), Salook (conduct), and Ehsan (beneficence).',
        '',
        'Definition of Sufi:',
        'Those who practice Tasawwuf are called Sufi:',
        '• Hazrat Sheikh Abu Ali Rodbari: "Sufi is that who along with purifying the heart is also simple looking and shows abstinence to his inner will/wishes and keeps hold of the Shariat-e-Mustafa and thinks this world unimportant."',
        '• Hazrat Umar Bin Usman Makki: "Sufi is that who all the time remains devoted to whom he belongs to."',
        '• Hazrat Syedina Sheikh Abdul Qadir Jilani: "Because of peaceful body, satisfied heart, glowing face, generous heart, inner soul alive and connection with Allah, a Sufi does not care about this world."',
        '• Hazrat Sheikh Shibli: "Sufi is independent of all creatures and is attached to Allah."',
        '• Hazrat Zawalnoon Misri: "Sufis are those who prefer Allah’s will upon all other things."'
      ],
      [
        'What is Tasawwuf? - Page 3',
        '',
        'Hazrat Imam Ghazali on Sufism (Al-Munqidh min al-Dalal):',
        'Hazrat Imam Ghazali in his book "Al Munqidh Min Al-Dalal" conveys to the entire ummah: "Sufi’s method is complete with both knowledge and its implementation and their essence of knowledge is that the inner will should be clear of all evil and immoral values so that the heart is purified of everything that takes away from Allah and the heart beautifies with the remembrance of Allah."',
        '',
        'Hazrat Imam Ghazali’s Final Word About the Sufis:',
        '"I have come to know with complete proof that Sufis will be the ones who walk on the path to Allah. Their nature is the best of all natures, their way is the most simple way of all methods, their moral values are purer than all; in fact if you collect all intelligence together, all hikmat together, all knowledge of the scholars together so that you find an alternate method of the Sufis which is better than theirs, then that will not be possible because their act whether is visible or invisible is taken from the nur (luminosity) of naboowat and there is no other light in the entire universe that can give light of nur."',
        '',
        'Reason for Naming in Sufism:',
        '1. Sufi is derived from Safa (pure) and Safa means purity of the heart. Sufi is called a Sufi because his heart is clean from internal infirmity.',
        '2. Sufi is derived from Saf and Saf means the first top purity. Since Sufis are the nearest/closest to Allah that is why they are called Sufi.',
        '3. Sufi is derived from Safah. Safah was the platform in the Holy Prophet’s mosque (Ehl-e-Safah). They dedicated their lives to the court of Rasool Allah (peace be upon him). Since the Sufis live like the Ashab-e-Safah, they are called Sufi.'
      ],
      [
        'What is Tasawwuf? - Page 4',
        '',
        'Brief History of the Word Sufi and Tasawwuf:',
        'The reality is that Tasawwuf is true Islam. Its existence is with the existence of Islam. In the beginning it was known as Zuhud, Sulook, Ehsan etc.',
        'Hazrat Ali Hajweri said that today tasawwuf has become a name without reality but in the past tasawwuf was real without a name.',
        '',
        'According to the research of Hazrat Allama Ibn-e-Taimia, the word Sufi was first used in Basra for the associates of Hazrat Khwaja Hassan Basri because there was an abundance of Zuhud, divine worship and fear of Allah in Basra. Almost after fifty years, after the 2nd century the word Sufi became common among Muslims. After almost 200 Hijri the topic was being taught in the mosques of Baghdad.',
        '',
        'Milestones in Tasawwuf Literature:',
        '• Hazrat Haris Muhasibi (243 Hijri): wrote "Al-Ri’aya"',
        '• Imam of the Sufis Hazrat Junaid Baghdadi (297 Hijri): codified tasawwuf according to the Sunnah',
        '• Abu Nasr Sarraj Tusi (378 Hijri): "Kitab al-Luma" in the light of Hadith',
        '• Abu Bakr Kalabadhi: "Kitab at-Ta’arruf" in Bukhara',
        '• Abu Talib Makki (384 Hijri): "Qut al-Qulub"',
        '• Abu Nu’aym Isfahani (430 Hijri): "Hilyat al-Awliya"',
        '• Allama Qushayri (445 Hijri): "Al-Risala al-Qushayriyya"',
        '• Hazrat Ali Hajweri Data Ganj Bakhsh: "Kashf al-Mahjub"',
        '• Hazrat Imam Ghazali (505 Hijri): "Ihya Ulum al-Din" and "Al-Munqidh"',
        '• Hazrat Sheikh Abdul Qadir Jilani (6th century)',
        '• Hazrat Imam Rabbani Mujaddid Alf-e-Thani, Sheikh Shahabuddin Suhrawardi, and Khwaja Moinuddin Chishti Ajmeri.'
      ],
      [
        'What is Tasawwuf? - Page 5',
        '',
        'Some Doubts About Tasawwuf and Their Answers:',
        '',
        'Question 1: There was no mention or existence of tasawwuf during the times of Rasool-e-Kareem (pbuh). If there was reality of tasawwuf in Islam, its reference would have existed, so does tasawwuf have nothing to do with Islam?',
        '',
        'Answer: Saying that since the word tasawwuf did not exist during the times of Rasool-e-Kareem (pbuh) and Khulafa-e-Rashideen it has nothing to do with Islam is proof of lack of knowledge. The Islamic sciences taught today—Ilm-ul-Sarf, Ilm-ul-Nahw, rules of Fiqh, Usul al-Hadith, Usul al-Tafsir—did these formal terms exist in the times of Rasool Allah (pbuh)? Did the companions teach under these specific names? The answer is negative. Then why is the science of tasawwuf criticized?',
        '',
        'Tasawwuf is the name of purifying the inner self, and it is commanded in the Quran at many places:',
        '"Indeed whosoever purifies himself shall achieve success" (Surat Al-A’la 87:14)',
        '"Indeed he succeeds who purifies his own self, and indeed he fails who corrupts it" (Surat Ash-Shams 91:9-10).',
        '',
        'In the time of the Prophet (pbuh), his blessed company was sufficient for inner perfection. Formal sciences were later codified to preserve every branch of prophetic teaching.'
      ],
      [
        'What is Tasawwuf? - Page 6',
        '',
        'Question 2: Everything is divided into two in Tasawwuf: external/apparent and inward/invisible. Is this distinction justified?',
        '',
        'Answer: External and internal are Quranic realities. External knowledge deals with outward bodily actions, while internal knowledge deals with the state of the heart and soul. The Quran strictly forbids inward sins like hypocrisy (nifaq), arrogance (kibr), hatred (keena), and envy (hasad):',
        '"The Day whereon neither wealth nor sons will avail, Except him who comes to Allah with a sound clean heart" (Surat Ash-Shu’ara 26:88-89).',
        '',
        'For example, in Salah, facing the Qiblah, performing ablution, and reciting aloud are external rules. But performing prayer free of showing off (riya) and with deep presence of heart (khushu) as if seeing Allah are internal obligations. Tasawwuf cultivates the internal perfection of every outward act of worship.'
      ],
      [
        'What is Tasawwuf? - Page 7',
        '',
        'Question 3: Sufis use concepts like Shariat, Tareeqat, Haqiqat, and Ma’rifat, whereas a Muslim should only follow Shariat?',
        '',
        'Answer: These are complementary dimensions of one unified Islam:',
        '• Shariat: The comprehensive divine law revealed by Allah.',
        '• Tareeqat (Method): The practical path and spiritual methodology to attain the reality of Shariat.',
        '• Haqiqat (Reality): The actual realization, sincerity, and presence of heart intended by the Shariat.',
        '• Ma’rifat (Gnosis): Experiential knowledge and deep awareness of Allah Almighty.',
        '',
        'Hazrat Imam Rabbani Mujaddid Alf-e-Thani stated: "Shariah has three elements: 1. Knowledge, 2. Practice, 3. Sincerity (Ikhlas). Tareeqat and Haqiqat are the faithful servants of Shariat. Their sole purpose is the fulfillment of Shariat in its truest spirit."'
      ],
      [
        'What is Tasawwuf? - Page 8',
        '',
        'Questions 4, 5 & 6: Historical Objections, Bad Actors & Priesthood:',
        '',
        '• On Greek Origin Claims: Historical research proves the word Sufi is purely Arabic, rooted in Safa and Ashab-e-Suffah. Ancient Greek contains no word related to Sufi.',
        '',
        '• On Misconduct by False Claimants: The corruption of a few ignorant individuals who falsely claim Sufism cannot invalidate the noble science itself, just as crimes committed by Muslims do not invalidate Islam. True Sufism is bound strictly to the Quran and Sunnah.',
        '',
        '• On Priesthood / Monasticism: Sufism is not monasticism (rahbaniyyah). Monasticism abandons family, marriage, society, and civic obligations. Islamic Tasawwuf teaches fulfillment of the rights of Allah (Huquq Allah) and the rights of humanity (Huquq al-Ibad) while working and living in the world with a heart devoted to God.'
      ],
      [
        'What is Tasawwuf? - Page 9',
        '',
        'Question 7: What is the relevance and benefit of Tasawwuf in the modern age of material development?',
        '',
        'Answer: Islam is a religion for all eras, and spiritual purification is indispensable in every age. The Holy Prophet (pbuh) was sent to recite divine signs, teach the Scripture and wisdom, and purify souls (Tazkiyah).',
        '',
        'Modern material progress without spiritual equilibrium produces greed, pride, corruption, and systemic conflict. Tasawwuf restores internal harmony. It eliminates greed, arrogance, and hypocrisy, fostering genuine brotherhood, selflessness, and moral governance.',
        '',
        'When scholars and leaders purify their hearts, ego gives way to mutual love, unity of vision, and true spiritual leadership. Tasawwuf remains the essential cure for spiritual voids in every contemporary society.',
        '',
        'Copyright © Idarat-ul-Maarfat, Dargah Allahabad Sharif Kandyaro'
      ]
    ]
  }
];

async function generate() {
  const outDir = path.resolve(process.cwd(), 'public/assets/articles');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const art of articles) {
    const pdfDoc = await PDFDocument.create();
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    for (let pageIdx = 0; pageIdx < art.pages.length; pageIdx++) {
      const pageLines = art.pages[pageIdx];
      const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
      const { width, height } = page.getSize();

      // Top decorative header bar in Royal Blue (#002FA7)
      page.drawRectangle({
        x: 40,
        y: height - 42,
        width: width - 80,
        height: 4,
        color: rgb(0 / 255, 47 / 255, 167 / 255),
      });

      let y = height - 65;
      const margin = 48;
      const contentWidth = width - margin * 2;

      for (let i = 0; i < pageLines.length; i++) {
        const line = pageLines[i];
        if (line === '') {
          y -= 10;
          continue;
        }

        let isMainTitle = pageIdx === 0 && (i === 0 || i === 1);
        let isHeading = line.endsWith(':') || line.startsWith('Table of Content') || line.startsWith('Disclaimer:') || line.startsWith('Question') || line.startsWith('Definition of') || line.startsWith('Method of') || line.startsWith('Brief History') || line.startsWith('Core Synthesis');
        let isQuote = line.startsWith('"') || line.startsWith('•');

        let font = fontRegular;
        let fontSize = 10.5;
        let fontColor = rgb(26 / 255, 31 / 255, 43 / 255);

        if (isMainTitle) {
          font = fontBold;
          fontSize = i === 0 ? 16 : 13;
          fontColor = rgb(18 / 255, 36 / 255, 122 / 255); // #12247A
        } else if (isHeading) {
          font = fontBold;
          fontSize = 11.5;
          fontColor = rgb(0 / 255, 47 / 255, 167 / 255); // #002FA7
        } else if (isQuote) {
          font = fontRegular;
          fontSize = 10;
          fontColor = rgb(40 / 255, 50 / 255, 65 / 255);
        }

        // Simple text wrap
        const words = line.split(' ');
        let currentLine = '';

        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          const textWidth = font.widthOfTextAtSize(testLine, fontSize);

          if (textWidth > contentWidth && currentLine) {
            page.drawText(currentLine, {
              x: margin,
              y,
              size: fontSize,
              font,
              color: fontColor,
            });
            y -= fontSize + 4;
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }

        if (currentLine) {
          page.drawText(currentLine, {
            x: margin,
            y,
            size: fontSize,
            font,
            color: fontColor,
          });
          y -= fontSize + 5;
        }

        if (y < 60) break;
      }

      // Footer
      page.drawText(`Page ${pageIdx + 1} of ${art.pages.length}  |  Jamaat Islah-ul-Muslimeen - Official Publication`, {
        x: margin,
        y: 32,
        size: 8.5,
        font: fontOblique,
        color: rgb(100 / 255, 116 / 255, 139 / 255),
      });
    }

    const pdfBytes = await pdfDoc.save();
    const filePath = path.join(outDir, art.fileName);
    fs.writeFileSync(filePath, pdfBytes);
    console.log(`Generated ${filePath} (${pdfBytes.length} bytes)`);
  }
}

generate().catch(console.error);
