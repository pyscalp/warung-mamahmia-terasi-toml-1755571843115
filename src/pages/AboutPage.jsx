import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Check } from 'lucide-react';

function AboutPage() {
  return (
    <div className="about-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Tentang Warung Mamahmia" subtitle="Kisah di Balik Setiap Gigitan" />

        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/images/about-us.svg"
              alt="Warung Mamahmia Story"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-gray-700"
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Filosofi Kami: Rasa dari Hati</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Warung Mamahmia Terasi TOML didirikan dengan satu tujuan: menyajikan masakan rumahan Indonesia yang autentik dan penuh cinta. Berawal dari resep keluarga turun-temurun, Mamahmia ingin berbagi kelezatan bumbu terasi khas yang telah menjadi rahasia dapur kami selama bertahun-tahun.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Setiap hidangan yang kami sajikan bukan hanya sekadar makanan, melainkan perpaduan tradisi, kualitas bahan terbaik, dan sentuhan personal yang membuat setiap gigitan terasa seperti masakan ibu di rumah. Kami berkomitmen untuk menjaga standar rasa dan kebersihan tertinggi.
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                Bahan-bahan Segar Pilihan
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                Resep Autentik Warisan Keluarga
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                Kebersihan dan Kualitas Terjamin
              </li>
              <li className="flex items-center">
                <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                Pelayanan Ramah dan Hangat
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <SectionHeader title="Visi & Misi Kami" subtitle="Membangun Warisan Rasa" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-primary mb-3">Visi</h3>
              <p className="text-gray-700 text-lg">
                Menjadi warung makan terkemuka yang dikenal akan keautentikan rasa terasi dan kehangatan suasana, menjadi pilihan utama bagi pecinta kuliner Indonesia.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary"
            >
              <h3 className="text-2xl font-bold text-secondary mb-3">Misi</h3>
              <ul className="text-gray-700 text-lg list-disc list-inside text-left">
                <li>Menyajikan hidangan berkualitas tinggi dengan resep terasi khas.</li>
                <li>Menciptakan pengalaman bersantap yang nyaman dan berkesan bagi setiap pelanggan.</li>
                <li>Mendukung petani lokal dengan menggunakan bahan-bahan segar terbaik.</li>
                <li>Terus berinovasi dalam menu sambil mempertahankan cita rasa tradisional.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;