import Image from "next/image"

export function CompanyInfo() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#6197C0] lg:text-3xl">
              About The Company
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>
                Biswas Enterprise is a leading event management and labour solutions
                provider based in Kolkata, India. With over 15 years of experience, we
                have established ourselves as a trusted name in the industry.
              </p>

              <p>
                We specialize in providing skilled and reliable workforce for various
                types of events including corporate functions, weddings, social
                gatherings, conferences, and exhibitions. Our team of experienced
                professionals ensures seamless execution of every event.
              </p>

              <p>
                Our commitment to quality, punctuality, and professionalism has earned
                us the trust of hundreds of satisfied clients across Eastern India. We
                take pride in our ability to scale our services according to the unique
                requirements of each event.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/biswas_img/Bimg-13.jpeg"
              alt="Event management team at work"
              width={800}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
