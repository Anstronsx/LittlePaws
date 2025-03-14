import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const services = [
  {
    title: "CAT-SITTING",
    price: "£6",
    description: "Each visit includes feeding, water change, cleaning the litter tray, and play time.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per drop-in"
  },
  {
    title: "SMALL ANIMAL CARE",
    price: "£6",
    description: "Each drop-in visit includes feeding, water change, and play-time. Small animals might include hamsters, gerbils, rabbits, and fish etc",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per drop-in"
  },
  {
    title: "DOG SITTING",
    price: "£30",
    description: "Overnight or daysitting including feeding, play, and garden time. Walks are charged separately.",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per night"
  },
  {
    title: "DOG WALKING",
    price: "£8",
    description: "Small/medium dogs only at present",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per 30min walk"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 dark:text-gray-400">Services</span>
          <h2 className="text-4xl font-bold text-navy dark:text-white mt-2">We Offer Best Services</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 15 },
            480: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="pb-8"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-auto">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 h-full"
              >
                <motion.div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-semibold">
                      Starting at {service.price} {service.priceDetail}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}