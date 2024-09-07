import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiPhone, HiUser } from 'react-icons/hi';
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
      setModalSize('md');
    } else {
      setModalSize('sm');
    }
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      x: 100,       // Start from right
             // Slight downward movement
      rotate: -190,   // Start with rotation
    },
    visible: {
      opacity: 1,
      x: 0,
             // Move up to normal position
      rotate: 0,    // Remove rotation
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
        duration: 0.2, // Very quick and sharp
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: .2, // Stagger between each child
      },
    },
  };

  const openAndResizeModal = () => {
    handleResize();
    setOpenModal(true);
  };

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={openAndResizeModal} color="purple">
        Open Responsive Modal
      </Button>

      {/* The actual modal */}
      <Modal dismissible show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <div className="flex justify-center space-x-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex space-x-4"
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
          </div>
        </Modal.Header>
        
        <Modal.Body>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <img src={contactImage} alt="Contact" className="rounded-lg shadow-lg w-3/4" />
              <p className="mt-6 text-gray-600 text-center">
                Let's get in touch! We're here to assist you with any queries or projects you have in mind.
              </p>
            </div>

              {/* Right side with form */}
              <form
              action="https://getform.io/f/avrednla"
              method="POST"
              className="space-y-4"
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </Modal.Body>
        
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResponsiveModal;
