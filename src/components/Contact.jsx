import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import ModelCanvas from "./ModelCanvas";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Use environment variables for EmailJS configuration
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Universe 21 Team",
          from_email: form.email,
          to_email: "contact@universe21.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.error(error);
        }
      );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="text-center"
      >
        <h3 className={styles.sectionText}>Contact Us</h3>
        <p className="text-secondary text-lg md:text-xl mt-4 mb-8 max-w-3xl mx-auto">
          Got questions about The Search? Want to know more about Universe 21? 
          Drop us a message and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10 bg-tertiary bg-opacity-30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl glow-border">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 p-8 lg:p-12"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 text-lg">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  required
                  className="bg-primary py-4 px-6 text-white rounded-lg outline-none border border-quaternary border-opacity-50 font-medium focus:ring-2 focus:ring-quaternary transition-all duration-300"
                />
              </label>
              
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4 text-lg">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                  className="bg-primary py-4 px-6 text-white rounded-lg outline-none border border-quaternary border-opacity-50 font-medium focus:ring-2 focus:ring-quaternary transition-all duration-300"
                />
              </label>
            </div>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-lg">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                className="bg-primary py-4 px-6 text-white rounded-lg outline-none border border-quaternary border-opacity-50 font-medium focus:ring-2 focus:ring-quaternary transition-all duration-300 resize-none"
              />
            </label>

            {success && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900 bg-opacity-50 text-green-300 p-4 rounded-lg border border-green-500 border-opacity-30"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900 bg-opacity-50 text-red-300 p-4 rounded-lg border border-red-500 border-opacity-30"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-quaternary hover:bg-[#7F52DD] py-4 px-10 rounded-xl outline-none mx-auto text-white font-bold shadow-lg shadow-quaternary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 hidden lg:block relative overflow-hidden"
        >
          <div className="h-full w-full bg-gradient-to-br from-tertiary/60 to-quaternary/20">
            <ModelCanvas modelPath="/models/mp_40_submachine_gun.glb" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-center text-lg font-bold">
              Join us on the journey - October 21, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");