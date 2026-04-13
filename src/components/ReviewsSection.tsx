import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Ahmed K.", text: "Best sheesha in Bahria Town! The atmosphere is incredible and the staff is super friendly. We come here every weekend.", rating: 5 },
  { name: "Sarah M.", text: "Amazing food and vibes. The Crave Burger is a must-try. Love the neon ambiance and chill music.", rating: 5 },
  { name: "Usman R.", text: "Open 24 hours is a game changer. Perfect late night spot with premium hookah flavors. Highly recommended!", rating: 5 },
  { name: "Fatima A.", text: "Went for a birthday dinner. The service was top-notch and they made it special for us. Will definitely be back.", rating: 4 },
  { name: "Ali H.", text: "The grape mint sheesha is phenomenal. Great prices for the quality you get. Cozy seating arrangement.", rating: 5 },
  { name: "Zara T.", text: "One of the best lounges in Rawalpindi. Clean, stylish, and the food is genuinely delicious.", rating: 5 },
];

const ReviewsSection = () => {
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
    <section id="reviews" className="py-20 md:py-32 bg-surface" ref={ref}>
      <div className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-neon-purple-light text-sm tracking-[0.2em] uppercase mb-3 font-sans">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-foreground/70 text-lg">4.8 out of 5 · 314 reviews</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-semibold text-primary text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
