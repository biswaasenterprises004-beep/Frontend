import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="bg-white px-4 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {/* Mission Card */}
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6E39]/10 sm:h-12 sm:w-12">
              <Target className="h-5 w-5 text-[#FF6E39] sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#6197C0] sm:text-2xl">Our Mission</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            To deliver exceptional event staffing solutions by providing highly
            skilled, professional, and reliable workforce that exceeds client
            expectations. We aim to make every event a memorable success through
            our dedicated service and commitment to excellence.
          </p>
        </div>

        {/* Vision Card */}
        <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6197C0]/10 sm:h-12 sm:w-12">
              <Eye className="h-5 w-5 text-[#6197C0] sm:h-6 sm:w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#FF6E39] sm:text-2xl">Our Vision</h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            To become the most trusted and preferred event management partner
            across India, setting industry standards for quality, reliability, and
            innovation. We envision a future where every event runs effortlessly
            with our professional support.
          </p>
        </div>
      </div>
    </section>
  )
}
