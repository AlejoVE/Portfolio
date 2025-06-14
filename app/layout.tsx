import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alejandro Montilla - Full Stack Web Developer",
  description:
    "Full Stack Web Developer passionate about creating innovative solutions and building high-performance applications.",
  keywords: "web developer, full stack, react, node.js, javascript, typescript",
  authors: [{ name: "Alejandro Montilla" }],
  openGraph: {
    title: "Alejandro Montilla - Full Stack Web Developer",
    description:
      "Full Stack Web Developer passionate about creating innovative solutions and building high-performance applications.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
