// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../components/Button';

function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    reset();
  };

  return (
    <div className="contact-page py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Hubungi Kami" subtitle="Kami Siap Melayani Anda" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
            <div className="space-y-6 text-gray-700 text-lg">
              <div className="flex items-start">
                <MapPin className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Alamat Kami:</p>
                  <p>Jl. Terasi Nikmat No. 123, Kota Rasa, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Telepon:</p>
                  <p>(021) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>info@mamahmiaterasi.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Jam Buka:</p>
                  <p>Senin - Sabtu: 10.00 - 22.00 WIB</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Temukan Kami di Peta</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                {/* Placeholder for Google Maps iframe */}
                <p>Peta Lokasi (Google Maps Embed)</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan Kepada Kami</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Nama lengkap wajib diisi' })}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Format email tidak valid'
                    }
                  })}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-lg font-semibold mb-2">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subjek wajib diisi' })}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Pesan Anda</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Pesan wajib diisi' })}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" variant="primary" className="w-full py-3 text-lg">
                Kirim Pesan
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;