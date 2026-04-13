import { Star, Clock, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Crave Lounge ambiance" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-neon-purple-light text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in font-sans">
          Sheesha Cafe & Restaurant
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary text-glow-gold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Crave Lounge
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-light mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Relax. Smoke. Dine.
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2 text-foreground/70">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium">4.8 <span className="text-muted-foreground">(314 reviews)</span></span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Rs 2,000 – 3,000</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Open 24 Hours</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <a href="#menu" className="px-8 py-3 rounded-lg gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity box-glow-gold">
            View Menu
          </a>
          <a href="#contact" className="px-8 py-3 rounded-lg gradient-purple text-secondary-foreground font-semibold hover:opacity-90 transition-opacity box-glow-purple">
            Book Table
          </a>
          <a href="tel:+923134909020" className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
