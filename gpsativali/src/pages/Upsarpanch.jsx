import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ph = (e) => { e.target.src = 'https://via.placeholder.com/300x300/e2e8f0/64748b?text=Photo' }

const duties = [
  { icon: '🤝', title: 'सरपंचांना सहकार्य', desc: 'सरपंचांच्या अनुपस्थितीत किंवा मदतीसाठी सर्व प्रशासकीय कामे.' },
  { icon: '📅', title: 'बैठकांमध्ये सहभाग', desc: 'ग्रामसभा व ग्रामपंचायत बैठकांमध्ये सक्रिय सहभाग आणि निर्णय प्रक्रियेत योगदान.' },
  { icon: '🏗️', title: 'विकास कामांवर लक्ष', desc: 'गावातील विकास कामांची प्रगती तपासणे आणि अहवाल देणे.' },
  { icon: '👥', title: 'नागरिक संपर्क', desc: 'गावकऱ्यांशी संपर्क ठेवणे, त्यांच्या समस्या ऐकणे आणि निराकरणात मदत.' },
  { icon: '📊', title: 'योजना अंमलबजावणी', desc: 'शासकीय योजनांची अंमलबजावणी आणि लाभार्थी निवडीत सहभाग.' },
  { icon: '🌿', title: 'पर्यावरण व स्वच्छता', desc: 'गावातील स्वच्छता अभियान आणि पर्यावरण संरक्षण उपक्रमांचे नेतृत्व.' },
]

const Upsarpanch = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-10">
          <div className="bg-gradient-to-r from-[#138808] to-[#0b3d91] p-6 text-white text-center">
            <h1 className="text-2xl md:text-3xl font-bold font-marathi">🏅 उपसरपंच</h1>
            <p className="text-white/80 font-marathi text-sm mt-1">गट ग्रामपंचायत सातिवली</p>
          </div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-100 flex-shrink-0">
              <img src="/images/jaywant.jpeg" alt="उपसरपंच" className="w-full h-full object-cover object-top" onError={ph} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800 font-marathi">श्री. जयवंत नरसू करपट</h2>
              <p className="text-[#138808] font-semibold font-marathi mt-1">🏅 उपसरपंच — वॉर्ड २ब</p>
              <p className="text-slate-500 font-marathi text-sm mt-2">📅 कार्यकाळ: </p>
              <p className="text-slate-500 font-marathi text-sm">🏡 गट ग्रामपंचायत सातिवली, ता. जि. पालघर</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">📋 उपसरपंच यांची जबाबदारी व कार्ये</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
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

        <div className="text-center">
          <Link to="/team" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b3d91] text-white text-sm font-marathi hover:bg-[#072a66] transition">
            👥 सर्व सदस्य पहा →
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
export default Upsarpanch
