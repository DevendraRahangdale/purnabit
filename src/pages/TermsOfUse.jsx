"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const termsSections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree to these terms, you must not use this website. These terms apply to all visitors, users, and others who access the website.",
  },
  {
    title: "Use of the Website",
    content:
      "You may use this website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the website in any way that could damage, disable, overburden, or impair the site or interfere with any other party’s use of the website.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content on this website, including text, graphics, logos, images, software, and design elements, is the property of PurnaBIT Technology Solutions LLP or its licensors and is protected by intellectual property laws. You may not copy, reproduce, modify, distribute, or create derivative works without prior written consent.",
  },
  {
    title: "User Responsibilities",
    content:
      "You are responsible for ensuring that any information you provide on this website is accurate and up to date. You agree not to submit false, misleading, or unlawful information or engage in any activity that violates applicable laws or regulations.",
  },
  {
    title: "Third-Party Links",
    content:
      "This website may contain links to third-party websites for convenience or informational purposes. PurnaBIT does not control or endorse these websites and is not responsible for their content, availability, or privacy practices.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "This website and its content are provided on an “as is” and “as available” basis. PurnaBIT makes no warranties, express or implied, regarding the accuracy, reliability, or availability of the website or its content.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, PurnaBIT shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website.",
  },
  {
    title: "Modifications to the Terms",
    content:
      "PurnaBIT reserves the right to modify or update these Terms of Use at any time without prior notice. Changes will be effective immediately upon posting on this page. Continued use of the website constitutes acceptance of the revised terms.",
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions regarding these Terms of Use, please contact PurnaBIT Technology Solutions LLP at contact@purnabit.com.",
  },
];

export default function TermsOfUse() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section
        className="relative h-[340px] bg-cover bg-center"
        style={{ backgroundImage: "url('/terms_banner.png')" }}
      >
    
       
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">
          Website Terms of Use — January 2026
        </h2>

        <p className="text-slate-600 leading-relaxed mt-6">
          These Terms of Use govern your access to and use of the PurnaBIT
          Technology Solutions LLP website. Please read these terms carefully
          before using this website.
        </p>

        <p className="text-slate-600 leading-relaxed mt-4">
          By accessing, browsing, or using this website, you acknowledge that
          you have read, understood, and agree to be bound by these Terms of
          Use.
        </p>

        {/* ABOUT TERMS */}
        <h3 className="text-2xl font-extrabold mt-14 mb-6">
          About our Terms of Use
        </h3>

        {/* ACCORDION */}
        <div className="border-t border-slate-200">
          {termsSections.map((item, index) => (
            <div key={index} className="border-b border-slate-200">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full flex justify-between items-center
                  py-5 px-6 text-left
                  font-semibold text-white
                  bg-gradient-to-r from-[#04125c] to-[#0b2adf]
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

        {/* CONTACT CARD */}
        <div className="
          mt-16
          rounded-2xl
          border border-slate-200
          bg-gradient-to-br from-white via-slate-50 to-white
          p-8 md:p-10
          shadow-lg
        ">
          <h4 className="text-xl font-extrabold mb-3">
            Contact Information
          </h4>

          <p className="text-slate-600">
            If you have questions regarding these Terms of Use, please contact:
          </p>

          <p className="mt-4 font-semibold text-slate-900">
            PurnaBIT Technology Solutions LLP
          </p>

          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:contact@purnabit.com"
              className="text-[#008080] font-semibold hover:underline"
            >
              contact@purnabit.com
            </a>
          </p>

          <p className="mt-1">India</p>
        </div>
      </section>
    </main>
  );
}
