// यह सर्वर-साइड कॉम्पोनेन्ट है
// पेज मेटाडेटा, फॉन्ट्स, ग्लोबल CSS जैसी चीजें हैंडल करता है
// ऐप के सभी रूट्स के लिए शेयर्ड लेआउट प्रदान करता है
// सभी मेटाडेटा (title, description आदि)
// सर्वर साइड डेटा फेचिंग  Sets up <html>, <head>, <body>, global fonts
// फॉन्ट डेफिनिशन   Defines the structure (HTML layout) of your app
// लोबल CSS/JS


import { Inter } from "next/font/google"
import Provider from "./provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
