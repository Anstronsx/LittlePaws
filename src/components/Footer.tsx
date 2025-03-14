import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="image/LittlePaws2.avif" alt="" className="h-16" />
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">Company</h3>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">About</a>
            <a href="#careers" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Careers</a>
            <a href="#mobile" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Mobile</a>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">Contact</h3>
            <a href="#help" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Help/FAQ</a>
            <a href="#press" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Press</a>
            <a href="#affiliates" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Affiliates</a>
          </motion.div>

          {/* More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <h3 className="text-xl font-bold mb-4 dark:text-white">More</h3>
            <a href="#airlinefees" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Airlinefees</a>
            <a href="#airline" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Airline</a>
            <a href="#tips" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">Low fare tips</a>
            <div className="mt-4">
              <h4 className="text-xl font-bold mb-2 dark:text-white">Follow</h4>
              <a
                href="#instagram"
                className="inline-block p-2 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full text-white hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-gray-600 dark:text-gray-300">© Copyright 2025 LittlePaws. All Rights Reserved</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Designed by José Palma</p>
        </motion.div>
      </div>
    </footer>
  );
}