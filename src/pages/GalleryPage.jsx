import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

function GalleryPage() {
  const images = [
    '/images/gallery-item1.svg',
    '/images/gallery-item2.svg',
    '/images/gallery-item3.svg',
    '/images/gallery-item4.svg',
    '/images/product-nasi-goreng.svg',
    '/images/product-ayam-bakar.svg',
    '/images/product-sambal-terasi.svg',
    '/images/product-es-teh.svg',
  ];

  return (
    <div className="gallery-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Galeri Kami" subtitle="Momen dan Hidangan Pilihan" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            >
              <img
                src={src}
                alt={`Galeri Warung Mamahmia ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Lihat Detail</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center p-10 bg-secondary text-white rounded-lg shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Abadikan Momen Anda!</h2>
          <p className="text-xl mb-6">
            Bagikan pengalaman bersantap Anda di Warung Mamahmia Terasi TOML di media sosial dengan tagar #MamahmiaTerasiTOML. Kami senang melihatnya!
          </p>
          <a href="/kontak" className="inline-block bg-accent text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 text-lg">
            Kunjungi Kami
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default GalleryPage;