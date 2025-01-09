import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/header'
import { ToastContainer } from "react-toastify";
import Footer from './components/footer';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreditFix Pro Credit Card - Exclusive Rewards, Low Rates & Fast Approval',
  description: 'Apply for the CreditFix Pro Credit Card and enjoy exclusive rewards, competitive low-interest rates, and a seamless online application process. Start saving and earning today!',
  keywords: 'CreditFix Pro Credit Card, best credit card offers, low interest credit card, quick credit card approval, online credit card application, exclusive rewards, financial solutions, cashback credit card, rewards credit card, CreditFix benefits',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <ToastContainer/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
