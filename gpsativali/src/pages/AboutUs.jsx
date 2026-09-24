import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const AboutUs = () => {
  const { t } = useTranslation()

  const vision = [
    { icon: '🌐', title: 'डिजिटल ग्राम', desc: 'ग्रामपंचायतीचे कामकाज पारदर्शक आणि डिजिटल माध्यमांतून चालवणे.' },
    { icon: '🌿', title: 'पर्यावरण पूरक विकास', desc: 'गावातील स्वच्छता, पाणी व्यवस्थापन आणि नैसर्गिक संसाधनांचे संरक्षण.' },
    { icon: '🤝', title: 'युवा आणि महिला सबलीकरण', desc: 'शिक्षण, आरोग्य आणि रोजगाराच्या संधी उपलब्ध करून सशक्त करणे.' },
  ]

  const info = [
    '🏛️ ग्रामपंचायतीचे नाव : गट ग्रामपंचायत सातिवली',
    '📍 तालुका : पालघर',
    '📍 जिल्हा : पालघर',
    '📅 स्थापना वर्ष : १९६५',
    '👥 सदस्य संख्या : ८ (निर्वाचित)',
    '👑 सरपंच : श्री. कृष्णा मंगल जाधव',
    '🏅 उपसरपंच : श्री. जयवंत नरसू करपट',
    '📋 ग्रामसेविका : श्रीम. भावना नारायण ढोले',
    '📅 कार्यकाळ : २६/१०/२०२२ ते २७/१०/२०२७',
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-2">{t('about')}</h1>
        <p className="text-slate-500 font-marathi mb-8">गट ग्रामपंचायत सातिवली: प्रगतीचा संकल्प</p>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10 border border-slate-100">
          <p className="text-slate-700 leading-relaxed font-marathi text-lg">
            सातिवली हे पालघर तालुक्यात असलेले संस्कृती आणि कृषीचे उत्तम मिश्रण असलेले गाव आहे. स्थानिक स्वराज्य संस्था म्हणून आम्ही एक आदर्श, आत्मनिर्भर आणि तंत्रज्ञान-स्नेही गाव बनवण्यासाठी कटिबद्ध आहोत.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#0b3d91] font-marathi mb-6">{t('vision')}</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {vision.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-bold text-lg text-slate-800 font-marathi mb-2">{v.title}</h3>
              <p className="text-slate-600 text-sm font-marathi">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-[#0b3d91] font-marathi mb-6">📄 ग्रामपंचायतीची माहिती</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <ul className="space-y-3">
            {info.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-marathi text-slate-700">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#138808] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutUs
