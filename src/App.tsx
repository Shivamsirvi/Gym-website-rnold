import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import MembershipPlans from './components/MembershipPlans';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-black" id="home">
      <Header />
      <Hero />
      <Programs />
      <MembershipPlans />
      <BookingForm />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
