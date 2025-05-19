import React from 'react';
import { Music, BookOpen, Star, Trophy } from 'lucide-react';

const AdultsSection: React.FC = () => {
  return (
    <section 
      id="adults" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -left-32 top-0 w-64 h-64 rounded-full bg-burgundy-light opacity-20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 w-72 h-72 rounded-full bg-primary-100 opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-burgundy-light bg-opacity-30 rounded-full mb-4">
            <Trophy size={28} className="text-primary-100" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Yetişkinlere Özel</h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Her yaşta müzik öğrenmek mümkün. Size özel programlarla hayalinizdeki enstrümanı çalmayı öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beginner Level */}
          <div className="bg-burgundy bg-opacity-40 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 bg-opacity-20 rounded-full mb-4">
              <Star size={24} className="text-primary-100" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Başlangıç Seviyesi</h3>
            <ul className="space-y-2 text-primary-100">
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Temel müzik teorisi</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Enstrüman teknik eğitimi</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Basit parçalar ve egzersizler</span>
              </li>
            </ul>
          </div>

          {/* Intermediate Level */}
          <div className="bg-burgundy bg-opacity-40 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 bg-opacity-20 rounded-full mb-4">
              <BookOpen size={24} className="text-primary-100" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Orta Seviye</h3>
            <ul className="space-y-2 text-primary-100">
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>İleri teknik çalışmalar</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Repertuar geliştirme</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Makam ve usul bilgisi</span>
              </li>
            </ul>
          </div>

          {/* Advanced Level */}
          <div className="bg-burgundy bg-opacity-40 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 bg-opacity-20 rounded-full mb-4">
              <Trophy size={24} className="text-primary-100" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">İleri Seviye</h3>
            <ul className="space-y-2 text-primary-100">
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Profesyonel icra teknikleri</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Konser hazırlığı</span>
              </li>
              <li className="flex items-start space-x-2">
                <Music size={16} className="mt-1 flex-shrink-0" />
                <span>Özel repertuar çalışmaları</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/905345671010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary-100 text-burgundy hover:bg-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Yetişkin Programları Hakkında Bilgi Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdultsSection;