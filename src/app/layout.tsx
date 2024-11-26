"use client"
import ProvideR from '../lib/Provider/Provider'
import Header from '../app/(client)/components/Header'
import "./globals.css";
import Container from '@mui/material/Container';
import Footer from '../app/(client)/components/Footer.jsx'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body> 
    <Container maxWidth="lg">
    <ProvideR>
     < Header />
     {children}
     </ProvideR>
    </Container>
    <Footer/>
      </body>
    </html>
  );
}
