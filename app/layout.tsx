import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RootProvider } from 'fumadocs-ui/provider';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Model Context Protocol (MCP)",
  description: "Connect AI models to external services with the Model Context Protocol (MCP)",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <RootProvider search={{
              options: {
                  type: 'static',
              },
          }}>
              {children}
          </RootProvider>
      </body>
    </html>
  )
}



import './globals.css'