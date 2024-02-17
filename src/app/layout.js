import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500'] });

export const metadata = {
  title: "AgriCo",
  description: "Created by Shark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={poppins.className} style={{
        paddingTop: '7px'
      }}>
        <main className="" style={{
          border: '1px solid transparent'
        }}>
          {children}
        </main></body>
    </html>
  );
}
