import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { INITIAL_STATS } from '../data';
import { RegionStats } from '../types';
import { Activity } from 'lucide-react';

export default function LiveStats() {
  const [stats, setStats] = useState<RegionStats[]>(INITIAL_STATS);
  const [totalVotes, setTotalVotes] = useState(INITIAL_STATS.reduce((acc, curr) => acc + curr.votes, 0));

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(currentStats => {
        const updated = currentStats.map(stat => ({
          ...stat,
          votes: stat.votes + Math.floor(Math.random() * 100),
        }));
        
        const newTotal = updated.reduce((acc, curr) => acc + curr.votes, 0);
        setTotalVotes(newTotal);

        // Recalculate percentages
        return updated.map(stat => ({
          ...stat,
          percentage: Math.round((stat.votes / newTotal) * 100)
        })).sort((a, b) => b.votes - a.votes);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const mostPopular = stats[0];

  return (
    <section id="live-stats" className="py-24 bg-platinum relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-national-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-charcoal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
                Natiijada Live-ka ah
              </h2>
            </div>
            <p className="text-gray-600">Ilaa hadda codadka la dhiibtay ee la xaqiijiyay weeye.</p>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Tirada Guud ee Codadka</p>
            <p className="text-4xl md:text-5xl font-mono font-bold text-national-blue">
              {totalVotes.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {stats.map((stat, idx) => (
              <div key={stat.region} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-charcoal">{stat.region}</span>
                  <span className="font-mono text-national-blue font-bold">{stat.votes.toLocaleString()} cod</span>
                </div>
                <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-national-blue rounded-full"
                  />
                </div>
                <div className="mt-1 text-right text-xs text-gray-500 font-mono">
                  {stat.percentage}%
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-charcoal text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <Activity className="absolute -bottom-4 -right-4 w-32 h-32 text-national-blue opacity-20" />
              <h3 className="text-xl font-serif mb-6 text-platinum">Faahfaahinta Deegaanada</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-platinum/60 uppercase tracking-wider mb-2">Deegaanka Ugu Cadcad</p>
                  <p className="text-3xl font-bold text-national-blue mb-1">{mostPopular?.region}</p>
                  <p className="text-sm">{mostPopular?.percentage}% wadarta codadka</p>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div>
                  <p className="text-sm text-platinum/60 uppercase tracking-wider mb-2">Xaaladda Codaynta</p>
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircleIcon />
                    <span className="font-medium">Nabad & Xasilooni</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
