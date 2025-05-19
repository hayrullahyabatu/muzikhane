import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

const PrepSection: React.FC = () => {
  return (
    <section 
      id="prep" 
      className="py-20 bg-burgundy-dark bg-opacity-40 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Left Side - Image */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg" 
                alt="Müzik Öğrencileri" 
                className="rounded-xl overflow-hidden shadow-xl"
              />
              <div className="absolute inset-0 bg-burgundy opacity-30 rounded-xl"></div>
              
              {/* Success Stats */}
              <div className="absolute -bottom-6 -right-6 bg-burgundy p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award size={20} className="text-primary-100" />
                  <div>
                    <h4 className="text-white font-semibold">%85</h4>
                    <p className="text-primary-100 text-xs">Başarı Oranı</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-burgundy p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <GraduationCap size={20} className="text-primary-100" />
                  <div>
                    <h4 className="text-white font-semibold">120+</h4>
                    <p className="text-primary-100 text-xs">Mezun Öğrenci</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={24} className="text-primary-100" />
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Müzik Okullarına Hazırlık</h2>
            </div>
            
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Konservatuvar, güzel sanatlar liseleri ve müzik bölümleri için özel olarak tasarlanmış hazırlık programlarımız 
              ile hayalinizdeki okula bir adım daha yaklaşın. Deneyimli eğitmenlerimiz, özel sınav stratejileri ile 
              başarınıza katkıda bulunuyor.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Özel Sınav Hazırlık Programı</h3>
                  <p className="text-sm text-primary-100">Sınavlara özel repertuar çalışması ve teknik egzersizler</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Müzik Teorisi ve Solfej</h3>
                  <p className="text-sm text-primary-100">Sınavlarda başarılı olmak için gereken teorik altyapı çalışmaları</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Deneme Sınavları</h3>
                  <p className="text-sm text-primary-100">Gerçek sınav ortamını simüle eden düzenli deneme sınavları</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Birebir Danışmanlık</h3>
                  <p className="text-sm text-primary-100">Kişisel gelişim takibi ve başvuru sürecinde destek</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/905345671010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary-100 text-burgundy hover:bg-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Hazırlık Programı Bilgisi Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepSection;