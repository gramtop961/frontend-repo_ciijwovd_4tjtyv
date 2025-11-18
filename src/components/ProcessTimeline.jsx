import { motion } from 'framer-motion'
import { Search, Brush, Droplet, Layers, Bacteria, Leaf, Palette, Wind, Sparkles, CheckCircle } from 'lucide-react'

const steps = [
  { title: 'Inspection', icon: Search, desc: 'Assess condition & identify material: leather, suede, nubuck, mesh, canvas.' },
  { title: 'Dusting & Dry Brushing', icon: Brush, desc: 'Soft brush removes surface dust & debris.' },
  { title: 'Deep Cleaning', icon: Droplet, desc: 'Sneaker-safe solutions, leather shampoo & foam cleaner with soft/medium/detail brushes.' },
  { title: 'Sole & Midsole Scrub', icon: Layers, desc: 'De-yellowing, whitening & stain breakdown.' },
  { title: 'Insole & Lining Sanitization', icon: Bacteria, desc: 'Anti-bacterial spray and deodorizing.' },
  { title: 'Leather Conditioning', icon: Leaf, desc: 'Oils, balms & creams to feed the leather.' },
  { title: 'Recoloring / Touch-Up', icon: Palette, desc: 'Pigment balancing, edge finishing & color restoration.' },
  { title: 'Drying Process', icon: Wind, desc: 'Room-temperature drying, no direct sunlight.' },
  { title: 'Finishing & Polishing', icon: Sparkles, desc: 'Wax shine or matte/neutral finish options.' },
  { title: 'Final Quality Check', icon: CheckCircle, desc: 'Before & after pictures and hand-off.' },
]

export default function ProcessTimeline(){
  return (
    <section id="process" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50">Cleaning & Restoration Steps</h2>
          <p className="mt-2 text-amber-100/80">Our quality-first approach in a clear, guided flow.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-700/40 via-white/10 to-transparent"/>
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.5, delay:i*0.05}}
                className={`relative md:grid md:grid-cols-2 items-center gap-10 ${i%2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`md:col-start-${i%2?2:1}`}>
                  <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <s.icon size={18} className="text-amber-200"/>
                    <p className="text-amber-50 font-medium">{s.title}</p>
                  </div>
                  <p className="mt-3 text-amber-100/80">{s.desc}</p>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
