export default function Footer() {
  return (
    <footer className="relative flex justify-center w-full mx-auto">
      <div className="bg-[#dce9d7] w-full max-w-screen-2xl py-12 mb-10 rounded-3xl mt-20">
        <div className="grid gap-10 mx-auto text-sm container-margin md:grid-cols-3 text-primary-black">
          {/* Column 1: Brand */}
          {/* <div>
            <h4 className="mb-2 text-2xl font-semibold">MediConnect</h4>
            <p className="text-base text-secondary-blackc">
              Pokhara Brand of Medical/
              <br />
              Wellness Tourism
            </p>
          </div> */}

          {/* Column 2: Navigation */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Sections</h4>
            <ul className="space-y-3 text-base font-medium text-secondary-black">
              <li>
                <a href="/landing/#hero" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/landing/#why-nepal" className="hover:underline">
                  Why Nepal?
                </a>
              </li>

              <li>
                <a href="/landing/#why-mediconnect" className="hover:underline">
                  Why MediConnect?
                </a>
              </li>
              <li>
                <a href="/landing/#commitment" className="hover:underline">
                  Our Commitment
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/landing/#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Services we provide</h4>
            <ul className="space-y-3 text-base font-medium text-secondary-black">
              <li>
                <a href="/services/#hospitals" className="hover:underline">
                  Hospitals & Health Services
                </a>
              </li>
              <li>
                <a href="/services/#hotels" className="hover:underline">
                  Hotels & Hospitality
                </a>
              </li>

              <li>
                <a href="/services/#healing" className="hover:underline">
                  Wellness & Healing Centers
                </a>
              </li>
              <li>
                <a href="/services/#adventure" className="hover:underline">
                  Adventure Tourism
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="space-y-4">
            <div>
              <h4 className="mb-1 text-lg font-semibold text-primary-black">
                MediConnect Pokhara
              </h4>
              <p className="mb-4 font-medium text-secondary-black">
                <span className="font-semibold">Address:</span> 9th Street
                Lakeside, Pokhara
                <br />
                <span className="font-semibold">Phone:</span> +977 061 419116
              </p>

              <h4 className="mb-1 text-lg font-semibold text-primary-black">
                Contacts
              </h4>
              <p className="mb-4 font-medium text-secondary-black">
                <span className="font-semibold">
                  Bishnu P. Bhusal (Chairman):
                </span>{" "}
                +977 9801370007
                <br />
                <span className="font-semibold">
                  Dr. Girdhari Sharma (Executive Director):
                </span>{" "}
                +977 9856028104
              </p>
              <h4 className="mb-1 text-lg font-semibold text-primary-black">
                Kathmandu Office
              </h4>
              <p className="font-medium text-secondary-black">
                <span className="font-semibold">Address:</span> Galfutar,
                Budhanilkantha 6, Kathmandu
              </p>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="pt-4 mx-auto mt-8 text-xs text-center text-gray-700 border-t border-gray-400 max-w-7xl">
          © 2025 MediConnect Pokhara. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
