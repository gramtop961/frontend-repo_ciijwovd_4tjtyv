import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero3D(){
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-transparent"/>
      <motion.div style={{ y, opacity }} className="h-[70vh] md:h-[80vh]">
        {/* Spline 3D scene with leather shoe (placeholder scene id; can be swapped) */}
        <Spline scene="https://prod.spline.design/0fd6yGfSY7v2Tn8P/scene.splinecode" />
      </motion.div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.8}} className="text-4xl md:text-6xl font-black tracking-tight text-amber-50 drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]">
              Revive. Restore. Remake.
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration:0.8}} className="mt-4 text-amber-100/80 text-lg md:text-xl">
              Premium shoe laundry, repairing, handmade shoe making and leather care services crafted with a quality-first approach.
            </motion.p>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration:0.8}} className="mt-8 flex gap-3">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-amber-700/90 hover:bg-amber-700 text-amber-50 border border-white/20 shadow-lg shadow-amber-900/30">
                WhatsApp Booking
              </a>
              <a href="#process" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-amber-100 border border-white/10">
                How we restore
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
