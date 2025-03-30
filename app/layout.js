
import { Cormorant_Garamond, Space_Mono} from "next/font/google";
import "./globals.scss";

export const Space_Mono_Regular = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-space-mono',
})

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '300', '700'],
  variable: '--font-cormorant',
})
 
// export const metadata = {
//   title: "Haley Kai Dawe Portfolio",
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
//   description: "Haley Kai Dawe Portfolio",
//   keywords: "Haley Kai Dawe, Portfolio, Software Engineer, Web Developer, UX/UI Designer, Frontend Developer, Full Stack Developer",
//   authors: [{ name: "Haley Kai Dawe", url: "https://www.haleydawe.com" }],
//   creator: "Haley Kai Dawe",
//   publisher: "Haley Kai Dawe",
  
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Space_Mono_Regular.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
