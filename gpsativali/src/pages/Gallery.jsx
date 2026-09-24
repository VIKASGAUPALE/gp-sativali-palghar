import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// img1.jpeg ते img45.jpeg — public/images फोल्डरमध्ये ठेवा
const galleryImages = Array.from({ length: 45 }, (_, i) => `/images/img${i + 1}.jpeg`)

const ph = (e) => { e.target.style.display = 'none' }

const Gallery = () => {
  const [selected, setSelected] = useState(null)
  const [loaded, setLoaded] = useState({})

  const onLoad = (i) => setLoaded((p) => ({ ...p, [i]: true }))
  const onErr = (i, e) => {
    e.target.style.display = 'none'
    setLoaded((p) => ({ ...p, [i]: false }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-[#0b3d91] font-marathi mb-2">📸 छायाचित्र गॅलरी</h1>
        <p className="text-slate-500 font-marathi mb-8">🏡 गट ग्रामपंचायत सातिवली — गाव व विकास कामांचे फोटो</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 10) * 0.03 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-lg cursor-pointer border border-slate-100"
              onClick={() => loaded[i] !== false && setSelected(src)}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                onLoad={() => onLoad(i)}
                onError={(e) => onErr(i, e)}
              />
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-400 font-marathi">
          📁 फोटो <code className="bg-slate-100 px-1 rounded">public/images/img1.jpeg</code> ते <code className="bg-slate-100 px-1 rounded">img45.jpeg</code> नावाने ठेवा
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
            <img src={selected} alt="Full" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-white text-3xl hover:text-red-300">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default Gallery
