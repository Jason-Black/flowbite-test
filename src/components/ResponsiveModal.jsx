import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiPhone, HiUser, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi';
import contactImage from '../assets/logo-home.png';

function ResponsiveModal() {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState('md');

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setModalSize('7xl');
    } else if (window.innerWidth >= 1024) {
      setModalSize('6xl');
    } else if (window.innerWidth >= 768) {
      setModalSize('xl');
    } else {
      setModalSize('md');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openAndResizeModal = () => {
    handleResize();
    setOpenModal(true);
  };

  // Animation Variants
  const iconVariants = {
    hidden: { opacity: 0, x: 100, rotate: -180 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        duration: 0.3,
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.4,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 150, damping: 20, delay: 0.3 },
    },
  };

  return (
    <>
      <Button onClick={openAndResizeModal} color="purple">
        Open Responsive Modal
      </Button>

      <Modal
        show={openModal}
        size={modalSize}
        onClose={() => setOpenModal(false)}
        className="dark"
      >
        <Modal.Header className="bg-gray-800 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center space-x-4"
          >
            <motion.div variants={iconVariants}>
              <HiUser className="text-4xl text-blue-500" />
            </motion.div>
            <motion.div variants={iconVariants}>
              <HiOutlineMail className="text-4xl text-pink-500" />
            </motion.div>
            <motion.div variants={iconVariants}>
              <HiPhone className="text-4xl text-green-500" />
            </motion.div>
          </motion.div>
        </Modal.Header>

        <Modal.Body className="bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white p-6">
            {/* Left Side: Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants} // Apply stagger to contact info
              className="flex flex-col items-start justify-start text-white md:p-10 "
            >
              <motion.p
                variants={contactInfoVariants}
                className="text-4xl font-semibold md:mb-10 mb-6 "
              >
                Reach out to us directly!
              </motion.p>

              {/* Contact Information Block */}
              <motion.div variants={contactInfoVariants} className="w-full space-y-6">
                <div className="space-y-2">
                  <motion.p
                    variants={contactInfoVariants}
                    className="flex items-center text-lg md:text-xl lg:text-2xl space-x-2"
                  >
                    <HiPhone className="w-8 pr-2 h-8 md:w-12 md:h-12 text-yellow-400" />
                    <span>(123) 456-7890</span>
                  </motion.p>
                  <motion.p
                    variants={contactInfoVariants}
                    className="flex items-center text-lg md:text-xl lg:text-2xl space-x-2"
                  >
                    <HiOutlineMail className="w-8 pr-2 h-8 md:w-12 md:h-12 text-yellow-400" />
                    <span>email@example.com</span>
                  </motion.p>
                  <motion.p
                    variants={contactInfoVariants}
                    className="flex items-center text-lg md:text-xl lg:text-2xl space-x-2"
                  >
                    <HiOutlineMail className="w-8 pr-2 h-8 md:w-12 md:h-12 text-yellow-400" />
                    <span>support@example.com</span>
                  </motion.p>
                  <motion.p
                    variants={contactInfoVariants}
                    className="flex items-center text-lg md:text-xl lg:text-2xl space-x-2"
                  >
                    <HiOutlineClock className="w-8 pr-2 h-8 md:w-12 md:h-12 text-yellow-400" />
                    <span>Office Hours: Mon-Fri, 9 AM - 5 PM</span>
                  </motion.p>
                  <motion.p
                    variants={contactInfoVariants}
                    className="flex items-center text-lg md:text-xl lg:text-2xl space-x-2"
                  >
                    <HiOutlineLocationMarker className="w-8 pr-2 h-8 md:w-12 md:h-12 text-yellow-400" />
                    <span>1234 Address St., City, Country</span>
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Form */}
            <div className="space-y-4 w-full">
              {[{ label: 'Name', type: 'text', name: 'name' }, { label: 'Phone', type: 'text', name: 'phone' }, { label: 'Email', type: 'email', name: 'email' }, { label: 'Subject', type: 'text', name: 'subject' }, { label: 'Message', type: 'textarea', name: 'message' }].map(
                (input, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <label className="block text-sm font-medium text-white">{input.label}</label>
                    {input.type !== 'textarea' ? (
                      <input
                        type={input.type}
                        name={input.name}
                        className="mt-1 block w-full md:w-3/4 p-2 border border-gray-300 rounded-lg bg-sky-300 text-gray-800 focus:ring-yellow-600 focus:border-yellow-600"
                      />
                    ) : (
                      <textarea
                        name={input.name}
                        rows="4"
                        className="mt-1 block w-full md:w-3/4 p-2 border border-gray-300 rounded-lg bg-blue-gray-500 text-gray-800 focus:ring-yellow-600 focus:border-yellow-600"
                      ></textarea>
                    )}
                  </motion.div>
                )
              )}
              <motion.button
                type="submit"
                className="w-full md:w-1/4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-1 px-2 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>

              {/* Image centers under the button on smaller screens */}
              <motion.img
                src={contactImage}
                alt="Contact"
                className="w-1/2 md:w-1/6 mx-auto md:absolute md:top-0 md:right-0 rounded-lg shadow-lg mt-4"
                variants={imageVariants}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="bg-gray-800">
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResponsiveModal;
