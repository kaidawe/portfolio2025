

import { Jost, } from "next/font/google";
import "./globals.scss";


export const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
})
 
export const metadata = {
  title: "Haley Kai Dawe Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Haley Kai Dawe Portfolio",
  keywords: "Haley Kai Dawe, Portfolio, Software Engineer, Web Developer, UX/UI Designer, Frontend Developer, Full Stack Developer",
  authors: [{ name: "Haley Kai Dawe", url: "https://www.haleydawe.com" }],
  creator: "Haley Kai Dawe",
  publisher: "Haley Kai Dawe",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
