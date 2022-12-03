'use client'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Appbar from './appbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>
        <body>
            <ThemeProvider enableSystem={true} attribute="class">
              <Appbar/>
              {children}
            </ThemeProvider>
        </body>
    </html>
  )
}
