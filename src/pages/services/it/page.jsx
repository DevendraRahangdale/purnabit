// src/pages/ITPage.jsx

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";



export default function ITPage() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <main className="text-white bg-[#0b0b0b] overflow-hidden">
        {/* ================= HERO SECTION ================= */}
       <section className="relative h-[70vh] w-full overflow-hidden bg-black">
          <img
            src="/itservice.png"
            alt="IT Services"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#1a0f05]/70" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 animate-fadeUp">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Transform Your{" "}
              <span className="text-orange-600">IT Infrastructure</span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl text-white/80">
              Secure, scalable, and future-ready IT services designed to power
              modern businesses.
            </p>
          </div>
        </section>
 {/* <div className="h-px bg-white"></div> */}
        {/* ================= SECTION 1 ================= */}
        <section className="grid md:grid-cols-2 gap-16 px-10 py-20 bg-[#121212] items-center">
          <div className="animate-fadeLeft">
            <h2 className="text-4xl font-bold mb-6">
              Cloud Infrastructure & Security
            </h2>
            <p className="text-white/75 leading-relaxed text-lg">
              We help organizations migrate, secure, and optimize cloud
              environments with enterprise-grade reliability and compliance.
            </p>
          </div>

          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl group animate-fadeRight">
            <img
              src="/cloud.png"
              alt="Cloud Services"
              className="absolute inset-0 w-full h-full object-cover
                         group-hover:scale-110 transition duration-700"
            />
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="grid md:grid-cols-2 gap-16 px-10 py-20 bg-[#181818] items-center">
          <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl group animate-fadeLeft">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Cybersecurity"
              className="absolute inset-0 w-full h-full object-cover
                         group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="animate-fadeRight">
            <h2 className="text-4xl font-bold mb-6">
              Cybersecurity & Risk Management
            </h2>
            <p className="text-white/75 leading-relaxed text-lg">
              Defend your systems against modern threats with proactive
              monitoring, vulnerability assessments, and rapid incident
              response.
            </p>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-26 px-10 bg-[#0e0e0e]">
          <h2 className="text-5xl font-extrabold text-center mb-16">
            Our IT Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless transition to scalable, secure cloud platforms.",
              },
              {
                title: "Network Security",
                desc: "Advanced threat detection, firewalls, and secure architectures.",
              },
              {
                title: "DevOps Automation",
                desc: "CI/CD pipelines, containerization, and faster releases.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-[#161616] p-8 rounded-2xl
                           border border-white/10
                           hover:border-orange-700 hover:-translate-y-3
                           hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]
                           transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative py-20 text-center overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src="/datacenter1.png"
              alt="IT Infrastructure Background"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

          {/* CONTENT */}
          <div className="relative z-10 animate-fadeUp px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Ready to Modernize?
            </h2>

            <p className="max-w-3xl text-white/90 mx-auto mb-10 text-lg">
              Let’s secure your systems, optimize performance, and scale your IT
              infrastructure with confidence.
            </p>

            <a
              className="inline-block px-14 py-5 bg-white text-black
                         font-bold text-lg rounded-full
                         hover:scale-110
                         hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]
                         transition-all duration-300"
            >
              Start Your IT Journey →
            </a>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </main>
      <Footer/>
    </>
  );
}
