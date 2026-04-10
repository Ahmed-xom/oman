import TeamCard from '@/components/TeamCard';
import TeamCard2 from '@/components/TeamCard2';

import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
export const generateMetadata = (): Metadata => {
    return {
      title: 'Management | XOM Oman | Oil Field Services',
      description:
        'Get in touch with XOM Oman to learn more about our comprehensive oil field services. Our expert team is ready to assist you with all your inquiries and provide tailored solutions for your needs.',
    };
  };
function Page() {
  return (
    <>
    <section>
        <div className="relative page-title d-flex align-items-center justify-content-center  bg-[url('/images/background/our-team.webp')] h-[50vh] xl:h-[60vh] w-full bg-cover bg-[center_left_-24rem] md:bg-center  bg-no-repeat">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div> */}
        <div className='auto-container w-100'>
        <div className="  text-white text-2xl pt-1/2 z-10">
            {/* Bootstrap Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb  mb-3">
              <li className="breadcrumb-item">
                  <Link href="/" className="text-white " id="white-textss">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-greenish "
                  aria-current="page"
                >
                  Our Leaders
                </li>
              </ol>
            </nav>
            <h2 className="text-white font-bold">Our Leaders</h2>
          </div>
        </div>
          
        </div>
      </section>

      <div className="bg-gray-100 min-h-screen">
      <div className="">
        <div className="container flex justify-center mx-auto pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="xl:text-4xl text-3xl title text-black font-extrabold pb-6">
            Board of Directors 
            </h1>
          </div>
        </div>
        <div className="w-full px-6 lg:px-10 pt-10">
          <div className=" auto-container w-100 mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="flex flex-wrap justify-center"
            >
              <TeamCard />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 min-h-screen">
      <div className="mb-16">
        <div className="container flex justify-center mx-auto pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="xl:text-4xl text-3xl title text-black font-extrabold pb-6">
            Management
            </h1>
          </div>
        </div>
        <div className="w-full px-6 lg:px-10 pt-10">
          <div className=" auto-container w-100 mx-auto">
            <div
              role="list"
              aria-label="Behind the scenes People"
              className="flex flex-wrap justify-center gap-x-20"
            >
              <TeamCard2 />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Page;
