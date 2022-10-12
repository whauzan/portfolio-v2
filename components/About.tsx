import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src="https://media.graphassets.com/0H8t8W3SSmstKvasxK1l"
          width={250}
          height={250}
          className="rounded-full object-cover"
        />
      </motion.div>
      <div>
        <h2 className="text-2xl font-semibold">
          Here is a <span className="border-b-2 border-[#ED1C24]">little</span>{" "}
          background
        </h2>
        <p>
          Hello! My name is Wahyu and I enjoy creating things that can help
          people in this digital era. I started diving in programming since 2019
          when I got scholarship from
          <a href="https://medcom.id" target="blank" rel="noreferrer">
            medcom.id
          </a>
          and studied at Telkom University majoring in Informatics - turns out
          program and build something is full of fun.
        </p>
        <p>
          Fast-forward to today, and I've had the privilege of working at a
          german-based company,
          <a href="https://www.techbros.io/" target="blank" rel="noreferrer">
            Techbros
          </a>
          and right now my focus is to design and develop websites at
          <a
            href="https://www.linkedin.com/company/pukulenam/"
            target="blank"
            rel="noreferrer"
          >
            PukulEnam
          </a>
          for a variety of clients.
        </p>
      </div>
    </div>
  );
}
