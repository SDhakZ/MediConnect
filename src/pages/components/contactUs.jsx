export default function ContactUs() {
  return (
    <section className="px-4 py-12 container-margin">
      <h2 className="mb-16 text-5xl md:text-[64px] font-semibold text-center text-primary-black">
        Contact Us
      </h2>

      <div>
        {/* Left: Form */}
        <label className="block mb-4">
          <span className="text-2xl font-semibold text-secondary-black">
            Send us your queries
          </span>
        </label>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <form className="w-full max-w-lg space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md resize-none focus:outline-none"
            />
            <button
              type="submit"
              className="px-12 py-3 font-medium text-white transition-all bg-green-600 rounded-full md:hidden hover:bg-green-700"
            >
              Submit
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="bg-[#E1EBDD] rounded-xl p-6 mt-8 md:mt-0 text-sm leading-relaxed">
            <h4 className="mb-2 font-semibold text-[20px] text-primary-black">
              MediConnect Pokhara
            </h4>
            <p className="mb-4 font-medium text-secondary-black">
              <span className="font-semibold">Address:</span> 9th Street
              Lakeside, Pokhara
              <br />
              <span className="font-semibold">Phone:</span> +977 061 419116
            </p>

            <h4 className="mb-2 font-semibold text-[20px] text-primary-black">
              Contacts
            </h4>
            <p className="mb-4 font-medium text-secondary-black">
              <span className="font-semibold">
                Bishnu P. Bhusal (Chairman):
              </span>{" "}
              980-1370007
              <br />
              <span className="font-semibold">
                Dr. Girdhari Sharma (Executive Director):
              </span>{" "}
              9856028104
            </p>

            <h4 className="mb-2 font-semibold text-[20px] text-primary-black">
              Kathmandu Office
            </h4>
            <p className="font-medium text-secondary-black">
              <span className="font-semibold">Address:</span> Galfutar,
              Budhanilkantha 6, Kathmandu
            </p>
          </div>
        </div>{" "}
        <button
          type="submit"
          className="hidden px-12 py-3 mt-2 font-medium text-white transition-all bg-[#6d9761] rounded-full md:flex hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </section>
  );
}
