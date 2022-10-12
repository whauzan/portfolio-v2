import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-row justify-between items-center max-w-7xl mx-auto z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          target={"_blank"}
          url="https://www.linkedin.com/in/wahyuhauzanrafi/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://github.com/whauzan"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://gitlab.com/whauzan"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://www.showwcase.com/whauzan"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://www.instagram.com/wahyuhauzan/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          target={"_blank"}
          url="https://www.youtube.com/channel/UCjK4Gw_3qI5RFHfQ5TMkUVA"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
