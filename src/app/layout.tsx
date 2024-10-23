import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; // If you have global styles
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next'; // Import Metadata from next

// Define metadata for the layout
export const metadata: Metadata = {
  title: "Blog about Testing", // Replace with your page title
  description: "Different approaches for manual, automation or vulnerability testing", // Replace with your page description
  keywords: ["QA", "qauality assurance", "automation", "sergeipetrukhin", "Selenium", "playwright"], // Optional: Add relevant keywords
  robots: {
    index: true,
    follow: true,
  }
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="WuU1ZRYVUPEzdJtofU2IrpufmOyvGoj83_xfFd9gZY4" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
