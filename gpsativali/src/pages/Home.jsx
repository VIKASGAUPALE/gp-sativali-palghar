import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Home = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    '/images/slider1.jpeg',
    '/images/slider2.jpeg',
    '/images/slider3.jpeg',
    '/images/slider4.jpeg',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const leaders = [
    { role: '👑 सरपंच', name: 'श्री. कृष्णा मंगल जाधव', photo: '/images/krushna.jpeg', link: '/sarpanch' },
    { role: '🏅 उपसरपंच', name: 'श्री. जयवंत नरसू करपट', photo: '/images/jaywant.jpeg', link: '/upsarpanch' },
    { role: '📋 ग्रामसेविका', name: 'श्रीम. भावना नारायण ढोले', photo: '/images/bhavana.jpeg', link: '/sachiv' },
  ]

  const dignitaries = [
    { name: 'श्री. देवेंद्र फडणवीस', post: 'माननीय मुख्यमंत्री महोदय', photo: '/images/devendra.jpeg' },
    { name: 'श्री एकनाथ शिंदे', post: 'माननीय उपमुख्यमंत्री', photo: '/images/eknath.jpeg' },
    { name: 'सौ. सुनैत्रा पवार', post: 'माननीय उपमुख्यमंत्री', photo: '/images/sunetra.jpeg' },
    { name: 'श्री जयकुमार गोरे', post: 'मा. मंत्री, ग्रामविकास व पंचायत राज', photo: '/images/jaykumar.jpeg' },
    { name: 'श्री योगेश कदम', post: 'मा. राज्यमंत्री, ग्रामविकास व पंचायत राज', photo: '/images/yogesh.jpeg' },
    { name: 'श्री गणेश नाईक', post: 'मा. वनमंत्री व पालघर जिल्ह्याचे पालकमंत्री', photo: '/images/ganesh.jpeg' },
    { name: 'श्री हेमंत सवरा', post: 'खासदार, पालघर लोकसभा', photo: '/images/hemant.jpeg' },
    { name: 'श्री विलास तरे', post: 'आमदार, बोईसर विधानसभा', photo: '/images/vilas.jpeg' },
    { name: 'श्री मनोज रानडे', post: 'मुख्य कार्यकारी अधिकारी, जिल्हा परिषद पालघर', photo: '/images/manoj.jpeg' },
    { name: 'श्री रविंद्र शिंदे', post: 'मा. अति. मुख्य कार्यकारी अधिकारी, जिल्हा परिषद पालघर', photo: '/images/ravindrashinde.jpeg' },
    { name: 'श्री अशोक पाटील', post: 'उपमुख्य कार्यकारी अधिकारी (पंचायत), जिल्हा परिषद पालघर', photo: '/images/ashok.jpeg' },
    { name: 'श्री संजय भोये', post: 'गट विकास अधिकारी (निवड श्रेणी), पंचायत समिती पालघर', photo: '/images/sanjay.jpeg' },
  ]

  const quickServices = [
    { title: t('birthCert'), icon: '👶', link: '/janm-dakhala', color: 'from-blue-500 to-blue-600' },
    { title: t('deathCert'), icon: '🕯️', link: '/mrut-dakhala', color: 'from-slate-500 to-slate-600' },
    { title: t('marriageCert'), icon: '💍', link: '/vivah-dakhala', color: 'from-pink-500 to-rose-600' },
    { title: t('meeting'), icon: '🏛️', link: '/meeting', color: 'from-amber-500 to-orange-600' },
    { title: t('development'), icon: '🏗️', link: '/devlopment', color: 'from-emerald-500 to-green-600' },
    { title: t('contact'), icon: '📞', link: '/contact', color: 'from-violet-500 to-purple-600' },
  ]

  const ph = (e) => { e.target.src = 'https://via.placeholder.com/300x300/e2e8f0/64748b?text=Photo' }

  return (
    <div>
      <div className="bg-[#0b3d91] text-white overflow-hidden py-2">
        <div className="marquee whitespace-nowrap text-sm font-marathi font-medium">
          🏛️ {t('siteName')} | {t('tagline')} | 📞 संपर्क: कार्यालयात उपलब्ध &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;
          🏛️ {t('siteName')} | {t('tagline')} | 📞 संपर्क: कार्यालयात उपलब्ध
        </div>
      </div>

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === i ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="Logo" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg" onError={ph} />
                <h1 className="text-3xl md:text-5xl font-bold text-white font-marathi leading-tight">{t('siteName')}</h1>
              </div>
              <p className="text-lg md:text-xl text-white/90 font-marathi mb-2">🙏 {t('welcome')}!</p>
              <p className="text-white/80 font-marathi mb-6">🌟 आमच्या गावाचा सर्वांगीण विकास हेच आमचे ध्येय!</p>
              <Link to="/aboutus" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b3d91] to-[#138808] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 font-marathi">
                ℹ️ {t('moreInfo')} →
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-white w-8' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickServices.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
              <Link to={s.link} className="block bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-slate-100">
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-2 shadow-md`}>{s.icon}</div>
                <p className="text-xs font-semibold text-slate-700 font-marathi leading-tight">{s.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ महत्त्वाचे मान्यवर */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0b3d91] font-marathi mb-3">⭐ महत्त्वाचे मान्यवर</h2>
        <p className="text-center text-slate-500 font-marathi mb-10">🏛️ मार्गदर्शक नेतृत्व</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dignitaries.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 text-center">
              <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img src={d.photo} alt={d.name} className="w-full h-full object-cover object-top" onError={ph} />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-slate-800 font-marathi leading-tight">{d.name}</h3>
                <p className="text-[11px] text-[#0b3d91] font-marathi mt-1 leading-snug">{d.post}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ग्रामपंचायत प्रतिनिधी */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0b3d91] font-marathi mb-10">👥 ग्रामपंचायत प्रतिनिधी</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaders.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                <Link to={l.link} className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100">
                  <div className="h-52 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <img src={l.photo} alt={l.name} className="w-full h-full object-cover object-top" onError={ph} />
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-sm text-[#138808] font-semibold font-marathi">{l.role}</p>
                    <h3 className="text-lg font-bold text-slate-800 font-marathi mt-1">{l.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0b3d91] font-marathi mb-2">📍 {t('location')}</h2>
          <p className="text-center text-slate-500 font-marathi mb-6">🏡 सातिवली, तालुका पालघर, जिल्हा पालघर</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <iframe title="Sativali Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15062.0!2d72.75!3d19.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQyJzAwLjAiTiA3MsKwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" className="w-full h-80 md:h-96" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
