import React from "react";

const services = [
  {
    title: "Doctor At Home",
    desc: "Consult trusted healthcare professionals anytime, anywhere",
    image: "/images/doctor-bg.jpg",
  },
  {
    title: "Dose Alert",
    desc: "Stay on schedule with gentle reminders to take your medicine",
    image: "/images/dose-bg.jpg",
  },
  {
    title: "Pharma Near",
    desc: "Check medicine availability near you instantly",
    image: "/images/pharma-bg.jpg",
  },
  {
    title: "Near Test",
    desc: "Find nearby test labs and check test availability.",
    image: "/images/test-bg.jpg",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1918] via-[#15312c] to-[#3b6458] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-12 tracking-tight animate-fadein">
          Our Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`
                group relative rounded-3xl overflow-hidden shadow-2xl border border-[#406257] transition-all
                hover:scale-[1.035] hover:shadow-[0_10px_60px_5px_rgba(80,200,180,0.13)]
                duration-500 animate-cardfade
              `}
              style={{
                animationDelay: `${i * 0.12 + 0.1}s`,
                animationFillMode: "both",
                minHeight: 320,
              }}
            >
              {/* Sharp (not blurred) image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
                draggable={false}
              />
              {/* Glass overlay but no blur, only translucent dark */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-tr from-black/60 via-transparent to-black/20
                  group-hover:from-[#1f5255cc] group-hover:to-[#334e48dd] 
                  transition-all duration-500
                "
                style={{ zIndex: 2 }}
              />
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="p-8 pt-10">
                  <h3 className="text-[2.3rem] font-extrabold text-white drop-shadow-md mb-2 leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-[#95ffe2] via-[#fff] to-[#4ae0bd] bg-clip-text text-transparent group-hover:from-[#fffbe0] group-hover:to-[#7de9c7] transition-all duration-700">
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-lg italic text-white font-medium drop-shadow group-hover:text-[#e0fffa] transition-all duration-500">
                    {service.desc}
                  </p>
                </div>
                <div className="flex justify-end items-end p-8 pt-0">
                  {/* CTA button with shimmer effect */}
                  <button
                    className="
                      relative flex items-center bg-white/95 rounded-full px-14 py-3 shadow-lg
                      overflow-hidden group
                      hover:bg-gradient-to-r hover:from-[#38d4b3] hover:to-[#2ba899] hover:text-white transition-all
                      duration-500
                      hover:shadow-[0_0_32px_6px_#28e7cf33]
                    "
                  >
                    <span className="font-semibold text-lg mr-2 tracking-wide">
                      Explore
                    </span>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="ml-1"
                    >
                      <circle cx="10" cy="10" r="10" fill="#174139" />
                      <path
                        d="M7.5 10h5M12 10l-2-2m2 2l-2 2"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Shimmer */}
                    <span className="absolute left-[-80%] top-0 w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-md group-hover:animate-shimmer"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes cardfade {
          0% { opacity: 0; transform: translateY(30px) scale(0.98);}
          100% { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-cardfade { animation: cardfade 0.77s cubic-bezier(.36,.7,.36,1.01) both; }

        @keyframes fadein {
          0% { opacity: 0; transform: translateY(-40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadein { animation: fadein 1s cubic-bezier(.36,.7,.36,1.01) both; }

        @keyframes shimmer {
          0% { left: -80%; }
          80% { left: 120%; }
          100% { left: 120%; }
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1.2s linear;
        }
      `}</style>
    </div>
  );
};

export default Services;
