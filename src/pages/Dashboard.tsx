import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Users, MapPin, Activity, PieChart, ArrowUpRight } from 'lucide-react';
import { CANDIDATES, INITIAL_STATS } from '../data';

export default function Dashboard() {
  const [totalVotes, setTotalVotes] = useState(0);
  const [candidateStats, setCandidateStats] = useState(() => 
    CANDIDATES.map(c => ({ ...c, votes: 0, percentage: 0 }))
  );
  
  useEffect(() => {
    // Simulate fetching dashboard data
    const currentTotal = INITIAL_STATS.reduce((acc, curr) => acc + curr.votes, 0);
    
    // Distribute among candidates for demo purposes
    let remaining = currentTotal;
    const simulatedStats = CANDIDATES.map((c, i) => {
      // Create a deterministic but varied distribution
      let cVotes = 0;
      if (i === CANDIDATES.length - 1) {
        cVotes = remaining;
      } else {
        cVotes = Math.floor(currentTotal * (0.35 - (i * 0.05)));
        remaining -= cVotes;
      }
      return {
        ...c,
        votes: cVotes,
        percentage: Math.round((cVotes / currentTotal) * 100)
      };
    }).sort((a, b) => b.votes - a.votes);

    setTotalVotes(currentTotal);
    setCandidateStats(simulatedStats);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-charcoal text-white h-16 flex items-center px-6 justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Activity className="text-national-blue" />
          <h1 className="font-serif font-bold text-xl uppercase tracking-widest pl-2">Doorashada Dashboard</h1>
        </div>
        <Link to="/" className="flex items-center gap-2 hover:text-national-blue transition-colors text-sm font-medium">
          <Home className="w-4 h-4" />
          Ku noqo Goobta Codaynta
        </Link>
      </div>

      <div className="p-6 max-w-7xl mx-auto space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Tirada Codadka (Guud ahaan)</p>
              <p className="text-3xl font-bold text-charcoal">{totalVotes.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-50 text-national-blue rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Deegaanada Codeeyay</p>
              <p className="text-3xl font-bold text-charcoal">{INITIAL_STATS.length}</p>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Cidda Horaysa Hada</p>
              <p className="text-2xl font-bold text-charcoal truncate pr-2">{candidateStats[0]?.fullName}</p>
            </div>
            <div className="p-3 bg-red-50 text-red-500 rounded-lg">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Candidate Leaderboard */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-national-blue" />
              <h2 className="text-xl font-bold text-charcoal">Natiijada Musharixiinta</h2>
            </div>
            
            <div className="space-y-6">
              {candidateStats.map((candidate, idx) => (
                <div key={candidate.id} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${idx === 0 ? 'bg-national-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-bold text-charcoal">{candidate.fullName}</p>
                        <p className="text-xs text-gray-500">{candidate.party}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-national-blue">{candidate.votes.toLocaleString()}</p>
                      <p className="text-xs font-mono text-gray-500">{candidate.percentage}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.percentage}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                      className={`h-2 rounded-full ${idx === 0 ? 'bg-national-blue' : 'bg-gray-400'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Region Stats */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-national-blue" />
              <h2 className="text-xl font-bold text-charcoal">Codadka Deegaanada</h2>
            </div>

            <div className="space-y-4">
              {INITIAL_STATS.map((stat, idx) => (
                <div key={stat.region} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <span className="font-medium text-gray-700">{stat.region}</span>
                  <div className="text-right">
                    <p className="font-bold text-charcoal">{stat.votes.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{stat.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm font-medium text-blue-900 mb-1">Live Updates Active</p>
              <p className="text-xs text-blue-700">The dashboard is fetching data securely from the voting nodes across the country.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
