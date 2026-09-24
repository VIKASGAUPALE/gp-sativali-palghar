import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-marathi text-white">{t('siteName')}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-marathi">
              {t('tagline')}
            </p>
            <p className="text-slate-400 text-sm mt-3 font-marathi">
              ISO 9001:2015 प्रमाणित
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-marathi">{t('quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/aboutus" className="text-slate-400 hover:text-white transition font-marathi">{t('about')}</Link>
              <Link to="/sarpanch" className="text-slate-400 hover:text-white transition font-marathi">{t('sarpanch')}</Link>
              <Link to="/meeting" className="text-slate-400 hover:text-white transition font-marathi">{t('meeting')}</Link>
              <Link to="/devlopment" className="text-slate-400 hover:text-white transition font-marathi">{t('development')}</Link>
              <Link to="/gallery" className="text-slate-400 hover:text-white transition font-marathi">{t('gallery')}</Link>
              <Link to="/contact" className="text-slate-400 hover:text-white transition font-marathi">{t('contact')}</Link>
              <Link to="/janm-dakhala" className="text-slate-400 hover:text-white transition font-marathi">{t('birthCert')}</Link>
              <Link to="/mrut-dakhala" className="text-slate-400 hover:text-white transition font-marathi">{t('deathCert')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-marathi">{t('contact')}</h3>
            <div className="space-y-2 text-sm text-slate-400 font-marathi">
              <p>📍 सातिवली, ता. पालघर, जि. पालघर</p>
              <p>📞 संपर्क कार्यालयात उपलब्ध</p>
              <p>🕐 सोम - शनि: सकाळी १० ते संध्याकाळी ५</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-500 text-xs font-marathi">
            © {new Date().getFullYear()} {t('siteName')}. {t('rights')}.
          </p>
          <p className="text-slate-600 text-xs mt-1">
            Content provided by Grampanchayat Office, Government of Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
