import AllHeadings from "@/components/AllHeadings";
import Card from "@/components/Card";
import ClientLogo from "@/components/homepage/ClientLogo";
import CtaInfo from "@/components/homepage/CtaInfo";
import FlagImg from "@/components/homepage/FlagImg";
import HeaderCarosel from "@/components/homepage/HeaderCarousel";
import SlidingImg from "@/components/homepage/SliderImg";
import React from "react";

export default function Home() {
  return (
    <>
      <HeaderCarosel />

      {/* <!-- CTA Section Start --> */}
      <div
        className="cta-section"
        data-bg-image="images/background/cta-bg.webp"
      >
        <div className="auto-container">
          <CtaInfo />
        </div>
      </div>
      {/* <!-- CTA Section End --> */}

      {/* <!-- About Section --> */}
      <div className="about-section" id="about">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              <SlidingImg />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services Section --> */}
      <div className="py-5" id="what_we_do">
        <div className="auto-container">
          <AllHeadings
            title="Our Services"
            description1="What"
            description2=" We Do"
            y={-100}
          />
          <div className="inner-container">
            <div className="row">
              {/* Service Block 1 */}
              <Card
                title={"XDS"}
                subHeading={"XOM Drilling Systems"}
                list1={"Directional Drilling"}
                list2={"LWD"}
                list3={"MWD"}
                y={-100}
                path="/cardimage-1.jpg"
              />

              {/* Service Block 2 */}
              <Card
                title={"XWM"}
                subHeading={"XOM Well Maintenance"}
                list1={"Well Head Maintenance"}
                list2={"Slickline"}
                list3={"NCP"}
                y={100}
                path="/cardimage-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Services Section --> */}

      <div className="project-section" id="where_we_operate">
        <div className="auto-container">
          {/* Sec Title */}

          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">Local Experience, Global Expertise</div>
                <h2>
                  Where <span>We Operate</span>
                </h2>
              </div>
              <div className="pull-right">
                {/* Additional content can go here yes*/}
              </div>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="row clearfix gap-y-4">
            <h5 className="font-semibold text-black">
              XOM and its subsidiaries employ over 200 employees and consultants
              working in XOM 3 main locations:{" "}
            </h5>

            <ul className="text-start space-y-3 text-white leading-relaxed">
              <li className="flex items-center space-x-2">
                <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                <p className="text-xl text-black">Headquarters: Muscat</p>
              </li>
              <li className="flex items-center space-x-2">
                <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                <p className="text-xl text-black">Workshop: Nizwa</p>
              </li>
              <li className="flex items-center space-x-2">
                <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                <p className="text-xl text-black">Base Camp: Saih Rawl</p>
              </li>
            </ul>

            <div className="flex justify-center items-center">
              <FlagImg
                src={"/images/baseCamp.webp"}
                alt={"Oman"}
                width={300}
                height={100}
                x={-100}
              />
            </div>

            {/* <FlagImg
              src={'/images/oman.webp'}
              alt={'Oman'}
              width={250}
              height={100}
              x={100}
            /> */}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section ">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="mb-0">
            <AllHeadings
              title="Testimonials"
              description1="Our"
              description2=" Clients"
              y={-100}
            />
          </div>
        </div>
      </div>
      {/* End Testimonial Section */}

      {/* Sponsors Section */}
      <div className="relative md:-top-10  -top-5">
        <ClientLogo />
      </div>

      {/* End Sponsors Section */}

      {/* Map Section */}
      <div className="map-section">
        <div className="contact-map-area">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.77219523658755!2d58.412216390354246!3d23.58588870550494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff9967575fd1%3A0x6bdeb83b53fa8e2c!2sOffice%201991!5e0!3m2!1sen!2sin!4v1730627262231!5m2!1sen!2sin"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
            title="area-map"
          ></iframe>
        </div>
      </div>
      {/* End Map Section */}
    </>
  );
}
