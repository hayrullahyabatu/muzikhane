import React, { useState, useEffect } from 'react';
import { Music, Mic, Speaker, HeadphonesIcon } from 'lucide-react';

const StudioSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const studioImages = [
    "https://images.pexels.com/photos/690779/pexels-photo-690779.jpeg",
    "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
    "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg",
    "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % studioImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="studio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          {/* Left Side - Content */}
          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 mb-4">
              <Mic size={24} className="text-primary-100" />
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Stüdyo ve Teknoloji</h2>
            </div>
            
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Modern ses kayıt teknolojileri ve profesyonel ekipmanlarla donatılmış stüdyomuzda, 
              sanatçıların vizyonlarını hayata geçiriyoruz. Mix, mastering ve altyapı hazırlama hizmetlerimizle 
              müziğinizi bir üst seviyeye taşıyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <Mic size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Kayıt Hizmetleri</h3>
                  <p className="text-sm text-primary-100">Profesyonel ses kayıt odamızda solo enstrüman veya vokal kayıtlarınızı gerçekleştirin</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Speaker size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Mix & Mastering</h3>
                  <p className="text-sm text-primary-100">Kayıtlarınızı profesyonel kalitede düzenleme ve mastering hizmetleri</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <HeadphonesIcon size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Altyapı Hazırlama</h3>
                  <p className="text-sm text-primary-100">İstediğiniz parçalar için özel altyapı hazırlama ve düzenleme</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Music size={20} className="text-primary-100 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-white">Proje Danışmanlığı</h3>
                  <p className="text-sm text-primary-100">Müzik projelerinizde teknik ve sanatsal danışmanlık hizmetleri</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/905345671010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary-100 text-burgundy hover:bg-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Stüdyo Bilgisi Al
            </a>
          </div>
          
          {/* Right Side - Image Slider */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px]">
              {studioImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Stüdyo Görünümü ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-burgundy bg-opacity-30"></div>
                </div>
              ))}
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {studioImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index 
                        ? 'bg-primary-100 w-4' 
                        : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;