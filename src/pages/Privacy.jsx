"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const sections = [
  {
    title: "How we collect your personal information",
    content:
      "We collect personal information when you visit our website, fill out contact forms, communicate with us via email, or use our services. This may include your name, email address, phone number, company name, and technical information such as IP address and browser type.",
  },
  {
    title: "Why we need to collect your personal information",
    content:
      "We use your personal information to respond to inquiries, provide services, improve our website, comply with legal obligations, and communicate important updates related to our offerings.",
  },
  {
    title: "To whom we give your personal information",
    content:
      "We do not sell your personal information. We may share information with trusted service providers, legal authorities (when required), and internal teams strictly for business and compliance purposes.",
  },
  {
    title: "International transfers of your personal information",
    content:
      "Your information may be processed in countries outside your location where our partners or infrastructure providers operate. We ensure appropriate safeguards are in place to protect your data.",
  },
  {
    title: "How long we retain your personal information",
    content:
      "We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required by law.",
  },
  {
    title: "How we protect your personal information",
    content:
      "We implement reasonable technical and organizational security measures to protect personal information against unauthorized access, disclosure, alteration, or destruction.",
  },
  {
    title: "Children’s privacy protection",
    content:
      "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children.",
  },
  {
    title: "Controlling your personal information",
    content:
      "You may request access, correction, or deletion of your personal information by contacting us. We will respond in accordance with applicable data protection laws.",
  },
  {
    title: "Links and third parties",
    content:
      "Our website may contain links to third-party websites. PurnaBIT is not responsible for the privacy practices or content of external sites.",
  },
];

export default function Privacy() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
    <Navbar/>
    <main className="bg-white text-slate-900">
      {/* HERO */}
     <section
  className="relative h-[340px] bg-cover bg-center"
  style={{ backgroundImage: "url('/privacy_banner.png')" }}
>
  {/* Dark overlay for readability */}
  

  <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
    
  </div>
</section>


      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">
          Website Privacy Notice — January 2026
        </h2>

        <p className="text-slate-600 leading-relaxed mt-6">
          PurnaBIT Technology Solutions LLP (“PurnaBIT”, “we”, “our”, “us”) is
          committed to protecting your privacy. This Privacy Notice explains how
          we collect, use, disclose, and protect your personal information when
          you visit our website or use our services.
        </p>

        <p className="text-slate-600 leading-relaxed mt-4">
          This notice applies to all visitors, customers, and users of the
          PurnaBIT website.
        </p>

        {/* ACCORDION */}
        <div className="mt-12 border-t border-slate-200">
          {sections.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full flex justify-between items-center
                  py-5 text-left
                  font-semibold text-white
                  bg-gradient-to-r from-[#04125c] to-[#0b2adf]
                  px-6
                  hover:opacity-95 transition
                "
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-[#f6f9ff] text-slate-700 leading-relaxed">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <div className="
  mt-16
  relative
  overflow-hidden
  rounded-2xl
  border border-slate-200
  bg-gradient-to-br from-white via-slate-50 to-white
  p-8 md:p-10
  shadow-lg
">
  {/* subtle accent */}
  <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />

  <div className="relative">
    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
      Contact Information
    </h3>

    <p className="text-slate-600 leading-relaxed max-w-xl">
      If you have any questions, concerns, or requests regarding this Privacy
      Notice or how your personal information is handled, please feel free to
      contact us using the details below.
    </p>

    <div className="mt-6 space-y-3 text-slate-700">
      <p className="font-semibold text-slate-900">
        PurnaBIT Technology Solutions LLP
      </p>

      <p>
        <span className="font-medium text-slate-900">Email:</span>{" "}
        <a
          href="mailto:contact@purnabit.com"
          className="text-[#008080] font-semibold hover:underline"
        >
          contact@purnabit.com
        </a>
      </p>

      <p>
        <span className="font-medium text-slate-900">Location:</span>{" "}
        India
      </p>
    </div>
  </div>
</div>

      </section>
    </main>
    <Footer/>
    </>

  );
}
