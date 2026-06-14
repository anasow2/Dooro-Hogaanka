import { Toaster } from 'sonner';
import Hero from './components/Hero';
import CandidateGallery from './components/CandidateGallery';
import LiveStats from './components/LiveStats';
import VotingForm from './components/VotingForm';
import AboutRules from './components/AboutRules';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-platinum flex flex-col font-sans">
      <Toaster position="top-center" richColors theme="light" />
      <main className="flex-grow">
        <Hero />
        <CandidateGallery />
        <LiveStats />
        <VotingForm />
        <AboutRules />
      </main>
      <Footer />
    </div>
  );
}
