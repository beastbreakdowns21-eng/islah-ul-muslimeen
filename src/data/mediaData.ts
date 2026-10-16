import { AudioItem, VideoItem, LocalizedString } from '../types';

export const AUDIO_ITEMS: AudioItem[] = [
  {
    id: 'audio-quran-fatiha',
    title: {
      en: 'Surah Al-Fatiha (The Opening) - Verified Recitation',
      ur: 'سورۃ الفاتحہ - تلاوتِ کلامِ پاک',
      ar: 'سورة الفاتحة - تلاوة مباركة',
    },
    speaker: {
      en: 'Sheikh Mishary Rashid Alafasy',
      ur: 'قاری مشاری راشد العفاسی',
      ar: 'الشيخ مشاري راشد العفاسي',
    },
    category: 'zikr',
    duration: '0:45',
    audioUrl: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3',
    hasVerifiedAudio: true,
  },
];

export const VIDEO_ITEMS: VideoItem[] = [];

export interface LiveStreamSchedule {
  title: LocalizedString;
  event: LocalizedString;
  timing: LocalizedString;
  status: 'offline' | 'scheduled' | 'live';
  announcement: LocalizedString;
}

export const LIVE_STREAM_INFO: LiveStreamSchedule = {
  title: {
    en: 'Tahiri Live Broadcast Channel',
    ur: 'طاہری لائیو نشریاتی چینل',
    ar: 'قناة البث المباشر الطاهرية',
  },
  event: {
    en: 'Weekly Spiritual Gathering & Zikr-e-Qalbi Muraqabah',
    ur: 'ہفتہ وار روحانی محفل و ذکرِ قلبی مراقبہ',
    ar: 'المجلس الروحي الأسبوعي وحلقة الذكر القلبي',
  },
  timing: {
    en: 'Every Thursday after Maghrib prayer (Pakistan Standard Time, GMT+5)',
    ur: 'ہر جمعرات بعد نمازِ مغرب (پاکستان کے معیاری وقت کے مطابق)',
    ar: 'كل يوم خميس بعد صلاة المغرب (بتوقيت باكستان)',
  },
  status: 'scheduled',
  announcement: {
    en: 'Live streaming will commence automatically when the spiritual gathering begins at Dargah Allahabad Sharif.',
    ur: 'درگاہ اللہ آباد شریف سے مجلسِ ذکر کے آغاز پر لائیو نشریات خود بخود شروع ہو جائیں گی۔',
    ar: 'سيبدأ البث المباشر تلقائياً فور انطلاق فعاليات المجلس في دركاه الله آباد شريف.',
  },
};
