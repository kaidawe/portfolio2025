"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import goldFish from "../public/GoldfishLogo.png";
import { cormorant } from "../app/layout";

export default function Header({ onMouseEnter, onMouseLeave }) {
  const pathname = usePathname();
  
  // Define your navigation links.
  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
  ];
  
  return (
    <div className={`absolute top-0 left-half text-red-600 ${cormorant.className}`}>
      <section className="flex items-center gap-46">
        <div className="flex items-center gap-6">
          <Image 
            src={goldFish} 
            alt="Logo" 
            className="invert-90" 
            width={28} 
            height={28} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
          />
          <h1>Web Developer</h1>
          <h1>Product Design</h1>
        </div>
        <nav>
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={link.href} className="flex items-center">
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    pathname === link.href
                      ? "bg-red-600"
                      : "bg-transparent border border-[#505373]"
                  } transition-all duration-300 smooth hover:bg-red-600`}
                ></span>
                <a
                  href={link.href}
                  className={`transition-all duration-300 smooth hover:text-[#505373] ${
                    pathname === link.href ? "text-red-600" : "text-[#505373]"
                  }`}
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
