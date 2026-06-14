import Hero from '../components/Hero';
import CandidateGallery from '../components/CandidateGallery';
import LiveStats from '../components/LiveStats';
import VotingForm from '../components/VotingForm';
import AboutRules from '../components/AboutRules';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <CandidateGallery />
        <LiveStats />
        <VotingForm />
        <AboutRules />
      </main>
      <Footer />
    </>
  );
}
