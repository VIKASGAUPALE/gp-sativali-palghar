import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const JanmDakhala = () => {
  const { t, i18n } = useTranslation()
  const isMr = i18n.language === 'mr'

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-2">{isMr ? 'जन्म दाखला' : 'Birth Certificate'}</h1>
        <p className="text-slate-500 font-marathi mb-8">गट ग्रामपंचायत सातिवली</p>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-100 space-y-6">
          <div>
            <h2 className="font-bold text-lg text-[#0b3d91] font-marathi mb-3">📋 {t('requiredDocs')}</h2>
            <ul className="space-y-2 text-slate-600 font-marathi text-sm">
              <li>• अर्जदाराचा ओळखपत्र (आधार कार्ड / मतदार ओळखपत्र)</li>
              <li>• संबंधित घटना सिद्ध करणारे कागदपत्र</li>
              <li>• पत्ता सिद्ध करणारे कागदपत्र</li>
              <li>• इतर आवश्यक कागदपत्रे (कार्यालयात चौकशी करा)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg text-[#0b3d91] font-marathi mb-3">📝 {t('process')}</h2>
            <ol className="space-y-2 text-slate-600 font-marathi text-sm list-decimal list-inside">
              <li>ग्रामपंचायत कार्यालयात अर्ज सादर करा</li>
              <li>आवश्यक कागदपत्रे जोडा</li>
              <li>फी भरा (लागू असल्यास)</li>
              <li>दाखला तयार झाल्यावर घ्या</li>
            </ol>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 font-marathi">
              <strong>{t('note')}:</strong> दाखला मिळवण्यासाठी ग्रामपंचायत कार्यालयात व्यक्तीशः संपर्क साधा. अधिक माहितीसाठी कार्यालयात भेट द्या.
            </p>
          </div>

          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b3d91] to-[#138808] text-white rounded-full font-semibold shadow hover:shadow-lg transition font-marathi">
            📞 कार्यालयाशी संपर्क साधा
          </a>
        </div>
      </motion.div>
    </div>
  )
}
export default JanmDakhala
