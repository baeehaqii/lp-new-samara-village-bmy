"use client"

import { WhatsAppIcon } from "./icons"
import { trackWhatsAppClick } from "@/lib/tiktok-pixel"

export default function WhatsAppFloat() {
  // Floating WhatsApp button (bottom right) - Always available
  const handleClick = () => {
    // Track TikTok event: Floating WhatsApp button click
    trackWhatsAppClick('whatsapp-floating', 'contact')

    // Replace with your WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = "6281127010001" // Example: Indonesian number
    const message = encodeURIComponent("Halo, saya tertarik dengan Samara Village Bumiayu")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
