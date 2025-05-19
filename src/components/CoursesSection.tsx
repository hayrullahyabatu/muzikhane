import React, { useState } from 'react';
import { Music, Guitar, Piano, Mic, BookOpen, Speaker } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'strings' | 'wind' | 'percussion' | 'traditional' | 'modern' | 'theory';
}

const CoursesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'all', name: 'Tümü', icon: <Music size={20} /> },
    { id: 'strings', name: 'Yaylı Çalgılar', icon: <Guitar size={20} /> },
    { id: 'wind', name: 'Nefesli Çalgılar', icon: <Music size={20} /> },
    { id: 'percussion', name: 'Vurmalı Çalgılar', icon: <Music size={20} /> },
    { id: 'traditional', name: 'Geleneksel', icon: <Guitar size={20} /> },
    { id: 'modern', name: 'Modern', icon: <Piano size={20} /> },
    { id: 'theory', name: 'Teori & Teknoloji', icon: <BookOpen size={20} /> },
  ];

  const courses: Course[] = [
    // Traditional Turkish Instruments
    {
      id: 1, 
      name: "Kanun", 
      icon: <Music size={32} />, 
      description: "Türk musikisinin nadide enstrümanı kanun ile tanışın. Temel tekniklerden profesyonel icralara uzanan eğitim programı.",
      category: 'traditional'
    },
    {
      id: 2, 
      name: "Ud", 
      icon: <Guitar size={32} />, 
      description: "Ud eğitimi ile Türk ve Arap müziğinin büyülü dünyasına adım atın. Her seviyeye uygun dersler.",
      category: 'traditional'
    },
    {
      id: 3, 
      name: "Ney", 
      icon: <Music size={32} />, 
      description: "Ney üfleme tekniklerinden makam bilgisine uzanan kapsamlı eğitim. Ruhunuza hitap eden bu enstrümanı keşfedin.",
      category: 'wind'
    },
    {
      id: 4, 
      name: "Bağlama", 
      icon: <Guitar size={32} />, 
      description: "Anadolu'nun sesi bağlama ile halk müziğimizin zenginliğini öğrenin. Şelpe ve tezene teknikleri.",
      category: 'traditional'
    },
    {
      id: 5, 
      name: "Tambur", 
      icon: <Guitar size={32} />, 
      description: "Türk müziğinin zarif sazı tambur eğitimi. Geleneksel icra teknikleri ve repertuar çalışmaları.",
      category: 'traditional'
    },
    {
      id: 6, 
      name: "Kaval", 
      icon: <Music size={32} />, 
      description: "Anadolu'nun kadim nefesli sazı kaval eğitimi. Otantik üfleme teknikleri ve geleneksel ezgiler.",
      category: 'wind'
    },
    {
      id: 7, 
      name: "Zurna", 
      icon: <Music size={32} />, 
      description: "Güçlü sesiyle meydanların vazgeçilmezi zurna eğitimi. Temel üfleme teknikleri ve repertuar.",
      category: 'wind'
    },
    {
      id: 8, 
      name: "Cümbüş", 
      icon: <Guitar size={32} />, 
      description: "Eğlenceli ve enerjik cümbüş eğitimi. Türk müziği ve fasıl repertuarı.",
      category: 'traditional'
    },
    {
      id: 9, 
      name: "Kabak Kemane", 
      icon: <Music size={32} />, 
      description: "Anadolu'nun otantik yaylı sazı kabak kemane eğitimi. Geleneksel teknikler ve türküler.",
      category: 'strings'
    },
    {
      id: 10, 
      name: "Yaylı Tambur", 
      icon: <Music size={32} />, 
      description: "Klasik Türk müziğinin zarif sazı yaylı tambur eğitimi. İnce detaylar ve makamsal çalışmalar.",
      category: 'strings'
    },
    {
      id: 11, 
      name: "Mey", 
      icon: <Music size={32} />, 
      description: "Doğu Anadolu'nun büyülü sesi mey eğitimi. Geleneksel üfleme teknikleri ve yerel ezgiler.",
      category: 'wind'
    },
    {
      id: 12, 
      name: "Def", 
      icon: <Music size={32} />, 
      description: "Ritmin zarif temsilcisi def eğitimi. Temel vuruş teknikleri ve usul çalışmaları.",
      category: 'percussion'
    },
    {
      id: 13, 
      name: "Darbuka", 
      icon: <Music size={32} />, 
      description: "Orta Doğu'nun vazgeçilmez ritim sazı darbuka eğitimi. Temel teknikler ve ritim kalıpları.",
      category: 'percussion'
    },
    {
      id: 14, 
      name: "Davul", 
      icon: <Music size={32} />, 
      description: "Ritmin kalbi davul eğitimi. Temel vuruş teknikleri ve geleneksel ritim kalıpları.",
      category: 'percussion'
    },

    // Modern/Classical Instruments
    {
      id: 15, 
      name: "Keman", 
      icon: <Music size={32} />, 
      description: "Klasik müzikten Türk müziğine, caz müziğine kadar geniş bir yelpazede keman eğitimi.",
      category: 'strings'
    },
    {
      id: 16, 
      name: "Gitar", 
      icon: <Guitar size={32} />, 
      description: "Klasik, akustik, elektro gitar eğitimi. Temel akorlardan parmak stillerine, solo çalımına kadar.",
      category: 'modern'
    },
    {
      id: 17, 
      name: "Piyano & Org", 
      icon: <Piano size={32} />, 
      description: "Her yaşa özel piyano ve org dersleri. Klasik eğitimden popüler müziğe uzanan repertuar.",
      category: 'modern'
    },
    {
      id: 18, 
      name: "Klarnet", 
      icon: <Music size={32} />, 
      description: "Üfleme teknikleri, ton kontrolü ve geniş bir repertuar ile klarnet eğitimi.",
      category: 'wind'
    },
    {
      id: 19, 
      name: "Elektro Gitar", 
      icon: <Guitar size={32} />, 
      description: "Modern müziğin güçlü sazı elektro gitar eğitimi. Teknik çalışmalar ve farklı müzik tarzları.",
      category: 'modern'
    },
    {
      id: 20, 
      name: "Çello", 
      icon: <Music size={32} />, 
      description: "Klasik müziğin derin sesi çello eğitimi. Temel tekniklerden ileri seviyeye kapsamlı eğitim.",
      category: 'strings'
    },
    {
      id: 21, 
      name: "Viyola", 
      icon: <Music size={32} />, 
      description: "Yaylı ailesinin zarif üyesi viyola eğitimi. Klasik müzik ve oda müziği çalışmaları.",
      category: 'strings'
    },

    // Theory and Technology
    {
      id: 22, 
      name: "Müzik Teorisi", 
      icon: <BookOpen size={32} />, 
      description: "Notalar, aralıklar, akorlar, tonaliteler ve daha fazlası. Müziğin matematiğini öğrenin.",
      category: 'theory'
    },
    {
      id: 23, 
      name: "Mix & Mastering", 
      icon: <Speaker size={32} />, 
      description: "Modern kayıt teknikleri, mix, mastering ve ses düzenleme eğitimi.",
      category: 'theory'
    },
    {
      id: 24, 
      name: "Stüdyo Kayıt", 
      icon: <Mic size={32} />, 
      description: "Profesyonel stüdyo ortamında kayıt teknikleri ve ekipman kullanımı.",
      category: 'theory'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/80 to-burgundy/80 backdrop-blur-xl -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-primary-100/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -right-32 bottom-0 w-96 h-96 rounded-full bg-burgundy-light/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-br from-primary-100/20 to-burgundy-light/20 rounded-full mb-6 backdrop-blur-sm">
            <Music size={32} className="text-primary-100" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Eğitimlerimiz</h2>
          <p className="text-lg md:text-xl text-primary-100/90 max-w-3xl mx-auto leading-relaxed">
            Bireysel yetenek ve hedeflerinize uygun, kişiselleştirilmiş müzik eğitimi programlarımız
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Enstrüman veya kurs ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-burgundy/40 backdrop-blur-sm border border-primary-100/20 rounded-full text-white placeholder-primary-100/70 focus:outline-none focus:border-primary-100/50 transition-all text-lg"
            />
            <Music size={24} className="absolute right-6 top-1/2 transform -translate-y-1/2 text-primary-100/70" />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all transform hover:scale-105 backdrop-blur-sm ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-burgundy shadow-lg'
                    : 'bg-burgundy/40 text-primary-100 hover:bg-burgundy/60'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-gradient-to-br from-burgundy/60 to-burgundy-dark/60 backdrop-blur-sm rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl border border-primary-100/10 hover:border-primary-100/30"
              onMouseEnter={() => setActiveCard(course.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col items-center text-center relative z-10">
                {/* Icon */}
                <div className={`p-4 rounded-full bg-gradient-to-br from-primary-100/30 to-primary-100/10 mb-6 text-primary-100 transition-all duration-300 transform ${
                  activeCard === course.id ? 'scale-110' : ''
                }`}>
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">{course.name}</h3>

                {/* Description */}
                <div className={`overflow-hidden transition-all duration-300 text-primary-100/90 ${
                  activeCard === course.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="leading-relaxed">{course.description}</p>
                </div>

                {/* Action Button */}
                <div className={`mt-auto pt-6 transition-all duration-300 ${
                  activeCard === course.id ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
                }`}>
                  <a 
                    href="https://wa.me/905345671010" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-primary-100 text-burgundy hover:bg-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Detaylı Bilgi Al
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-20">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-100 to-transparent transform rotate-45 translate-x-12 -translate-y-12"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <Music size={64} className="mx-auto text-primary-100/70 mb-6" />
            <p className="text-xl text-primary-100">Aradığınız kriterlere uygun eğitim bulunamadı.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;