import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppBubble } from './components/WhatsAppBubble';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <Clients />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <WhatsAppBubble />
      </div>
    </ThemeProvider>
  );
}

export default App;