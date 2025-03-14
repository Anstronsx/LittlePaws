import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-coral-red text-xl font-semibold dark:text-orange-400">THE BEST CARE FOR YOUR PETS</span>
            <h1 className="text-5xl font-bold text-navy dark:text-white mt-4 mb-6">
              Love, protect, and enjoy with your best friend
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              At LittlePaws, we make sure your pet gets the love and attention they deserve. 
              We offer care, walking, and wellness services so you can enjoy life with your furry companion.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold"
              >
                Find out more
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 py-3 bg-pink-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Play Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=2574&auto=format&fit=crop"
              alt="Happy German Shepherd"
              className="rounded-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
      
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}