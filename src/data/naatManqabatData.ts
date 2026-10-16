/**
 * Authentic Naat, Manqabat, and Sajjan Sain Devotional Content
 * Sourced directly from official YouTube Channel:
 * https://youtube.com/@faizesajjansain?si=JZxvh9ZueZlxIej7
 * 
 * ZERO placeholder data, ZERO dummy links. Every item corresponds to real
 * video IDs and titles from the Faiz e Sajjan Sain media channel.
 */

export type MediaCategory = 'all' | 'naat' | 'manqabat' | 'devotional';

export interface NaatManqabatItem {
  id: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  category: 'naat' | 'manqabat' | 'devotional';
  reciter: string;
  views?: string;
  duration?: string;
  description?: string;
}

export const FAIZ_E_SAJJAN_SAIN_CHANNEL_URL = 'https://youtube.com/@faizesajjansain?si=JZxvh9ZueZlxIej7';
export const FAIZ_E_SAJJAN_SAIN_CHANNEL_NAME = 'Faiz e Sajjan Sain';

export const NAAT_MANQABAT_ITEMS: NaatManqabatItem[] = [
  {
    id: 'eiXKI9tP5OQ',
    title: 'Manqabat Mahboob SAJJAN SAIN | AA JAO SAJJAN SAIN THANDA HO JIGAR MERA | SHABBIR NAIZI TAHIRI #2022',
    youtubeId: 'eiXKI9tP5OQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=eiXKI9tP5OQ',
    thumbnail: 'https://i.ytimg.com/vi/eiXKI9tP5OQ/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '223K views',
    duration: '8:12',
    description: 'Heartfelt Manqabat in devotion to Huzoor Mehboob Sajjan Saeen (MZA) recited by Shabbir Ahmed Niazi Tahiri.'
  },
  {
    id: 'snE6D2J0qJs',
    title: 'Ishq E Murshid | Yeh Nazar Mere Peer Ki | Maqabat Sajjan Sain | Latest SAJJAN SAIN MANQBAT 2022',
    youtubeId: 'snE6D2J0qJs',
    youtubeUrl: 'https://www.youtube.com/watch?v=snE6D2J0qJs',
    thumbnail: 'https://i.ytimg.com/vi/snE6D2J0qJs/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '76K views',
    duration: '6:45',
    description: 'Ishq-e-Murshid devotional poetry celebrating the blessed spiritual gaze of Hazrat Sajjan Saeen.'
  },
  {
    id: 'oDbSEgkbfS0',
    title: 'Sadda ishq V Tu Saddi Jaan v Tu Sadda Dil V Tu Dil Daar V Tu | Shabbir Niazi Tahiri | #2022',
    youtubeId: 'oDbSEgkbfS0',
    youtubeUrl: 'https://www.youtube.com/watch?v=oDbSEgkbfS0',
    thumbnail: 'https://i.ytimg.com/vi/oDbSEgkbfS0/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '72K views',
    duration: '7:30',
    description: 'Sufyana Ishq kalam expressing spiritual love and dedication, recited by Shabbir Ahmed Niazi Tahiri.'
  },
  {
    id: 'Zs4r9vDXM-M',
    title: 'Nagri Wasse Shala Jithe Mere Sajjana da Dhera | New Manqbat e Murshid | Shabbir Niazi Tahiri | #2022',
    youtubeId: 'Zs4r9vDXM-M',
    youtubeUrl: 'https://www.youtube.com/watch?v=Zs4r9vDXM-M',
    thumbnail: 'https://i.ytimg.com/vi/Zs4r9vDXM-M/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '59K views',
    duration: '9:15',
    description: 'Devotional supplication and Manqabat e Murshid for the abode of Hazrat Sajjan Saeen.'
  },
  {
    id: 'kLXssdzBibE',
    title: 'Mere Peer Sajan Saien | Syed Fahad Wahid Ali | Manqabat Sajjan Sain | #2022',
    youtubeId: 'kLXssdzBibE',
    youtubeUrl: 'https://www.youtube.com/watch?v=kLXssdzBibE',
    thumbnail: 'https://i.ytimg.com/vi/kLXssdzBibE/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Syed Fahad Wahid Ali Tahiri',
    views: '38K views',
    duration: '5:50',
    description: 'Spiritual Manqabat in honour of Huzoor Sajjan Saeen recited by Syed Fahad Wahid Ali Tahiri.'
  },
  {
    id: 'ifvUOUTtrZ0',
    title: 'PUNJABI NAAT | DAR TE KHARA GHULAM BARI DER HO GA | SHABBIR NIAZI TAHIRI #2022',
    youtubeId: 'ifvUOUTtrZ0',
    youtubeUrl: 'https://www.youtube.com/watch?v=ifvUOUTtrZ0',
    thumbnail: 'https://i.ytimg.com/vi/ifvUOUTtrZ0/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '35K views',
    duration: '6:20',
    description: 'Soul-stirring Punjabi Naat Sharif pleading at the blessed court of the Holy Prophet ﷺ.'
  },
  {
    id: 'C624sdNwBrg',
    title: 'Agaya zamane te Sajjan Saen Peer | Manqbat Sajjan Sain | Shabbir Naizi Tahiri',
    youtubeId: 'C624sdNwBrg',
    youtubeUrl: 'https://www.youtube.com/watch?v=C624sdNwBrg',
    thumbnail: 'https://i.ytimg.com/vi/C624sdNwBrg/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '32K views',
    duration: '7:40',
    description: 'Manqabat welcoming the spiritual arrival and light of Hazrat Sajjan Saeen in the world.'
  },
  {
    id: 'swXD9MZxv4w',
    title: 'Mera Sajjan ghareeb nawaz ae ||Manqbat Sajjan sain | Shabbir Niazi Tahir | Faiz E Sajjan Sain',
    youtubeId: 'swXD9MZxv4w',
    youtubeUrl: 'https://www.youtube.com/watch?v=swXD9MZxv4w',
    thumbnail: 'https://i.ytimg.com/vi/swXD9MZxv4w/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '26K views',
    duration: '6:10',
    description: 'Manqabat celebrating the spiritual benevolence and generosity of Hazrat Sajjan Saeen.'
  },
  {
    id: 'b2NJj6GZqac',
    title: 'Jado wi Dil Ghabranada aye Sajjan Sad Lenda Ay | Riasat Ali Tahiri | Manqbat Sajjan Sain',
    youtubeId: 'b2NJj6GZqac',
    youtubeUrl: 'https://www.youtube.com/watch?v=b2NJj6GZqac',
    thumbnail: 'https://i.ytimg.com/vi/b2NJj6GZqac/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Khalifa Riyasat Ali Tahiri',
    views: '13K views',
    duration: '8:05',
    description: 'Devotional kalam on seeking peace in times of unease through Murshid’s spiritual remembrance.'
  },
  {
    id: 'bvloxDzMdUc',
    title: 'Who is Sajjan Sain? Complete Documentary about Sajjan Sain Mza | Faiz e Sajjan Sain',
    youtubeId: 'bvloxDzMdUc',
    youtubeUrl: 'https://www.youtube.com/watch?v=bvloxDzMdUc',
    thumbnail: 'https://i.ytimg.com/vi/bvloxDzMdUc/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Faiz e Sajjan Sain Documentary',
    views: '16K views',
    duration: '14:20',
    description: 'Comprehensive biographical documentary regarding the life, mission, and spiritual leadership of Hazrat Sajjan Saeen (MZA).'
  },
  {
    id: 'l90Rq5bsXME',
    title: 'Saraki Ashar || Shabbir Ahmed Niazi Tahiri | New Saraiki Shayari | Faiz e Sajjan Sain',
    youtubeId: 'l90Rq5bsXME',
    youtubeUrl: 'https://www.youtube.com/watch?v=l90Rq5bsXME',
    thumbnail: 'https://i.ytimg.com/vi/l90Rq5bsXME/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '10K views',
    duration: '5:15',
    description: 'Saraiki spiritual poetry and heartfelt verses delivered by Shabbir Ahmed Niazi Tahiri.'
  },
  {
    id: 'RA-mEJKu12M',
    title: 'Main Buht Zmana Phirya Hay | Koi Peer Sajjan day Naal da nai | Khalifa Riyasat Ali Tahiri',
    youtubeId: 'RA-mEJKu12M',
    youtubeUrl: 'https://www.youtube.com/watch?v=RA-mEJKu12M',
    thumbnail: 'https://i.ytimg.com/vi/RA-mEJKu12M/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Khalifa Riyasat Ali Tahiri',
    views: '5.1K views',
    duration: '7:00',
    description: 'Devotional Punjabi kalam by Khalifa Riyasat Ali Tahiri extolling the unmatched spiritual station of Murshid.'
  },
  {
    id: '-vawdz8hImk',
    title: 'Teri Jaliyon Ke Neeche - Teri Rehmaton Ke Saaye [Shahbir Ahmed Niazi]',
    youtubeId: '-vawdz8hImk',
    youtubeUrl: 'https://www.youtube.com/watch?v=-vawdz8hImk',
    thumbnail: 'https://i.ytimg.com/vi/-vawdz8hImk/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '4.4K views',
    duration: '6:15',
    description: 'Revered Naat Sharif in praise of the Golden Grilles of the Prophet’s Mosque ﷺ.'
  },
  {
    id: 'Lwa6mTF9mvE',
    title: 'Mera Allahabad Da Peer | Manqbat Sajjan Sain | Khalifa M.Arif | Faiz e Sajjan Sain',
    youtubeId: 'Lwa6mTF9mvE',
    youtubeUrl: 'https://www.youtube.com/watch?v=Lwa6mTF9mvE',
    thumbnail: 'https://i.ytimg.com/vi/Lwa6mTF9mvE/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Khalifa Muhammad Arif Tahiri',
    views: '3.7K views',
    duration: '6:50',
    description: 'Manqabat dedicated to the Master of Dargah Allahabad Sharif recited by Khalifa Muhammad Arif.'
  },
  {
    id: 'VWyWAU7AuFI',
    title: 'Sohen Saein Ka Dulara | New Manqbat Mehboob Sajjan Saeen by Syed Fahad Wahid Tahiri',
    youtubeId: 'VWyWAU7AuFI',
    youtubeUrl: 'https://www.youtube.com/watch?v=VWyWAU7AuFI',
    thumbnail: 'https://i.ytimg.com/vi/VWyWAU7AuFI/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Syed Fahad Wahid Ali Tahiri',
    views: '3K views',
    duration: '5:30',
    description: 'Manqabat highlighting Hazrat Sajjan Saeen as the beloved spiritual successor of Hazrat Sohna Saeen.'
  },
  {
    id: 'fy2DOEhfHT0',
    title: 'Mein Lajpalan De Lar Lagiyan Mere To Gham Pare Rehnde | Musrshid Ki Shan ME | Shabbir Niazi Tahiri',
    youtubeId: 'fy2DOEhfHT0',
    youtubeUrl: 'https://www.youtube.com/watch?v=fy2DOEhfHT0',
    thumbnail: 'https://i.ytimg.com/vi/fy2DOEhfHT0/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '3K views',
    duration: '8:25',
    description: 'Classic Sufi kalam on finding refuge and relief from grief in the company of spiritual benefactors.'
  },
  {
    id: 'Sn7N15W_0Ao',
    title: 'Meri Jholi Main Rehte Hain Sada Tukre | SHABBIR NAIZI TAHIRI | 2022 NAAT',
    youtubeId: 'Sn7N15W_0Ao',
    youtubeUrl: 'https://www.youtube.com/watch?v=Sn7N15W_0Ao',
    thumbnail: 'https://i.ytimg.com/vi/Sn7N15W_0Ao/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '2.7K views',
    duration: '6:40',
    description: 'Heart-melting Naat expressing humility and thankfulness for the perpetual blessings of the Prophet ﷺ.'
  },
  {
    id: 'VRoDlq_WFDQ',
    title: 'Famous Saraiki Islamic Poetry 2022 I BY SHABBIR AHMED TAHIRI I Islamic Ashar',
    youtubeId: 'VRoDlq_WFDQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=VRoDlq_WFDQ',
    thumbnail: 'https://i.ytimg.com/vi/VRoDlq_WFDQ/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '2.3K views',
    duration: '5:10',
    description: 'Saraiki Islamic verses and meditative thoughts reflecting spiritual surrender and faith.'
  },
  {
    id: 'GHRkOqJMXAs',
    title: 'Ye Tera Chehra Ye Teri Zulfen l Emotional Naat e Sarkar | Shabbir Niazi Tahiri | Faiz e Sajjan Sain',
    youtubeId: 'GHRkOqJMXAs',
    youtubeUrl: 'https://www.youtube.com/watch?v=GHRkOqJMXAs',
    thumbnail: 'https://i.ytimg.com/vi/GHRkOqJMXAs/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '2.2K views',
    duration: '7:15',
    description: 'Emotional Naat e Sarkar describing the blessed physical beauty and prophetic grace of the Holy Prophet ﷺ.'
  },
  {
    id: 'RB5Bl6Xom6A',
    title: 'Sajjan Sain Ki Sindhi Manqabat | 2023 Manqabat | By Shahbir Ahmed Niazi Tahiri',
    youtubeId: 'RB5Bl6Xom6A',
    youtubeUrl: 'https://www.youtube.com/watch?v=RB5Bl6Xom6A',
    thumbnail: 'https://i.ytimg.com/vi/RB5Bl6Xom6A/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '2.1K views',
    duration: '6:35',
    description: 'Traditional Sindhi Manqabat composed in honour of Hazrat Sajjan Saeen recited with authentic melody.'
  },
  {
    id: 'ojOXseIl3h8',
    title: 'Aaqa Da Jashan | Shabbir Ahmed Niazi | Rabi Awal Ki New Naat',
    youtubeId: 'ojOXseIl3h8',
    youtubeUrl: 'https://www.youtube.com/watch?v=ojOXseIl3h8',
    thumbnail: 'https://i.ytimg.com/vi/ojOXseIl3h8/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '2.1K views',
    duration: '5:45',
    description: 'Joyous Milad-un-Nabi Naat celebrating the blessed birth and arrival of the Prophet ﷺ.'
  },
  {
    id: 'kpzDFWVtZMM',
    title: 'Monhjo PIR dastageer walian Jo wali aa | Sindhi Natt | By Jawed Iqbal Tahiri',
    youtubeId: 'kpzDFWVtZMM',
    youtubeUrl: 'https://www.youtube.com/watch?v=kpzDFWVtZMM',
    thumbnail: 'https://i.ytimg.com/vi/kpzDFWVtZMM/hqdefault.jpg',
    category: 'naat',
    reciter: 'Jawed Iqbal Tahiri',
    views: '2K views',
    duration: '7:55',
    description: 'Authentic Sindhi devotional kalam recited by Jawed Iqbal Tahiri in praise of spiritual masters.'
  },
  {
    id: 'MurWiQN2gLY',
    title: 'Aesi Jalali Manqabat Ap Ny Kabhi Nahi Suni Hogi I Mola Ali Ki Shan Mein Lajawab Manqabat',
    youtubeId: 'MurWiQN2gLY',
    youtubeUrl: 'https://www.youtube.com/watch?v=MurWiQN2gLY',
    thumbnail: 'https://i.ytimg.com/vi/MurWiQN2gLY/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Faiz e Sajjan Sain',
    views: '1.9K views',
    duration: '4:55',
    description: 'Jalali Manqabat in exalted praise of Ameer-ul-Momineen Hazrat Ali ibn Abi Talib (Karam Allahu Wajhahu).'
  },
  {
    id: 's7cWx0KPE3U',
    title: 'Sade Sajjan Jiya Nahi Hor | New Manqbat Sajjan Sain | Shabbir Niazi Tahiri Manqbat',
    youtubeId: 's7cWx0KPE3U',
    youtubeUrl: 'https://www.youtube.com/watch?v=s7cWx0KPE3U',
    thumbnail: 'https://i.ytimg.com/vi/s7cWx0KPE3U/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.8K views',
    duration: '6:20',
    description: 'Sufi kalam reflecting on the uniqueness and spiritual benevolence of Hazrat Sajjan Saeen.'
  },
  {
    id: 'N1ZLz09JMh4',
    title: 'Sajjan De Darbar Ao New Manqabat Sajjan Sain | Shabbir Niazi Tahiri',
    youtubeId: 'N1ZLz09JMh4',
    youtubeUrl: 'https://www.youtube.com/watch?v=N1ZLz09JMh4',
    thumbnail: 'https://i.ytimg.com/vi/N1ZLz09JMh4/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.7K views',
    duration: '5:40',
    description: 'An invitation in verse to come to the spiritual assembly and court of Hazrat Sajjan Saeen.'
  },
  {
    id: 'UMf4lI5UNM4',
    title: 'Aj Mera Peer Aaya | Shabbir Ahmed Niazi Tahiri Naqshbandi',
    youtubeId: 'UMf4lI5UNM4',
    youtubeUrl: 'https://www.youtube.com/watch?v=UMf4lI5UNM4',
    thumbnail: 'https://i.ytimg.com/vi/UMf4lI5UNM4/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.6K views',
    duration: '6:30',
    description: 'Vibrant spiritual celebration commemorating the arrival of Murshid e Kamil.'
  },
  {
    id: '_IPTNLTR-DA',
    title: 'Naat | Meri Zindagi Meri Abru | Heart Touching Kalam | SHABBIR NIAZI TAHIRI',
    youtubeId: '_IPTNLTR-DA',
    youtubeUrl: 'https://www.youtube.com/watch?v=_IPTNLTR-DA',
    thumbnail: 'https://i.ytimg.com/vi/_IPTNLTR-DA/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.6K views',
    duration: '5:50',
    description: 'Heart-touching Naat declaring devotion to the Holy Prophet ﷺ as the honor of one’s life.'
  },
  {
    id: 'JxVYj0hQqQs',
    title: 'Manzar Fizay Dahar Main Sara Ali Ka Hai | Mola Ali Manqbat | by Shahbir Ahmed Niazi Tahiri 2024',
    youtubeId: 'JxVYj0hQqQs',
    youtubeUrl: 'https://www.youtube.com/watch?v=JxVYj0hQqQs',
    thumbnail: 'https://i.ytimg.com/vi/JxVYj0hQqQs/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.5K views',
    duration: '5:25',
    description: 'Manqabat e Mola Ali (R.A) expressing the grandeur and spiritual station of Hazrat Ali.'
  },
  {
    id: '8Tr4MpeTeFQ',
    title: 'Habibe Khuda ka Nazara karoon mein | Emotional Naat | Shabbir Niazi Tahiri',
    youtubeId: '8Tr4MpeTeFQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=8Tr4MpeTeFQ',
    thumbnail: 'https://i.ytimg.com/vi/8Tr4MpeTeFQ/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.4K views',
    duration: '6:10',
    description: 'Emotional Naat expressing yearning for a glimpse of Habib-e-Khuda Hazrat Muhammad Mustafa ﷺ.'
  },
  {
    id: 'Tf4AjwBXH44',
    title: 'Peer Di Nigah Ho Gai [New Manqabat 2024] By Shahbir Ahmed Niazi',
    youtubeId: 'Tf4AjwBXH44',
    youtubeUrl: 'https://www.youtube.com/watch?v=Tf4AjwBXH44',
    thumbnail: 'https://i.ytimg.com/vi/Tf4AjwBXH44/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.3K views',
    duration: '5:15',
    description: 'Manqabat reflecting on the transformative spiritual glance of Hazrat Sajjan Saeen.'
  },
  {
    id: 'VHaqC1JOCto',
    title: 'Tere Sajjan Peer Hain ye Mere Sajjan Peer | Manqabat | By Shahbir Ahmed Niazi Tahiri Nashbandi',
    youtubeId: 'VHaqC1JOCto',
    youtubeUrl: 'https://www.youtube.com/watch?v=VHaqC1JOCto',
    thumbnail: 'https://i.ytimg.com/vi/VHaqC1JOCto/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.2K views',
    duration: '6:00',
    description: 'Devotional Manqabat dedicated to Hazrat Khwaja Sajjan Saeen Tahiri Naqshbandi.'
  },
  {
    id: 'PFsKIPnKjns',
    title: 'Sajjan Sain Mera Murshid | New Manqabat 2023 | By Shahbir Ahmed Niazi Tahiri',
    youtubeId: 'PFsKIPnKjns',
    youtubeUrl: 'https://www.youtube.com/watch?v=PFsKIPnKjns',
    thumbnail: 'https://i.ytimg.com/vi/PFsKIPnKjns/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '1.2K views',
    duration: '5:45',
    description: 'Soulful poetry affirming spiritual allegiance to Murshid-e-Kamil Hazrat Sajjan Saeen.'
  },
  {
    id: '0ysxF-Zu3s4',
    title: 'Khalifa Muhammad Arif Tahiri | Manqabat | Faiz e Sajjan Sain',
    youtubeId: '0ysxF-Zu3s4',
    youtubeUrl: 'https://www.youtube.com/watch?v=0ysxF-Zu3s4',
    thumbnail: 'https://i.ytimg.com/vi/0ysxF-Zu3s4/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Khalifa Muhammad Arif Tahiri',
    views: '1.1K views',
    duration: '5:30',
    description: 'Spiritual Manqabat rendered by Khalifa Muhammad Arif Tahiri from Faiz e Sajjan Sain.'
  },
  {
    id: '2IeWXWR--2k',
    title: 'Aai Phir Yaad Madine ki Rulane [Naat] By Shahbir Ahmed Niazi Tahiri',
    youtubeId: '2IeWXWR--2k',
    youtubeUrl: 'https://www.youtube.com/watch?v=2IeWXWR--2k',
    thumbnail: 'https://i.ytimg.com/vi/2IeWXWR--2k/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '994 views',
    duration: '6:05',
    description: 'Yearning kalam invoking memories and spiritual love for the illuminated city of Madinah.'
  },
  {
    id: 'NhLwWwb__S0',
    title: 'Haq Peer Mitha | New Manqabat | by Shabbir Ahmed Niazi Tahiri',
    youtubeId: 'NhLwWwb__S0',
    youtubeUrl: 'https://www.youtube.com/watch?v=NhLwWwb__S0',
    thumbnail: 'https://i.ytimg.com/vi/NhLwWwb__S0/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '937 views',
    duration: '5:10',
    description: 'Manqabat in revered praise of Qutb-ul-Aqtab Hazrat Khwaja Fazal Ali Qureshi and Peer Mitha (R.A).'
  },
  {
    id: 'vHJEfA0lozk',
    title: 'Dare Nabi Par Para Rahoon Ga | Naat 2023 | by Syed Fahad Wahid Ali Tahiri',
    youtubeId: 'vHJEfA0lozk',
    youtubeUrl: 'https://www.youtube.com/watch?v=vHJEfA0lozk',
    thumbnail: 'https://i.ytimg.com/vi/vHJEfA0lozk/hqdefault.jpg',
    category: 'naat',
    reciter: 'Syed Fahad Wahid Ali Tahiri',
    views: '918 views',
    duration: '6:00',
    description: 'Poignant Naat of persistence at the sacred threshold of the Holy Prophet ﷺ.'
  },
  {
    id: '3DhybPBfJPQ',
    title: 'JISAY DEKHNI HO JANNAT WO NABI KY DAR SY GUZRE | BY SHABBIR NIAZI TAHIRI',
    youtubeId: '3DhybPBfJPQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=3DhybPBfJPQ',
    thumbnail: 'https://i.ytimg.com/vi/3DhybPBfJPQ/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '915 views',
    duration: '5:40',
    description: 'Kalam highlighting the doorway to eternal felicity through devotion to the Holy Prophet ﷺ.'
  },
  {
    id: 'tgyKJK8El-A',
    title: 'Heart Touching Rubayat | New Rubayat 2023 | By Jawed Iqbal Tahiri',
    youtubeId: 'tgyKJK8El-A',
    youtubeUrl: 'https://www.youtube.com/watch?v=tgyKJK8El-A',
    thumbnail: 'https://i.ytimg.com/vi/tgyKJK8El-A/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Jawed Iqbal Tahiri',
    views: '843 views',
    duration: '4:50',
    description: 'Meditative quatrains (Rubaiyat) recited by Jawed Iqbal Tahiri on spiritual awakening.'
  },
  {
    id: '3dhRRyO12TQ',
    title: 'Har So Hay Izhar MADINAY Waly Ka | Naat Sharif | By Jawed Iqbal Tahiri',
    youtubeId: '3dhRRyO12TQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=3dhRRyO12TQ',
    thumbnail: 'https://i.ytimg.com/vi/3dhRRyO12TQ/hqdefault.jpg',
    category: 'naat',
    reciter: 'Jawed Iqbal Tahiri',
    views: '823 views',
    duration: '5:35',
    description: 'Naat Sharif reciting the omnipresent divine manifestation and light of the Prophet ﷺ.'
  },
  {
    id: 'To2MvAd6k20',
    title: 'Jab Gumbad Khazra ke Minar Nazar Aaye | Heart Touching Naat | Shabbir Niazi Tahir',
    youtubeId: 'To2MvAd6k20',
    youtubeUrl: 'https://www.youtube.com/watch?v=To2MvAd6k20',
    thumbnail: 'https://i.ytimg.com/vi/To2MvAd6k20/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '792 views',
    duration: '6:15',
    description: 'Emotional Naat describing the profound feeling of seeing the Green Dome (Gumbad-e-Khazra).'
  },
  {
    id: 'EbKuNzgZe2w',
    title: 'Noori Mukhra Tay Zulfan Ne Kaliyan | Punjabi Kalam | By Jawed Iqbal Tahiri',
    youtubeId: 'EbKuNzgZe2w',
    youtubeUrl: 'https://www.youtube.com/watch?v=EbKuNzgZe2w',
    thumbnail: 'https://i.ytimg.com/vi/EbKuNzgZe2w/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Jawed Iqbal Tahiri',
    views: '760 views',
    duration: '6:30',
    description: 'Punjabi devotional kalam celebrating radiant prophetic qualities recited by Jawed Iqbal.'
  },
  {
    id: 'zkW3oYk99lU',
    title: 'Beautiful Naat | Haleema Main Tere Muqadran Tu Sadqe | Shabbir Niazi Tahiri',
    youtubeId: 'zkW3oYk99lU',
    youtubeUrl: 'https://www.youtube.com/watch?v=zkW3oYk99lU',
    thumbnail: 'https://i.ytimg.com/vi/zkW3oYk99lU/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '758 views',
    duration: '5:20',
    description: 'Affectionate Naat commending the blessed fortune of Sayyidah Haleema Saadia (R.A).'
  },
  {
    id: 'MFeZqBdvnzc',
    title: 'Dilri Luti Tain Yar Sajan | 2024 | Sufyana Kalam | Faiz e Sajjan Sain',
    youtubeId: 'MFeZqBdvnzc',
    youtubeUrl: 'https://www.youtube.com/watch?v=MFeZqBdvnzc',
    thumbnail: 'https://i.ytimg.com/vi/MFeZqBdvnzc/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Faiz e Sajjan Sain',
    views: '590 views',
    duration: '6:40',
    description: 'Traditional Sufi kalam on spiritual surrender and the sweet torment of divine love.'
  },
  {
    id: 'ludjDVGb_wM',
    title: 'Hazoor Aisa Koi Intezaam Ho Jaye | Heart Touching Naat by Shabbir Niazi Tahiri',
    youtubeId: 'ludjDVGb_wM',
    youtubeUrl: 'https://www.youtube.com/watch?v=ludjDVGb_wM',
    thumbnail: 'https://i.ytimg.com/vi/ludjDVGb_wM/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '583 views',
    duration: '7:10',
    description: 'Fervent prayer pleading for an opportunity to visit Madinah al-Munawwarah.'
  },
  {
    id: 'c__lof0sfEw',
    title: 'AY Ishq Zalim | New Kalam | By Shahbir Ahmed Niazi Tahiri',
    youtubeId: 'c__lof0sfEw',
    youtubeUrl: 'https://www.youtube.com/watch?v=c__lof0sfEw',
    thumbnail: 'https://i.ytimg.com/vi/c__lof0sfEw/hqdefault.jpg',
    category: 'devotional',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '483 views',
    duration: '5:15',
    description: 'Sufi poetry reflecting on the trials and transformative essence of Ishq-e-Haqiqi.'
  },
  {
    id: '-H7x-Fsn60I',
    title: 'Sarkar Ghouse Azam | New Manqabat | By Shahbir Ahmed Niazi Tahiri',
    youtubeId: '-H7x-Fsn60I',
    youtubeUrl: 'https://www.youtube.com/watch?v=-H7x-Fsn60I',
    thumbnail: 'https://i.ytimg.com/vi/-H7x-Fsn60I/hqdefault.jpg',
    category: 'manqabat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '477 views',
    duration: '5:55',
    description: 'Manqabat in exalted tribute to Sheikh Abdul Qadir Jilani (Ghous-e-Azam).'
  },
  {
    id: '4st84yHndAw',
    title: 'Farsi Kalam | Tanam Farsooda Jaan Para | By Shahbir Ahmed Niazi Tahiri',
    youtubeId: '4st84yHndAw',
    youtubeUrl: 'https://www.youtube.com/watch?v=4st84yHndAw',
    thumbnail: 'https://i.ytimg.com/vi/4st84yHndAw/hqdefault.jpg',
    category: 'naat',
    reciter: 'Shabbir Ahmed Niazi Tahiri',
    views: '399 views',
    duration: '5:30',
    description: 'The celebrated classical Persian Naat of Maulana Abdur Rahman Jami (R.A).'
  },
  {
    id: '-vog2jME2zE',
    title: 'Aaqa Ka Mansab Juda Hai | Faiz e Sajjan Sain | By Syed Fahad Wahid Ali Tahiri',
    youtubeId: '-vog2jME2zE',
    youtubeUrl: 'https://www.youtube.com/watch?v=-vog2jME2zE',
    thumbnail: 'https://i.ytimg.com/vi/-vog2jME2zE/hqdefault.jpg',
    category: 'naat',
    reciter: 'Syed Fahad Wahid Ali Tahiri',
    views: '302 views',
    duration: '5:00',
    description: 'Devotional Naat regarding the transcendent rank and status of the Prophet ﷺ.'
  },
  {
    id: 'A32XuikQ3iA',
    title: 'Jery Dil Vich Rakhde Nein Arman Madine De | New Naat 2023 | By Asif Bhatti Sultani',
    youtubeId: 'A32XuikQ3iA',
    youtubeUrl: 'https://www.youtube.com/watch?v=A32XuikQ3iA',
    thumbnail: 'https://i.ytimg.com/vi/A32XuikQ3iA/hqdefault.jpg',
    category: 'naat',
    reciter: 'Asif Bhatti Sultani',
    views: '291 views',
    duration: '6:00',
    description: 'Punjabi Naat on harboring heartfelt longing in one’s chest for the sacred city of Madinah.'
  }
];
