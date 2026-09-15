import logoText from "../../../assets/logo-text.png";
import bannerStack from "../../../assets/banner-stack.png";
function Hero() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5">

          {/* Logo */}
          <a href="#">
           <img src={logoText} alt="Dev Stack"className="w-[125px]"/>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-[#e91e8f]"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-[#e91e8f]"
            >
              Technologies
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-[#e91e8f]"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-[#e91e8f]"
            >
              About
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-[#e91e8f]"
            >
              Contact
            </a>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center gap-4">
            <button className="hidden text-sm font-medium text-gray-600 sm:block">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto flex min-h-[520px] max-w-[1200px] items-center px-5 py-16">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-[52px]">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-[570px] text-base leading-7 text-gray-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-3">

              <button className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-200 px-7 py-3 text-sm font-medium text-gray-600">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="hidden w-1/2 justify-center lg:flex">
           <img src={bannerStack} alt="Development Stack" className="w-[390px]"/>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;