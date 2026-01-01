// src/pages/ITPage.jsx
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ITPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="relative bg-slate-50 text-slate-900">

       {/* 🔙 BACK BUTTON (TOP LEFT) */}
<div className="absolute top-28 left-6 md:left-8 z-50">
  <button
    onClick={() => navigate(-1)}
    className="
      group flex items-center gap-2
      px-4 py-2
      rounded-full
      border border-black
      bg-white/5 backdrop-blur-md
      text-sm font-semibold
      text-black

      hover:text-orange-400
      hover:border-orange-400/60
      hover:bg-orange-400/10

      transition-all duration-300 ease-out
    "
  >
    <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
      ←
    </span>
    <span className="hidden sm:inline">Back</span>
  </button>
</div>

{/* ================= HERO BANNER ================= */}
<section
  className="
    relative min-h-[70vh]
    flex items-center justify-center
    bg-cover bg-center
    pt-28 pb-20
  "
  style={{ backgroundImage: "url('/Background 1.jpg')" }}
>
  {/* Dark overlay for text visibility */}
  {/* <div className="absolute inset-0 bg-black/65"></div> */}

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
      Enterprise <span className="text-orange-600">IT Services</span>
    </h1>

    <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl mx-auto">
      We deliver reliable, secure, and scalable IT solutions that help
      organizations grow, improve operational efficiency, and achieve
      long-term digital transformation with confidence.
    </p>
  </div>
</section>


        {/* ================= SECTION 1 ================= */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            <div className="animate-fade-up">
              <h2 className="text-3xl font-semibold mb-5">
                Cloud Infrastructure & Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our cloud services help organizations modernize their
                infrastructure while maintaining high availability,
                performance, and security across public, private,
                and hybrid environments.
              </p>
            </div>

            <div className="animate-fade-up rounded-xl overflow-hidden border border-slate-200">
              <img
                src="/cloud.png"
                alt="Cloud Infrastructure"
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section className="py-20 px-6 bg-slate-100">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            <div className="animate-fade-up rounded-xl overflow-hidden border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Cybersecurity"
                className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="animate-fade-up">
              <h2 className="text-3xl font-semibold mb-5">
                Cybersecurity & Risk Management
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We protect critical systems and sensitive data through
                proactive security monitoring, risk assessment, and
                compliance-focused strategies.
              </p>
            </div>

          </div>
        </section>

        {/* ================= DELIVERY MODEL ================= */}
        <section className="py-20 px-4 bg-[#faf1c6]">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl font-bold mb-8 animate-fade-up">
              How We Deliver IT Services
            </h2>

            <p className="max-w-4xl text-lg text-black mb-14 leading-relaxed animate-fade-up">
              Our IT services are delivered through flexible engagement
              models to meet the operational and strategic needs of
              organizations of all sizes.
            </p>

            <div className="grid md:grid-cols-3 gap-10">

              {[
                {
                  title: "On-Site Services",
                  desc:
                    "Our experts work directly at your location to support infrastructure setup, audits, and mission-critical operations.",
                },
                {
                  title: "Remote Support",
                  desc:
                    "Secure remote delivery enables faster response times and continuous monitoring without location constraints.",
                },
                {
                  title: "Hybrid Engagement",
                  desc:
                    "A balanced combination of on-site and remote services ensures flexibility and long-term stability.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white border border-slate-300
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-xl
                  "
                >
                  <div className="h-12 bg-gradient-to-r from-orange-600 to-purple-600" />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="py-20 px-4 bg-white">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-up">
            Our IT Capabilities
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Cloud Migration",
                desc: "Structured and secure migration strategies with minimal downtime.",
              },
              {
                title: "Network & Infrastructure Security",
                desc: "Firewall configuration, monitoring, and access control solutions.",
              },
              {
                title: "DevOps & Automation",
                desc: "CI/CD pipelines, automation, and performance optimization.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="
                  bg-white border border-slate-200
                  rounded-xl p-8
                  transition-all duration-300
                  hover:border-blue-500 hover:shadow-lg
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 bg-slate-100 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-up">
            Partner With Us for Reliable IT
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 mb-10 animate-fade-up">
            Talk to our IT specialists to design secure, scalable,
            and future-ready technology solutions.
          </p>

          <button
            className="
              group px-10 py-4 bg-orange-600 text-white
              font-semibold rounded-md
              hover:bg-orange-700 hover:shadow-lg
              transition-all duration-300
            "
          >
            Get in Touch
            <span className="inline-block ml-2 group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}
