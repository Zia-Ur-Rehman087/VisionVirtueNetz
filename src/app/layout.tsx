"use client"
import ProvideR from '../lib/Provider/Provider'
import Header from '../app/(client)/components/Header'
import "./globals.css";
import Container from '@mui/material/Container';
import Footer from '../app/(client)/components/Footer.jsx'
import {Chakra_Petch } from 'next/font/google'
const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: '400', 
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body  style={{fontFamily : chakra.style.fontFamily}}>
    <ProvideR>
    < Header /> 
    <Container maxWidth="lg">
    
     {children}
    </Container>
    <Footer/>
    </ProvideR>
      </body>
    </html>
  );
}
