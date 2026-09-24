import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState({ fullName: '', contactNo: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static: open WhatsApp or mailto
    const text = encodeURIComponent(`नाव: ${form.fullName}\nसंपर्क: ${form.contactNo}\nईमेल: ${form.email}\nसंदेश: ${form.message}`)
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank')
    setSent(true)
    setForm({ fullName: '', contactNo: '', email: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-8">{t('contact')}</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h2 className="font-bold text-lg text-[#0b3d91] font-marathi mb-4">कार्यालय माहिती</h2>
            <div className="space-y-3 text-slate-600 font-marathi text-sm">
              <p>📍 गट ग्रामपंचायत सातिवली<br />तालुका पालघर, जिल्हा पालघर</p>
              <p>🕐 सोमवार ते शनिवार<br />सकाळी १०:०० ते संध्याकाळी ५:००</p>
              <p>📞 कार्यालयात संपर्क उपलब्ध</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
            <h2 className="font-bold text-lg text-[#0b3d91] font-marathi mb-4">{t('sendMessage')}</h2>
            {sent ? (
              <p className="text-green-600 font-marathi">{t('successMsg')}</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder={t('fullName')} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 outline-none font-marathi text-sm" />
                <input required placeholder={t('phone')} value={form.contactNo} onChange={(e) => setForm({ ...form, contactNo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 outline-none text-sm" />
                <input type="email" placeholder={t('email')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 outline-none text-sm" />
                <textarea required rows={4} placeholder={t('message')} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#0b3d91] focus:ring-2 focus:ring-[#0b3d91]/20 outline-none font-marathi text-sm resize-none" />
                <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#0b3d91] to-[#138808] text-white rounded-lg font-semibold shadow hover:shadow-lg transition font-marathi">
                  {t('submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default Contact
