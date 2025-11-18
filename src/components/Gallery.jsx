import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tags = ['All','Leather Shoes','Suede Shoes','Sneakers','Boots','Jackets','Handbags']

const images = [
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag:'Leather Shoes', before:'https://images.unsplash.com/photo-1582738411984-2fc91858ba04?q=80&w=1200&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag:'Sneakers', before:'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1600&auto=format&fit=crop', tag:'Boots', before:'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop', tag:'Jackets', before:'https://images.unsplash.com/photo-1520975922321-9c5a5b6e2803?q=80&w=1200&auto=format&fit=crop' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag:'Handbags', before:'https://images.unsplash.com/photo-1611259180120-289bd124d5df?q=80&w=1200&auto=format&fit=crop' },
]

function BeforeAfter({before, after}){
  const [pos, setPos] = useState(50)
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl">
      <img src={before} className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0" style={{width:`${pos}%`, overflow:'hidden'}}>
        <img src={after} className="w-full h-full object-cover"/>
      </div>
      <input type="range" min="0" max="100" value={pos} onChange={e=>setPos(e.target.value)} className="absolute bottom-3 left-3 right-3"/>
    </div>
  )
}

export default function Gallery(){
  const [active, setActive] = useState('All')
  const filtered = active==='All'? images : images.filter(i=>i.tag===active)

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50">Gallery</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <button key={t} onClick={()=>setActive(t)} className={`px-3 py-1.5 rounded-full text-sm border ${active===t? 'bg-amber-700/90 text-amber-50 border-white/20' : 'bg-white/5 text-amber-100 border-white/10 hover:bg-white/10'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((img, idx) => (
              <motion.div key={img.src} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0}} transition={{duration:0.5, delay: idx*0.05}} className="group">
                <BeforeAfter before={img.before} after={img.src}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
