import { useState, useEffect } from 'react';
import Header from '../components/Header';
import AnnouncementBar from '../components/AnnouncementBar';
import img1 from '../assets/manufacturing_1.png';
import img2 from '../assets/manufacturing_2.png';
import ManufacturingBento from '../components/ManufacturingBento';

const ManufacturingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 500); // 0.5 seconds flicker

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-gray-50">
      <div className="relative w-full z-50 flex flex-col shadow-sm bg-white">
        <AnnouncementBar />
        <Header />
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center pt-20 pb-20 px-4">
        {/* Hero Section Container */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center">
          
          <div className="text-center max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-comfortaa text-gray-900 mb-6">
              Manufacturing Excellence
            </h1>
          </div>

          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <img 
              src={img1} 
              alt="Manufacturing facility" 
              className={`w-[55%] md:w-[45%] h-auto object-contain transition-opacity duration-75 drop-shadow-2xl rounded-2xl ${currentImage === 0 ? 'opacity-100' : 'opacity-0'}`}
            />
            <img 
              src={img2} 
              alt="Manufacturing facility" 
              className={`absolute w-[55%] md:w-[45%] h-auto object-contain transition-opacity duration-75 drop-shadow-2xl rounded-2xl ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>

        {/* Bento Grid Section */}
        <ManufacturingBento />

      </main>
    </div>
  );
};

export default ManufacturingPage;
