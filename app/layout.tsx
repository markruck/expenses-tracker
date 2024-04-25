import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Finance tracker",
  description:
    "A simple finance tracker to help you keep track of your income and expenses.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="base-layout">
          <Header />
          <main className="flex-auto" >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
