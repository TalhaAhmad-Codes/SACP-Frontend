function TeamSection() {
  const teamMembers = [
    {
      name: "Talha Ahmad",
      role: "Founder & Backend Developer",
      badge: "BE",
      description:
        "Founder and main architect of the platform's core logic and database management using .NET Core to ensure high performance.",
    },
    {
      name: "Hafiz Muhammad Raza",
      role: "Frontend Developer I",
      badge: "FE",
      description:
        "Responsible for building modern, clean, and responsive user interfaces and ensuring a seamless experience using React and Tailwind CSS.",
    },
    {
      name: "Furqan Moin",
      role: "Frontend Developer II",
      badge: "FE",
      description:
        "Focusing on accessibility and responsive design principles on the top of auth and real-time services layers.",
    },
    {
      name: "Areeb Siddiqui",
      role: "AI Engineer",
      badge: "AI",
      description:
        "Integrating advanced AI capabilities, including ML-driven email classification and intelligent automation.",
    },
  ];
  return (
    <>
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-justify"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                      {member.badge}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-blue-600 mb-4">
                    {member.role}
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default TeamSection;
