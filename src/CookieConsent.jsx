import { useState } from 'react'
import './CookieConsent.css'

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(
    () => localStorage.getItem('cookie-consent') === 'true'
  )

  if (accepted) return null

  function accept() {
    localStorage.setItem('cookie-consent', 'true')
    setAccepted(true)
  }

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        🍪 Ez az oldal nem tartalmaz sütiket – ellentétben az esküvői menüvel, ahol bőven lesz belőlük!
      </p>
      <button className="cookie-btn" onClick={accept}>
        Értem, várom a sütiket! 🎉
      </button>
    </div>
  )
}
