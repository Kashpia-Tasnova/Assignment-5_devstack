import { useState } from "react";
import logoText from "../../../assets/logo-text.png";
import bannerStack from "../../../assets/banner-stack.png";
function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
     { /* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="relative mx-auto flex h-[70px] max-w-[1200px] items-center px-5 lg:px-0">

          {/* ================= MOBILE HAMBURGER ================= */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex items-center justify-center md:hidden" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 text-gray-700" >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* ================= LOGO ================= */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" >
            <img src={logoText} alt="Dev Stack" className="w-[120px] md:w-[125px]"/>
          </a>

          {/* ================= DESKTOP NAV LINKS ================= */}
          <div className="mx-auto hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-[#e91e8f]">
             Home
            </a>

            <a href="#technologies" className="text-sm font-medium text-gray-500 transition hover:text-[#e91e8f]">
              Technologies
            </a>

            <a href="#projects" className="text-sm font-medium text-gray-500 transition hover:text-[#e91e8f]" >
              Projects
            </a>

            <a href="#about" className="text-sm font-medium text-gray-500 transition hover:text-[#e91e8f]">
              About
            </a>

            <a href="#contact" className="text-sm font-medium text-gray-500 transition hover:text-[#e91e8f]" >
              Contact
            </a>
          </div>

          {/* ================= AUTH BUTTONS ================= */}
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <button className="text-xs font-medium text-gray-600 transition hover:text-[#e91e8f] sm:text-sm">
              Sign In
            </button>

            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <a href="#home" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#e91e8f]">
                Home
              </a>

              <a href="#technologies" onClick={() => setMenuOpen(false)}  className="text-sm font-medium text-gray-600">
                Technologies
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-600">
                Projects
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-600">
                About
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-gray-600" >
                Contact
              </a>

            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-14 sm:py-16 lg:min-h-[520px] lg:flex-row lg:px-0 lg:py-16">

          {/* ================= HERO CONTENT ================= */}
          <div className="w-full lg:w-1/2">

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:text-[52px]">
              Build Your Ideal
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-[570px] text-sm leading-6 text-gray-500 sm:mt-6 sm:text-base sm:leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">

              <button className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-3 text-xs font-semibold text-white transition hover:opacity-90 sm:px-5 sm:text-sm">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-xs font-medium text-gray-600 transition hover:border-pink-300 hover:text-[#e91e8f] sm:px-7 sm:text-sm">
                Learn More
              </button>

            </div>
          </div>

          {/* ================= HERO Right Side IMAGE ================= */}
          <div className="mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2">
            <img src={bannerStack} alt="Development Stack"className="w-[280px] object-contain sm:w-[330px] lg:w-[390px]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;