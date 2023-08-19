import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-3 py-3 md:py-10 md:px-20">{children}</main>
      <Footer />
    </div>
  );
}
