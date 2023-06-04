import { Header } from "@/components/Header";
import "./globals.css";
import { AppProvider } from "@/hooks/useApp";
import { Footer } from "@/components/Footer";
import { Content } from "@/components/Content";
import { Body } from "@/components/Body";

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
      {/* transition-all duration-300 ease-out */}
        <Body>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Body>
      </AppProvider>
    </html>
  );
}
