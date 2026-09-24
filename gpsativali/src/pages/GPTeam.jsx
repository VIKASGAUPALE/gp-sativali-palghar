import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const members = [
  { sr: 1, name: 'श्री. कृष्णा मंगल जाधव', post: '👑 सरपंच', ward: 'थेट निवड', photo: '/images/krushna.jpeg' },
  { sr: 2, name: 'श्री. जयवंत नरसू करपट', post: '🏅 उपसरपंच', ward: '२ब', photo: '/images/jaywant.jpeg' },
  { sr: 3, name: 'श्री. राहुल विष्णू श्रावणी', post: '👤 सदस्य', ward: '१अ', photo: '/images/rahul.jpeg' },
  { sr: 4, name: 'श्रीम. शारदा लक्ष्मण गडग', post: '👤 सदस्य', ward: '१ब', photo: '/images/sharada.jpeg' },
  { sr: 5, name: 'श्रीम. अनिता अनिल लोहार', post: '👤 सदस्य', ward: '२ब', photo: '/images/anita.jpeg' },
  { sr: 6, name: 'श्री. रविंद्र दामु जाधव', post: '👤 सदस्य', ward: '३क', photo: '/images/ravindra.jpeg' },
  { sr: 7, name: 'श्रीम. तनुजा तुलशिराम म्हसे', post: '👤 सदस्य', ward: '३क', photo: '/images/tanuja.jpeg' },
  { sr: 8, name: 'श्रीम. प्रतिक्षा प्रदीप अंधेर', post: '👤 सदस्य', ward: '३क', photo: '/images/pratiksha.jpeg' },
]

const staff = [
  { name: 'श्रीम. भावना नारायण ढोले', post: '📋 ग्रामसेविका', photo: '/images/bhavana.jpeg' },
  { name: 'श्री. अनंता वामन देसले', post: '🗂️ ग्रा.पं. कर्मचारी', photo: '/images/ananta.jpeg' },
  { name: 'श्री. अजय सुभाष लहांगी', post: '💻 ऑपरेटर', photo: '/images/ajay.jpeg' },
]

const ph = (e) => { e.target.src = 'https://via.placeholder.com/200x200/e2e8f0/64748b?text=Photo' }

const GPTeam = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-2">👥 {t('team')}</h1>
        <p className="text-slate-500 font-marathi mb-2">🏛️ गट ग्रामपंचायत सातिवली — कार्यकारी मंडळ</p>
        <p className="text-sm text-slate-400 font-marathi mb-8">📅 निवडणूक कालावधी: २६/१०/२०२२ ते २७/१०/२०२७ | 🏠 स्थापना: १९६५</p>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">🗳️ निर्वाचित सदस्य</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {members.map((m, i) => (
            <motion.div key={m.sr} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-slate-100 text-center">
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" onError={ph} />
              </div>
              <div className="p-3">
                <p className="text-xs text-[#138808] font-semibold font-marathi">{m.post}</p>
                <h3 className="text-sm font-bold text-slate-800 font-marathi mt-1 leading-tight">{m.name}</h3>
                <p className="text-xs text-slate-400 font-marathi mt-1">📍 वॉर्ड: {m.ward}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">💼 कर्मचारी / अधिकारी</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {staff.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition border border-slate-100 flex items-center gap-4 p-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                <img src={s.photo} alt={s.name} className="w-full h-full object-cover object-top" onError={ph} />
              </div>
              <div>
                <p className="text-xs text-[#138808] font-semibold font-marathi">{s.post}</p>
                <h3 className="text-sm font-bold text-slate-800 font-marathi mt-0.5">{s.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
export default GPTeam
