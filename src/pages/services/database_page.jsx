// DatabasePage.jsx
// ✅ React-compatible version (NO next/image)
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function DatabasePage() {
    const navigate = useNavigate(); 
  return (
    <>
    <Navbar/>
    <main className="bg-[#f8fafc] text-gray-900 overflow-x-hidden">

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


        
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/banner.png"
          alt="Database Infrastructure"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-[#0f172a]/20" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-2">
            <div className="w-full md:w-[55%] lg:w-[50%]">
              <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight animate-slideUp">
                Database{" "}
                <span className="text-orange-600">Services & Solutions</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-black font-semibold leading-relaxed animate-slideUp delay-150">
                Expert database management, optimization, and monitoring
                solutions for MySQL, PostgreSQL, MariaDB, and cloud databases.
                Specializing in HA setups, performance tuning, disaster
                recovery, and Kubernetes deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE EXPERTISE ================= */}
      <section className="bg-[#f7fafc] py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT COLUMN – SUPPORTED TECHNOLOGIES */}

          {/* LEFT COLUMN */}
          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition">
            <div className="space-y-10">
              {/* HEADER */}
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  Supported Technologies
                </h2>
                <div className="mt-3 h-[3px] w-full bg-[#1cc8a0]" />
              </div>

              {/* MySQL / Percona */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-4 h-4 rounded-full bg-[#590303]" />
                  <h3 className="text-lg font-bold">MySQL / Percona Server</h3>
                  <span className="ml-auto bg-[#590303] text-white text-sm px-3 py-1 rounded-full">
                    4
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "MySQL",
                    "Percona Server",
                    "Percona Toolkit",
                    "Percona XtraBackup",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#590303] px-4 py-3 rounded-lg shadow-sm
                       transition hover:shadow-md hover:-translate-y-0.5 hover:bg-[#d0cac3]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* MySQL HA */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">

                   <span className="inline-block w-4 h-4 rounded-full bg-[#e16f12]" />

                  <h3 className="text-lg font-bold">
                    MySQL / Percona HA Solutions
                  </h3>
                  <span className="ml-auto bg-[#e16f12] text-white text-sm px-3 py-1 rounded-full">
                    3
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Group Replication",
                    "InnoDB Cluster",
                    "PXC (Percona XtraDB Cluster)",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#e16f12] px-4 py-3 rounded-lg shadow-sm
                       transition hover:shadow-md hover:-translate-y-0.5 hover:bg-[#f6ebd7]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block w-4 h-4 rounded-full bg-[#2563eb]" />
                  <h3 className="text-lg font-bold">PostgreSQL Ecosystem</h3>
                  <span className="ml-auto bg-[#2563eb] text-white text-sm px-3 py-1 rounded-full">
                    4
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "PostgreSQL Replication",
                    "Patroni",
                    "pgBouncer",
                    "PostgreSQL Extensions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#2563eb] px-4 py-3 rounded-lg shadow-sm
                       transition hover:shadow-md hover:-translate-y-0.5 hover:bg-[#eff6ff]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* MariaDB */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-4 h-4 rounded-full bg-[#c2410c]" />
                  <h3 className="text-lg font-bold">MariaDB</h3>
                  <span className="ml-auto bg-[#c2410c] text-white text-sm px-3 py-1 rounded-full">
                    1
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="bg-white border-l-4 border-[#c2410c] px-4 py-3 rounded-lg shadow-sm
                     transition hover:shadow-md hover:-translate-y-0.5 hover:bg-[#fff7ed]"
                  >
                    MariaDB Installation & Management
                  </div>
                </div>
              </div>

              {/* Database Operators */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-4 h-4 rounded-full bg-[#10cfd9]" />
                  <h3 className="text-lg font-bold">
                    Database Operators (Kubernetes / OpenShift)
                  </h3>
                  <span className="ml-auto bg-[#10cfd9] text-white text-sm px-3 py-1 rounded-full">
                    4
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Kubernetes",
                    "OpenShift",
                    "Percona k8-pxc Operator",
                    "k8-pg Operator",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#10cfd9]
                   px-4 py-3 rounded-lg shadow-sm
                   transition hover:shadow-md hover:-translate-y-0.5
                   hover:bg-[#bfd9dd]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Monitoring */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                 <span className="inline-block w-4 h-4 rounded-full bg-[#ef4444]" />
                  <h3 className="text-lg font-bold">Database Monitoring</h3>
                  <span className="ml-auto bg-[#ef4444] text-white text-sm px-3 py-1 rounded-full">
                    2
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "PMM (Percona Monitoring)",
                    "Custom Monitoring Solutions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#ef4444]
                   px-4 py-3 rounded-lg shadow-sm
                   transition hover:shadow-md hover:-translate-y-0.5
                   hover:bg-[#fee2e2]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud DB */}
              <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                   <span className="inline-block w-4 h-4 rounded-full bg-[#f59e0b]" />
                  <h3 className="text-lg font-bold">Cloud Database Services</h3>
                  <span className="ml-auto bg-[#f59e0b] text-white text-sm px-3 py-1 rounded-full">
                    2
                  </span>
                </div>

                <div className="h-[2px] bg-gray-700 mb-6" />

                <div className="grid grid-cols-2 gap-4">
                  {["AWS RDS MySQL", "AWS RDS PostgreSQL"].map((item) => (
                    <div
                      key={item}
                      className="bg-white border-l-4 border-[#f59e0b] px-4 py-3 rounded-lg shadow-sm
                       transition hover:shadow-md hover:-translate-y-0.5 hover:bg-[#fffbeb]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#0f172a]">
                Administration & Operations
              </h3>
              <div className="mt-3 h-[3px] w-full bg-gradient-to-r from-[#22c55e] to-[#14b8a6]" />
              <p className="mt-4 text-gray-600">
                End-to-end database management services for optimal performance,
                reliability, and security.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Installation & Setup",
                  items: [
                    "Custom database installation",
                    "Configuration tuning",
                    "Security hardening",
                    "Version upgrade / downgrade",
                  ],
                },
                {
                  title: "High Availability",
                  items: [
                    "HA architecture design",
                    "Failover solutions",
                    "Replication management",
                    "Load balancing",
                  ],
                },
                {
                  title: "Performance Optimization",
                  items: [
                    "Query optimization",
                    "Index tuning",
                    "Resource management",
                    "Bottleneck analysis",
                  ],
                },
                {
                  title: "Backup & Recovery",
                  items: [
                    "Backup strategy design",
                    "Point-in-time recovery",
                    "Disaster recovery planning",
                    "Backup automation",
                  ],
                },
                {
                  title: "Health & Monitoring",
                  items: [
                    "Health checkups",
                    "Database monitoring",
                    "Performance reporting",
                    "Alert configuration",
                  ],
                },
                {
                  title: "Cloud & Kubernetes",
                  items: [
                    "K8s database operators",
                    "Cloud migration",
                    "Containerized deployments",
                    "Auto-scaling setup",
                  ],
                },
                {
                  title: "Version Management",
                  items: [
                    "Database upgrade planning",
                    "Downgrade support",
                    "Compatibility testing",
                    "Rollback procedures",
                  ],
                },
                {
                  title: "Security & Compliance",
                  items: [
                    "Access control management",
                    "Encryption setup",
                    "Audit logging",
                    "Compliance reporting",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="bg-[#f0fdfa] rounded-xl p-6 border-t-4 border-[#14b8a6]
                             shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <h4 className="font-semibold text-lg mb-4 text-[#0f766e]">
                    {block.title}
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-[#14b8a6]">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
     <section className="relative py-10 px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0b1220] text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Optimize Your{" "}
            <span className="text-orange-600">Database Infrastructure?</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed mb-14">
            Contact us for a comprehensive database assessment and customized
            solution proposal. We provide
            expert consultation for all your database needs.
          </p>

          {/* CONTACT CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
  
  {/* EMAIL */}
  <div className="flex justify-center">
    <div
      className="flex items-center gap-4 bg-white/10 backdrop-blur-lg
                 rounded-xl px-6 py-5 hover:bg-white/15 transition
                 w-full max-w-md justify-center"
    >
      <span className="text-[#7cf3d0] text-2xl">✉</span>
      <span className="text-lg font-medium">contact@purnabit.com</span>
    </div>
  </div>

  {/* WEBSITE */}
  <div className="flex justify-center">
    <div
      className="flex items-center gap-4 bg-white/10 backdrop-blur-lg
                 rounded-xl px-6 py-5 hover:bg-white/15 transition
                 w-full max-w-md justify-center"
    >
      <span className="text-[#7cf3d0] text-2xl">🌐</span>
      <span className="text-lg font-medium">www.purnabit.com</span>
    </div>
  </div>

</div>





        </div>
      </section>
     {/* code for white line */}
     <div className="h-px bg-white"></div>

        <Footer />
    </main>
    </>
  );
}

/* ================= REUSABLE COMPONENT ================= */

// function TechBlock({ title, items, color, count, bgHover }) {
//   return (
//     <div className="bg-[#f9fbfc] p-6 rounded-xl transition hover:-translate-y-1 hover:shadow-lg">
//       <div className="flex items-center gap-3 mb-4">
//         <span
//           className="inline-block w-4 h-4 rounded-full"
//           style={{ backgroundColor: color }}
//         />
//         <h3 className="text-lg font-bold">{title}</h3>
//         <span
//           className="ml-auto text-white text-sm px-3 py-1 rounded-full"
//           style={{ backgroundColor: color }}
//         >
//           {count}
//         </span>
//       </div>

//       <div className="h-[2px] bg-gray-700 mb-6" />

//       <div className="grid grid-cols-2 gap-4">
//         {items.map((item) => (
//           <div
//             key={item}
//             className="bg-white px-4 py-3 rounded-lg shadow-sm border-l-4
//                        transition hover:shadow-md hover:-translate-y-0.5"
//             style={{ borderColor: color, backgroundColor: bgHover }}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>

    
//   );

//   <Footer/>
// }