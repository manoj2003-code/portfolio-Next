// provider.js = themes, libraries, context
// यह क्लाइंट-साइड कॉम्पोनेन्ट है ('use client' डायरेक्टिव के साथ)
// सभी क्लाइंट-साइड फंक्शनैलिटी (जैसे Chakra UI प्रोवाइडर) को हैंडल करता है
// This file contains context providers like:  Chakra UI , Tailwind Dark Mode Theme , Redux Store , React Query Provider, Auth Provider
// सभी क्लाइंट साइड प्रोवाइडर्स (ChakraUI, Redux आदि)
// यूजर इंटरैक्शन लॉजिक   Wraps your app with global context or libraries
// स्टेट मैनेजमेंट   UI/theme/state provider
// कस्टम हुक्स

"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}


