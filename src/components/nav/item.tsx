import Link from 'next/link'
import { FC } from 'react';

type TProps = { label: string; url: string }
const NavItem: FC<TProps> = ({ label, url }) => {
  return (
    <Link href={url} className="inline-block p-2 text-xl text-slate-800 hover:text-white tracking-wide uppercase relative group z-20 after:content-[''] after:absolute after:left-0 after:bottom-1 after:bg-slate-800 after:w-full after:h-px after:hover:h-8 after:-z-30 after:transition-all transition-all duration-200 active:translate-y-0.5 font-semibold">{label}</Link>
  )
}

export default NavItem