import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Package, Truck, Users } from 'lucide-react'; // Using Users for catering/group

function ServicesPage() {
  const services = [
    {
      icon: '/images/service-dinein.svg',
      title: 'Makan di Tempat (Dine-in)',
      description: 'Nikmati hidangan lezat kami di suasana warung yang nyaman dan ramah. Cocok untuk makan siang atau malam bersama keluarga dan teman.',
    },
    {
      icon: '/images/service-takeaway.svg',
      title: 'Bawa Pulang (Takeaway)',
      description: 'Sibuk? Tidak masalah! Pesan hidangan favorit Anda dan bawa pulang untuk dinikmati di rumah atau kantor. Cepat dan praktis.',
    },
    {
      icon: '/images/service-catering.svg',
      title: 'Layanan Katering',
      description: 'Sempurnakan acara spesial Anda dengan hidangan autentik Mamahmia. Kami melayani pesanan katering untuk berbagai acara, dari pertemuan kecil hingga pesta besar.',
    },
  ];

  return (
    <div className="services-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Layanan Kami" subtitle="Memenuhi Kebutuhan Kuliner Anda" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-primary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <img src={service.icon} alt={service.title} className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-10 bg-primary text-white rounded-lg shadow-xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Punya Pertanyaan Lebih Lanjut?</h2>
          <p className="text-xl mb-6">
            Jangan ragu untuk menghubungi kami jika Anda membutuhkan informasi lebih detail mengenai layanan katering atau pesanan khusus.
          </p>
          <a href="/kontak" className="inline-block bg-accent text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 text-lg">
            Hubungi Kami Sekarang
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesPage;