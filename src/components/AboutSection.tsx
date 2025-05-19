import React from 'react';
import { Music, Heart, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-burgundy-light opacity-20 blur-3xl"></div>
      <div className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-primary-100 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Left Side - Icon */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="p-6 rounded-full bg-burgundy-light flex items-center justify-center relative z-10">
                <Heart size={64} className="text-primary-100" />
              </div>
              <div className="absolute -inset-4 rounded-full bg-primary-100 opacity-20"></div>
              <div className="absolute -inset-8 rounded-full border border-primary-100 opacity-30"></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="md:w-2/3">
            <div className="flex items-center space-x-2 mb-4">
              <Music size={20} className="text-primary-100" />
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Hakkımızda</h2>
            </div>
            
            <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
              Müzikhane, her yaştan müziksever için birebir enstrüman eğitimi, müzik okullarına hazırlık, 
              stüdyo kayıt ve müzik teknolojileri hizmeti sunan bir sanat evidir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-burgundy-light bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                <Star size={28} className="mb-2 text-primary-100" />
                <h3 className="font-medium text-white mb-1">Uzman Eğitmenler</h3>
                <p className="text-sm text-primary-100">Alanında uzman, deneyimli müzisyenlerle çalışıyoruz</p>
              </div>
              
              <div className="bg-burgundy-light bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                <Star size={28} className="mb-2 text-primary-100" />
                <h3 className="font-medium text-white mb-1">Kişisel Gelişim</h3>
                <p className="text-sm text-primary-100">Her öğrenciye özel program ve ilerleme planı</p>
              </div>
              
              <div className="bg-burgundy-light bg-opacity-30 p-4 rounded-lg flex flex-col items-center text-center">
                <Star size={28} className="mb-2 text-primary-100" />
                <h3 className="font-medium text-white mb-1">Modern Tesisler</h3>
                <p className="text-sm text-primary-100">Tam donanımlı stüdyo ve eğitim odaları</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;