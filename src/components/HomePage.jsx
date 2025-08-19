// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function HomePage() {
  const products = [
    {
      name: 'Nasi Goreng Terasi Spesial',
      description: 'Nasi goreng dengan bumbu terasi khas Mamahmia, lengkap dengan telur dan kerupuk.',
      image: '/images/product-nasi-goreng.svg',
    },
    {
      name: 'Ayam Bakar Madu Terasi',
      description: 'Ayam bakar empuk dengan olesan madu dan sentuhan terasi yang menggoda.',
      image: '/images/product-ayam-bakar.svg',
    },
    {
      name: 'Sambal Terasi Juara',
      description: 'Sambal terasi pedas nampol, cocok untuk teman makan apa saja.',
      image: '/images/product-sambal-terasi.svg',
    },
    {
      name: 'Es Teh Manis Segar',
      description: 'Penyegar dahaga yang sempurna setelah menikmati hidangan pedas.',
      image: '/images/product-es-teh.svg',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-primary-500">
        <img
          src="/images/hero-bg.svg"
          alt="Warung Mamahmia Terasi TOML Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 p-6 max-w-4xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
          >
            Warung Mamahmia Terasi TOML
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Sensasi Rasa Autentik, Pedasnya Menggoda, Aromanya Memikat!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu">
              <Button variant="secondary" className="px-8 py-3 text-lg">
                Lihat Menu Kami
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="Tentang Kami" subtitle="Kisah Rasa Warung Mamahmia" />
          <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img src="/images/about-us.svg" alt="Tentang Warung Mamahmia" className="w-full h-auto rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 text-left"
            >
              <p className="text-lg text-gray-700 mb-4">
                Warung Mamahmia Terasi TOML lahir dari kecintaan Mamahmia akan masakan rumahan autentik Indonesia, dengan sentuhan istimewa bumbu terasi pilihan. Setiap hidangan kami disiapkan dengan resep turun-temurun dan bahan-bahan segar, menjamin cita rasa yang tak terlupakan.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Kami percaya bahwa makanan adalah jembatan kebahagiaan. Datang dan rasakan kehangatan serta kelezatan masakan Mamahmia yang akan membuat Anda ketagihan!
              </p>
              <Link to="/tentang">
                <Button variant="primary">Baca Selengkapnya</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Menu Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader title="Menu Populer" subtitle="Pilihan Favorit Pelanggan Setia" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  image={product.image}
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/layanan">
              <Button variant="secondary">Lihat Semua Layanan</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action / Visit Us */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Yuk, Kunjungi Warung Kami!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Rasakan langsung kelezatan hidangan Mamahmia di tempat kami yang nyaman.
          </motion.p>
          <Link to="/kontak">
            <Button variant="accent" className="px-8 py-3 text-lg">
              Dapatkan Petunjuk Arah
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;