import Link from 'next/link'
import React from 'react'
import NavItem from './item'

const Navbar = () => {
  return (
    <nav className='flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-400 items-end gap-4'>
      {/* logo */}
      <Link href="/" className='text-4xl px-4 py-2 mr-auto text-slate-600 font-sans font-bold uppercase tracking-widest visited:text-slate-800 border-4 border-slate-800 rounded-lg shadow-lg active:translate-y-0.5 transition-all duration-200'>Gallery</Link>

      {/* nav items */}
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

    </nav >
  )
}

export default Navbar

const navItems = [
  { label: 'Photo', url: "/?category=photo", },
  { label: 'Vector', url: "/?category=vector", },
]