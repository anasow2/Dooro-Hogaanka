import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowDown, Vote, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/mogadishu_sunset_bg_1781435594991.jpg';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Election Day: 2026-05-15
    const targetDate = new Date('2026-05-15T00:00:00Z').getTime();
    return Math.max(0, targetDate - Date.now());
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date('2026-05-15T00:00:00Z').getTime();
      setTimeLeft(Math.max(0, targetDate - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const handleScrollToVote = () => {
    document.getElementById('voting-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToResults = () => {
    document.getElementById('live-stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white pt-20 pb-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      <div className="absolute inset-0 bg-charcoal/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-national-blue/30" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-platinum text-sm font-medium tracking-wide mb-6 uppercase">
            Somali Presidential Election 2026
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-lg">
            Dooro Hogaanka Sugan<br className="hidden md:block"/> ee Soomaaliya
          </h1>
          <p className="text-xl md:text-2xl text-platinum/90 max-w-2xl mx-auto font-light">
            "Codkaagu waa Mustaqbalkaaga"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 md:gap-8 justify-center mb-12"
        >
          {[
            { label: 'Maalmood', value: days },
            { label: 'Saacadood', value: hours },
            { label: 'Daqiiqadood', value: minutes },
            { label: 'Ilbiriqsi', value: seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 mb-2 shadow-xl">
                <span className="text-2xl md:text-5xl font-bold font-mono tracking-tighter">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs md:text-sm font-medium text-platinum/80 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center items-center"
        >
          <button 
            onClick={handleScrollToVote}
            className="flex items-center justify-center gap-2 bg-white text-national-blue hover:bg-platinum hover:shadow-lg hover:shadow-white/20 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg"
          >
            <Vote className="w-5 h-5" />
            U Codee Musharaxaaga
          </button>
          
          <Link 
            to="/dashboard"
            className="flex items-center justify-center gap-2 bg-national-blue hover:bg-blue-600 text-white transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-500/30"
          >
            <Activity className="w-5 h-5" />
            Dashboard-ka Natiijada
          </Link>

          <button 
            onClick={handleScrollToResults}
            className="flex items-center justify-center gap-2 bg-charcoal/50 hover:bg-charcoal/80 border border-white/30 text-white transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm"
          >
            <ArrowDown className="w-5 h-5" />
            Eeg Codadka Live
          </button>
        </motion.div>
      </div>
    </section>
  );
}
