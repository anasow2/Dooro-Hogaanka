import { motion } from 'motion/react';
import { CANDIDATES } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function CandidateGallery() {
  const handleVoteClick = (id: string) => {
    // Scroll to voting section and pre-select maybe?
    document.getElementById('voting-section')?.scrollIntoView({ behavior: 'smooth' });
    // In a full implementation, we could pass this to context or state
  };

  return (
    <section id="candidates" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Musharixiinta Madaxweynaha
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Baro musharixiinta u taagan xilka madaxweynaha Soomaaliya, akhriso ajendayaashooda, dooro hogaanka aad aaminsan tahay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CANDIDATES.map((candidate, idx) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-platinum cursor-pointer border-2 border-transparent hover:border-national-blue hover:shadow-national-blue/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={candidate.image} 
                  alt={candidate.fullName}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />
                
                {/* Gradient overlay always present at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left z-10 transition-transform duration-300 transform group-hover:translate-y-[-120px]">
                  <h3 className="font-serif text-2xl font-bold mb-1">{candidate.fullName}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-national-blue text-white text-xs px-2 py-1 rounded font-semibold tracking-wider uppercase">
                      {candidate.party}
                    </span>
                  </div>
                  <p className="text-platinum/80 italic">"{candidate.slogan}"</p>
                </div>

                {/* Additional info revealed on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 pt-0 bg-charcoal/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out h-[150px] flex flex-col justify-between z-20">
                  <div>
                    <h4 className="text-national-blue text-sm font-bold uppercase tracking-wider mb-2">Ajendayaasha Ugu Muhiimsan</h4>
                    <ul className="space-y-1">
                      {candidate.agendas.map((agenda, i) => (
                        <li key={i} className="flex items-center text-sm text-platinum">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-national-blue/80" />
                          {agenda}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => handleVoteClick(candidate.id)}
                    className="w-full bg-national-blue hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors mt-3"
                  >
                    Dooro Musharaxan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
