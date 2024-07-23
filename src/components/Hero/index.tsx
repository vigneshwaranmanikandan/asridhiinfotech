import Image from "next/image";
import Link from "next/link";
import img1 from "./img1.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gray-600 pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-yellow sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Welcome to Asridhi Infotech
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44] mb-2">
                  We understand that building a successful business starts with assembling the right team.
                </p>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  As a premier staffing and recruiting company, we specialize in connecting businesses with top-tier talent.
                </p>
                <Link href="/contact">
                  <button className="px-4 py-2 rounded-md bg-white mb-8">
                    Get Started Now
                  </button>
                </Link>
                <div className="pl-4 pr-4 md:pl-0 md:pr-0 relative">
                  <Image
                    src={img1}
                    alt="Logo"
                    width={1200}
                    height={1200}
                    className="header-logo w-full dark:hidden float-animation"
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="absolute -left-9 bottom-0 z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
