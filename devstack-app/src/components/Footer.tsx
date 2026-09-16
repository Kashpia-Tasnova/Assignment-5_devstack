import logoText from "../../../assets/logo-text.png";

function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1200px] px-5 py-12 lg:px-0 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr]">

          <div>
            <a href="#home" className="inline-block">
              <img src={logoText} alt="Dev Stack" className="w-[125px]"/>
            </a>

            <p className="mt-4 max-w-[450px] text-sm leading-6 text-gray-500">
              Curated tools,technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a href="#" className="text-sm font-semibold text-gray-500 transition hover:text-[#e91e8f]">
                Github
              </a>

              <a href="#"className="text-sm font-semibold text-gray-500 transition hover:text-[#e91e8f]">
                Twitter
              </a>
              <a href="#" className="text-sm font-semibold text-gray-500 transition hover:text-[#e91e8f]" >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]" >
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]" >
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]" >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#"className="text-sm text-gray-500 transition hover:text-[#e91e8f]"  >
                  About
                </a>
              </li>
            
              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]"  >
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]"  >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]"  >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 transition hover:text-[#e91e8f]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row lg:px-0">
          <p className="text-xs text-gray-400 sm:text-sm">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-gray-400 transition hover:text-[#e91e8f] sm:text-sm" >
              Privacy
            </a>

            <a href="#" className="text-xs text-gray-400 transition hover:text-[#e91e8f] sm:text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;