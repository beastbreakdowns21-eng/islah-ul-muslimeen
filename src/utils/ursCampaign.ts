/**
 * Urs Mubarak Campaign Date & Countdown Utilities
 *
 * Campaign rules:
 * - Event dates: 27, 28, 29 November 2026 (Pakistan Standard Time, Asia/Karachi, UTC+5)
 * - Event Start: 2026-11-27T00:00:00+05:00
 * - Event End: 2026-11-29T23:59:59.999+05:00
 * - Campaign Expiration Cutoff: 2026-11-30T00:00:00+05:00
 *
 * Behavior:
 * - Before 27 Nov 2026: isUpcoming = true, isDuring = false, isExpired = false. Live countdown visible.
 * - 27, 28, 29 Nov 2026: isUpcoming = false, isDuring = true, isExpired = false. "Event is happening now".
 * - From 30 Nov 2026 00:00 PKT onward: isUpcoming = false, isDuring = false, isExpired = true.
 *   Promotional popup/banner/countdown MUST NOT render. Event transitions to "Past Event" / "Archive".
 */

import { useState, useEffect } from 'react';

// Exact ISO 8601 timestamps in Pakistan Standard Time (UTC+5)
export const URS_CAMPAIGN_CONFIG = {
  eventId: 'salana-urs-mubarak-2026',
  eventTitle: {
    en: 'Salana Urs Mubarak',
    ur: 'سالانہ عرس مبارک',
    ar: 'العرس السنوي المبارك',
  },
  datesDisplay: {
    en: '27 — 28 — 29 November 2026',
    ur: '27، 28، 29 نومبر 2026',
    ar: '27–28–29 نوفمبر 2026',
  },
  ctaText: {
    en: 'View Urs Schedule & Guidelines',
    ur: 'عرس مبارک کا شیڈول و تفصیلات دیکھیں',
    ar: 'عرض جدول ومواعيد العرس المبارك',
  },
  eventHappeningNowText: {
    en: 'Event is happening now',
    ur: 'تقریب جاری ہے',
    ar: 'الفعالية جارية',
  },
  detailsSoonText: {
    en: 'Details will be announced soon',
    ur: 'تفصیلات جلد شائع کی جائیں گی',
    ar: 'سيتم الإعلان عن التفاصيل قريباً',
  },
  pastEventText: {
    en: 'Past Event / Event Archive',
    ur: 'سابقہ تقریب / آرکائیو',
    ar: 'فعالية سابقة / الأرشيف',
  },
  // Timezone: Asia/Karachi (UTC+5)
  eventStartIso: '2026-11-27T00:00:00+05:00',
  eventEndIso: '2026-11-29T23:59:59.999+05:00',
  campaignCutoffIso: '2026-11-30T00:00:00+05:00',
};

export interface UrsCampaignState {
  isCampaignActive: boolean; // True while current time is before campaignCutoff
  isUpcoming: boolean;       // True before 27 Nov 2026 00:00 PKT
  isDuring: boolean;         // True during 27, 28, 29 Nov 2026 PKT
  isExpired: boolean;        // True on and after 30 Nov 2026 00:00 PKT
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMsRemaining: number;
  currentPktFormatted: string;
}

export function getUrsCampaignStatus(currentDate?: Date): UrsCampaignState {
  const now = currentDate ? new Date(currentDate) : new Date();
  const start = new Date(URS_CAMPAIGN_CONFIG.eventStartIso);
  const end = new Date(URS_CAMPAIGN_CONFIG.eventEndIso);
  const cutoff = new Date(URS_CAMPAIGN_CONFIG.campaignCutoffIso);

  const nowMs = now.getTime();
  const startMs = start.getTime();
  const endMs = end.getTime();
  const cutoffMs = cutoff.getTime();

  const isExpired = nowMs >= cutoffMs;
  const isDuring = nowMs >= startMs && nowMs <= endMs;
  const isUpcoming = nowMs < startMs;
  const isCampaignActive = !isExpired;

  let totalMsRemaining = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (isUpcoming) {
    totalMsRemaining = Math.max(0, startMs - nowMs);
    let rem = totalMsRemaining;

    days = Math.floor(rem / (1000 * 60 * 60 * 24));
    rem -= days * (1000 * 60 * 60 * 24);

    hours = Math.floor(rem / (1000 * 60 * 60));
    rem -= hours * (1000 * 60 * 60);

    minutes = Math.floor(rem / (1000 * 60));
    rem -= minutes * (1000 * 60);

    seconds = Math.floor(rem / 1000);
  }

  // Format PKT time string for debugging/accessibility if needed
  let currentPktFormatted = '';
  try {
    currentPktFormatted = now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
  } catch {
    currentPktFormatted = now.toISOString();
  }

  return {
    isCampaignActive,
    isUpcoming,
    isDuring,
    isExpired,
    days,
    hours,
    minutes,
    seconds,
    totalMsRemaining,
    currentPktFormatted,
  };
}

/**
 * Custom React Hook that updates the countdown every 1000ms
 */
export function useUrsCampaign(testDate?: Date): UrsCampaignState {
  const [state, setState] = useState<UrsCampaignState>(() => getUrsCampaignStatus(testDate));

  useEffect(() => {
    // If a static testDate is provided, don't tick
    if (testDate) {
      setState(getUrsCampaignStatus(testDate));
      return;
    }

    const interval = setInterval(() => {
      setState(getUrsCampaignStatus());
    }, 1000);

    return () => clearInterval(interval);
  }, [testDate]);

  return state;
}
