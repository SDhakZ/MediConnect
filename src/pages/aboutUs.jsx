import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import photos from "./components/galleryData";
import { Gallery } from "react-grid-gallery";
import { Document, Page, pdfjs } from "react-pdf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Set worker path
const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow cursor-pointer outline-gray-200 outline -right-16 top-1/2 hover:bg-gray-100"
    onClick={onClick}
  >
    <svg width="24" height="24" fill="currentColor" className="text-black">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 p-2 transform -translate-y-1/2 bg-white rounded-full shadow cursor-pointer outline outline-gray-200 -left-16 top-1/2 hover:bg-gray-100"
    onClick={onClick}
  >
    <svg width="24" height="24" fill="currentColor" className="text-black">
      <path d="M15 6l-6 6 6 6" />
    </svg>
  </div>
);

export default function AboutUs() {
  const [index, setIndex] = useState(-1); // -1 = closed

  // If your images are in public/gallery folder
  const images = Array.from({ length: 29 }, (_, i) => {
    const src = `/gallery/image_${i + 1}.jpg`;
    return {
      src,
      width: 1200, // you can customize or detect actual image dimensions
      height: 800,
    };
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div data-lenis-prevent className="py-16 space-y-20 container-margin">
      {/* About Section */}
      <section className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-semibold md:text-4xl text-primary-black">
          About <span className="text-[#7dbe65]">MediConnect </span>Pokhara
        </h1>
        <p className="text-base leading-relaxed md:text-lg text-secondary-black">
          MediConnect Pokhara is a private-sector organization uniting
          hospitals, hotels, wellness centers, and adventure agencies to create
          Nepal’s first integrated medical tourism ecosystem. Backed by
          public-private partnerships and strict quality monitoring, we ensure
          every visitor receives safe, comfortable, and rewarding care.
        </p>
      </section>
      {/* PDF Brochure Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center md:text-3xl text-primary-black">
          View Our Brochure
        </h2>

        <div className="max-w-4xl mx-auto ">
          <Slider
            {...settings}
            className="max-w-4xl mx-auto"
            style={{ width: "100%", height: "auto" }}
          >
            {[1, 2].map((page) => (
              <div className="overflow-hidden rounded-lg shadow" key={page}>
                <img
                  src={`/brochure/mediwell/page_${page}.jpg`}
                  className="object-cover w-full h-auto shadow"
                  alt={`Brochure Page ${page}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="max-w-4xl px-4 py-10 mx-auto mt-10 space-y-4 text-center bg-gray-100 rounded-lg">
        <p className="max-w-2xl mx-auto text-base md:text-lg text-secondary-black">
          For a more in-depth look at our community stories and milestones,
          download our magazine below.
        </p>
        <div className="flex items-center justify-center mt-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1LtdE3rwit1cGlO4DEWGC_wPFlhfRzdaG"
            className="flex items-center justify-center px-6 py-3 font-medium text-white transition bg-green-600 rounded-full max-w-fit hover:bg-green-700"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} className="w-4 mr-2" size="lg" />{" "}
            Download Magazine
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="6">
        <h2 className="mt-16 mb-8 text-2xl font-semibold text-center md:text-3xl text-primary-black">
          Gallery
        </h2>
        <div className="section container-margin">
          <Gallery
            images={photos}
            onClick={(index) => setIndex(index)}
            enableImageSelection={false}
            rowHeight={200}
          />

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={photos} // ← use the correct photos array
            plugins={[Zoom]}
          />
        </div>
      </section>
    </div>
  );
}
