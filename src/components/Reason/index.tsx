"use client";

import React from 'react';
import Image from 'next/image';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Reason = () => {
  const reasons = [
    {
      img: img1,
      title: "Expertise",
      description: "With years of experience in the staffing and recruiting industry, our team brings unparalleled expertise to every client engagement.",
    },
    {
      img: img2,
      title: "Personalized Approach",
      description: "We take a personalized approach to each client partnership, developing a customized recruitment strategy aligned with your goals.",
    },
    {
      img: img3,
      title: "Tailored Solutions",
      description: "Whether you're a start-up looking to expand your team or an established enterprise seeking to streamline your hiring process, we're here to help you find the perfect fit.",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="mt-5 mb-5 text-4xl font-bold leading-tight text-black dark:text-white sm:text-[40px] sm:leading-[1.2]">
          Why Choose Asridhi InfoTech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border-2 border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-80">
                <Image
                  src={reason.img}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                  quality={90} // Adjust the quality here
                />
              </div>
              <h3 className="text-center text-xl font-semibold mt-4">{reason.title}</h3>
              <p className="mt-2 text-center text-black">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;
