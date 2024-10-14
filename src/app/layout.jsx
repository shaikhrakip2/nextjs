

import "./globals.css";
import Footer from "./components/Footer";
import Main from "@/app/components/Main";
import Header from "@/app/components/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="index-page">
        <Header />  
        <div style={{ display: "flex" }}>
          <Main />
          <main style={{ flex: 1 }}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
