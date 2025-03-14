import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Animación para estrellas palpitantes
  const pulseVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: Math.random() * 2 + 2, // Entre 2 y 4 segundos
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Generamos 20 estrellas con posiciones aleatorias
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 0.5 + 0.5, // Entre 0.5 y 1
    delay: Math.random() * 3 // Retardo aleatorio entre 0 y 3 segundos
  }));

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden relative">
      {/* Fondos circulares animados */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-20 blur-3xl"
      />
      
      {/* Estrellas palpitantes en el fondo */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute text-yellow-400 z-0 select-none pointer-events-none"
          style={{ 
            top: star.top, 
            left: star.left,
            fontSize: `${star.size}rem`
          }}
          variants={pulseVariants}
          animate="animate"
          transition={{ delay: star.delay }}
        >
          ✨
        </motion.div>
      ))}

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <span className="inline-block text-coral-red text-xl font-semibold dark:text-orange-400 px-4 py-1 bg-pink-50 dark:bg-pink-900/50 rounded-full">
               THE BEST CARE FOR YOUR PETS 
            </span>
            <h1 className="text-5xl font-bold text-navy dark:text-white mt-4 mb-6">
              Love, <span className="text-pink-500 dark:text-pink-400">protect</span>, and enjoy with your best friend
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              At LittlePaws, we make sure your pet gets the love and attention they deserve. 
              We offer care, walking, and wellness services so you can enjoy life with your furry companion.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-semibold shadow-md"
              >
                Find out more
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="px-6 py-3 bg-pink-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold flex items-center gap-2 shadow-md"
              >
                <Play className="w-4 h-4 text-pink-500 dark:text-pink-300" />
                Play Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative z-10"
          >
            {/* Marco decorativo alrededor de la imagen */}
            <motion.div 
              className="absolute -inset-4 rounded-3xl border-4 border-dashed border-pink-300 dark:border-pink-700 z-0"
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Pequeños elementos decorativos flotantes */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white dark:bg-pink-800 rounded-full p-2 shadow-lg z-10"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🐾
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-pink-800 rounded-full p-2 shadow-lg z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl z-1"
            >
              <img
                src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?q=80&w=2574&auto=format&fit=crop"
                alt="Happy German Shepherd"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-orange-400/10 rounded-2xl" />
              
              {/* Elementos sobre la imagen */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                ❤️
              </motion.div>
              
              <motion.div
                className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                ⭐
              </motion.div>
            </motion.div>
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