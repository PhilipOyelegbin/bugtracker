import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(components)/Navbar";
import { Footer } from "./(components)/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata = {
  title: "Bug Tracker",
  description: "A bug tracking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        <main className="p-5 lg:px-20 h-svh overflow-y-scroll">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
