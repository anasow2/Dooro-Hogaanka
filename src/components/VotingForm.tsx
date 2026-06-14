import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CANDIDATES, REGIONS } from '../data';
import { ShieldCheck, UserCheck, CheckCircle2, ChevronRight, ChevronLeft, Vote } from 'lucide-react';
import { toast } from 'sonner';

export default function VotingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    motherName: '',
    nationalId: '',
    region: '',
    candidateId: '',
    termsAccepted: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Fadlan geli magacaaga oo saddexan';
    if (!formData.motherName.trim()) newErrors.motherName = 'Fadlan geli magaca hooyada';
    if (!formData.nationalId.trim() || formData.nationalId.length < 5) newErrors.nationalId = 'Fadlan geli aqoonsi sax ah';
    if (!formData.region) newErrors.region = 'Fadlan dooro deegaankaaga';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: document.getElementById('voting-section')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.candidateId) {
      toast.error('Fadlan dooro musharaxa aad u codaynayso');
      return;
    }
    if (!formData.termsAccepted) {
      toast.error('Fadlan ogolow shuruudaha codaynta');
      return;
    }

    // Simulate API Custom Success
    toast.success('Waad ku mahadsan tahay! Codkaaga si guul leh ayaa loo diiwangeliyay', {
      duration: 5000,
      icon: <CheckCircle2 className="text-green-500" />
    });
    
    // Reset form after successful vote
    setTimeout(() => {
      setStep(1);
      setFormData({
        fullName: '',
        motherName: '',
        nationalId: '',
        region: '',
        candidateId: '',
        termsAccepted: false
      });
    }, 2000);
  };

  return (
    <section id="voting-section" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <ShieldCheck className="w-16 h-16 mx-auto text-national-blue mb-4" />
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
            Diiwaangelinta Codka
          </h2>
          <p className="text-gray-600">
            Fadlan raac tillaabooyinka hoose si aad u dhiibato codkaaga xorta ah. Nidaamkani waa mid ammaan ah oo qarsoodi ah.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors \${step >= 1 ? 'bg-national-blue text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
          <div className={`h-1 w-24 mx-2 rounded transition-colors \${step >= 2 ? 'bg-national-blue' : 'bg-gray-200'}`} />
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-colors \${step >= 2 ? 'bg-national-blue text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <div className="flex items-center gap-3 mb-8 border-b pb-4">
                  <UserCheck className="text-national-blue w-6 h-6" />
                  <h3 className="text-2xl font-bold font-serif text-charcoal">Xaqiijinta Cod-bixiyaha</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Magaca oo Saddexan</label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-national-blue focus:border-national-blue outline-none transition-all \${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                      placeholder="Tusaale: Axmed Jaamac Faarax"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Magaca Hooyada</label>
                    <input 
                      type="text" 
                      value={formData.motherName}
                      onChange={(e) => setFormData({...formData, motherName: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-national-blue focus:border-national-blue outline-none transition-all \${errors.motherName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                      placeholder="Tusaale: Faadumo Xasan Nuur"
                    />
                    {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Numbarka Aqoonsiga (ID)</label>
                      <input 
                        type="text" 
                        value={formData.nationalId}
                        onChange={(e) => setFormData({...formData, nationalId: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-national-blue focus:border-national-blue outline-none transition-all \${errors.nationalId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                        placeholder="SOM-123456789"
                      />
                      {errors.nationalId && <p className="text-red-500 text-xs mt-1">{errors.nationalId}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Deegaanka aad ka codaynayso</label>
                      <select 
                        value={formData.region}
                        onChange={(e) => setFormData({...formData, region: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-national-blue focus:border-national-blue outline-none transition-all bg-white \${errors.region ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">-- Dooro Deegaan --</option>
                        {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region}</p>}
                    </div>
                  </div>

                  <button 
                    onClick={handleNext}
                    className="w-full mt-8 bg-national-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-national-blue/20"
                  >
                    Sii Wad
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 relative"
              >
                <div className="flex items-center justify-between mb-8 border-b pb-4">
                  <div className="flex items-center gap-3">
                    <Vote className="text-national-blue w-6 h-6" />
                    <h3 className="text-2xl font-bold font-serif text-charcoal">Xulo Musharaxaaga</h3>
                  </div>
                  <button onClick={handleBack} className="text-gray-500 hover:text-national-blue flex items-center text-sm font-medium">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Dib u noqo
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {CANDIDATES.map(candidate => (
                      <label 
                        key={candidate.id} 
                        className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 \${formData.candidateId === candidate.id ? 'border-national-blue bg-national-blue/5' : 'border-gray-200 hover:border-national-blue/50 bg-white'}`}
                      >
                        <input 
                          type="radio" 
                          name="candidate" 
                          value={candidate.id}
                          checked={formData.candidateId === candidate.id}
                          onChange={() => setFormData({...formData, candidateId: candidate.id})}
                          className="w-5 h-5 text-national-blue border-gray-300 focus:ring-national-blue"
                        />
                        <div className="ml-4 flex items-center gap-4">
                          <img src={candidate.image} alt={candidate.fullName} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                          <div>
                            <p className="font-bold text-gray-900">{candidate.fullName}</p>
                            <p className="text-sm text-gray-500">{candidate.party}</p>
                          </div>
                        </div>
                        {formData.candidateId === candidate.id && (
                          <div className="absolute top-4 right-4 text-national-blue">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                        )}
                      </label>
                    ))}
                  </div>

                  <div className="bg-platinum p-4 rounded-xl mb-8 flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({...formData, termsAccepted: e.target.checked})}
                      className="mt-1 w-5 h-5 text-national-blue rounded border-gray-300 focus:ring-national-blue"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      Waan xaqiijinayaa in aan ahay muwaadin Soomaaliyeed, codkanina uu yahay mid aan si madax banaan u dhiibtay. Waan hubaa musharaxa aan doortay oo ma ihi qof la qasbay ama laaluush la siiyay.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-national-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all text-xl shadow-lg shadow-national-blue/30 flex justify-center items-center gap-2"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    Xaqiiji Codkaaga
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
