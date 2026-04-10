'use client';
import React from 'react';
import { motion } from 'framer-motion';
function CtaInfo() {
  return (
    <motion.div
      className="row align-items-center"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true, amount: 1 }}
    >
      <div className="col-lg-7">
        {/* <!-- CTA Content Start --> */}
        <div className="cta-content">
          <h2 className="title">
            For Any Information Please{' '}
            <span className="text-bold">email us on: </span>
          </h2>
          <p>We provide a dedicated support 24/7 for any your question</p>
        </div>
        {/* <!-- CTA Content End --> */}
      </div>
      <div className="col-lg-5">
        {/* <!-- CTA Phone Number Start --> */}
        <div className="cta-phone text-lg-end text-strat">
          <a href="mailto:info@xomoman.com">
            {' '}
            <h2 className="title ">info@xomoman.com</h2>
          </a>
        </div>
        {/* <!-- CTA Phone Number Start --> */}
      </div>
    </motion.div>
  );
}

export default CtaInfo;
