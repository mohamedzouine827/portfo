"use client";
import Image from "next/image";
import Logo from "./_components/Logo";
import PlayButton from "./_components/PlayButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn((prevState) => !prevState);
    }, 30000); // Toggle every 0.5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleClick = () => {
    setIsVisible(false); // Hide the text when the button is clicked
  };

  return (
    <motion.section
      className="bg-black h-full flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="h-[72px] flex justify-center items-center w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
      </motion.div>
      <div className="w-full py-[96px] flex flex-col gap-24 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isVisible ? (
            <PlayButton onClick={handleClick} />
          ) : (
            <motion.div
              className="w-[250px] h-[250px] rounded-full border-2 text-white border-[#fafafa] flex justify-center items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              hi
            </motion.div>
          )}
        </motion.div>
        {isVisible && (
          <motion.div
            className={`text-[32px] font-semibold transition-all duration-500 ease-in-out ${
              isOn ? "text-[#666463]" : "text-[#D6D3D1]"
            } ease-out duration-1000`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Click The Button
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
