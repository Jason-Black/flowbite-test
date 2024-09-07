import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineMail, HiPhone, HiUser } from 'react-icons/hi';
import { motion } from 'framer-motion';
import contactImage from './assets/logo-home.png';

function ContactModal() {
  const [openModal, setOpenModal] = useState(false);

  const iconVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.2 },
    },
  };

  return (
    <div className="component">
      <h1 className="text-3xl font-bold py-6">Contact Form Modal</h1>
      <Button onClick={() => setOpenModal(true)}>Open Modal</Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className="max-w-6xl mx-auto">
        <Modal.Header>
          <div className="flex justify-center space-x-4">
            <motion.div initial="hidden" animate="visible" variants={iconVariants}>
              <HiUser className="text-4xl text-blue-500" />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: 0.4 }}>
              <HiOutlineMail className="text-4xl text-pink-500" />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: 0.6 }}>
              <HiPhone className="text-4xl text-green-500" />
            </motion.div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left side with image and text */}
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
    </div>
  );
}

export default ContactModal;
