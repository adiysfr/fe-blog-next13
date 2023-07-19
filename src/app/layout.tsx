import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adiysfr',
  description: 'Welcome to my blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>  
      </body>
    </html>
  )
}
