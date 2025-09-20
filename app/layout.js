import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "عيادة العيون - أفضل رعاية لعينيك في مصر | Eye Care Clinic Egypt",
  description: "عيادة متخصصة في طب وجراحة العيون بأحدث التقنيات. فحص شامل، عمليات الليزك، علاج المياه البيضاء والزرقاء. احجز استشارتك الآن.",
  keywords: "عيادة العيون، طبيب عيون، الليزك، المياه البيضاء، فحص النظر، القاهرة، مصر",
  author: "Eye Care Clinic",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "عيادة العيون - أفضل رعاية لعينيك في مصر",
    description: "عيادة متخصصة في طب وجراحة العيون بأحدث التقنيات",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "عيادة العيون - أفضل رعاية لعينيك في مصر",
    description: "عيادة متخصصة في طب وجراحة العيون بأحدث التقنيات",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
