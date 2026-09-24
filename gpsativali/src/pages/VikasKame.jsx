import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// विकास कामे — फोटो img1.jpeg ते img45.jpeg (public/images)
// शीर्षके नंतर अपडेट करता येतील
const works = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  title: `विकास काम ${i + 1}`,
  photo: `/images/img${i + 1}.jpeg`,
  desc: 'गट ग्रामपंचायत सातिवली अंतर्गत राबविलेले / चालू विकास काम',
}))

const ph = (e) => { e.target.src = 'https://via.placeholder.com/400x300/e2e8f0/64748b?text=Vikas+Kam' }

const VikasKame = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-2">🏗️ विकास कामे</h1>
        <p className="text-slate-500 font-marathi mb-8">🏡 गट ग्रामपंचायत सातिवली — गावातील विकास कामांची यादी व छायाचित्रे</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((w, i) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 8) * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition border border-slate-100 cursor-pointer"
              onClick={() => setSelected(w)}
            >
              <div className="h-40 bg-slate-100 overflow-hidden">
                <img src={w.photo} alt={w.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" onError={ph} />
              </div>
              <div className="p-3">
                <h3 className="font-bold text-slate-800 font-marathi text-sm">📌 {w.title}</h3>
                <p className="text-xs text-slate-500 font-marathi mt-1 line-clamp-2">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400 font-marathi">
          📁 फोटो <code className="bg-slate-100 px-1 rounded">public/images/img1.jpeg … img45.jpeg</code> नावाने ठेवा. विशिष्ट कामांची नावे नंतर अपडेट करता येतील.
        </p>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <img src={selected.photo} alt={selected.title} className="w-full h-56 object-cover" onError={ph} />
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0b3d91] font-marathi">📌 {selected.title}</h3>
                <p className="text-sm text-slate-600 font-marathi mt-2">{selected.desc}</p>
                <button onClick={() => setSelected(null)} className="mt-4 px-4 py-2 rounded-full bg-[#0b3d91] text-white text-sm font-marathi">✕ बंद करा</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default VikasKame
