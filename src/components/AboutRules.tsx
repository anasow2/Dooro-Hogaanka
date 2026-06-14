import { motion } from 'motion/react';
import { Lock, FileText, Users, Eye } from 'lucide-react';

export default function AboutRules() {
  const points = [
    {
      icon: <Lock className="w-8 h-8 text-national-blue" />,
      title: "100% Ammaan",
      desc: "Nidaamka codeynta waa mid si buuxda loo xafiday, codkaagana waa qarsoodi."
    },
    {
      icon: <Eye className="w-8 h-8 text-national-blue" />,
      title: "Daahfurnaan",
      desc: "Natiijada waxaa loola socon karaa si toos ah (Live) oo aan dhex-gal lahayn."
    },
    {
      icon: <Users className="w-8 h-8 text-national-blue" />,
      title: "1 Cod, 1 Qof",
      desc: "Muwaadin kasta waxa uu xaq u leeyahay in uu dhiibto hal cod oo kaliya."
    },
    {
      icon: <FileText className="w-8 h-8 text-national-blue" />,
      title: "Odoroska Sharciga",
      desc: "Dhammaan codadka waxaa la waafajinayaa shuruucda komishanka doorashooyinka."
    }
  ];

  return (
    <section className="py-24 bg-platinum border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
            Ku Saabsan & Shuruucda
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Doorashada madaxweynaha qaranka ee 2026 waa fursad taariikhi ah oo muwaadin kasta uu uga qayb qaadanayo dhismaha mustaqbalka dalka. Nabad, midnimo iyo horumar ayaa saldhig u ah hiigsigeena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow group"
            >
              <div className="bg-platinum w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="font-bold text-xl text-charcoal mb-3 font-serif">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
