import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    title: "CAT-SITTING",
    price: "£6",
    description: "Each visit includes feeding, water change, cleaning the litter tray, and play time.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per drop-in",
    features: [
      "Feeding and fresh water",
      "Litter tray cleaning",
      "Playtime and enrichment",
      "Home security check",
      "Daily updates and photos"
    ],
    icon: "🐱"
  },
  {
    title: "SMALL ANIMAL CARE",
    price: "£6",
    description: "Each drop-in visit includes feeding, water change, and play-time. Small animals might include hamsters, gerbils, rabbits, and fish etc",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per drop-in",
    features: [
      "Feeding and water refresh",
      "Cage/habitat cleaning",
      "Exercise and enrichment",
      "Health check",
      "Updates with photos"
    ],
    icon: "🐹"
  },
  {
    title: "DOG SITTING",
    price: "£30",
    description: "Overnight or daysitting including feeding, play, and garden time. Walks are charged separately.",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per night",
    features: [
      "Overnight supervision",
      "Feeding schedule maintained",
      "Garden breaks",
      "Playtime and attention",
      "Medication administration if needed"
    ],
    icon: "🐶"
  },
  {
    title: "DOG WALKING",
    price: "£8",
    description: "Small/medium dogs only at present",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1080",
    priceDetail: "per 30min walk",
    features: [
      "Personalized walking routes",
      "Small/medium dogs only",
      "Flexible scheduling",
      "Leash and harness handling",
      "Post-walk water and treats"
    ],
    icon: "🦮"
  }
];

export function Services() {
  const [activeService, setActiveService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const formControls = useAnimation();
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    pet: '',
    message: '',
    service: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    if (showBookingForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showBookingForm]);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  const handleBookNow = (service) => {
    setFormData({ ...formData, service: service.title });
    setShowBookingForm(true);
    setCurrentStep(1);
  };

  const handleCloseModal = () => {
    formControls.start({ opacity: 0, y: 20 });
    setTimeout(() => {
      setShowBookingForm(false);
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    formControls.start({
      x: [-20, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 }
    });
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    formControls.start({
      x: [20, 0],
      opacity: [0, 1],
      transition: { duration: 0.5 }
    });
    setCurrentStep(currentStep - 1);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData({ ...formData, date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);

    // Animation before closing
    formControls.start({
      scale: [1, 1.03, 1],
      transition: { duration: 0.6 }
    });

    setTimeout(() => {
      alert(`Thank you for booking ${formData.service}! We'll contact you soon.`);
      setShowBookingForm(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        pet: '',
        message: '',
        service: ''
      });
      setCurrentStep(1);
    }, 700);
  };

  // Available dates for the calendar
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' }),
        full: date.toISOString().split('T')[0],
        available: Math.random() > 0.3 // Randomly set some dates as unavailable
      });
    }

    return dates;
  };

  const availableDates = generateDates();

  // Time slots
  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block px-6 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-3"
          >
            Premium Care Services
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 mt-4 mb-4">Exceptional Pet Care Services</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Professional and loving care for your furry, feathery, or scaly friends when you can't be there.
          </p>
        </motion.div>

        <div className="relative mb-20">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            spaceBetween={30}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 }
            }}
            className="pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto" style={{ width: '400px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 70
                  }}
                  onClick={() => handleServiceClick(service)}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">{service.description}</p>

                    <div className="mt-auto space-y-4">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-0.5">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 flex justify-between items-center">
                          <div>
                            <p className="text-gray-500 dark:text-gray-400 text-xs uppercase">Starting from</p>
                            <div className="flex items-end">
                              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{service.price}</span>
                              <span className="text-gray-600 dark:text-gray-300 ml-1 text-sm">{service.priceDetail}</span>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookNow(service);
                            }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
                          >
                            Book Now
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-80">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm inline-block mb-3 w-max">
                      Premium Service
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-2">{activeService.title}</h2>
                    <div className="flex items-center space-x-2">
                      <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full inline-flex items-center">
                        <span className="text-white font-medium">
                          {activeService.price}
                        </span>
                        <span className="text-white/80 text-sm ml-1">
                          {activeService.priceDetail}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setActiveService(null)}
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{activeService.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                      <span className="inline-block w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      What's Included
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleBookNow(activeService)}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 px-10 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book This Service
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* iPhone-style Booking Form Modal */}
        <AnimatePresence>
          {showBookingForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            >
              <motion.div
                ref={modalRef}
                initial={{ borderRadius: 20, opacity: 0, y: 20 }}
                animate={{ borderRadius: 32, opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white dark:bg-gray-800 overflow-hidden max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-0">
                  <div className="h-3 w-36 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mt-3 mb-4"></div>

                  {/* Progress bar */}
                  <div className="px-6">
                    <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
                      <motion.div
                        initial={{ width: `${(currentStep - 1) * 33.33}%` }}
                        animate={{ width: `${currentStep * 33.33}%` }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="px-6 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{formData.service}</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      {currentStep === 1 && "Let's start with your details"}
                      {currentStep === 2 && "When would you like our service?"}
                      {currentStep === 3 && "Share more about your pet and needs"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-6 h-full">
                    <motion.div
                      animate={formControls}
                      className="space-y-4"
                    >
                      {currentStep === 1 && (
                        <>
                          <div className="space-y-4">
                            <div className={`relative ${focusedField === 'name' ? 'transform -translate-y-2 transition-transform' : ''}`}>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Your Full Name"
                              />
                            </div>

                            <div className={`relative ${focusedField === 'email' ? 'transform -translate-y-2 transition-transform' : ''}`}>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Email Address"
                              />
                            </div>

                            <div className={`relative ${focusedField === 'phone' ? 'transform -translate-y-2 transition-transform' : ''}`}>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {currentStep === 2 && (
                        <>
                          <div className="mb-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Select a date:</p>
                            <div className="flex overflow-x-auto pb-4 space-x-2 scrollbar-hide">
                              {availableDates.map((date, index) => (
                                <motion.div
                                  key={index}
                                  whileHover={{ y: -5 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => date.available && handleDateSelect(date.full)}
                                  className={`flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all ${
                                    selectedDate === date.full
                                      ? 'bg-gradient-to-b from-indigo-500 to-purple-600 text-white shadow-lg'
                                      : date.available
                                        ? 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        : 'bg-gray-100 dark:bg-gray-800 opacity-50 cursor-not-allowed'
                                  }`}
                                >
                                  <p className="text-xs font-medium mb-1">{date.month}</p>
                                  <p className={`text-xl font-bold ${selectedDate === date.full ? 'text-white' : ''}`}>{date.day}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Select a time:</p>
                            <div className="grid grid-cols-3 gap-3">
                              {timeSlots.map((time, index) => (
                                <motion.div
                                  key={index}
                                  whileHover={{ y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => setFormData({ ...formData, time })}
                                  className={`px-4 py-3 rounded-xl text-center cursor-pointer transition-all ${
                                    formData.time === time
                                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                                  }`}
                                >
                                  <p className="font-medium">{time}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {currentStep === 3 && (
                        <>
                          <div className={`relative ${focusedField === 'pet' ? 'transform -translate-y-2 transition-transform' : ''}`}>
                            <input
                              type="text"
                              id="pet"
                              name="pet"
                              value={formData.pet}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('pet')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                              placeholder="Pet Name & Breed"
                            />
                          </div>

                          <div className={`relative ${focusedField === 'message' ? 'transform -translate-y-2 transition-transform' : ''}`}>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              rows="4"
                              className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/30 rounded-2xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                              placeholder="Special requirements or instructions..."
                            ></textarea>
                          </div>

                          <div className="pt-6">
                            <div className="flex items-center bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl">
                              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <p className="text-sm text-indigo-800 dark:text-indigo-200">
                                Your booking will be confirmed via email and phone.
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>

                    <div className="mt-8 flex justify-between pb-6">
                      {currentStep > 1 ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={handlePrevStep}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-3 px-6 rounded-xl font-medium transition-all duration-300"
                        >
                          Back
                        </motion.button>
                      ) : (
                        <div></div>
                      )}

                      {currentStep < 3 ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={handleNextStep}
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Continue
                        </motion.button>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Complete Booking
                        </motion.button>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
