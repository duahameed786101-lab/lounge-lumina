import { UtensilsCrossed, Car, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dine-In",
    desc: "Relax in our premium lounge with comfortable seating and ambient lighting.",
  },
  {
    icon: Car,
    title: "Curbside Pickup",
    desc: "Order ahead and pick up your favorites without leaving your car.",
  },
  {
    icon: Truck,
    title: "Delivery",
    desc: "Enjoy our delicious food delivered fresh to your doorstep.",
  },
];

const ServicesSection = () => {
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
    <section className="py-20 md:py-32" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Services</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
            How We Serve You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:box-glow-gold transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6 group-hover:animate-float">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
