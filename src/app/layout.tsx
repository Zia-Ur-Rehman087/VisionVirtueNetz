"use client"
// import type { Metadata } from "next";
import ProvideR from '../lib/Provider/Provider'
import Header from '../app/(client)/components/Header'
import "./globals.css";
import Container from '@mui/material/Container';

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Developed by me",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body> 
      <Container>
      <ProvideR>
     < Header />
     {children}
     </ProvideR>
      </Container>
      </body>
    </html>
  );
}
