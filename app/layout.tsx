import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WheelDeals',
  description: 'Your One-Stop Auto Marketplace. Buy, Sell, and Rent Cars with Ease. Explore Quality Vehicles and Seamless Transactions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
