import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Instagram, Facebook, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-neutral-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-stone-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 grid place-items-center">
            <span className="text-xs font-black tracking-wider text-amber-50">MB</span>
          </div>
          <div className="leading-tight">
            <p className="text-amber-50 font-semibold">MR BOOT</p>
            <p className="text-xs text-amber-200/70">Leather Care Studio</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`text-sm transition-colors ${isActive ? 'text-amber-200' : 'text-amber-100/70 hover:text-amber-100'}`}>
              {n.label}
            </NavLink>
          ))}
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-full bg-amber-700/80 hover:bg-amber-700 text-amber-50 border border-white/10 shadow-md shadow-amber-900/20">
            WhatsApp Booking
          </a>
        </div>

        <button className="md:hidden p-2 text-amber-100" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 backdrop-blur-xl bg-neutral-900/60 border-t border-white/10">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`block px-3 py-2 rounded-lg ${isActive?'bg-white/5 text-amber-100':'text-amber-100/80 hover:text-amber-100 hover:bg-white/5'}`}>{n.label}</NavLink>
          ))}
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="block px-3 py-2 rounded-lg bg-amber-700/80 text-amber-50 text-center">WhatsApp Booking</a>
        </div>
      )}
    </header>
  )
}

function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10 bg-neutral-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8 text-amber-100/80">
        <div>
          <p className="text-amber-50 font-semibold mb-2">MR BOOT</p>
          <p className="text-sm">Shoe Laundry • Repairing • Making • Leather Care</p>
          <p className="text-xs mt-3 text-amber-200/60">Premium workshop for shoes, bags & jackets.</p>
        </div>
        <div>
          <p className="text-amber-50 font-medium mb-3">Contact</p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><Phone size={16}/> +91 99999 99999</p>
            <p className="flex items-center gap-2"><Mail size={16}/> hello@mrboot.studio</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> Your City • India</p>
          </div>
        </div>
        <div>
          <p className="text-amber-50 font-medium mb-3">Follow</p>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Instagram size={16}/></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"><Facebook size={16}/></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-amber-200/50 pb-8">© {new Date().getFullYear()} MR BOOT. All rights reserved.</div>
    </footer>
  )
}

function FloatingWhatsApp(){
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20MR%20BOOT%2C%20I%20want%20to%20book%20a%20cleaning/restoration.%20Sharing%20photos%20on%20WhatsApp."
      target="_blank" rel="noreferrer"
      className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-6 group"
      aria-label="WhatsApp Booking"
    >
      <div className="relative">
        <div className="absolute inset-0 blur-xl opacity-40 bg-emerald-500/50 rounded-full group-hover:opacity-60 transition"/>
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white grid place-items-center shadow-lg shadow-emerald-900/40 border border-white/20">
          <MessageCircle size={22}/>
        </div>
      </div>
    </a>
  )
}

export default function Layout(){
  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_600px_at_20%_0%,rgba(245,158,11,0.06),transparent),radial-gradient(800px_500px_at_80%_30%,rgba(120,53,15,0.08),transparent)] bg-neutral-950 text-amber-100">
      <div className="fixed inset-0 -z-10 opacity-[0.08]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />
      <Navbar/>
      <main className="pt-16">
        <Outlet/>
      </main>
      <Footer/>
      <FloatingWhatsApp/>
    </div>
  )
}
