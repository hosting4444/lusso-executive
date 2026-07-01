export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/447557261273"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-float"
      style={{
        position: 'fixed', bottom: 26, right: 26, zIndex: 90,
        width: 58, height: 58, borderRadius: '50%', background: '#25d366',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'waPulse 2.6s ease-out infinite',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-2.8.8.7-2.7-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-3.3-2.9c-.25-.43.25-.4.71-1.32.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.78 2.72 4.3 3.81.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29z"/>
      </svg>
    </a>
  )
}
