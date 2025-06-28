import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(100,151,130,1)_19%,_rgba(75,101,101,1)_81%)] relative overflow-x-hidden">
      {/* 1440px fixed-width container */}
      <div className="relative w-[1440px] h-[1024px] mx-auto">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center h-[102px] px-[60px] z-10 shadow-[0px_4px_60px_#00000040]">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="h-10 w-10 object-contain" />
            <span className="text-[24px] font-semibold text-white">CareMore</span>
          </div>
          <nav className="flex gap-[44px]">
            <Link to="/" className="text-white text-[24px] font-medium hover:text-orange-300">HOME</Link>
            <Link to="/about" className="text-white text-[24px] font-medium hover:text-orange-300">ABOUT</Link>
            <Link to="/faq" className="text-white text-[24px] font-medium hover:text-orange-300">FAQ</Link>
            <Link to="/contact" className="text-white text-[24px] font-medium hover:text-orange-300">CONTACT</Link>
          </nav>
        </div>

        {/* Main Overlap */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          {/* Main heading and dashed box */}
          <div className="absolute left-[118px] top-[200px] pointer-events-auto">
            <h1 className="font-extrabold text-[56px] leading-[64px] text-white drop-shadow-md mb-[24px]">
              Seamless Digital <br />
              {/* Animated Gradient Healthcare */}
              <span
                className="bg-white px-8 py-1 rounded-[50px] inline-block shadow-md my-2"
                style={{
                  display: "inline-block",
                  background: "#fff",
                  borderRadius: "50px",
                }}
              >
                <span
                  className="
                    font-extrabold text-[64px] leading-none
                    bg-gradient-to-r from-[#0e2d2b] via-[#4eb4a0] to-[#6bb1a2]
                    bg-[length:200%_200%]
                    bg-clip-text text-transparent
                    drop-shadow-[0_6px_12px_rgba(50,70,60,0.27)]
                    animate-gradient-x
                  "
                  style={{
                    backgroundImage: "linear-gradient(90deg,#0e2d2b,#4eb4a0,#6bb1a2,#0e2d2b)",
                    backgroundSize: "200% 200%",
                    WebkitTextStroke: "0px",
                  }}
                >
                  Healthcare
                </span>
              </span>
              <br />
              at your fingertips
            </h1>
            {/* Dashed Rectangle with button */}
            <div className="border-2 border-dashed border-[#9747ff] rounded-[20px] w-[542px] h-[97px] flex items-center px-8 mb-8 bg-transparent">
              <button className="bg-white text-black font-semibold text-[22px] px-8 py-2 rounded-full shadow hover:scale-105 transition flex items-center">
                Get Started As <span className="ml-2 text-green-600 text-xl">●</span>
              </button>
            </div>
            {/* Subtext */}
            <div className="mt-7">
              <p className="text-white text-[22px] leading-[28px]">
                Access doctors, pharmacy,<br />and diagnostic services– all in one place.
              </p>
            </div>
          </div>

          {/* Right-side images - Figma-accurate placement */}
          <div className="absolute left-[779px] top-[156px] w-[604px] h-[712px]">
            {/* Tall Left */}
            <img src="/images/ai-doctor.jpg"
                alt="AI"
                className="absolute left-0 top-[27px] w-[289px] h-[441px] rounded-[30px] object-cover shadow" />
            {/* Bottom Left */}
            <img src="/images/lab.jpg"
                alt="Lab"
                className="absolute left-0 top-[498px] w-[289px] h-[214px] rounded-[30px] object-cover shadow" />
            {/* Top Right */}
            <img src="/images/medicine.jpg"
                alt="Medicine"
                className="absolute left-[315px] top-0 w-[289px] h-[214px] rounded-[30px] object-cover shadow" />
            {/* Tall Right */}
            <img src="/images/surgery.jpg"
                alt="Surgery"
                className="absolute left-[315px] top-[242px] w-[289px] h-[441px] rounded-[30px] object-cover shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
