import { motion } from 'framer-motion'
import { Wrench, Brush, Scissors, Droplet, Layers, Shirt, Palette, Hammer } from 'lucide-react'

const services = [
  {
    title: 'Shoe Laundry',
    icon: Brush,
    desc: 'Deep cleaning using sneaker-safe solutions for leather, suede, mesh and canvas.',
    points: ['Material-safe shampoos', 'Soft to medium brushes', 'Deodorizing & sanitization'],
    image: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Shoe Repairing',
    icon: Wrench,
    desc: 'Stitching, sole replacement, recoloring and edge finishing for a like-new look.',
    points: ['Sole & midsole works', 'Re-stitching', 'Color touch-up'],
    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Shoe Making',
    icon: Scissors,
    desc: 'Handmade leather shoes crafted to your fit. Premium hides, classic patterns.',
    points: ['Hand-lasted', 'Premium leathers', 'Custom finishes'],
    image: 'https://images.unsplash.com/photo-1550005819-bfa6c6be22e7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG9lJTIwTWFraW5nfGVufDB8MHx8fDE3NjM0ODY2NjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Bag & Jacket Services',
    icon: Shirt,
    desc: 'Cleaning, recoloring and full restorations for handbags and leather jackets.',
    points: ['Color restoration', 'Hardware polish', 'Edge painting'],
    image: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Services(){
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50">Services</h2>
          <p className="mt-2 text-amber-100/80">Select a category to explore. Booking happens on WhatsApp.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.6, delay: idx*0.1}}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="absolute inset-0" style={{backgroundImage:`url(${s.image})`, backgroundSize:'cover', backgroundPosition:'center', opacity:0.2}}/>
              <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-700/80 text-amber-50 border border-white/20">
                    <s.icon size={20}/>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-50">{s.title}</h3>
                </div>
                <p className="mt-3 text-amber-100/80">{s.desc}</p>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-amber-200/80">
                  {s.points.map(p => <li key={p} className="flex items-center gap-2">• {p}</li>)}
                </ul>
                <div className="mt-6">
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-amber-700/90 text-amber-50 border border-white/20">Book on WhatsApp</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
