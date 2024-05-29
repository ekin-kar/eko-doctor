import { Lora } from "next/font/google";
import "./globals.css";
import SmallHeader from "@/components/SmallHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "EkoDoctor",
  description: "Your health is our priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} min-h-screen flex  flex-col items-center`}
      >
        <SmallHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
