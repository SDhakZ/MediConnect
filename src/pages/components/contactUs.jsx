import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { services } from "../../data/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const sectorOptions = Object.entries(services);
const getServiceOptions = (sector) =>
  services[sector]?.items.map((item) => item.title) || [];

export default function ContactUs({ category }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: category || "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    success: true,
  });

  const sitekey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recaptchaRef = useRef(null);

  useEffect(() => {
    if (category && !formData.sector) {
      setFormData((prev) => ({ ...prev, sector: category }));
    }
  }, [category, formData.sector]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "sector" && value === "other" && { service: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();

    if (recaptchaRef.current) {
      setStatus("loading");
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setStatus("idle");
        return;
      }

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            sector: services[formData.sector]?.title || formData.sector,
            service: formData.service,
            "g-recaptcha-response": token,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          sector: "",
          service: "",
        });

        setModalContent({
          title: "Message Sent!",
          message:
            "Your message has been successfully submitted. We'll contact you soon.",
          success: true,
        });
        setShowModal(true);

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } catch (error) {
        console.error("EmailJS error:", error);
        setModalContent({
          title: "Submission Failed",
          message:
            "Something went wrong while sending your message. Please try again later.",
          success: false,
        });
        setShowModal(true);
        setStatus("idle");
      }
    }
  };

  return (
    <section className="px-4 py-12 container-margin">
      <h2 className="mb-16 text-4xl font-semibold text-center text-primary-black">
        Contact Us
      </h2>

      <div>
        <label className="block mb-4">
          <span className="text-2xl font-semibold text-secondary-black">
            Send us your queries
          </span>
        </label>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md focus:outline-none"
            />
            <div className="relative">
              <select
                name="sector"
                required
                value={formData.sector}
                onChange={handleChange}
                className="w-full cursor-pointer px-4 py-3 pr-10 border-2 border-[#76776f] rounded-md focus:outline-none appearance-none bg-white"
              >
                <option value="" disabled>
                  Select Sector
                </option>
                {sectorOptions.map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.title}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 flex items-center text-gray-600 pointer-events-none right-3">
                <FontAwesomeIcon className="w-4 h-4" icon={faChevronDown} />
              </div>
            </div>

            {formData.sector !== "other" && (
              <div className="relative">
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  disabled={!formData.sector}
                  className={`w-full ${
                    formData.sector ? "cursor-pointer" : "cursor-not-allowed"
                  } px-4 py-3 pr-10 border-2 border-[#76776f] rounded-md appearance-none bg-white`}
                >
                  <option value="" disabled>
                    {formData.sector ? "Select Service" : "Choose sector first"}
                  </option>
                  {getServiceOptions(formData.sector).map((serviceTitle) => (
                    <option key={serviceTitle} value={serviceTitle}>
                      {serviceTitle}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 flex items-center text-gray-600 pointer-events-none right-3">
                  <FontAwesomeIcon className="w-4 h-4" icon={faChevronDown} />
                </div>
              </div>
            )}

            <textarea
              placeholder="Message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-[#76776f] rounded-md resize-none"
            />

            <button
              type="submit"
              className="px-12 py-3 font-medium text-white transition-all bg-green-600 rounded-full md:hidden hover:bg-green-700"
            >
              Submit
            </button>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`hidden px-12 py-3 mr-6 font-medium rounded-full transition-all md:hidden ${
                status === "success"
                  ? "bg-green-700 text-white"
                  : "bg-[#6d976f] hover:bg-green-700 text-white"
              } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "Sent!"}
              {status === "idle" && "Submit"}
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
              <span className="font-semibold">Phone:</span> +977 061 453104
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
            <p className="font-medium text-secondary-black">
              <span className="font-semibold">Phone:</span> +977 014 370576
            </p>
          </div>
        </div>

        <div className="flex items-center mt-5">
          <button
            form="contact-form"
            type="submit"
            disabled={status === "loading"}
            className={`hidden px-12 py-3 mr-6 font-medium rounded-full md:flex transition-all ${
              status === "success"
                ? "bg-green-700 text-white"
                : "bg-[#6d9761] hover:bg-green-700 text-white"
            } ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status === "loading" && "Sending..."}
            {status === "success" && "Sent!"}
            {status === "idle" && "Submit"}
          </button>

          <ReCAPTCHA
            style={{ display: "hidden" }}
            ref={recaptchaRef}
            sitekey={sitekey}
            size="invisible"
            badge="bottomright"
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-w-sm p-6 text-center bg-white rounded-lg shadow-xl">
            <h3
              className={`text-xl font-semibold mb-2 ${
                modalContent.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalContent.title}
            </h3>
            <p className="mb-4 text-gray-700">{modalContent.message}</p>
            <button
              onClick={() => setShowModal(false)}
              className={`px-5 py-2 rounded-md font-medium text-white ${
                modalContent.success ? "bg-green-600" : "bg-red-600"
              } hover:opacity-90`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
