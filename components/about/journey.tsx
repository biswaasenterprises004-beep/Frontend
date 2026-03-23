import { Users, TrendingUp, Target, Eye } from "lucide-react"

const milestones = [
  {
    year: "2009",
    title: "The Beginning",
    description:
      "Started with a small team of 20 dedicated professionals serving local events in Kolkata",
    icon: Users,
  },
  {
    year: "2013",
    title: "Expansion Phase",
    description:
      "Expanded operations across West Bengal with a workforce of 150+ skilled workers",
    icon: TrendingUp,
  },
  {
    year: "2017",
    title: "Regional Recognition",
    description:
      "Became the preferred choice for major corporate events in Eastern India",
    icon: Target,
  },
  {
    year: "2024",
    title: "Industry Leader",
    description:
      "Now serving 500+ skilled workers and managing 1000+ events annually",
    icon: Eye,
  },
]

export function Journey() {
  return (
    <section className="bg-white px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-load animate-zoom-in mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#07538D] lg:text-4xl">
            Our Journey
          </h2>
          <p className="text-gray-600">A legacy of excellence and growth</p>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="animate-on-load animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
                {/* Year */}
                <div className="w-full shrink-0 text-center md:w-32 md:text-center lg:w-40">
                  <span className="text-2xl font-bold text-[#FF6E39] transition-colors duration-200 group-hover:text-[#FF8A55] sm:text-3xl md:text-4xl">
                    {milestone.year}
                  </span>
                </div>

                {/* Card + Icon (icon inside card and overlapping left border on desktop) */}
                <div className="flex-1">
                  <div className="relative rounded-xl bg-white p-5 shadow-lg transition-transform duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1 md:ml-10 md:p-6 md:pl-20 md:group-hover:-translate-y-2">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#07538D] shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#0b5f8b] md:absolute md:left-0 md:top-1/2 md:mb-0 md:h-12 md:w-12 md:-translate-x-1/2 md:-translate-y-1/2">
                      <milestone.icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                    </div>

                    <h3 className="mb-1 text-lg font-semibold text-[#07538D] sm:text-xl">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
