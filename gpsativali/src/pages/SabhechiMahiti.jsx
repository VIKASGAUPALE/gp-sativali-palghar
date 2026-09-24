import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const SabhechiMahiti = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-8">{t('meeting')}</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 space-y-6">
          <p className="text-slate-700 font-marathi leading-relaxed">
            ग्रामसभा ही ग्रामपंचायतीची सर्वोच्च लोकशाही संस्था आहे. सर्व मतदारांना ग्रामसभेत सहभागी होण्याचा अधिकार आहे.
          </p>
          <div>
            <h2 className="font-bold text-lg text-[#0b3d91] font-marathi mb-3">ग्रामसभेची महत्त्वाची कामे</h2>
            <ul className="space-y-2 text-slate-600 font-marathi text-sm">
              <li>• वार्षिक अंदाजपत्रक मंजुरी</li>
              <li>• विकास कामांचे नियोजन व मंजुरी</li>
              <li>• सामाजिक लेखापरीक्षण</li>
              <li>• योजनांची अंमलबजावणी तपासणी</li>
              <li>• गावाशी संबंधित महत्त्वाचे निर्णय</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800 font-marathi">
              आगामी ग्रामसभेची तारीख व एजेंडा कार्यालयात किंवा नोटीस बोर्डवर जाहीर केला जाईल. कृपया सहभागी व्हा.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default SabhechiMahiti
