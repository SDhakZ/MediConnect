import React from "react";

export default function AboutNepal() {
  return (
    <section id="about-nepal" className="relative py-24">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src="/everest.jpg"
          alt="Nepal landscape"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl px-6 mx-auto text-center text-white">
        <h2 className="mb-16 text-3xl font-semibold md:text-5xl">
          About Nepal
        </h2>

        {/* Floating glass panels */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          <div className="p-6 transition shadow-lg backdrop-blur-md bg-white/10 rounded-2xl hover:bg-white/20">
            <img
              src="/heritage.webp"
              alt="World Heritage"
              className="object-cover w-full mb-4 h-44 rounded-xl"
            />
            <h3 className="mb-2 text-xl font-semibold">World Heritage Sites</h3>
            <p className="text-sm text-gray-200">
              Nepal hosts four UNESCO World Heritage Sites—two cultural
              (Kathmandu Valley and Lumbini) and two natural (Chitwan,
              Sagarmatha National Parks), showcasing rich heritage.
            </p>
          </div>

          <div className="p-6 transition shadow-lg backdrop-blur-md bg-white/10 rounded-2xl hover:bg-white/20">
            <img
              src="/topography.jpg"
              alt="Topography"
              className="object-cover w-full mb-4 h-44 rounded-xl"
            />
            <h3 className="mb-2 text-xl font-semibold">
              Topographical Diversity
            </h3>
            <p className="text-sm text-gray-200">
              Rising from ~60 m lowlands to 8,848 m Mount Everest, Nepal spans
              Terai plains, hills, and Himalayas within 150 km, offering a
              dramatic elevation variety.
            </p>
          </div>

          <div className="p-6 transition shadow-lg backdrop-blur-md bg-white/10 rounded-2xl hover:bg-white/20">
            <img
              src="/imgi_13_Credit-Maria-Tim_Rhododendron-Nepal_shutterstock_1176410941_CC-scaled-aspect-ratio-1920-1300.webp"
              alt="Healing Herbs"
              className="object-cover w-full mb-4 h-44 rounded-xl"
            />
            <h3 className="mb-2 text-xl font-semibold">Healing Herbs</h3>
            <p className="text-sm text-gray-200">
              Nepal’s diverse flora includes over 5,000 angiosperms, some
              endemic medicinal plants like rhododendron and orchids used in
              traditional healing practices.
            </p>
          </div>
        </div>

        {/* Minimal text highlights */}
        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          <div className="p-6 transition shadow-lg backdrop-blur-md bg-white/10 rounded-2xl hover:bg-white/20">
            <img
              src="/biodiversity.webp"
              alt="Healing Herbs"
              className="object-cover w-full mb-4 h-44 rounded-xl"
            />
            <h3 className="mb-2 text-xl font-semibold">
              Culture & Biodiversity
            </h3>
            <p className="text-sm text-gray-200">
              Nepal is part of the eastern Himalayan biodiversity hotspot—home
              to 4% of mammals, 8.9% of birds, and rich cultural heritage across
              125 ethnic groups.
            </p>
          </div>
          <div className="p-6 transition shadow-lg backdrop-blur-md bg-white/10 rounded-2xl hover:bg-white/20">
            <img
              src="/weatherVariation.webp"
              alt="Healing Herbs"
              className="object-cover w-full mb-4 h-44 rounded-xl"
            />
            <h3 className="mb-2 text-xl font-semibold">Weather variation</h3>
            <p className="text-sm text-gray-200">
              In less than 200 km, Nepal transitions from tropical Terai heat to
              alpine cold, creating climates from subtropical to polar, rich in
              seasonal and spatial diversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
