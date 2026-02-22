/**
 * Analytics Tracking Utilities for Web3 Currency Landing Page
 * Provides structured event tracking for conversion optimization
 */

export interface AnalyticsEvent {
  category: string;
  action: string;
  label: string;
  value?: number;
}

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (buttonName: string, location: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: buttonName,
      button_location: location,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track WhatsApp community joins
 */
export const trackCommunityJoin = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'community_join', {
      event_category: 'conversion',
      event_label: 'whatsapp_community',
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track ecosystem exploration
 */
export const trackEcosystemExplore = (section: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ecosystem_explore', {
      event_category: 'engagement',
      event_label: section,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track airdrop interactions
 */
export const trackAirdropInteraction = (airdropName: string, action: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'airdrop_interaction', {
      event_category: 'airdrop',
      event_label: airdropName,
      action_type: action,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track social media clicks
 */
export const trackSocialClick = (platform: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'social_click', {
      event_category: 'outbound',
      event_label: platform,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track section visibility (scroll depth)
 */
export const trackSectionView = (sectionName: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'section_view', {
      event_category: 'scroll_depth',
      event_label: sectionName,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track FAQ interactions
 */
export const trackFAQClick = (questionIndex: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'faq_interaction', {
      event_category: 'engagement',
      event_label: `question_${questionIndex}`,
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track Pi App interest
 */
export const trackPiAppInterest = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'pi_app_interest', {
      event_category: 'interest',
      event_label: 'pi_network_app',
      timestamp: new Date().toISOString()
    });
  }
};

/**
 * Track P2P desk interest
 */
export const trackP2PDeskInterest = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'p2p_desk_interest', {
      event_category: 'interest',
      event_label: 'liquidity_desk',
      timestamp: new Date().toISOString()
    });
  }
};
