import { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import sheesha from "@/assets/sheesha.jpg";
import drinks from "@/assets/drinks.jpg";

const images = [
  { src: gallery1, alt: "Lounge interior" },
  { src: food1, alt: "Gourmet burger" },
  { src: sheesha, alt: "Premium sheesha" },
  { src: gallery2, alt: "Friends at Crave Lounge" },
  { src: drinks, alt: "Refreshing drinks" },
  { src: food2, alt: "Grilled steak" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-32" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            Experience the Vibe
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group ${i === 0 || i === 3 ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 min-h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
