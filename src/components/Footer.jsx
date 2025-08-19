import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Warung Mamahmia Terasi TOML</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Menyajikan hidangan autentik Indonesia dengan sentuhan terasi khas Mamahmia. Rasakan kelezatan yang tak terlupakan di setiap suapan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Beranda</Link></li>
            <li><Link to="/tentang" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Tentang Kami</Link></li>
            <li><Link to="/layanan" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Layanan</Link></li>
            <li><Link to="/galeri" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Galeri</Link></li>
            <li><Link to="/kontak" className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm">Kontak</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Hubungi Kami</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center"><MapPin size={18} className="mr-2 text-accent" /> Jl. Terasi Nikmat No. 123, Kota Rasa</p>
            <p className="flex items-center"><Phone size={18} className="mr-2 text-accent" /> (021) 123-4567</p>
            <p className="flex items-center"><Mail size={18} className="mr-2 text-accent" /> info@mamahmiaterasi.com</p>
            <p className="flex items-center"><Clock size={18} className="mr-2 text-accent" /> Sen-Sab: 10.00 - 22.00 WIB</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Warung Mamahmia Terasi TOML. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;