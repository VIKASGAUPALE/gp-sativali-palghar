import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ph = (e) => { e.target.src = 'https://via.placeholder.com/300x300/e2e8f0/64748b?text=Photo' }

const duties = [
  { icon: '🏛️', title: 'ग्रामसभा अध्यक्ष', desc: 'ग्रामसभेचे अध्यक्षपद भूषवणे आणि बैठकांचे संचालन करणे.' },
  { icon: '📝', title: 'प्रशासकीय निर्णय', desc: 'ग्रामपंचायतीच्या दैनंदिन प्रशासकीय निर्णयांची अंमलबजावणी.' },
  { icon: '🏗️', title: 'विकास कामे पर्यवेक्षण', desc: 'गावातील सर्व विकास कामांचे नियोजन, पर्यवेक्षण आणि गुणवत्ता नियंत्रण.' },
  { icon: '💰', title: 'आर्थिक व्यवस्थापन', desc: 'ग्रामपंचायत निधी, अनुदान व खर्च यांचे नियंत्रण आणि पारदर्शकता.' },
  { icon: '🤝', title: 'शासकीय योजना', desc: 'केंद्र व राज्य शासनाच्या योजना गावात राबविणे व लाभार्थ्यांपर्यंत पोहोचवणे.' },
  { icon: '🌱', title: 'स्वच्छता व आरोग्य', desc: 'गावातील स्वच्छता, पाणीपुरवठा आणि आरोग्य सेवा सुनिश्चित करणे.' },
  { icon: '📜', title: 'दाखले व प्रमाणपत्रे', desc: 'जन्म, मृत्यू, विवाह इ. दाखल्यांसाठी अधिकृत मंजुरी.' },
  { icon: '⚖️', title: 'न्याय व तक्रार निवारण', desc: 'गावकऱ्यांच्या तक्रारी ऐकणे आणि योग्य तोडगा काढणे.' },
]

const Sarpanch = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-10">
          <div className="bg-gradient-to-r from-[#0b3d91] to-[#138808] p-6 text-white text-center">
            <h1 className="text-2xl md:text-3xl font-bold font-marathi">👑 सरपंच</h1>
            <p className="text-white/80 font-marathi text-sm mt-1">गट ग्रामपंचायत सातिवली</p>
          </div>
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-100 flex-shrink-0">
              <img src="/images/krushna.jpeg" alt="सरपंच" className="w-full h-full object-cover object-top" onError={ph} />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800 font-marathi">श्री. कृष्णा मंगल जाधव</h2>
              <p className="text-[#138808] font-semibold font-marathi mt-1">👑 सरपंच — थेट निवड</p>
              <p className="text-slate-500 font-marathi text-sm mt-2">📅 कार्यकाळ: </p>
              <p className="text-slate-500 font-marathi text-sm">🏡 गट ग्रामपंचायत सातिवली, ता. जि. पालघर</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#0b3d91] font-marathi mb-5">📋 सरपंच यांची जबाबदारी व कार्ये</h2>
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
export default Sarpanch
