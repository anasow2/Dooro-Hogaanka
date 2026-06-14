import { Twitter, Facebook, Instagram, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Footer() {
  const handleShare = () => {
    toast.success('Waad ku mahadsan tahay wadaagista! #WaanCodeeyay2026', {
      icon: <Share2 className="w-5 h-5 text-national-blue" />
    });
  };

  return (
    <footer className="bg-charcoal text-platinum py-16 border-t-[8px] border-national-blue">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 drop-shadow">Dooro Hogaanka</h3>
            <p className="text-platinum/70 mb-6 max-w-sm">
              Madal casri ah oo loogu talagalay doorashooyinka madaxtinimada Soomaaliya 2026. Codkaagu waa mustaqbalkaaga.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 bg-national-blue/20 hover:bg-national-blue text-platinum px-4 py-2 rounded-full transition-colors text-sm font-medium"
              >
                <Share2 className="w-4 h-4" />
                La wadaag asxaabta
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Xiriirka Degdega ah</h4>
            <ul className="space-y-3 text-platinum/70">
              <li><a href="#" className="hover:text-national-blue transition-colors">Dastuurka Qaranka</a></li>
              <li><a href="#" className="hover:text-national-blue transition-colors">Shuruucda Doorashooyinka</a></li>
              <li><a href="#" className="hover:text-national-blue transition-colors">Natiijadii Hore</a></li>
              <li><a href="#" className="hover:text-national-blue transition-colors">Caawinaad & Su'aalo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Guddiga Doorashooyinka</h4>
            <ul className="space-y-3 text-platinum/70">
              <li>Email: info@doorasho.so</li>
              <li>Telefoon: 444 (Toll-free)</li>
              <li>Xarunta: Muqdisho, Soomaaliya</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-national-blue transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-national-blue transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-national-blue transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-platinum/50">
          <p>&copy; 2026 Dooro Hogaanka. Dhammaan xuquuqdu way xifdisan tahay.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Nidaamka waa online
          </div>
        </div>
      </div>
    </footer>
  );
}
