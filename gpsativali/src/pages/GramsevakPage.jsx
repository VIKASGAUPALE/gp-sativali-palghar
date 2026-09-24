import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ph = (e) => { e.target.src = 'https://via.placeholder.com/300x300/e2e8f0/64748b?text=Photo' }

const duties = [
  { icon: '📋', title: 'दैनंदिन प्रशासन', desc: 'ग्रामपंचायतीचे दैनंदिन कामकाज, नोंदी आणि कागदपत्र व्यवस्थापन.' },
  { icon: '📜', title: 'दाखले व अर्ज', desc: 'जन्म, मृत्यू, विवाह दाखले आणि इतर अर्ज स्वीकारणे व प्रक्रिया करणे.' },
  { icon: '💰', title: 'लेखा व हिशोब', desc: 'आर्थिक नोंदी, खर्च, अनुदान आणि लेखापरीक्षणासाठी कागदपत्रे तयार ठेवणे.' },
  { icon: '🏛️', title: 'बैठका आयोजन', desc: 'ग्रामसभा व ग्रामपंचायत बैठकांचे आयोजन आणि कार्यवृत्तांत लिहिणे.' },
  { icon: '🤝', title: 'शासकीय योजना', desc: 'योजनांची माहिती गावकऱ्यांपर्यंत पोहोचवणे आणि अर्ज प्रक्रिया सुलभ करणे.' },
  { icon: '📞', title: 'नागरिक सेवा', desc: 'गावकऱ्यांच्या तक्रारी ऐकणे, मार्गदर्शन करणे आणि संबंधित अधिकाऱ्यांकडे पाठवणे.' },
]

const staff = [
  { name: 'श्रीम. भावना नारायण ढोले', post: '📋 ग्रामसेविका', photo: '/images/bhavana.jpeg', duties: 'ग्रामपंचायत प्रशासन, दाखले, बैठका, योजना अंमलबजावणी' },
  { name: 'श्री. अनंता वामन देसले', post: '🗂️ ग्रा.पं. कर्मचारी', photo: '/images/ananta.jpeg', duties: 'कार्यालयीन सहाय्य, नोंदी, कागदपत्र व्यवस्थापन' },
  { name: 'श्री. अजय सुभाष लहांगी', post: '💻 ऑपरेटर', photo: '/images/ajay.jpeg', duties: 'संगणकीय नोंदी, डिजिटल सेवा, डेटा एंट्री' },
]

const GramsevakPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-10">
          <div className="bg-gradient-to-r from-[#0b3d91] via-[#0d4ba3] to-[#138808] p-6 text-white text-center">
            <h1 className="text-2xl md:text-3xl font-bold font-marathi">📋 ग्रामपंचायत अधिकारी / कर्मचारी</h1>
            <p className="text-white/80 font-marathi text-sm mt-1">गट ग्रामपंचायत सातिवली</p>
          </div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-100 flex-shrink-0">
              <img src="/images/bhavana.jpeg" alt="ग्रामसेविका" className="w-full h-full object-cover object-top" onError={ph} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800 font-marathi">श्रीम. भावना नारायण ढोले</h2>
              <p className="text-[#138808] font-semibold font-marathi mt-1">📋 ग्रामसेविका</p>
              <p className="text-slate-500 font-marathi text-sm mt-2">🏡 गट ग्रामपंचायत सातिवली, ता. जि. पालघर</p>
              <p className="text-slate-500 font-marathi text-sm">🕐 कार्यालय वेळ: सकाळी १० ते संध्याकाळी ५</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">📋 ग्रामसेविका / अधिकाऱ्यांची जबाबदारी</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {duties.map((d, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex gap-3">
              <span className="text-2xl flex-shrink-0">{d.icon}</span>
              <div>
                <h3 className="font-bold text-slate-800 font-marathi text-sm">{d.title}</h3>
                <p className="text-slate-600 text-xs font-marathi mt-1 leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">💼 इतर कर्मचारी</h2>
        <div className="space-y-4 mb-8">
          {staff.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
                <img src={s.photo} alt={s.name} className="w-full h-full object-cover object-top" onError={ph} />
              </div>
              <div>
                <p className="text-xs text-[#138808] font-semibold font-marathi">{s.post}</p>
                <h3 className="font-bold text-slate-800 font-marathi text-sm">{s.name}</h3>
                <p className="text-xs text-slate-500 font-marathi mt-0.5">{s.duties}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b3d91] text-white text-sm font-marathi hover:bg-[#072a66] transition">
            📞 कार्यालयाशी संपर्क साधा →
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
export default GramsevakPage
