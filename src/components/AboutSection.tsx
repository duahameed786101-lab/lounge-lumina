import { useEffect, useRef, useState } from "react";
import sheeshaImg from "@/assets/sheesha.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={sheeshaImg} alt="Premium sheesha" loading="lazy" width={800} height={800} className="rounded-2xl w-full object-cover aspect-square box-glow-purple" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-gold opacity-20 blur-2xl" />
          </div>
          <div>
            <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              Where Flavors Meet Vibes
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Nestled in the heart of Bahria Town Civic Center, Crave Lounge is Rawalpindi's premier sheesha destination. 
              We blend premium hookah flavors with delectable cuisine in an atmosphere that defines luxury nightlife. 
              Our friendly staff ensures every visit is unforgettable.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50+", label: "Flavors" },
                { value: "24/7", label: "Open" },
                { value: "4.8★", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-surface-light border border-border">
                  <p className="text-2xl font-bold text-primary font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
