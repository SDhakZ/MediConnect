const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const GalleryData = [
  { src: "/gallery/image_1.jpg", width: 1280, height: 1280 },
  { src: "/gallery/image_2.jpg", width: 1280, height: 1280 },
  { src: "/gallery/image_3.jpg", width: 1280, height: 1280 },
  { src: "/gallery/image_4.jpg", width: 1600, height: 901 },
  { src: "/gallery/image_5.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_6.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_7.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_8.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_9.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_10.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_11.jpg", width: 1156, height: 651 },
  { src: "/gallery/image_12.jpg", width: 1256, height: 1600 },
  { src: "/gallery/image_13.jpg", width: 1600, height: 901 },
  { src: "/gallery/image_14.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_15.jpg", width: 940, height: 788 },
  { src: "/gallery/image_16.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_17.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_18.jpg", width: 1600, height: 1200 },
  { src: "/gallery/image_19.jpg", width: 1600, height: 1200 },
  { src: "/gallery/image_20.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_21.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_22.jpg", width: 1600, height: 1200 },
  { src: "/gallery/image_23.jpg", width: 1600, height: 1200 },
  { src: "/gallery/image_24.jpg", width: 1600, height: 1200 },
  { src: "/gallery/image_25.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_26.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_27.jpg", width: 1280, height: 960 },
  { src: "/gallery/image_28.jpg", width: 1280, height: 1066 },
  { src: "/gallery/image_29.jpg", width: 1600, height: 1200 },
];

const photos = GalleryData.map((photo) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: `Image ${photo.id}`,
    srcSet: breakpoints.map((breakpoint) => {
      const scaledHeight = Math.round(
        (photo.height / photo.width) * breakpoint
      );
      return {
        src: photo.src,
        width: breakpoint,
        height: scaledHeight,
      };
    }),
  };
});

export default photos;
