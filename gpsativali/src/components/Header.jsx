import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [certOpen, setCertOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setCertOpen(false)
  }, [location])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'mr' ? 'en' : 'mr')
  }

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setShowInstall(false)
    setDeferredPrompt(null)
  }

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/aboutus', label: t('about') },
    { to: '/sachiv', label: t('officer') },
    { to: '/sarpanch', label: t('sarpanch') },
    { to: '/upsarpanch', label: t('upsarpanch') },
    { to: '/team', label: t('team') },
    { to: '/meeting', label: t('meeting') },
    { to: '/devlopment', label: t('development') },
    { to: '/gallery', label: t('gallery') },
    { to: '/contact', label: t('contact') },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0b3d91] via-[#0d4ba3] to-[#138808] text-white text-center py-1.5 text-sm font-medium tracking-wide">
        <span className="font-marathi">{t('siteName')} | {t('tagline')}</span>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo Row */}
          <div className="flex items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-[#0b3d91]" onError={(e)=>{e.target.outerHTML='<div class=\'w-14 h-14 rounded-full bg-gradient-to-br from-[#0b3d91] to-[#138808] flex items-center justify-center text-white font-bold text-lg shadow-lg\'>GP</div>'}} />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-[#0b3d91] font-marathi leading-tight">
                  {t('siteName')}
                </h1>
                <p className="text-xs text-slate-500 font-marathi">{t('tagline')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-full border-2 border-[#0b3d91] text-[#0b3d91] text-sm font-semibold hover:bg-[#0b3d91] hover:text-white transition-all"
              >
                {i18n.language === 'mr' ? 'EN' : 'मर'}
              </button>

              {/* PWA Install */}
              {showInstall && (
                <button
                  onClick={handleInstall}
                  className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#138808] text-white text-sm font-semibold hover:bg-green-700 transition"
                >
                  📲 {t('installApp')}
                </button>
              )}

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                aria-label="Menu"
              >
                <svg className="w-6 h-6 text-[#0b3d91]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-1 pb-3 flex-wrap">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all font-marathi ${
                  location.pathname === link.to
                    ? 'bg-[#0b3d91] text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#0b3d91]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Certificates Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCertOpen(!certOpen)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all font-marathi flex items-center gap-1 ${
                  ['/janm-dakhala', '/mrut-dakhala', '/vivah-dakhala'].includes(location.pathname)
                    ? 'bg-[#0b3d91] text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#0b3d91]'
                }`}
              >
                {t('certificates')} ▾
              </button>
              <AnimatePresence>
                {certOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[180px] z-50"
                  >
                    <Link to="/janm-dakhala" className="block px-4 py-2.5 text-sm hover:bg-slate-50 font-marathi">{t('birthCert')}</Link>
                    <Link to="/mrut-dakhala" className="block px-4 py-2.5 text-sm hover:bg-slate-50 font-marathi">{t('deathCert')}</Link>
                    <Link to="/vivah-dakhala" className="block px-4 py-2.5 text-sm hover:bg-slate-50 font-marathi">{t('marriageCert')}</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(7).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all font-marathi ${
                  location.pathname === link.to
                    ? 'bg-[#0b3d91] text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#0b3d91]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium font-marathi ${
                      location.pathname === link.to ? 'bg-[#0b3d91] text-white' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t my-2 pt-2">
                  <p className="px-4 text-xs text-slate-400 mb-1 font-marathi">{t('certificates')}</p>
                  <Link to="/janm-dakhala" className="block px-4 py-2 text-sm font-marathi text-slate-700 hover:bg-slate-50">{t('birthCert')}</Link>
                  <Link to="/mrut-dakhala" className="block px-4 py-2 text-sm font-marathi text-slate-700 hover:bg-slate-50">{t('deathCert')}</Link>
                  <Link to="/vivah-dakhala" className="block px-4 py-2 text-sm font-marathi text-slate-700 hover:bg-slate-50">{t('marriageCert')}</Link>
                </div>
                {showInstall && (
                  <button onClick={handleInstall} className="mx-4 mt-2 py-2.5 rounded-lg bg-[#138808] text-white text-sm font-semibold">
                    📲 {t('installApp')}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header
