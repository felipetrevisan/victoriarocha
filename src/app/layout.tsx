import { Header } from "@/components/Header";
import "./globals.css";
import { AppProvider } from "@/hooks/useApp";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Victória Rocha",
  description:
    "Site profissional da atriz Victória Rocha. DRT 31506 - SP. Teatro, Cinema e TV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AppProvider>
        <body className="bg-zinc-950/90 transition-all ease-out duration-300">
          <Header />
          <main>{children}</main>
          <div className="bg-purple-500 pointer-events-none fixed top-14 right-0 z-20 h-52 w-52 rounded-full blur-[100px] opacity-50"></div>
          <div className="bg-pink-900 pointer-events-none fixed bottom-14 left-0 z-20 h-52 w-52 rounded-full blur-[100px] opacity-50"></div>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
