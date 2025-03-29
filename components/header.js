'use client';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import goldFish from '../public/GoldfishLogo.png';

export default function Header() {
  const pathname = usePathname();
  
  // Define your navigation links.
  const links = [
    { href: '/', label: 'Work' },
    { href: '/about', label: 'About' },
  ];
  
  return (
    <div className="absolute top-0 left-half">
      <section className="flex items-center gap-24">
        <div className="logo">
          <Image src={goldFish} alt="Logo" className="invert-90" width={28} height={28} />
        </div>
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.href} className="flex items-center">
                {/* Dot indicator: highlight orange if active, gray otherwise */}
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    pathname === link.href ? 'bg-orange-500' : 'bg-gray-500'
                  } transition-all duration-300 smooth hover:bg-orange-500`}
                ></span>
                <a 
                  href={link.href} 
                  className={`transition-all duration-300 smooth hover:text-black ${pathname === link.href ? 'text-orange-500' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}
