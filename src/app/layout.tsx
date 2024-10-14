import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'; // If you have global styles
import { Analytics } from "@vercel/analytics/react"

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
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