import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const reviews = [
  {
    name: "Dawn",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "Roksana was very reliable and left me feeling comfortable about leaving my cats in her care Roksana communicated regularly with me and left me feeling confident despite the fact I was quite worried about how my cats would cope with someone they didn't know coming in.."
  },
  {
    name: "Clara",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "Excellent service! My pets were well taken care of and I received regular updates. Would highly recommend!"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="text-gray-500 dark:text-gray-400">REVIEWS</span>
          <h2 className="text-4xl font-bold text-navy dark:text-white mt-2">What People Say About Us.</h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-pink-50 dark:bg-gray-800 rounded-xl p-8 relative"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{review.text}</p>
                    <h4 className="font-semibold dark:text-white">{review.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{review.location}</p>
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