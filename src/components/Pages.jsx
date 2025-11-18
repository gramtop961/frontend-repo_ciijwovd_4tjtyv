import { motion } from 'framer-motion'
import Hero3D from './Hero3D'
import Services from './Services'
import ProcessTimeline from './ProcessTimeline'
import Gallery from './Gallery'

export function HomePage(){
  return (
    <div>
      <Hero3D/>
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-amber-50">About the Studio</h3>
              <p className="mt-2 text-amber-100/80">We are a premium leather care studio offering deep cleaning, repairs, sole works and bespoke shoe making. Our mission is to extend product life and elevate your everyday wear.</p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-block mt-4 px-5 py-2.5 rounded-full bg-amber-700/90 text-amber-50 border border-white/20">Quick WhatsApp Booking</a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Cleaning','Repairing','Sole Works','Custom Craft'].map((t)=> (
                <div key={t} className="h-36 rounded-xl bg-[url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)] bg-cover bg-center border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <p className="absolute bottom-3 left-3 text-amber-50 font-medium">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <ProcessTimeline/>
      <Gallery/>
    </div>
  )
}

export function ServicesPage(){
  return (
    <div>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-amber-50 mb-6">Our Services</h1>
          <p className="text-amber-100/80 max-w-3xl">From sneaker-safe laundry to full leather restorations and handcrafted shoe making, explore our offerings below. Tap any category to book via WhatsApp.</p>
        </div>
      </section>
      <Services/>
    </div>
  )
}

export function AboutPage(){
  const team = [
    {name:'Master Artisan', role:'Head Cobbler', img:'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop'},
    {name:'Leather Specialist', role:'Cleaning & Care', img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop'},
    {name:'Colorist', role:'Recoloring & Finishing', img:'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop'},
  ]
  return (
    <div>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-amber-50 mb-6">Our Story</h1>
          <p className="text-amber-100/80 max-w-3xl">Born from a love for leather, MR BOOT began as a small workshop and grew into a studio focused on restoration craft. We believe in slow, meticulous work and premium materials—bringing your essentials back to life with care.</p>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-amber-50 mb-6">The Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i)=> (
              <motion.div key={m.name} whileHover={{y:-6}} transition={{type:'spring', stiffness:200, damping:18}} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="h-56" style={{backgroundImage:`url(${m.img})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
                <div className="p-4">
                  <p className="text-amber-50 font-medium">{m.name}</p>
                  <p className="text-amber-200/80 text-sm">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export function GalleryPage(){
  return (
    <div>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-amber-50 mb-2">Transformations</h1>
          <p className="text-amber-100/80">Before-after sliders and a curated gallery across shoes, bags and jackets.</p>
        </div>
      </section>
      <Gallery/>
    </div>
  )
}

export function ContactPage(){
  return (
    <div>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-bold text-amber-50 mb-4">Contact & Booking</h1>
            <div className="space-y-2 text-amber-100/80">
              <p>Phone: +91 99999 99999</p>
              <p>Email: hello@mrboot.studio</p>
              <p>Location: Your City • India</p>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-amber-50 font-medium mb-2">WhatsApp Booking</p>
              <p className="text-amber-100/80">Send pictures of your shoes on WhatsApp. Our expert will guide you with pricing, restoration options, and pickup availability.</p>
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-block mt-4 px-5 py-2.5 rounded-full bg-emerald-600 text-white border border-white/20">Message on WhatsApp</a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-50 mb-4">Find Us</h2>
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191127086983!2d-122.420679!3d37.778519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzQyLjciTiAxMjLCsDI1JzE0LjQiVw!5e0!3m2!1sen!2sus!4v1616620161896!5m2!1sen!2sus"
                width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
