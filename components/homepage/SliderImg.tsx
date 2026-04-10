// 'use client' ensures this is a client-side component.
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function SlidingImg() {
  return (
    <>
      <motion.div
        className="image-column col-lg-6" // Add your styling classes here
        initial={{ opacity: 0, x: -50 }} // Initial state: hidden and slightly to the right
        whileInView={{ opacity: 1, x: 0 }} // Final state: fully visible and moved to original position
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Animation details
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      >
        <div className="about-image">
          <div className="about-inner-image">
            <Image
              src="/images/about/home-about.webp"
              alt="about"
              width={600}
              height={600}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="content-column col-lg-6 col-md-12 col-sm-12 mb-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="about-column">
          <div className="sec-title">
            <div className="title">about XOM</div>
            <h2>
              One of the Leading <span>Local Drilling Systems</span> and{" "}
              <span>Well Placement providers</span> in Oman
            </h2>
          </div>
          <div className="text">
            <p>
              XOM (formerly Falcon Investments LLC) is an oilfield services
              company based in Oman. Founded in 2016, XOM has secured several
              contracts with Petroleum Development Oman (PDO), a major producer
              of oil and gas in Oman, and Daleel, a private operator in the
              region.
            </p>

            <p>
              XOM offers a range of services, including directional drilling,
              non-corrosive pumping, well maintenance, slickline services, and
              more. Over the past five years, revenue from its contracts with
              PDO and Daleel has remained stable and consistent. XOM has an
              ambitious plan to grow its service delivery and revenue to reach
              100 Mn USD per annum by year 2028.
            </p>
            <div className="btn-box md:mb-10">
              <Link href="about-us" className="theme-btn btn-style-one">
                <span className="txt">About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SlidingImg;
