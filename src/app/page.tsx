import Head from 'next/head';
import Header from '../app/components/Header';
import BlogList from '../app/components/BlogList';
import Footer from '../app/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Make div take full height */}
      <Head>
        <title>My Testing Blog</title>
        <meta name="description" content="A blog about testing and test automation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow container mx-auto px-4 py-8"> {/* Grow to fill space */}
        <h1 className="text-4xl font-bold mb-4">Welcome to My Testing Blog</h1>
        <p className="text-lg mb-8">
          Here you will find articles and tutorials on various testing frameworks, automation tools, and best practices.
        </p>

        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;