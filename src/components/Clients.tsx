import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const clients = [
  {
    name: "Leo",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Lis",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Logan",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Alex",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Carla",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Mia",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=1080"
  },
  {
    name: "Amor",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?auto=format&fit=crop&q=80&w=1080"
  }
];

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-pink-50 dark:bg-purple-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-pink-500 dark:text-pink-400 text-lg font-semibold">Clients</span>
          <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-300 mt-2">Top Friends</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-purple-800 rounded-xl overflow-hidden shadow-lg p-4 cursor-pointer border-4 border-pink-200 dark:border-pink-600"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-purple-700 dark:text-purple-300">{client.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
