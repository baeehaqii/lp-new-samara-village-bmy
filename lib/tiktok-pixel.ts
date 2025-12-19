/**
 * TikTok Pixel Event Tracker
 * Utility functions for tracking events with TikTok Pixel
 */

const TIKTOK_PIXEL_ID = 'D4VOBSBC77UAGCUELVG0'

/**
 * Track a custom event with TikTok Pixel
 * @param eventName - Name of the event to track
 * @param properties - Optional event properties/data
 */
export const trackTikTokEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return

  const ttq = (window as any).ttq
  if (!ttq) {
    console.warn('TikTok Pixel not yet loaded')
    return
  }

  try {
    ttq.track(eventName, properties)
  } catch (error) {
    console.error('Error tracking TikTok event:', error)
  }
}

/**
 * Track WhatsApp contact event
 * Used when user clicks on WhatsApp buttons
 * 
 * @param source - Button source identifier:
 *   - 'whatsapp-floating': Floating WhatsApp button (bottom right)
 *   - 'cta-whatsapp': CTA section "Whatsapp Kami" button
 *   - 'cta-promo': CTA section "Dapatkan Promo" button
 */
export const trackWhatsAppClick = (source: string = 'unknown', eventType: string = 'contact') => {
  console.log(`[TikTok Tracking] WhatsApp Click - Source: ${source}, Type: ${eventType}`)
  
  trackTikTokEvent(eventType === 'contact' ? 'Contact' : 'ViewContent', {
    content_name: eventType === 'contact' ? 'WhatsApp Contact' : 'Dapatkan Promo - WhatsApp',
    content_type: 'whatsapp_engagement',
    button_type: source,
    source: source,
    event_label: `WhatsApp - ${source}`,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track promo engagement
 * Used when user shows interest in promotions
 * 
 * @param promoType - Promo source/type:
 *   - 'cta-promo': CTA section "Dapatkan Promo" button
 */
export const trackPromoClick = (promoType: string = 'general') => {
  console.log(`[TikTok Tracking] Promo Click - Type: ${promoType}`)
  
  trackTikTokEvent('ViewContent', {
    content_name: 'Dapatkan Promo',
    content_type: 'promo_engagement',
    promo_type: promoType,
    button_type: promoType,
    event_label: `Promo - ${promoType}`,
    timestamp: new Date().toISOString(),
  })
}
